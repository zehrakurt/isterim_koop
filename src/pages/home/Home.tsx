import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import bizdenHaberler from "../../assets/bizden haberler.jpg";
import aboutUsBanner from "../../assets/aboutus.png";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-banner">
          <img src={bizdenHaberler} alt="İsterim Kooperatif" className="banner-image" />
          <div className="banner-overlay"></div>
          <div className="hero-content">
            <div className="hero-badge">Hoş Geldiniz</div>
            <h1>İsterim Kooperatif</h1>
            <p className="hero-subtitle">
              Dayanışma, işbirliği ve sürdürülebilir kalkınma için birlikte çalışıyoruz.
              Toplumsal fayda ve üyelerimizin refahı için çalışan bir kooperatifiz.
            </p>
            <div className="hero-buttons">
              <Link to="/about-us" className="btn btn-primary">
                <span>Hakkımızda</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/bizden-haberler" className="btn btn-secondary">
                <span>Haberler</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Aktif Üye</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Tamamlanan Proje</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Yıllık Deneyim</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Üye Memnuniyeti</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <div className="features-container">
          <div className="section-header">
            <div className="section-badge">Neden Biz?</div>
            <h2>Değerlerimiz ve İlkelerimiz</h2>
            <p className="section-description">
              Kooperatifimizin temel değerleri ve çalışma ilkeleri
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🤝</div>
              </div>
              <h3>Dayanışma</h3>
              <p>Birlikte güçlüyüz. Üyelerimizin birbirine destek olduğu bir topluluk oluşturuyoruz.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🎯</div>
              </div>
              <h3>Hedef Odaklı</h3>
              <p>Net hedeflerle ilerliyor, sürdürülebilir kalkınma için stratejik planlama yapıyoruz.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">💡</div>
              </div>
              <h3>Yenilikçi</h3>
              <p>Sürekli gelişim ve yenilikçi yaklaşımlarla sektörde öncü olmaya devam ediyoruz.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🌱</div>
              </div>
              <h3>Sürdürülebilir</h3>
              <p>Gelecek nesiller için sorumlu ve sürdürülebilir bir yapı inşa ediyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="home-about">
        <div className="about-preview">
          <div className="about-image">
            <div className="image-wrapper">
              <img src={aboutUsBanner} alt="Hakkımızda" />
            </div>
          </div>
          <div className="about-content">
            <div className="section-badge">Hakkımızda</div>
            <h2>Biz Kimiz?</h2>
            <p>
              İsterim Kooperatif olarak, üyelerimizin ve toplumumuzun ekonomik, sosyal
              ve kültürel gelişimine katkıda bulunmak için çalışıyoruz. Eğitim, kültür,
              sanat ve turizm alanlarında faaliyetler yürüterek, dayanışma ve işbirliği
              ilkeleri çerçevesinde hizmet veriyoruz.
            </p>
            <Link to="/about-us" className="btn-link">
              <span>Daha Fazla Bilgi</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision Preview */}
      <section className="home-mission-vision">
        <div className="mission-vision-container">
          <div className="mv-card mission-card">
            <div className="mv-icon-wrapper">
              <div className="mv-icon">🎯</div>
            </div>
            <h3>Misyonumuz</h3>
            <p>
              Üyelerimizin ve toplumumuzun refahını artırmak, sürdürülebilir kalkınmaya
              katkıda bulunmak için çalışıyoruz.
            </p>
            <Link to="/misyonumuz" className="btn-link">
              <span>Misyonumuz</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className="mv-card vision-card">
            <div className="mv-icon-wrapper">
              <div className="mv-icon">🌟</div>
            </div>
            <h3>Vizyonumuz</h3>
            <p>
              Gelecekte bölgemizin ve ülkemizin önde gelen kooperatiflerinden biri
              olmayı hedefliyoruz.
            </p>
            <Link to="/vizyonumuz" className="btn-link">
              <span>Vizyonumuz</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="home-academy">
        <div className="academy-preview">
          <div className="section-header">
            <div className="section-badge">Akademi</div>
            <h2>Eğitim Programlarımız</h2>
            <p className="section-description">
              Üyelerimizin kişisel ve profesyonel gelişimine katkı sağlayan kapsamlı eğitim programlarımız
            </p>
          </div>
          <div className="academy-cards">
            <Link to="/akademi-1" className="academy-card">
              <div className="academy-card-header">
                <div className="academy-number">01</div>
                <h3>Akademi 1</h3>
              </div>
              <p>Temel ve orta seviye eğitim programı ile başlangıç seviyesinden ileri seviyeye kadar kapsamlı içerik</p>
              <div className="academy-card-footer">
                <span className="card-link">Detayları Gör</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            <Link to="/akademi-2" className="academy-card">
              <div className="academy-card-header">
                <div className="academy-number">02</div>
                <h3>Akademi 2</h3>
              </div>
              <p>İleri seviye ve uzmanlaşma programı ile profesyonel gelişim ve uzmanlık kazanımı</p>
              <div className="academy-card-footer">
                <span className="card-link">Detayları Gör</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="cta-background"></div>
        <div className="cta-content">
          <h2>Bize Katılın</h2>
          <p>Kooperatifimize üye olarak birlikte büyüme fırsatını kaçırmayın. Siz de aramıza katılın!</p>
          <Link to="/iletisim" className="btn btn-cta">
            <span>İletişime Geçin</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
