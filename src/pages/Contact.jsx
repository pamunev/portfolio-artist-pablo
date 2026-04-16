import { contactInfo } from "../data";

export default function Contact() {
  return (
    <section className="page-section">
      <p className="eyebrow">Contact</p>
      <h1 className="page-title">Get in Touch</h1>
      <p className="section-intro">
        For acting, writing, development opportunities, or general inquiries.
      </p>

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
