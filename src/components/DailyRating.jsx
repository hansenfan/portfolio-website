function DailyRating() {
  return (
    <main className="main main-top main-wide">
      <h1>Rating Every Day</h1>

      <div className="daily-layout">
        <section className="page-section daily-journal">
          <h2 className="section-title">July 2026</h2>
          <div className="entry-list">
            <article className="entry-item">
              <div className="entry-meta">
                <span className="entry-date">7/3/26</span>
                <span className="entry-score score-5">5/10</span>
              </div>
              <p className="entry-text">
                Bro they randomly canceled my gym membership. Kinda cooked in
                the hackathon but honestly didn't do much today 😗.
              </p>
            </article>

            <article className="entry-item">
              <div className="entry-meta">
                <span className="entry-date">7/2/26</span>
                <span className="entry-score score-9">9/10</span>
              </div>
              <p className="entry-text">
                Shoutout the company for inviting me to my first boat party with
                open bar. I could get used to this 😁.
              </p>
            </article>

            <article className="entry-item">
              <div className="entry-meta">
                <span className="entry-date">7/1/26</span>
                <span className="entry-score score-7">7/10</span>
              </div>
              <p className="entry-text">
                Jaylen Brown?? This might be our year. LeBron otw.
              </p>
            </article>
          </div>
        </section>

        <section className="scale-card">
          <h2 className="section-title">1-10 Scale</h2>
          <ul className="scale-list">
            <li>
              <span className="scale-number scale-1">1</span>
              <span>don't talk to me</span>
            </li>
            <li>
              <span className="scale-number scale-2">2</span>
              <span>really really bad</span>
            </li>
            <li>
              <span className="scale-number scale-3">3</span>
              <span>bad</span>
            </li>
            <li>
              <span className="scale-number scale-4">4</span>
              <span>coulda been worse</span>
            </li>
            <li>
              <span className="scale-number scale-5">5</span>
              <span>mid</span>
            </li>
            <li>
              <span className="scale-number scale-6">6</span>
              <span>not bad</span>
            </li>
            <li>
              <span className="scale-number scale-7">7</span>
              <span>solid</span>
            </li>
            <li>
              <span className="scale-number scale-8">8</span>
              <span>good</span>
            </li>
            <li>
              <span className="scale-number scale-9">9</span>
              <span>splendid</span>
            </li>
            <li>
              <span className="scale-number scale-10">10</span>
              <span>keep me here forever</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default DailyRating;
