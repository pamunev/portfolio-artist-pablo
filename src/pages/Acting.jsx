import {
  actingCredits,
  contactInfo,
  theatreCredits,
  filmCommercialCredits,
  voiceCredits,
} from "../data";

export default function Acting() {
  return (
    <>
      <section className="page-section">
        <p className="eyebrow">Acting</p>
        <h1 className="page-title">Performance Work</h1>
        <p className="section-intro">
          Selected theatre work, full credits, and downloadable materials.
        </p>

        <div className="two-column">
          <div className="panel">
            <img
              src="/headshot-theatrical.jpg"
              alt="Headshot of Pablo Munoz-Evers"
              className="headshot"
            />
          </div>

          <div className="panel">
            <p>
              I am an Austin-based actor with a background in Shakespeare,
              contemporary theatre, and new work. My performance work includes
              productions with companies such as Walking Shadow Shakespeare
              Project, The VORTEX, Austin Shakespeare, and The Baron&apos;s Men.
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
                    {credit.note ? ` • ${credit.note}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="page-section">
        <p className="eyebrow">Credits</p>
        <h2>Theatre Credits</h2>

        <div className="credits-list">
          {theatreCredits.map((credit, index) => (
            <div key={index} className="credit-row">
              <h3>{credit.title}</h3>
              <p>{credit.details}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
