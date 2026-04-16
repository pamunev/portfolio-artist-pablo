import { newsItems } from "../data";

export default function News() {
  return (
    <section className="page-section">
      <p className="eyebrow">News</p>
      <h1 className="page-title">Recent Updates</h1>
      <p className="section-intro">Current and recent announcements.</p>

      <div className="news-list">
        {newsItems.map((item, index) => (
          <article key={index} className="news-item">
            <p className="news-date">{item.date}</p>
            <p className="news-text">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
