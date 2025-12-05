import React, { useRef } from 'react';
import './home2.css';

// PDF Dosyaları
import proje1 from './assets/proje1.pdf';
import proje2 from './assets/proje2.pdf';
import proje3 from './assets/proje3.pdf';
import proje4 from './assets/proje4.pdf';
import proje5 from './assets/proje5.pdf';
import proje6 from './assets/proje6.pdf';

// İkonlar
import { 
    FaHandshake, FaUsers, FaLeaf, FaLightbulb, 
    FaBox, FaGraduationCap, FaUsersCog, FaCheckCircle,
    FaFilePdf, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';

const Home2: React.FC = () => {

    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (sliderRef.current) sliderRef.current.scrollLeft += 260;
    };

    const scrollLeft = () => {
        if (sliderRef.current) sliderRef.current.scrollLeft -= 260;
    };

    return (
        <div className="page-container">

            {/* HERO */}
            <header className="hero-banner">
                <div className="content">
                    <h1>Kooperatifinizle Geleceğe Değer Katın</h1>
                    <p>Sorunlu, esnek ve güvenilir bir prototip geliştirmekten kaçının.</p>
                    <div className="actions">
                        <a href="#" className="btn btn-primary">Protokolü başlatın</a>
                        <a href="#" className="btn btn-secondary">Bizimle iletişime geçin</a>
                    </div>
                </div>
            </header>

            {/* HAKKIMIZDA */}
            <section className="section about-us">
                <div className="section-title">
                    <h2>Hakkımızda</h2>
                </div>
                <p className="about-description">
                    Kooperatifinizle yaralı topluluklara kanat, sağlayan sürdürülebilir projeler geliştirir 
                    ve sempatiyi ön planda kılar.
                </p>

                <div className="icon-cards-container">
                    <IconCard Icon={FaHandshake} title="Şeffaflık" description="Dosyalara erişimi sağlayan gerçek zamanlı prototip." />
                    <IconCard Icon={FaUsers} title="Topluluk" description="Rizikosundaki yangınlara karşı duyarlılığın azalması." />
                    <IconCard Icon={FaLeaf} title="Sürdürülebilirlik" description="Başarılı olan yönetim görünüyor." />
                    <IconCard Icon={FaLightbulb} title="İnovasyon" description="Bizimle iletişime geçin, hemen ulaşın." />
                </div>
            </section>

            {/* PROJELER SLIDER */}
            <section className="section projects">
                <div className="section-title">
                    <h2>Projelerimiz</h2>
                </div>

                <div className="slider-container">

                    {/* Sol ok */}
                    <button className="slider-btn left" onClick={scrollLeft}>
                        <FaChevronLeft />
                    </button>

                    {/* Slider alanı */}
                    <div className="slider" ref={sliderRef}>
                        <ProjectCard title="Yeşil Enerji Projesi" description="Sürdürülebilir enerji kaynaklarının kullanımı." pdfLink={proje1} />
                        <ProjectCard title="Topluluk Bahçesi" description="Organik tarıma odaklanan üretim süreci." pdfLink={proje2} />
                        <ProjectCard title="Sürdürülebilir Tarım" description="Doğru yöntemlerle tarımın desteklenmesi." pdfLink={proje3} />
                        <ProjectCard title="Atık Yönetimi" description="Atıkların yeniden kullanımı ve bertarafı." pdfLink={proje4} />
                        <ProjectCard title="Kooperatif Dijitalleşme" description="Dijital dönüşüm süreçlerinin geliştirilmesi." pdfLink={proje5} />
                        <ProjectCard title="Eğitim Destek Programı" description="Topluluk eğitim projelerinin yönetimi." pdfLink={proje6} />
                    </div>

                    {/* Sağ ok */}
                    <button className="slider-btn right" onClick={scrollRight}>
                        <FaChevronRight />
                    </button>

                </div>
            </section>

            {/* HİZMETLER */}
            <section className="section services">
                <div className="section-title">
                    <h2>Hizmetlerimiz</h2>
                </div>

                <div className="service-grid">
                    <ServiceCard Icon={FaBox} title="Ortak Ürün Dağıtımı" />
                    <ServiceCard Icon={FaGraduationCap} title="Eğitim ve Atölyeler" />
                    <ServiceCard Icon={FaUsersCog} title="Danışmanlık" />
                    <ServiceCard Icon={FaCheckCircle} title="Sürdürülebilirlik Çözümleri" />
                </div>
            </section>

            {/* ALT BİLDİRİM */}
            <section className="section feedback-banner">
                <div className="feedback-content">
                    <h3>Geri Bildirimler</h3>
                    <p>Neler yaptığınızı gösteren gerçek bir geri bildirim?</p>
                    <p className="small-text">Soru sormak, haberdar olmak, yeni bir program başlatmak.</p>
                </div>
            </section>
        </div>
    );
};

export default Home2;


//
// ---------------------------
//   YARDIMCI BİLEŞENLER
// ---------------------------
//

// IconCard
interface IconCardProps {
    Icon: React.ElementType;
    title: string;
    description: string;
}

const IconCard: React.FC<IconCardProps> = ({ Icon, title, description }) => (
    <div className="icon-card">
        <div className="icon-circle">
            <Icon />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

// ProjectCard — SLIDER + PDF
interface ProjectCardProps {
    title: string;
    description: string;
    pdfLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, pdfLink }) => (
    <div className="project-card">
        <div className="pdf-icon-large"><FaFilePdf /></div>

        <h3>{title}</h3>
        <p>{description}</p>

        <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="detail-link">
            PDF Görüntüle
        </a>
    </div>
);

// ServiceCard
interface ServiceCardProps {
    Icon: React.ElementType;
    title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title }) => (
    <div className="service-item">
        <div className="service-icon-circle">
            <Icon />
        </div>
        <h4>{title}</h4>
    </div>
);
