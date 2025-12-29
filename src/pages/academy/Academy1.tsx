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
    description:
      "Etrafınızda her şeyi para ve başarıya bağlayan bir sistem var. Oysa değerli olan doğru bir amaç uğruna harcanan çabalardır.",
    url: akademi2,
    color: "blue",
  },
  {
    title: "BİREYSEL SOSYAL KAPASİTE GELİŞTİRME PROGRAMI",
    description: "Amacımız cehaletle ve her türlüsüyle topyekûn savaştır.",
    url: akademi3,
    color: "green",
  },
  {
    title: "KURUMSAL SOSYAL KAPASİTE GELİŞTİRME PROGRAMI",
    description: "Sosyal girişimci yapılar olarak değer yaratmalarını hedefler.",
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

      {/* 📄 PDF Kartları — ARTIK ÜSTTE */}
      <section className="academy-main">
        <div className="pdf-section">
          <div className="title-container">
            <h2 className="section-title">
              Program Dokümanları ve Kılavuzlar
            </h2>
          </div>

          <p className="section-subtitle">
            Aşağıda akademimizin dört temel programına ait PDF kılavuzları
            bulabilirsiniz.
          </p>

          <div className="pdf-grid">
            {pdfDocuments.map((doc, index) => (
              <div key={index} className="pdf-card">
                <div className={`pdf-color-strip ${doc.color}`}></div>

                <h4 className="pdf-title">{doc.title}</h4>
                <p className="pdf-desc">{doc.description}</p>

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

      {/* 🎵 YOUTUBE CANLI MÜZİK — ARTIK ALTTA */}
      <section className="academy-music">
        <h3>Akademi Yayını</h3>
        <p>Okurken veya incelerken arka planda dinleyebilirsiniz.</p>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/wRosDaswx4g"
            title="İsterim Akademi Canlı Yayın"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Academy;
