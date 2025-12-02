import React, { useState } from "react";
import "./AboutUs.css";
import aboutUsBanner from "../../assets/aboutus.png";
import MemberDetailModal from '../memberdetail/MemberDetailModal';

import image from '../../assets/1.webp';
import sozlesmePDF from '../../assets/sözlesme.pdf';

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
T.C Başbakanlık- Uzman          (1997-2002)

T.C Başbakanlık Özelleştirme İdaresi Başkanlığı-Uzman (2002-2004)

Aybim İletişim Ltd. Şti- Pazarlama ve İş Geliştirme Müdürü (2004-2005 7 ay)

PiramitnetIt, Bilişim, Danışmanlık Ltd. Şti – Pazarlama&Satış ve Bayilerden Sorumlu Genel Müdür Yrdc. (2005- 2006)

TBMM Ekonomi Uzmanı(2005- 2007 (Mayıs)

ICFFİANCİAL; Finansal Analiz ve Ankara Bölge Sorumlusu  (2009 Mart- Eylül) 

ArdisProje&Finans; Finansal Analiz ve İş Geliştirme Sorumlusu (2009 Ekim-2010 Mayıs)

Park Danışmanlık; Kosgeb Uzman Eğitmeni&Finansal Analiz ve Yatırım Sorumlusu, AB Proje Uzmanı  (2011 Mayıs-2012 Haziran)

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
2006 yılında TSK den akademik bilimsel, kültürel ve toplum yararına  sosyal projelere daha fazla zaman ayırabilmek maksadıyla kendi isteği ile emekli oldu. Endüstri Mühendisliği, Yönetim Bilişim Sistemleri alanında yüksek lisans, resim alanında özel öğrenci olarak yüksek lisans dersleri aldı. Akademik olarak halen İşletme alanında  doktora sonrası  çalışmalarina devam etmektedir. Yaşayan asker ressamlar sergileri yanında toplam 40 özel ve karma sergilere iştirak etti. GESAM sergi etkinliklerine 2016 yılından itibaren gerek sergi gerekse konferanslarda konuşmacı olarak  aktif olarak katılmaktadır.    "Cumhuriyetin Temeli Kültürdür." parolasından yola çıkarak  2020 yılında dört müzisyen grup arkadaşı ile birlikte  kurduğu  "İlk Adım Müzik" grubu ile konser etkinlikleri düzenledi. Birçok ulusal süreli dergide makale ve köşe yazarliginda bulundu.  Bigemag ve Şehri Söz adlı süreli dergilerde düzenli olarak köşe yazarlığı yanında halk eğitim merkezlerinde  gençlere Liderlik girişimcilik, kişisel gelişim alanlarında eğitimler vermektedir..Değişik STK larda topluma yararlı projelerde proje yöneticiliği ve eğiticiliği yapmakta, Bilgelik Vadisi adlı projesi ile " Değerlere Dayalı Toplum Tasarımı" temasıyla Sevgi ve Bilgi Mimarlığı eğitim programını 2024 Ocak ayında  hayata geçmiş "SS İSTERİM Değer Üretim Paylaşım ve Eğitim Sosyal İşletme  Kooperatifi" bünyesinde uluslararası bir kimlik kazandırmaya çalışarak, sanatın terapi ve Rehabilite edici ozelligini de Urla'da uluslararası sanat terapisi ekosistemi kurarak birbirini destekleyecek şekilde süreci yönetmektedir. Değişik bilimsel akademik makaleleri yanında " Bir Su Gibi Yasamak" adlı  basılmış bir kitabı,  bir ders kitabı ve katkı sağladığı bir akademik  editörlü kitaba bir bölüm ile katkı vermiştir. Ayrıca İlk Adım Müzik grubunu topluma ilham kaynağı verecek şekilde geliştirme yönündeki çalışmalarını özgün beste ve eser icraalarıyla destekleyici çalışmalarina devam etmektedir.İyi derecede İngilizce ve orta düzeyde Almanca bilmektedir. Ankara'da ikamet etmektedir.

Sevgi ve Bilgi Mimari
H.Oğuzhan Akova
0533 8193967
oguzhanakova2003@yahoo.com `;

interface MemberData {
    name: string;
    role: string;
    cvContent: string;
    imageSrc: string;
}

const members: MemberData[] = [
    { name: 'Dr. Yiğit KÖYMEN', role: 'Yönetim Kurulu Başkanı', cvContent: YIGIT_KOYMEN_CV, imageSrc: image },
    { name: 'H. Oğuzhan AKOVA', role: 'Kurucu Ortak & Sanat-Eğitim Uzmanı', cvContent: OGUZHAN_AKOVA_CV, imageSrc: 'https://picsum.photos/id/83/300/300' }
];

const ISTERIM_VISION_TEXT = `
BİZ KİMİZ
GENEL BAKIŞ-

• İnsan ( temel amaçları, varoluş sebebi, felsefi ahlaki duruşu
Ortak insanlık ideali. Bilgelik. Faydalı ve anlamlı bir yaşam.

• Gruplar. ( aile, mahalle, yerellik, ulus, STK’ lar, uluslararası, evrensel ) Anadolu’nun birlik bütünlük dirlik ve tevhid anlayışı

• Bireysel sosyal kapasite gelişim programı içeriği 11 tematik temel okuryazarlık becerileri yanında sanatla gelişelim, kendimizi inşa edelim programlarını ve sınırları ve kapasiteyi geliştirme yönünde yani kavrayış ve farkındalık kazanma niteliğini önceliklendirmektedir. Bunun etkinlik ve verimliliği için bir destek ve rehberlik programı öngörülmüştür. Siber ortamın bireyin optimum denge ve sürdürülebilirliği için yeniden tasarımı önemlidir. Ilgaz projesi ile uygulamalı olarak hayata geçirilmiştir.

• Kurumsal Sosyal Kapasite geliştirme programları. STK ların ya da yetenek odaklı platform ve ilgi gruplarının kurumsal örgütlenme ve yönetim yeteneklerini geliştirmeyi öngörmektedir. Kurumsal bağlamda Parçalanmışlıktan bütünselliğe yeni kavramsal araçların tasarımı. Sosyal Teknolojiler kavramı Siber güvenlik ve gelecek tasarımı gibi sosyal eko sistemi de içerecek şekilde yeni yetenek ve becerilerin kazandırılması, işbirliği ağlarının tesisi ve işletilmesi ön görülmektedir.

İSTERİM fonksiyonları;

-Metod ve Model ARGE'si

-Eğitim Danışmanlık ve Rehberlik

-Tasarım Kültürü

-Kavram ve fikir bankalarının kurulması ve işletilmesi İSTERİM SOSYAL İŞLETME KOOPERATİFİ’NİN sağlayabileceği ana hizmet alanı olacaktır.

-Sosyal sermayeyi optimum kullanmayı öngören toplumun bütününe hizmet verecek bir örgütlenme yaklaşımı sağlanacaktır.

Temel okuryazarlık alanları yanında ek özel olarak yeni okuryazarlık ve uzmanlık alanları tanımlanabilir. Örneğin grup üyemiz Prof, Dr. Erkan Işığıçok ‘un önerisiyle kendi uzmanlık alanlarından biri olan İstatistik Okuryazarlığı ek özel uzmanlık alanı olarak tanımlanmıştır. Bu durumda olan ve 10+1 Temel alana girmeyen alanlarda yeni uzmanlık alanları önerilebilir.

Benim açımdan İSTERİM;
3- Sevgiyi ve bilgiyi üretip paylaşabilmesidir.
4- İnsanlığa ilham kaynağı olabilmesidir.
5- Onbinlerce yıldır genetik miras olarak bize intikal eden Türk Kültür ve töresini Ata’mızın emanet ettiği TC Devlet modelinde hayata geçirilmesidir.
6- Değerler sistemine dayalı yeni bir uygarlık / medeniyet anlayışının temellerini bilim&akıl temelinde yeniden ele alınmasıdır.
7- Varlıklı olmaktan çok var olma çabasıdır.
8- Anadolu’nun sahip olduğu büyük kültürel sosyal felsefi ahlaki bilgeliğe sahiplenilmesidir.
9- İnsanlığa Türk Toplumu olarak bu bağlamda önderlik edebilmesidir.

Bu gerekçelerden dolayı bu topluluğun insanlığa ilham kaynağı olmasını İSTERİM.

AMACIMIZ VE FAALİYET ALANIMIZ
1- Dünyanın ve ülkemizin gelecekte karşılaşacağı ihtiyaçları önceden öngörerek bireysel ve kurumsal sosyal kapasitelerini geliştirecek, yeni kavrayış, farkındalık, beceri, yetenek ve yetkinliklerin kazandırılmasını sağlamak,

2- Ortak faaliyet alanlarına giren alanlarda ilgili ulusal ve uluslararası kişi kurum kuruluşlarla işbirlikleri geliştirmek, bilimsel akademik toplantı, konferans, eğitim, atölye çalışmaları organize etmek, yayın yapmak, toplumu geliştirici kitap ve dokümanlar hazırlamak,

3- Türk toplumunu her alanda geleceğe hazırlayacak çalışmaları yapmak ve bu çalışmalara zemin oluşturacak Anadolu Bilgeliğinin, Türk Töresi ve kültürü zemini üzerinden, Türkiye Cumhuriyeti’nin kazanımları doğrultusunda sürdürülebilir 10 temel okuryazarlık becerisiyle tesis edilmiş yeni toplumsal, bilimsel, teknolojik, kültürel, sosyal, toplumsal, ekonomik yaşam alanlarını inşa etmek,

4- Özellikle kadın ve gençleri yeni istihdam alanları oluşturacak şekilde nitelikli insan gücünün oluşturulmasını ve atıl kalan kaynakların katma değer yaratacak şekilde ekonomiye kazandırılmasını sağlamak,

5- Öncelikli faaliyet alanlarına yönelik Projeler hazırlamak ve yürütmek,
Öncelik sosyal beşeri kaynakların, ve fiziki olmayan kaynakların, geleceğin ihtiyaçları doğrultusunda yeniden yapılandırılmasıdır. Eğitim ve eğitimle ilgili her faaliyet bu bağlamda öncelikli çalışma alanını oluşturmaktadır.

6-Bölgemiz ve dünya genelinde gelişen iktisadi, güvenlik, hukuk ve uluslararası ilişkiler konularında çalışmalar yapacak bir stratejik araştırma merkezi kurmak

7-Ekolojik yaşam, zirai konular ve tarım&hayvancılık alanlarında, kırsal alanlarda bulunan tesis ve çiftliklerde amaçlarımıza uygun faaliyetler yapmak

MEKAN
Ankara Hacettepe Mahallesinde yer alan Hanzade konakta amaçlarımızla ilgili ve kamuya yararlı olacak şekilde etkinlikler ve programları Şubat 2020 den itibaren yürütmekteyiz.

YAPILMAKTA OLAN İŞLER

1- Sürdürülebilir bir Eko Sistemi tesis edemediğimizde en güçlü yapıların ve sistemlerin tarihte yıkılıp yokolup gittiği tarihsel bir gerçekliktir.
Bu yüzden grubumuzun bilgi birikimlerini birbirleriyle paylaşmalarına ve dayanışma ruhunun geliştirilmesine imkân sağlayacak birbirini besleyecek sistemin ortaya konulması faydalı olacaktır. Bu konuda sitemiz yanında mayıs ayından itibaren düzenli olarak eğitim konferans ve paylaşımlarımızı webinar tarzında etkinliklerle grup içi ve grup dışı halka açık faaliyetlerle sürdüreceğiz. Bu etkinlikler internet ortamında yayınlanacaktır. Bu yüzden katkılarınız ile ilgili olarak bir envanter çalışmasına ihtiyaç bulunmaktadır.
`;

const renderVisionText = (text: string) => {
    const paragraphs = text.split('\n\n').map((paragraph, pIndex) => {
        const content = paragraph.trim().replace(/\n/g, '<br/>');
        return <p key={pIndex} dangerouslySetInnerHTML={{ __html: content }} />;
    });
    return paragraphs;
};

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

                    {/* PDF Kart */}
                    <div className="pdf-card" onClick={() => window.open(sozlesmePDF, "_blank")}>
                        <div className="pdf-card-content">
                            <div className="pdf-card-thumbnail">
                                <span>PDF</span>
                            </div>
                            <div className="pdf-card-text">
                                <h3>Sözleşme Önizleme</h3>
                                <p>Kooperatifimizin resmi sözleşmesini görüntülemek veya indirmek için tıklayın.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ekip */}
            <section className="team-section">
                <h2>Kurucu Ekip ve Yönetim</h2>
                <div className="team-members">
                    {members.map((member, index) => (
                        <div key={index} className="member-card" onClick={() => openModal(member)}>
                            <img src={member.imageSrc} alt={member.name} className="member-image" />
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                            <div className="member-bio">
                                <p>Detaylı özgeçmiş ve kooperatifimizdeki rolü için tıklayınız.</p>
                                <span className="member-link-placeholder">Özgeçmişi Gör <i className="arrow">→</i></span>
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
