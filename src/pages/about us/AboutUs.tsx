import React, { useState } from "react";
import "./AboutUs.css";
import aboutUsBanner from "../../assets/aboutus.png";
import MemberDetailModal from "../memberdetail/MemberDetailModal";

import image from "../../assets/1.webp";
// Mevcut PDF'ler
import sozlesmePDF from "../../assets/sözlesme.pdf";
import isterimKimdirPDF from "../../assets/İSTERİM  KİMDİR.pdf";
// Yeni Eklenecek PDF
import atoRaporuPDF from "../../assets/isterim ato.pdf"; 

// CV Sabit Metinleri
const YIGIT_KOYMEN_CV = `Dr.Yiğit KÖYMEN
Doğum Tarihi ve Yeri : 27/10/1972- ORDU
Medeni Durumu : Bekar
Yabancı Dil : İngilizce (Çok İyi) 
Askerlik Durumu: Yapmış
Sigara: Kullanmıyor
Alkol: Kullanmıyor
Ehliyet: B Sınıfı
Telefon: 0538 267 31 33- 0551 405 04 38
akadli2000@yahoo.com
... (CV içeriği burada devam ediyor)
`;

const OGUZHAN_AKOVA_CV = `H.Oğuzhan AKOVA
2006 yılında TSK den akademik bilimsel, kültürel ve toplum yararına sosyal projelere daha fazla zaman ayırabilmek maksadıyla kendi isteği ile emekli oldu.
... (CV içeriği burada devam ediyor)
`;

// Üye Veri Tipi Tanımlaması (TypeScript için)
interface MemberData {
    name: string;
    role: string;
    cvContent: string;
    imageSrc: string;
}

// Üye Verileri
const members: MemberData[] = [
    {
        name: "Dr. Yiğit KÖYMEN",
        role: "Yönetim Kurulu Başkanı",
        cvContent: YIGIT_KOYMEN_CV,
        imageSrc: image,
    },
    {
        name: "H. Oğuzhan AKOVA",
        role: "Kurucu Ortak & Sanat-Eğitim Uzmanı",
        cvContent: OGUZHAN_AKOVA_CV,
        imageSrc: "https://picsum.photos/id/83/300/300",
    },
];

// Vizyon Metni
const ISTERIM_VISION_TEXT = `SS İSTERİM Değer Üretim Paylaşım ve Eğitim Sosyal İşletme Kooperatifi.
(SS İSTERİM Değer Yaratma, Paylaşım ve Eğitim Sosyal İşletme Kooperatifi)

21 Kasım 2023 tarihinde Ankara'da kurulan özel bir Sosyal İşletme Kooperatifiyiz.

Önceliğimiz, sosyal inovasyonlar, sosyal girişimcilik ve modüler akademik çalışmalar yoluyla kurumların, firmaların, STK'ların, belediyelerin ve yerel yönetimlerin sosyal kapasitelerini geliştirmektir.

Sağduyu geliştirmenin özü olan sürdürülebilir kalkınmaya odaklanarak, karmaşık yaşamın yeni ihtiyaçlarını karşılayacak yeni örgütlenme biçimleri tasarlamaya çalışıyoruz ve bu, şehir yaşam kalitemizi artırmamıza yardımcı olacaktır.
`;

// Metni paragraf ve satır sonlarına göre render eden fonksiyon
const renderVisionText = (text: string) => {
    const paragraphs = text.split("\n\n").map((paragraph, pIndex) => {
        const content = paragraph.trim().replace(/\n/g, "<br/>");
        return <p key={pIndex} dangerouslySetInnerHTML={{ __html: content }} />;
    });
    return paragraphs;
};

// SVG Dosya İkonu (Kurumsal görünüm için emojiden SVG'ye geçildi)
const FileTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
        <path d="M10 9H8"/>
        <path d="M16 13H8"/>
        <path d="M16 17H8"/>
    </svg>
);


