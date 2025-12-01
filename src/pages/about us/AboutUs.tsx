import React, { useState } from "react";
import "./AboutUs.css";
import aboutUsBanner from "../../assets/aboutus.png";
import MemberDetailModal from '../memberdetail/MemberDetailModal'; // Modal bileşenini import edin

import image from '../../assets/1.webp';


const YIGIT_KOYMEN_CV = `
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
ÖN LİSANS/Prep. School: Bilkent Üniversitesi, Ankara
LİSANS: İktisadi ve İdari Bilimler Fakültesi, Uluslararası İlişkiler (İktisat Ağırlıklı) Bölümü, İngilizce, Doğu Akdeniz Üniversitesi, KKTC
MASTER: Sosyal Bilimler Enstitüsü, Uluslararası İlişkiler Bölümü, İngilizce-Türkçe, Atılım Üniversitesi, Ankara, (Tez Konusu: Türk Dış Politikası’nınDoksanlı Yıllarda AB Perspektifinden Değerlendirilmesi)
DOKTORA: ATILIM Üniversitesi, İktisat Ana Bilim Dalı 

İŞ TECRÜBESİ
... (Detaylı CV içeriği devam ediyor) ...
`;

const OGUZHAN_AKOVA_CV = `
2006 yılında TSK den akademik bilimsel, kültürel ve toplum yararına sosyal projelere daha fazla zaman ayırabilmek maksadıyla kendi isteği ile emekli oldu. Endüstri Mühendisliği, Yönetim Bilişim Sistemleri alanında yüksek lisans, resim alanında özel öğrenci olarak yüksek lisans dersleri aldı. Akademik olarak halen İşletme alanında doktora sonrası çalışmalarina devam etmektedir.

Yaşayan asker ressamlar sergileri yanında toplam 40 özel ve karma sergilere iştirak etti. GESAM sergi etkinliklerine 2016 yılından itibaren gerek sergi gerekse konferanslarda konuşmacı olarak aktif olarak katılmaktadır. 
... (Detaylı CV içeriği devam ediyor) ...
`;

interface MemberData {
    name: string;
    role: string;
    cvContent: string;
    imageSrc: string;
}

const members: MemberData[] = [
    {
        name: 'Dr. Yiğit KÖYMEN',
        role: 'Yönetim Kurulu Başkanı',
        cvContent: YIGIT_KOYMEN_CV,
        imageSrc: image
    },
    {
        name: 'H. Oğuzhan AKOVA',
        role: 'Kurucu Ortak & Sanat-Eğitim Uzmanı',
        cvContent: OGUZHAN_AKOVA_CV,
        imageSrc: 'https://picsum.photos/id/83/300/300'
    }
];

// SİZİN SAĞLADIĞINIZ METİN (Orijinal yapısı korundu)
const ISTERIM_VISION_TEXT = `
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

// Metni, HTML'de satır sonlarını (<br/>) ve çift satır sonlarını (<p></p>) kullanarak işlemek için bir fonksiyon
const renderVisionText = (text: string) => {
    // Çift satır sonlarını (paragrafları) ayır
    const paragraphs = text.split('\n\n').map((paragraph, pIndex) => {
        // Her paragraf içindeki tek satır sonlarını <br/> ile değiştir
        const content = paragraph.trim().replace(/\n/g, '<br/>');
        return <p key={pIndex} dangerouslySetInnerHTML={{ __html: content }} />;
    });
    return paragraphs;
};

// --- BİLEŞEN ---
const AboutUs: React.FC = () => {
    // Modal Durum Yönetimi
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
      
      {/* 1. BANNER BÖLÜMÜ */}
      <section className="about-banner">
        <div className="banner-overlay"></div>
        <img src={aboutUsBanner} alt="İsterim Koop" className="banner-image" />
        <div className="banner-content">
          <div className="hero-badge">Hakkımızda</div>
          <h1>Biz Kimiz</h1>
          <p className="hero-subtitle">
            Kooperatifimizin temelini oluşturan, yerel değerlere ve adil ticarete önem veren bir ekibiz. Misyonumuz, üreticiyi ve tüketiciyi doğrudan buluşturan şeffaf bir platform yaratmaktır.
          </p>
          <div className="hero-divider"></div>
        </div>
      </section>

      {/* 2. HİKAYEMİZ / VİZYON BÖLÜMÜ (İstenen metin olduğu gibi eklendi) */}
      <section className="about-main">
        <div className="about-text">
          <h2>BİZ KİMİZ</h2>
          
          {/* Metni, orijinal yapısını koruyarak render et */}
          {renderVisionText(ISTERIM_VISION_TEXT)}

        </div>
      </section>

      {/* 3. EKİBİMİZ BÖLÜMÜ (Aynı kaldı) */}
      <section className="team-section">
        <h2>Kurucu Ekip ve Yönetim</h2>
        <p className="team-subtitle"></p>
        
        <div className="team-members">
            
            {members.map((member, index) => (
                <div 
                    key={index}
                    className="member-card"
                    onClick={() => openModal(member)}
                >
                    <img 
                        src={member.imageSrc} 
                        alt={member.name} 
                        className="member-image" 
                    />
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <div className="member-bio">
                        <p>
                            Detaylı özgeçmiş ve kooperatifimizdeki rolü için tıklayınız.
                        </p>
                        <span className="member-link-placeholder">Özgeçmişi Gör <i className="arrow">→</i></span>
                    </div>
                </div>
            ))}

        </div>
      </section>

      {/* MODAL BİLEŞENİ */}
      <MemberDetailModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        member={selectedMember} 
      />
    </div>
  );
};

export default AboutUs;