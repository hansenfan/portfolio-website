import { Link } from "react-router-dom";

function Notes() {
  return (
    <main className="main main-top">
      <h1>Notes</h1>
      <section className="page-section">
        <div className="notes-list">
          <Link to="/daily-rating" className="notes-item-link">
            <span>Rating Every Day (1-10) + Thoughts</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Notes;
