import { useEffect, useMemo, useState } from "react";
import {
  heroSlides,
  actingCredits,
  writingWorks,
  galleryImages,
  reviewItems,
  newsItems,
  contactInfo,
} from "./data";

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}

function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">Pablo Munoz-Evers</p>
        <h1>Playwright and Actor</h1>
        <p className="hero-text">
          Theatre artist based in Austin. This site collects my performance
          work, writing, production images, reviews, and current updates.
        </p>

        <div className="hero-buttons">
          <a href="#acting" className="button primary">
            View Acting
          </a>
          <a href="#writing" className="button secondary">
            View Writing
          </a>
        </div>
      </div>

      <div className="carousel-card">
        <div className="carousel-image-wrap">
          <img
            src={currentSlide.image}
            alt={currentSlide.alt}
            className="carousel-image"
          />
          <div className="carousel-caption">
            <p>{currentSlide.caption}</p>
          </div>
        </div>

        <div className="carousel-controls">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.image}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Acting", href: "#acting" },
    { label: "Writing", href: "#writing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="site-header">
      <div className="site-brand">
        <a href="#home">Pablo Munoz-Evers</a>
      </div>

      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function ActingSection() {
  return (
    <section id="acting" className="section">
      <SectionHeading
        eyebrow="Acting"
        title="Performance Work"
        text="Selected roles, production history, and materials."
      />

      <div className="two-column">
        <div className="panel">
          <img
            src="/images/headshot.jpg"
            alt="Headshot of Pablo Munoz-Evers"
            className="headshot"
          />
        </div>

        <div className="panel">
          <p>
            I am an Austin-based actor with a background in Shakespeare,
            contemporary theatre, and new work. My performance work includes
            productions with companies such as Walking Shadow Shakespeare
            Project, The VORTEX, Austin Shakespeare, and The Baron's Men.
          </p>

          <div className="materials-row">
            <a
              href={contactInfo.resume}
              target="_blank"
              rel="noreferrer"
              className="button primary"
            >
              Download Resume
            </a>
            <a
              href={contactInfo.headshot}
              target="_blank"
              rel="noreferrer"
              className="button secondary"
            >
              Download Headshot
            </a>
          </div>

          <div className="credit-list">
            {actingCredits.map((credit) => (
              <div
                key={`${credit.title}-${credit.year}`}
                className="credit-item"
              >
                <h3>{credit.title}</h3>
                <p>
                  {credit.role} • {credit.company} • {credit.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WritingSection() {
  return (
    <section id="writing" className="section">
      <SectionHeading
        eyebrow="Writing"
        title="Plays and Other Work"
        text="Playwriting now, with room to grow into screenplays, short stories, and other work later."
      />

      <div className="card-grid">
        {writingWorks.map((work) => (
          <article key={work.title} className="card">
            <p className="card-label">{work.type}</p>
            <h3>{work.title}</h3>
            <p>{work.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function GallerySection() {
  const filters = useMemo(() => ["All", "Acting", "Writing"], []);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="section">
      <SectionHeading
        eyebrow="Gallery"
        title="Production Images"
        text="A visual archive of performance work and productions of my writing."
      />

      <div className="filter-row">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${
              activeFilter === filter ? "active-filter" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((item, index) => (
          <figure key={`${item.title}-${index}`} className="gallery-item">
            <img src={item.image} alt={item.alt} />
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.category}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="section">
      <SectionHeading
        eyebrow="Reviews"
        title="Press and Review Excerpts"
        text="Selected excerpts with links to full reviews."
      />

      <div className="card-grid">
        {reviewItems.map((review, index) => (
          <article key={index} className="card review-card">
            <p className="review-quote">“{review.excerpt}”</p>
            <p className="review-source">{review.source}</p>
            <a
              href={review.link}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Read full review
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="news" className="section">
      <SectionHeading
        eyebrow="News"
        title="Recent Updates"
        text="Current and recent announcements."
      />

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

function ContactSection() {
  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Contact"
        title="Get in Touch"
        text="For acting, writing, development opportunities, or general inquiries."
      />

      <div className="contact-card">
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </p>
        <p>
          <strong>Instagram:</strong>{" "}
          <a href={contactInfo.instagram} target="_blank" rel="noreferrer">
            View profile
          </a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Pablo Munoz-Evers</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <HeroCarousel />
        <ActingSection />
        <WritingSection />
        <GallerySection />
        <ReviewsSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
