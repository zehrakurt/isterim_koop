import React, { useRef } from 'react';
import './home2.css';

// PDF Dosyaları
import proje1 from './assets/proje1.pdf';
import proje2 from './assets/proje2.pdf';
import proje3 from './assets/proje3.pdf';
import proje4 from './assets/proje4.pdf';
import proje5 from './assets/proje5.pdf';
import proje6 from './assets/proje6.pdf';

// Hero resmi
import heroImage from './assets/slider1.jpg';

// İkonlar
import { 
    FaHandshake, FaUsers, FaLightbulb, 
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
            <header 
                className="hero-banner"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="content">
                    <h1>İsterim Kooperatif</h1>
                    <p>Değer Üretim Paylaşım ve Eğitim Sosyal İşletme Kooperatifi.</p>
                    <div className="actions">
                        <a href="/akademi-1" className="btn btn-primary">Akademi</a>
                        <a href="/iletisim" className="btn btn-secondary">İletişim</a>
                    </div>
                </div>
            </header>

            {/* HAKKIMIZDA */}
            <section className="section about-us">
                <div className="section-title">
                    <h2>Hakkımızda</h2>
                </div>

                <p className="about-description">
                    Sosyal ve kültürel konularda kar amacı gütmeden,
                    STÖ'ler ve resmi kurumlar ile ortak projeler geliştirmek.
                    Stratejik ve iktisadi konularda bilimsel çalışmalar yapmak.
                    Sanat, doğa sporları ve ekolojik turizm faaliyetleri organize etmek.
                    Doğal yaşam, organik tarım konularında kırsal bölgelerde yerinde uygulamalar yapmak.
                    Kadın üreticiler ve kadın kooperatiflerinin faaliyetlerine destek vermek.
                    Tarihi ve arkeolojik eserlerimize sahip çıkmak ve tanıtmak.
                </p>

                <div className="icon-cards-container">
                    <IconCard 
                        Icon={FaHandshake} 
                        title="Kooperatifçilik Kavramı ve Önemi" 
                        description="Kooperatiflerin tanımı, önemi ve tarihsel gelişimi." 
                    />

                    <IconCard 
                        Icon={FaUsers} 
                        title="Kooperatif Genel Kurulu" 
                        description="Genel kurulun görevleri, yetkileri ve çalışma süreçleri." 
                    />

                    <IconCard 
                        Icon={FaUsersCog} 
                        title="Yönetim ve Denetim Kurulu" 
                        description="Kurulların görevleri, sorumlulukları ve işleyişi." 
                    />

                    <IconCard 
                        Icon={FaLightbulb} 
                        title="Kooperatiflerde Girişimcilik" 
                        description="Yenilikçilik, rekabet gücü ve proje geliştirme faaliyetleri." 
                    />
                </div>
            </section>

            {/* PROJELER SLIDER */}
            <section className="section projects">
                <div className="section-title">
                    <h2>Projelerimiz</h2>
                </div>

                <div className="slider-container">

                    <button className="slider-btn left" onClick={scrollLeft}>
                        <FaChevronLeft />
                    </button>

                    <div className="slider" ref={sliderRef}>
                        <ProjectCard title="Kadın Elinden" description="Kadın üreticilerin ürünlerini tek bir sayfada buluşturuyoruz." pdfLink={proje1} />
                        <ProjectCard title="Sosyal Farkındalık Projesi" description="Ortaklık payının en az %50’si kadın olan işletmeler." pdfLink={proje2} />
                        <ProjectCard title="Bilgelik Treni" description="Anadolu bilgeliğine dayalı değer odaklı toplum tasarımı." pdfLink={proje3} />
                        <ProjectCard title="Bilgelik İsterim" description="Değişen dünyaya uyum sağlayan düşünce ve yaşam yaklaşımı." pdfLink={proje4} />
                        <ProjectCard title="Bilgelik Treni Ankara" description="Gençler, kadınlar, üniversite öğrencileri ve STK'lar hedef kitlemizdir." pdfLink={proje5} />
                        <ProjectCard title="Değer Üretimi ve Paylaşımı" description="Değer üretim odaklı bir toplum inşası hedeflenmektedir." pdfLink={proje6} />
                    </div>

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
                    <ServiceCard Icon={FaCheckCircle} title="Proje ve Destek Yönetimi" />
                </div>
            </section>

            {/* ALT BİLDİRİM */}
           {/* ALT BİLDİRİM */}
<section className="section feedback-banner">
    <div className="feedback-content">
        <h3>Bilgi Paylaştıkça Çoğalır</h3>
        <p>Eğitimler, programlar ve etkinliklerle kooperatif bilincini yaygınlaştırıyoruz.</p>
        <p className="small-text">Kooperatifçilik alanında bilgi, eğitim ve toplumsal dönüşüm odaklı programlar yürütüyoruz.</p>
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
