import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import SavedJobs from "./pages/SavedJobs";
import About from "./pages/About";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import JobCard from "./components/JobCard";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchInputRef = useRef(null);

 useEffect(() => {
  const loadJobs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/jobs");
      const data = await response.json();

      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.error("Error loading jobs:", error);
      setLoading(false);
    }
  };

  loadJobs();
}, []);
const filteredJobs = useMemo(() => {
  return jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [jobs, searchTerm]);

const toggleSaveJob = useCallback((jobTitle) => {
  if (savedJobs.includes(jobTitle)) {
    setSavedJobs(savedJobs.filter((job) => job !== jobTitle));
  } else {
    setSavedJobs([...savedJobs, jobTitle]);
  }
}, [savedJobs]);

 if (loading) {
  return (
    <div className="loading-screen">
      <h2>Loading JobConnect...</h2>
      <p>Finding the latest job opportunities...</p>
    </div>
  );
}

return (
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={
        <div>
          <div className="saved-count">
            ❤️ Saved Jobs: {savedJobs.length}
          </div>

          <section className="hero">
            <h1>Find Your Dream Job</h1>

            <p>
              Discover the right opportunity and build your career with JobConnect.
            </p>

            <div className="search-box">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Job title, skills or company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <input
                type="text"
                placeholder="Location"
              />

              <button>Search Jobs</button>

              <button onClick={() => searchInputRef.current.focus()}>
                Focus Search
              </button>

            </div>

            {searchTerm && (
              <p className="search-message">
                Searching for: <strong>{searchTerm}</strong>
              </p>
            )}
          </section>

          <section className="jobs-section">
            <h2>Popular Jobs</h2>

            <div className="job-container">

              {filteredJobs.map((job) => (
                <JobCard
                  key={job._id}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  type={job.type}
                  isSaved={savedJobs.includes(job.title)}
                  onSave={toggleSaveJob}
               />
            ))}

              

            </div>
          </section>
        </div>
      } />

      <Route path="/jobs" element={<Jobs />} />
      <Route path="/saved-jobs" element={<SavedJobs />} />
      <Route path="/about" element={<About />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);
}

export default App;