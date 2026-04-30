import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "./BizdenHaberler.css";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
}

const BizdenHaberler: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const q = query(collection(db, "haberler"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedNews: NewsItem[] = [];
        querySnapshot.forEach((doc) => {
          fetchedNews.push({ id: doc.id, ...doc.data() } as NewsItem);
        });
        setNews(fetchedNews);
      } catch (error) {
        console.error("Haberler yüklenirken hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-page">
      <div className="news-page-header">
        <h1>Bizden Haberler</h1>
      </div>

      <div className="news-grid">
        {loading ? (
          <p style={{ textAlign: "center", width: "100%", padding: "2rem" }}>Haberler yükleniyor...</p>
        ) : news.length > 0 ? (
          news.map((item) => (
            <Link key={item.id} to={`/bizden-haberler/${item.id}`} className="news-card-link">
              <article className="news-card">
                <div className="news-card-image">
                  <img src={item.imageUrl} alt={item.title} />
                  <div className="news-card-category">{item.category}</div>
                </div>
                <div className="news-card-content">
                  <time className="news-card-date">{item.date}</time>
                  <h2 className="news-card-title">
                    {item.title}
                  </h2>
                  <p className="news-card-excerpt">
                    {item.excerpt}
                  </p>
                  <span className="news-card-read-more">Detayları Gör →</span>
                </div>
              </article>
            </Link>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%", padding: "2rem" }}>Henüz haber eklenmemiş.</p>
        )}
      </div>
    </div>
  );
};

export default BizdenHaberler;
