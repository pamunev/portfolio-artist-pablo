import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { galleryProductions } from "../data";

export default function Gallery() {
  const filters = useMemo(() => ["All", "Acting", "Writing"], []);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProductions =
    activeFilter === "All"
      ? galleryProductions
      : galleryProductions.filter((item) =>
          item.categories.includes(activeFilter),
        );
  return (
    <section className="page-section">
      <p className="eyebrow">Gallery</p>
      <h1 className="page-title">Production Images</h1>
      <p className="section-intro">
        A visual archive of performance work and productions of my writing.
      </p>

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
        {filteredProductions.map((production) => (
          <Link
            key={production.slug}
            to={`/gallery/${production.slug}`}
            className="gallery-card-link"
          >
            <figure className="gallery-item">
              <img src={production.coverImage} alt={production.alt} />
              <figcaption>
                <strong>{production.title}</strong>
                <span>{production.caption}</span>
                <span className="category">
                  {production.categories.join(" / ")}
                </span>
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </section>
  );
}
