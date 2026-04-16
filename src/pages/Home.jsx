import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import SectionPreview from "../components/SectionPreview";
import { newsItems } from "../data";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero page-section">
        <div className="hero-copy">
          <p className="eyebrow">Pablo Munoz-Evers</p>
          <h1>Playwright and Actor</h1>
          <p className="hero-text">
            Theatre artist based in Austin. This site collects my performance
            work, writing, production images, reviews, and current updates.
          </p>

          <div className="hero-buttons">
            <Link to="/acting" className="button primary">
              View Acting
            </Link>
            <Link to="/writing" className="button secondary">
              View Writing
            </Link>
          </div>
        </div>

        <HeroCarousel />
      </section>

      <SectionPreview
        eyebrow="Acting"
        title="Performance Work"
        text="Selected roles, production history, and acting materials."
        linkTo="/acting"
        linkText="Go to Acting"
      />

      <SectionPreview
        eyebrow="Writing"
        title="Plays and Other Work"
        text="Featured plays, commissions, and a growing archive of writing."
        linkTo="/writing"
        linkText="Go to Writing"
      />

      <SectionPreview
        eyebrow="Gallery"
        title="Production Images"
        text="A visual archive of performance work and productions of my writing."
        linkTo="/gallery"
        linkText="Go to Gallery"
      />

      <section className="page-section">
        <p className="eyebrow">News</p>
        <h2>Latest Updates</h2>
        <div className="news-list">
          {newsItems.slice(0, 3).map((item, index) => (
            <article key={index} className="news-item">
              <p className="news-date">{item.date}</p>
              <p className="news-text">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="top-spacing">
          <Link to="/news" className="button secondary">
            More News
          </Link>
        </div>
      </section>
    </div>
  );
}
