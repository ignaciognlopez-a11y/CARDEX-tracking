// ============================================================
//  RIFTBOUND PORTFOLIO — data.js
//  Fuente: Notion DB f298acf4-dc24-48e2-bc76-8d6c9bd193d6
//  Actualizado: 2026-07-12
//  Filtros Cardmarket: EN, NM (min. condicion 2), excluir UK
//  Nota: imagenes Project K Promos pendientes (CDN sin cobertura + S3 Cardmarket bloquea hotlink)
//  buyDate anadido en esta sesion, extraido de Notion (Buy Date) para el desglose P&L
//  notionPageId anadido en esta sesion (12 julio 2026): permite actualizar precios en Notion
//  directamente por ID sin tener que buscar cada carta por nombre, ahorrando llamadas al MCP.
// ============================================================

window.portfolioData = {
  updatedAt: "2026-07-12",
  /* nota 2026-07-12 (quinta actualizacion del dia): anadidas 4 compras nuevas a Holding: Annie, Dark
     Child (12E), Garen, Might of Demacia (3E), Darius, Hand of Noxus #253 (12E) -- todas OGNX Origins
     Promos, Rare -- y Volibear, Relentless Storm (12E), que ya existia en Watchlist y se convirtio a
     Holding en la misma pagina de Notion en vez de crear una duplicada. Anadidas 2 cartas nuevas a
     Watchlist: Master Yi, Wuju Bladesman (19E) y Ahri, Nine-Tailed Fox #255 (230E, presumiblemente promo
     rara pese a figurar como Rare). Se detecto que 4 de las cartas que Nacho pidio anadir a Watchlist
     (Miss Fortune Bounty Hunter, Sett The Boss, Teemo Swift Scout V1 Rare, Lee Sin Blind Monk) ya estaban
     registradas -- no se crearon duplicados, solo se refresco su precio (Miss Fortune 25->24, Teemo
     25->27, resto sin cambio). Se corrigio ademas el notionPageId de Miss Fortune Bounty Hunter: al
     borrar las 7 duplicadas de la sesion anterior, Nacho borro por error la pagina que se había marcado
     como "a conservar" en vez de la duplicada para esta carta en concreto -- sin impacto real porque
     ambas paginas ya tenian el nombre homogeneizado, pero el ID guardado en data.js apuntaba a la pagina
     que dejo de existir; ahora apunta a la superviviente real. */

  cards: [
  {
    "id": "OGN-303s",
    "name": "OGN Ahri, Nine-Tailed Fox (V.3 — Signed Showcase)",
    "set": "Origins",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 0,
    "currentPrice": 3500,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-303s.webp",
    "cardNumber": "OGN-303*",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Ahri-Nine-Tailed-Fox-V3-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-06-17",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 860
      },
      {
        "date": "2026-06-23",
        "price": 1995
      },
      {
        "date": "2026-06-24",
        "price": 1890
      },
      {
        "date": "2026-06-26",
        "price": 1995
      },
      {
        "date": "2026-07-03",
        "price": 1995
      },
      {
        "date": "2026-07-07",
        "price": 1995
      },
      {
        "date": "2026-07-08",
        "price": 1995
      },
      {
        "date": "2026-07-09",
        "price": 3000
      },
      {
        "date": "2026-07-11",
        "price": 3400
      },
      {
        "date": "2026-07-12",
        "price": 3500
      }
    ],
    "notionPageId": "382d9b45-174c-817f-b8fb-f334c9c649ae"
  },
  {
    "id": "OGN-303s-2",
    "name": "OGN Ahri, Nine-Tailed Fox (V.3 — Signed Showcase)",
    "set": "Origins",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 1800,
    "currentPrice": 3500,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-303s.webp",
    "cardNumber": "OGN-303*",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Ahri-Nine-Tailed-Fox-V3-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-02",
    "excludeFromCap": true,
    "priceHistory": [
      {
        "date": "2026-07-02",
        "price": 1995
      },
      {
        "date": "2026-07-03",
        "price": 1995
      },
      {
        "date": "2026-07-07",
        "price": 1995
      },
      {
        "date": "2026-07-08",
        "price": 1995
      },
      {
        "date": "2026-07-09",
        "price": 3000
      },
      {
        "date": "2026-07-11",
        "price": 3400
      },
      {
        "date": "2026-07-12",
        "price": 3500
      }
    ],
    "notionPageId": "391d9b45-174c-812d-b826-d1366cbf8f2f"
  },
  {
    "id": "OGN-308",
    "name": "OGN Viktor, Herald of the Arcane (V.2 — Showcase)",
    "set": "Origins",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 0,
    "currentPrice": 58,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-308.webp",
    "cardNumber": "OGN-308",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Viktor-Herald-of-the-Arcane-V2-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-06-20",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 70
      },
      {
        "date": "2026-06-23",
        "price": 60
      },
      {
        "date": "2026-06-24",
        "price": 60
      },
      {
        "date": "2026-06-26",
        "price": 62.95
      },
      {
        "date": "2026-06-29",
        "price": 62.5
      },
      {
        "date": "2026-07-07",
        "price": 60
      },
      {
        "date": "2026-07-08",
        "price": 59.99
      },
      {
        "date": "2026-07-09",
        "price": 59
      },
      {
        "date": "2026-07-11",
        "price": 59
      },
      {
        "date": "2026-07-12",
        "price": 58
      }
    ],
    "notionPageId": "385d9b45-174c-81e0-84b0-d51b2af5dddc"
  },
  {
    "id": "OGN-246b",
    "name": "OGNX Viktor, Leader (V.2 — Showcase)",
    "set": "Origins",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 55,
    "currentPrice": 98,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-246b.webp",
    "cardNumber": "OGN-246b",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Viktor-Leader-V2-Showcase?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-06-15",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 58
      },
      {
        "date": "2026-06-23",
        "price": 70
      },
      {
        "date": "2026-06-24",
        "price": 70
      },
      {
        "date": "2026-06-26",
        "price": 60
      },
      {
        "date": "2026-06-29",
        "price": 60
      },
      {
        "date": "2026-07-06",
        "price": 78.94
      },
      {
        "date": "2026-07-07",
        "price": 78.94
      },
      {
        "date": "2026-07-08",
        "price": 78.94
      },
      {
        "date": "2026-07-09",
        "price": 98
      },
      {
        "date": "2026-07-11",
        "price": 98
      },
      {
        "date": "2026-07-12",
        "price": 98
      }
    ],
    "notionPageId": "380d9b45-174c-813f-a772-fce1f8af45e6"
  },
  {
    "id": "OGN-302",
    "name": "OGN Darius, Hand of Noxus (V.2 — Showcase)",
    "set": "Origins",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 37,
    "currentPrice": 29,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-302.webp",
    "cardNumber": "OGN-302",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Darius-Hand-of-Noxus-V2-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-06-13",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 37
      },
      {
        "date": "2026-06-23",
        "price": 29.95
      },
      {
        "date": "2026-06-24",
        "price": 29.95
      },
      {
        "date": "2026-06-26",
        "price": 30
      },
      {
        "date": "2026-06-29",
        "price": 29.95
      },
      {
        "date": "2026-07-07",
        "price": 29
      },
      {
        "date": "2026-07-08",
        "price": 27
      },
      {
        "date": "2026-07-09",
        "price": 28
      },
      {
        "date": "2026-07-11",
        "price": 29
      },
      {
        "date": "2026-07-12",
        "price": 29
      }
    ],
    "notionPageId": "37ed9b45-174c-81a5-a6be-d8aab220c0b3"
  },
  {
    "id": "OGN-151b",
    "name": "OGNX Lee Sin, Centered",
    "set": "Origins",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 35,
    "currentPrice": 89,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-151b.webp",
    "cardNumber": "OGN-151b",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Centered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-05-25",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 30
      },
      {
        "date": "2026-06-23",
        "price": 24.99
      },
      {
        "date": "2026-06-24",
        "price": 24.5
      },
      {
        "date": "2026-06-26",
        "price": 24.5
      },
      {
        "date": "2026-06-29",
        "price": 24.99
      },
      {
        "date": "2026-07-07",
        "price": 35
      },
      {
        "date": "2026-07-08",
        "price": 35
      },
      {
        "date": "2026-07-09",
        "price": 60
      },
      {
        "date": "2026-07-11",
        "price": 94.5
      },
      {
        "date": "2026-07-12",
        "price": 89
      }
    ],
    "notionPageId": "36bd9b45-174c-8196-8f6b-e00b22b7da2b"
  },
  {
    "id": "OGN-151b-2",
    "name": "Lee Sin, Centered",
    "set": "Origins",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 40,
    "currentPrice": 89,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-151b.webp",
    "cardNumber": "OGN-151b",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Centered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-05",
    "priceHistory": [
      {
        "date": "2026-07-06",
        "price": 24.99
      },
      {
        "date": "2026-07-07",
        "price": 35
      },
      {
        "date": "2026-07-08",
        "price": 35
      },
      {
        "date": "2026-07-09",
        "price": 60
      },
      {
        "date": "2026-07-11",
        "price": 94.5
      },
      {
        "date": "2026-07-12",
        "price": 89
      }
    ],
    "notionPageId": "397d9b45-174c-8131-b746-c8fdb0ad29fb"
  },
  {
    "id": "OGN-151b-4",
    "name": "Lee Sin, Centered",
    "set": "Origins",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 40,
    "currentPrice": 89,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-151b.webp",
    "cardNumber": "OGN-151b",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Centered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-05",
    "priceHistory": [
      {
        "date": "2026-07-06",
        "price": 24.99
      },
      {
        "date": "2026-07-07",
        "price": 35
      },
      {
        "date": "2026-07-08",
        "price": 35
      },
      {
        "date": "2026-07-09",
        "price": 60
      },
      {
        "date": "2026-07-11",
        "price": 94.5
      },
      {
        "date": "2026-07-12",
        "price": 89
      }
    ],
    "notionPageId": "395d9b45-174c-816d-a969-e584c0a97717"
  },
  {
    "id": "OGN-151b-3",
    "name": "Lee Sin, Centered",
    "set": "Origins",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 48,
    "currentPrice": 89,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-151b.webp",
    "cardNumber": "OGN-151b",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Centered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-06",
    "priceHistory": [
      {
        "date": "2026-07-07",
        "price": 35
      },
      {
        "date": "2026-07-08",
        "price": 35
      },
      {
        "date": "2026-07-09",
        "price": 60
      },
      {
        "date": "2026-07-11",
        "price": 94.5
      },
      {
        "date": "2026-07-12",
        "price": 89
      }
    ],
    "notionPageId": "395d9b45-174c-8020-8d8d-e8a280b3cf9a"
  },
  {
    "id": "UNL-235",
    "name": "OGN LeBlanc, Deceiver (V.2 — Showcase)",
    "set": "Unleashed",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 88,
    "currentPrice": 69.99,
    "image": "https://static.dotgg.gg/riftbound/cards/UNL-235.webp",
    "cardNumber": "UNL-235",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Leblanc-Deceiver-V2-Showcase?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-05-18",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 70
      },
      {
        "date": "2026-06-23",
        "price": 68
      },
      {
        "date": "2026-06-24",
        "price": 68
      },
      {
        "date": "2026-06-26",
        "price": 68
      },
      {
        "date": "2026-07-07",
        "price": 63
      },
      {
        "date": "2026-07-08",
        "price": 63
      },
      {
        "date": "2026-07-09",
        "price": 63
      },
      {
        "date": "2026-07-11",
        "price": 69
      },
      {
        "date": "2026-07-12",
        "price": 69.99
      }
    ],
    "notionPageId": "364d9b45-174c-818e-8e89-deafcfc8a126"
  },
  {
    "id": "UNL-224-a",
    "name": "UNL Mystic Poro",
    "set": "Unleashed",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 30,
    "currentPrice": 150,
    "image": "https://static.dotgg.gg/riftbound/cards/UNL-224.webp",
    "cardNumber": "UNL-224",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Mystic-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-05-25",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 80
      },
      {
        "date": "2026-06-23",
        "price": 70
      },
      {
        "date": "2026-06-24",
        "price": 70
      },
      {
        "date": "2026-06-26",
        "price": 60
      },
      {
        "date": "2026-06-29",
        "price": 60
      },
      {
        "date": "2026-07-06",
        "price": 76
      },
      {
        "date": "2026-07-07",
        "price": 70
      },
      {
        "date": "2026-07-08",
        "price": 73
      },
      {
        "date": "2026-07-09",
        "price": 79.95
      },
      {
        "date": "2026-07-11",
        "price": 149.99
      },
      {
        "date": "2026-07-12",
        "price": 150
      }
    ],
    "notionPageId": "35fd9b45-174c-81c6-90f7-da6f4d99245d"
  },
  {
    "id": "UNL-224-b",
    "name": "UNL Mystic Poro",
    "set": "Unleashed",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 34.5,
    "currentPrice": 150,
    "image": "https://static.dotgg.gg/riftbound/cards/UNL-224.webp",
    "cardNumber": "UNL-224",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Mystic-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-05-13",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 80
      },
      {
        "date": "2026-06-23",
        "price": 70
      },
      {
        "date": "2026-06-24",
        "price": 70
      },
      {
        "date": "2026-06-26",
        "price": 60
      },
      {
        "date": "2026-06-29",
        "price": 60
      },
      {
        "date": "2026-07-06",
        "price": 76
      },
      {
        "date": "2026-07-07",
        "price": 70
      },
      {
        "date": "2026-07-08",
        "price": 73
      },
      {
        "date": "2026-07-09",
        "price": 79.95
      },
      {
        "date": "2026-07-11",
        "price": 149.99
      },
      {
        "date": "2026-07-12",
        "price": 150
      }
    ],
    "notionPageId": "36bd9b45-174c-81a8-b35f-e03c0c39f172"
  },
  {
    "id": "UNL-220",
    "name": "UNL Pouty Poro",
    "set": "Unleashed",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 40,
    "currentPrice": 100.53,
    "image": "https://static.dotgg.gg/riftbound/cards/UNL-220.webp",
    "cardNumber": "UNL-220",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Pouty-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-05-13",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 45
      },
      {
        "date": "2026-06-23",
        "price": 45
      },
      {
        "date": "2026-06-29",
        "price": 79.5
      },
      {
        "date": "2026-07-03",
        "price": 70
      },
      {
        "date": "2026-07-06",
        "price": 74.99
      },
      {
        "date": "2026-07-07",
        "price": 74.89
      },
      {
        "date": "2026-07-08",
        "price": 74.97
      },
      {
        "date": "2026-07-09",
        "price": 74.97
      },
      {
        "date": "2026-07-11",
        "price": 74.97
      },
      {
        "date": "2026-07-12",
        "price": 100.53
      }
    ],
    "notionPageId": "35fd9b45-174c-81da-9b63-d52ed86d3c4b"
  },
  {
    "id": "UNL-222",
    "name": "UNL Plundering Poro",
    "set": "Unleashed",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 45,
    "currentPrice": 149.99,
    "image": "https://static.dotgg.gg/riftbound/cards/UNL-222.webp",
    "cardNumber": "UNL-222",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Plundering-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-05-18",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 54
      },
      {
        "date": "2026-06-23",
        "price": 72
      },
      {
        "date": "2026-06-24",
        "price": 72
      },
      {
        "date": "2026-06-26",
        "price": 78
      },
      {
        "date": "2026-06-29",
        "price": 73.99
      },
      {
        "date": "2026-07-03",
        "price": 72.95
      },
      {
        "date": "2026-07-06",
        "price": 70
      },
      {
        "date": "2026-07-07",
        "price": 70
      },
      {
        "date": "2026-07-08",
        "price": 69.98
      },
      {
        "date": "2026-07-09",
        "price": 69.98
      },
      {
        "date": "2026-07-11",
        "price": 90.61
      },
      {
        "date": "2026-07-12",
        "price": 149.99
      }
    ],
    "notionPageId": "364d9b45-174c-81ce-93ee-ee3adc9804db"
  },
  {
    "id": "UNL-223",
    "name": "UNL Veteran Poro",
    "set": "Unleashed",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 27.99,
    "currentPrice": 169,
    "image": "https://static.dotgg.gg/riftbound/cards/UNL-223.webp",
    "cardNumber": "UNL-223",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Veteran-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-05-13",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 35
      },
      {
        "date": "2026-06-23",
        "price": 70
      },
      {
        "date": "2026-06-24",
        "price": 70
      },
      {
        "date": "2026-06-26",
        "price": 73
      },
      {
        "date": "2026-06-29",
        "price": 57.21
      },
      {
        "date": "2026-07-03",
        "price": 62
      },
      {
        "date": "2026-07-07",
        "price": 60
      },
      {
        "date": "2026-07-08",
        "price": 60
      },
      {
        "date": "2026-07-09",
        "price": 67.98
      },
      {
        "date": "2026-07-11",
        "price": 99.95
      },
      {
        "date": "2026-07-12",
        "price": 169
      }
    ],
    "notionPageId": "35fd9b45-174c-81fc-bada-ffacf6b948c2"
  },
  {
    "id": "UNL-225",
    "name": "UNL Daring Poro",
    "set": "Unleashed",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 36.5,
    "currentPrice": 140,
    "image": "https://static.dotgg.gg/riftbound/cards/UNL-225.webp",
    "cardNumber": "UNL-225",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Daring-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-05-13",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 70
      },
      {
        "date": "2026-06-23",
        "price": 70
      },
      {
        "date": "2026-06-24",
        "price": 70
      },
      {
        "date": "2026-06-26",
        "price": 75
      },
      {
        "date": "2026-06-29",
        "price": 74.95
      },
      {
        "date": "2026-07-06",
        "price": 68.21
      },
      {
        "date": "2026-07-07",
        "price": 60
      },
      {
        "date": "2026-07-08",
        "price": 68
      },
      {
        "date": "2026-07-09",
        "price": 60
      },
      {
        "date": "2026-07-11",
        "price": 85
      },
      {
        "date": "2026-07-12",
        "price": 140
      }
    ],
    "notionPageId": "35fd9b45-174c-819d-8bce-fe435051e191"
  },
  {
    "id": "UNL-221-a",
    "name": "UNL Lonely Poro",
    "set": "Unleashed",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 50,
    "currentPrice": 121.26,
    "image": "https://static.dotgg.gg/riftbound/cards/UNL-221.webp",
    "cardNumber": "UNL-221",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Lonely-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-05-25",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 100
      },
      {
        "date": "2026-06-23",
        "price": 89
      },
      {
        "date": "2026-06-24",
        "price": 89.99
      },
      {
        "date": "2026-06-26",
        "price": 89.99
      },
      {
        "date": "2026-06-29",
        "price": 89.99
      },
      {
        "date": "2026-07-06",
        "price": 98
      },
      {
        "date": "2026-07-07",
        "price": 85
      },
      {
        "date": "2026-07-08",
        "price": 89
      },
      {
        "date": "2026-07-09",
        "price": 89
      },
      {
        "date": "2026-07-11",
        "price": 121.26
      },
      {
        "date": "2026-07-12",
        "price": 121.26
      }
    ],
    "notionPageId": "36bd9b45-174c-8123-bb68-f4415c11ce8e"
  },
  {
    "id": "UNL-221-b",
    "name": "UNL Lonely Poro",
    "set": "Unleashed",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 40,
    "currentPrice": 121.26,
    "image": "https://static.dotgg.gg/riftbound/cards/UNL-221.webp",
    "cardNumber": "UNL-221",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed/Lonely-Poro?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-05-25",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 100
      },
      {
        "date": "2026-06-23",
        "price": 89
      },
      {
        "date": "2026-06-24",
        "price": 89.99
      },
      {
        "date": "2026-06-26",
        "price": 89.99
      },
      {
        "date": "2026-06-29",
        "price": 89.99
      },
      {
        "date": "2026-07-06",
        "price": 98
      },
      {
        "date": "2026-07-07",
        "price": 85
      },
      {
        "date": "2026-07-08",
        "price": 89
      },
      {
        "date": "2026-07-09",
        "price": 89
      },
      {
        "date": "2026-07-11",
        "price": 121.26
      },
      {
        "date": "2026-07-12",
        "price": 121.26
      }
    ],
    "notionPageId": "36bd9b45-174c-8101-af1a-c786df52dc2e"
  },
  {
    "id": "SFD-245",
    "name": "SFD Jax, Grandmaster at Arms (V.2 — Showcase)",
    "set": "Spiritforged",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 50,
    "currentPrice": 25.95,
    "image": "https://static.dotgg.gg/riftbound/cards/SFD-245.webp",
    "cardNumber": "SFD-245",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Spiritforged/Jax-Grandmaster-at-Arms-V2-Showcase?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-06-20",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 28
      },
      {
        "date": "2026-06-23",
        "price": 28
      },
      {
        "date": "2026-07-03",
        "price": 26.21
      },
      {
        "date": "2026-07-06",
        "price": 25.99
      },
      {
        "date": "2026-07-07",
        "price": 26
      },
      {
        "date": "2026-07-08",
        "price": 25.95
      },
      {
        "date": "2026-07-09",
        "price": 25.95
      },
      {
        "date": "2026-07-11",
        "price": 26.2
      },
      {
        "date": "2026-07-12",
        "price": 25.95
      }
    ],
    "notionPageId": "385d9b45-174c-81a5-8810-c3180ec3a2be"
  },
  {
    "id": "SFD-232",
    "name": "SFD Sett, Brawler (V.1 — Showcase)",
    "set": "Spiritforged",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 58,
    "currentPrice": 55,
    "image": "https://static.dotgg.gg/riftbound/cards/SFD-232.webp",
    "cardNumber": "SFD-232",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Spiritforged/Sett-Brawler-V1-Showcase?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-05-18",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 45
      },
      {
        "date": "2026-06-23",
        "price": 55
      },
      {
        "date": "2026-06-24",
        "price": 52
      },
      {
        "date": "2026-06-26",
        "price": 50
      },
      {
        "date": "2026-06-29",
        "price": 50
      },
      {
        "date": "2026-07-03",
        "price": 45
      },
      {
        "date": "2026-07-06",
        "price": 50
      },
      {
        "date": "2026-07-07",
        "price": 45
      },
      {
        "date": "2026-07-08",
        "price": 48
      },
      {
        "date": "2026-07-09",
        "price": 50
      },
      {
        "date": "2026-07-11",
        "price": 50
      },
      {
        "date": "2026-07-12",
        "price": 55
      }
    ],
    "notionPageId": "364d9b45-174c-81a2-8fca-d226a5a5439b"
  },
  {
    "id": "UNL-CASE",
    "name": "Unleashed Booster Box Case (6×)",
    "set": "Unleashed",
    "condition": "Sealed",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 590,
    "currentPrice": 605.9,
    "image": "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/46c776a96cc14227a260d24489f10b4090cd2cd9-2560x2560.png",
    "cardNumber": "UNL Case (6x)",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Booster-Boxes/Unleashed-Case-6x-Booster-Box?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
    "buyDate": "2026-06-20",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 595
      },
      {
        "date": "2026-06-23",
        "price": 643.9
      },
      {
        "date": "2026-06-24",
        "price": 643.9
      },
      {
        "date": "2026-06-26",
        "price": 642
      },
      {
        "date": "2026-07-03",
        "price": 636.5
      },
      {
        "date": "2026-07-06",
        "price": 606.11
      },
      {
        "date": "2026-07-07",
        "price": 606.11
      },
      {
        "date": "2026-07-08",
        "price": 606.1
      },
      {
        "date": "2026-07-09",
        "price": 605.9
      },
      {
        "date": "2026-07-11",
        "price": 605.9
      },
      {
        "date": "2026-07-12",
        "price": 605.9
      }
    ],
    "notionPageId": "385d9b45-174c-8150-b604-e53b34ba6331"
  },
  {
    "id": "OGN-BOX",
    "name": "Origins Booster Box",
    "set": "Origins",
    "condition": "Sealed",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 128,
    "currentPrice": 163.4,
    "image": "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/e026ee1a44bc86095f9afc5949c5fdb519b29c66-2560x2560.png",
    "cardNumber": "OGN Box",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Booster-Boxes/Origins-Booster-Box?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
    "buyDate": "2026-05-27",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 150
      },
      {
        "date": "2026-06-23",
        "price": 155.19
      },
      {
        "date": "2026-06-24",
        "price": 161.89
      },
      {
        "date": "2026-06-26",
        "price": 159.94
      },
      {
        "date": "2026-06-29",
        "price": 157
      },
      {
        "date": "2026-07-03",
        "price": 156.85
      },
      {
        "date": "2026-07-06",
        "price": 146.9
      },
      {
        "date": "2026-07-07",
        "price": 145.95
      },
      {
        "date": "2026-07-08",
        "price": 145.95
      },
      {
        "date": "2026-07-09",
        "price": 146.9
      },
      {
        "date": "2026-07-11",
        "price": 156.85
      },
      {
        "date": "2026-07-12",
        "price": 163.4
      }
    ],
    "notionPageId": "36dd9b45-174c-818d-9270-d19bf7e725c7"
  },
  {
    "id": "PG-BOX",
    "name": "Proving Grounds",
    "set": "Proving Grounds",
    "condition": "Sealed",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 45,
    "currentPrice": 57.85,
    "image": "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/a2ca8f9bc247fc5435432e9a97c4efc5b79020c4-2560x2560.png",
    "cardNumber": "PG Box",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Box-Sets/Proving-Grounds?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
    "buyDate": "2026-05-27",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 35
      },
      {
        "date": "2026-06-23",
        "price": 59.89
      },
      {
        "date": "2026-06-24",
        "price": 59.89
      },
      {
        "date": "2026-06-26",
        "price": 60.5
      },
      {
        "date": "2026-07-03",
        "price": 63.75
      },
      {
        "date": "2026-07-06",
        "price": 57.9
      },
      {
        "date": "2026-07-07",
        "price": 57.9
      },
      {
        "date": "2026-07-08",
        "price": 57.9
      },
      {
        "date": "2026-07-09",
        "price": 57.85
      },
      {
        "date": "2026-07-11",
        "price": 57.85
      },
      {
        "date": "2026-07-12",
        "price": 57.85
      }
    ],
    "notionPageId": "36dd9b45-174c-81e8-ad53-ccf98cf86c4e"
  },
  {
    "id": "ARCANE-BOX",
    "name": "Arcane Box Set",
    "set": "Origins",
    "condition": "Sealed",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 190,
    "currentPrice": 388.64,
    "image": "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/2f0e070b2ea935e916cd8fa31253791a37d3a956-2560x2560.png",
    "cardNumber": "Arcane Box Set",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Box-Sets/Arcane-Box-Set?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
    "buyDate": "2026-06-30",
    "priceHistory": [
      {
        "date": "2026-06-22",
        "price": 200
      },
      {
        "date": "2026-06-24",
        "price": 179
      },
      {
        "date": "2026-06-26",
        "price": 184
      },
      {
        "date": "2026-06-29",
        "price": 216.65
      },
      {
        "date": "2026-07-03",
        "price": 305.48
      },
      {
        "date": "2026-07-06",
        "price": 320.49
      },
      {
        "date": "2026-07-07",
        "price": 295.49
      },
      {
        "date": "2026-07-08",
        "price": 295.49
      },
      {
        "date": "2026-07-09",
        "price": 310.48
      },
      {
        "date": "2026-07-11",
        "price": 345.48
      },
      {
        "date": "2026-07-12",
        "price": 388.64
      }
    ],
    "notionPageId": "387d9b45-174c-815d-ac33-c06eeb2c4238"
  },
  {
    "id": "WORLDS-BOX",
    "name": "Worlds Bundle 2025",
    "set": "Origins",
    "condition": "Sealed",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 190,
    "currentPrice": 889.59,
    "image": "https://cdn.sanity.io/images/dsfx7636/consumer_products_live/e67cae02bd6312c1e9a4b3a0eb9e70dbd3dbcd0e-2560x2560.png",
    "cardNumber": "Worlds Bundle",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Box-Sets/Worlds-Bundle-2025?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
    "buyDate": "2026-06-30",
    "priceHistory": [
      {
        "date": "2026-06-26",
        "price": 221.06
      },
      {
        "date": "2026-07-03",
        "price": 473.49
      },
      {
        "date": "2026-07-06",
        "price": 472.49
      },
      {
        "date": "2026-07-07",
        "price": 448.49
      },
      {
        "date": "2026-07-08",
        "price": 423.49
      },
      {
        "date": "2026-07-09",
        "price": 463.49
      },
      {
        "date": "2026-07-11",
        "price": 577.48
      },
      {
        "date": "2026-07-12",
        "price": 889.59
      }
    ],
    "notionPageId": "38fd9b45-174c-8102-bf1a-d0b23a3f42f3"
  },
  {
    "id": "OGN-305-OVN",
    "name": "OGN Yasuo, Unforgiven (V.2 — Overnumbered)",
    "set": "Origins",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 38,
    "currentPrice": 45,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-305.webp",
    "cardNumber": "OGN-305*",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Yasuo-Unforgiven-V2-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-06-30",
    "priceHistory": [
      {
        "date": "2026-06-30",
        "price": 38
      },
      {
        "date": "2026-07-03",
        "price": 38
      },
      {
        "date": "2026-07-07",
        "price": 38
      },
      {
        "date": "2026-07-08",
        "price": 38
      },
      {
        "date": "2026-07-09",
        "price": 38
      },
      {
        "date": "2026-07-11",
        "price": 39.99
      },
      {
        "date": "2026-07-12",
        "price": 45
      }
    ],
    "notionPageId": "38fd9b45-174c-8117-b95a-f2431033370b"
  },
  {
    "id": "OGNX-246",
    "name": "Viktor, Leader (V.1 - Epic)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyDate": "2026-07-11",
    "buyPrice": 30,
    "currentPrice": 25,
    "image": "https://images.tcggo.com/tcggo/storage/35785/conversions/viktor-leader-ogn-246-origins-promos-large.webp",
    "cardNumber": "246",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Viktor-Leader-V1-Epic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-08",
        "price": 30
      },
      {
        "date": "2026-07-09",
        "price": 25
      },
      {
        "date": "2026-07-11",
        "price": 25
      },
      {
        "date": "2026-07-12",
        "price": 25
      }
    ],
    "notionPageId": "39ad9b45-174c-81e4-8d6e-efbc9630781c"
  },
  {
    "id": "OGN-151b-5",
    "name": "Lee Sin, Centered",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 42,
    "currentPrice": 89,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-151b.webp",
    "cardNumber": "151b",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Centered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-08",
    "priceHistory": [
      {
        "date": "2026-07-08",
        "price": 35
      },
      {
        "date": "2026-07-09",
        "price": 60
      },
      {
        "date": "2026-07-11",
        "price": 94.5
      },
      {
        "date": "2026-07-12",
        "price": 89
      }
    ],
    "notionPageId": "394d9b45-174c-81d3-baeb-c610238ea280"
  },
  {
    "id": "OGNX-078",
    "name": "Lee Sin, Ascetic",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 18,
    "currentPrice": 20,
    "image": "https://images.tcggo.com/tcggo/storage/35768/conversions/lee-sin-ascetic-ogn-078-origins-promos-large.webp",
    "cardNumber": "078",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Ascetic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-08",
    "priceHistory": [
      {
        "date": "2026-07-08",
        "price": 18
      },
      {
        "date": "2026-07-09",
        "price": 18
      },
      {
        "date": "2026-07-11",
        "price": 17
      },
      {
        "date": "2026-07-12",
        "price": 20
      }
    ],
    "notionPageId": "39ad9b45-174c-8109-9667-f7a7203b8ea9"
  },
  {
    "id": "PROK-FND196",
    "name": "Teemo, Scout",
    "set": "Project K Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 3000,
    "image": "https://images.tcggo.com/tcggo/storage/35666/conversions/teemo-scout-prok-fnd196-project-k-promos-large.webp",
    "cardNumber": "FND196",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Project-K-Promos/Teemo-Scout?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-08",
        "price": 3500
      },
      {
        "date": "2026-07-12",
        "price": 3000
      }
    ],
    "notionPageId": "397d9b45-174c-8116-8d05-dd6c37a53841"
  },
  {
    "id": "PROK-FND249",
    "name": "Volibear, Relentless Storm",
    "set": "Project K Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 749,
    "image": "https://images.tcggo.com/tcggo/storage/35668/conversions/volibear-relentless-storm-prok-fnd249-project-k-promos-large.webp",
    "cardNumber": "FND249",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Project-K-Promos/Volibear-Relentless-Storm?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-08",
        "price": 799
      },
      {
        "date": "2026-07-12",
        "price": 749
      }
    ],
    "notionPageId": "397d9b45-174c-81d8-b6a7-d3f173108273"
  },
  {
    "id": "PROK-FND259",
    "name": "Yasuo, Unforgiven",
    "set": "Project K Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 2899.99,
    "image": "https://images.tcggo.com/tcggo/storage/35669/conversions/yasuo-unforgiven-prok-fnd259-project-k-promos-large.webp",
    "cardNumber": "FND259",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Project-K-Promos/Yasuo-Unforgiven?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-08",
        "price": 1400
      },
      {
        "date": "2026-07-12",
        "price": 2899.99
      }
    ],
    "notionPageId": "397d9b45-174c-814e-89fd-cf82bac6b596"
  },
  {
    "id": "PROK-FND265",
    "name": "Viktor, Herald of the Arcane",
    "set": "Project K Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 3699.99,
    "image": "https://images.tcggo.com/tcggo/storage/35667/conversions/viktor-herald-of-the-arcane-prok-fnd265-project-k-promos-large.webp",
    "cardNumber": "FND265",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Project-K-Promos/Viktor-Herald-of-the-Arcane?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-08",
        "price": 1400
      },
      {
        "date": "2026-07-12",
        "price": 3699.99
      }
    ],
    "notionPageId": "397d9b45-174c-8178-9888-e5bec3d37b04"
  },
  {
    "id": "PROK-FND251",
    "name": "Jinx, Loose Cannon (Project K Promos)",
    "set": "Project K Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 1800,
    "image": "https://images.tcggo.com/tcggo/storage/35665/conversions/jinx-loose-cannon-prok-fnd251-project-k-promos-large.webp",
    "cardNumber": "FND251",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Project-K-Promos/Jinx-Loose-Cannon?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-08",
        "price": 1400
      },
      {
        "date": "2026-07-12",
        "price": 1800
      }
    ],
    "notionPageId": "397d9b45-174c-81cd-8500-dde98a35b039"
  },
  {
    "id": "OGNX-202",
    "name": "Jinx, Rebel (V.1 - Epic)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyDate": "2026-07-11",
    "buyPrice": 40,
    "currentPrice": 43,
    "image": "https://images.tcggo.com/tcggo/storage/35781/conversions/jinx-rebel-ogn-202-origins-promos-large.webp",
    "cardNumber": "202",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Jinx-Rebel-V1-Epic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-08",
        "price": 39.9
      },
      {
        "date": "2026-07-11",
        "price": 35
      },
      {
        "date": "2026-07-12",
        "price": 43
      }
    ],
    "notionPageId": "39ad9b45-174c-81c7-a916-d7ccdf1ba140"
  },
  {
    "id": "OGNX-251",
    "name": "Jinx, Loose Cannon (Origins Promos)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 32,
    "currentPrice": 85,
    "image": "https://images.tcggo.com/tcggo/storage/35788/conversions/jinx-loose-cannon-ogn-251-origins-promos-large.webp",
    "cardNumber": "251",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Jinx-Loose-Cannon?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-10",
    "priceHistory": [
      {
        "date": "2026-07-08",
        "price": 28
      },
      {
        "date": "2026-07-10",
        "price": 38
      },
      {
        "date": "2026-07-11",
        "price": 85
      },
      {
        "date": "2026-07-12",
        "price": 85
      }
    ],
    "notionPageId": "39ad9b45-174c-81bd-852a-d3458fcd5b8b"
  },
  {
    "id": "OGNX-261",
    "name": "Leona, Radiant Dawn (Origins Promos)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 13,
    "currentPrice": 10,
    "image": "https://images.tcggo.com/tcggo/storage/35793/conversions/leona-radiant-dawn-ogn-261-origins-promos-large.webp",
    "cardNumber": "261",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Leona-Radiant-Dawn?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-10",
    "priceHistory": [
      {
        "date": "2026-07-10",
        "price": 10
      },
      {
        "date": "2026-07-11",
        "price": 10
      },
      {
        "date": "2026-07-12",
        "price": 10
      }
    ],
    "notionPageId": "39ad9b45-174c-8150-bccd-c27e6f2acad0"
  },
  {
    "id": "OGNX-021",
    "name": "Lux, Lady of Luminosity (Origins Promos)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 15,
    "currentPrice": 12.8,
    "image": "https://images.tcggo.com/tcggo/storage/35757/conversions/lux-lady-of-luminosity-ogn-021-origins-promos-large.webp",
    "cardNumber": "021",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lux-Lady-of-Luminosity?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-10",
    "priceHistory": [
      {
        "date": "2026-07-10",
        "price": 12.8
      },
      {
        "date": "2026-07-11",
        "price": 12.8
      },
      {
        "date": "2026-07-12",
        "price": 12.8
      }
    ],
    "notionPageId": "398d9b45-174c-8119-98f0-d4ce79554614"
  },
  {
    "id": "OGNX-265",
    "name": "Viktor, Herald of the Arcane (Origins Promos)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 16,
    "currentPrice": 9,
    "image": "https://images.tcggo.com/tcggo/storage/35795/conversions/viktor-herald-of-the-arcane-ogn-265-origins-promos-large.webp",
    "cardNumber": "265",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Viktor-Herald-of-the-Arcane?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-10",
    "priceHistory": [
      {
        "date": "2026-07-10",
        "price": 9
      },
      {
        "date": "2026-07-11",
        "price": 9
      },
      {
        "date": "2026-07-12",
        "price": 9
      }
    ],
    "notionPageId": "398d9b45-174c-81f5-808e-d4698dea04f6"
  },
  {
    "id": "UNLX-058",
    "name": "Lillia, Protector of Dreams (V.2 - Epic)",
    "set": "Unleashed Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 60,
    "image": "https://static.dotgg.gg/riftbound/cards/UNL-058.webp",
    "cardNumber": "058",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed-Promos/Lillia-Protector-of-Dreams-V2-Epic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-10",
        "price": 45
      },
      {
        "date": "2026-07-12",
        "price": 60
      }
    ],
    "notionPageId": "399d9b45-174c-81e3-9931-f4133dcb0563"
  },
  {
    "id": "SFDX-059",
    "name": "Svellsongur",
    "set": "Spiritforged Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 116,
    "image": "https://static.dotgg.gg/riftbound/cards/SFD-059.webp",
    "cardNumber": "059",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Spiritforged-Promos/Svellsongur?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-10",
        "price": 116
      },
      {
        "date": "2026-07-12",
        "price": 116
      }
    ],
    "notionPageId": "399d9b45-174c-81ce-a04c-c76bd9d2d948"
  },
  {
    "id": "LUNAR-REVEL-BOX",
    "name": "Lunar Revel Bundle",
    "set": "Origins",
    "condition": "Sealed",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 138.65,
    "image": "https://images.tcggo.com/tcggo/storage/35729/conversions/lunar-revel-bundle-large.webp",
    "cardNumber": "Lunar Revel Bundle",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Box-Sets/Lunar-Revel-Bundle?language=1&sortBy=price_asc&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 138.65
      }
    ],
    "notionPageId": "399d9b45-174c-81ac-bbc5-c6646c64dcf0"
  },
  {
    "id": "OGNX-249",
    "name": "Volibear, Relentless Storm (Origins Promos)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 12,
    "currentPrice": 9.5,
    "image": "https://images.tcggo.com/tcggo/storage/35787/conversions/volibear-relentless-storm-ogn-249-origins-promos-large.webp",
    "cardNumber": "249",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Volibear-Relentless-Storm?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-10",
        "price": 9
      },
      {
        "date": "2026-07-12",
        "price": 9.5
      }
    ],
    "notionPageId": "398d9b45-174c-81c8-b925-f36cd7513488",
    "buyDate": "2026-07-12"
  },
  {
    "id": "OGNX-259",
    "name": "Yasuo, Unforgiven (Origins Promos)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 13.95,
    "image": "https://images.tcggo.com/tcggo/storage/35792/conversions/yasuo-unforgiven-ogn-259-origins-promos-large.webp",
    "cardNumber": "259",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Yasuo-Unforgiven?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-10",
        "price": 12
      },
      {
        "date": "2026-07-12",
        "price": 13.95
      }
    ],
    "notionPageId": "398d9b45-174c-8154-b9f1-e3c3610ed914"
  },
  {
    "id": "OGNX-263",
    "name": "Teemo, Swift Scout (V.1 - Rare) (Origins Promos)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 27,
    "image": "https://images.tcggo.com/tcggo/storage/35794/conversions/teemo-swift-scout-ogn-263-origins-promos-large.webp",
    "cardNumber": "263",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Teemo-Swift-Scout-V1-Rare?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-10",
        "price": 28
      },
      {
        "date": "2026-07-12",
        "price": 27
      }
    ],
    "notionPageId": "398d9b45-174c-8198-8623-f31a4e920eae"
  },
  {
    "id": "OGNX-257",
    "name": "Lee Sin, Blind Monk (Origins Promos)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 9,
    "image": "https://images.tcggo.com/tcggo/storage/35791/conversions/lee-sin-blind-monk-ogn-257-origins-promos-large.webp",
    "cardNumber": "257",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Blind-Monk?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-10",
        "price": 9
      },
      {
        "date": "2026-07-12",
        "price": 9
      }
    ],
    "notionPageId": "398d9b45-174c-8100-9a71-e2e7d21d3c56"
  },
  {
    "id": "OGNX-269",
    "name": "Sett, The Boss (Origins Promos)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 8,
    "image": "https://images.tcggo.com/tcggo/storage/35797/conversions/sett-the-boss-ogn-269-origins-promos-large.webp",
    "cardNumber": "269",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Sett-The-Boss?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-10",
        "price": 8
      },
      {
        "date": "2026-07-12",
        "price": 8
      }
    ],
    "notionPageId": "398d9b45-174c-81ec-9037-f758b70d5f26"
  },
  {
    "id": "OGNX-267",
    "name": "Miss Fortune, Bounty Hunter (Origins Promos)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 24,
    "image": "https://images.tcggo.com/tcggo/storage/35796/conversions/miss-fortune-bounty-hunter-ogn-267-origins-promos-large.webp",
    "cardNumber": "267",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Miss-Fortune-Bounty-Hunter?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-10",
        "price": 14
      },
      {
        "date": "2026-07-12",
        "price": 24
      }
    ],
    "notionPageId": "398d9b45-174c-8128-b9ea-d43927bfd0fe"
  },
  {
    "id": "OGNX-066",
    "name": "Ahri, Alluring",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 66,
    "currentPrice": 74.5,
    "image": "https://images.tcggo.com/tcggo/storage/35766/conversions/ahri-alluring-ogn-066-origins-promos-large.webp",
    "cardNumber": "066",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Ahri-Alluring?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-09",
    "priceHistory": [
      {
        "date": "2026-07-08",
        "price": 65
      },
      {
        "date": "2026-07-09",
        "price": 65
      },
      {
        "date": "2026-07-11",
        "price": 65
      },
      {
        "date": "2026-07-12",
        "price": 74.5
      }
    ],
    "notionPageId": "398d9b45-174c-81ee-946f-cd967c3b56ae"
  },
  {
    "id": "OGNX-066-2",
    "name": "Ahri, Alluring",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 66,
    "currentPrice": 74.5,
    "image": "https://images.tcggo.com/tcggo/storage/35766/conversions/ahri-alluring-ogn-066-origins-promos-large.webp",
    "cardNumber": "066",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Ahri-Alluring?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-09",
    "priceHistory": [
      {
        "date": "2026-07-09",
        "price": 65
      },
      {
        "date": "2026-07-11",
        "price": 65
      },
      {
        "date": "2026-07-12",
        "price": 74.5
      }
    ],
    "notionPageId": "398d9b45-174c-8148-8cd8-eee04e98498a"
  },
  {
    "id": "OGNX-066-3",
    "name": "Ahri, Alluring",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 66,
    "currentPrice": 74.5,
    "image": "https://images.tcggo.com/tcggo/storage/35766/conversions/ahri-alluring-ogn-066-origins-promos-large.webp",
    "cardNumber": "066",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Ahri-Alluring?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-09",
    "priceHistory": [
      {
        "date": "2026-07-09",
        "price": 65
      },
      {
        "date": "2026-07-11",
        "price": 65
      },
      {
        "date": "2026-07-12",
        "price": 74.5
      }
    ],
    "notionPageId": "397d9b45-174c-817f-833a-e9e70cfe4361"
  },
  {
    "id": "SFDX-139",
    "name": "Edge of Night (V.2 - Rare)",
    "set": "Spiritforged Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 55,
    "image": "https://images.tcggo.com/tcggo/storage/35711/conversions/edge-of-night-sfdx-139-spiritforged-promos-large.webp",
    "cardNumber": "139",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Spiritforged-Promos/Edge-of-Night-V2-Rare?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-09",
        "price": 23.99
      },
      {
        "date": "2026-07-12",
        "price": 55
      }
    ],
    "notionPageId": "398d9b45-174c-8176-ab8f-d940f9c64f12"
  },
  {
    "id": "SFDX-051",
    "name": "Guardian Angel (V.2 - Rare)",
    "set": "Spiritforged Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 99,
    "image": "https://images.tcggo.com/tcggo/storage/35697/conversions/guardian-angel-sfdx-051-spiritforged-promos-large.webp",
    "cardNumber": "051",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Spiritforged-Promos/Guardian-Angel-V2-Rare?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-09",
        "price": 29
      },
      {
        "date": "2026-07-12",
        "price": 99
      }
    ],
    "notionPageId": "398d9b45-174c-81c7-a933-dff471573a61"
  },
  {
    "id": "UNLX-120",
    "name": "Rengar, Trophy Hunter (V.2 - Epic)",
    "set": "Unleashed Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 119.99,
    "image": "https://images.tcggo.com/tcggo/storage/33118/conversions/rengar-trophy-hunter-large.webp",
    "cardNumber": "120",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Unleashed-Promos/Rengar-Trophy-Hunter-V2-Epic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-09",
        "price": 83
      },
      {
        "date": "2026-07-12",
        "price": 119.99
      }
    ],
    "notionPageId": "398d9b45-174c-8159-93f6-cdbeb3f2d1a2"
  },
  {
    "id": "OGNX-078-2",
    "name": "Lee Sin, Ascetic",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 18,
    "currentPrice": 20,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-078.webp",
    "cardNumber": "078",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Ascetic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-12",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 20
      }
    ],
    "notionPageId": "397d9b45-174c-8103-a4ad-d93abc46ef4b"
  },
  {
    "id": "OGNX-251-2",
    "name": "Jinx, Loose Cannon (Origins Promos)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 32,
    "currentPrice": 85,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-251.webp",
    "cardNumber": "251",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Jinx-Loose-Cannon?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-12",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 85
      }
    ],
    "notionPageId": "397d9b45-174c-8138-b517-d8ae2a276992"
  },
  {
    "id": "OGNX-261-2",
    "name": "Leona, Radiant Dawn (Origins Promos)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 13,
    "currentPrice": 10,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-261.webp",
    "cardNumber": "261",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Leona-Radiant-Dawn?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-12",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 10
      }
    ],
    "notionPageId": "398d9b45-174c-818d-afcb-ffaf7e8c6b7a"
  },
  {
    "id": "OGNX-202-2",
    "name": "Jinx, Rebel (V.1 - Epic)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 43,
    "currentPrice": 43,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-202.webp",
    "cardNumber": "202",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Jinx-Rebel-V1-Epic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-12",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 43
      }
    ],
    "notionPageId": "39ad9b45-174c-81e4-8d19-e1d514994b84"
  },
  {
    "id": "OGNX-246-2",
    "name": "Viktor, Leader (V.1 - Epic)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 32,
    "currentPrice": 25,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-246.webp",
    "cardNumber": "246",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Viktor-Leader-V1-Epic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-12",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 25
      }
    ],
    "notionPageId": "397d9b45-174c-812e-9082-d01990a128c8"
  },
  {
    "id": "OGNX-021-2",
    "name": "Lux, Lady of Luminosity (Origins Promos)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 15,
    "currentPrice": 12.8,
    "image": "https://images.tcggo.com/tcggo/storage/35757/conversions/lux-lady-of-luminosity-ogn-021-origins-promos-large.webp",
    "cardNumber": "021",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lux-Lady-of-Luminosity?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-12",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 12.8
      }
    ],
    "notionPageId": "39ad9b45-174c-81af-a3c6-dadf1f24048b"
  },
  {
    "id": "OGN-301",
    "name": "Jinx, Loose Cannon (V.2 - Showcase)",
    "set": "Origins",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 72,
    "currentPrice": 80,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-301.webp",
    "cardNumber": "301",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Jinx-Loose-Cannon-V2-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-12",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 80
      }
    ],
    "notionPageId": "39ad9b45-174c-81dc-9992-c1556ee476c3"
  },
  {
    "id": "OGN-309",
    "name": "Miss Fortune, Bounty Hunter (V.2 - Showcase)",
    "set": "Origins",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 80,
    "currentPrice": 95,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-309.webp",
    "cardNumber": "309",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins/Miss-Fortune-Bounty-Hunter-V2-Overnumbered?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-12",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 95
      }
    ],
    "notionPageId": "39ad9b45-174c-812c-9c52-c45db6b1a85e"
  },
  {
    "id": "OGNX-078-3",
    "name": "Lee Sin, Ascetic",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 21,
    "currentPrice": 20,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-078.webp",
    "cardNumber": "078",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Ascetic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-12",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 20
      }
    ],
    "notionPageId": "39bd9b45-174c-8118-a252-c711240550e7"
  },
  {
    "id": "OGNX-078-4",
    "name": "Lee Sin, Ascetic",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 21,
    "currentPrice": 20,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-078.webp",
    "cardNumber": "078",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Lee-Sin-Ascetic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-12",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 20
      }
    ],
    "notionPageId": "39bd9b45-174c-81df-9d0f-f03f71d6e63b"
  },
  {
    "id": "OGNX-246-3",
    "name": "Viktor, Leader (V.1 - Epic)",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 31,
    "currentPrice": 25,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-246.webp",
    "cardNumber": "246",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Viktor-Leader-V1-Epic?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-12",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 25
      }
    ],
    "notionPageId": "39bd9b45-174c-816b-88d5-dba9037f00a1"
  },
  {
    "id": "OGN-017",
    "name": "Annie, Dark Child",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 12,
    "currentPrice": 11,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-017.webp",
    "cardNumber": "017",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Annie-Dark-Child?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-12",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 11
      }
    ],
    "notionPageId": "39bd9b45-174c-8103-93bb-e3a552e68336"
  },
  {
    "id": "OGN-023",
    "name": "Garen, Might of Demacia",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 3,
    "currentPrice": 3,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-023.webp",
    "cardNumber": "023",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Garen-Might-of-Demacia?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-12",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 3
      }
    ],
    "notionPageId": "39bd9b45-174c-81ed-8c9a-e11e11c45380"
  },
  {
    "id": "OGN-253",
    "name": "Darius, Hand of Noxus",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Holding",
    "qty": 1,
    "buyPrice": 12,
    "currentPrice": 8.99,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-253.webp",
    "cardNumber": "253",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Darius-Hand-of-Noxus?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "buyDate": "2026-07-12",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 8.99
      }
    ],
    "notionPageId": "39bd9b45-174c-813d-b3f8-c8b0bb69b6a5"
  },
  {
    "id": "OGN-019",
    "name": "Master Yi, Wuju Bladesman",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 19,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-019.webp",
    "cardNumber": "019",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Master-Yi-Wuju-Bladesman?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 19
      }
    ],
    "notionPageId": "39bd9b45-174c-8156-9f8e-f7fe655ce57d"
  },
  {
    "id": "OGN-255",
    "name": "Ahri, Nine-Tailed Fox",
    "set": "Origins Promos",
    "condition": "Raw",
    "status": "Watchlist",
    "qty": 1,
    "buyPrice": null,
    "currentPrice": 230,
    "image": "https://static.dotgg.gg/riftbound/cards/OGN-255.webp",
    "cardNumber": "255",
    "cardmarketUrl": "https://www.cardmarket.com/en/Riftbound/Products/Singles/Origins-Promos/Ahri-Nine-Tailed-Fox?language=1&minCondition=2&sellerCountry=1,2,3,33,35,5,6,8,9,11,12,7,14,15,37,16,17,36,21,18,19,20,22,23,24,25,26,27,29,31,30,10,28,4&sortBy=price_asc",
    "priceHistory": [
      {
        "date": "2026-07-12",
        "price": 230
      }
    ],
    "notionPageId": "39bd9b45-174c-81a4-afa0-e898cb165452"
  }
]
};
