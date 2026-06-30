import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { collection, addDoc, serverTimestamp, getDocs, deleteDoc, doc, orderBy, query, updateDoc } from 'firebase/firestore';
import './AdminHaberler.css';

// Eski resimleri import ediyoruz
import imgHaber1 from "../../assets/bizden haberler.jpg";
import imgHaber2 from "../../assets/haber4.jpg";
import imgHaber3 from "../../assets/12.jpeg";
import imgHaber4 from "../../assets/2.jpeg";
import imgHaber5 from "../../assets/1.jpeg";
import imgHaber6 from "../../assets/sağlık2.jpeg";
import imgHaber7 from "../../assets/8mart.jpg";
import imgHaber8 from "../../assets/mart1.jpeg";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
  imageUrl: string;
}

const compressImage = (file: File | string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const handleImage = (img: HTMLImageElement) => {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 800;
      const MAX_HEIGHT = 800;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, width, height);
      
      const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
      resolve(dataUrl);
    };

    if (typeof file === 'string') {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = file;
      img.onload = () => handleImage(img);
      img.onerror = (error) => reject(error);
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => handleImage(img);
        img.onerror = (error) => reject(error);
      };
      reader.onerror = (error) => reject(error);
    }
  });
};

const AdminHaberler: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Form states
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchNews();
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchNews = async () => {
    try {
      const q = query(collection(db, 'haberler'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const news: NewsItem[] = [];
      querySnapshot.forEach((doc) => {
        news.push({ id: doc.id, ...doc.data() } as NewsItem);
      });
      setNewsList(news);
    } catch (error) {
      console.error("Haberler çekilirken hata oluştu:", error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setLoginError('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle('');
    setExcerpt('');
    setCategory('');
    setDate('');
    setContent('');
    setImage(null);
    const fileInput = document.getElementById('imageInput') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleEdit = (news: NewsItem) => {
    setEditingId(news.id);
    setTitle(news.title);
    setExcerpt(news.excerpt || '');
    setCategory(news.category);
    setDate(news.date);
    setContent(news.content || '');
    setImage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !excerpt || !content || !category || !date || (!image && !editingId)) {
      alert("Lütfen gerekli alanları doldurun.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (editingId) {
        const updateData: any = { title, excerpt, category, date, content };
        if (image) {
          updateData.imageUrl = await compressImage(image);
        }
        await updateDoc(doc(db, "haberler", editingId), updateData);
        alert("Haber başarıyla güncellendi!");
      } else {
        const imageUrl = await compressImage(image as File);
        await addDoc(collection(db, "haberler"), {
          title, excerpt, category, date, content, imageUrl,
          createdAt: serverTimestamp()
        });
        alert("Haber başarıyla eklendi!");
      }
      resetForm();
      fetchNews();
    } catch (error) {
      console.error("İşlem sırasında hata:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Bu haberi silmek istediğinize emin misiniz?")) {
      try {
        await deleteDoc(doc(db, "haberler", id));
        fetchNews();
      } catch (error) {
        console.error("Hata:", error);
        alert("Silinirken bir hata oluştu.");
      }
    }
  };

  const handleSuperMigration = async () => {
    if (!window.confirm("Eski haberleri (Base64 formatında) tekrar yüklemek istediğinize emin misiniz?")) return;
    
    setIsSubmitting(true);
    try {
      const oldNewsData = [
        {
          title: "İlk Adım Müzik ile TravelExpo Ankara'da Sahnedeyiz",
          excerpt: "20-22 Kasım 2025 tarihleri arasında gerçekleşecek 8. Uluslararası Turizm ve Seyahat Fuarı TravelExpo'da İlk Adım Müzik Grubu ile sahnede olacağız.",
          category: "Kültür • Sanat • Turizm • Sinema Akademisi",
          date: "20 Kasım 2025",
          content: `20-22 Kasım 2025 tarihleri arasında gerçekleşecek 8. Uluslararası Turizm ve Seyahat Fuarı TravelExpo'da, İlk Adım Müzik Grubu ile sahnede olacağız.

Etkinlik: TravelExpo Ankara 2025
Tarih: 20 Kasım 2025
Yer: ATO Congresium`,
          img: imgHaber1
        },
        {
          title: "TRAVELEXPO ANKARA 2025 – Standımız Hazır",
          excerpt: "ATO Congresium'da düzenlenecek TRAVELEXPO ANKARA 2025 fuarında standımızla yer alacağız.",
          category: "Fuar",
          date: "20-22 Kasım 2025",
          content: `20-22 Kasım 2025 tarihlerinde düzenlenecek olan TRAVELEXPO ANKARA 2025 fuarında standımızla yer alacağız.

Etkinlik: TRAVELEXPO ANKARA 2025
Tarih: 20-22 Kasım 2025
Yer: ATO Congresium`,
          img: imgHaber2
        },
        {
          title: "Kooperatifçiliğin Kalkınmada Rolü ve Yeni Nesil Kooperatifçilik Çalıştayı",
          excerpt: "Çalıştay, kooperatiflerin kalkınmada rolü, yeni nesil modeller, yönetişim, dayanışma ve bilimsel çözüm arayışlarıyla Ankara’da düzenlenecektir.",
          category: "Kooperatifçilik • Çalıştay",
          date: "20-21 Aralık 2025",
          content: `Değer Üretim Paylaşım ve Eğitim Sosyal İşletme Kooperatifi kurumsal organizasyonu altında ve Kooperatifçilik Yılı kapsamında düzenlenmesi planlanan "Kooperatifçiliğin Kalkınmada Rolü ve Yeni Nesil Kooperatifçilik" temalı çalıştayın, 20-21 Aralık 2025 tarihlerinde Ankara’da gerçekleştirilmesi öngörülmektedir.

Hazırlık ve koordinasyon sürecine bağlı olarak çalıştayın 2026 yılına sarkması da ihtimal dahilindedir.

Çalıştayın hedef kitlesi; kooperatifler, yerel yönetimler, sivil toplum bileşenleri, kamu kuruluşları, bakanlık temsilcileri, akademik çevreler ve gençlerden oluşmaktadır.

Amaçlar:
- Kooperatifçilik bilincinin sivil toplum bileşenleri arasında gelişimine katkı sağlamak
- Kooperatifçiliğin ülkemizde gelişimine destek için yeni çözüm önerileri oluşturmak
- Katılımcılar arasında yeni işbirliği ağları geliştirmek, dayanışmayı güçlendirmek
- Bilimsel bir yaklaşım ile sorunların çözümünde işbirliği alanlarını belirlemek

Beklenen Çıktılar:
Kooperatifçiliğin güncel sorunları ve çözüm yolları konusunda kamuoyunda farkındalık yaratılması hedeflenmektedir.

Muhtemel Paydaşlar:
- Kadın kooperatifleri
- Sosyal kooperatifler
- Yerel yönetimler
- Üniversiteler
- Ankara Kalkınma Ajansı
- İlgili bakanlıklar
- Türk Kooperatifçilik Kurumu

Ele Alınması Muhtemel Konu Başlıkları:
- Kooperatifçiliğin kalkınmadaki rolü
- Yeni nesil kooperatifçilik modelleri
- Kooperatiflerde yönetişim ve şeffaflık
- E-ticaret, dijital dönüşüm ve kooperatifler
- Sosyal kooperatifçilik uygulamaları
- Girişimcilikte kooperatiflerin yeri

Etkinlik: Kooperatifçilik Çalıştayı
Tarih: 20-21 Aralık 2025 (Gerekirse 2026’ya sarkabilir)
Yer: Ankara
İrtibat: Organizasyon Komitesi`,
          img: imgHaber3
        },
        {
          title: "Vali Yardımcısı Dr. Ayhan Özkan'dan Ziyaret",
          excerpt: "Vali Yardımcısı Dr. Ayhan Özkan bugün kooperatifimizi ziyaret ederek çalışmalarımız hakkında bilgi aldı.",
          category: "Protokol Ziyareti",
          date: "28 Ocak 2026",
          content: `Vali Yardımcısı Dr. Ayhan Özkan bugün kooperatifimizi ziyaret ederek yürüttüğümüz projeler ve iş birlikleri hakkında bilgi aldı. Ziyarette toplumsal fayda, kadın kooperatiflerine destek ve yerel kalkınma başlıklarında görüş alışverişi yapıldı.

Misafirimizle birlikte gelecekte gerçekleştirebileceğimiz ortak çalışmalar üzerine değerlendirmelerde bulunduk ve planlanan etkinliklerimizi paylaştık.

Etkinlik: Protokol Ziyareti
Tarih: 28 Ocak 2026
Yer: İSTERİM Kooperatif
Katılımcı: Vali Yardımcısı Dr. Ayhan Özkan`,
          img: imgHaber4
        },
        {
          title: "Yazar-Şair Murat Haydaroğlu Ofisimizde",
          excerpt: "Yazar-şair Murat Haydaroğlu ofisimizi ziyaret ederek yeni kitabını ekibimize hediye etti.",
          category: "Kültür • Edebiyat",
          date: "28 Ocak 2026",
          content: `Yazar-şair Murat Haydaroğlu ofisimizi ziyaret ederek yeni kitabını ekibimize hediye etti. Ziyaret sırasında edebiyat çalışmaları, kültür-sanat projeleri ve kooperatifimizin yürüttüğü faaliyetler üzerine keyifli bir sohbet gerçekleştirdik.

Kendilerine nazik ziyaretleri ve kitap hediyeleri için teşekkür ediyor, birlikte yürütebileceğimiz kültür-sanat odaklı projeler için heyecan duyuyoruz.

Etkinlik: Ofis Ziyareti
Tarih: 28 Ocak 2026
Yer: İSTERİM Kooperatif Ofisi
Konuk: Yazar-Şair Murat Haydaroğlu`,
          img: imgHaber5
        },
        {
          title: "T.C Sağlık Bakanlığı Ankara İl Sağlık Müdürlüğü Ziyareti",
          excerpt: "Ankara İl Sağlık Müdürlüğü ile gerçekleştirdiğimiz ziyarette iş birliği ve projeler üzerine görüş alışverişi yapıldı.",
          category: "Kurumsal Ziyaret",
          date: "28 Ocak 2026",
          content: `T.C Sağlık Bakanlığı Ankara İl Sağlık Müdürlüğü'nü ziyaret ederek yürüttüğümüz projeler ve olası iş birlikleri üzerine verimli bir görüşme gerçekleştirdik.

Ziyaret kapsamında toplum sağlığı, sosyal projeler ve kurumlar arası iş birliği olanakları ele alındı.

Etkinlik: Kurumsal Ziyaret
Yer: Ankara İl Sağlık Müdürlüğü`,
          img: imgHaber6
        },
        {
          title: "8 Mart 2026 Kadını Anlama ve Anma Günü Etkinliği",
          excerpt: "SS İsterim Değer Üretim Paylaşım ve Eğitim Sosyal İşletme Kooperatifi ve Mimoza Kadınları Derneği'nin katkılarıyla 'Kadının Dünü, Bugünü, Yarını' paneli düzenleniyor.",
          category: "Etkinlik • Panel",
          date: "8 Mart 2026",
          content: `SS İsterim Değer Üretim Paylaşım ve Eğitim Sosyal İşletme Kooperatifi ve Mimoza Kadınları Derneği'nin katkılarıyla 8 Mart 2026 tarihinde "Kadını Anlama ve Anma Günü" etkinliği düzenleniyor.

Bu anlamlı günde sizleri aramızda görmek bizleri mutlu kılacaktır.

'Kadının Dünü, Bugününü, Yarını' Paneli
Moderatör: Merih Uzun

Panelistler:
- Prof. Dr. Elif Akar – Akademisyen
- Ercan Akpınar – Gazeteci
- Aşkım Tan – Gazeteci-Araştırmacı Yazar, Sosyal Aktivist
- Feyza Aydın Kılıç – Oyuncu, Sunucu

Program:
- 15:00 – 15:30 Karşılama Müziği
- 15:35 – 17:00 Panel
- 17:00 – 17:15 Soru Cevap
- 17:15 – 17:40 Sürpriz Davetli Konuşmacı
- 17:40 – 17:45 Teşekkür ve Toplu Anı Fotoğraf Çekimi
- 17:45 – 18:00 Yazarından Kısa Kitap Tanıtımı ve Kitap İmza
Uğurlama ve sonrası serbest sohbet ve tanışma.

Etkinlik ücretsizdir. Herkes sadece yediğinin içtiğinin ücretini ödemekle sorumludur. Arzu edenler cafe restorantın ürünlerinden yararlanabilir.

Medya Sponsoru: FBD Medya Grubu ve VTV Türk
Yayın: Kanal Vizyon TV YouTube kanalından canlı yayın verilecektir.

Etkinlik: Kadını Anlama ve Anma Günü Paneli
Tarih: 8 Mart 2026
Saat: 15:00 – 18:00
Yer: Jevernal Coffee, Atatürk Bulvarı, Şanlı İşhanı 105, Kat 10, Kızılay / Ankara
Moderatör: Merih Uzun`,
          img: imgHaber7
        },
        {
          title: "8 Mart Dünya Kadınlar Günü Etkinliği",
          excerpt: "8 Mart Dünya Kadınlar Günü'nde gerçekleştirdiğimiz etkinliğin fotoğrafları ve canlı yayın kayıtları.",
          category: "Etkinlik • 8 Mart",
          date: "8 Mart 2026",
          content: `8 Mart Dünya Kadınlar Günü kapsamında düzenlediğimiz etkinlik büyük bir coşkuyla gerçekleşti. Etkinlikte kadınların toplumsal rolü, hakları ve geleceğine dair önemli konular ele alındı.

Panelimizde değerli konuşmacılarımız "Kadının Dünü, Bugününü, Yarını" teması üzerine görüşlerini paylaştı. Katılımcılarımızla birlikte anlamlı ve unutulmaz bir gün geçirdik.

Canlı Yayın Kayıtları (YouTube'da izleyebilirsiniz):
- Canlı Yayın Kaydı – Bölüm 1: https://www.youtube.com/live/MCE31UbO4vw
- Canlı Yayın Kaydı – Bölüm 2: https://www.youtube.com/live/h_QK9qAstcY

Etkinlik: 8 Mart Dünya Kadınlar Günü
Tarih: 8 Mart 2026`,
          img: imgHaber8
        }
      ];

      for (const item of oldNewsData) {
        const base64Img = await compressImage(item.img);
        await addDoc(collection(db, "haberler"), {
          title: item.title,
          excerpt: item.excerpt,
          category: item.category,
          date: item.date,
          content: item.content,
          imageUrl: base64Img,
          createdAt: serverTimestamp()
        });
      }

      alert("Tüm eski haberler başarıyla Firestore'a eklendi!");
      fetchNews();
    } catch (err) {
      console.error(err);
      alert("Hata oluştu: " + err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="admin-container">
        <form className="admin-login" onSubmit={handleLogin}>
          <h2>Yönetici Girişi</h2>
          {loginError && <p style={{color: 'red'}}>{loginError}</p>}
          <input type="email" placeholder="E-posta" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Giriş Yap</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-panel-header">
        <h2>Haber Yönetim Paneli</h2>
        <div style={{display: 'flex', gap: '10px'}}>
          <button className="submit-btn" style={{background: 'purple', width: 'auto'}} onClick={handleSuperMigration} disabled={isSubmitting}>
            {isSubmitting ? 'Yükleniyor...' : 'Eski Haberleri Yükle'}
          </button>
          <button className="logout-btn" onClick={handleLogout}>Çıkış Yap</button>
        </div>
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>
        <h3>{editingId ? "Haberi Düzenle" : "Yeni Haber Ekle"}</h3>
        <div className="form-group">
          <label>Başlık</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Kısa Özet</label>
          <input type="text" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Kategori</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Tarih</label>
          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Kapak Görseli {editingId && "(Değiştirmek istemiyorsanız boş bırakın)"}</label>
          <input type="file" id="imageInput" accept="image/*" onChange={(e) => e.target.files && setImage(e.target.files[0])} required={!editingId} />
        </div>
        <div className="form-group">
          <label>Haber İçeriği</label>
          <textarea rows={10} value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <div style={{display: 'flex', gap: '1rem'}}>
          <button type="submit" className="submit-btn" disabled={isSubmitting} style={{flex: 1}}>
            {isSubmitting ? 'İşleniyor...' : (editingId ? 'Haberi Güncelle' : 'Haberi Yükle')}
          </button>
          {editingId && <button type="button" className="submit-btn" style={{background: '#6c757d'}} onClick={resetForm}>İptal Et</button>}
        </div>
      </form>

      <div className="admin-news-list">
        <h3>Mevcut Haberler</h3>
        <div className="news-list-admin">
          {newsList.map(news => (
            <div key={news.id} className="news-item-admin">
              <div className="news-item-info">
                <strong>{news.title}</strong>
                <span>{news.date} - {news.category}</span>
              </div>
              <div style={{display: 'flex', gap: '0.5rem'}}>
                <button className="delete-btn" style={{background: '#0d6efd'}} onClick={() => handleEdit(news)}>Düzenle</button>
                <button className="delete-btn" onClick={() => handleDelete(news.id)}>Sil</button>
              </div>
            </div>
          ))}
          {newsList.length === 0 && <p>Henüz eklenmiş bir haber yok.</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminHaberler;
