import { useMemo, useState } from "react";
import { galleryImages } from "../data";

export default function Gallery() {
  const filters = useMemo(() => ["All", "Acting", "Writing"], []);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((item) => item.category === activeFilter);

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
