// ============================================================
//  RIFTBOUND PORTFOLIO — data.js
//  Fuente: Notion DB f298acf4-dc24-48e2-bc76-8d6c9bd193d6
//  Actualizado: 2026-06-23
//  Filtros Cardmarket: EN, NM, excluir UK
// ============================================================

// Parámetros base para todos los links de Cardmarket
// language=1 (EN), minCondition=2 (Near Mint o mejor — 3 sería Excellent, incorrecto), sellerCountry excluye UK
const CM_FILTERS = '?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc';
const CM = 'https://www.cardmarket.com';

window.portfolioData = {
  updatedAt: "2026-07-07",

  cards: [

    // ── SINGLES — ORIGINS ────────────────────────────────────

    {
      id: "OGN-303s",
      name: "OGN Ahri, Nine-Tailed Fox (V.3 — Signed Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 0,
      currentPrice: 1995,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-303s.webp",
      cardNumber: "OGN-303*",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Origins/Ahri-Nine-Tailed-Fox-V3-Overnumbered" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 860 },
        { date: "2026-06-23", price: 1995 },
        { date: "2026-06-24", price: 1890 },
        { date: "2026-06-26", price: 1995 },
        { date: "2026-07-03", price: 1995 },
        { date: "2026-07-07", price: 1995.0 }
      ]
    },

    {
      id: "OGN-303s-2",
      name: "OGN Ahri, Nine-Tailed Fox (V.3 — Signed Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 1800,
      currentPrice: 1995,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-303s.webp",
      cardNumber: "OGN-303*",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Origins/Ahri-Nine-Tailed-Fox-V3-Overnumbered" + CM_FILTERS,
      priceHistory: [
        { date: "2026-07-02", price: 1995 },
        { date: "2026-07-03", price: 1995 },
        { date: "2026-07-07", price: 1995.0 }
      ]
    },

    {
      id: "OGN-308",
      name: "OGN Viktor, Herald of the Arcane (V.2 — Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 0,
      currentPrice: 60,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-308.webp",
      cardNumber: "OGN-308",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Origins/Viktor-Herald-of-the-Arcane-V2-Overnumbered" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 70 },
        { date: "2026-06-23", price: 60 },
        { date: "2026-06-24", price: 60 },
        { date: "2026-06-26", price: 62.95 },
        { date: "2026-06-29", price: 62.5 },
        { date: "2026-07-07", price: 60.0 }
      ]
    },

    {
      id: "OGN-246b",
      name: "OGNX Viktor, Leader (V.2 — Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 55,
      currentPrice: 78.94,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-246b.webp",
      cardNumber: "OGN-246b",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Origins-Promos/Viktor-Leader-V2-Showcase" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 58 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 60 },
        { date: "2026-06-29", price: 60 },        { date: "2026-07-06", price: 78.94 },
        { date: "2026-07-07", price: 78.94 }
      ]
    },

    {
      id: "OGN-302",
      name: "OGN Darius, Hand of Noxus (V.2 — Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 37,
      currentPrice: 29,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-302.webp",
      cardNumber: "OGN-302",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Origins/Darius-Hand-of-Noxus-V2-Overnumbered" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 37 },
        { date: "2026-06-23", price: 29.95 },
        { date: "2026-06-24", price: 29.95 },
        { date: "2026-06-26", price: 30 },
        { date: "2026-06-29", price: 29.95 },
        { date: "2026-07-07", price: 29.0 }
      ]
    },

    {
      id: "OGN-151b",
      name: "OGNX Lee Sin, Centered",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 35,
      currentPrice: 35,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-151b.webp",
      cardNumber: "OGN-151b",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Centered" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 30 },
        { date: "2026-06-23", price: 24.99 },
        { date: "2026-06-24", price: 24.5 },
        { date: "2026-06-26", price: 24.5 },
        { date: "2026-06-29", price: 24.99 },
        { date: "2026-07-07", price: 35 }
      ]
    },

    {
      id: "OGN-151b-2",
      name: "Lee Sin, Centered",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 2,
      buyPrice: 40,
      currentPrice: 35,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-151b.webp",
      cardNumber: "OGN-151b",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Centered" + CM_FILTERS,
      priceHistory: [
        { date: "2026-07-06", price: 24.99 },
        { date: "2026-07-07", price: 35 }
      ]
    },

    {
      id: "OGN-151b-3",
      name: "Lee Sin, Centered",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 48,
      currentPrice: 35,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-151b.webp",
      cardNumber: "OGN-151b",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Centered" + CM_FILTERS,
      priceHistory: [
        { date: "2026-07-07", price: 35 }
      ]
    },

    {
      id: "OGN-119a",
      name: "Ahri, Inquisitive (V.2 - Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 2,
      buyPrice: 4,
      currentPrice: 7,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-119.webp",
      cardNumber: "OGN-119a",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Origins/Ahri-Inquisitive-V2-Overnumbered" + CM_FILTERS,
      priceHistory: [
        { date: "2026-07-06", price: 7 },
        { date: "2026-07-07", price: 7.0 }
      ]
    },

    // ── SINGLES — UNLEASHED ──────────────────────────────────

    {
      id: "UNL-235",
      name: "OGN LeBlanc, Deceiver (V.2 — Showcase)",
      set: "Unleashed",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 88,
      currentPrice: 63,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-235.webp",
      cardNumber: "UNL-235",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Leblanc-Deceiver-V2-Showcase" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 70 },
        { date: "2026-06-23", price: 68 },
        { date: "2026-06-24", price: 68 },
        { date: "2026-06-26", price: 68 },
        { date: "2026-07-07", price: 63.0 }
      ]
    },

    {
      id: "UNL-224-a",
      name: "UNL Mystic Poro",
      set: "Unleashed",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 30,
      currentPrice: 70,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-224.webp",
      cardNumber: "UNL-224",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Mystic-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 80 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 60 },
        { date: "2026-06-29", price: 60 },        { date: "2026-07-06", price: 76 },
        { date: "2026-07-07", price: 70 }
      ]
    },

    {
      id: "UNL-224-b",
      name: "UNL Mystic Poro",
      set: "Unleashed",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 34.5,
      currentPrice: 70,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-224.webp",
      cardNumber: "UNL-224",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Mystic-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 80 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 60 },
        { date: "2026-06-29", price: 60 },        { date: "2026-07-06", price: 76 },
        { date: "2026-07-07", price: 70 }
      ]
    },

    {
      id: "UNL-220",
      name: "UNL Pouty Poro",
      set: "Unleashed",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 40,
      currentPrice: 74.89,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-220.webp",
      cardNumber: "UNL-220",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Pouty-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 45 },
        { date: "2026-06-23", price: 45 },
        { date: "2026-06-29", price: 79.5 },
        { date: "2026-07-03", price: 70 },        { date: "2026-07-06", price: 74.99 },
        { date: "2026-07-07", price: 74.89 }
      ]
    },

    {
      id: "UNL-222",
      name: "UNL Plundering Poro",
      set: "Unleashed",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 45,
      currentPrice: 70,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-222.webp",
      cardNumber: "UNL-222",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Plundering-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 54 },
        { date: "2026-06-23", price: 72 },
        { date: "2026-06-24", price: 72 },
        { date: "2026-06-26", price: 78 },
        { date: "2026-06-29", price: 73.99 },
        { date: "2026-07-03", price: 72.95 },        { date: "2026-07-06", price: 70 },
        { date: "2026-07-07", price: 70.0 }
      ]
    },

    {
      id: "UNL-223",
      name: "UNL Veteran Poro",
      set: "Unleashed",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 27.99,
      currentPrice: 60,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-223.webp",
      cardNumber: "UNL-223",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Veteran-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 35 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 73 },
        { date: "2026-06-29", price: 57.21 },
        { date: "2026-07-03", price: 62 },
        { date: "2026-07-07", price: 60 }
      ]
    },

    {
      id: "UNL-225",
      name: "UNL Daring Poro",
      set: "Unleashed",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 36.5,
      currentPrice: 60,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-225.webp",
      cardNumber: "UNL-225",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Daring-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 70 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 75 },
        { date: "2026-06-29", price: 74.95 },        { date: "2026-07-06", price: 68.21 },
        { date: "2026-07-07", price: 60 }
      ]
    },

    {
      id: "UNL-221-a",
      name: "UNL Lonely Poro",
      set: "Unleashed",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 50,
      currentPrice: 85,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-221.webp",
      cardNumber: "UNL-221",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Lonely-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 100 },
        { date: "2026-06-23", price: 89 },
        { date: "2026-06-24", price: 89.99 },
        { date: "2026-06-26", price: 89.99 },
        { date: "2026-06-29", price: 89.99 },        { date: "2026-07-06", price: 98 },
        { date: "2026-07-07", price: 85 }
      ]
    },

    {
      id: "UNL-221-b",
      name: "UNL Lonely Poro",
      set: "Unleashed",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 40,
      currentPrice: 85,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-221.webp",
      cardNumber: "UNL-221",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Lonely-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 100 },
        { date: "2026-06-23", price: 89 },
        { date: "2026-06-24", price: 89.99 },
        { date: "2026-06-26", price: 89.99 },
        { date: "2026-06-29", price: 89.99 },        { date: "2026-07-06", price: 98 },
        { date: "2026-07-07", price: 85 }
      ]
    },

    // ── SINGLES — SPIRITFORGED ───────────────────────────────

    {
      id: "SFD-245",
      name: "SFD Jax, Grandmaster at Arms (V.2 — Showcase)",
      set: "Spiritforged",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 50,
      currentPrice: 26,
      image: "https://static.dotgg.gg/riftbound/cards/SFD-245.webp",
      cardNumber: "SFD-245",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Spiritforged/Jax-Grandmaster-at-Arms-V2-Showcase" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 28 },
        { date: "2026-06-23", price: 28 },
        { date: "2026-07-03", price: 26.21 },        { date: "2026-07-06", price: 25.99 },
        { date: "2026-07-07", price: 26 }
      ]
    },

    {
      id: "SFD-232",
      name: "SFD Sett, Brawler (V.1 — Showcase)",
      set: "Spiritforged",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 58,
      currentPrice: 45,
      image: "https://static.dotgg.gg/riftbound/cards/SFD-232.webp",
      cardNumber: "SFD-232",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Spiritforged/Sett-Brawler-V1-Showcase" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 45 },
        { date: "2026-06-23", price: 55 },
        { date: "2026-06-24", price: 52 },
        { date: "2026-06-26", price: 50 },
        { date: "2026-06-29", price: 50 },
        { date: "2026-07-03", price: 45 },        { date: "2026-07-06", price: 50 },
        { date: "2026-07-07", price: 45 }
      ]
    },

    // ── SELLADO ───────────────────────────────────────────────

    {
      id: "UNL-CASE",
      name: "Unleashed Booster Box Case (6×)",
      set: "Unleashed",
      condition: "Sealed",
      status: "Holding",
      qty: 1,
      buyPrice: 590,
      currentPrice: 606.11,
      image: "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/46c776a96cc14227a260d24489f10b4090cd2cd9-2560x2560.png",
      cardNumber: "UNL Case (6x)",
      cardmarketUrl: CM + "/en/Riftbound/Products/Booster-Boxes/Unleashed-Case-6x-Booster-Box?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
      priceHistory: [
        { date: "2026-06-22", price: 595 },
        { date: "2026-06-23", price: 643.9 },
        { date: "2026-06-24", price: 643.9 },
        { date: "2026-06-26", price: 642 },
        { date: "2026-07-03", price: 636.5 },        { date: "2026-07-06", price: 606.11 },
        { date: "2026-07-07", price: 606.11 }
      ]
    },

    {
      id: "OGN-BOX",
      name: "Origins Booster Box",
      set: "Origins",
      condition: "Sealed",
      status: "Holding",
      qty: 1,
      buyPrice: 128,
      currentPrice: 145.95,
      image: "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/e026ee1a44bc86095f9afc5949c5fdb519b29c66-2560x2560.png",
      cardNumber: "OGN Box",
      cardmarketUrl: CM + "/en/Riftbound/Products/Booster-Boxes/Origins-Booster-Box?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
      priceHistory: [
        { date: "2026-06-22", price: 150 },
        { date: "2026-06-23", price: 155.19 },
        { date: "2026-06-24", price: 161.89 },
        { date: "2026-06-26", price: 159.94 },
        { date: "2026-06-29", price: 157 },
        { date: "2026-07-03", price: 156.85 },        { date: "2026-07-06", price: 146.9 },
        { date: "2026-07-07", price: 145.95 }
      ]
    },

    {
      id: "PG-BOX",
      name: "Proving Grounds",
      set: "Proving Grounds",
      condition: "Sealed",
      status: "Holding",
      qty: 1,
      buyPrice: 45,
      currentPrice: 57.9,
      image: "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/a2ca8f9bc247fc5435432e9a97c4efc5b79020c4-2560x2560.png",
      cardNumber: "PG Box",
      cardmarketUrl: CM + "/en/Riftbound/Products/Box-Sets/Proving-Grounds?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
      priceHistory: [
        { date: "2026-06-22", price: 35 },
        { date: "2026-06-23", price: 59.89 },
        { date: "2026-06-24", price: 59.89 },
        { date: "2026-06-26", price: 60.5 },
        { date: "2026-07-03", price: 63.75 },        { date: "2026-07-06", price: 57.9 },
        { date: "2026-07-07", price: 57.9 }
      ]
    },

    // ── WATCHLIST ─────────────────────────────────────────────

    {
      id: "WL-OGNX-197b",
      name: "Teemo, Scout (V.2 — Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 679.97,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-197b.webp",
      cardNumber: "OGNX-197b",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Teemo-Scout-V2-Showcase?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 475 },
        { date: "2026-06-24", price: 530 },
        { date: "2026-06-26", price: 545 },        { date: "2026-07-06", price: 679.97 }
      ]
    },

    {
      id: "WL-UNL-221",
      name: "Lonely Poro",
      set: "Unleashed",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 89.99,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-221.webp",
      cardNumber: "UNL-221",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Lonely-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 89 },
        { date: "2026-06-24", price: 89.99 },
        { date: "2026-06-26", price: 89.99 },
        { date: "2026-06-29", price: 89.99 }
      ]
    },

    {
      id: "WL-UNL-224",
      name: "Mystic Poro",
      set: "Unleashed",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 60,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-224.webp",
      cardNumber: "UNL-224",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Mystic-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 45 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 60 },
        { date: "2026-06-29", price: 60 }
      ]
    },

    {
      id: "WL-UNL-225",
      name: "Daring Poro",
      set: "Unleashed",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 69,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-225.webp",
      cardNumber: "UNL-225",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Daring-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 69 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 75 },
        { date: "2026-06-29", price: 74.95 }
      ]
    },

    {
      id: "WL-UNL-223",
      name: "Veteran Poro",
      set: "Unleashed",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 65,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-223.webp",
      cardNumber: "UNL-223",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Veteran-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 66 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 73 },
        { date: "2026-06-29", price: 57.21 }
      ]
    },

    {
      id: "WL-UNL-222",
      name: "Plundering Poro",
      set: "Unleashed",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 75,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-222.webp",
      cardNumber: "UNL-222",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Plundering-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 72 },
        { date: "2026-06-24", price: 72 },
        { date: "2026-06-26", price: 78 },
        { date: "2026-06-29", price: 73.99 }
      ]
    },

    {
      id: "WL-UNL-220",
      name: "Pouty Poro",
      set: "Unleashed",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 74.9,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-220.webp",
      cardNumber: "UNL-220",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Pouty-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 75 },
        { date: "2026-06-24", price: 89.99 },
        { date: "2026-06-26", price: 80 },
        { date: "2026-06-29", price: 79.5 }
      ]
    },

    {
      id: "WL-UNL-238",
      name: "Baron Nashor (V.3 — Showcase)",
      set: "Unleashed",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 925,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-238.webp",
      cardNumber: "UNL-238",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Baron-Nashor-V3-Showcase?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 900 },
        { date: "2026-06-24", price: 870 },
        { date: "2026-06-26", price: 850 },        { date: "2026-07-06", price: 925 }
      ]
    },

    {
      id: "ARCANE-BOX",
      name: "Arcane Box Set",
      set: "Origins",
      condition: "Sealed",
      status: "Holding",
      qty: 1,
      buyPrice: 190,
      currentPrice: 295.49,
      image: "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/2f0e070b2ea935e916cd8fa31253791a37d3a956-2560x2560.png",
      cardNumber: "Arcane Box Set",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Box-Sets/Arcane-Box-Set?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 200 },
        { date: "2026-06-24", price: 179 },
        { date: "2026-06-26", price: 184 },
        { date: "2026-06-29", price: 216.65 },
        { date: "2026-07-03", price: 305.48 },        { date: "2026-07-06", price: 320.49 },
        { date: "2026-07-07", price: 295.49 }
      ]
    },

    {
      id: "WL-SFD-227s",
      name: "Ahri, Inquisitive (V.2 — Signed Showcase)",
      set: "Spiritforged",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 2900,
      image: "https://static.dotgg.gg/riftbound/cards/SFD-227.webp",
      cardNumber: "SFD-227*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Spiritforged/Ahri-Inquisitive-V2-Signed-Showcase?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 2800 },
        { date: "2026-06-24", price: 2899 },
        { date: "2026-06-26", price: 2899 },
        { date: "2026-06-29", price: 2900 }
      ]
    },

    {
      id: "WL-OGN-307s",
      name: "Teemo, Swift Scout (V.3 — Signed Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 848.99,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-307s.webp",
      cardNumber: "OGN-307*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Teemo-Swift-Scout-V3-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 850 },
        { date: "2026-06-24", price: 799 },
        { date: "2026-06-26", price: 799 },        { date: "2026-07-06", price: 848.99 }
      ]
    },

    {
      id: "WL-OGN-310s",
      name: "Sett, The Boss (V.3 — Signed Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 475,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-310s.webp",
      cardNumber: "OGN-310*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Sett-The-Boss-V3-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 550 },
        { date: "2026-06-24", price: 530 },
        { date: "2026-06-26", price: 500 },
        { date: "2026-06-29", price: 490 },        { date: "2026-07-06", price: 475 }
      ]
    },

    {
      id: "WL-OGN-305s",
      name: "Yasuo, Unforgiven (V.3 — Signed Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 589.99,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-305s.webp",
      cardNumber: "OGN-305*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Yasuo-Unforgiven-V3-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 590 },
        { date: "2026-06-24", price: 589.99 },
        { date: "2026-06-26", price: 589.99 },
        { date: "2026-06-29", price: 569.9 },        { date: "2026-07-06", price: 589.99 }
      ]
    },

    {
      id: "WL-OGN-300s",
      name: "Volibear, Relentless Storm (V.3 — Signed Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 449.99,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-300s.webp",
      cardNumber: "OGN-300*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Volibear-Relentless-Storm-V3-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 480 },
        { date: "2026-06-24", price: 490 },
        { date: "2026-06-26", price: 500 },
        { date: "2026-06-29", price: 449.99 }
      ]
    },

    {
      id: "WL-OGN-308s",
      name: "Viktor, Herald of the Arcane (V.3 — Signed Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 570,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-308s.webp",
      cardNumber: "OGN-308*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Viktor-Herald-of-the-Arcane-V3-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 500 },
        { date: "2026-06-24", price: 500 },
        { date: "2026-06-26", price: 585 },
        { date: "2026-06-29", price: 570 }
      ]
    },

    {
      id: "WL-OGN-301s",
      name: "Jinx, Loose Cannon (V.3 — Signed Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 950,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-301s.webp",
      cardNumber: "OGN-301*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Jinx-Loose-Cannon-V3-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 1000 },
        { date: "2026-06-24", price: 950 },
        { date: "2026-06-26", price: 950 },
        { date: "2026-06-29", price: 950 }
      ]
    },

    {
      id: "WL-OGN-309s",
      name: "Miss Fortune, Bounty Hunter (V.3 — Signed Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 850,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-309s.webp",
      cardNumber: "OGN-309*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Miss-Fortune-Bounty-Hunter-V3-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 767 },
        { date: "2026-06-24", price: 700 },
        { date: "2026-06-26", price: 700 },
        { date: "2026-06-29", price: 766.77 },        { date: "2026-07-06", price: 850 }
      ]
    },

    {
      id: "WL-OGN-304s",
      name: "Lee Sin, Blind Monk (V.3 — Signed Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 600,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-304s.webp",
      cardNumber: "OGN-304*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Lee-Sin-Blind-Monk-V3-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 600 },
        { date: "2026-06-24", price: 600 },
        { date: "2026-06-26", price: 600 },
        { date: "2026-06-29", price: 600 }
      ]
    },

    {
      id: "WL-OGN-302s",
      name: "Darius, Hand of Noxus (V.3 — Signed Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 350,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-302s.webp",
      cardNumber: "OGN-302*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Darius-Hand-of-Noxus-V3-Signed-Showcase?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 350 },
        { date: "2026-06-24", price: 350 },
        { date: "2026-06-26", price: 335 },
        { date: "2026-06-29", price: 350 },        { date: "2026-07-06", price: 350 }
      ]
    },

    {
      id: "WL-OGN-306s",
      name: "Leona, Radiant Dawn (V.3 — Signed Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 500,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-306s.webp",
      cardNumber: "OGN-306*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Leona-Radiant-Dawn-V3-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 475 },
        { date: "2026-06-24", price: 550 },
        { date: "2026-06-26", price: 550 },
        { date: "2026-06-29", price: 500 }
      ]
    },

    {
      id: "WL-OGN-299s",
      name: "Kai'Sa, Daughter of the Void (V.3 — Signed Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 1900,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-299s.webp",
      cardNumber: "OGN-299s",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/KaiSa-Daughter-of-the-Void-V3-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      priceHistory: [{ date: "2026-06-22", price: 1848 },
        { date: "2026-06-24", price: 1847.9 },
        { date: "2026-06-26", price: 1850 },
        { date: "2026-06-29", price: 1850 },        { date: "2026-07-06", price: 1900 }
      ],
      usSales: []
    },

    {
      id: "WL-OGNX-066",
      name: "Ahri, Alluring (Origins Promos)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 39.9,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-066.webp",
      cardNumber: "OGN-066",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Ahri-Alluring?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-23", price: 34.89 },
        { date: "2026-06-24", price: 34.89 },
        { date: "2026-06-26", price: 39.9 }
      ]
    },

    {
      id: "WL-OGNX-078",
      name: "Lee Sin, Ascetic (Origins Promos)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 10,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-078.webp",
      cardNumber: "OGN-078",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Ascetic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-23", price: 5 },
        { date: "2026-06-24", price: 5 },
        { date: "2026-06-26", price: 10 }
      ]
    },

    {
      id: "WL-OGNX-202",
      name: "Jinx, Rebel (V.1) (Origins Promos)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 41.8,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-202.webp",
      cardNumber: "OGN-202",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Jinx-Rebel-V1-Epic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-23", price: 40 },
        { date: "2026-06-24", price: 40 },
        { date: "2026-06-26", price: 41.8 }
      ]
    },

    {
      id: "WL-OGNX-246",
      name: "Viktor, Leader (V.1) (Origins Promos)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 74.99,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-246.webp",
      cardNumber: "OGN-246",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Viktor-Leader-V1-Epic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-23", price: 8 },
        { date: "2026-06-24", price: 8 },
        { date: "2026-06-26", price: 9 }
      ]
    },

    {
      id: "WL-OGNX-251",
      name: "Jinx, Loose Cannon (Origins Promos)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 25,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-251.webp",
      cardNumber: "OGN-251",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Jinx-Loose-Cannon?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-23", price: 20 },
        { date: "2026-06-24", price: 20 },
        { date: "2026-06-26", price: 25 }
      ]
    },

    {
      id: "WL-OGNX-265",
      name: "Viktor, Herald of the Arcane (Origins Promos)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 9,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-265.webp",
      cardNumber: "OGN-265",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Viktor-Herald-of-the-Arcane?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-23", price: 8 },
        { date: "2026-06-24", price: 8 },
        { date: "2026-06-26", price: 9 }
      ]
    }

