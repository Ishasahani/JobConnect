const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 5000;

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

app.get("/", (req, res) => {
  res.send("JobConnect Backend is Running!");
});

app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

app.listen(PORT, () => {
  console.log(`JobConnect server running on http://localhost:${PORT}`);
});