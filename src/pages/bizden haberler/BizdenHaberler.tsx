import React from "react";
import { Link } from "react-router-dom";
import "./BizdenHaberler.css";
import newsImage from "../../assets/bizden haberler.jpg";
import newsImagetwo from "../../assets/12.jpeg";
import haber4 from "../../assets/haber4.jpg";

const BizdenHaberler: React.FC = () => {
  return (
    <div className="news-page">
      <div className="news-page-header">
        <h1>Bizden Haberler</h1>
      </div>

      <div className="news-grid">

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
