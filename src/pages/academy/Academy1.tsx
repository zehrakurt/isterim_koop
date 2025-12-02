import "./Academy.css";

// PDF ikonunu Vite uyumlu şekilde import ediyoruz
import pdfIcon from "../../assets/indir.svg";

// PDF’ler
import akademi1 from "../../assets/akademi-1.pdf";
import akademi2 from "../../assets/akademi-2.pdf";
import akademi3 from "../../assets/akademi-3.pdf";
import akademi4 from "../../assets/akademi-4.pdf";

const pdfDocuments = [
  {
    title: "BAŞLARKEN-İSTERİM Akademisi",
    description: "Her şey bir ilk adımla başlar.",
    url: akademi1,
    color: "pink",
  },
  {
    title: "SOSYAL KAPASİTE GELİŞTİRME PROGRAMI",
    description: "Etrafınızda her şeyi para ve başarıya bağlayan birsistem var. Oysa değerli olan doğru bir amaç uğrunaharcanan çabalardır..",
    url: akademi2,
    color: "blue",
  },
  {
    title: "BİREYSEL SOSYAL KAPASİTEGELİŞTİRME PROGRAMI",
    description: "AMACIMIZ CEHALETLE VE HERTÜRLÜSÜYLE TOPYEKÜN SAVAŞTIR.",
    url: akademi3,
    color: "green",
  },
  {
    title: "KURUMSAL SOSYAL KAPASİTEGELİŞTİRME PROGRAMI",
    description: "Sosyal Girişimci yapılar olarak değer yaratmalarını ...",
    url: akademi4,
    color: "yellow",
  },
];

const Academy = () => {
  return (
    <div className="academy-container">
      {/* Banner */}
      <section className="academy-banner">
        <div className="banner-content">
          <div className="hero-badge">İsterim Akademi</div>
          <h1>Dönüşüm ve Kapasite Geliştirme Programları</h1>
          <p className="hero-subtitle">
            Bireyin kendini tanımlamasından başlayarak kurumlara ve toplumsal
            eko-sistem tasarımına uzanan bütünsel model.
          </p>
          <div className="hero-divider"></div>
        </div>
      </section>

      {/* PDF Kartları */}
      <section className="academy-main">
        <div className="pdf-section">
          <div className="title-container">
            <h2 className="section-title">Program Dokümanları ve Kılavuzlar</h2>
          </div>

          <p className="section-subtitle">
            Aşağıda akademimizin dört temel programına ait PDF kılavuzları bulabilirsiniz.
          </p>

          <div className="pdf-grid">
            {pdfDocuments.map((doc, index) => (
              <div key={index} className="pdf-card">
                <div className={`pdf-color-strip ${doc.color}`}></div>

                <h4 className="pdf-title">{doc.title}</h4>
                <p className="pdf-desc">{doc.description}</p>

                {/* PDF ikon */}
                <div className="pdf-icon-wrapper">
                  <img src={pdfIcon} alt="PDF icon" className="pdf-svg" />
                </div>

                <a
                  href={doc.url}
                  className="download-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  İncele / İndir
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;
