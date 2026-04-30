import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { collection, addDoc, serverTimestamp, getDocs, deleteDoc, doc, orderBy, query, updateDoc } from 'firebase/firestore';
import './AdminHaberler.css';

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
