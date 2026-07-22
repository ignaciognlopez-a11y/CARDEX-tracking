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
      qty: 1,
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
      watchlistName: row.watchlist_name || 'General'
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
      fetch(SUPABASE_URL + "/rest/v1/riftbound_watchlists?select=*&order=created_at", { headers: baseHeaders })
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
      // Nombres de watchlist: los que existan como fila propia + cualquiera que aparezca
      // ya en una carta (por si acaso) + "General" siempre presente.
      const namesSet = {};
      watchlistRows.forEach(function (w) { namesSet[w.name] = true; });
      cards.forEach(function (c) { if (c.status === 'Watchlist') namesSet[c.watchlistName || 'General'] = true; });
      namesSet['General'] = true;
      const watchlists = Object.keys(namesSet).sort(function (a, b) { return a === 'General' ? -1 : b === 'General' ? 1 : a.localeCompare(b); });
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

  function insertWatchlist(name) {
    return fetch(SUPABASE_URL + "/rest/v1/riftbound_watchlists", {
      method: "POST",
      headers: Object.assign({ "Prefer": "return=representation" }, writeHeaders),
      body: JSON.stringify({ name: name })
    }).then(function (r) { if (!r.ok) return r.text().then(function(t){throw new Error(t);}); return r.json(); });
  }

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
  .cx-form-row input,.cx-form-row select{background:rgba(255,255,255,0.05);border:1px solid rgba(184,145,46,0.25);border-radius:7px;padding:8px 10px;color:#f2f2f2;font-size:13px;font-family:inherit;}
  .cx-form-row input:focus,.cx-form-row select:focus{outline:none;border-color:#b8912e;}
  .cx-form-grid2{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
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
  const SET_OPTIONS = ['Origins', 'Unleashed', 'Spiritforged', 'Proving Grounds', 'Project K Promos', 'Origins Promos', 'Spiritforged Promos', 'Unleashed Promos'];
  const RARITY_OPTIONS = ['Epic', 'Rare', 'Uncommon', 'Common', 'Showcase', 'Overnumbered', 'Signed Showcase', 'Plated', 'Promo', 'Other', 'N/A'];

  // Condición física de la carta (solo singles, no sealed). Mapea al parámetro
  // minCondition de Cardmarket: minCondition=N muestra listings de esa condición
  // o mejor, y como esas son casi siempre las más baratas, el mínimo del filtro
  // equivale en la práctica al precio de esa condición concreta.
  const CONDITION_OPTIONS = ['NM', 'EX', 'GD', 'LP', 'PL'];
  const CONDITION_MIN_MAP = { MT: 1, NM: 2, EX: 3, GD: 4, LP: 5, PL: 6, PO: 7 };
  function isSealedUrl(url) {
    try { return new URL(url).pathname.split('/').filter(Boolean).indexOf('Sealed') !== -1; }
    catch (e) { return false; }
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
    if (status === 'Holding') {
      return '<div class="cx-form-grid2">' +
        '<div class="cx-form-row"><label>Buy Price (€)</label><input type="number" step="0.01" id="cx-f-buyPrice" value="' + (item.buyPrice != null ? item.buyPrice : '') + '"/></div>' +
        '<div class="cx-form-row"><label>Buy Date</label><input type="date" id="cx-f-buyDate" value="' + (item.buyDate || '') + '"/></div>' +
        '</div>' + conditionRow;
    }
    if (status === 'Sold') {
      return '<div class="cx-form-grid2">' +
        '<div class="cx-form-row"><label>Sell Price (€)</label><input type="number" step="0.01" id="cx-f-sellPrice" value="' + (item.sellPrice != null ? item.sellPrice : '') + '"/></div>' +
        '<div class="cx-form-row"><label>Sell Date</label><input type="date" id="cx-f-sellDate" value="' + (item.sellDate || '') + '"/></div>' +
        '</div>' + conditionRow;
    }
    if (status === 'Watchlist') {
      return '<div class="cx-form-row"><label>Watchlist</label><select id="cx-f-watchlist">' + watchlistOptionsHtml(item.watchlistName || 'General') + '</select></div>' + conditionRow;
    }
    return conditionRow;
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
      const isSealed = parts.indexOf('Sealed') !== -1;
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
      const idx = parts.findIndex(function (p) { return p === 'Singles' || p === 'Sealed'; });
      const type = idx >= 0 ? parts[idx] : null;
      const setSeg = idx >= 0 ? parts[idx + 1] : null;
      const slug = parts[parts.length - 1] || '';
      const nameGuess = decodeURIComponent(slug).replace(/-/g, ' ').trim();
      let setGuess = '';
      if (setSeg) {
        const norm = decodeURIComponent(setSeg).replace(/-/g, ' ').trim().toLowerCase();
        const match = SET_OPTIONS.find(function (s) { return s.toLowerCase() === norm; });
        if (match) setGuess = match;
      }
      const hasMinCondition = /minCondition=/.test(u.search);
      const condition = type === 'Sealed' ? 'Sealed' : (hasMinCondition ? 'NM' : '');
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
        '<div class="cx-form-row"><label>Cardmarket link</label><input type="text" id="cx-f-url" placeholder="https://www.cardmarket.com/en/Riftbound/Products/..."/></div>' +
        (showPrice ? '<div class="cx-form-row"><label>' + priceLabel + '</label><input type="number" step="0.01" id="cx-f-price"/></div>' : '') +
        (showCondition ? '<div class="cx-form-row"><label>Condition</label><select id="cx-f-condition">' + conditionOptionsHtml('NM') + '</select></div>' : '') +
        (status === 'Watchlist' ? '<div class="cx-form-row"><label>Watchlist</label><select id="cx-f-watchlist">' + watchlistOptionsHtml('General') + '</select></div>' : '') +
        '<div style="font-size:11px;color:var(--text-muted);margin:2px 0 10px;line-height:1.4;">Card name and set are guessed from the link — you can refine them anytime from chat. The image fills in automatically later, no need to add it here.</div>' +
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
    }
    render();
  }

  function submitAdd(status) {
    const errEl = document.getElementById('cx-form-error');
    const url = document.getElementById('cx-f-url').value.trim();
    if (!url) { errEl.textContent = 'The Cardmarket link is required.'; errEl.style.display = 'block'; return; }
    const priceEl = document.getElementById('cx-f-price');
    let price = null;
    if (priceEl) {
      if (!priceEl.value) { errEl.textContent = 'Enter the price.'; errEl.style.display = 'block'; return; }
      price = Number(priceEl.value);
    }
    let normalizedUrl = normalizeCardmarketUrl(url);
    const parsed = parseCardmarketUrl(normalizedUrl);
    const conditionEl = document.getElementById('cx-f-condition');
    let conditionValue = parsed.condition || null;
    if (conditionEl && !isSealedUrl(normalizedUrl)) {
      conditionValue = conditionEl.value;
      normalizedUrl = applyConditionToUrl(normalizedUrl, conditionValue);
    }
    const today = new Date().toISOString().slice(0, 10);
    const fields = {
      card_name: parsed.name || 'Unnamed card (please update)',
      set: parsed.set || null,
      condition: conditionValue,
      cardmarket_url: normalizedUrl,
      card_image: null,
      status: status,
      current_price: price
    };
    if (status === 'Holding') {
      fields.buy_price = price;
      fields.buy_date = today;
    }
    if (status === 'Sold') {
      fields.sell_price = price;
      fields.sell_date = today;
    }
    if (status === 'Watchlist') {
      const wlEl = document.getElementById('cx-f-watchlist');
      fields.watchlist_name = (wlEl && wlEl.value && wlEl.value !== '__new__') ? wlEl.value : 'General';
    }
    insertCard(fields).then(function () {
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
    const condEl = document.getElementById('cx-f-condition');
    if (condEl) {
      patch.condition = condEl.value;
      if (item.cardmarketUrl) patch.cardmarket_url = applyConditionToUrl(item.cardmarketUrl, condEl.value);
    }
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

  window.CardexAuth = { requirePassword: requirePassword, isUnlocked: isUnlocked };
  window.CardexAPI = { insertCard: insertCard, updateCard: updateCard, deleteCard: deleteCard, insertRetiro: insertRetiro, deleteRetiro: deleteRetiro, insertWatchlist: insertWatchlist };
  window.CardexOpenMove = function (item) { requirePassword(function () { openMoveModal(item); }); };
  window.CardexOpenAdd = function (status) { requirePassword(function () { openAddModal(status); }); };
  window.CardexOpenRetiro = function () { requirePassword(function () { openRetiroModal(); }); };

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
