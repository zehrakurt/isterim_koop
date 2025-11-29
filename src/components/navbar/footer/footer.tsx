import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; 
// Navbar'da BrowserRouter kullanıldığı için, Footer'daki Link'ler de react-router-dom'dan gelmeli
// Ancak bu Footer bileşenini bağımsız tutmak için şimdilik standart <a> etiketlerini kullanıyorum.

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section brand-info">
                    <h3>İsterim Kooperatif</h3>
                    <p>Geleceğe değer katan projeler ve sürdürülebilirlik çözümleri.</p>
                    <div className="social-links">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Destek Alanı: Navbar'daki Hakkımızda altında olanları buraya taşıdık */}
                <div className="footer-section links">
                    <h4>Kooperatif Hakkında</h4>
                    <ul>
                        <li><a href="/about-us">Biz Kimiz</a></li>
                        <li><a href="/misyonumuz">Misyonumuz</a></li>
                        <li><a href="/vizyonumuz">Vizyonumuz</a></li>
                    </ul>
                </div>

                {/* Hızlı Erişim Alanı: Navbar'daki ana linkleri buraya taşıdık */}
                <div className="footer-section links">
                    <h4>Hızlı Erişim</h4>
                    <ul>
                        <li><a href="/">Anasayfa</a></li>
                        <li><a href="/akademi-1">Akademi 1</a></li>
                        <li><a href="/bizden-haberler">Bizden Haberler</a></li>
                        <li><a href="/iletisim">İletişim</a></li>
                    </ul>
                </div>

                {/* Bize Ulaşın kısmı aynen kaldı */}
                <div className="footer-section contact">
                    <h4>Bize Ulaşın</h4>
                    <p>Adres: Örnek Cad. No: 1, İstanbul</p>
                    <p>Email: info@kooperatif.org</p>
                    <p>Telefon: +90 555 123 45 67</p>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {currentYear} Kooperatif. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
}

export default Footer;