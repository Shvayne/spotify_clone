import dotenv from "dotenv";
dotenv.config();

import express from "express";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js"
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statRoutes from "./routes/stats.route.js";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 5000;


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/album", albumRoutes)
app.use("/api/stats", statRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});