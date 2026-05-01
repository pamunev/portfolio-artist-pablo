import { writingWorks } from "../data";

export default function Writing() {
  return (
    <section className="page-section">
      <p className="eyebrow">Writing</p>
      <h1 className="page-title">Plays</h1>
      <p className="section-intro">
        Funny plays, sad plays, funny-sad plays, magical realism, and more.
      </p>

      <div className="writing-grid">
        {writingWorks.map((work) => (
          <article key={work.title} className="card writing-card">
            <p className="card-label">{work.type}</p>
            <h3>{work.title}</h3>

            <div className="writing-meta">
              {work.castSize && <span>Cast Size: {work.castSize}</span>}
              {work.genre && <span>Genre: {work.genre}</span>}
            </div>

            {work.synopsis && (
              <p className="writing-synopsis">{work.synopsis}</p>
            )}

            {work.history?.length > 0 && (
              <div className="writing-section">
                <h4>Production History</h4>
                <ul>
                  {work.history.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {work.awards?.length > 0 && (
              <div className="writing-section">
                <h4>Awards / Recognition</h4>
                <ul>
                  {work.awards.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
