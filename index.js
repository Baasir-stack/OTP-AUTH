import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration for your frontend

app.use(cors({ origin: "*", credentials: true }));

app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // Parse incoming cookies

// Your API routes
app.use("/api/auth", authRoutes);

// Start server

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
  });
});
