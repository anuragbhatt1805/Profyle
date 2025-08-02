import express from "express";

const app = express();

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is healthy on " + new Date().toISOString(),
  });
});

export default app;