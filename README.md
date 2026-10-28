# Godz Cafe QR Menü

Türkçe / English / Русский QR menü. Açılışta video, kategoriler, kalori ve alerjen bilgisi.

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Müşterinin gördüğü menü |
| `admin.html` | Yönetim paneli (ürün, fiyat, fotoğraf, kategori, iletişim bilgileri) |
| `menu.json` | Bütün menü verisi. Yönetim paneli bu dosyayı düzenler |
| `assets/hero.mp4` | Açılış videosu |
| `assets/logo.png` | Logo |
| `assets/products/` | Ürün fotoğrafları (panelden yüklenir) |

## Yönetim paneli

Adres: `https://KULLANICI_ADI.github.io/godz-cafe-menu/admin.html`

Panelden yapılabilenler:
- Ürün ekleme, silme, sıralama, başka kategoriye taşıma
- Ad ve açıklamayı TR / EN / RU düzenleme
- Fiyatı listeden doğrudan değiştirme
- Fotoğraf yükleme (otomatik küçültülür)
- Kalori ve alerjen bilgisi
- Ürünü veya kategoriyi geçici olarak gizleme (ör. tükendi)
- Kategori ekleme, ikon seçme, sıralama
- Maps, Instagram, WhatsApp ve Wi-Fi bilgileri (Ayarlar sekmesi)

Değişiklikler **Yayınla** butonuna basınca GitHub'a kaydedilir, menü 1-2 dakika içinde güncellenir.

### İlk giriş: token oluşturma

Panel, GitHub'a yazabilmek için bir erişim anahtarı (token) ister:

1. https://github.com/settings/personal-access-tokens/new adresini açın.
2. **Repository access**: Only select repositories, `godz-cafe-menu` reposunu seçin.
3. **Permissions → Repository permissions → Contents**: Read and write.
4. Oluşturulan anahtarı panele yapıştırın. "Bu cihazda hatırla" seçiliyse bir daha sorulmaz.

Token'ı kimseyle paylaşmayın. Panel adresi herkese açık olsa da token olmadan kimse değişiklik yapamaz.
Token sadece bu repoya erişebilir, süresi dolunca aynı adımlarla yenisini oluşturun.

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
