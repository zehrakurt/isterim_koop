import React from 'react';
import './home2.css'; // Stil dosyamızı import ediyoruz
// İkonlar için react-icons kütüphanesini kullandığımızı varsayalım
import { FaHandshake, FaUsers, FaLeaf, FaLightbulb, FaBox, FaGraduationCap, FaUsersCog, FaCheckCircle } from 'react-icons/fa';

const Home2: React.FC = () => {
    return (
        <div className="page-container">
            {/* --- Üst Banner Alanı --- */}
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

            {/* --- Hakkımızda Bölümü --- */}
            <section className="section about-us">
                <div className="section-title">
                    <h2>Hakkımızda</h2>
                </div>
                <p className="about-description">
                    Kooperatifinizle yaralı topluluklara kanat, sağlayan sürdürülebilir projeler geliştirir 
                    ve sempatiyi ön planda kılar. Memnuniyet, kurumsallığın yegane kalitesini temin etmek zorundadır.
                </p>
                <div className="icon-cards-container">
                    <IconCard 
                        Icon={FaHandshake} 
                        title="Şeffaflık" 
                        description="Dosyalara erişimi sağlayan gerçek zamanlı prototip." 
                    />
                    <IconCard 
                        Icon={FaUsers} 
                        title="Topluluk" 
                        description="Rizikosundaki yangınlara karşı duyarlılığın azalması." 
                    />
                    <IconCard 
                        Icon={FaLeaf} 
                        title="Sürdürülebilirlik" 
                        description="Başarılı olan yönetim görünüyor." 
                    />
                    <IconCard 
                        Icon={FaLightbulb} 
                        title="İnovasyon" 
                        description="Bizimle iletişime geçin, hemen ulaşın." 
                    />
                </div>
            </section>

            {/* --- Projelerimiz Bölümü --- */}
            <section className="section projects">
                <div className="section-title">
                    <h2>Projelerimiz</h2>
                </div>
                <div className="card-grid">
                    <ProjectCard 
                        imageSrc="https://via.placeholder.com/300x160/c8e6c9/333333?text=Ruzgar+Turbini"
                        title="Yeşil Enerji Projesi"
                        description="Sürdürülebilir enerji kaynaklarının kullanımı."
                    />
                    <ProjectCard 
                        imageSrc="https://via.placeholder.com/300x160/c8e6c9/333333?text=Toprak"
                        title="Topluluk Bahçesi"
                        description="Organik tarıma odaklanan üretim süreci."
                    />
                    <ProjectCard 
                        imageSrc="https://via.placeholder.com/300x160/c8e6c9/333333?text=Ciftci"
                        title="Sürdürülebilir Tarım"
                        description="Doğru yöntemlerle tarımın desteklenmesi."
                    />
                    <ProjectCard 
                        imageSrc="https://via.placeholder.com/300x160/c8e6c9/333333?text=Gunes+Paneli"
                        title="Atık Yönetimi"
                        description="Atıkların yeniden kullanımı ve bertarafı."
                    />
                </div>
            </section>

            {/* --- Hizmetlerimiz Bölümü --- */}
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

            {/* --- Alt Bildirim Alanı --- */}
            <section className="section feedback-banner">
                <div className="feedback-content">
                    <h3>Geri Bildirimler</h3>
                    <p>Neler yaptığınızı gösteren gerçek bir geri bildirim?</p>
                    <p className="small-text">Soru sormak, haberdar olmak, yeni bir program başlatmak.</p>
                </div>
            </section>
        </div>
    );
}

export default Home2;

// --- Yardımcı Bileşenler ---

// 1. İkon Kart Bileşeni (Hakkımızda bölümü için)
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

// 2. Proje Kartı Bileşeni (Projelerimiz bölümü için)
interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description }) => (
    <div className="project-card">
        <div className="card-image-container">
            <img src={imageSrc} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="detail-link">Detaylı Gör</a>
    </div>
);

// 3. Hizmet Kartı Bileşeni (Hizmetlerimiz bölümü için)
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