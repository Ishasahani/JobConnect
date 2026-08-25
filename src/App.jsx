import "./App.css";

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">JobConnect</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Jobs</a>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Find Your Dream Job</h1>

        <p>
          Discover the right opportunity and build your career with JobConnect.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Job title, skills or company"
          />

          <input
            type="text"
            placeholder="Location"
          />

          <button>Search Jobs</button>
        </div>
      </section>

      {/* Popular Jobs */}
      <section className="jobs-section">
        <h2>Popular Jobs</h2>

        <div className="job-container">

          <div className="job-card">
            <h3>Frontend Developer</h3>
            <p>ABC Technologies</p>
            <p>📍 Ahmedabad</p>
            <p>💼 Full Time</p>
            <button>View Details</button>
          </div>

          <div className="job-card">
            <h3>Python Developer</h3>
            <p>XYZ Solutions</p>
            <p>📍 Ahmedabad</p>
            <p>💼 Full Time</p>
            <button>View Details</button>
          </div>

          <div className="job-card">
            <h3>Java Developer</h3>
            <p>Tech Solutions</p>
            <p>📍 Remote</p>
            <p>💼 Full Time</p>
            <button>View Details</button>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;