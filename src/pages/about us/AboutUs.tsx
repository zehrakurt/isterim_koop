import React, { useState, useEffect, useRef } from "react"; 
import "./AboutUs.css";
import MemberDetailModal from "../memberdetail/MemberDetailModal";

// SLIDER GÖRSELLERİ İÇİN YENİ İMPORTLAR (Yolunuzu kontrol edin)
import sliderImage1 from "../../assets/slider1.jpg"; 
import sliderImage2 from "../../assets/slider2.jpg"; 
import sliderImage3 from "../../assets/slider3.jpg"; 

import image from "../../assets/1.webp";
// Mevcut PDF'ler
import sozlesmePDF from "../../assets/sözlesme.pdf";
import isterimKimdirPDF from "../../assets/İSTERİM  KİMDİR.pdf";
import atoRaporuPDF from "../../assets/isterim ato.pdf"; 

// CV Sabit Metinleri (Aynı Kalır)
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
ÖĞRENİM DURUMU

 Mimar Kemal İlkokulu, Ankara
 Namık Kemal Ortaokulu, Ankara
Ankara Lisesi, Ankara
ÖN LİSANS/Prep. School:Bilkent Üniversitesi, Ankara
LİSANS: İktisadi ve İdari Bilimler Fakültesi, Uluslararası İlişkiler (İktisat Ağırlıklı) Bölümü, İngilizce, Doğu Akdeniz Üniversitesi, KKTC
MASTER: Sosyal Bilimler Enstitüsü, Uluslararası İlişkiler Bölümü, İngilizce-Türkçe, Atılım Üniversitesi, Ankara, (Tez Konusu: Türk Dış Politikası’nınDoksanlı Yıllarda AB Perspektifinden Değerlendirilmesi)

DOKTORA: ATILIM Üniversitesi, İktisat Ana Bilim Dalı 

İŞ TECRÜBESİ

TRI-NET A.Ş- Human Resource Manager (1996)

T.C Başbakanlık- Uzman Yrdc (1996-1997)
T.C Başbakanlık- Uzman          (1997-2002)

T.C Başbakanlık Özelleştirme İdaresi Başkanlığı-Uzman (2002-2004)

Aybim İletişim Ltd. Şti- Pazarlama ve İş Geliştirme Müdürü (2004-2005 7 ay)

PiramitnetIt, Bilişim, Danışmanlık Ltd. Şti – Pazarlama&Satış ve Bayilerden Sorumlu Genel Müdür Yrdc. (2005- 2006)

