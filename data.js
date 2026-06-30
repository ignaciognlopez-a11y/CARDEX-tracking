// ============================================================
//  RIFTBOUND PORTFOLIO — data.js
//  Fuente: Notion DB f298acf4-dc24-48e2-bc76-8d6c9bd193d6
//  Actualizado: 2026-06-23
//  Filtros Cardmarket: EN, NM, excluir UK
// ============================================================

// Parámetros base para todos los links de Cardmarket
// language=1 (EN), minCondition=3 (NM), sellerCountry excluye UK (8)
const CM_FILTERS = '?language=1&minCondition=3&sellerCountry=3%2C4%2C5%2C6%2C7%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20&sortBy=price_asc';
const CM = 'https://www.cardmarket.com';

window.portfolioData = {
  updatedAt: "2026-06-30",

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
        { date: "2026-06-30", price: 1995 }
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
      currentPrice: 62.5,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-308.webp",
      cardNumber: "OGN-308",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Origins/Viktor-Herald-of-the-Arcane-V2-Overnumbered" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 70 },
        { date: "2026-06-23", price: 60 },
        { date: "2026-06-24", price: 60 },
        { date: "2026-06-26", price: 62.95 },
        { date: "2026-06-29", price: 62.5 },
        { date: "2026-06-30", price: 62.5 }
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
      currentPrice: 55,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-246b.webp",
      cardNumber: "OGN-246b",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Origins-Promos/Viktor-Leader-V2-Showcase" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 58 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 60 },
        { date: "2026-06-29", price: 60 },
        { date: "2026-06-30", price: 55 }
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
        { date: "2026-06-30", price: 29 }
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
      currentPrice: 24.5,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-151b.webp",
      cardNumber: "OGN-151b",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Centered" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 30 },
        { date: "2026-06-23", price: 24.99 },
        { date: "2026-06-24", price: 24.5 },
        { date: "2026-06-26", price: 24.5 },
        { date: "2026-06-29", price: 24.99 },
        { date: "2026-06-30", price: 24.5 }
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
        { date: "2026-06-30", price: 63 }
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
      currentPrice: 60,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-224.webp",
      cardNumber: "UNL-224",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Mystic-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 80 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 60 },
        { date: "2026-06-29", price: 60 },
        { date: "2026-06-30", price: 60 }
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
      currentPrice: 60,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-224.webp",
      cardNumber: "UNL-224",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Mystic-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 80 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 60 },
        { date: "2026-06-29", price: 60 },
        { date: "2026-06-30", price: 60 }
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
      currentPrice: 77,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-220.webp",
      cardNumber: "UNL-220",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Pouty-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 45 },
        { date: "2026-06-23", price: 45 },
        { date: "2026-06-29", price: 79.5 },
        { date: "2026-06-30", price: 77 }
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
        { date: "2026-06-30", price: 70 }
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
      currentPrice: 65,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-223.webp",
      cardNumber: "UNL-223",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Veteran-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 35 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 73 },
        { date: "2026-06-29", price: 57.21 },
        { date: "2026-06-30", price: 65 }
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
      currentPrice: 69.99,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-225.webp",
      cardNumber: "UNL-225",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Daring-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 70 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 75 },
        { date: "2026-06-29", price: 74.95 },
        { date: "2026-06-30", price: 69.99 }
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
      currentPrice: 89.99,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-221.webp",
      cardNumber: "UNL-221",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Lonely-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 100 },
        { date: "2026-06-23", price: 89 },
        { date: "2026-06-24", price: 89.99 },
        { date: "2026-06-26", price: 89.99 },
        { date: "2026-06-29", price: 89.99 },
        { date: "2026-06-30", price: 89.99 }
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
      currentPrice: 89.99,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-221.webp",
      cardNumber: "UNL-221",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Unleashed/Lonely-Poro" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 100 },
        { date: "2026-06-23", price: 89 },
        { date: "2026-06-24", price: 89.99 },
        { date: "2026-06-26", price: 89.99 },
        { date: "2026-06-29", price: 89.99 },
        { date: "2026-06-30", price: 89.99 }
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
      currentPrice: 24,
      image: "https://static.dotgg.gg/riftbound/cards/SFD-245.webp",
      cardNumber: "SFD-245",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Spiritforged/Jax-Grandmaster-at-Arms-V2-Showcase" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 28 },
        { date: "2026-06-23", price: 28 },
        { date: "2026-06-30", price: 24 }
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
      currentPrice: 50,
      image: "https://static.dotgg.gg/riftbound/cards/SFD-232.webp",
      cardNumber: "SFD-232",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Spiritforged/Sett-Brawler-V1-Showcase" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-22", price: 45 },
        { date: "2026-06-23", price: 55 },
        { date: "2026-06-24", price: 52 },
        { date: "2026-06-26", price: 50 },
        { date: "2026-06-29", price: 50 },
        { date: "2026-06-30", price: 50 }
      ]
    },

    {
      id: "OGN-305",
      name: "Yasuo, Unforgiven (V.2 — Overnumbered)",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 38,
      currentPrice: 38,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-305.webp",
      cardNumber: "OGN-305",
      cardmarketUrl: CM + "/en/Riftbound/Products/Singles/Origins/Yasuo-Unforgiven-V2-Overnumbered" + CM_FILTERS,
      priceHistory: [
        { date: "2026-06-30", price: 38 }
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
      currentPrice: 636.5,
      image: "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/46c776a96cc14227a260d24489f10b4090cd2cd9-2560x2560.png",
      cardNumber: "UNL Case (6x)",
      cardmarketUrl: CM + "/en/Riftbound/Products/Booster-Boxes/Unleashed-Case-6x-Booster-Box?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
      priceHistory: [
        { date: "2026-06-22", price: 595 },
        { date: "2026-06-23", price: 643.9 },
        { date: "2026-06-24", price: 643.9 },
        { date: "2026-06-26", price: 642 },
        { date: "2026-06-30", price: 636.5 }
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
      currentPrice: 156.94,
      image: "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/e026ee1a44bc86095f9afc5949c5fdb519b29c66-2560x2560.png",
      cardNumber: "OGN Box",
      cardmarketUrl: CM + "/en/Riftbound/Products/Booster-Boxes/Origins-Booster-Box?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
      priceHistory: [
        { date: "2026-06-22", price: 150 },
        { date: "2026-06-23", price: 155.19 },
        { date: "2026-06-24", price: 161.89 },
        { date: "2026-06-26", price: 159.94 },
        { date: "2026-06-29", price: 157 },
        { date: "2026-06-30", price: 156.94 }
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
      currentPrice: 58.8,
      image: "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/a2ca8f9bc247fc5435432e9a97c4efc5b79020c4-2560x2560.png",
      cardNumber: "PG Box",
      cardmarketUrl: CM + "/en/Riftbound/Products/Box-Sets/Proving-Grounds?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
      priceHistory: [
        { date: "2026-06-22", price: 35 },
        { date: "2026-06-23", price: 59.89 },
        { date: "2026-06-24", price: 59.89 },
        { date: "2026-06-26", price: 60.5 },
        { date: "2026-06-30", price: 58.8 }
      ]
    },

    {
      id: "WORLDS-BOX",
      name: "Worlds Bundle 2025",
      set: "Origins",
      condition: "Sealed",
      status: "Holding",
      qty: 1,
      buyPrice: 190,
      currentPrice: 284.59,
      image: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20300%20420%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bg2%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23080808%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230d0a0a%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22gold2%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23d4a843%22/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%238b6512%22/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%22300%22%20height%3D%22420%22%20fill%3D%22url%28%23bg2%29%22/%3E%0A%20%20%3Crect%20x%3D%228%22%20y%3D%228%22%20width%3D%22284%22%20height%3D%22404%22%20rx%3D%2210%22%20fill%3D%22none%22%20stroke%3D%22url%28%23gold2%29%22%20stroke-width%3D%222%22/%3E%0A%20%20%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22268%22%20height%3D%22388%22%20rx%3D%228%22%20fill%3D%22none%22%20stroke%3D%22%23d4a843%22%20stroke-width%3D%220.5%22%20opacity%3D%220.3%22/%3E%0A%20%20%3Ccircle%20cx%3D%22150%22%20cy%3D%22160%22%20r%3D%2260%22%20fill%3D%22none%22%20stroke%3D%22%23d4a843%22%20stroke-width%3D%221%22%20opacity%3D%220.5%22/%3E%0A%20%20%3Ccircle%20cx%3D%22150%22%20cy%3D%22160%22%20r%3D%2245%22%20fill%3D%22%23d4a843%22%20opacity%3D%220.06%22/%3E%0A%20%20%3Ctext%20x%3D%22150%22%20y%3D%22155%22%20text-anchor%3D%22middle%22%20font-family%3D%22serif%22%20font-size%3D%2242%22%20fill%3D%22%23d4a843%22%20opacity%3D%220.8%22%3E%F0%9F%8C%8D%3C/text%3E%0A%20%20%3Ctext%20x%3D%22150%22%20y%3D%22195%22%20text-anchor%3D%22middle%22%20font-family%3D%22serif%22%20font-size%3D%2210%22%20fill%3D%22%23d4a843%22%20letter-spacing%3D%223%22%3EWORLDS%202025%3C/text%3E%0A%20%20%3Crect%20x%3D%2230%22%20y%3D%22300%22%20width%3D%22240%22%20height%3D%2260%22%20rx%3D%224%22%20fill%3D%22%23d4a843%22%20opacity%3D%220.07%22/%3E%0A%20%20%3Ctext%20x%3D%22150%22%20y%3D%22325%22%20text-anchor%3D%22middle%22%20font-family%3D%22serif%22%20font-size%3D%2214%22%20font-weight%3D%22bold%22%20fill%3D%22%23d4a843%22%3EWorlds%20Bundle%202025%3C/text%3E%0A%20%20%3Ctext%20x%3D%22150%22%20y%3D%22348%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%229%22%20fill%3D%22%23d4a843%22%20opacity%3D%220.5%22%20letter-spacing%3D%221%22%3ERIFTBOUND%20%C2%B7%20SEALED%3C/text%3E%0A%3C/svg%3E",
      cardNumber: "Worlds Bundle",
      cardmarketUrl: "https://www.cardmarket.com/es/Riftbound/Products/Box-Sets/Worlds-Bundle-2025?sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&language=1",
      priceHistory: [
        { date: "2026-06-26", price: 221.06 },
        { date: "2026-06-30", price: 284.59 }
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
      currentPrice: 226.65,
      image: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20420%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230d1117%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231a1206%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22gold%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23c9a84c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%238b6914%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22300%22%20height%3D%22420%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%3Crect%20x%3D%228%22%20y%3D%228%22%20width%3D%22284%22%20height%3D%22404%22%20rx%3D%2210%22%20fill%3D%22none%22%20stroke%3D%22url(%23gold)%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3Crect%20x%3D%2216%22%20y%3D%2216%22%20width%3D%22268%22%20height%3D%22388%22%20rx%3D%228%22%20fill%3D%22none%22%20stroke%3D%22%23c9a84c%22%20stroke-width%3D%220.5%22%20opacity%3D%220.4%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M8%2C40%20Q8%2C8%2040%2C8%22%20fill%3D%22none%22%20stroke%3D%22%23c9a84c%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M260%2C8%20Q292%2C8%20292%2C40%22%20fill%3D%22none%22%20stroke%3D%22%23c9a84c%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M8%2C380%20Q8%2C412%2040%2C412%22%20fill%3D%22none%22%20stroke%3D%22%23c9a84c%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M260%2C412%20Q292%2C412%20292%2C380%22%20fill%3D%22none%22%20stroke%3D%22%23c9a84c%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22150%22%20cy%3D%22175%22%20r%3D%2255%22%20fill%3D%22none%22%20stroke%3D%22%23c9a84c%22%20stroke-width%3D%221.5%22%20opacity%3D%220.6%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22150%22%20cy%3D%22175%22%20r%3D%2245%22%20fill%3D%22%23c9a84c%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%3Ctext%20x%3D%22150%22%20y%3D%22168%22%20text-anchor%3D%22middle%22%20font-family%3D%22serif%22%20font-size%3D%2236%22%20fill%3D%22%23c9a84c%22%20opacity%3D%220.9%22%3E%E2%9A%9C%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%22150%22%20y%3D%22200%22%20text-anchor%3D%22middle%22%20font-family%3D%22serif%22%20font-size%3D%2211%22%20fill%3D%22%23c9a84c%22%20letter-spacing%3D%223%22%3EARCANE%3C%2Ftext%3E%0A%20%20%3Crect%20x%3D%2230%22%20y%3D%22300%22%20width%3D%22240%22%20height%3D%2260%22%20rx%3D%224%22%20fill%3D%22%23c9a84c%22%20opacity%3D%220.08%22%2F%3E%0A%20%20%3Ctext%20x%3D%22150%22%20y%3D%22325%22%20text-anchor%3D%22middle%22%20font-family%3D%22serif%22%20font-size%3D%2215%22%20font-weight%3D%22bold%22%20fill%3D%22%23c9a84c%22%3EArcane%20Box%20Set%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%22150%22%20y%3D%22348%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%229%22%20fill%3D%22%23c9a84c%22%20opacity%3D%220.6%22%20letter-spacing%3D%221%22%3ERIFTBOUND%20%C2%B7%20LIMITED%20EDITION%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
      cardNumber: "",
      cardmarketUrl: "https://www.cardmarket.com/es/Riftbound/Products/Box-Sets/Arcane-Box-Set?sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&language=1",
      priceHistory: [
        { date: "2026-06-22", price: 200 },
        { date: "2026-06-24", price: 179 },
        { date: "2026-06-26", price: 184 },
        { date: "2026-06-29", price: 216.65 },
        { date: "2026-06-30", price: 226.65 }
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
      currentPrice: 545,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-197b.webp",
      cardNumber: "OGNX-197b",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Teemo-Scout-V2-Showcase?language=1&minCondition=3&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 475 },
        { date: "2026-06-24", price: 530 },
        { date: "2026-06-26", price: 545 }
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Lonely-Poro?language=1&minCondition=3&sortBy=price_asc",
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Mystic-Poro?language=1&minCondition=3&sortBy=price_asc",
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
      currentPrice: 74.95,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-225.webp",
      cardNumber: "UNL-225",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Daring-Poro?language=1&minCondition=3&sortBy=price_asc",
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
      currentPrice: 57.21,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-223.webp",
      cardNumber: "UNL-223",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Veteran-Poro?language=1&minCondition=3&sortBy=price_asc",
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
      currentPrice: 73.99,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-222.webp",
      cardNumber: "UNL-222",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Plundering-Poro?language=1&minCondition=3&sortBy=price_asc",
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
      currentPrice: 79.5,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-220.webp",
      cardNumber: "UNL-220",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Pouty-Poro?language=1&minCondition=3&sortBy=price_asc",
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
      currentPrice: 850,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-238.webp",
      cardNumber: "UNL-238",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Baron-Nashor-V3-Showcase?language=1&minCondition=3&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 900 },
        { date: "2026-06-24", price: 870 },
        { date: "2026-06-26", price: 850 }
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Spiritforged/Ahri-Inquisitive-V2-Signed-Showcase?language=1&minCondition=3&sortBy=price_asc",
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
      currentPrice: 799,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-307s.webp",
      cardNumber: "OGN-307*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Teemo-Swift-Scout-V3-Overnumbered?language=1&minCondition=3&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 850 },
        { date: "2026-06-24", price: 799 },
        { date: "2026-06-26", price: 799 }
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
      currentPrice: 490,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-310s.webp",
      cardNumber: "OGN-310*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Sett-The-Boss-V3-Overnumbered?language=1&minCondition=3&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 550 },
        { date: "2026-06-24", price: 530 },
        { date: "2026-06-26", price: 500 },
        { date: "2026-06-29", price: 490 }
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
      currentPrice: 569.9,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-305s.webp",
      cardNumber: "OGN-305*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Yasuo-Unforgiven-V3-Overnumbered?language=1&minCondition=3&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 590 },
        { date: "2026-06-24", price: 589.99 },
        { date: "2026-06-26", price: 589.99 },
        { date: "2026-06-29", price: 569.9 }
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Volibear-Relentless-Storm-V3-Overnumbered?language=1&minCondition=3&sortBy=price_asc",
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Viktor-Herald-of-the-Arcane-V3-Overnumbered?language=1&minCondition=3&sortBy=price_asc",
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Jinx-Loose-Cannon-V3-Overnumbered?language=1&minCondition=3&sortBy=price_asc",
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
      currentPrice: 766.77,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-309s.webp",
      cardNumber: "OGN-309*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Miss-Fortune-Bounty-Hunter-V3-Overnumbered?language=1&minCondition=3&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 767 },
        { date: "2026-06-24", price: 700 },
        { date: "2026-06-26", price: 700 },
        { date: "2026-06-29", price: 766.77 }
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Lee-Sin-Blind-Monk-V3-Overnumbered?language=1&minCondition=3&sortBy=price_asc",
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Darius-Hand-of-Noxus-V3-Signed-Showcase?language=1&minCondition=3&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-22", price: 350 },
        { date: "2026-06-24", price: 350 },
        { date: "2026-06-26", price: 335 },
        { date: "2026-06-29", price: 350 }
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Leona-Radiant-Dawn-V3-Overnumbered?language=1&minCondition=3&sortBy=price_asc",
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
      currentPrice: 1850,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-299s.webp",
      cardNumber: "OGN-299s",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/KaiSa-Daughter-of-the-Void-V3-Overnumbered?language=1&minCondition=3&sortBy=price_asc",
      priceHistory: [{ date: "2026-06-22", price: 1848 },
        { date: "2026-06-24", price: 1847.9 },
        { date: "2026-06-26", price: 1850 },
        { date: "2026-06-29", price: 1850 }
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Ahri-Alluring?language=1&minCondition=3&sortBy=price_asc",
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Ascetic?language=1&minCondition=3&sortBy=price_asc",
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Jinx-Rebel-V1-Epic?language=1&minCondition=3&sortBy=price_asc",
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
      currentPrice: 9,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-246.webp",
      cardNumber: "OGN-246",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Viktor-Leader-V1-Epic?language=1&minCondition=3&sortBy=price_asc",
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Jinx-Loose-Cannon?language=1&minCondition=3&sortBy=price_asc",
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Viktor-Herald-of-the-Arcane?language=1&minCondition=3&sortBy=price_asc",
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Vi-Destructive?language=1&minCondition=3&sortBy=price_asc",
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Caitlyn-Patrolling?language=1&minCondition=3&sortBy=price_asc",
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Heimerdinger-Inventor-V1-Showcase?language=1&minCondition=3&sortBy=price_asc",
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Warwick-Hunter?language=1&minCondition=3&sortBy=price_asc",
      usSales: [],
      priceHistory: [{ date: "2026-06-24", price: 14.90 },
        { date: "2026-06-26", price: 14.9 }
      ]
    }

  ]
};
