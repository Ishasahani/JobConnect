const express = require("express");
const Job = require("../models/Job");

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(job);
  } catch (error) {
    res.status(500).json({ message: "Error fetching job" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newJob = await Job.create({
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      type: req.body.type,
    });

    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: "Error creating job" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        type: req.body.type,
      },
      { new: true, runValidators: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: "Error updating job" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json({
      message: "Job deleted successfully",
      job: deletedJob,
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting job" });
  }
});

module.exports = router;