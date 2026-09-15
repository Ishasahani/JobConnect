import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import JobCard from "./components/JobCard";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const loadJobs = () => {
    const jobData = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "ABC Technologies",
        location: "Ahmedabad",
        type: "Full Time",
      },
      {
        id: 2,
        title: "Python Developer",
        company: "XYZ Solutions",
        location: "Ahmedabad",
        type: "Full Time",
      },
      {
        id: 3,
        title: "Java Developer",
        company: "Tech Solutions",
        location: "Remote",
        type: "Full Time",
      },
    ];

    setJobs(jobData);
    setLoading(false);
  };

  loadJobs();
}, []);

  const toggleSaveJob = (jobTitle) => {
  if (savedJobs.includes(jobTitle)) {
    setSavedJobs(savedJobs.filter((job) => job !== jobTitle));
  } else {
    setSavedJobs([...savedJobs, jobTitle]);
  }
};

 if (loading) {
  return (
    <div className="loading-screen">
      <h2>Loading JobConnect...</h2>
      <p>Finding the latest job opportunities...</p>
    </div>
  );
}

return (

    <div>
      <Navbar />
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

          <JobCard
           title="Frontend Developer"
           company="ABC Technologies"
           location="Ahmedabad"
           type="Full Time"
           isSaved={savedJobs.includes("Frontend Developer")}
           onSave={toggleSaveJob}
          />

          <JobCard
           title="Python Developer"
           company="XYZ Solutions"
           location="Ahmedabad"
           type="Full Time"
           isSaved={savedJobs.includes("Python Developer")}
           onSave={toggleSaveJob}
          />

          <JobCard
           title="Java Developer"
           company="Tech Solutions"
           location="Remote"
           type="Full Time"
           isSaved={savedJobs.includes("Java Developer")}
           onSave={toggleSaveJob}
          />

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;