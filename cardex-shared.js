/* ============================================================
   CARDEX-tracking — módulo compartido
   Datos en vivo desde Supabase, gate de contraseña, menú hamburguesa,
   y funciones para añadir / editar / mover cartas entre Holding,
   Watchlist y Sold directamente desde la web.
   Proyecto Supabase: Cardex tracking (fsmuhcvmifvyvjjpmtdx)
   ============================================================ */
(function () {
  const SUPABASE_URL = "https://fsmuhcvmifvyvjjpmtdx.supabase.co";
  const SUPABASE_KEY = "sb_publishable_WJTVFkd8c12jW6VJOwXcQQ_0XBkU_Bn";
  // Nota de seguridad: esta contraseña es solo un filtro en el navegador para
  // evitar toques accidentales o de curiosos. No es autenticación real: cualquiera
  // que vea el código fuente de la web puede leerla. No la reutilices en ningún
  // sitio que maneje datos sensibles.
  const APP_PASSWORD = "2491";

  const baseHeaders = {
    "apikey": SUPABASE_KEY,
    "Authorization": "Bearer " + SUPABASE_KEY
  };
  const writeHeaders = Object.assign({ "Content-Type": "application/json" }, baseHeaders);

  function mapRow(row) {
    return {
      id: row.card_number || row.id,
      dbId: row.id,
      name: row.card_name,
      set: row.set,
      rarity: row.rarity,
      condition: row.condition,
      status: row.status,
      qty: row.quantity != null ? Number(row.quantity) : 1,
      buyPrice: row.buy_price === null ? 0 : Number(row.buy_price),
      currentPrice: row.current_price === null ? 0 : Number(row.current_price),
      image: row.card_image || "",
      cardNumber: row.card_number,
      cardmarketUrl: row.cardmarket_url,
      buyDate: row.buy_date,
      priceHistory: row.price_history || [],
      sellPrice: row.sell_price === null ? null : Number(row.sell_price),
      sellDate: row.sell_date,
      trackingCode: row.tracking_code,
      trackingAdded: row.tracking_added,
      excludeFromCap: row.exclude_from_cap === true,
      watchlistName: row.watchlist_name || 'General',
      comment: row.comment || ''
    };
  }

  function loadData() {
    return Promise.all([
      fetch(SUPABASE_URL + "/rest/v1/riftbound_inversiones?select=*", { headers: baseHeaders })
        .then(function (r) { if (!r.ok) throw new Error("Supabase fetch failed: " + r.status); return r.json(); }),
      fetch(SUPABASE_URL + "/rest/v1/riftbound_gastos?select=id,item_name,category,price,purchase_date&order=purchase_date", { headers: baseHeaders })
        .then(function (r) { return r.ok ? r.json() : []; }).catch(function () { return []; }),
      fetch(SUPABASE_URL + "/rest/v1/riftbound_retiros?select=*&order=withdrawal_date.desc", { headers: baseHeaders })
        .then(function (r) { return r.ok ? r.json() : []; }).catch(function () { return []; }),
      fetch(SUPABASE_URL + "/rest/v1/riftbound_watchlists?select=*&order=sort_order.asc.nullslast,created_at.asc", { headers: baseHeaders })
        .then(function (r) { return r.ok ? r.json() : []; }).catch(function () { return []; })
    ]).then(function (results) {
      const rows = results[0];
      const gastos = results[1] || [];
      const retiros = results[2] || [];
      const watchlistRows = results[3] || [];
      const suppliesTotal = gastos.reduce(function (s, g) { return s + Number(g.price || 0); }, 0);
      const cards = rows.map(mapRow);
      const updatedAt = rows.reduce(function (max, row) {
        const u = row.updated_at ? row.updated_at.slice(0, 10) : null;
        return (u && (!max || u > max)) ? u : max;
      }, null);
      const retirosTotal = retiros.reduce(function (s, r) { return s + Number(r.amount || 0); }, 0);
      // Nombres de watchlist: los que existan como fila propia (en el orden guardado en
      // sort_order) + cualquiera que aparezca ya en una carta pero no tenga fila propia
      // (se añade al final) + "General" siempre presente y siempre primero.
      const orderedNames = watchlistRows.map(function (w) { return w.name; }).filter(function (n) { return n !== 'General'; });
      const seen = {}; orderedNames.forEach(function (n) { seen[n] = true; });
      cards.forEach(function (c) {
        if (c.status === 'Watchlist') {
          const n = c.watchlistName || 'General';
          if (n !== 'General' && !seen[n]) { seen[n] = true; orderedNames.push(n); }
        }
      });
      const watchlists = ['General'].concat(orderedNames);
      window.portfolioData = {
        updatedAt: updatedAt || new Date().toISOString().slice(0, 10),
        cards: cards, gastos: gastos, suppliesTotal: suppliesTotal,
        retiros: retiros, retirosTotal: retirosTotal,
        watchlists: watchlists
      };
      return window.portfolioData;
    }).catch(function (err) {
      console.error("Error cargando datos de Supabase:", err);
      window.portfolioData = { updatedAt: null, cards: [], gastos: [], suppliesTotal: 0, retiros: [], retirosTotal: 0, watchlists: ['General'] };
      return window.portfolioData;
    });
  }

  window.__portfolioDataPromise = loadData();
  window.CardexReload = function () { window.__portfolioDataPromise = loadData(); return window.__portfolioDataPromise; };

  // ---------- AUTH GATE (protección básica en el navegador) ----------
  function isUnlocked() { return sessionStorage.getItem('cardex_unlocked') === '1'; }
  function requirePassword(cb) {
    if (isUnlocked()) { cb(); return; }
    const pw = window.prompt('Enter the password to add/edit/move cards:');
    if (pw === null) return;
    if (pw === APP_PASSWORD) { sessionStorage.setItem('cardex_unlocked', '1'); cb(); }
    else window.alert('Incorrect password.');
  }

  // ---------- CRUD contra Supabase (REST) ----------
  function insertCard(fields) {
    return fetch(SUPABASE_URL + "/rest/v1/riftbound_inversiones", {
      method: "POST",
      headers: Object.assign({ "Prefer": "return=representation" }, writeHeaders),
      body: JSON.stringify(fields)
    }).then(function (r) { if (!r.ok) return r.text().then(function(t){throw new Error(t);}); return r.json(); });
  }
  function updateCard(dbId, patch) {
    return fetch(SUPABASE_URL + "/rest/v1/riftbound_inversiones?id=eq." + encodeURIComponent(dbId), {
      method: "PATCH",
      headers: Object.assign({ "Prefer": "return=representation" }, writeHeaders),
      body: JSON.stringify(patch)
    }).then(function (r) { if (!r.ok) return r.text().then(function(t){throw new Error(t);}); return r.json(); });
  }
  function deleteCard(dbId) {
    return fetch(SUPABASE_URL + "/rest/v1/riftbound_inversiones?id=eq." + encodeURIComponent(dbId), {
      method: "DELETE",
      headers: writeHeaders
    }).then(function (r) { if (!r.ok) return r.text().then(function(t){throw new Error(t);}); return true; });
  }
  // ---------- Operaciones en bloque (multiselect) ----------
  function idsFilter(dbIds) {
    // PostgREST: id=in.(a,b,c) - los UUID no necesitan comillas
    return "id=in.(" + dbIds.map(encodeURIComponent).join(",") + ")";
  }
  function bulkUpdateCards(dbIds, patch) {
    if (!dbIds.length) return Promise.resolve([]);
    return fetch(SUPABASE_URL + "/rest/v1/riftbound_inversiones?" + idsFilter(dbIds), {
      method: "PATCH",
      headers: Object.assign({ "Prefer": "return=representation" }, writeHeaders),
      body: JSON.stringify(patch)
    }).then(function (r) { if (!r.ok) return r.text().then(function(t){throw new Error(t);}); return r.json(); });
  }
  function bulkDeleteCards(dbIds) {
    if (!dbIds.length) return Promise.resolve(true);
    return fetch(SUPABASE_URL + "/rest/v1/riftbound_inversiones?" + idsFilter(dbIds), {
      method: "DELETE",
      headers: writeHeaders
    }).then(function (r) { if (!r.ok) return r.text().then(function(t){throw new Error(t);}); return true; });
  }

  function insertWatchlist(name) {
    return fetch(SUPABASE_URL + "/rest/v1/riftbound_watchlists", {
      method: "POST",
      headers: Object.assign({ "Prefer": "return=representation" }, writeHeaders),
      body: JSON.stringify({ name: name })
    }).then(function (r) { if (!r.ok) return r.text().then(function(t){throw new Error(t);}); return r.json(); });
  }
  function deleteWatchlist(name) {
    return fetch(SUPABASE_URL + "/rest/v1/riftbound_watchlists?name=eq." + encodeURIComponent(name), {
      method: "DELETE",
      headers: writeHeaders
    }).then(function (r) { if (!r.ok) return r.text().then(function(t){throw new Error(t);}); return true; });
  }
  // Guarda el nuevo orden tras arrastrar una pestaña de watchlist. "General" nunca se
  // reordena (siempre va justo después de "All", que ni siquiera es una watchlist real).
  function reorderWatchlists(orderedNames) {
    const toSave = orderedNames.filter(function (n) { return n !== 'General' && n !== 'All'; });
    return Promise.all(toSave.map(function (name, idx) {
      return fetch(SUPABASE_URL + "/rest/v1/riftbound_watchlists?name=eq." + encodeURIComponent(name), {
        method: "PATCH",
        headers: writeHeaders,
        body: JSON.stringify({ sort_order: idx + 1 })
      });
    }));
  }
  // Color determinista por nombre de watchlist - la misma lista siempre sale del mismo
  // color, sin guardar nada en Supabase ni depender de que alguien elija uno a mano.
  const WATCHLIST_PALETTE = ['#c99a3c', '#5aa9e6', '#e07a5f', '#81b29a', '#b185db', '#e8927c', '#6fb3b8', '#d4a5a5', '#9db4c0', '#c9ada7'];
  function watchlistColor(name) {
    if (!name || name === 'General') return 'var(--gold)';
    if (name === 'All') return 'var(--text)';
    let hash = 0;
    for (let i = 0; i < name.length; i++) { hash = (hash * 31 + name.charCodeAt(i)) >>> 0; }
    return WATCHLIST_PALETTE[hash % WATCHLIST_PALETTE.length];
  }
  window.CardexWatchlistColor = watchlistColor;

  function insertRetiro(fields) {
    return fetch(SUPABASE_URL + "/rest/v1/riftbound_retiros", {
      method: "POST",
      headers: Object.assign({ "Prefer": "return=representation" }, writeHeaders),
      body: JSON.stringify(fields)
    }).then(function (r) { if (!r.ok) return r.text().then(function(t){throw new Error(t);}); return r.json(); });
  }
  function deleteRetiro(id) {
    return fetch(SUPABASE_URL + "/rest/v1/riftbound_retiros?id=eq." + encodeURIComponent(id), {
      method: "DELETE",
      headers: writeHeaders
    }).then(function (r) { if (!r.ok) return r.text().then(function(t){throw new Error(t);}); return true; });
  }

  // ---------- Autocompletado de imagen a partir del Card Number ----------
  // dotgg.gg indexa por número de carta, pero las VARIANTES (Overnumbered,
  // Signature, alt art) llevan un sufijo de letra en el nombre del fichero
  // (p. ej. 303s = signature, 246b = alt art). La versión anterior de este
  // código sólo probaba el número pelado, así que fallaba en toda variante.
  // Ahora probamos una matriz de candidatos y nos quedamos con el primero que
  // exista, priorizando el sufijo más probable según la rareza de la carta.
  //
  // El prefijo de set (p. ej. "OGN-") no se adivina: se APRENDE de las cartas
  // del mismo set que ya tienen imagen de dotgg guardada. Así el patrón se
  // ajusta solo a cada set nuevo sin tocar el código.
  const DOTGG_BASE = 'https://static.dotgg.gg/riftbound/cards/';

  function learnPrefixesBySet(cards) {
    const map = {};
    (cards || []).forEach(function (c) {
      if (!c.image || c.image.indexOf(DOTGG_BASE) !== 0) return;
      const file = c.image.slice(DOTGG_BASE.length).replace(/\.webp$/i, '');
      const m = file.match(/^(.*?)(\d{1,4})[a-z]?$/i);   // "OGN-303s" -> prefijo "OGN-"
      if (!m) return;
      const key = (c.set || '').trim();
      if (!map[key]) map[key] = {};
      map[key][m[1]] = (map[key][m[1]] || 0) + 1;
    });
    // nos quedamos con el prefijo más frecuente de cada set
    const best = {};
    Object.keys(map).forEach(function (setName) {
      best[setName] = Object.keys(map[setName]).sort(function (a, b) {
        return map[setName][b] - map[setName][a];
      })[0];
    });
    return best;
  }

  function suffixOrderFor(card) {
    const r = (card.rarity || '').toLowerCase();
    const n = (card.name || '').toLowerCase();
    // Signature / firmadas -> "s" primero
    if (r.indexOf('signature') !== -1 || n.indexOf('signed') !== -1) return ['s', 'b', 'a', '', 'c'];
    // Overnumbered / Showcase / alt art -> letras primero
    if (r.indexOf('overnumbered') !== -1 || r.indexOf('plated') !== -1 ||
        n.indexOf('showcase') !== -1 || n.indexOf('alt') !== -1) return ['b', 'a', 's', 'c', ''];
    // resto: número pelado primero
    return ['', 'b', 'a', 's', 'c'];
  }

  function candidateImageUrls(card, prefixBySet) {
    const raw = String(card.cardNumber == null ? '' : card.cardNumber).trim();
    if (!raw) return [];
    // En la base de datos conviven DOS formatos de card_number:
    //  - simple:    "OGN-237", "237", "046a"          (numero, con o sin prefijo/sufijo)
    //  - con total: "OGN-299-298", "VEN-139-166"       (numero + total de cartas del set,
    //                                                    formato que usa riftcodex)
    // La regex anterior cogia SIEMPRE el ultimo grupo de digitos como "el numero", así que en
    // formato "con total" cogia el TOTAL (298) en vez del numero real (299) - eso fue lo que
    // paso con Kai'Sa: busco la carta "298" en vez de la "299" y encontro una completamente
    // distinta. Probamos primero el patron "con total" (mas especifico) y si no encaja, el simple.
    const withTotal = raw.match(/^([A-Za-z]*-?)(\d{1,4}[a-z]?)-\d{2,4}$/i);
    const simple = raw.match(/^([A-Za-z]*-?)(\d{1,4}[a-z]?)$/i);
    const m = withTotal || simple;
    if (!m) return [];
    const ownPrefix = m[1] || '';
    const digitsMatch = m[2].match(/^(\d{1,4})([a-z]?)$/i);
    if (!digitsMatch) return [];
    const digits = digitsMatch[1];
    const ownSuffix = (digitsMatch[2] || '').toLowerCase();
    const padded = digits.length < 3 ? ('000' + digits).slice(-3) : digits;

    const learned = (prefixBySet && prefixBySet[(card.set || '').trim()]) || '';
    // prefijos a probar, sin duplicados y en orden de confianza
    const prefixes = [];
    [ownPrefix, learned, ''].forEach(function (p) {
      if (p && prefixes.indexOf(p) === -1) prefixes.push(p);
    });
    if (prefixes.indexOf('') === -1) prefixes.push('');   // el número pelado, siempre el último recurso
    // si el propio número ya traía sufijo, ése manda
    const suffixes = ownSuffix ? [ownSuffix].concat(suffixOrderFor(card)) : suffixOrderFor(card);

    const urls = [];
    prefixes.forEach(function (p) {
      suffixes.forEach(function (sfx) {
        [padded, digits].forEach(function (num) {
          const u = DOTGG_BASE + p + num + sfx + '.webp';
          if (urls.indexOf(u) === -1) urls.push(u);
        });
      });
    });
    return urls;
  }

  function probeImage(url) {
    return new Promise(function (resolve) {
      const img = new Image();
      let done = false;
      const finish = function (result) { if (!done) { done = true; resolve(result); } };
      img.onload = function () { finish(img.naturalWidth > 1 ? url : null); };
      img.onerror = function () { finish(null); };
      setTimeout(function () { finish(null); }, 8000);
      img.src = url;
    });
  }

  // Lanzamos todos los candidatos a la vez (son peticiones de imagen, baratas)
  // y nos quedamos con el primero que exista SEGÚN EL ORDEN DE PRIORIDAD,
  // no según cuál conteste antes.
  function resolveImageForCard(card, prefixBySet) {
    const candidates = candidateImageUrls(card, prefixBySet);
    if (!candidates.length) return Promise.resolve(null);
    return Promise.all(candidates.map(probeImage)).then(function (results) {
      for (let i = 0; i < results.length; i++) { if (results[i]) return results[i]; }
      return null;
    });
  }

  // ---------- FUENTE PRIMARIA: riftcodex.com - API abierta, hecha para esto ----------
  // A diferencia de riftdecks (una web normal, sin CORS para lectura externa - lo comprobamos
  // y bloqueó todas las peticiones), riftcodex.com es una API publica pensada explicitamente
  // para que otras apps la consulten ("No authentication is required for read operations").
  // Devuelve en un solo JSON: numero de carta (riftbound_id), el SET REAL de impresion,
  // imagen, y si la carta es Overnumbered/Signature/Alt Art - justo lo que hace falta para
  // elegir la variante correcta cuando el nombre guardado dice "V3 Signed Showcase" etc.
  //
  // Tampoco esto está 100% verificado en vivo por el motivo de siempre (no hay navegador real
  // disponible ahora mismo para probarlo) - pero es una API construida a proposito para esto,
  // así que es la apuesta con más probabilidad de funcionar sin CORS. Si falla, cae a riftdecks
  // y luego a dotgg por numero, sin romper nada.
  function riftcodexVariantWanted(cardName) {
    const n = (cardName || '').toLowerCase();
    return {
      signature: /signature|signed/.test(n),
      overnumbered: /overnumber|showcase/.test(n),
      alternate_art: /alt art|alternate/.test(n)
    };
  }

  // Palabras que se ignoran al comparar nombres - ni identifican la carta ni el campeón
  const NAME_STOPWORDS = ['v1', 'v2', 'v3', 'the', 'of', 'showcase', 'signed', 'signature',
    'overnumbered', 'overnumber', 'alt', 'art', 'alternate', 'promo', 'promos'];

  function coreNameTokens(name) {
    return String(name || '')
      .toLowerCase()
      .replace(/['']/g, '')          // "Kai'Sa" y "KaiSa" deben tokenizar igual - sin esto se partían en dos palabras que nunca coincidían
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(function (w) { return w.length >= 3 && NAME_STOPWORDS.indexOf(w) === -1; });
  }

  // Comprueba que el resultado encontrado sea REALMENTE la carta buscada, no otra carta
  // cualquiera que por casualidad tuviera el mismo tipo de variante (esto es lo que causó
  // que "Riven Shattered V2 Showcase" se guardara con los datos de "Morgana Vindictive" -
  // el filtro por variante (Showcase/Signature) coincidía, pero nunca se comprobó el nombre).
  function namesLikelyMatch(inputName, candidateName) {
    const inputTokens = coreNameTokens(inputName);
    const candTokens = coreNameTokens(candidateName);
    if (!inputTokens.length || !candTokens.length) return false;
    // ANTES bastaba con que UNA palabra coincidiera ("some") - así "Viktor Innovator" podía
    // aceptar cualquier otra carta de Viktor (Herald of the Arcane, Leader...) con solo
    // compartir el nombre del campeón. Ahora deben coincidir TODAS las palabras relevantes
    // del nombre buscado (campeón + identidad/subtítulo), no solo el nombre del campeón.
    return inputTokens.every(function (t) { return candTokens.indexOf(t) !== -1; });
  }

  function pickBestRiftcodexMatch(items, cardName) {
    if (!items || !items.length) return null;
    // Primero descartamos cualquier item cuyo nombre no tenga NADA que ver con lo buscado
    const relevant = items.filter(function (it) { return namesLikelyMatch(cardName, it.name); });
    if (!relevant.length) return null; // ninguno se parece -> mejor no encontrar nada que asignar mal
    const wanted = riftcodexVariantWanted(cardName);
    const anyVariantWanted = wanted.signature || wanted.overnumbered || wanted.alternate_art;
    if (!anyVariantWanted) return relevant[0];
    const exact = relevant.find(function (it) {
      const m = it.metadata || {};
      return !!m.signature === wanted.signature &&
             !!m.overnumbered === wanted.overnumbered &&
             !!m.alternate_art === wanted.alternate_art;
    });
    return exact || relevant[0];
  }

  function lookupRiftcodexByName(cardName) {
    const clean = String(cardName || '').replace(/\([^)]*\)/g, '').replace(/[^a-zA-Z0-9\s]/g, ' ').trim();
    if (!clean) return Promise.resolve(null);
    return fetch('https://api.riftcodex.com/cards/name?fuzzy=' + encodeURIComponent(clean))
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        const item = data && pickBestRiftcodexMatch(data.items, cardName);
        if (!item) return null;
        const setLabel = item.set && item.set.label;
        return {
          cardNumber: item.riftbound_id ? item.riftbound_id.toUpperCase() : null,
          set: setLabel || null,
          image: (item.media && item.media.image_url) || null
        };
      })
      .catch(function () { return null; });
  }



  // Las 42 cartas que llegan sin card_number (todas las añadidas con "+ Add card" antes de
  // este arreglo) no tienen NADA que dotgg pueda buscar por número. riftdecks.com sí permite
  // ir de nombre -> numero: sus URLs de ficha son slugs derivados del nombre, y la imagen que
  // muestran codifica en el propio nombre de fichero el set de impresion real y el numero
  // (p.ej. ven-149-166_full.png, o sfd-084-221_full.png para una carta que Cardmarket lista
  // bajo "Vendetta" pero que en realidad se imprimio en Spiritforged - esto pasa a menudo con
  // identidades de campeon reutilizadas entre sets, así que este paso corrige el set a la vez).
  //
  // IMPORTANTE - esto no está verificado en vivo: depende de que riftdecks.com permita que
  // fetch() lea su respuesta desde otro dominio (CORS). Si el sitio no lo permite, el fetch
  // fallará silenciosamente y esa carta caerá en la lista de "sin encontrar" de siempre, sin
  // romper nada. Si tras subir esto la mayoría de cartas de Vendetta se resuelven solas, CORS
  // está abierto y funciona; si no, hay que decírselo a Claude para que lo resuelva por chat.
  const RIFTDECKS_SET_NAMES = { VEN: 'Vendetta', OGN: 'Origins', SFD: 'Spiritforged', UNL: 'Unleashed', OGS: 'Origins Promos' };

  function riftdecksSlug(name) {
    return String(name || '')
      .toLowerCase()
      .replace(/['']/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function lookupRiftdecksByName(cardName) {
    const slug = riftdecksSlug(cardName);
    if (!slug) return Promise.resolve(null);
    return fetch('https://riftdecks.com/cards/details-' + slug)
      .then(function (r) { return r.ok ? r.text() : null; })
      .then(function (html) {
        if (!html) return null;
        const m = html.match(/img\/cards\/riftbound\/([A-Z]+)\/[a-z]+-(\d{1,4}[a-z]?)-(\d+)_full\.png/i);
        if (!m) return null;
        const setCode = m[1].toUpperCase();
        const numberRaw = m[2]; // puede venir como "149" o "046a"
        const total = m[3];     // ANTES esto se inventaba como "999" y la imagen nunca existía - bug real, ya corregido
        return {
          cardNumber: setCode + '-' + numberRaw,
          set: RIFTDECKS_SET_NAMES[setCode] || null,
          image: 'https://riftdecks.com/img/cards/riftbound/' + setCode + '/' + setCode.toLowerCase() + '-' + numberRaw + '-' + total + '_full.png'
        };
      })
      .catch(function () { return null; }); // CORS u otro fallo de red: se trata como "sin match", nunca rompe el flujo
  }

  function fixMissingImages() {
    const cards = (window.portfolioData && window.portfolioData.cards) || [];
    const prefixBySet = learnPrefixesBySet(cards);
    const targets = cards.filter(function (c) { return !c.image && c.cardNumber; });
    const noNumber = cards.filter(function (c) { return !c.image && !c.cardNumber; });
    window.alert('Checking ' + (targets.length + noNumber.length) + ' card(s) for images — this can take a while, please wait.');

    // FASE 1: cartas sin card_number - intentar resolver nombre -> numero/set via riftdecks
    const phase1 = noNumber.reduce(function (p, c) {
      return p.then(function (results) {
        return lookupRiftcodexByName(c.name).then(function (found) {
          return found || lookupRiftdecksByName(c.name); // riftcodex falla -> probamos riftdecks
        }).then(function (found) {
          if (found) {
            // Solo tocamos card_number e imagen. El set NUNCA se sobreescribe: lo que ya
            // hay guardado viene de la categoría de Cardmarket (p.ej. "Vendetta" para todo
            // lo que esté en esa watchlist), que es lo que a Nacho le interesa para agrupar
            // sus cartas - no el set de impresión original de la carta, que puede ser otro
            // (p.ej. una identidad de Viktor reimpresa que originalmente salió en Origins).
            const patch = { card_number: found.cardNumber, card_image: found.image };
            return updateCard(c.dbId, patch).then(function () {
              results.fixedViaName++;
              return results;
            }).catch(function (err) {
              results.errors.push(c.name + ': ' + err.message);
              return results;
            });
          }
          results.stillUnresolved.push(c.name);
          return results;
        });
      });
    }, Promise.resolve({ fixedViaName: 0, stillUnresolved: [], errors: [] }));

    // FASE 2: cartas que ya tenían card_number - matriz de candidatos en dotgg (como antes)
    const chain = phase1.then(function (phase1Results) {
      return targets.reduce(function (p, c) {
        return p.then(function (results) {
          return resolveImageForCard(c, prefixBySet).then(function (url) {
            if (url) {
              return updateCard(c.dbId, { card_image: url }).then(function () {
                results.fixed++;
                const file = url.slice(DOTGG_BASE.length).replace(/\.webp$/i, '');
                const mm = file.match(/^(.*?)(\d{1,4})[a-z]?$/i);
                if (mm) prefixBySet[(c.set || '').trim()] = mm[1];
                return results;
              }).catch(function (err) {
                results.errors.push(c.name + ' (' + c.cardNumber + '): ' + err.message);
                return results;
              });
            }
            // dotgg.gg no tiene esta carta todavía (típico de sets recién lanzados, como
            // Vendetta el primer mes: dotgg tarda en indexar). Antes de rendirnos, probamos
            // riftcodex.com por NOMBRE como último recurso - solo tocamos card_image, el
            // card_number que ya había guardado no se toca porque puede ser correcto.
            return lookupRiftcodexByName(c.name).then(function (found) {
              if (found && found.image) {
                return updateCard(c.dbId, { card_image: found.image }).then(function () {
                  results.fixedViaFallback = (results.fixedViaFallback || 0) + 1;
                  return results;
                }).catch(function (err) {
                  results.errors.push(c.name + ' (' + c.cardNumber + '): ' + err.message);
                  return results;
                });
              }
              results.skippedNames.push(c.name + ' (' + c.cardNumber + ')');
              return results;
            });
          });
        });
      }, Promise.resolve({ fixed: 0, fixedViaFallback: 0, skippedNames: [], errors: [], phase1: phase1Results }));
    });

    chain.then(function (results) {
      const p1 = results.phase1;
      let msg = 'Done.';
      if (p1.fixedViaName) msg += '\n\n' + p1.fixedViaName + ' card(s) resolved automatically by NAME (riftdecks.com) - Card Number, set and image filled in.';
      if (results.fixed) msg += '\n\n' + results.fixed + ' more image(s) filled in by Card Number (dotgg.gg).';
      if (results.fixedViaFallback) msg += '\n\n' + results.fixedViaFallback + ' more image(s) filled in via riftcodex.com fallback (dotgg.gg did not have them yet).';
      if (p1.stillUnresolved.length) {
        msg += '\n\nCould not resolve by name (' + p1.stillUnresolved.length + '):\n' + p1.stillUnresolved.join('\n') +
          '\n\nEither riftdecks.com does not have these, or this browser cannot read cross-origin data from it. Paste this list to Claude in chat.';
      }
      if (results.skippedNames.length) {
        msg += '\n\nStill no image match on dotgg.gg for:\n' + results.skippedNames.join('\n');
      }
      if (results.errors.length || p1.errors.length) {
        msg += '\n\nCould not save to Supabase:\n' + results.errors.concat(p1.errors).join('\n');
      }
      if (results.fixed || p1.fixedViaName) msg += '\n\nPlease double-check the new images and numbers look right.';
      window.alert(msg);
      return window.CardexReload();
    }).then(function () {
      if (typeof window.CardexOnDataChange === 'function') window.CardexOnDataChange();
    });
  }
  window.CardexFixMissingImages = function () { requirePassword(fixMissingImages); };

  // ---------- Estilos inyectados (menú, modales de añadir/mover) ----------
  const css = `
  .cx-burger{width:34px;height:34px;border-radius:8px;background:rgba(20,20,20,0.7);border:1px solid rgba(184,145,46,0.32);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;cursor:pointer;flex-shrink:0;}
  .cx-header-add{margin-left:auto;padding:7px 14px;border-radius:8px;background:#b8912e;color:#000;font-weight:700;font-size:12.5px;border:none;cursor:pointer;white-space:nowrap;flex-shrink:0;transition:background 0.15s;}
  .cx-header-add:hover{background:#d9b04a;}
  .cx-burger span{display:block;width:16px;height:2px;background:var(--gold,#b8912e);border-radius:2px;}
  .cx-side-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);z-index:300;}
  .cx-side-overlay.open{display:block;animation:cx-fade 0.15s ease both;}
  @keyframes cx-fade{from{opacity:0}to{opacity:1}}
  .cx-side-panel{position:fixed;top:0;left:0;bottom:0;width:250px;max-width:82vw;background:rgba(12,12,12,0.98);border-right:1px solid rgba(184,145,46,0.32);z-index:301;transform:translateX(-100%);transition:transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94);display:flex;flex-direction:column;padding:18px 0;}
  .cx-side-overlay.open .cx-side-panel{transform:translateX(0);}
  .cx-side-logo{font-family:'Montserrat',sans-serif;font-weight:800;font-size:20px;letter-spacing:0.02em;background:linear-gradient(135deg,#e8c766,#b8912e 55%,#8a6d1a);-webkit-background-clip:text;background-clip:text;color:transparent;padding:0 20px 16px;border-bottom:1px solid rgba(184,145,46,0.2);margin-bottom:8px;}
  .cx-side-link{display:block;padding:11px 20px;font-size:13.5px;font-weight:600;color:#9a9a9a;text-decoration:none;transition:background 0.15s,color 0.15s;}
  .cx-side-link:hover{background:rgba(184,145,46,0.1);color:#f2f2f2;}
  .cx-side-link.active{background:rgba(184,145,46,0.14);color:#f2f2f2;border-left:2px solid #b8912e;padding-left:18px;}
  .cx-side-add{margin:14px 20px 0;padding:9px 12px;border-radius:8px;background:#b8912e;color:#000;font-weight:700;font-size:13px;text-align:center;cursor:pointer;border:none;}
  .cx-side-add:hover{background:#d9b04a;}
  .cx-form-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.85);backdrop-filter:blur(10px);z-index:400;align-items:center;justify-content:center;padding:20px;}
  .cx-form-overlay.open{display:flex;animation:cx-fade 0.15s ease both;}
  .cx-form-modal{background:linear-gradient(160deg,#1a1a1a 0%,#0a0a0a 60%,#000 100%);border:1px solid rgba(184,145,46,0.32);border-radius:16px;width:460px;max-width:100%;max-height:88vh;overflow-y:auto;padding:22px 24px;box-shadow:0 30px 70px rgba(0,0,0,0.9);}
  .cx-form-title{font-size:17px;font-weight:800;margin-bottom:14px;color:#f2f2f2;}
  .cx-form-row{margin-bottom:11px;display:flex;flex-direction:column;gap:4px;}
  .cx-form-row label{font-size:10.5px;text-transform:uppercase;letter-spacing:0.06em;color:#9a9a9a;font-weight:700;}
  .cx-form-row input,.cx-form-row select,.cx-form-row textarea{background:rgba(255,255,255,0.05);border:1px solid rgba(184,145,46,0.25);border-radius:7px;padding:8px 10px;color:#f2f2f2;font-size:13px;font-family:inherit;}
  .cx-form-row textarea{resize:vertical;min-height:56px;line-height:1.4;}
  .cx-form-row input:focus,.cx-form-row select:focus,.cx-form-row textarea:focus{outline:none;border-color:#b8912e;}
  .cx-form-row select option{background:#161616;color:#f2f2f2;}
  .cx-form-grid2{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
  .cx-card-delete-x{position:absolute;top:6px;right:6px;width:22px;height:22px;border-radius:50%;background:rgba(10,10,10,0.85);border:1px solid rgba(255,255,255,0.15);color:#c9c9c9;font-size:12px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:5;transition:color 0.15s,border-color 0.15s,background 0.15s;}
  .cx-card-delete-x:hover{color:#ff6b6b;border-color:rgba(255,107,107,0.5);background:rgba(40,10,10,0.9);}
  .card-select-cb{position:absolute;top:6px;left:6px;width:18px;height:18px;z-index:6;accent-color:var(--gold);cursor:pointer;opacity:0.55;transition:opacity 0.15s;}
  .card-select-cb:hover,.card-select-cb:checked{opacity:1;}
  .card.cx-selected{outline:2px solid var(--gold);outline-offset:2px;border-radius:10px;}
  .cx-bulk-bar{position:fixed;left:50%;bottom:22px;transform:translateX(-50%);background:#161616;border:1px solid var(--gold);border-radius:10px;padding:10px 16px;display:none;align-items:center;gap:14px;z-index:150;box-shadow:0 12px 30px rgba(0,0,0,0.6);}
  .cx-bulk-bar.open{display:flex;}
  .cx-bulk-bar .cx-bulk-count{font-size:13px;font-weight:700;color:var(--text,#f2f2f2);}
  .cx-bulk-bar button{background:rgba(255,255,255,0.06);border:1px solid rgba(184,145,46,0.3);color:var(--text,#f2f2f2);padding:7px 14px;border-radius:7px;font-size:12.5px;cursor:pointer;font-family:inherit;font-weight:600;}
  .cx-bulk-bar button:hover{border-color:var(--gold);}
  .cx-bulk-bar button.cx-bulk-delete{color:#ff6b6b;border-color:rgba(255,107,107,0.35);}
  .cx-bulk-bar button.cx-bulk-delete:hover{border-color:#ff6b6b;background:rgba(40,10,10,0.5);}
  .cx-bulk-bar button.cx-bulk-clear{background:transparent;border-color:transparent;color:var(--text-muted,#9a9a9a);}
  .cx-form-status-tabs{display:flex;gap:6px;margin-bottom:14px;}
  .cx-status-tab{flex:1;text-align:center;padding:8px;border-radius:7px;border:1px solid rgba(184,145,46,0.25);background:rgba(255,255,255,0.03);color:#9a9a9a;font-size:12.5px;font-weight:700;cursor:pointer;}
  .cx-status-tab.active{background:#b8912e;color:#000;border-color:#b8912e;}
  .cx-form-actions{display:flex;gap:8px;margin-top:16px;}
  .cx-btn{flex:1;padding:10px;border-radius:8px;border:none;font-weight:700;font-size:13px;cursor:pointer;}
  .cx-btn-primary{background:#b8912e;color:#000;}
  .cx-btn-primary:hover{background:#d9b04a;}
  .cx-btn-ghost{background:rgba(255,255,255,0.06);color:#f2f2f2;}
  .cx-btn-ghost:hover{background:rgba(255,255,255,0.12);}
  .cx-btn-danger{background:rgba(255,90,90,0.15);color:#ff5a5a;border:1px solid rgba(255,90,90,0.35);}
  .cx-btn-danger:hover{background:rgba(255,90,90,0.25);}
  .cx-form-error{color:#ff5a5a;font-size:12px;margin-top:6px;display:none;}
  .cx-move-row{display:flex;gap:8px;margin-bottom:14px;}
  .cx-move-btn{flex:1;padding:10px 6px;border-radius:8px;border:1px solid rgba(184,145,46,0.25);background:rgba(255,255,255,0.03);color:#9a9a9a;font-size:12px;font-weight:700;cursor:pointer;text-align:center;}
  .cx-move-btn.current{border-color:#b8912e;color:#b8912e;background:rgba(184,145,46,0.08);}
  .cx-move-btn:not(.current):hover{color:#f2f2f2;border-color:rgba(184,145,46,0.55);}
  .cx-gate-overlay{position:fixed;inset:0;background:#050505;z-index:999999;display:flex;align-items:center;justify-content:center;padding:20px;}
  .cx-gate-box{background:linear-gradient(160deg,#1a1a1a 0%,#0a0a0a 60%,#000 100%);border:1px solid rgba(184,145,46,0.32);border-radius:16px;padding:32px 28px;width:320px;max-width:100%;text-align:center;box-shadow:0 30px 70px rgba(0,0,0,0.9);}
  .cx-gate-logo{font-family:'Montserrat',sans-serif;font-weight:800;font-size:24px;letter-spacing:0.02em;background:linear-gradient(135deg,#e8c766,#b8912e 55%,#8a6d1a);-webkit-background-clip:text;background-clip:text;color:transparent;margin-bottom:20px;}
  .cx-gate-box input{width:100%;box-sizing:border-box;background:rgba(255,255,255,0.05);border:1px solid rgba(184,145,46,0.25);border-radius:7px;padding:11px 12px;color:#f2f2f2;font-size:15px;text-align:center;letter-spacing:0.2em;margin-bottom:12px;font-family:inherit;}
  .cx-gate-box input:focus{outline:none;border-color:#b8912e;}
  .cx-gate-box button{width:100%;padding:11px;border-radius:8px;background:#b8912e;color:#000;font-weight:700;font-size:13px;border:none;cursor:pointer;}
  .cx-gate-box button:hover{background:#d9b04a;}
  .cx-gate-error{color:#ff5a5a;font-size:12px;margin-top:10px;min-height:14px;}
  `;
  const styleTag = document.createElement('style');
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  // ---------- Gate de acceso al sitio (protección básica en el navegador) ----------
  // Nota: igual que el gate de edición, esto es solo un filtro visual en el navegador,
  // no autenticación real — los datos siguen siendo públicos vía la API de Supabase.
  function showSiteGate() {
    document.documentElement.style.overflow = 'hidden';
    const overlay = document.createElement('div');
    overlay.className = 'cx-gate-overlay';
    overlay.id = 'cx-gate-overlay';
    overlay.innerHTML =
      '<div class="cx-gate-box">' +
      '<div class="cx-gate-logo">CARDEX</div>' +
      '<input type="password" id="cx-gate-input" placeholder="Contraseña" autocomplete="off" inputmode="numeric"/>' +
      '<button id="cx-gate-submit">Entrar</button>' +
      '<div class="cx-gate-error" id="cx-gate-error"></div>' +
      '</div>';
    document.body.appendChild(overlay);
    const input = overlay.querySelector('#cx-gate-input');
    const errEl = overlay.querySelector('#cx-gate-error');
    function tryUnlock() {
      if (input.value === APP_PASSWORD) {
        sessionStorage.setItem('cardex_unlocked', '1');
        document.documentElement.style.overflow = '';
        overlay.remove();
      } else {
        errEl.textContent = 'Contraseña incorrecta.';
        input.value = '';
      }
      input.focus();
    }
    overlay.querySelector('#cx-gate-submit').addEventListener('click', tryUnlock);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') tryUnlock(); });
    setTimeout(function () { input.focus(); }, 50);
  }
  if (!isUnlocked()) showSiteGate();


  // ---------- Menú hamburguesa ----------
  const PAGES = [
    { href: 'index.html', label: 'Overview' },
    { href: 'holding.html', label: 'My Collection' },
    { href: 'watchlist.html', label: 'Watchlist' },
    { href: 'invested.html', label: 'Invested' },
    { href: 'sales.html', label: 'Sales' },
    { href: 'pricecheck.html', label: 'Price Check' }
  ];

  function currentFile() {
    let p = location.pathname.split('/').pop();
    if (!p) p = 'index.html';
    return p;
  }

  function defaultWatchlistName() {
    try {
      if (typeof window.CardexActiveWatchlist === 'function') {
        const n = window.CardexActiveWatchlist();
        if (n) return n;
      }
    } catch (e) {}
    return 'General';
  }

  function defaultStatusForPage() {
    const map = { 'holding.html': 'Holding', 'watchlist.html': 'Watchlist', 'sales.html': 'Sold' };
    return map[currentFile()] || 'Holding';
  }

  // El valor interno sigue siendo 'Holding' (así se guarda en Supabase, sin tocar datos existentes);
  // esto solo cambia lo que se muestra en pantalla.
  function statusLabel(s) { if (s === 'Holding') return 'My Collection'; if (s === 'Sold') return 'Sales'; return s; }

  function buildMenu() {
    const cur = currentFile();
    const links = PAGES.map(function (p) {
      return '<a class="cx-side-link' + (p.href === cur ? ' active' : '') + '" href="' + p.href + '">' + p.label + '</a>';
    }).join('');
    const overlay = document.createElement('div');
    overlay.className = 'cx-side-overlay';
    overlay.id = 'cx-side-overlay';
    overlay.innerHTML =
      '<div class="cx-side-panel">' +
        '<div class="cx-side-logo">CARDEX</div>' +
        links +
      '</div>';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function (e) { if (e.target.id === 'cx-side-overlay') closeMenu(); });

    const header = document.querySelector('header');
    if (header) {
      const burger = document.createElement('button');
      burger.className = 'cx-burger';
      burger.id = 'cx-burger';
      burger.setAttribute('aria-label', 'Menu');
      burger.innerHTML = '<span></span><span></span><span></span>';
      header.insertBefore(burger, header.firstChild);
      burger.addEventListener('click', openMenu);

      const logo = header.querySelector('.logo-text');
      if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function () { window.location.href = 'index.html'; });
      }

      if (cur !== 'pricecheck.html') {
        const headerAddBtn = document.createElement('button');
        headerAddBtn.className = 'cx-header-add';
        headerAddBtn.id = 'cx-header-add';
        headerAddBtn.textContent = '+ Add card';
        headerAddBtn.addEventListener('click', function () {
          requirePassword(function () { openAddModal(defaultStatusForPage()); });
        });
        header.appendChild(headerAddBtn);
      }
    }
  }
  function openMenu() { document.getElementById('cx-side-overlay').classList.add('open'); }
  function closeMenu() { document.getElementById('cx-side-overlay').classList.remove('open'); }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      const ov = document.getElementById('cx-side-overlay'); if (ov) ov.classList.remove('open');
      const fov = document.getElementById('cx-form-overlay'); if (fov) fov.classList.remove('open');
    }
  });

  // ---------- Formulario Añadir / Editar / Mover ----------
  const SET_OPTIONS = ['Origins', 'Unleashed', 'Spiritforged', 'Vendetta', 'Proving Grounds', 'Project K Promos', 'Origins Promos', 'Spiritforged Promos', 'Unleashed Promos', 'Vendetta Promos'];
 const RARITY_OPTIONS = ['Epic', 'Rare', 'Uncommon', 'Common', 'Overnumbered', 'Signature Overnumber', 'Ultimate', 'Plated', 'Promo', 'Other', 'N/A'];
  // Condición física de la carta (solo singles, no sealed). Mapea al parámetro
  // minCondition de Cardmarket: minCondition=N muestra listings de esa condición
  // o mejor, y como esas son casi siempre las más baratas, el mínimo del filtro
  // equivale en la práctica al precio de esa condición concreta.
  const CONDITION_OPTIONS = ['NM', 'EX', 'GD', 'LP', 'PL'];
  const CONDITION_MIN_MAP = { MT: 1, NM: 2, EX: 3, GD: 4, LP: 5, PL: 6, PO: 7 };
  // Categoría real de Cardmarket para Riftbound: el primer segmento después de
  // "Products" en la ruta (Singles, Box-Sets, Booster-Boxes, Boosters, Bundles,
  // Starter-Decks, Playmats, Albums, Sleeves, Deck-Boxes...). Cardmarket NO usa
  // literalmente la palabra "Sealed" en ninguna URL — solo "Singles" identifica
  // cartas sueltas; todo lo demás es, a efectos de este tracker, "sellado".
  function getCardmarketCategory(url) {
    try {
      const parts = new URL(url).pathname.split('/').filter(Boolean);
      const pIdx = parts.indexOf('Products');
      return (pIdx !== -1 && parts[pIdx + 1]) ? parts[pIdx + 1] : null;
    } catch (e) { return null; }
  }
  function isSealedUrl(url) {
    const cat = getCardmarketCategory(url);
    return cat ? cat !== 'Singles' : false;
  }
  // Reescribe el parámetro minCondition de una cardmarket_url ya normalizada
  // para que refleje la condición física elegida (NM, EX, ...). No toca nada si es sellado.
  function applyConditionToUrl(url, conditionCode) {
    if (!url || isSealedUrl(url)) return url;
    const minC = CONDITION_MIN_MAP[conditionCode] || 2;
    try {
      const u = new URL(url);
      u.searchParams.set('minCondition', String(minC));
      return u.toString().replace(/%2C/g, ',');
    } catch (e) { return url; }
  }
  window.CardexConditions = { options: CONDITION_OPTIONS, isSealedUrl: isSealedUrl, applyConditionToUrl: applyConditionToUrl };

  function buildFormOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'cx-form-overlay';
    overlay.id = 'cx-form-overlay';
    overlay.innerHTML = '<div class="cx-form-modal" id="cx-form-modal"></div>';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function (e) { if (e.target.id === 'cx-form-overlay') closeForm(); });
  }
  function closeForm() { document.getElementById('cx-form-overlay').classList.remove('open'); document.body.style.overflow = ''; }
  function openForm(html) {
    document.getElementById('cx-form-modal').innerHTML = html;
    document.getElementById('cx-form-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function optionsHtml(list, selected) {
    return '<option value="">—</option>' + list.map(function (o) {
      return '<option value="' + o + '"' + (o === selected ? ' selected' : '') + '>' + o + '</option>';
    }).join('');
  }

  function statusFieldsHtml(status, item) {
    item = item || {};
    const isSealed = item.cardmarketUrl ? isSealedUrl(item.cardmarketUrl) : (item.condition === 'Sealed');
    const conditionRow = (!isSealed) ?
      '<div class="cx-form-row"><label>Condition</label><select id="cx-f-condition">' + conditionOptionsHtml(CONDITION_OPTIONS.indexOf(item.condition) !== -1 ? item.condition : 'NM') + '</select></div>' : '';
    const qtyRow = '<div class="cx-form-row"><label>Quantity</label><input type="number" step="1" min="1" id="cx-f-qty" value="' + (item.qty != null ? item.qty : 1) + '"/></div>';
    // Editable en cualquier estado: sin esto no había forma de rellenar el Card Number
    // de una carta ya guardada, ni siquiera abriendo su ficha - solo se pedía (opcional)
    // al darla de alta por primera vez. Sin numero, Fix Images no puede resolver su imagen.
    const cardNumberRow = '<div class="cx-form-row"><label>Card Number</label><input type="text" id="cx-f-cardnumber" value="' + (item.cardNumber != null ? item.cardNumber : '') + '" placeholder="e.g. 303 or OGN-303"/></div>';
    // Nota libre por carta - p.ej. "wave 2" en una caja sellada de Origins, o cualquier
    // matiz que no encaje en ningún otro campo. Se guarda tal cual, sin validar formato.
    const commentRow = '<div class="cx-form-row"><label>Comment</label><textarea id="cx-f-comment" rows="2" placeholder="Optional note, e.g. \'wave 2\'">' + (item.comment ? item.comment.replace(/</g, '&lt;') : '') + '</textarea></div>';
    if (status === 'Holding') {
      return '<div class="cx-form-grid2">' +
        '<div class="cx-form-row"><label>Buy Price (€ / unit)</label><input type="number" step="0.01" id="cx-f-buyPrice" value="' + (item.buyPrice != null ? item.buyPrice : '') + '"/></div>' +
        '<div class="cx-form-row"><label>Buy Date</label><input type="date" id="cx-f-buyDate" value="' + (item.buyDate || '') + '"/></div>' +
        '</div>' + qtyRow + conditionRow + cardNumberRow + commentRow;
    }
    if (status === 'Sold') {
      return '<div class="cx-form-grid2">' +
        '<div class="cx-form-row"><label>Sell Price (€ / unit)</label><input type="number" step="0.01" id="cx-f-sellPrice" value="' + (item.sellPrice != null ? item.sellPrice : '') + '"/></div>' +
        '<div class="cx-form-row"><label>Sell Date</label><input type="date" id="cx-f-sellDate" value="' + (item.sellDate || '') + '"/></div>' +
        '</div>' + qtyRow + conditionRow + cardNumberRow + commentRow;
    }
    if (status === 'Watchlist') {
      return '<div class="cx-form-row"><label>Watchlist</label><select id="cx-f-watchlist">' + watchlistOptionsHtml(item.watchlistName || 'General') + '</select></div>' + conditionRow + cardNumberRow + commentRow;
    }
    return conditionRow + cardNumberRow + commentRow;
  }

  const SELLER_COUNTRY_LIST = '1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4';

  // El pegado rápido de "+ Add card" no valida el enlace que traigas — si lo copiaste
  // navegando normal, puede venir en otro idioma de interfaz (/es/, /de/…) o sin los
  // filtros de precio mínimo/orden. Esto lo normaliza siempre al formato canónico,
  // igual que exige la metodología de price-check, para que nunca se guarde "roto".
  function normalizeCardmarketUrl(url) {
    try {
      const u = new URL(url);
      const parts = u.pathname.split('/').filter(Boolean);
      if (parts[0] && parts[0].length === 2) parts[0] = 'en'; // /es/, /de/, etc. -> /en/
      u.pathname = '/' + parts.join('/');
      const isSealed = isSealedUrl(u.toString());
      const existingLanguage = u.searchParams.get('language');
      const params = new URLSearchParams();
      params.set('language', existingLanguage || '1'); // respeta language=6 si ya lo trae (p.ej. Project K Promos)
      if (!isSealed) params.set('minCondition', '2');
      params.set('sellerCountry', SELLER_COUNTRY_LIST);
      params.set('sortBy', 'price_asc');
      u.search = params.toString();
      return u.toString().replace(/%2C/g, ',');
    } catch (e) {
      return url; // si no parsea como URL, se deja tal cual y fallará de forma visible luego
    }
  }

  function parseCardmarketUrl(url) {
    try {
      const u = new URL(url);
      const parts = u.pathname.split('/').filter(Boolean);
      const pIdx = parts.indexOf('Products');
      const category = pIdx !== -1 ? parts[pIdx + 1] : null;
      const setSeg = (category === 'Singles') ? parts[pIdx + 2] : null;
      const slug = parts[parts.length - 1] || '';
      const nameGuess = decodeURIComponent(slug).replace(/-/g, ' ').trim();
      let setGuess = '';
      if (setSeg) {
        const norm = decodeURIComponent(setSeg).replace(/-/g, ' ').trim().toLowerCase();
        const match = SET_OPTIONS.find(function (s) { return s.toLowerCase() === norm; });
        if (match) {
          setGuess = match; // set ya conocido -> usamos la grafía oficial
        } else {
          // Set nuevo que aún no está en SET_OPTIONS (p.ej. un lanzamiento reciente como
          // Vendetta, que faltaba aqui y por eso se guardaba vacio). En vez de descartarlo,
          // lo derivamos directamente del tramo de la URL de Cardmarket - asi cualquier set
          // futuro se registra solo, sin depender de que alguien actualice esta lista a mano.
          setGuess = decodeURIComponent(setSeg).replace(/-/g, ' ').trim()
            .replace(/\w\S*/g, function (w) { return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(); });
        }
      }
      const condition = (category && category !== 'Singles') ? 'Sealed' : 'NM';
      return { name: nameGuess, set: setGuess, condition: condition };
    } catch (e) {
      return { name: '', set: '', condition: '' };
    }
  }

  function watchlistOptionsHtml(selected) {
    const names = (window.portfolioData && window.portfolioData.watchlists) || ['General'];
    return names.map(function (n) {
      return '<option value="' + n + '"' + (n === selected ? ' selected' : '') + '>' + n + '</option>';
    }).join('') + '<option value="__new__">+ New watchlist…</option>';
  }
  function conditionOptionsHtml(selected) {
    return CONDITION_OPTIONS.map(function (c) {
      return '<option value="' + c + '"' + (c === selected ? ' selected' : '') + '>' + c + '</option>';
    }).join('');
  }
  function wireWatchlistSelect(selectId) {
    const sel = document.getElementById(selectId);
    if (!sel) return;
    sel.addEventListener('change', function () {
      if (sel.value !== '__new__') return;
      const name = window.prompt('Name for the new watchlist:');
      if (!name || !name.trim()) { sel.value = 'General'; return; }
      const clean = name.trim();
      insertWatchlist(clean).then(function () {
        if (!window.portfolioData.watchlists.includes(clean)) window.portfolioData.watchlists.push(clean);
        sel.innerHTML = watchlistOptionsHtml(clean);
      }).catch(function () {
        // probablemente ya existe ese nombre — la usamos igualmente
        if (!window.portfolioData.watchlists.includes(clean)) window.portfolioData.watchlists.push(clean);
        sel.innerHTML = watchlistOptionsHtml(clean);
      });
    });
  }

  function openAddModal(prefillStatus) {
    let status = prefillStatus || 'Holding';
    function render() {
      const showPrice = status !== 'Watchlist';
      const showCondition = status !== 'Watchlist';
      const priceLabel = status === 'Sold' ? 'Sell price (€)' : 'Price paid (€)';
      openForm(
        '<div class="cx-form-title">Add card</div>' +
        '<div class="cx-form-status-tabs" id="cx-add-tabs">' +
        ['Holding', 'Watchlist', 'Sold'].map(function (s) {
          return '<div class="cx-status-tab' + (s === status ? ' active' : '') + '" data-status="' + s + '">' + statusLabel(s) + '</div>';
        }).join('') +
        '</div>' +
        '<div class="cx-form-row"><label>Cardmarket link(s)</label><textarea id="cx-f-url" rows="3" placeholder="Paste one or several links, one per line.&#10;Optional: add a price at the end of a line, e.g. https://... 25.50"></textarea><div id="cx-f-url-count" style="font-size:11px;color:var(--text-muted);margin-top:3px;min-height:14px;"></div></div>' +
        '<div class="cx-form-row"><label>Card Number (optional)</label><input type="text" id="cx-f-cardnumber" placeholder="e.g. 303 or OGN-303 - check the Cardmarket page or card gallery"/></div>' +
        '<div style="font-size:11px;color:var(--text-muted);margin:-6px 0 8px;line-height:1.4;">Without a Card Number, Fix Images cannot find this card automatically later. If pasting several links with different numbers, leave blank and set each one from its detail view afterward.</div>' +
        (showPrice ? '<div class="cx-form-grid2">' +
          '<div class="cx-form-row"><label>' + priceLabel + '</label><input type="number" step="0.01" id="cx-f-price"/></div>' +
          '<div class="cx-form-row"><label>Quantity</label><input type="number" step="1" min="1" id="cx-f-qty" value="1"/></div>' +
          '</div>' +
          '<div style="font-size:11px;color:var(--text-muted);margin:-6px 0 8px;line-height:1.4;">Enter the TOTAL you paid/received for that quantity (not per-unit) — e.g. 16 units for 311€ total. Used for links without their own price; if you paste several links, this quantity and price apply to each of them.</div>'
          : '') +
        (showCondition ? '<div class="cx-form-row"><label>Condition</label><select id="cx-f-condition">' + conditionOptionsHtml('NM') + '</select></div>' : '') +
        (status === 'Watchlist' ? '<div class="cx-form-row"><label>Watchlist</label><select id="cx-f-watchlist">' + watchlistOptionsHtml(defaultWatchlistName()) + '</select></div>' : '') +
        '<div style="font-size:11px;color:var(--text-muted);margin:2px 0 10px;line-height:1.4;">Card name and set are guessed from each link — you can refine them anytime from chat. The image fills in automatically later, no need to add it here. The condition selected above applies to all linked singles.</div>' +
        '<div class="cx-form-error" id="cx-form-error"></div>' +
        '<div class="cx-form-actions">' +
        '<button class="cx-btn cx-btn-ghost" id="cx-form-cancel">Cancel</button>' +
        '<button class="cx-btn cx-btn-primary" id="cx-form-save">Save</button>' +
        '</div>'
      );
      document.querySelectorAll('#cx-add-tabs .cx-status-tab').forEach(function (t) {
        t.addEventListener('click', function () { status = t.dataset.status; render(); });
      });
      wireWatchlistSelect('cx-f-watchlist');
      document.getElementById('cx-form-cancel').addEventListener('click', closeForm);
      document.getElementById('cx-form-save').addEventListener('click', function () { submitAdd(status); });
      const urlEl = document.getElementById('cx-f-url');
      const countEl = document.getElementById('cx-f-url-count');
      function updateCount() {
        const n = parseBulkUrlLines(urlEl.value.trim()).length;
        countEl.textContent = n > 1 ? (n + ' links detected — they will be added in bulk.') : '';
      }
      urlEl.addEventListener('input', updateCount);
    }
    render();
  }

  // Añadir cartas en bloque: el textarea acepta uno o varios enlaces de Cardmarket,
  // uno por línea. Cada línea puede terminar opcionalmente en un precio
  // ("https://... 25.50"); si no lo trae, se usa el campo de precio general
  // como valor por defecto para esa línea. Si no falla nada, se hace UNA sola
  // petición a Supabase con un array de filas (PostgREST inserta varias filas
  // de golpe si el body es un array), en vez de una petición por carta.
  // Valida que el enlace sea realmente una página de producto de Cardmarket
  // (cualquier categoría: Singles, Box-Sets, Booster-Boxes, Boosters, Bundles...),
  // no una imagen, un enlace de otra web, o la página de listado de una categoría/set.
  // Ojo: exige el dominio exacto www.cardmarket.com / cardmarket.com — un subdominio
  // como product-images.s3.cardmarket.com (enlace de imagen) NO cuenta como válido
  // aunque termine en "cardmarket.com".
  // Devuelve null si es válido, o un texto explicando qué falla si no lo es.
  function validateCardmarketProductUrl(url) {
    let u;
    try { u = new URL(url); } catch (e) { return "it isn't a valid web link"; }
    const host = u.hostname.toLowerCase();
    if (host !== 'www.cardmarket.com' && host !== 'cardmarket.com') {
      return 'the link is not a cardmarket.com product page (looks like a different site, or an image link such as product-images.s3.cardmarket.com)';
    }
    const parts = u.pathname.split('/').filter(Boolean);
    const pIdx = parts.indexOf('Products');
    if (pIdx === -1 || parts.length < pIdx + 3) {
      return "it's not a full product page — make sure you copied the specific card/product link (with its name in the URL), not a category or set listing page";
    }
    return null;
  }

  function parseBulkUrlLines(raw) {
    return raw.split('\n').map(function (line) { return line.trim(); })
      .filter(function (line) { return line.length > 0; })
      .map(function (line) {
        const m = line.match(/^(\S+)\s+([\d.,]+)\s*$/);
        if (m) {
          const priceNum = Number(m[2].replace(',', '.'));
          return { raw: line, url: m[1], inlinePrice: isNaN(priceNum) ? null : priceNum };
        }
        return { raw: line, url: line, inlinePrice: null };
      });
  }

  function submitAdd(status) {
    const errEl = document.getElementById('cx-form-error');
    errEl.style.display = 'none';
    const rawText = document.getElementById('cx-f-url').value.trim();
    if (!rawText) { errEl.textContent = 'Enter at least one Cardmarket link.'; errEl.style.display = 'block'; return; }
    const lines = parseBulkUrlLines(rawText);
    if (!lines.length) { errEl.textContent = 'Enter at least one Cardmarket link.'; errEl.style.display = 'block'; return; }

    const invalidUrls = [];
    lines.forEach(function (l) {
      const reason = validateCardmarketProductUrl(l.url);
      if (reason) invalidUrls.push({ raw: l.raw, reason: reason });
    });
    if (invalidUrls.length) {
      errEl.textContent = (invalidUrls.length > 1 ? invalidUrls.length + ' links look wrong. First one: ' : 'This link looks wrong: ') +
        '"' + invalidUrls[0].raw + '" — ' + invalidUrls[0].reason + '. Fix it and try again.';
      errEl.style.display = 'block';
      return;
    }

    const priceEl = document.getElementById('cx-f-price');
    const globalPrice = (priceEl && priceEl.value) ? Number(priceEl.value) : null;
    const priceRequired = status !== 'Watchlist';
    const conditionEl = document.getElementById('cx-f-condition');
    const wlEl = document.getElementById('cx-f-watchlist');
    const watchlistName = (wlEl && wlEl.value && wlEl.value !== '__new__') ? wlEl.value : 'General';
    const today = new Date().toISOString().slice(0, 10);

    const qtyEl = document.getElementById('cx-f-qty');
    let qty = qtyEl ? parseInt(qtyEl.value, 10) : 1;
    if (!qty || qty < 1) qty = 1;

    const cardNumberEl = document.getElementById('cx-f-cardnumber');
    const cardNumberValue = (cardNumberEl && cardNumberEl.value.trim()) ? cardNumberEl.value.trim() : null;

    if (priceRequired) {
      const missing = lines.filter(function (l) { return l.inlinePrice == null && (globalPrice == null || isNaN(globalPrice)); });
      if (missing.length) {
        errEl.textContent = missing.length + ' link(s) have no price. Add it at the end of each line, or fill in the price field above to apply it to all of them.';
        errEl.style.display = 'block';
        return;
      }
    }

    const rowsToInsert = lines.map(function (entry) {
      let normalizedUrl = normalizeCardmarketUrl(entry.url);
      const parsed = parseCardmarketUrl(normalizedUrl);
      let conditionValue;
      if (isSealedUrl(normalizedUrl)) {
        // Producto sellado (Box-Sets, Booster-Boxes, Boosters, Bundles...): la condición
        // física NM/EX no aplica — se ignora el desplegable para esta línea concreta,
        // aunque el pegado incluya también singles en otras líneas del mismo lote.
        conditionValue = 'Sealed';
      } else if (conditionEl) {
        conditionValue = conditionEl.value;
        normalizedUrl = applyConditionToUrl(normalizedUrl, conditionValue);
      } else {
        conditionValue = parsed.condition || null;
      }
      // El precio que se escribe en el formulario es el TOTAL pagado/cobrado por esa
      // cantidad (más natural para el humano: "16 kits por 311€"). Pero en toda la web
      // (holding/index/invested/sales.html) buy_price, sell_price y current_price se
      // tratan como precio POR UNIDAD, multiplicando por qty para sacar el total — así
      // que aquí se divide entre la cantidad antes de guardar, para que ambos mundos cuadren.
      const totalPrice = (entry.inlinePrice != null) ? entry.inlinePrice : globalPrice;
      const unitPrice = (totalPrice != null && !isNaN(totalPrice)) ? totalPrice / qty : null;
      const fields = {
        card_name: parsed.name || 'Unnamed card (please update)',
        set: parsed.set || null,
        condition: conditionValue,
        cardmarket_url: normalizedUrl,
        card_image: null,
        card_number: cardNumberValue,
        status: status,
        quantity: qty,
        current_price: unitPrice
      };
      if (status === 'Holding') { fields.buy_price = unitPrice; fields.buy_date = today; }
      if (status === 'Sold') { fields.sell_price = unitPrice; fields.sell_date = today; }
      if (status === 'Watchlist') { fields.watchlist_name = watchlistName; }
      return fields;
    });

    const saveBtn = document.getElementById('cx-form-save');
    if (saveBtn) {
      saveBtn.disabled = true;
      saveBtn.textContent = rowsToInsert.length > 1 ? ('Saving ' + rowsToInsert.length + ' cards...') : 'Saving...';
    }

    insertCard(rowsToInsert).then(function () {
      closeForm();
      return window.CardexReload();
    }).then(function () {
      if (typeof window.CardexOnDataChange === 'function') window.CardexOnDataChange();
      else window.location.reload();
    }).catch(function (err) {
      if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = 'Save'; }
      errEl.textContent = 'Error saving: ' + err.message;
      errEl.style.display = 'block';
    });
  }

  function openMoveModal(item) {
    let targetStatus = item.status;
    function render() {
      openForm(
        '<div class="cx-form-title">Move / edit «' + item.name + '»</div>' +
        '<div class="cx-move-row" id="cx-move-tabs">' +
        ['Holding', 'Watchlist', 'Sold'].map(function (s) {
          return '<div class="cx-move-btn' + (s === targetStatus ? ' current' : '') + '" data-status="' + s + '">' + statusLabel(s) + '</div>';
        }).join('') +
        '</div>' +
        '<div id="cx-move-status-fields">' + statusFieldsHtml(targetStatus, item) + '</div>' +
        '<div class="cx-form-error" id="cx-form-error"></div>' +
        '<div class="cx-form-actions">' +
        '<button class="cx-btn cx-btn-danger" id="cx-form-delete">Delete</button>' +
        '<button class="cx-btn cx-btn-ghost" id="cx-form-cancel">Cancel</button>' +
        '<button class="cx-btn cx-btn-primary" id="cx-form-save">Save</button>' +
        '</div>'
      );
      document.querySelectorAll('#cx-move-tabs .cx-move-btn').forEach(function (b) {
        b.addEventListener('click', function () { targetStatus = b.dataset.status; render(); });
      });
      wireWatchlistSelect('cx-f-watchlist');
      document.getElementById('cx-form-cancel').addEventListener('click', closeForm);
      document.getElementById('cx-form-save').addEventListener('click', function () { submitMove(item, targetStatus); });
      document.getElementById('cx-form-delete').addEventListener('click', function () { submitDelete(item); });
    }
    render();
  }

  function submitMove(item, targetStatus) {
    const errEl = document.getElementById('cx-form-error');
    const patch = { status: targetStatus };
    const qtyEl = document.getElementById('cx-f-qty');
    if (qtyEl) {
      let q = parseInt(qtyEl.value, 10);
      if (!q || q < 1) q = 1;
      patch.quantity = q;
    }
    if (targetStatus === 'Holding') {
      const bp = document.getElementById('cx-f-buyPrice'), bd = document.getElementById('cx-f-buyDate');
      if (bp) patch.buy_price = bp.value ? Number(bp.value) : 0;
      if (bd) patch.buy_date = bd.value || null;
    }
    if (targetStatus === 'Sold') {
      const sp = document.getElementById('cx-f-sellPrice'), sd = document.getElementById('cx-f-sellDate');
      if (sp) patch.sell_price = sp.value ? Number(sp.value) : null;
      if (sd) patch.sell_date = sd.value || null;
    }
    if (targetStatus === 'Watchlist') {
      const wlEl = document.getElementById('cx-f-watchlist');
      patch.watchlist_name = (wlEl && wlEl.value && wlEl.value !== '__new__') ? wlEl.value : 'General';
    }
    const commentEl = document.getElementById('cx-f-comment');
    if (commentEl) patch.comment = commentEl.value.trim() || null;
    const condEl = document.getElementById('cx-f-condition');
    if (condEl) {
      patch.condition = condEl.value;
      if (item.cardmarketUrl) patch.cardmarket_url = applyConditionToUrl(item.cardmarketUrl, condEl.value);
    }
    const cardNumberEl2 = document.getElementById('cx-f-cardnumber');
    if (cardNumberEl2) patch.card_number = cardNumberEl2.value.trim() || null;
    updateCard(item.dbId, patch).then(function () {
      closeForm();
      return window.CardexReload();
    }).then(function () {
      if (typeof window.CardexOnDataChange === 'function') window.CardexOnDataChange();
      else window.location.reload();
    }).catch(function (err) {
      errEl.textContent = 'Error saving: ' + err.message;
      errEl.style.display = 'block';
    });
  }

  function submitDelete(item) {
    if (!window.confirm('Are you sure you want to delete «' + item.name + '»? This action cannot be undone.')) return;
    deleteCard(item.dbId).then(function () {
      closeForm();
      return window.CardexReload();
    }).then(function () {
      if (typeof window.CardexOnDataChange === 'function') window.CardexOnDataChange();
      else window.location.reload();
    }).catch(function (err) {
      const errEl = document.getElementById('cx-form-error');
      errEl.textContent = 'Error deleting: ' + err.message;
      errEl.style.display = 'block';
    });
  }

  function openRetiroModal() {
    const today = new Date().toISOString().slice(0, 10);
    openForm(
      '<div class="cx-form-title">Registrar retiro a ahorros</div>' +
      '<div class="cx-form-row"><label>Importe (€)</label><input type="number" step="0.01" id="cx-r-amount"/></div>' +
      '<div class="cx-form-row"><label>Fecha</label><input type="date" id="cx-r-date" value="' + today + '"/></div>' +
      '<div class="cx-form-row"><label>Nota (opcional)</label><input type="text" id="cx-r-notes" placeholder="p.ej. transferencia a cuenta de ahorros"/></div>' +
      '<div class="cx-form-error" id="cx-form-error"></div>' +
      '<div class="cx-form-actions">' +
      '<button class="cx-btn cx-btn-ghost" id="cx-form-cancel">Cancelar</button>' +
      '<button class="cx-btn cx-btn-primary" id="cx-form-save">Guardar</button>' +
      '</div>'
    );
    document.getElementById('cx-form-cancel').addEventListener('click', closeForm);
    document.getElementById('cx-form-save').addEventListener('click', function () {
      const errEl = document.getElementById('cx-form-error');
      const amount = Number(document.getElementById('cx-r-amount').value);
      const date = document.getElementById('cx-r-date').value;
      const notes = document.getElementById('cx-r-notes').value.trim();
      if (!amount || amount <= 0) { errEl.textContent = 'Introduce un importe válido.'; errEl.style.display = 'block'; return; }
      if (!date) { errEl.textContent = 'Introduce una fecha.'; errEl.style.display = 'block'; return; }
      insertRetiro({ amount: amount, withdrawal_date: date, notes: notes || null }).then(function () {
        closeForm();
        return window.CardexReload();
      }).then(function () {
        if (typeof window.CardexOnDataChange === 'function') window.CardexOnDataChange();
        else window.location.reload();
      }).catch(function (err) {
        errEl.textContent = 'Error al guardar: ' + err.message;
        errEl.style.display = 'block';
      });
    });
  }

  // ---------- Modal genérico de edición en bloque (multiselect) ----------
  // Reutilizable desde holding.html y watchlist.html: recibe qué campos mostrar y
  // qué hacer al guardar. Usa el mismo overlay que Add/Move card para mantener el
  // mismo estilo visual, en vez de duplicar CSS.
  function openBulkEditModal(options) {
    options = options || {};
    let fieldsHtml = '';
    if (options.showCondition) {
      fieldsHtml += '<div class="cx-form-row"><label>Condition</label><select id="cx-bulk-condition"><option value="">Leave unchanged</option>' + conditionOptionsHtml('') + '</select></div>';
    }
    if (options.showWatchlist) {
      fieldsHtml += '<div class="cx-form-row"><label>Move to Watchlist</label><select id="cx-bulk-watchlist"><option value="">Leave unchanged</option>' + watchlistOptionsHtml('') + '</select></div>';
    }
    fieldsHtml += '<div class="cx-form-row"><label>Comment</label><textarea id="cx-bulk-comment" rows="2" placeholder="Leave blank to not change - applies the same note to all selected"></textarea></div>';
    openForm(
      '<div class="cx-form-title">Edit ' + options.count + ' card' + (options.count === 1 ? '' : 's') + '</div>' +
      '<div style="font-size:12px;color:var(--text-muted);margin:-10px 0 14px;">Only fields you fill in will be changed. Everything else stays as-is on each card.</div>' +
      fieldsHtml +
      '<div id="cx-bulk-error" style="color:#ff5a5a;font-size:12px;margin-top:4px;display:none;"></div>' +
      '<div class="cx-form-actions">' +
      '<button class="cx-btn cx-btn-ghost" id="cx-bulk-cancel">Cancel</button>' +
      '<button class="cx-btn cx-btn-primary" id="cx-bulk-save">Apply</button>' +
      '</div>'
    );
    document.getElementById('cx-bulk-cancel').addEventListener('click', closeForm);
    document.getElementById('cx-bulk-save').addEventListener('click', function () {
      const patch = {};
      const condEl = document.getElementById('cx-bulk-condition');
      if (condEl && condEl.value) patch.condition = condEl.value;
      const wlEl = document.getElementById('cx-bulk-watchlist');
      if (wlEl && wlEl.value && wlEl.value !== '__new__') patch.watchlist_name = wlEl.value;
      const commentEl = document.getElementById('cx-bulk-comment');
      if (commentEl && commentEl.value.trim()) patch.comment = commentEl.value.trim();
      const errEl = document.getElementById('cx-bulk-error');
      if (!Object.keys(patch).length) {
        errEl.textContent = 'Fill in at least one field to apply.';
        errEl.style.display = 'block';
        return;
      }
      const saveBtn = document.getElementById('cx-bulk-save');
      saveBtn.disabled = true; saveBtn.textContent = 'Applying...';
      options.onSubmit(patch).then(function () {
        closeForm();
      }).catch(function (err) {
        errEl.textContent = 'Error: ' + err.message;
        errEl.style.display = 'block';
        saveBtn.disabled = false; saveBtn.textContent = 'Apply';
      });
    });
  }


  window.CardexAuth = { requirePassword: requirePassword, isUnlocked: isUnlocked };

  // ---------- Selección múltiple compartida (checkboxes + barra flotante) ----------
  // Una sola barra en toda la página, reutilizada por cualquier grid que la use.
  // El estado de selección vive en un Set de dbId (UUID de Supabase), no en el DOM,
  // así que sobrevive a que el grid se vuelva a pintar al filtrar/ordenar - solo hay
  // que llamar a attach() después de cada render para enganchar los checkboxes nuevos.
  function createBulkSelector(opts) {
    opts = opts || {};
    const checkboxSelector = opts.checkboxSelector || '.card-select-cb';
    const selected = new Set();
    let bar = document.getElementById('cx-bulk-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'cx-bulk-bar';
      bar.className = 'cx-bulk-bar';
      bar.innerHTML = '<span class="cx-bulk-count"></span>' +
        (opts.hideEdit ? '' : '<button class="cx-bulk-edit">Edit</button>') +
        '<button class="cx-bulk-delete">Delete</button>' +
        '<button class="cx-bulk-clear">Clear</button>';
      document.body.appendChild(bar);
    }
    function updateBar() {
      const n = selected.size;
      bar.classList.toggle('open', n > 0);
      bar.querySelector('.cx-bulk-count').textContent = n + (n === 1 ? ' card selected' : ' cards selected');
    }
    function syncCheckboxes() {
      document.querySelectorAll(checkboxSelector).forEach(function (cb) { cb.checked = selected.has(cb.dataset.dbid); });
    }
    bar.querySelector('.cx-bulk-clear').onclick = function () { selected.clear(); syncCheckboxes(); updateBar(); };
    bar.querySelector('.cx-bulk-delete').onclick = function () {
      requirePassword(function () {
        if (!window.confirm('Delete ' + selected.size + ' card(s)? This cannot be undone.')) return;
        bulkDeleteCards(Array.from(selected)).then(function () {
          selected.clear(); updateBar();
          return window.CardexReload();
        }).then(function () {
          if (typeof opts.onChanged === 'function') opts.onChanged();
        }).catch(function (err) { window.alert('Error deleting: ' + err.message); });
      });
    };
    const editBtn = bar.querySelector('.cx-bulk-edit');
    if (editBtn) {
      editBtn.onclick = function () {
        if (!selected.size) return;
        const ids = Array.from(selected);
        window.CardexOpenBulkEdit({
          count: ids.length,
          showCondition: !!opts.showCondition,
          showWatchlist: !!opts.showWatchlist,
          onSubmit: function (patch) {
            return bulkUpdateCards(ids, patch).then(function () {
              selected.clear(); updateBar();
              return window.CardexReload();
            }).then(function () {
              if (typeof opts.onChanged === 'function') opts.onChanged();
            });
          }
        });
      };
    }
    function attach() {
      document.querySelectorAll(checkboxSelector).forEach(function (cb) {
        cb.checked = selected.has(cb.dataset.dbid);
        cb.onchange = function () {
          if (cb.checked) selected.add(cb.dataset.dbid); else selected.delete(cb.dataset.dbid);
          updateBar();
        };
      });
    }
    return { attach: attach, selected: selected, updateBar: updateBar, syncCheckboxes: syncCheckboxes };
  }
  window.CardexCreateBulkSelector = createBulkSelector;

  window.CardexAPI = { insertCard: insertCard, updateCard: updateCard, deleteCard: deleteCard, bulkUpdateCards: bulkUpdateCards, bulkDeleteCards: bulkDeleteCards, insertRetiro: insertRetiro, deleteRetiro: deleteRetiro, insertWatchlist: insertWatchlist, deleteWatchlist: deleteWatchlist, reorderWatchlists: reorderWatchlists, watchlistColor: watchlistColor };

  window.CardexOpenMove = function (item) { requirePassword(function () { openMoveModal(item); }); };
  window.CardexOpenBulkEdit = function (options) { requirePassword(function () { openBulkEditModal(options); }); };
  window.CardexOpenAdd = function (status) { requirePassword(function () { openAddModal(status); }); };
  window.CardexOpenRetiro = function () { requirePassword(function () { openRetiroModal(); }); };
  window.CardexQuickDelete = function (dbId, name) {
    requirePassword(function () {
      if (!window.confirm('Are you sure you want to delete «' + (name || 'this card') + '»? This action cannot be undone.')) return;
      deleteCard(dbId).then(function () {
        return window.CardexReload();
      }).then(function () {
        if (typeof window.CardexOnDataChange === 'function') window.CardexOnDataChange();
        else window.location.reload();
      }).catch(function (err) {
        window.alert('Error deleting: ' + err.message);
      });
    });
  };

  // ---------- Atajo de teclado para añadir carta desde cualquier página ----------
  // Windows / Linux: Ctrl+Shift+A · Mac: Cmd+Shift+A (metaKey cubre la tecla Cmd)
  document.addEventListener('keydown', function (e) {
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (e.target && e.target.isContentEditable)) return;
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'a' || e.key === 'A')) {
      e.preventDefault();
      window.CardexOpenAdd(defaultStatusForPage());
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    buildMenu();
    buildFormOverlay();
  });
})();
