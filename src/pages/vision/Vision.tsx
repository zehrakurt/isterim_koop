import React from "react";
import "./Vision.css";

const Vision: React.FC = () => {
  return (
    <div className="vision-container">
      <section className="vision-banner">
        <div className="banner-content">
          <div className="hero-badge">Hakkımızda</div>
          <h1>Vizyonumuz</h1>
          <p className="hero-subtitle">
            Geleceğe dair hayallerimiz ve hedeflerimiz. Daha iyi bir dünya için
            birlikte çalışıyoruz.
          </p>
          <div className="hero-divider"></div>
        </div>
      </section>

      <section className="vision-main">
        <div className="vision-text">
          <h2>Vizyonumuz</h2>
          <p>
            Kooperatifimiz, gelecekte bölgemizin ve ülkemizin önde gelen kooperatiflerinden
            biri olmayı hedeflemektedir. Üyelerimizin ve toplumumuzun refahını artırmak,
            sürdürülebilir kalkınmaya katkıda bulunmak ve örnek bir kooperatif modeli
            oluşturmak vizyonumuzun temel taşlarıdır.
          </p>
          <p>
            Eğitim, kültür, sanat ve turizm alanlarında öncü olmak, yenilikçi projeler
            geliştirmek ve toplumsal değer yaratmak için çalışıyoruz. Gelecek nesillere
            daha iyi bir dünya bırakmak için sürdürülebilir ve etik değerlere bağlı
            bir yapı oluşturmayı amaçlıyoruz.
          </p>
          
          <div className="vision-goals">
            <h3>Hedeflerimiz</h3>
            <div className="goals-list">
              <div className="goal-item">
                <div className="goal-number">01</div>
                <div className="goal-content">
                  <h4>Toplumsal Etki</h4>
                  <p>Bölgemizde ve ülkemizde önemli bir toplumsal etki yaratmak</p>
                </div>
              </div>
              <div className="goal-item">
                <div className="goal-number">02</div>
                <div className="goal-content">
                  <h4>Üye Memnuniyeti</h4>
                  <p>Üyelerimizin ihtiyaçlarını en iyi şekilde karşılamak</p>
                </div>
              </div>
              <div className="goal-item">
                <div className="goal-number">03</div>
                <div className="goal-content">
                  <h4>Sürdürülebilirlik</h4>
                  <p>Çevreye duyarlı ve sürdürülebilir bir yapı oluşturmak</p>
                </div>
              </div>
              <div className="goal-item">
                <div className="goal-number">04</div>
                <div className="goal-content">
                  <h4>Yenilikçilik</h4>
                  <p>Teknoloji ve yenilikçi yaklaşımlarla öncü olmak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;

