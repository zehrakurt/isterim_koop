import React from 'react';
import './Footer.css';
// Sosyal medya ikonları için buraya bir kütüphane (örneğin react-icons) veya SVG'ler eklenebilir.
// Basitlik adına burada sadece metin yer tutucuları kullanılmıştır.

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Kooperatif Bilgileri */}
        <div className="footer-section footer-info">
          <h3>Kooperatif Adı</h3>
          <p>
            Yerel üreticiler ve tüketiciler arasında sürdürülebilir bir köprü kurmayı hedefliyoruz. 
            Güvenilir, doğal ve adil ticareti destekliyoruz.
          </p>
        </div>

        {/* Hızlı Bağlantılar */}
        <div className="footer-section footer-links">
          <h4>Hızlı Bağlantılar</h4>
          <ul>
            <li><a href="/hakkimizda">Hakkımızda</a></li>
            <li><a href="/urunler">Ürünler</a></li>
            <li><a href="/uyelik">Üyelik / Destek</a></li>
            <li><a href="/sss">Sıkça Sorulan Sorular</a></li>
            <li><a href="/kvkk">KVKK</a></li>
          </ul>
        </div>

        {/* İletişim */}
        <div className="footer-section footer-contact">
          <h4>Bize Ulaşın</h4>
          <p>
            <i className="contact-icon">📍</i> Adres: Örnek Mah. Koop Sok. No: 123, Şehir
          </p>
          <p>
            <i className="contact-icon">📞</i> Telefon: (555) 555 55 55
          </p>
          <p>
            <i className="contact-icon">✉️</i> E-posta: info@kooperatifadi.org
          </p>
        </div>

        {/* Sosyal Medya */}
        <div className="footer-section footer-social">
          <h4>Takip Edin</h4>
          <div className="social-links">
            {/* Gerçek projede bu kısımlar ikonlarla değiştirilmelidir. */}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
          </div>
        </div>

      </div>
      
      {/* Telif Hakkı ve Alt Bar */}
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} Kooperatif Adı. Tüm hakları saklıdır. | 
          <a href="/gizlilik" className="bottom-link">Gizlilik Politikası</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;