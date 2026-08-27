import "./App.css";

import Navbar from "./components/Navbar";
import JobCard from "./components/JobCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

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

      <section className="jobs-section">
        <h2>Popular Jobs</h2>

        <div className="job-container">

          <JobCard
            title="Frontend Developer"
            company="ABC Technologies"
            location="Ahmedabad"
            type="Full Time"
          />

          <JobCard
            title="Python Developer"
            company="XYZ Solutions"
            location="Ahmedabad"
            type="Full Time"
          />

          <JobCard
            title="Java Developer"
            company="Tech Solutions"
            location="Remote"
            type="Full Time"
          />

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;