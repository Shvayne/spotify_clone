import dotenv from "dotenv";
dotenv.config();
import { clerkMiddleware } from '@clerk/express'
import fileUpload from "express-fileupload";
import path from "path";

import express from "express";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js"
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statRoutes from "./routes/stats.route.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(
  {
    origin: "http://localhost:3000",
    credentials: true,
  }
))

app.use(express.json()); /* to parse req.body */
app.use(clerkMiddleware()); /*Add auth to req object */ 
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: path.join(__dirname, "temp"),
  createParentPath: true,
  limits: {
    fileSize: 10 * 1024 * 1024, //max file size
  }
}));



app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/album", albumRoutes)
app.use("/api/stats", statRoutes)

//error handling
app.use((err, req, res, next) => {
  res.status(500).json({ message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});