TBMM Ekonomi Uzmanı(2005- 2007 (Mayıs)

ICFFİANCİAL; Finansal Analiz ve Ankara Bölge Sorumlusu  (2009 Mart- Eylül) 

ArdisProje&Finans; Finansal Analiz ve İş Geliştirme Sorumlusu (2009 Ekim-2010 Mayıs)

Park Danışmanlık; Kosgeb Uzman Eğitmeni&Finansal Analiz ve Yatırım Sorumlusu, AB Proje Uzmanı  (2011 Mayıs-2012 Haziran)

Çelik Türk Kariyer ve İstihdam Akademisi; Uzman Eğitmen ve Genel Müdür Yardımcısı -MEB ve İŞ-KUR Onaylı Bilgisayarlı-Muhasebe, Dış-Ticaret, Finans ve Parakendecilik&Mağazacılık Eğitmenliği (2012-Mayıs-2013 Haziran)

Ankara Data Akademi- Kariyer Planlama- İktisat Eğitmenliği- (2017)

GOLDENSHEAF HAYVANCILIK VE YEM SANAYİ. DIŞ TİCARET VE FİNANSTAN SORUMLU CFO- 2017- 2019

Y&K GROUP LTD ŞTİ- GENEL MÜDÜR 2019-

www.kadinelinden.com şirket sahibi

Ankara Kariyer Merkezi; Dış Ticaret Eğitmenliği

Sirketortagım.com- Resmi Danışman (Şirket Evlilikleri ve Yatırım&İş Planı Hazırlama v.b) 

Kosgeb-Uygulamalı Girişimcilik Eğitmenliği-Ağrı-Osmaniye-Bayburt 

Başbakanlıkta uzman olarak bulunduğum süre boyunca; Dış Ekonomik İlişkiler, Terör, Organize Suçlar, E-devlet üzerine çalışmalarım oldu. MGK Genel Sekreterliği, İç İşleri Bakanlığı gibi farklı resmi kurum ve kuruluşlarda çeşitli oturumlar ve toplantılara başkan veya katılımcı olarak iştirak ettim. Çok farklı illerde kısa süreli görev yaptım. Yurtdışından gelen yabancı heyetlerle yapılan toplantılarda hem katılımcı hem tercüman olarak bulundum. ÖİB’de çalıştığım süre içerisinde de, Dünya Bankası ve IMF’den gelen heyetlerle, Hazine Müsteşarlığı, Ulaştırma Bakanlığı, Yabancı Danışmanlık şirketlerinin ve diğer ilgili kuruluşların katıldığı farklı toplantılara ve çalışmalara, gerek uzmanı olduğum Türk Telekom’un özelleştirilmesi projesi ile ilgili gerekse de genel özelleştirme politikaları ile ilgili hususlarda iştirak ettim. Dış Politika, AB, Özelleştirme, Eğitim, Ekonomi, E-Devlet, Yerel Yönetimler ve Bilişim konularında araştırmalarım ve çeşitli gazete ile dergilerde yayımlanmış çalışmalarım&röportajlarım bulunmaktadır. Çeşitli haber sitelerinde, Ekonomi-İç Politika, Dış Politika ve çeşitli konularında yazarlık yaptım. Özel sektörde ise ağırlıklı olarak insan kaynakları alanına giren hususlar, iş geliştirme metotları, müşteri odaklı büyüme stratejileri, bayi toplantıları, AB, Tübitak, Kalkınma Ajanslarının Projeleri ve Kosgeb Projeleri, yeni bölge veya şehir bayisi bulma, satış destek faaliyetlerini koordine etme, satış odaklı personel eğitimi, müşteri ve bayii ziyaretleri, şirkete kurumsal kimlik kazandırma çalışmaları, sözleşme hazırlama ve takibi, bürokratik işlemleri takip, finansal analiz, bankacılık ve bütçe işlemleri, turistik tesis işletmeciliği ve devre mülk pazarlamasıile verimlilik bazlı çalışma teknikleri, KPSS İktisat&işletme eğitmenliği vb. işlemler üzerinde yoğunlaştım. Ayrıca, Kosgeb kapsamında, İş-Kur ile birlikte verilen girişimcilik, kasiyerlik ve mağazacılık&parekendecilik kurslarının ve Kosgeb desteklerinin uzman eğitmenliğini yapmaktayım. Pazarlama, yatırım danışmanlığı, iş planı hazırlama, proje finansmanı (yurt içi ve yuırt dışı) gibi konularda Bayburt, Osmaniye, Ağrı, Muğla’da eğitimler ve seminerler verdim ve projeler hazırladım. İmalat sanayinde bulunan pek çok firmaya da çeşitli konularda danışmanlık yaptım. En son (2016 yılı) olarak ise Orman Genel Müdürlüğü’nde çeşitli konularda (8 ayrı başlık) eğitimler verdim. Yayımlanmıs çok sayıda şiirim ve iki kitabım bulunmaktadır. Halen Çalışma Bakanlığına bağlı MYK bünyesindeki firmaların planlama sorumluluğu yapmaktayım ve. İktisat doktora tezimi yazmaktayım.

ÜYE OLDUĞU DERNEKLER;

Ekonomistler Derneği
Türkiye Üstün Zekalı ve Özel Yetenekli Öğrencilere Eğitim ve Araştırma Konularında Yardım Derneği
Türkiye Bilişim Derneği
Barınak Gönülleri Derneği
Ankara Hayvanları Koruma Platformu   
Üsiad (Üretken Sanayici Ve İşadamları Derneği)
İsterim Sosyal İşletme Kooperatifi

SERTİFİKALAR:

Forex Uzmanlığı/1 Ay/ 2010/TeleTrade-2012
Currency Trading-Ankara-2016
Bilgisayar İşletmenliği/1 ay/Ankara Üniversitesi S.B.F-1999
Bilgisayar İşletmenliği/6 ay/T.C Başbakanlık-1996
Finans Eğitimi/45 Saat/Zenith Blue-2010
İş Planı Hazırlama/48 Saat/Zenith Blue-2010
Pazarlama ve Satış/48 Saat/Zenith Blue-2010
Proje Yönetimi/48 Saat/ Zenith Blue-2010
Dış Ticaret/48 Saat/ Zenith Blue-2010
SPK Lisansı/Borsa İstanbul-2014 
E-Ticaret ve Dış Ticaret-Ankara-2020
Eğitimcinin Eğitimi- Ankara-2021 
European Unıon Good Governance-İstanbul Altınbaşak Üniversitesi- 2020
Myk 5- Emlak Yönetimi-2024 

`;

const OGUZHAN_AKOVA_CV = `H.Oğuzhan AKOVA
2006 yılında TSK den akademik bilimsel, kültürel ve toplum yararına  sosyal projelere daha fazla zaman ayırabilmek maksadıyla kendi isteği ile emekli oldu. Endüstri Mühendisliği, Yönetim Bilişim Sistemleri alanında yüksek lisans, resim alanında özel öğrenci olarak yüksek lisans dersleri aldı. Akademik olarak halen İşletme alanında  doktora sonrası  çalışmalarina devam etmektedir. Yaşayan asker ressamlar sergileri yanında toplam 40 özel ve karma sergilere iştirak etti. GESAM sergi etkinliklerine 2016 yılından itibaren gerek sergi gerekse konferanslarda konuşmacı olarak  aktif olarak katılmaktadır.    "Cumhuriyetin Temeli Kültürdür." parolasından yola çıkarak  2020 yılında dört müzisyen grup arkadaşı ile birlikte  kurduğu  "İlk Adım Müzik" grubu ile konser etkinlikleri düzenledi. Birçok ulusal süreli dergide makale ve köşe yazarliginda bulundu.  Bigemag ve Şehri Söz adlı süreli dergilerde düzenli olarak köşe yazarlığı yanında halk eğitim merkezlerinde  gençlere Liderlik girişimcilik, kişisel gelişim alanlarında eğitimler vermektedir..Değişik STK larda topluma yararlı projelerde proje yöneticiliği ve eğiticiliği yapmakta, Bilgelik Vadisi adlı projesi ile " Değerlere Dayalı Toplum Tasarımı" temasıyla Sevgi ve Bilgi Mimarlığı eğitim programını 2024 Ocak ayında  hayata geçmiş "SS İSTERİM Değer Üretim Paylaşım ve Eğitim Sosyal İşletme  Kooperatifi" bünyesinde uluslararası bir kimlik kazandırmaya çalışarak, sanatın terapi ve Rehabilite edici ozelligini de Urla'da uluslararası sanat terapisi ekosistemi kurarak birbirini destekleyecek şekilde süreci yönetmektedir. Değişik bilimsel akademik makaleleri yanında " Bir Su Gibi Yasamak" adlı  basılmış bir kitabı,  bir ders kitabı ve katkı sağladığı bir akademik  editörlü kitaba bir bölüm ile katkı vermiştir. Ayrıca İlk Adım Müzik grubunu topluma ilham kaynağı verecek şekilde geliştirme yönündeki çalışmalarını özgün beste ve eser icraalarıyla destekleyici çalışmalarina devam etmektedir.İyi derecede İngilizce ve orta düzeyde Almanca bilmektedir. Ankara'da ikamet etmektedir.

Sevgi ve Bilgi Mimari
H.Oğuzhan Akova
0533 8193967
oguzhanakova2003@yahoo.com 
`;

// Üye Veri Tipi Tanımlaması (Aynı Kalır)
interface MemberData {
    name: string;
    role: string;
    cvContent: string;
    imageSrc: string;
}

// Üye Verileri (Aynı Kalır)
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

/* GÜNCELLENMİŞ VİZYON METNİ */
const ISTERIM_VISION_TEXT = `SS İSTERİM Değer Üretim Paylaşım ve Eğitim Sosyal İşletme Kooperatifi.
(SS İSTERİM Değer Yaratma, Paylaşım ve Eğitim Sosyal İşletme Kooperatifi)

21 Kasım 2023 tarihinde Ankara'da kurulan özel bir Sosyal İşletme Kooperatifiyiz.

Önceliğimiz, sosyal inovasyonlar, sosyal girişimcilik ve modüler akademik çalışmalar yoluyla kurumların, firmaların, STK'ların, belediyelerin ve yerel yönetimlerin sosyal kapasitelerini geliştirmektir.

Sağduyu geliştirmenin özü olan sürdürülebilir kalkınmaya odaklanarak, karmaşık yaşamın yeni ihtiyaçlarını karşılayacak yeni örgütlenme biçimleri tasarlamaya çalışıyoruz ve bu, şehir yaşam kalitemizi artırmamıza yardımcı olacaktır.

Tematik araştırma alanlarımız:

İnsan ve Doğa
Bilim ve Teknoloji
Kültür ve Sanat
Eğitim ve Tasarım
Sağlık, Spor ve Sosyal Güvenlik
Hukuk
Finans
Proje Yönetimi Kültür ve Girişimcilik
Gelecek ve Güvenlik

Sosyal kooperatifimiz Ankara Kent Konseyi üyesidir. İlgi alanlarımız şunlardır:
Kırsal kalkınma
Kültürel diploma
Sosyal inovasyon

2026 PROJELERİ

2026 yılı için yıllık projelerimizi programlıyoruz. Bilgelik Vadisi ve Bilgelik Treni. Amacımız, sivil toplum aktörlerini bir araya getirerek sosyal kuruluşların sosyal kapasitelerini geliştirmektir.`;

// GÜNCELLENMİŞ renderVisionText fonksiyonu: React.ReactNode[] olarak tip güncellendi.
const renderVisionText = (text: string): React.ReactNode[] => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = []; // JSX.Element[] yerine React.ReactNode[] kullanıldı
    let currentParagraph: string[] = [];
    let keyIndex = 0;
    let hasRenderedFirstParagraph = false;

    const flushParagraph = () => {
        if (currentParagraph.length > 0) {
            const content = currentParagraph.join('<br/>').trim();
            if (content) {
               const isFirstContent = 
    !elements.some(e => 
      React.isValidElement(e) && 
      (e.type === 'h3' || e.type === 'h4')
    ) 
    && !hasRenderedFirstParagraph;
  
                elements.push(
                    <p 
                        key={keyIndex++} 
                        dangerouslySetInnerHTML={{ __html: content }} 
                        className={isFirstContent ? 'first-paragraph' : ''}
                    />
                );
                if (isFirstContent) {
                    hasRenderedFirstParagraph = true;
                }
            }
            currentParagraph = [];
        }
    };

    lines.forEach(line => {
        const trimmedLine = line.trim();

        if (trimmedLine.startsWith('###')) {
            flushParagraph();
            const content = trimmedLine.substring(3).trim();
            elements.push(<h3 key={keyIndex++}>{content}</h3>);
        } else if (trimmedLine.startsWith('####')) {
            flushParagraph();
            const content = trimmedLine.substring(4).trim();
            elements.push(<h4 key={keyIndex++}>{content}</h4>);
        } else if (trimmedLine === '') {
            flushParagraph();
        } else {
            currentParagraph.push(trimmedLine);
        }
    });

    flushParagraph(); 

    return elements;
};

// SVG Dosya İkonu (Aynı Kalır)
const FileTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
        <path d="M10 9H8"/>
        <path d="M16 13H8"/>
        <path d="M16 17H8"/>
    </svg>
);

// SLIDER GÖRSELLERİ LİSTESİ (Aynı Kalır)
const sliderImages = [
    sliderImage1,
    sliderImage2,
    sliderImage3
];


const AboutUs: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState<MemberData | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0); 
    const sliderRef = useRef<HTMLDivElement>(null); 

    // Otomatik Slayt Geçişi
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
        }, 5000); 

        return () => clearInterval(interval);
    }, []);

    // Slayt değiştikçe kaydırmayı sağla
    useEffect(() => {
        if (sliderRef.current) {
            const width = sliderRef.current.clientWidth;
            sliderRef.current.scrollTo({
                left: currentSlide * width,
                behavior: 'smooth'
            });
        }
    }, [currentSlide]);

    const openModal = (member: MemberData) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMember(null);
    };

    return (
        <div className="about-koo-container"> {/* DEĞİŞTİ */}
            {/* Banner - TAM GENİŞLİK */}
            <section className="about-koo-banner"> {/* DEĞİŞTİ */}
                <div className="about-koo-banner-slider" ref={sliderRef}> {/* DEĞİŞTİ */}
                    {sliderImages.map((imageSrc, index) => (
                        <div key={index} className="about-koo-slide" style={{ backgroundImage: `url(${imageSrc})` }}> {/* DEĞİŞTİ */}
                        </div>
                    ))}
                </div>

                <div className="about-koo-banner-overlay"></div> {/* DEĞİŞTİ */}
            </section>
            
            {/* Biz Kimiz / Vizyon - GÜNCELLENMİŞ KURUMSAL TASARIM */}
            <section className="about-koo-main about-koo-sectionn"> {/* DEĞİŞTİ ve genel section stilini ekledik */}
                <div className="about-koo-main-header"> {/* DEĞİŞTİ */}
                    <h2>Biz Kimiz</h2>
                    
                </div>
                <div className="about-koo-text"> {/* DEĞİŞTİ */}
                    {renderVisionText(ISTERIM_VISION_TEXT)}

                    {/* PDF Kartları (3 Yan Yana) */}
                    <div className="about-koo-pdf-wrapper"> {/* DEĞİŞTİ */}
                        <a className="about-koo-pdf-card" href={sozlesmePDF} target="_blank" rel="noopener noreferrer"> {/* DEĞİŞTİ */}
                            <div className="about-koo-pdf-card-content"> {/* DEĞİŞTİ */}
                                <div className="about-koo-pdf-card-icon"><FileTextIcon /></div> {/* DEĞİŞTİ */}
                                <div className="about-koo-pdf-card-text"><h3>Sözleşme Önizleme</h3><p>Kooperatifimizin resmi sözleşmesini görüntülemek için tıklayın.</p></div> {/* DEĞİŞTİ */}
                            </div>
                            <div className="about-koo-pdf-download-link-wrapper"><span className="about-koo-pdf-download-link">PDF İndir</span></div> {/* DEĞİŞTİ */}
                        </a>
                        <a className="about-koo-pdf-card" href={isterimKimdirPDF} target="_blank" rel="noopener noreferrer"> {/* DEĞİŞTİ */}
                            <div className="about-koo-pdf-card-content"> {/* DEĞİŞTİ */}
                                <div className="about-koo-pdf-card-icon"><FileTextIcon /></div> {/* DEĞİŞTİ */}
                                <div className="about-koo-pdf-card-text"><h3>İsterim Kimdir?</h3><p>Kooperatifimizin kimliğini, misyonunu ve yapısını anlatan PDF.</p></div> {/* DEĞİŞTİ */}
                            </div>
                            <div className="about-koo-pdf-download-link-wrapper"><span className="about-koo-pdf-download-link">PDF İndir</span></div> {/* DEĞİŞTİ */}
                        </a>
                        <a className="about-koo-pdf-card" href={atoRaporuPDF} target="_blank" rel="noopener noreferrer"> {/* DEĞİŞTİ */}
                            <div className="about-koo-pdf-card-content"> {/* DEĞİŞTİ */}
                                <div className="about-koo-pdf-card-icon"><FileTextIcon /></div> {/* DEĞİŞTİ */}
                                <div className="about-koo-pdf-card-text"><h3>ATO Faaliyet Raporu</h3><p>Yıllık faaliyet raporumuzun detaylı dökümanına buradan ulaşabilirsiniz.</p></div> {/* DEĞİŞTİ */}
                            </div>
                            <div className="about-koo-pdf-download-link-wrapper"><span className="about-koo-pdf-download-link">PDF İndir</span></div> {/* DEĞİŞTİ */}
                        </a>
                    </div> 

                </div> 
            </section>

            {/* Ekip (Aynı kalır) */}
            <section className="about-koo-team-section about-koo-section"> {/* DEĞİŞTİ */}
                <h2>Kurucu Ekip ve Yönetim</h2>
                <div className="about-koo-team-members"> {/* DEĞİŞTİ */}
                    {members.map((member, index) => (
                        <div key={index} className="about-koo-member-card" onClick={() => openModal(member)}> {/* DEĞİŞTİ */}
                            <img src={member.imageSrc} alt={member.name} className="about-koo-member-image" /> {/* DEĞİŞTİ */}
                            <h3 className="about-koo-member-name">{member.name}</h3> {/* DEĞİŞTİ */}
                            <p className="about-koo-member-role">{member.role}</p> {/* DEĞİŞTİ */}
                            <div className="about-koo-member-bio"> {/* DEĞİŞTİ (Eski: member-bio) */}
                                <p>Detaylı özgeçmiş ve kooperatifimizdeki rolü için tıklayınız.</p>
                                <span className="about-koo-member-link-placeholder">Özgeçmişi Gör <i className="arrow">→</i></span> {/* DEĞİŞTİ */}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal (Modal Component'i dışarıdan geldiği için içindeki sınıfları etkilemedik) */}
            <MemberDetailModal
                isOpen={isModalOpen}
                onClose={closeModal}
                member={selectedMember}
            />
        </div>
    );
};

export default AboutUs;