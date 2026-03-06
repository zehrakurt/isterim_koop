import React from "react";
import { Link } from "react-router-dom";
import "./BizdenHaberler.css";
import newsImage from "../../assets/bizden haberler.jpg";
import newsImagetwo from "../../assets/12.jpeg";
import haber4 from "../../assets/haber4.jpg";
import ziyaretImage from "../../assets/2.jpeg";
import yazarImage from "../../assets/1.jpeg";
import sağlık from "../../assets/sağlık.jpeg";
import martEtkinlik from "../../assets/8mart.jpg";
const BizdenHaberler: React.FC = () => {
  return (
    <div className="news-page">
      <div className="news-page-header">
        <h1>Bizden Haberler</h1>
      </div>

      <div className="news-grid">
        {/* ------------------ 8 MART KADINI ANLAMA VE ANMA GÜNÜ ETKİNLİĞİ (ID: 7) ------------------ */}
        <Link to="/bizden-haberler/7" className="news-card-link">
          <article className="news-card">
            <div className="news-card-image">
              <img src={martEtkinlik} alt="8 Mart 2026 Kadını Anlama ve Anma Günü Etkinliği" />
              <div className="news-card-category">Etkinlik • Panel</div>
            </div>
            <div className="news-card-content">
              <time className="news-card-date">8 Mart 2026</time>
              <h2 className="news-card-title">
                8 Mart 2026 Kadını Anlama ve Anma Günü Etkinliği
              </h2>
              <p className="news-card-excerpt">
                SS İsterim Değer Üretim Paylaşım ve Eğitim Sosyal İşletme Kooperatifi ve Mimoza
                Kadınları Derneği'nin katkılarıyla "Kadının Dünü, Bugünü, Yarını" paneli düzenleniyor.
              </p>
              <span className="news-card-read-more">Detayları Gör →</span>
            </div>
          </article>
        </Link>

        {/* ------------------ SAĞLIK MÜDÜRLÜĞÜ ZİYARETİ (ID: 6) ------------------ */}
<Link to="/bizden-haberler/6" className="news-card-link">
  <article className="news-card">
    <div className="news-card-image">
      <img src={sağlık} alt="Ankara İl Sağlık Müdürlüğü ziyareti" />
      <div className="news-card-category">Kurumsal Ziyaret</div>
    </div>
    <div className="news-card-content">
      <time className="news-card-date">Tarih Yaz</time>
      <h2 className="news-card-title">
        T.C Sağlık Bakanlığı Ankara İl Sağlık Müdürlüğü Ziyareti
      </h2>
      <p className="news-card-excerpt">
        Ankara İl Sağlık Müdürlüğü ile gerçekleştirdiğimiz ziyarette
        iş birliği ve projeler üzerine görüş alışverişi yapıldı.
      </p>
      <span className="news-card-read-more">Detayları Gör →</span>
    </div>
  </article>
</Link>


        {/* ------------------ YAZAR MURAT HAYDAROĞLU ZİYARETİ (ID: 5) ------------------ */}
        <Link to="/bizden-haberler/5" className="news-card-link">
          <article className="news-card">
            <div className="news-card-image">
              <img src={yazarImage} alt="Yazar Şair Murat Haydaroğlu ziyareti" />
              <div className="news-card-category">Kültür • Edebiyat</div>
            </div>
            <div className="news-card-content">
              <time className="news-card-date">28 Ocak 2026</time>
              <h2 className="news-card-title">
                Yazar-Şair Murat Haydaroğlu Ofisimizde
              </h2>
              <p className="news-card-excerpt">
                Yazar-şair Murat Haydaroğlu ofisimizi ziyaret ederek yeni kitabını ekibimize hediye etti.
              </p>
              <span className="news-card-read-more">Detayları Gör →</span>
            </div>
          </article>
        </Link>

        {/* ------------------ VALİ YARDIMCISI ZİYARETİ (ID: 4) ------------------ */}
        <Link to="/bizden-haberler/4" className="news-card-link">
          <article className="news-card">
            <div className="news-card-image">
              <img
                className="news-card-image--top"
                src={ziyaretImage}
                alt="Vali Yardımcısı Dr. Ayhan Özkan ziyareti"
              />
              <div className="news-card-category">Protokol Ziyareti</div>
            </div>
            <div className="news-card-content">
              <time className="news-card-date">28 Ocak 2026</time>
              <h2 className="news-card-title">
                Vali Yardımcısı Dr. Ayhan Özkan'dan Ziyaret
              </h2>
              <p className="news-card-excerpt">
                Vali Yardımcısı Dr. Ayhan Özkan bugün kooperatifimizi ziyaret ederek
                çalışmalarımız hakkında bilgi aldı.
              </p>
              <span className="news-card-read-more">Detayları Gör →</span>
            </div>
          </article>
        </Link>

        {/* ------------------ ÇALIŞTAY HABERİ (ID: 3) ------------------ */}
        <Link to="/bizden-haberler/3" className="news-card-link">
          <article className="news-card">
            <div className="news-card-image">
              <img src={newsImagetwo} alt="Kooperatifçilik Çalıştayı" />
              <div className="news-card-category">Kooperatifçilik • Çalıştay</div>
            </div>
            <div className="news-card-content">
              <time className="news-card-date">20-21 Aralık 2025</time>
              <h2 className="news-card-title">
                Kooperatifçiliğin Kalkınmada Rolü ve Yeni Nesil Kooperatifçilik Çalıştayı
              </h2>
              <p className="news-card-excerpt">
                Çalıştay, kooperatiflerin kalkınmada rolü, yeni nesil modeller, 
                yönetişim, dayanışma ve bilimsel çözüm arayışlarıyla Ankara’da düzenlenecektir.
              </p>
              <span className="news-card-read-more">Detayları Gör →</span>
            </div>
          </article>
        </Link>

        {/* ------------------ HABER 1 ------------------ */}
        <Link to="/bizden-haberler/1" className="news-card-link">
          <article className="news-card">
            <div className="news-card-image">
              <img src={newsImage} alt="İlk Adım Müzik TravelExpo programı" />
              <div className="news-card-category">
                Kültür • Sanat • Turizm • Sinema Akademisi
              </div>
            </div>
            <div className="news-card-content">
              <time className="news-card-date">20 Kasım 2025</time>
              <h2 className="news-card-title">
                İlk Adım Müzik ile TravelExpo Ankara'da Sahnedeyiz
              </h2>
              <p className="news-card-excerpt">
                20-22 Kasım 2025 tarihleri arasında gerçekleşecek 8. Uluslararası Turizm 
                ve Seyahat Fuarı TravelExpo'da İlk Adım Müzik Grubu ile sahnede olacağız.
              </p>
              <span className="news-card-read-more">Detayları Gör →</span>
            </div>
          </article>
        </Link>

        {/* ------------------ HABER 2 ------------------ */}
        <Link to="/bizden-haberler/2" className="news-card-link">
          <article className="news-card">
            <div className="news-card-image">
              <img src={haber4} alt="TRAVELEXPO ANKARA 2025 Standımız" />
              <div className="news-card-category">Fuar</div>
            </div>
            <div className="news-card-content">
              <time className="news-card-date">20-22 Kasım 2025</time>
              <h2 className="news-card-title">
                TRAVELEXPO ANKARA 2025 – Standımız Hazır
              </h2>
              <p className="news-card-excerpt">
                ATO Congresium'da düzenlenecek TRAVELEXPO ANKARA 2025 fuarında 
                standımızla yer alacağız.
              </p>
              <span className="news-card-read-more">Detayları Gör →</span>
            </div>
          </article>
        </Link>

      </div>
    </div>
  );
};

export default BizdenHaberler;
