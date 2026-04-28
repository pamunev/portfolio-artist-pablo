import { Link, useParams } from "react-router-dom";
import { galleryProductions } from "../data";

export default function GalleryProduction() {
  const { slug } = useParams();

  const production = galleryProductions.find((item) => item.slug === slug);

  if (!production) {
    return (
      <section className="page-section">
        <h1 className="page-title">Production not found</h1>
        <Link to="/gallery" className="button secondary">
          Back to Gallery
        </Link>
      </section>
    );
  }

  return (
    <section className="page-section">
      <p className="eyebrow">Gallery</p>
      <h1 className="page-title">{production.title}</h1>
      <p className="section-intro">{production.caption}</p>

      <Link to="/gallery" className="button secondary">
        Back to Gallery
      </Link>

      <div className="production-gallery-grid">
        {production.images.map((image, index) => (
          <figure key={index} className="production-gallery-item">
            <img src={image.src} alt={image.alt} />
          </figure>
        ))}
      </div>
    </section>
  );
}
