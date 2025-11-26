import React from "react";
import "./AboutUs.css";
import aboutUsBanner from "../../assets/aboutus.png";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <section className="about-hero">
        <div className="hero-content">
          <p className="hero-kicker">İsterim Koop Hakkında</p>
          <h1>Kooperatif gücünü dijital dünyaya taşıyoruz</h1>
          <p className="hero-subtitle">
            Kadın kooperatifleri ve üreticileri için adil, şeffaf ve sürdürülebilir
            bir ticaret modeli tasarladık. Üreten kadınların emeğini doğru alıcıyla
            buluşturuyor, yerel kalkınmanın sürekliliğini destekliyoruz.
          </p>
          <div className="hero-stats">
            <div className="stat-card">
              <span>5%</span>
              <p>Kooperatif komisyon oranı</p>
            </div>
            <div className="stat-card">
              <span>25%</span>
              <p>Net kârın kadın sermayesine ayrılan payı</p>
            </div>
            <div className="stat-card">
              <span>100%</span>
              <p>Yerli sermaye yapısı</p>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <img src={aboutUsBanner} alt="İsterim Koop ekibi" />
        </div>
      </section>

      <section className="about-pillars">
        <div className="pillar-card">
          <h3>Misyonumuz</h3>
          <p>
            Kadın kooperatifleri ve üreticilerin ürünlerini tek çatı altında
            toplayarak ölçeklenebilir bir pazar ağı oluşturmak, komisyon yükünü
            azaltmak ve dayanışma kültürünü güçlendirmek.
          </p>
        </div>
        <div className="pillar-card">
          <h3>Vizyonumuz</h3>
          <p>
            Yerel üretimi koruyan, ekonomik fırsatları eşitleyen ve kadın girişimciliğini
            küresel arenada görünür kılan bir teknoloji şirketi olmak.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="story-text">
          <h2>Dayanışmanın yeni nesil platformu</h2>
          <p>
            Kadın kooperatiflerinin büyük pazar yerlerinde maruz kaldığı yüksek
            komisyon oranlarını indirmek için %5&apos;lik sabit kooperatif ve %10&apos;luk
            bireysel üretici komisyon modeli geliştirdik. Böylece üreticilerin
            kazancını maksimize ederken alıcıya kaliteli ve güvenilir ürün sağlayan
            sürdürülebilir bir yapı kurduk.
          </p>
          <p>
            Yöresel, coğrafi işaretli ürünleri ve kaybolmaya yüz tutmuş el sanatlarını
            önceliklendirerek kültürel mirası koruyoruz. Net kârımızın %25&apos;ini yeni
            kadın girişimlere sermaye desteği olarak ayırıyor, kamu ve özel sektör
            teşviklerine erişimde danışmanlık sağlıyoruz.
          </p>
          <div className="story-highlights">
            <div>
              <h4>Şeffaf finans</h4>
              <p>Tüm gelir-gider dengesi üreticilerle paylaşılır.</p>
            </div>
            <div>
              <h4>Güçlü ağ</h4>
              <p>Türkiye geneline yayılan kooperatif topluluğu.</p>
            </div>
            <div>
              <h4>Yerel kalkınma</h4>
              <p>Her satış bölgesel ekonomiye yatırım demek.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="values-header">
          <p className="section-kicker">İşleyiş İlkelerimiz</p>
          <h2>Kurumsal değerlerimiz</h2>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <span>01</span>
            <h3>Adil Paylaşım</h3>
            <p>Komisyon yükünü minimize ederek emeğin gerçek karşılığını koruruz.</p>
          </div>
          <div className="value-card">
            <span>02</span>
            <h3>Veri Güveni</h3>
            <p>Üretici ve tüketici verilerini KVKK uyumlu altyapıyla saklarız.</p>
          </div>
          <div className="value-card">
            <span>03</span>
            <h3>Şeffaflık</h3>
            <p>Tüm finansal ve operasyonel süreçler raporlanır.</p>
          </div>
          <div className="value-card">
            <span>04</span>
            <h3>Sürdürülebilirlik</h3>
            <p>Yerel üretimi destekleyerek uzun vadeli büyüme yaratırız.</p>
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <div className="timeline-header">
          <p className="section-kicker">Yol Haritamız</p>
          <h2>Öne çıkan kilometre taşları</h2>
        </div>
        <div className="timeline-list">
          <div className="timeline-item">
            <div className="timeline-badge">2021</div>
            <div>
              <h4>İlk kooperatif ağımızı kurduk</h4>
              <p>Beş farklı şehirde 20 kooperatif ile beta programa başladık.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-badge">2022</div>
            <div>
              <h4>Düşük komisyon modeli</h4>
              <p>5/10 komisyon yapısı hayata geçirilerek platform geneline yayıldı.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-badge">2023</div>
            <div>
              <h4>Hibe ve teşvik danışmanlığı</h4>
              <p>Kamu-özel teşviklerine erişim için danışmanlık birimi kuruldu.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-badge">2024</div>
            <div>
              <h4>Yerel markalaşma programı</h4>
              <p>Coğrafi işaretli ürünler için markalaşma ve pazarlama fonu oluşturuldu.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div>
          <h2>Birlikte büyümek için buradayız</h2>
          <p>
            Kadın üreticilerin sesi olmak istiyorsanız bizimle iletişime geçin.
            Ortak projeler, platform iş birlikleri veya sosyal etki yatırımları
            için kurumsal ekibimiz hazır.
          </p>
        </div>
        <div className="cta-actions">
          <button className="primary-btn">Kurumsal İş Birliği</button>
          <button className="secondary-btn">Kooperatif Başvurusu</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
