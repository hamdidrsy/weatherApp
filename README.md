# WeatherApp

Bu proje, yalnızca anlık hava durumunu gösteren basit bir web uygulamasıdır.

**Projenin amacı**
- API kullanarak bir uygulama içindeki fonksiyon yapısını ve dosyalar arasındaki bağlantı kavramlarını öğrenmek ve pratik yapmak.
- Öğrenenlerin API ile veri çekme, veriyi işleyip UI'ye yansıtma akışını anlamasına yardımcı olmak.

**Kapsam**
- Uygulama sadece anlık (current) hava durumu bilgisini gösterir.
- Temel olarak API çağrıları, yardımcı (helper) fonksiyonlar ve DOM güncellemeleri ile çalışır.

**Geliştirme notları / öneriler**
- Proje şu an öğrenme amaçlı ve basit tutulmuştur; özellikler eklenerek kolayca genişletilebilir.
- Önerilen geliştirmeler:
  - Geçmiş ve tahmin verilerini (forecast) eklemek.
  - API anahtar yönetimi ve .env kullanımı.
  - Daha iyi hata yönetimi ve kullanıcı geri bildirimi (loading, hata mesajları).
  - Responsive ve daha zengin bir UI tasarımı.

**İncelemeniz için**
Lütfen proje dosyalarını incelerken şu noktalara özellikle dikkat edin:
- `scripts/api` altında API çağrısı yapan dosyalar.
- `scripts/helpers` klasöründeki yardımcı fonksiyonların sorumluluk ayrımı.
- `scripts/ui` veya `scripts` altındaki DOM manipülasyonlarının temiz ve test edilebilir olması.

Proje, öğrenme amaçlı olarak hazırlanmıştır; kod yapısı daha okunabilir ve modüler hâle getirilebilir. İsterseniz ben bu iyileştirmelerden bazılarını uygulayayım ya da yönlendirme yapayım.

---
*Not: Repo güncellenmiştir.*
