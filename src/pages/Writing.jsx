import { writingWorks } from "../data";

export default function Writing() {
  return (
    <section className="page-section">
      <p className="eyebrow">Writing</p>
      <h1 className="page-title">Plays and Other Work</h1>
      <p className="section-intro">
        Playwriting now, with room for screenplays, short stories, and other
        work later.
      </p>

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