,
    {
      id: "WL-OGNX-036a",
      name: "Vi, Destructive (Origins Promos)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 45,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-036a.webp",
      cardNumber: "OGN-036a",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Vi-Destructive?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-24", price: 49.95 },
        { date: "2026-06-26", price: 45 }
      ]
    },

    {
      id: "WL-OGNX-068a",
      name: "Caitlyn, Patrolling (Origins Promos)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 35,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-068a.webp",
      cardNumber: "OGN-068a",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Caitlyn-Patrolling?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-24", price: 37.99 },
        { date: "2026-06-26", price: 35 }
      ]
    },

    {
      id: "WL-OGNX-111a",
      name: "Heimerdinger, Inventor V.1 (Origins Promos)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 17.9,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-111a.webp",
      cardNumber: "OGN-111a",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Heimerdinger-Inventor-V1-Showcase?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-24", price: 17.90 },
        { date: "2026-06-26", price: 17.9 }
      ]
    },

    {
      id: "WL-OGNX-159a",
      name: "Warwick, Hunter (Origins Promos)",
      set: "Origins",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: 0,
      currentPrice: 14.9,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-159a.webp",
      cardNumber: "OGN-159a",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Warwick-Hunter?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-24", price: 14.90 },
        { date: "2026-06-26", price: 14.9 }
      ]
    }
,

    {
      id: "WORLDS-BOX",
      name: "Worlds Bundle 2025",
      set: "Origins",
      condition: "Sealed",
      status: "Holding",
      qty: 1,
      buyPrice: 190,
      currentPrice: 448.49,
      image: "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/e67cae02bd6312c1e9a4b3a0eb9e70dbd3dbcd0e-2560x2560.png",
      cardNumber: "Worlds Bundle",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Box-Sets/Worlds-Bundle-2025?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
      usSales: [],
      priceHistory: [{ date: "2026-06-26", price: 221.06 },
        { date: "2026-07-03", price: 473.49 },        { date: "2026-07-06", price: 472.49 },
        { date: "2026-07-07", price: 448.49 }
      ]
    },

    {
      id: "OGN-305-OVN",
      name: "OGN Yasuo, Unforgiven (V.2 — Overnumbered)",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 38,
      currentPrice: 38,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-305.webp",
      cardNumber: "OGN-305*",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Origins/Yasuo-Unforgiven-V2-Overnumbered" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-30", price: 38 },
        { date: "2026-07-03", price: 38 },
        { date: "2026-07-07", price: 38.0 }
      ]
    }

  ]
};
