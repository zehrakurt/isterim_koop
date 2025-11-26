import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div>
          <p className="contact-kicker">Bizimle İletişime Geçin</p>
          <h1>Kooperatif ağımıza katılmak için her an ulaşabilirsiniz</h1>
          <p>
            İş birlikleri, kooperatif başvuruları, basın ve akademi soruları için
            kurumsal iletişim ekibimiz haftanın her günü yanıt veriyor. Size en
            uygun kanaldan hemen dönüş sağlıyoruz.
          </p>
        </div>
      </section>

      <section className="contact-grid">
        <div className="contact-card">
          <h3>Merkez Ofis</h3>
          <p>İsterim Koop Teknoloji A.Ş.</p>
          <p>Maslak Mah. Teknoloji Sok. No:12 Kat:6</p>
          <p>Sarıyer / İstanbul</p>
        </div>

        <div className="contact-card">
          <h3>İletişim</h3>
          <p>Telefon: +90 (212) 555 12 34</p>
          <p>WhatsApp: +90 (533) 555 45 67</p>
          <p>E-posta: info@isterimkoop.com</p>
        </div>

        <div className="contact-card">
          <h3>Çalışma Saatleri</h3>
          <p>Hafta içi: 09.00 – 19.00</p>
          <p>Cumartesi: 10.00 – 16.00</p>
          <p>Pazar: Acil destek hattı</p>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-text">
          <h2>Harita ve rota bilgisi</h2>
          <p>
            Toplu taşımayla ITÜ Ayazağa durağında inip Maslak yönünde 5 dakika
            yürüyebilirsiniz. Aracınızla geliyorsanız ofisimizin kapalı otoparkını
            kullanabilirsiniz.
          </p>
        </div>
        <div className="contact-map">
          <iframe
            title="İsterim Koop Harita"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.037767397404!2d29.011395076727627!3d41.10108801822913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5898905bf13%3A0x1a5a0a55354883b5!2sMaslak%2C%2034365%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="contact-extra">
        <div>
          <h3>Bize yazın</h3>
          <p>destek@isterimkoop.com</p>
        </div>
        <div>
          <h3>Sosyal medya</h3>
          <p>@isterimkoop</p>
        </div>
        <div>
          <h3>Faks</h3>
          <p>+90 (212) 555 67 89</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;

