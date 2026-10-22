/* GODZ CAFE - Menü verisi
   Fiyat (p) TL, kalori (k) kcal yaklaşık değerdir. null = değişken.
   Alerjen kodları: gluten, milk, egg, nuts, peanut, soy, sesame, mustard, celery, sulphite */

window.CONFIG = {
  mapsUrl: "https://maps.google.com/?q=Godz+Cafe+Alanya",      // TODO: gerçek Google Maps linki
  instagramUrl: "https://instagram.com/godz_alanya",      // videodaki hesap, kontrol edin
  whatsappNumber: "905000000000",                         // TODO: başında ülke kodu, boşluksuz
  wifiName: "GodzCafe",                                   // TODO
  wifiPassword: "godz2026"                                // TODO
};

function I(tr, en, ru, p, k, a, dtr, den, dru) {
  return { n: { tr, en, ru }, p, k, a: a || [], d: dtr ? { tr: dtr, en: den, ru: dru } : null };
}

window.ALLERGENS = {
  gluten:   { tr: "Gluten",        en: "Gluten",    ru: "Глютен" },
  milk:     { tr: "Süt",           en: "Milk",      ru: "Молоко" },
  egg:      { tr: "Yumurta",       en: "Egg",       ru: "Яйцо" },
  nuts:     { tr: "Kabuklu yemiş", en: "Tree nuts", ru: "Орехи" },
  peanut:   { tr: "Yer fıstığı",   en: "Peanut",    ru: "Арахис" },
  soy:      { tr: "Soya",          en: "Soy",       ru: "Соя" },
  sesame:   { tr: "Susam",         en: "Sesame",    ru: "Кунжут" },
  mustard:  { tr: "Hardal",        en: "Mustard",   ru: "Горчица" },
  celery:   { tr: "Kereviz",       en: "Celery",    ru: "Сельдерей" },
  sulphite: { tr: "Sülfit",        en: "Sulphites", ru: "Сульфиты" }
};

const FRIES = { tr: "patates cips ile", en: "served with fries", ru: "с картофелем фри" };

