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
      excludeFromCap: row.exclude_from_cap === true
    };
  }

  function loadData() {
    return Promise.all([
      fetch(SUPABASE_URL + "/rest/v1/riftbound_inversiones?select=*", { headers: baseHeaders })
        .then(function (r) { if (!r.ok) throw new Error("Supabase fetch failed: " + r.status); return r.json(); }),
      fetch(SUPABASE_URL + "/rest/v1/riftbound_gastos?select=price", { headers: baseHeaders })
        .then(function (r) { return r.ok ? r.json() : []; }).catch(function () { return []; })
    ]).then(function (results) {
      const rows = results[0];
      const gastos = results[1];
      const suppliesTotal = gastos.reduce(function (s, g) { return s + Number(g.price || 0); }, 0);
      const cards = rows.map(mapRow);
      const updatedAt = rows.reduce(function (max, row) {
        const u = row.updated_at ? row.updated_at.slice(0, 10) : null;
        return (u && (!max || u > max)) ? u : max;
      }, null);
      window.portfolioData = { updatedAt: updatedAt || new Date().toISOString().slice(0, 10), cards: cards, suppliesTotal: suppliesTotal };
      return window.portfolioData;
    }).catch(function (err) {
      console.error("Error cargando datos de Supabase:", err);
      window.portfolioData = { updatedAt: null, cards: [], suppliesTotal: 0 };
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
  `;
  const styleTag = document.createElement('style');
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  // ---------- Menú hamburguesa ----------
  const PAGES = [
    { href: 'index.html', label: 'Overview' },
    { href: 'holding.html', label: 'Holding' },
    { href: 'watchlist.html', label: 'Watchlist' },
    { href: 'invested.html', label: 'Invested' },
    { href: 'sold.html', label: 'Sold' },
    { href: 'pricecheck.html', label: 'Price Check' }
  ];

  function currentFile() {
    let p = location.pathname.split('/').pop();
    if (!p) p = 'index.html';
    return p;
  }

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

      const headerAddBtn = document.createElement('button');
      headerAddBtn.className = 'cx-header-add';
      headerAddBtn.id = 'cx-header-add';
      headerAddBtn.textContent = '+ Add card';
      headerAddBtn.addEventListener('click', function () { requirePassword(function () { openAddModal(); }); });
      header.appendChild(headerAddBtn);
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
    if (status === 'Holding') {
      return '<div class="cx-form-grid2">' +
        '<div class="cx-form-row"><label>Buy Price (€)</label><input type="number" step="0.01" id="cx-f-buyPrice" value="' + (item.buyPrice != null ? item.buyPrice : '') + '"/></div>' +
        '<div class="cx-form-row"><label>Buy Date</label><input type="date" id="cx-f-buyDate" value="' + (item.buyDate || '') + '"/></div>' +
        '</div>';
    }
    if (status === 'Sold') {
      return '<div class="cx-form-grid2">' +
        '<div class="cx-form-row"><label>Sell Price (€)</label><input type="number" step="0.01" id="cx-f-sellPrice" value="' + (item.sellPrice != null ? item.sellPrice : '') + '"/></div>' +
        '<div class="cx-form-row"><label>Sell Date</label><input type="date" id="cx-f-sellDate" value="' + (item.sellDate || '') + '"/></div>' +
        '</div>';
    }
    return '';
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

  function openAddModal(prefillStatus) {
    let status = prefillStatus || 'Holding';
    function render() {
      const showPrice = status !== 'Watchlist';
      const priceLabel = status === 'Sold' ? 'Sell price (€)' : 'Price paid (€)';
      openForm(
        '<div class="cx-form-title">Add card</div>' +
        '<div class="cx-form-status-tabs" id="cx-add-tabs">' +
        ['Holding', 'Watchlist', 'Sold'].map(function (s) {
          return '<div class="cx-status-tab' + (s === status ? ' active' : '') + '" data-status="' + s + '">' + s + '</div>';
        }).join('') +
        '</div>' +
        '<div class="cx-form-row"><label>Cardmarket link</label><input type="text" id="cx-f-url" placeholder="https://www.cardmarket.com/en/Riftbound/Products/..."/></div>' +
        (showPrice ? '<div class="cx-form-row"><label>' + priceLabel + '</label><input type="number" step="0.01" id="cx-f-price"/></div>' : '') +
        '<div style="font-size:11px;color:var(--text-muted);margin:2px 0 10px;line-height:1.4;">Card name, set and condition are guessed from the link — you can refine them anytime from chat.</div>' +
        '<div class="cx-form-error" id="cx-form-error"></div>' +
        '<div class="cx-form-actions">' +
        '<button class="cx-btn cx-btn-ghost" id="cx-form-cancel">Cancel</button>' +
        '<button class="cx-btn cx-btn-primary" id="cx-form-save">Save</button>' +
        '</div>'
      );
      document.querySelectorAll('#cx-add-tabs .cx-status-tab').forEach(function (t) {
        t.addEventListener('click', function () { status = t.dataset.status; render(); });
      });
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
    const parsed = parseCardmarketUrl(url);
    const today = new Date().toISOString().slice(0, 10);
    const fields = {
      card_name: parsed.name || 'Unnamed card (please update)',
      set: parsed.set || null,
      condition: parsed.condition || null,
      cardmarket_url: url,
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
          return '<div class="cx-move-btn' + (s === targetStatus ? ' current' : '') + '" data-status="' + s + '">' + s + '</div>';
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

  window.CardexAuth = { requirePassword: requirePassword, isUnlocked: isUnlocked };
  window.CardexAPI = { insertCard: insertCard, updateCard: updateCard, deleteCard: deleteCard };
  window.CardexOpenMove = function (item) { requirePassword(function () { openMoveModal(item); }); };
  window.CardexOpenAdd = function (status) { requirePassword(function () { openAddModal(status); }); };

  document.addEventListener('DOMContentLoaded', function () {
    buildMenu();
    buildFormOverlay();
  });
})();
