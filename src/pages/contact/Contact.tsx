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
          <p>İsterim Kooperatif.</p>
          <p>Hacettepe mah. divan sok. no:13/1</p>
          <p>Altındag-Ankara</p>
        </div>

        <div className="contact-card">
          <h3>İletişim</h3>
          <p>Telefon: Yiğit Köymen 05382673133 </p>
          <p>Telefon: Oguzhan Akova 05338193967</p>
          <p>E-posta: akadli2000@yahoo.com</p>
        </div>

        <div className="contact-card">
          <h3>Çalışma Saatleri</h3>
          <p>Hafta içi: 09.00 – 19.00</p>
          <p>Cumartesi: 10.00 – 16.00</p>
         
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-text">
          <h2>Harita ve rota bilgisi</h2>
          <p>
           "Toplu taşımayla gelmek için Ulus otobüs duraklarından kalkan ve Hacettepe Mahallesi güzergahını takip eden otobüsleri kullanabilir veya Ankaray (A1) Dikimevi durağında inerek 15-20 dakikalık bir yürüyüşle ofisimize ulaşabilirsiniz. Bölgenin tarihi yapısından dolayı Hacettepe Üniversitesi Sıhhiye Kampüsü'ne oldukça yakınız."
          </p>
        </div>
        <div className="contact-map">
          <iframe
            title="İsterim Koop Harita"
            /* BURASI GÜNCELLENDİ */
            src="https://maps.google.com/maps?q=39.935111,32.864611&hl=tr&z=15&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="contact-extra">
        <div>
          <h3>Bize yazın</h3>
          <p>akadli2000@yahoo.com</p>
        </div>
        <div>
          <h3>Sosyal medya</h3>
          <p>@isterimkoop</p>
        </div>
        <div>
          <h3>Telefon</h3>
          <p>+90 (538) 267 31 33</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;