window.MENU = [
  /* ================= MUTFAK ================= */
  { id: "kahvalti", g: "kitchen", icon: "egg", t: { tr: "Kahvaltılar", en: "Breakfast", ru: "Завтраки" }, items: [
    I("Karışık Omlet", "Mixed Omelette", "Омлет ассорти", 245, 520, ["egg", "milk"],
      "Mantar, yeşil biber, sucuk, sosis, taze kaşar, mevsim yeşillikleri ile",
      "Mushrooms, green pepper, sucuk (Turkish sausage), sausage, fresh kashar cheese and seasonal greens",
      "Грибы, зелёный перец, суджук, сосиски, свежий сыр кашар и сезонная зелень"),
    I("Sade Omlet", "Plain Omelette", "Омлет классический", 225, 290, ["egg", "milk"],
      "3 adet yumurta, mevsim yeşillikleri ile",
      "3 eggs with seasonal greens",
      "3 яйца с сезонной зеленью"),
    I("Sucuklu Yumurta", "Eggs with Sucuk", "Яичница с суджуком", 245, 540, ["egg", "milk"],
      "Tereyağında 3 göz yumurta ve sucuk dilimleri",
      "3 sunny-side-up eggs and sucuk slices cooked in butter",
      "3 яйца-глазуньи и ломтики суджука на сливочном масле"),
    I("Sahanda Göz Yumurta", "Fried Eggs", "Яичница-глазунья", 175, 300, ["egg", "milk"],
      "Tereyağında 3 göz yumurta",
      "3 sunny-side-up eggs cooked in butter",
      "3 яйца-глазуньи на сливочном масле"),
    I("Menemen", "Menemen", "Менемен", 245, 340, ["egg", "milk"],
      "Tereyağında 3 yumurta, yeşil biber ve kabuğu soyulmuş domates",
      "3 eggs scrambled in butter with green pepper and peeled tomatoes",
      "3 яйца на сливочном масле с зелёным перцем и очищенными томатами"),
    I("Karışık Tost", "Mixed Toastie", "Тост ассорти", 275, 690, ["gluten", "milk"],
      "Tek katlı Ayvalık tost ekmeği, sucuk dilimleri, taze kaşar peyniri, mini salata ve patates cips ile",
      "Ayvalık toast bread, sucuk slices and fresh kashar cheese, served with a side salad and fries",
      "Айвалыкский тост с суджуком и свежим сыром кашар, мини-салат и картофель фри"),
    I("Kaşarlı Tost", "Cheese Toastie", "Тост с сыром", 245, 610, ["gluten", "milk"],
      "Tek katlı Ayvalık tost ekmeği, taze kaşar peyniri, mini salata ve patates cips ile",
      "Ayvalık toast bread with fresh kashar cheese, served with a side salad and fries",
      "Айвалыкский тост со свежим сыром кашар, мини-салат и картофель фри"),
    I("Günün Çorbası", "Soup of the Day", "Суп дня", 225, null, [],
      "Günün çorbası ve alerjen bilgisi için garsonumuza danışabilirsiniz.",
      "Please ask your server about today's soup and its allergens.",
      "Уточните суп дня и аллергены у официанта.")
  ]},
  { id: "burger", g: "kitchen", icon: "hamburger", t: { tr: "Burgerler", en: "Burgers", ru: "Бургеры" }, items: [
    I("Cheeseburger", "Cheeseburger", "Чизбургер", 415, 980, ["gluten", "milk", "sesame", "mustard"],
      "Burger köftesi, cheddar peyniri, karamelize soğan, ince kesilmiş marul, domates, turşu ve patates cips ile",
      "Beef patty, cheddar, caramelised onion, shredded lettuce, tomato and pickles, served with fries",
      "Говяжья котлета, чеддер, карамелизированный лук, салат, томат и маринованные огурцы, картофель фри"),
    I("Hamburger", "Hamburger", "Гамбургер", 395, 860, ["gluten", "sesame", "mustard"],
      "Burger köftesi, ince kesilmiş marul, domates, turşu ve patates cips ile",
      "Beef patty, shredded lettuce, tomato and pickles, served with fries",
      "Говяжья котлета, салат, томат и маринованные огурцы, картофель фри")
  ]},
  { id: "pizza", g: "kitchen", icon: "pizza", t: { tr: "Pizzalar", en: "Pizzas", ru: "Пицца" }, items: [
    I("Margarita", "Margherita", "Маргарита", 395, 820, ["gluten", "milk"],
      "Kiraz domates, fesleğen, mozzarella, roka yaprakları eşliğinde",
      "Cherry tomatoes, basil and mozzarella, topped with rocket",
      "Томаты черри, базилик, моцарелла и руккола"),
    I("Füme Etli Pizza", "Smoked Beef Pizza", "Пицца с копчёной говядиной", 415, 950, ["gluten", "milk"],
      "Dana füme eti, yeşil biber, soğan, 2 çeşit kaşar, roka yaprakları eşliğinde",
      "Smoked beef, green pepper, onion and two kinds of kashar cheese, topped with rocket",
      "Копчёная говядина, зелёный перец, лук, два вида сыра кашар и руккола")
  ]},
  { id: "wrap", g: "kitchen", icon: "fork-knife", t: { tr: "Wrap & Köfte", en: "Wraps & Köfte", ru: "Роллы и кёфте" }, items: [
    I("Tavuk Wrap", "Chicken Wrap", "Ролл с курицей", 345, 720, ["gluten", "milk"],
      "Tavuk dilimleri, renkli biberler, soğan, mantar, cheddar sos ve patates cips ile",
      "Chicken strips, mixed peppers, onion, mushrooms and cheddar sauce, served with fries",
      "Курица, разноцветный перец, лук, грибы и соус чеддер, картофель фри"),
    I("Et Wrap", "Beef Wrap", "Ролл с говядиной", 375, 780, ["gluten", "milk"],
      "Dana et dilimleri, renkli biberler, soğan, mantar, cheddar sos ve patates cips ile",
      "Beef strips, mixed peppers, onion, mushrooms and cheddar sauce, served with fries",
      "Говядина, разноцветный перец, лук, грибы и соус чеддер, картофель фри"),
    I("Kasap Köfte", "Butcher's Köfte", "Кёфте по-мясницки", 395, 640, ["gluten"],
      "Kızarmış ekmek üstüne 4 adet dana köfte, soğan salatası ile",
      "4 beef meatballs on toasted bread, served with onion salad",
      "4 говяжьи котлетки кёфте на поджаренном хлебе с луковым салатом")
  ]},
  { id: "makarna", g: "kitchen", icon: "bowl-steam", t: { tr: "Makarnalar", en: "Pasta", ru: "Паста" }, items: [
    I("Fettuccine Alfredo", "Fettuccine Alfredo", "Феттучини Альфредо", 375, 890, ["gluten", "milk", "egg", "nuts"],
      "Sotelenmiş tavuk dilimleri, mantar, krema sos, fesleğen sos, kekik, parmesan peyniri ile",
      "Sautéed chicken, mushrooms, cream sauce, basil sauce, thyme and parmesan",
      "Обжаренная курица, грибы, сливочный соус, соус из базилика, тимьян и пармезан"),
    I("Spaghetti Bolognese", "Spaghetti Bolognese", "Спагетти болоньезе", 375, 760, ["gluten", "milk", "celery"],
      "Özel hazırlanmış bolognese sos, kıyma, parmesan peyniri ile",
      "House bolognese sauce, minced beef and parmesan",
      "Фирменный соус болоньезе, говяжий фарш и пармезан")
  ]},
  { id: "salata", g: "kitchen", icon: "leaf", t: { tr: "Salatalar", en: "Salads", ru: "Салаты" }, items: [
    I("Sezar Salata", "Caesar Salad", "Салат «Цезарь»", 395, 560, ["gluten", "milk", "egg", "mustard"],
      "Izgarada pişirilmiş tavuk dilimleri, göbek marul, kiraz domates, kruton ekmek, parmesan sos ile",
      "Grilled chicken, romaine lettuce, cherry tomatoes, croutons and parmesan dressing",
      "Курица на гриле, салат романо, томаты черри, крутоны и соус пармезан"),
    I("Mevsim Salatası", "Seasonal Salad", "Сезонный салат", 295, 260, ["milk"],
      "Roka, kabuğu soyulmuş domates, salatalık, kırmızı ve yeşil biber, beyaz peynir ile",
      "Rocket, peeled tomatoes, cucumber, red and green peppers and white cheese",
      "Руккола, очищенные томаты, огурец, красный и зелёный перец, белый сыр")
  ]},
  { id: "atistirmalik", g: "kitchen", icon: "cheese", t: { tr: "Atıştırmalıklar", en: "Snacks & Platters", ru: "Закуски" }, items: [
    I("Peynir Tabağı", "Cheese Platter", "Сырная тарелка", 455, 780, ["milk", "gluten"],
      "Ezine beyaz peynir, tulum peyniri, eski kaşar, taze kaşar, üzüm, zeytin, kayısı ve kraker",
      "Ezine white cheese, tulum cheese, aged and fresh kashar, grapes, olives, apricots and crackers",
      "Белый сыр эзине, сыр тулум, выдержанный и свежий кашар, виноград, оливки, курага и крекеры"),
    I("Soğuk Et Tabağı", "Cold Cuts Platter", "Мясная нарезка", 495, 620, [],
      "Dana füme, dana pastırma, hindi füme, dana salam",
      "Smoked beef, beef pastırma, smoked turkey and beef salami",
      "Копчёная говядина, бастурма, копчёная индейка и говяжья салями"),
    I("Kombo Tabağı", "Combo Platter", "Комбо-тарелка", 395, 1150, ["gluten", "milk", "egg"],
      "Çıtır tavuk, soğan halkası, sigara böreği, sosis, mozzarella stick, patates cips ile",
      "Crispy chicken, onion rings, sigara börek, sausages, mozzarella sticks and fries",
      "Хрустящая курица, луковые кольца, сигара-бёрек, сосиски, палочки моцарелла и картофель фри"),
    I("Patates Cips", "French Fries", "Картофель фри", 275, 480, [],
      "Günlük hazırlanan, elde soyulup doğranan taze patatesler",
      "Fresh potatoes, hand-peeled and cut every day",
      "Свежий картофель, очищенный и нарезанный вручную каждый день"),
    I("Meyve Tabağı", "Fruit Platter", "Фруктовая тарелка", 345, 280, [],
      "Elma, portakal, üzüm, mevsime göre karpuz ve kavun",
      "Apple, orange and grapes, with watermelon and melon in season",
      "Яблоко, апельсин, виноград, по сезону арбуз и дыня"),
    I("Karışık Çerez Tabağı", "Mixed Nuts Platter", "Ассорти орехов", 295, 650, ["nuts", "peanut"],
      "Karışık kavrulmuş kuruyemiş",
      "Assorted roasted nuts",
      "Ассорти жареных орехов")
  ]},

  /* ================= İÇECEKLER ================= */
  { id: "sicak-kahve", g: "drinks", icon: "coffee", t: { tr: "Sıcak Kahveler", en: "Hot Coffees", ru: "Горячий кофе" }, items: [
    I("Americano", "Americano", "Американо", 145, 10),
    I("Cafe Latte", "Caffè Latte", "Кафе латте", 185, 190, ["milk"]),
    I("White Chocolate Latte", "White Chocolate Latte", "Латте с белым шоколадом", 195, 330, ["milk"]),
    I("Cappuccino", "Cappuccino", "Капучино", 185, 130, ["milk"]),
    I("Flat White", "Flat White", "Флэт уайт", 185, 120, ["milk"]),
    I("Macchiato", "Macchiato", "Макиато", 185, 25, ["milk"]),
    I("Espresso", "Espresso", "Эспрессо", 95, 5),
    I("Duble Espresso", "Double Espresso", "Двойной эспрессо", 125, 10),
    I("Türk Kahvesi", "Turkish Coffee", "Турецкий кофе", 95, 10),
    I("Duble Türk Kahvesi", "Double Turkish Coffee", "Двойной турецкий кофе", 125, 20),
    I("Vanilya Latte", "Vanilla Latte", "Ванильный латте", 195, 250, ["milk"]),
    I("Karamel Latte", "Caramel Latte", "Карамельный латте", 195, 260, ["milk"]),
    I("Cortado", "Cortado", "Кортадо", 175, 60, ["milk"]),
    I("Ristretto", "Ristretto", "Ристретто", 95, 5),
    I("Mocha", "Mocha", "Мокко", 195, 290, ["milk"])
  ]},
  { id: "soguk-kahve", g: "drinks", icon: "coffee-bean", t: { tr: "Soğuk Kahveler", en: "Iced Coffees", ru: "Холодный кофе" }, items: [
    I("Ice Americano", "Iced Americano", "Айс американо", 155, 10),
    I("Ice Latte", "Iced Latte", "Айс латте", 185, 150, ["milk"]),
    I("Ice White Chocolate Mocha", "Iced White Chocolate Mocha", "Айс мокко с белым шоколадом", 215, 340, ["milk"]),
    I("Ice Cappuccino", "Iced Cappuccino", "Айс капучино", 185, 120, ["milk"]),
    I("Ice Vanilya Latte", "Iced Vanilla Latte", "Айс ванильный латте", 215, 220, ["milk"]),
    I("Ice Karamel Latte", "Iced Caramel Latte", "Айс карамельный латте", 215, 230, ["milk"]),
    I("Ice Mocha", "Iced Mocha", "Айс мокко", 215, 260, ["milk"]),
    I("Ice Bumble Coffee", "Iced Bumble Coffee", "Айс бамбл кофе", 255, 160, [],
      "Portakal suyu, karamel şurubu ve espresso",
      "Orange juice, caramel syrup and espresso",
      "Апельсиновый сок, карамельный сироп и эспрессо")
  ]},
  { id: "frappe", g: "drinks", icon: "drop", t: { tr: "Frappe", en: "Frappé", ru: "Фраппе" }, items: [
    I("Espresso Frappe", "Espresso Frappé", "Эспрессо фраппе", 225, 380, ["milk"]),
    I("Karamel Frappe", "Caramel Frappé", "Карамельный фраппе", 225, 420, ["milk"]),
    I("Vanilya Frappe", "Vanilla Frappé", "Ванильный фраппе", 225, 400, ["milk"]),
    I("Çikolata Frappe", "Chocolate Frappé", "Шоколадный фраппе", 225, 440, ["milk"])
  ]},
  { id: "sicak-icecek", g: "drinks", icon: "flame", t: { tr: "Sıcak İçecekler", en: "Hot Drinks", ru: "Горячие напитки" }, items: [
    I("Çay", "Turkish Tea", "Турецкий чай", 50, 2),
    I("Duble Çay", "Large Turkish Tea", "Большой турецкий чай", 70, 4),
    I("Yeşil Çay", "Green Tea", "Зелёный чай", 175, 2),
    I("Ada Çayı", "Sage Tea", "Чай с шалфеем", 175, 2),
    I("Ihlamur Çayı", "Linden Tea", "Липовый чай", 175, 2),
    I("Kış Çayı", "Winter Tea", "Зимний чай", 175, 60),
    I("Jasmine Çayı", "Jasmine Tea", "Жасминовый чай", 175, 2),
    I("Papatya Çayı", "Chamomile Tea", "Ромашковый чай", 175, 2),
    I("Hibiskus Çayı", "Hibiscus Tea", "Чай из гибискуса", 175, 5),
    I("Sıcak Süt", "Hot Milk", "Горячее молоко", 75, 150, ["milk"]),
    I("Sıcak Çikolata", "Hot Chocolate", "Горячий шоколад", 175, 340, ["milk"]),
    I("Sıcak Beyaz Çikolata", "Hot White Chocolate", "Горячий белый шоколад", 175, 380, ["milk"]),
    I("Sahlep", "Salep", "Салеп", 175, 280, ["milk"])
  ]},
  { id: "matcha", g: "drinks", icon: "plant", t: { tr: "Matcha", en: "Matcha", ru: "Матча" }, items: [
    I("Green Matcha Latte", "Green Matcha Latte", "Матча латте", 245, 190, ["milk"]),
    I("Strawberry Matcha Latte", "Strawberry Matcha Latte", "Клубничный матча латте", 245, 230, ["milk"]),
    I("Blue Matcha Latte", "Blue Matcha Latte", "Голубой матча латте", 245, 180, ["milk"])
  ]},
  { id: "milkshake", g: "drinks", icon: "ice-cream", t: { tr: "Milkshake", en: "Milkshakes", ru: "Милкшейки" }, items: [
    I("Çikolatalı Milkshake", "Chocolate Milkshake", "Шоколадный милкшейк", 245, 520, ["milk"]),
    I("Çilekli Milkshake", "Strawberry Milkshake", "Клубничный милкшейк", 245, 460, ["milk"]),
    I("Vanilyalı Milkshake", "Vanilla Milkshake", "Ванильный милкшейк", 245, 470, ["milk"]),
    I("Muzlu Milkshake", "Banana Milkshake", "Банановый милкшейк", 245, 480, ["milk"]),
    I("Karamelli Milkshake", "Caramel Milkshake", "Карамельный милкшейк", 245, 510, ["milk"]),
    I("Mangolu Milkshake", "Mango Milkshake", "Манговый милкшейк", 245, 450, ["milk"])
  ]},
  { id: "saglikli", g: "drinks", icon: "orange-slice", t: { tr: "Sağlıklı İçecekler", en: "Fresh Juices", ru: "Свежие соки" }, items: [
    I("Portakal Suyu", "Orange Juice", "Апельсиновый сок", 195, 110),
    I("Elma Suyu", "Apple Juice", "Яблочный сок", 245, 120),
    I("Havuç Suyu", "Carrot Juice", "Морковный сок", 195, 90),
    I("Atom", "Atom", "Атом", 355, 420, ["milk", "nuts"],
      "Muz, süt, bal ve kuruyemişle hazırlanan enerji içeceği",
      "Energy shake with banana, milk, honey and nuts",
      "Энергетический коктейль из банана, молока, мёда и орехов")
  ]},
  { id: "limonata", g: "drinks", icon: "sun", t: { tr: "Limonatalar", en: "Lemonades", ru: "Лимонады" }, items: [
    I("Klasik Limonata", "Classic Lemonade", "Классический лимонад", 195, 160),
    I("Çilekli Limonata", "Strawberry Lemonade", "Клубничный лимонад", 195, 180),
    I("Naneli Limonata", "Mint Lemonade", "Мятный лимонад", 195, 160)
  ]},
  { id: "mojito", g: "drinks", icon: "martini", t: { tr: "Mojito", en: "Mojito", ru: "Мохито" }, items: [
    I("Klasik Mojito", "Classic Mojito", "Классический мохито", 245, 150),
    I("Çilekli Mojito", "Strawberry Mojito", "Клубничный мохито", 245, 170)
  ]},
  { id: "frozen", g: "drinks", icon: "snowflake", t: { tr: "Frozen", en: "Frozen", ru: "Фрозен" }, items: [
    I("Mango Frozen", "Mango Frozen", "Фрозен манго", 245, 240),
    I("Çilek Frozen", "Strawberry Frozen", "Фрозен клубника", 245, 220),
    I("Arizona Dream Frozen", "Arizona Dream Frozen", "Фрозен Arizona Dream", 245, 250),
    I("Egzotik Frozen", "Exotic Frozen", "Фрозен экзотик", 245, 240),
    I("Şeftali Frozen", "Peach Frozen", "Фрозен персик", 245, 230)
  ]},
  { id: "mesrubat", g: "drinks", icon: "pint-glass", t: { tr: "Meşrubatlar", en: "Soft Drinks", ru: "Безалкогольные напитки" }, items: [
    I("Su", "Still Water", "Вода", 45, 0),
    I("Soda", "Sparkling Water", "Газированная вода", 75, 0),
    I("Coca-Cola", "Coca-Cola", "Coca-Cola", 145, 140),
    I("Coca-Cola Zero", "Coca-Cola Zero", "Coca-Cola Zero", 145, 1),
    I("Fanta", "Fanta", "Fanta", 145, 150),
    I("Sprite", "Sprite", "Sprite", 145, 140),
    I("Fuse Tea Şeftali", "Fuse Tea Peach", "Fuse Tea персик", 145, 90),
    I("Fuse Tea Mango Ananas", "Fuse Tea Mango Pineapple", "Fuse Tea манго-ананас", 145, 90),
    I("Fuse Tea Limon", "Fuse Tea Lemon", "Fuse Tea лимон", 145, 90),
    I("Red Bull", "Red Bull", "Red Bull", 195, 115),
    I("Red Bull Zero", "Red Bull Zero", "Red Bull Zero", 195, 5),
    I("Churchill", "Churchill", "Черчилль", 145, 15, [],
      "Soda, taze limon ve tuz",
      "Sparkling water, fresh lemon and a pinch of salt",
      "Газированная вода, свежий лимон и щепотка соли"),
    I("Ayran", "Ayran", "Айран", 95, 90, ["milk"],
      "Geleneksel yoğurt içeceği",
      "Traditional salted yoghurt drink",
      "Традиционный солёный йогуртовый напиток"),
    I("Şalgam", "Şalgam", "Шалгам", 95, 25, [],
      "Geleneksel fermente şalgam suyu",
      "Traditional fermented purple-carrot drink",
      "Традиционный ферментированный напиток из чёрной моркови")
  ]}
];
