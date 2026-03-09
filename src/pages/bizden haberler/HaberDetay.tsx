import React from "react";
import { useParams, Link } from "react-router-dom";
import "./HaberDetay.css";
import newsImage from "../../assets/bizden haberler.jpg";
import haber4 from "../../assets/haber4.jpg";
import ziyaretImage from "../../assets/2.jpeg";
import yazarImage from "../../assets/1.jpeg";
import sağlık2 from "../../assets/sağlık2.jpeg";
import martEtkinlik from "../../assets/8mart.jpg";
import mart1 from "../../assets/mart1.jpeg";
import mart2 from "../../assets/mart2.jpeg";
import mart3 from "../../assets/mart3.jpeg";
const HaberDetay: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  /* ------------------ 8 MART DÜNYA KADINLAR GÜNÜ ETKİNLİĞİ (ID: 8) ------------------ */
  if (id === "8") {
    return (
      <div className="news-detail-page">
        <Link to="/bizden-haberler" className="back-link">
          ← Tüm Haberlere Dön
        </Link>

        <article className="news-detail-article">
          <div className="news-detail-header">
            <span className="news-detail-category">Etkinlik • 8 Mart</span>
            <h1>8 Mart Dünya Kadınlar Günü Etkinliği</h1>
          </div>

          <div className="news-detail-content">
            <p>
              <strong>8 Mart Dünya Kadınlar Günü</strong> kapsamında düzenlediğimiz etkinlik
              büyük bir katılım ve coşkuyla gerçekleşti. Etkinlikte kadınların toplumsal
              rolü, hakları ve geleceğine dair önemli konular ele alındı.
            </p>
            <p>
              Panelimizde değerli konuşmacılarımız "Kadının Dünü, Bugünü, Yarını" teması
              üzerine görüşlerini paylaştı. Katılımcılarımızla birlikte anlamlı ve
              unutulmaz bir gün geçirdik.
            </p>
          </div>

          {/* Etkinlik Fotoğrafları */}
          <div className="news-detail-images-grid news-detail-images-grid--three">
            <div className="news-detail-image-item">
              <img src={mart1} alt="8 Mart Etkinliği Fotoğraf 1" />
            </div>
            <div className="news-detail-image-item">
              <img src={mart2} alt="8 Mart Etkinliği Fotoğraf 2" />
            </div>
            <div className="news-detail-image-item">
              <img src={mart3} alt="8 Mart Etkinliği Fotoğraf 3" />
            </div>
          </div>

          {/* YouTube Canlı Yayın Kayıtları */}
          <div className="news-detail-videos">
            <h3 className="news-detail-videos-title">🎥 Canlı Yayın Kayıtları</h3>
            <div className="news-detail-videos-grid">
              <a
                href="https://www.youtube.com/live/MCE31UbO4vw"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-card"
              >
                <div className="youtube-card-thumbnail">
                  <img
                    src="https://img.youtube.com/vi/MCE31UbO4vw/hqdefault.jpg"
                    alt="Canlı Yayın 1"
                  />
                  <div className="youtube-play-btn">
                    <svg viewBox="0 0 68 48" width="68" height="48">
                      <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red" />
                      <path d="M45 24 27 14v20" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="youtube-card-info">
                  <span className="youtube-card-title">Canlı Yayın Kaydı – Bölüm 1</span>
                  <span className="youtube-card-subtitle">YouTube'da İzle →</span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/live/h_QK9qAstcY"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-card"
              >
                <div className="youtube-card-thumbnail">
                  <img
                    src="https://img.youtube.com/vi/h_QK9qAstcY/hqdefault.jpg"
                    alt="Canlı Yayın 2"
                  />
                  <div className="youtube-play-btn">
                    <svg viewBox="0 0 68 48" width="68" height="48">
                      <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red" />
                      <path d="M45 24 27 14v20" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="youtube-card-info">
                  <span className="youtube-card-title">Canlı Yayın Kaydı – Bölüm 2</span>
                  <span className="youtube-card-subtitle">YouTube'da İzle →</span>
                </div>
              </a>
            </div>
          </div>

          <div className="news-details">
            <div className="detail-row">
              <span>Etkinlik</span>
              <strong>8 Mart Dünya Kadınlar Günü</strong>
            </div>
            <div className="detail-row">
              <span>Tarih</span>
              <strong>8 Mart 2026</strong>
            </div>

          </div>
        </article>
      </div>
    );
  }

  /* ------------------ 8 MART KADINI ANLAMA VE ANMA GÜNÜ ETKİNLİĞİ (ID: 7) ------------------ */
  if (id === "7") {
    return (
      <div className="news-detail-page">
        <Link to="/bizden-haberler" className="back-link">
          ← Tüm Haberlere Dön
        </Link>

        <article className="news-detail-article">
          <div className="news-detail-header">
            <span className="news-detail-category">Etkinlik • Panel</span>
            <h1>8 Mart 2026 Kadını Anlama ve Anma Günü Etkinliği</h1>
          </div>

          <div className="news-detail-content">
            <p>
              <strong>SS İsterim Değer Üretim Paylaşım ve Eğitim Sosyal İşletme Kooperatifi</strong> ve{" "}
              <strong>Mimoza Kadınları Derneği</strong>'nin katkılarıyla 8 Mart 2026 tarihinde
              "Kadını Anlama ve Anma Günü" etkinliği düzenleniyor.
            </p>

            <p>
              Bu anlamlı günde sizleri aramızda görmek bizleri mutlu kılacaktır.
            </p>

            <h3>'Kadının Dünü, Bugünü, Yarını' Paneli</h3>

            <p><strong>Moderatör:</strong> Merih Uzun</p>

            <h3>Panelistler</h3>
            <ul>
              <li><strong>Prof. Dr. Elif Akar</strong> – Akademisyen</li>
              <li><strong>Ercan Akpınar</strong> – Gazeteci</li>
              <li><strong>Aşkım Tan</strong> – Gazeteci-Araştırmacı Yazar, Sosyal Aktivist</li>
              <li><strong>Feyza Aydın Kılıç</strong> – Oyuncu, Sunucu</li>
            </ul>

            <h3>Program</h3>
            <ul>
              <li><strong>15:00 – 15:30</strong> Karşılama Müziği</li>
              <li><strong>15:30 – 15:35</strong> Açılış Konuşmaları ve Hoşgeldiniz</li>
              <li><strong>15:35 – 17:00</strong> Panel</li>
              <li><strong>17:00 – 17:15</strong> Soru Cevap</li>
              <li><strong>17:15 – 17:40</strong> Sürpriz Davetli Konuşmacı</li>
              <li><strong>17:40 – 17:45</strong> Teşekkür ve Toplu Anı Fotoğraf Çekimi</li>
              <li><strong>17:45 – 18:00</strong> Yazarından Kısa Kitap Tanıtımı ve Kitap İmza</li>
            </ul>
            <p>Uğurlama ve sonrası serbest sohbet ve tanışma.</p>

            <p>
              <strong>Etkinlik ücretsizdir.</strong> Herkes sadece yediğinin içtiğinin ücretini ödemekle sorumludur. Arzu edenler cafe restorantın ürünlerinden yararlanabilir.
            </p>

            <h3>Medya Sponsoru</h3>
            <p>FBD Medya Grubu ve VTV Türk</p>

            <h3>Yayın</h3>
            <p>Kanal Vizyon TV YouTube kanalından canlı yayın verilecektir.</p>
          </div>

          <div className="news-detail-image">
            <img src={martEtkinlik} alt="8 Mart 2026 Kadını Anlama ve Anma Günü Etkinliği afişi" />
          </div>

          <div className="news-details">
            <div className="detail-row">
              <span>Etkinlik</span>
              <strong>Kadını Anlama ve Anma Günü Paneli</strong>
            </div>
            <div className="detail-row">
              <span>Tarih</span>
              <strong>8 Mart 2026</strong>
            </div>
            <div className="detail-row">
              <span>Saat</span>
              <strong>15:00 – 18:00</strong>
            </div>
            <div className="detail-row">
              <span>Yer</span>
              <strong>Jevernal Coffee, Atatürk Bulvarı, Şanlı İşhanı 105, Kat 10, Kızılay / Ankara</strong>
            </div>
            <div className="detail-row">
              <span>Moderatör</span>
              <strong>Merih Uzun</strong>
            </div>
          </div>
        </article>
      </div>
    );
  }

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
  /* ------------------ SAĞLIK MÜDÜRLÜĞÜ ZİYARETİ (ID: 6) ------------------ */
  if (id === "6") {
    return (
      <div className="news-detail-page">
        <Link to="/bizden-haberler" className="back-link">
          ← Tüm Haberlere Dön
        </Link>

        <article className="news-detail-article">
          <div className="news-detail-header">
            <span className="news-detail-category">Kurumsal Ziyaret</span>
            <h1>
              T.C Sağlık Bakanlığı Ankara İl Sağlık Müdürlüğü'ne Ziyaret
            </h1>
          </div>

          <div className="news-detail-content">
            <p>
              T.C Sağlık Bakanlığı Ankara İl Sağlık Müdürlüğü'nü ziyaret ederek
              yürüttüğümüz projeler ve olası iş birlikleri üzerine verimli
              bir görüşme gerçekleştirdik.
            </p>

            <p>
              Ziyaret kapsamında toplum sağlığı, sosyal projeler ve
              kurumlar arası iş birliği olanakları ele alındı.
            </p>
          </div>

          <div className="news-detail-image">
            <img src={sağlık2} alt="Ankara İl Sağlık Müdürlüğü ziyareti" />
          </div>

          <div className="news-details">
            <div className="detail-row">
              <span>Etkinlik</span>
              <strong>Kurumsal Ziyaret</strong>
            </div>
            <div className="detail-row">
              <span>Yer</span>
              <strong>Ankara İl Sağlık Müdürlüğü</strong>
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
