import React from "react";
import { Link } from "react-router-dom";
import "./BizdenHaberler.css";
import newsImage from "../../assets/bizden haberler.jpg";
import haber4 from "../../assets/haber4.jpg";

const BizdenHaberler: React.FC = () => {
  return (
    <div className="news-page">
      <div className="news-page-header">
        <h1>Bizden Haberler</h1>
      </div>

      <div className="news-grid">
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
                20-22 Kasım 2025 tarihleri arasında gerçekleşecek 8. Uluslararası
                Turizm ve Seyahat Fuarı TravelExpo'da, İlk Adım Müzik Grubu ile
                sahnede olacağız. Panel programında yer alan "Yaşamınızın Yeni Ritmine
                İlk Adımla Başlayın" gösterisine tüm paydaşlarımız davetlidir.
              </p>
              <span className="news-card-read-more">Detayları Gör →</span>
            </div>
          </article>
        </Link>

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
                ATO Congresium'da 20-22 Kasım 2025 tarihinde düzenlenecek olan
                TRAVELEXPO ANKARA 2025 – 8. Uluslararası Turizm ve Seyahat Fuarında
                standımız olacaktır.
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
