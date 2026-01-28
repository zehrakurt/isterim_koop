import React from "react";
import { useParams, Link } from "react-router-dom";
import "./HaberDetay.css";
import newsImage from "../../assets/bizden haberler.jpg";
import haber4 from "../../assets/haber4.jpg";
import ziyaretImage from "../../assets/2.jpeg";
import yazarImage from "../../assets/1.jpeg";

const HaberDetay: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  /* ------------------ YAZAR MURAT HAYDAROĞLU ZİYARETİ (ID: 5) ------------------ */
  if (id === "5") {
    return (
      <div className="news-detail-page">
        <Link to="/bizden-haberler" className="back-link">
          ← Tüm Haberlere Dön
        </Link>

        <article className="news-detail-article">
          <div className="news-detail-header">
            <span className="news-detail-category">Kültür • Edebiyat</span>
            <h1>Yazar-Şair Murat Haydaroğlu Ofisimizde</h1>
          </div>

          <div className="news-detail-content">
            <p>
              Yazar-şair <strong>Murat Haydaroğlu</strong> ofisimizi ziyaret ederek yeni kitabını
              ekibimize hediye etti. Ziyaret sırasında edebiyat çalışmaları, kültür-sanat projeleri
              ve kooperatifimizin yürüttüğü faaliyetler üzerine keyifli bir sohbet gerçekleştirdik.
            </p>
            <p>
              Kendilerine nazik ziyaretleri ve kitap hediyeleri için teşekkür ediyor, birlikte
              yürütebileceğimiz kültür-sanat odaklı projeler için heyecan duyuyoruz.
            </p>
          </div>

          <div className="news-detail-image">
            <img src={yazarImage} alt="Yazar Şair Murat Haydaroğlu ziyareti" />
          </div>

          <div className="news-details">
            <div className="detail-row">
              <span>Etkinlik</span>
              <strong>Ofis Ziyareti</strong>
            </div>
            <div className="detail-row">
              <span>Tarih</span>
              <strong>28 Ocak 2026</strong>
            </div>
            <div className="detail-row">
              <span>Yer</span>
              <strong>İSTERİM Kooperatif Ofisi</strong>
            </div>
            <div className="detail-row">
              <span>Konuk</span>
              <strong>Yazar-Şair Murat Haydaroğlu</strong>
            </div>
          </div>
        </article>
      </div>
    );
  }

  /* ------------------ VALİ YARDIMCISI ZİYARETİ (ID: 4) ------------------ */
  if (id === "4") {
    return (
      <div className="news-detail-page">
        <Link to="/bizden-haberler" className="back-link">
          ← Tüm Haberlere Dön
        </Link>

        <article className="news-detail-article">
          <div className="news-detail-header">
            <span className="news-detail-category">Protokol Ziyareti</span>
            <h1>Vali Yardımcısı Dr. Ayhan Özkan'dan Ziyaret</h1>
          </div>

          <div className="news-detail-content">
            <p>
              Vali Yardımcısı <strong>Dr. Ayhan Özkan</strong> bugün kooperatifimizi
              ziyaret ederek yürüttüğümüz projeler ve iş birlikleri hakkında bilgi aldı.
              Ziyarette toplumsal fayda, kadın kooperatiflerine destek ve yerel kalkınma
              başlıklarında görüş alışverişi yapıldı.
            </p>
            <p>
              Misafirimizle birlikte gelecekte gerçekleştirebileceğimiz ortak çalışmalar
              üzerine değerlendirmelerde bulunduk ve planlanan etkinliklerimizi paylaştık.
            </p>
          </div>

          <div className="news-detail-image">
            <img src={ziyaretImage} alt="Vali Yardımcısı Dr. Ayhan Özkan ziyareti" />
          </div>

          <div className="news-details">
            <div className="detail-row">
              <span>Etkinlik</span>
              <strong>Protokol Ziyareti</strong>
            </div>
            <div className="detail-row">
              <span>Tarih</span>
              <strong>28 Ocak 2026</strong>
            </div>
            <div className="detail-row">
              <span>Yer</span>
              <strong>İSTERİM Kooperatif</strong>
            </div>
            <div className="detail-row">
              <span>Katılımcı</span>
              <strong>Vali Yardımcısı Dr. Ayhan Özkan</strong>
            </div>
          </div>
        </article>
      </div>
    );
  }

  /* ------------------------- ÇALIŞTAY HABERİ (ID: 3) ------------------------ */
  if (id === "3") {
    return (
      <div className="news-detail-page">
        <Link to="/bizden-haberler" className="back-link">
          ← Tüm Haberlere Dön
        </Link>

        <article className="news-detail-article">
          <div className="news-detail-header">
            <span className="news-detail-category">Kooperatifçilik • Çalıştay</span>
            <h1>Kooperatifçiliğin Kalkınmada Rolü ve Yeni Nesil Kooperatifçilik Çalıştayı</h1>
          </div>

          <div className="news-detail-content">
            <p>
              Değer Üretim Paylaşım ve Eğitim Sosyal İşletme Kooperatifi kurumsal 
              organizasyonu altında ve Kooperatifçilik Yılı kapsamında düzenlenmesi 
              planlanan <strong>"Kooperatifçiliğin Kalkınmada Rolü ve Yeni Nesil Kooperatifçilik"</strong> 
              temalı çalıştayın, <strong>20-21 Aralık 2025</strong> tarihlerinde Ankara’da 
              gerçekleştirilmesi öngörülmektedir.
            </p>

            <p>
              Hazırlık ve koordinasyon sürecine bağlı olarak çalıştayın 
              <strong> 2026 yılına sarkması</strong> da ihtimal dahilindedir.
            </p>

            <p>
              Çalıştayın hedef kitlesi; kooperatifler, yerel yönetimler, sivil toplum 
              bileşenleri, kamu kuruluşları, bakanlık temsilcileri, akademik çevreler 
              ve gençlerden oluşmaktadır.
            </p>

            <h3>Amaçlar</h3>
            <ul>
              <li>Kooperatifçilik bilincinin sivil toplum bileşenleri arasında gelişimine katkı sağlamak</li>
              <li>Kooperatifçiliğin ülkemizde gelişimine destek için yeni çözüm önerileri oluşturmak</li>
              <li>Katılımcılar arasında yeni işbirliği ağları geliştirmek, dayanışmayı güçlendirmek</li>
              <li>Bilimsel bir yaklaşım ile sorunların çözümünde işbirliği alanlarını belirlemek</li>
            </ul>

            <h3>Beklenen Çıktılar</h3>
            <p>
              Kooperatifçiliğin güncel sorunları ve çözüm yolları konusunda kamuoyunda 
              farkındalık yaratılması hedeflenmektedir.
            </p>

            <h3>Muhtemel Paydaşlar</h3>
            <ul>
              <li>Kadın kooperatifleri</li>
              <li>Sosyal kooperatifler</li>
              <li>Yerel yönetimler</li>
              <li>Üniversiteler</li>
              <li>Ankara Kalkınma Ajansı</li>
              <li>İlgili bakanlıklar</li>
              <li>Türk Kooperatifçilik Kurumu</li>
            </ul>

            <h3>Ele Alınması Muhtemel Konu Başlıkları</h3>
            <ul>
              <li>Kooperatifçiliğin kalkınmadaki rolü</li>
              <li>Yeni nesil kooperatifçilik modelleri</li>
              <li>Kooperatiflerde yönetişim ve şeffaflık</li>
              <li>E-ticaret, dijital dönüşüm ve kooperatifler</li>
              <li>Sosyal kooperatifçilik uygulamaları</li>
              <li>Girişimcilikte kooperatiflerin yeri</li>
            </ul>
          </div>

          <div className="news-details">
            <div className="detail-row">
              <span>Etkinlik</span>
              <strong>Kooperatifçilik Çalıştayı</strong>
            </div>
            <div className="detail-row">
              <span>Tarih</span>
              <strong>20-21 Aralık 2025 (Gerekirse 2026’ya sarkabilir)</strong>
            </div>
            <div className="detail-row">
              <span>Yer</span>
              <strong>Ankara</strong>
            </div>
            <div className="contact-info">
              <h3>İrtibat</h3>
              <p><strong>Organizasyon Komitesi</strong></p>
            </div>
          </div>
        </article>
      </div>
    );
  }

  /* ------------------------------ HABER ID: 1 ------------------------------ */
  if (id === "1") {
    return (
      <div className="news-detail-page">
        <Link to="/bizden-haberler" className="back-link">
          ← Tüm Haberlere Dön
        </Link>

        <article className="news-detail-article">
          <div className="news-detail-header">
            <span className="news-detail-category">
              Kültür • Sanat • Turizm • Sinema Akademisi
            </span>
            <h1>İlk Adım Müzik ile TravelExpo Ankara'da sahnedeyiz</h1>
          </div>

          <div className="news-detail-content">
            <p>
              20-22 Kasım 2025 tarihleri arasında gerçekleşecek 8. Uluslararası
              Turizm ve Seyahat Fuarı TravelExpo'da, İlk Adım Müzik Grubu ile
              sahnede olacağız.
            </p>
          </div>

          <div className="news-detail-image">
            <img src={newsImage} alt="İlk Adım Müzik TravelExpo programı" />
          </div>

          <div className="news-details">
            <div className="detail-row">
              <span>Etkinlik</span>
              <strong>TravelExpo Ankara 2025</strong>
            </div>
            <div className="detail-row">
              <span>Tarih</span>
              <strong>20 Kasım 2025</strong>
            </div>
            <div className="detail-row">
              <span>Yer</span>
              <strong>ATO Congresium</strong>
            </div>
          </div>
        </article>
      </div>
    );
  }

  /* ------------------------------ HABER ID: 2 ------------------------------ */
  if (id === "2") {
    return (
      <div className="news-detail-page">
        <Link to="/bizden-haberler" className="back-link">
          ← Tüm Haberlere Dön
        </Link>

        <article className="news-detail-article">
          <div className="news-detail-header">
            <span className="news-detail-category">Fuar</span>
            <h1>TRAVELEXPO ANKARA 2025 – Standımız Hazır</h1>
          </div>

          <div className="news-detail-content">
            <p>
              20-22 Kasım 2025 tarihlerinde düzenlenecek olan TRAVELEXPO ANKARA 
              2025 fuarında standımızla yer alacağız.
            </p>
          </div>

          <div className="news-detail-images-grid">
            <div className="news-detail-image-item">
              <img src={haber4} alt="TRAVELEXPO ANKARA 2025 Standımız 4" />
            </div>
          </div>

          <div className="news-details">
            <div className="detail-row">
              <span>Etkinlik</span>
              <strong>TRAVELEXPO ANKARA 2025</strong>
            </div>
            <div className="detail-row">
              <span>Tarih</span>
              <strong>20-22 Kasım 2025</strong>
            </div>
            <div className="detail-row">
              <span>Yer</span>
              <strong>ATO Congresium</strong>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="news-detail-page">
      <div className="news-not-found">
        <h1>Haber bulunamadı</h1>
        <Link to="/bizden-haberler" className="back-link">
          ← Haberlere Dön
        </Link>
      </div>
    </div>
  );
};

export default HaberDetay;
