// ============================================================
//  RIFTBOUND PORTFOLIO — data.js
//  Fuente: Notion DB f298acf4-dc24-48e2-bc76-8d6c9bd193d6
//  Actualizado: 2026-07-09
//  Filtros Cardmarket: EN, NM (min. condicion 2), excluir UK
//  Nota: imagenes Project K Promos pendientes (CDN sin cobertura + S3 Cardmarket bloquea hotlink)
//  buyDate anadido en esta sesion, extraido de Notion (Buy Date) para el desglose P&L
// ============================================================

window.portfolioData = {
  updatedAt: "2026-07-09",
  /* nota: 3 copias de Ahri, Alluring (OGNX-066) anadidas hoy, movidas de Watchlist a Holding a 66E/u */

  cards: [
    {
      id: "OGN-303s",
      name: "OGN Ahri, Nine-Tailed Fox (V.3 — Signed Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 0,
      currentPrice: 3000,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-303s.webp",
      cardNumber: "OGN-303*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Ahri-Nine-Tailed-Fox-V3-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-06-17",
      priceHistory: [
        { date: "2026-06-22", price: 860 },
        { date: "2026-06-23", price: 1995 },
        { date: "2026-06-24", price: 1890 },
        { date: "2026-06-26", price: 1995 },
        { date: "2026-07-03", price: 1995 },
        { date: "2026-07-07", price: 1995 },
        { date: "2026-07-08", price: 1995 },
        { date: "2026-07-09", price: 3000 }
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
      currentPrice: 3000,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-303s.webp",
      cardNumber: "OGN-303*",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Ahri-Nine-Tailed-Fox-V3-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-07-02",
      priceHistory: [
        { date: "2026-07-02", price: 1995 },
        { date: "2026-07-03", price: 1995 },
        { date: "2026-07-07", price: 1995 },
        { date: "2026-07-08", price: 1995 },
        { date: "2026-07-09", price: 3000 }
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
      currentPrice: 59,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-308.webp",
      cardNumber: "OGN-308",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Viktor-Herald-of-the-Arcane-V2-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-06-20",
      priceHistory: [
        { date: "2026-06-22", price: 70 },
        { date: "2026-06-23", price: 60 },
        { date: "2026-06-24", price: 60 },
        { date: "2026-06-26", price: 62.95 },
        { date: "2026-06-29", price: 62.5 },
        { date: "2026-07-07", price: 60 },
        { date: "2026-07-08", price: 59.99 },
        { date: "2026-07-09", price: 59 }
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
      currentPrice: 98,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-246b.webp",
      cardNumber: "OGN-246b",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Viktor-Leader-V2-Showcase?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-06-15",
      priceHistory: [
        { date: "2026-06-22", price: 58 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 60 },
        { date: "2026-06-29", price: 60 },
        { date: "2026-07-06", price: 78.94 },
        { date: "2026-07-07", price: 78.94 },
        { date: "2026-07-08", price: 78.94 },
        { date: "2026-07-09", price: 98 }
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
      currentPrice: 28,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-302.webp",
      cardNumber: "OGN-302",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Darius-Hand-of-Noxus-V2-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-06-13",
      priceHistory: [
        { date: "2026-06-22", price: 37 },
        { date: "2026-06-23", price: 29.95 },
        { date: "2026-06-24", price: 29.95 },
        { date: "2026-06-26", price: 30 },
        { date: "2026-06-29", price: 29.95 },
        { date: "2026-07-07", price: 29 },
        { date: "2026-07-08", price: 27 },
        { date: "2026-07-09", price: 28 }
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
      currentPrice: 60,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-151b.webp",
      cardNumber: "OGN-151b",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Centered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-05-25",
      priceHistory: [
        { date: "2026-06-22", price: 30 },
        { date: "2026-06-23", price: 24.99 },
        { date: "2026-06-24", price: 24.5 },
        { date: "2026-06-26", price: 24.5 },
        { date: "2026-06-29", price: 24.99 },
        { date: "2026-07-07", price: 35 },
        { date: "2026-07-08", price: 35 },
        { date: "2026-07-09", price: 60 }
      ]
    },

    {
      id: "OGN-151b-2",
      name: "Lee Sin, Centered",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 40,
      currentPrice: 60,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-151b.webp",
      cardNumber: "OGN-151b",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Centered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-07-05",
      priceHistory: [
        { date: "2026-07-06", price: 24.99 },
        { date: "2026-07-07", price: 35 },
        { date: "2026-07-08", price: 35 },
        { date: "2026-07-09", price: 60 }
      ]
    },

    {
      id: "OGN-151b-4",
      name: "Lee Sin, Centered",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 40,
      currentPrice: 60,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-151b.webp",
      cardNumber: "OGN-151b",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Centered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-07-05",
      priceHistory: [
        { date: "2026-07-06", price: 24.99 },
        { date: "2026-07-07", price: 35 },
        { date: "2026-07-08", price: 35 },
        { date: "2026-07-09", price: 60 }
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
      currentPrice: 60,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-151b.webp",
      cardNumber: "OGN-151b",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Centered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-07-06",
      priceHistory: [
        { date: "2026-07-07", price: 35 },
        { date: "2026-07-08", price: 35 },
        { date: "2026-07-09", price: 60 }
      ]
    },

    {
      id: "OGN-119a",
      name: "Ahri, Inquisitive (V.2 - Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 4,
      currentPrice: 7.25,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-119a.webp",
      cardNumber: "OGN-119a",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Ahri-Inquisitive-V2-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-07-05",
      priceHistory: [
        { date: "2026-07-06", price: 7 },
        { date: "2026-07-07", price: 7 },
        { date: "2026-07-08", price: 7.5 },
        { date: "2026-07-09", price: 7.25 }
      ]
    },

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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Leblanc-Deceiver-V2-Showcase?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-05-18",
      priceHistory: [
        { date: "2026-06-22", price: 70 },
        { date: "2026-06-23", price: 68 },
        { date: "2026-06-24", price: 68 },
        { date: "2026-06-26", price: 68 },
        { date: "2026-07-07", price: 63 },
        { date: "2026-07-08", price: 63 },
        { date: "2026-07-09", price: 63 }
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
      currentPrice: 79.95,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-224.webp",
      cardNumber: "UNL-224",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Mystic-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-05-25",
      priceHistory: [
        { date: "2026-06-22", price: 80 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 60 },
        { date: "2026-06-29", price: 60 },
        { date: "2026-07-06", price: 76 },
        { date: "2026-07-07", price: 70 },
        { date: "2026-07-08", price: 73 },
        { date: "2026-07-09", price: 79.95 }
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
      currentPrice: 79.95,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-224.webp",
      cardNumber: "UNL-224",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Mystic-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-05-13",
      priceHistory: [
        { date: "2026-06-22", price: 80 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 60 },
        { date: "2026-06-29", price: 60 },
        { date: "2026-07-06", price: 76 },
        { date: "2026-07-07", price: 70 },
        { date: "2026-07-08", price: 73 },
        { date: "2026-07-09", price: 79.95 }
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
      currentPrice: 74.97,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-220.webp",
      cardNumber: "UNL-220",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Pouty-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-05-13",
      priceHistory: [
        { date: "2026-06-22", price: 45 },
        { date: "2026-06-23", price: 45 },
        { date: "2026-06-29", price: 79.5 },
        { date: "2026-07-03", price: 70 },
        { date: "2026-07-06", price: 74.99 },
        { date: "2026-07-07", price: 74.89 },
        { date: "2026-07-08", price: 74.97 },
        { date: "2026-07-09", price: 74.97 }
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
      currentPrice: 69.98,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-222.webp",
      cardNumber: "UNL-222",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Plundering-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-05-18",
      priceHistory: [
        { date: "2026-06-22", price: 54 },
        { date: "2026-06-23", price: 72 },
        { date: "2026-06-24", price: 72 },
        { date: "2026-06-26", price: 78 },
        { date: "2026-06-29", price: 73.99 },
        { date: "2026-07-03", price: 72.95 },
        { date: "2026-07-06", price: 70 },
        { date: "2026-07-07", price: 70 },
        { date: "2026-07-08", price: 69.98 },
        { date: "2026-07-09", price: 69.98 }
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
      currentPrice: 67.98,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-223.webp",
      cardNumber: "UNL-223",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Veteran-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-05-13",
      priceHistory: [
        { date: "2026-06-22", price: 35 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 73 },
        { date: "2026-06-29", price: 57.21 },
        { date: "2026-07-03", price: 62 },
        { date: "2026-07-07", price: 60 },
        { date: "2026-07-08", price: 60 },
        { date: "2026-07-09", price: 67.98 }
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Daring-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-05-13",
      priceHistory: [
        { date: "2026-06-22", price: 70 },
        { date: "2026-06-23", price: 70 },
        { date: "2026-06-24", price: 70 },
        { date: "2026-06-26", price: 75 },
        { date: "2026-06-29", price: 74.95 },
        { date: "2026-07-06", price: 68.21 },
        { date: "2026-07-07", price: 60 },
        { date: "2026-07-08", price: 68 },
        { date: "2026-07-09", price: 60 }
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
      currentPrice: 89,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-221.webp",
      cardNumber: "UNL-221",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Lonely-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-05-25",
      priceHistory: [
        { date: "2026-06-22", price: 100 },
        { date: "2026-06-23", price: 89 },
        { date: "2026-06-24", price: 89.99 },
        { date: "2026-06-26", price: 89.99 },
        { date: "2026-06-29", price: 89.99 },
        { date: "2026-07-06", price: 98 },
        { date: "2026-07-07", price: 85 },
        { date: "2026-07-08", price: 89 },
        { date: "2026-07-09", price: 89 }
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
      currentPrice: 89,
      image: "https://static.dotgg.gg/riftbound/cards/UNL-221.webp",
      cardNumber: "UNL-221",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Lonely-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-05-25",
      priceHistory: [
        { date: "2026-06-22", price: 100 },
        { date: "2026-06-23", price: 89 },
        { date: "2026-06-24", price: 89.99 },
        { date: "2026-06-26", price: 89.99 },
        { date: "2026-06-29", price: 89.99 },
        { date: "2026-07-06", price: 98 },
        { date: "2026-07-07", price: 85 },
        { date: "2026-07-08", price: 89 },
        { date: "2026-07-09", price: 89 }
      ]
    },

    {
      id: "SFD-245",
      name: "SFD Jax, Grandmaster at Arms (V.2 — Showcase)",
      set: "Spiritforged",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 50,
      currentPrice: 25.95,
      image: "https://static.dotgg.gg/riftbound/cards/SFD-245.webp",
      cardNumber: "SFD-245",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Spiritforged/Jax-Grandmaster-at-Arms-V2-Showcase?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-06-20",
      priceHistory: [
        { date: "2026-06-22", price: 28 },
        { date: "2026-06-23", price: 28 },
        { date: "2026-07-03", price: 26.21 },
        { date: "2026-07-06", price: 25.99 },
        { date: "2026-07-07", price: 26 },
        { date: "2026-07-08", price: 25.95 },
        { date: "2026-07-09", price: 25.95 }
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Spiritforged/Sett-Brawler-V1-Showcase?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-05-18",
      priceHistory: [
        { date: "2026-06-22", price: 45 },
        { date: "2026-06-23", price: 55 },
        { date: "2026-06-24", price: 52 },
        { date: "2026-06-26", price: 50 },
        { date: "2026-06-29", price: 50 },
        { date: "2026-07-03", price: 45 },
        { date: "2026-07-06", price: 50 },
        { date: "2026-07-07", price: 45 },
        { date: "2026-07-08", price: 48 },
        { date: "2026-07-09", price: 50 }
      ]
    },

    {
      id: "UNL-CASE",
      name: "Unleashed Booster Box Case (6×)",
      set: "Unleashed",
      condition: "Sealed",
      status: "Holding",
      qty: 1,
      buyPrice: 590,
      currentPrice: 605.9,
      image: "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/46c776a96cc14227a260d24489f10b4090cd2cd9-2560x2560.png",
      cardNumber: "UNL Case (6x)",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Booster-Boxes/Unleashed-Case-6x-Booster-Box?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
      buyDate: "2026-06-20",
      priceHistory: [
        { date: "2026-06-22", price: 595 },
        { date: "2026-06-23", price: 643.9 },
        { date: "2026-06-24", price: 643.9 },
        { date: "2026-06-26", price: 642 },
        { date: "2026-07-03", price: 636.5 },
        { date: "2026-07-06", price: 606.11 },
        { date: "2026-07-07", price: 606.11 },
        { date: "2026-07-08", price: 606.1 },
        { date: "2026-07-09", price: 605.9 }
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
      currentPrice: 146.9,
      image: "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/e026ee1a44bc86095f9afc5949c5fdb519b29c66-2560x2560.png",
      cardNumber: "OGN Box",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Booster-Boxes/Origins-Booster-Box?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
      buyDate: "2026-05-27",
      priceHistory: [
        { date: "2026-06-22", price: 150 },
        { date: "2026-06-23", price: 155.19 },
        { date: "2026-06-24", price: 161.89 },
        { date: "2026-06-26", price: 159.94 },
        { date: "2026-06-29", price: 157 },
        { date: "2026-07-03", price: 156.85 },
        { date: "2026-07-06", price: 146.9 },
        { date: "2026-07-07", price: 145.95 },
        { date: "2026-07-08", price: 145.95 },
        { date: "2026-07-09", price: 146.9 }
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
      currentPrice: 57.85,
      image: "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/a2ca8f9bc247fc5435432e9a97c4efc5b79020c4-2560x2560.png",
      cardNumber: "PG Box",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Box-Sets/Proving-Grounds?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
      buyDate: "2026-05-27",
      priceHistory: [
        { date: "2026-06-22", price: 35 },
        { date: "2026-06-23", price: 59.89 },
        { date: "2026-06-24", price: 59.89 },
        { date: "2026-06-26", price: 60.5 },
        { date: "2026-07-03", price: 63.75 },
        { date: "2026-07-06", price: 57.9 },
        { date: "2026-07-07", price: 57.9 },
        { date: "2026-07-08", price: 57.9 },
        { date: "2026-07-09", price: 57.85 }
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
      currentPrice: 310.48,
      image: "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/2f0e070b2ea935e916cd8fa31253791a37d3a956-2560x2560.png",
      cardNumber: "Arcane Box Set",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Box-Sets/Arcane-Box-Set?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
      buyDate: "2026-06-30",
      priceHistory: [
        { date: "2026-06-22", price: 200 },
        { date: "2026-06-24", price: 179 },
        { date: "2026-06-26", price: 184 },
        { date: "2026-06-29", price: 216.65 },
        { date: "2026-07-03", price: 305.48 },
        { date: "2026-07-06", price: 320.49 },
        { date: "2026-07-07", price: 295.49 },
        { date: "2026-07-08", price: 295.49 },
        { date: "2026-07-09", price: 310.48 }
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
      currentPrice: 463.49,
      image: "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/e67cae02bd6312c1e9a4b3a0eb9e70dbd3dbcd0e-2560x2560.png",
      cardNumber: "Worlds Bundle",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Box-Sets/Worlds-Bundle-2025?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
      buyDate: "2026-06-30",
      priceHistory: [
        { date: "2026-06-26", price: 221.06 },
        { date: "2026-07-03", price: 473.49 },
        { date: "2026-07-06", price: 472.49 },
        { date: "2026-07-07", price: 448.49 },
        { date: "2026-07-08", price: 423.49 },
        { date: "2026-07-09", price: 463.49 }
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
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Yasuo-Unforgiven-V2-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-06-30",
      priceHistory: [
        { date: "2026-06-30", price: 38 },
        { date: "2026-07-03", price: 38 },
        { date: "2026-07-07", price: 38 },
        { date: "2026-07-08", price: 38 },
        { date: "2026-07-09", price: 38 }
      ]
    },

    {
      id: "OGN-119a-2",
      name: "Ahri, Inquisitive (V.2 - Showcase)",
      set: "Origins",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 4,
      currentPrice: 7.25,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-119a.webp",
      cardNumber: "OGN-119a",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Ahri-Inquisitive-V2-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-07-05",
      priceHistory: [
        { date: "2026-07-08", price: 7.5 },
        { date: "2026-07-09", price: 7.25 }
      ]
    },

    {
      id: "OGNX-246",
      name: "Viktor, Leader (V.1 - Epic)",
      set: "Origins Promos",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 32,
      currentPrice: 25,
      image: "https://images.tcggo.com/tcggo/storage/35785/conversions/viktor-leader-ogn-246-origins-promos-large.webp",
      cardNumber: "246",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Viktor-Leader-V1-Epic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-07-08",
      priceHistory: [
        { date: "2026-07-08", price: 30 },
        { date: "2026-07-09", price: 25 }
      ]
    },

    {
      id: "OGN-151b-5",
      name: "Lee Sin, Centered",
      set: "Origins Promos",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 42,
      currentPrice: 60,
      image: "https://static.dotgg.gg/riftbound/cards/OGN-151b.webp",
      cardNumber: "151b",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Centered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-07-08",
      priceHistory: [
        { date: "2026-07-08", price: 35 },
        { date: "2026-07-09", price: 60 }
      ]
    },

    {
      id: "OGNX-078",
      name: "Lee Sin, Ascetic",
      set: "Origins Promos",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 18,
      currentPrice: 18,
      image: "https://images.tcggo.com/tcggo/storage/35768/conversions/lee-sin-ascetic-ogn-078-origins-promos-large.webp",
      cardNumber: "078",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Ascetic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-07-08",
      priceHistory: [
        { date: "2026-07-08", price: 18 },
        { date: "2026-07-09", price: 18 }
      ]
    },

    {
      id: "PROK-FND196",
      name: "Teemo, Scout",
      set: "Project K Promos",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: null,
      currentPrice: 3500,
      image: "https://images.tcggo.com/tcggo/storage/35666/conversions/teemo-scout-prok-fnd196-project-k-promos-large.webp",
      cardNumber: "FND196",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Project-K-Promos/Teemo-Scout?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      priceHistory: [
        { date: "2026-07-08", price: 3500 }
      ]
    },

    {
      id: "PROK-FND249",
      name: "Volibear, Relentless Storm",
      set: "Project K Promos",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: null,
      currentPrice: 799,
      image: "https://images.tcggo.com/tcggo/storage/35668/conversions/volibear-relentless-storm-prok-fnd249-project-k-promos-large.webp",
      cardNumber: "FND249",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Project-K-Promos/Volibear-Relentless-Storm?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      priceHistory: [
        { date: "2026-07-08", price: 799 }
      ]
    },

    {
      id: "PROK-FND259",
      name: "Yasuo, Unforgiven",
      set: "Project K Promos",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: null,
      currentPrice: 1400,
      image: "https://images.tcggo.com/tcggo/storage/35669/conversions/yasuo-unforgiven-prok-fnd259-project-k-promos-large.webp",
      cardNumber: "FND259",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Project-K-Promos/Yasuo-Unforgiven?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      priceHistory: [
        { date: "2026-07-08", price: 1400 }
      ]
    },

    {
      id: "PROK-FND265",
      name: "Viktor, Herald of the Arcane",
      set: "Project K Promos",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: null,
      currentPrice: 1400,
      image: "https://images.tcggo.com/tcggo/storage/35667/conversions/viktor-herald-of-the-arcane-prok-fnd265-project-k-promos-large.webp",
      cardNumber: "FND265",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Project-K-Promos/Viktor-Herald-of-the-Arcane?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      priceHistory: [
        { date: "2026-07-08", price: 1400 }
      ]
    },

    {
      id: "PROK-FND251",
      name: "Jinx, Loose Cannon (Project K Promos)",
      set: "Project K Promos",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: null,
      currentPrice: 1400,
      image: "https://images.tcggo.com/tcggo/storage/35665/conversions/jinx-loose-cannon-prok-fnd251-project-k-promos-large.webp",
      cardNumber: "FND251",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Project-K-Promos/Jinx-Loose-Cannon?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      priceHistory: [
        { date: "2026-07-08", price: 1400 }
      ]
    },

    {
      id: "OGNX-202",
      name: "Jinx, Rebel (V.1 Epic)",
      set: "Origins Promos",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: null,
      currentPrice: 39.9,
      image: "https://images.tcggo.com/tcggo/storage/35781/conversions/jinx-rebel-ogn-202-origins-promos-large.webp",
      cardNumber: "202",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Jinx-Rebel-V1-Epic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      priceHistory: [
        { date: "2026-07-08", price: 39.9 }
      ]
    },

    {
      id: "OGNX-251",
      name: "Jinx, Loose Cannon (Origins Promos)",
      set: "Origins Promos",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: null,
      currentPrice: 28,
      image: "https://images.tcggo.com/tcggo/storage/35788/conversions/jinx-loose-cannon-ogn-251-origins-promos-large.webp",
      cardNumber: "251",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Jinx-Loose-Cannon?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      priceHistory: [
        { date: "2026-07-08", price: 28 }
      ]
    },

    {
      id: "OGNX-066",
      name: "Ahri, Alluring",
      set: "Origins Promos",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 66,
      currentPrice: 65,
      image: "https://images.tcggo.com/tcggo/storage/35766/conversions/ahri-alluring-ogn-066-origins-promos-large.webp",
      cardNumber: "066",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Ahri-Alluring?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-07-09",
      priceHistory: [
        { date: "2026-07-08", price: 65 },
        { date: "2026-07-09", price: 65 }
      ]
    },

    {
      id: "OGNX-066-2",
      name: "Ahri, Alluring",
      set: "Origins Promos",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 66,
      currentPrice: 65,
      image: "https://images.tcggo.com/tcggo/storage/35766/conversions/ahri-alluring-ogn-066-origins-promos-large.webp",
      cardNumber: "066",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Ahri-Alluring?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-07-09",
      priceHistory: [
        { date: "2026-07-09", price: 65 }
      ]
    },

    {
      id: "OGNX-066-3",
      name: "Ahri, Alluring",
      set: "Origins Promos",
      condition: "Raw",
      status: "Holding",
      qty: 1,
      buyPrice: 66,
      currentPrice: 65,
      image: "https://images.tcggo.com/tcggo/storage/35766/conversions/ahri-alluring-ogn-066-origins-promos-large.webp",
      cardNumber: "066",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Ahri-Alluring?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      buyDate: "2026-07-09",
      priceHistory: [
        { date: "2026-07-09", price: 65 }
      ]
    },

    {
      id: "SFDX-139",
      name: "Edge of Night (V.2 - Rare)",
      set: "Spiritforged Promos",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: null,
      currentPrice: 23.99,
      image: "https://images.tcggo.com/tcggo/storage/35711/conversions/edge-of-night-sfdx-139-spiritforged-promos-large.webp",
      cardNumber: "139",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Spiritforged-Promos/Edge-of-Night-V2-Rare?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      priceHistory: [
        { date: "2026-07-09", price: 23.99 }
      ]
    },

    {
      id: "SFDX-051",
      name: "Guardian Angel (V.2 - Rare)",
      set: "Spiritforged Promos",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: null,
      currentPrice: 29,
      image: "https://images.tcggo.com/tcggo/storage/35697/conversions/guardian-angel-sfdx-051-spiritforged-promos-large.webp",
      cardNumber: "051",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Spiritforged-Promos/Guardian-Angel-V2-Rare?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      priceHistory: [
        { date: "2026-07-09", price: 29 }
      ]
    },

    {
      id: "UNLX-120",
      name: "Rengar, Trophy Hunter (V.2 - Epic)",
      set: "Unleashed Promos",
      condition: "Raw",
      status: "Watchlist",
      qty: 1,
      buyPrice: null,
      currentPrice: 83,
      image: "",
      cardNumber: "120",
      cardmarketUrl: "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed-Promos/Rengar-Trophy-Hunter-V2-Epic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
      priceHistory: [
        { date: "2026-07-09", price: 83 }
      ]
    }
  ]
};
