import React from "react";
import "./Mission.css";

const Mission: React.FC = () => {
  return (
    <div className="mission-container">
      <section className="mission-banner">
        <div className="banner-content">
          <div className="hero-badge">Hakkımızda</div>
          <h1>Misyonumuz</h1>
          <p className="hero-subtitle">
            Kooperatifimizin temel amacı ve değerlerini keşfedin. Toplumsal fayda
            ve sürdürülebilir kalkınma için çalışıyoruz.
          </p>
          <div className="hero-divider"></div>
        </div>
      </section>

      <section className="mission-main">
        <div className="mission-text">
          <h2>Misyonumuz</h2>
          <p>
            Kooperatifimiz, üyelerimizin ve toplumumuzun ekonomik, sosyal ve kültürel
            gelişimine katkıda bulunmak için kurulmuştur. Amacımız, dayanışma ve
            işbirliği ilkeleri çerçevesinde, üyelerimizin yaşam kalitesini artırmak
            ve sürdürülebilir bir gelecek inşa etmektir.
          </p>
          <p>
            Toplumsal sorumluluk bilinciyle hareket ederek, eğitim, kültür, sanat
            ve turizm alanlarında faaliyetler yürütüyoruz. Üyelerimizin ihtiyaçlarını
            karşılamak, onlara fırsatlar sunmak ve birlikte büyümek temel
            misyonumuzdur.
          </p>
          
          <div className="mission-values">
            <h3>Değerlerimiz</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4>Dayanışma</h4>
                <p>Birlikte güçlüyüz, birlikte başarıyoruz</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <h4>Hedef Odaklılık</h4>
                <p>Net hedeflerle ilerliyoruz</p>
              </div>
              <div className="value-item">
                <div className="value-icon">💡</div>
                <h4>Yenilikçilik</h4>
                <p>Sürekli gelişim ve yenilik</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌱</div>
                <h4>Sürdürülebilirlik</h4>
                <p>Gelecek nesiller için sorumluluk</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;

