import React from "react";
import { useParams, Link } from "react-router-dom";
import "./HaberDetay.css";
import newsImage from "../../assets/bizden haberler.jpg";
import haber1 from "../../assets/haber1.jpg";
import haber2 from "../../assets/haber2.jpg";
import haber3 from "../../assets/haber3.jpg";
import haber4 from "../../assets/haber4.jpg";

const HaberDetay: React.FC = () => {
  const { id } = useParams<{ id: string }>();

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
              sahnede olacağız. Panel programında yer alan "Yaşamınızın Yeni Ritmine
              İlk Adımla Başlayın" gösterisine tüm paydaşlarımız davetlidir.
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
              <strong>20 Kasım 2025, Perşembe • 18.00</strong>
            </div>
            <div className="detail-row">
              <span>Yer</span>
              <strong>ATO Congresium</strong>
            </div>
            <div className="detail-row">
              <span>Gösteri</span>
              <strong>İlk Adım Müzik Grubu</strong>
            </div>
            <a
              className="news-link"
              href="https://www.instagram.com/ilkadimmuzik?igsh=MTJtbmd0MXR4N3pnZg=="
              target="_blank"
              rel="noreferrer"
            >
              Instagram'da İlk Adım Müzik
            </a>
          </div>
        </article>
      </div>
    );
  }

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
              ATO Congresium'da 20-22 Kasım 2025 tarihinde düzenlenecek olan{" "}
              <strong>TRAVELEXPO ANKARA 2025 – 8. Uluslararası Turizm ve Seyahat Fuarı</strong>{" "}
              standımız olacaktır.
            </p>
            <p>
              Bu önemli fuarda, kadın kooperatiflerinin ve kadın üreticilerin ürünlerini
              tanıtma fırsatı bulacağız. Standımızda yerel, coğrafi işaretli ürünler,
              el sanatları ve otantik eşyalarımızı sergileyeceğiz.
            </p>
            <p>
              Tüm paydaşlarımızı ve ziyaretçilerimizi standımıza bekliyoruz.
            </p>
          </div>

          <div className="news-detail-images-grid">
            <div className="news-detail-image-item">
              <img src={haber1} alt="TRAVELEXPO ANKARA 2025 Standımız 1" />
            </div>
            <div className="news-detail-image-item">
              <img src={haber2} alt="TRAVELEXPO ANKARA 2025 Standımız 2" />
            </div>
            <div className="news-detail-image-item">
              <img src={haber3} alt="TRAVELEXPO ANKARA 2025 Standımız 3" />
            </div>
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
            <div className="contact-info">
              <h3>İrtibat</h3>
              <p>
                <strong>Yiğit Köymen</strong>
              </p>
              <p>
                <a href="tel:05382673133">05382673133</a>
              </p>
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

