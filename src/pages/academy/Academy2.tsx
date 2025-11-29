import React from "react";
import "./Academy.css";

const Academy2: React.FC = () => {
  return (
    <div className="academy-container">
      <section className="academy-banner">
        <div className="banner-content">
          <div className="hero-badge">Akademi</div>
          <h1>Akademi 2</h1>
          <p className="hero-subtitle">
            İleri seviye eğitim programımızla uzmanlaşma yolunda ilerleyin.
            Profesyonel gelişim için kapsamlı içerikler.
          </p>
          <div className="hero-divider"></div>
        </div>
      </section>

      <section className="academy-main">
        <div className="academy-text">
          <h2>İleri Seviye Program</h2>
          <p>
            Akademi 2 programımız, temel bilgilere sahip katılımcılar için tasarlanmış
            ileri seviye bir eğitim programıdır. Bu program, katılımcıların mevcut
            bilgilerini derinleştirmelerine ve uzmanlaşmalarına olanak sağlar.
          </p>
          <p>
            Program, pratik projeler, vaka çalışmaları ve gerçek dünya senaryoları
            üzerinden ilerler. Katılımcılar, mentorluk desteği alarak kendi
            projelerini geliştirme fırsatı bulurlar.
          </p>
          
          <div className="academy-features">
            <h3>Program Özellikleri</h3>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <h4>İleri Seviye</h4>
                <p>Derinlemesine ve uzmanlaşmaya yönelik içerik</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <h4>Proje Odaklı</h4>
                <p>Gerçek projeler üzerinden öğrenme</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <h4>Mentorluk</h4>
                <p>Deneyimli mentorlar eşliğinde rehberlik</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌐</div>
                <h4>Ağ Oluşturma</h4>
                <p>Sektör profesyonelleriyle tanışma fırsatı</p>
              </div>
            </div>
          </div>

          <div className="academy-requirements">
            <h3>Katılım Koşulları</h3>
            <div className="requirements-list">
              <div className="requirement-item">
                <div className="requirement-check">✓</div>
                <p>Akademi 1 programını tamamlamış olmak veya eşdeğer bilgiye sahip olmak</p>
              </div>
              <div className="requirement-item">
                <div className="requirement-check">✓</div>
                <p>Programa aktif katılım gösterme taahhüdü</p>
              </div>
              <div className="requirement-item">
                <div className="requirement-check">✓</div>
                <p>Proje çalışmalarına zaman ayırabilme</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy2;

