# Godz Cafe QR Menü

Türkçe / English / Русский QR menü. Açılışta video, kategoriler, kalori ve alerjen bilgisi.

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Menü sayfası (tasarım ve çalışma mantığı) |
| `menu-data.js` | Ürünler, fiyatlar, kaloriler, alerjenler, iletişim bilgileri |
| `assets/hero.mp4` | Açılış videosu |
| `assets/logo.png` | Logo |

## Fiyat / ürün değiştirmek

`menu-data.js` dosyasını açın. Her ürün şu sırayla yazılır:

```js
I("Türkçe ad", "English name", "Русское название", FİYAT, KALORİ, ["alerjenler"], "TR açıklama", "EN açıklama", "RU açıklama")
```

Alerjen kodları: `gluten`, `milk`, `egg`, `nuts`, `peanut`, `soy`, `sesame`, `mustard`, `celery`, `sulphite`

Dosyanın en üstündeki `CONFIG` kısmında Maps linki, Instagram, WhatsApp numarası ve Wi-Fi bilgileri var.

## GitHub Pages ile yayınlama

1. GitHub'da yeni bir repo açın (örnek: `godz-cafe-menu`), **Public** seçin.
2. Bu klasörü yükleyin:
   ```bash
   git remote add origin https://github.com/KULLANICI_ADI/godz-cafe-menu.git
   git push -u origin main
   ```
3. Repo'da **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)`** seçip kaydedin.
4. 1-2 dakika sonra menü şu adreste açılır: `https://KULLANICI_ADI.github.io/godz-cafe-menu/`
5. QR kodu bu adres için oluşturun.

Değişiklikten sonra güncellemek için:

```bash
git add .
git commit -m "Menü güncellendi"
git push
```

Birkaç dakika içinde QR menü kendiliğinden güncellenir, QR kodu değiştirmeye gerek yoktur.

## Bilgisayarda önizleme

```bash
python -m http.server 5178
```

Sonra tarayıcıda `http://localhost:5178` açın.
