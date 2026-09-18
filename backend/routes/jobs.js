const express = require("express");

const router = express.Router();

const jobs = [
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

router.get("/", (req, res) => {
  res.json(jobs);
});

router.get("/:id", (req, res) => {
  const job = jobs.find((job) => job.id === parseInt(req.params.id));

  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }

  res.json(job);
});

router.post("/", (req, res) => {
  const newJob = {
    id: jobs.length + 1,
    title: req.body.title,
    company: req.body.company,
    location: req.body.location,
    type: req.body.type,
  };

  jobs.push(newJob);

  res.status(201).json(newJob);
});

module.exports = router;