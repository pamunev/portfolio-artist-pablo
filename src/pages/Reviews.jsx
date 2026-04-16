import { reviewItems } from "../data";

export default function Reviews() {
  return (
    <section className="page-section">
      <p className="eyebrow">Reviews</p>
      <h1 className="page-title">Press and Review Excerpts</h1>
      <p className="section-intro">
        Selected excerpts with links to full reviews.
      </p>

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
