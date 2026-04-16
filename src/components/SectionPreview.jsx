import { Link } from "react-router-dom";

export default function SectionPreview({
  eyebrow,
  title,
  text,
  linkTo,
  linkText,
}) {
  return (
    <section className="preview-section">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-intro">{text}</p>
      <Link to={linkTo} className="button secondary">
        {linkText}
      </Link>
    </section>
  );
}
