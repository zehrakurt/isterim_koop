import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";

// Sosyal medya ikonları için buraya bir kütüphane (örneğin react-icons) veya SVG'ler eklenebilir.
// Basitlik adına burada sadece metin yer tutucuları kullanılmıştır.

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Kooperatif Bilgileri */}
        <div className="footer-section footer-info">
          <h3>İsterim Kooperatif</h3>
          <p>
          Önceliğimiz, sosyal inovasyonlar, sosyal girişimcilik ve modüler akademik çalışmalar yoluyla kurumların, firmaların, STK'ların, belediyelerin ve yerel yönetimlerin sosyal kapasitelerini geliştirmektir.
          </p>
        </div>

        {/* Hızlı Bağlantılar */}
        <div className="footer-section footer-links">
  <h4>Hızlı Bağlantılar</h4>
  <ul>
  <li><Link to="/">Anasayfa</Link></li>
            <li><Link to="/about-us">Biz Kimiz</Link></li>
            <li><Link to="/misyonumuz">Misyonumuz</Link></li>
            <li><Link to="/vizyonumuz">Vizyonumuz</Link></li>
            <li><Link to="/akademi-1">Akademi</Link></li>
            <li><Link to="/bizden-haberler">Bizden Haberler</Link></li>
            <li><Link to="/iletisim">İletişim</Link></li>
  </ul>
</div>
        {/* İletişim */}
        <div className="footer-section footer-contact">
          <h4>Bize Ulaşın</h4>
          <p className='artı'>
            <i className="contact-icon">📍</i> İsterim Kooperatif.

Hacettepe mah. Divan sok. no:13/1

Altındag-Ankara
          </p>
          <p className='artı'>
            <i className="contact-icon">📞</i> Telefon: (538) 267 31 33
          </p>
          <p>
            <i className="contact-icon">✉️</i> E-posta: akadli2000@yahoo.com
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
          &copy; {currentYear} İsterim Kooperatif. Tüm hakları saklıdır. | 
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;