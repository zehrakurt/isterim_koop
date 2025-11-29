import React from "react";
import "./Academy.css";

const Academy1: React.FC = () => {
  return (
    <div className="academy-container">
      <section className="academy-banner">
        <div className="banner-content">
          <div className="hero-badge">Akademi</div>
          <h1>Akademi 1</h1>
          <p className="hero-subtitle">
            Eğitim ve gelişim programlarımızla üyelerimizin kişisel ve profesyonel
            gelişimine katkı sağlıyoruz.
          </p>
          <div className="hero-divider"></div>
        </div>
      </section>

      <section className="academy-main">
        <div className="academy-text">
          <h2>Akademi Programımız</h2>
          <p>
            Akademi 1 programımız, üyelerimizin bilgi ve becerilerini geliştirmelerine
            yardımcı olmak için tasarlanmış kapsamlı bir eğitim programıdır. Alanında
            uzman eğitmenler eşliğinde, teorik ve pratik bilgileri harmanlayarak
            öğrenme deneyimi sunuyoruz.
          </p>
          <p>
            Programımız, katılımcıların hem kişisel hem de profesyonel gelişimlerine
            odaklanır. Modern eğitim metodları kullanarak, interaktif ve uygulamalı
            bir öğrenme ortamı sağlıyoruz.
          </p>
          
          <div className="academy-features">
            <h3>Program Özellikleri</h3>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">📚</div>
                <h4>Kapsamlı İçerik</h4>
                <p>Detaylı ve güncel eğitim materyalleri</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <h4>Uzman Eğitmenler</h4>
                <p>Alanında deneyimli ve uzman kadro</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💼</div>
                <h4>Pratik Uygulamalar</h4>
                <p>Teorik bilgiyi pratiğe dönüştürme fırsatı</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎓</div>
                <h4>Sertifika</h4>
                <p>Program sonunda katılım sertifikası</p>
              </div>
            </div>
          </div>

          <div className="academy-schedule">
            <h3>Program Takvimi</h3>
            <div className="schedule-list">
              <div className="schedule-item">
                <div className="schedule-date">Başlangıç</div>
                <div className="schedule-content">
                  <h4>Program Başlangıç Tarihi</h4>
                  <p>Programımız yıl boyunca düzenli aralıklarla açılmaktadır.</p>
                </div>
              </div>
              <div className="schedule-item">
                <div className="schedule-date">Süre</div>
                <div className="schedule-content">
                  <h4>Program Süresi</h4>
                  <p>Program toplam 8 hafta sürmektedir.</p>
                </div>
              </div>
              <div className="schedule-item">
                <div className="schedule-date">Katılım</div>
                <div className="schedule-content">
                  <h4>Katılım Şekli</h4>
                  <p>Yüz yüze ve online seçenekleri mevcuttur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy1;

