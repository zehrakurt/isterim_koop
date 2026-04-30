import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./HaberDetay.css";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  content: string;
}

const HaberDetay: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleNews = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, "haberler", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNews({ id: docSnap.id, ...docSnap.data() } as NewsItem);
        } else {
          console.log("Haber bulunamadı!");
        }
      } catch (error) {
        console.error("Haber detayı çekilirken hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleNews();
  }, [id]);

  if (loading) {
    return (
      <div className="news-detail-page">
        <div style={{ textAlign: "center", padding: "4rem" }}>Yükleniyor...</div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="news-detail-page">
        <div className="news-not-found">
          <h1>Haber bulunamadı</h1>
          <Link to="/bizden-haberler" className="back-link">
            ← Tüm Haberlere Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="news-detail-page">
      <Link to="/bizden-haberler" className="back-link">
        ← Tüm Haberlere Dön
      </Link>

      <article className="news-detail-article">
        <div className="news-detail-header">
          <span className="news-detail-category">{news.category}</span>
          <h1>{news.title}</h1>
        </div>

        <div className="news-detail-image">
          {news.imageUrl && <img src={news.imageUrl} alt={news.title} />}
        </div>

        <div className="news-detail-content" style={{ whiteSpace: "pre-line", marginTop: "2rem" }}>
          {news.content}
        </div>

        <div className="news-details">
          <div className="detail-row">
            <span>Kategori</span>
            <strong>{news.category}</strong>
          </div>
          <div className="detail-row">
            <span>Tarih</span>
            <strong>{news.date}</strong>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HaberDetay;
