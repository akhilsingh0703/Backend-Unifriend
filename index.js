if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");

console.log("Initializing backend application...");

const app = express();
const port = process.env.PORT || 3001;

// 🔥 IMPORTANT: initialize Firebase ONCE
require("./firebase");

// Import routes
const authRoutes = require("./routes/auth");
const universityRoutes = require("./routes/universities");

app.use(cors());
app.use(express.json());

app.get("/universities", (req, res) => {
  res.json([
    { id: 1, name: "UniFriend Test University", city: "Patna" }
  ]);
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/universities", universityRoutes);

// Global error handlers (good, keep them)
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION:", reason);
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend is running 🚀",
  });
});

app.get("/", (req, res) => {
  res.json({ status: "Backend running" });
});

/* 
// Only listen locally (NOT on Vercel)
// User requested removal for Vercel compatibility
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
*/

module.exports = app;
