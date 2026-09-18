const express = require("express");
const cors = require("cors");
const jobsRouter = require("./routes/jobs");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("JobConnect Backend is Running!");
});

app.use("/api/jobs", jobsRouter);

app.listen(PORT, () => {
  console.log(`JobConnect server running on http://localhost:${PORT}`);
});