const AboutUs: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState<MemberData | null>(null);

    const openModal = (member: MemberData) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMember(null);
    };

    return (
        <div className="about-us-container">
            {/* Banner */}
            <section className="about-banner">
                <div className="banner-overlay"></div>
                <img src={aboutUsBanner} alt="İsterim Koop" className="banner-image" />
                <div className="banner-content">
                    <div className="hero-badge">Hakkımızda</div>
                    <h1>Biz Kimiz</h1>
                    <p className="hero-subtitle">
                        Kooperatifimizin temelini oluşturan, yerel değerlere ve adil ticarete önem veren bir ekibiz.
                    </p>
                    <div className="hero-divider"></div>
                </div>
            </section>

            {/* Biz Kimiz / Vizyon */}
            <section className="about-main">
                <div className="about-text">
                    {renderVisionText(ISTERIM_VISION_TEXT)}

                    {/* PDF Kartları (Yeni Kurumsal ve Hizalanmış Yapı) */}
                    <div className="pdf-wrapper">

                        {/* 1. Sözleşme PDF Kartı */}
                        {/* <a> etiketi kullanıldı ve butonu alta sabitleyen wrapper eklendi */}
                        <a 
                            className="pdf-card" 
                            href={sozlesmePDF} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <div className="pdf-card-content">
                                <div className="pdf-card-icon">
                                    <FileTextIcon />
                                </div>
                                <div className="pdf-card-text">
                                    <h3>Sözleşme Önizleme</h3>
                                    <p>Kooperatifimizin resmi sözleşmesini görüntülemek için tıklayın.</p>
                                </div>
                            </div>
                            <div className="pdf-download-link-wrapper">
                                <span className="pdf-download-link">PDF İndir</span>
                            </div>
                        </a>

                        {/* 2. İsterim Kimdir PDF Kartı */}
                        <a 
                            className="pdf-card" 
                            href={isterimKimdirPDF} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <div className="pdf-card-content">
                                <div className="pdf-card-icon">
                                    <FileTextIcon />
                                </div>
                                <div className="pdf-card-text">
                                    <h3>İsterim Kimdir?</h3>
                                    <p>Kooperatifimizin kimliğini, misyonunu ve yapısını anlatan PDF.</p>
                                </div>
                            </div>
                            <div className="pdf-download-link-wrapper">
                                <span className="pdf-download-link">PDF İndir</span>
                            </div>
                        </a>

                        {/* 3. Yeni ATO Faaliyet Raporu PDF Kartı (ATO) */}
                        <a 
                            className="pdf-card" 
                            href={atoRaporuPDF} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <div className="pdf-card-content">
                                <div className="pdf-card-icon">
                                    <FileTextIcon />
                                </div>
                                <div className="pdf-card-text">
                                    <h3>ATO Faaliyet Raporu</h3>
                                    <p>Yıllık faaliyet raporumuzun detaylı dökümanına buradan ulaşabilirsiniz.</p>
                                </div>
                            </div>
                            <div className="pdf-download-link-wrapper">
                                <span className="pdf-download-link">PDF İndir</span>
                            </div>
                        </a>
                        
                    </div> 

                </div> 
            </section>

            {/* Ekip */}
            <section className="team-section">
                <h2>Kurucu Ekip ve Yönetim</h2>
                <div className="team-members">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="member-card"
                            onClick={() => openModal(member)}
                        >
                            <img src={member.imageSrc} alt={member.name} className="member-image" />
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                            <div className="member-bio">
                                <p>Detaylı özgeçmiş ve kooperatifimizdeki rolü için tıklayınız.</p>
                                <span className="member-link-placeholder">
                                    Özgeçmişi Gör <i className="arrow">→</i>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            <MemberDetailModal
                isOpen={isModalOpen}
                onClose={closeModal}
                member={selectedMember}
            />
        </div>
    );
};

export default AboutUs;