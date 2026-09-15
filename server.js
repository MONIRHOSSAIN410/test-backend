import dotenv from "dotenv";
dotenv.config();
console.log("JWT_SECRET loaded:", process.env.JWT_SECRET);

import express from "express";

import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import itemRoutes from "./routes/itemRoutes.js"
import contactRouter from "./routes/contact.js";
import paragraphRouter from "./routes/paragraph.js";


connectDB();


const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes)
app.use("/api/paragraph", paragraphRouter);
app.use("/api/contact", contactRouter);

const PORT = process.env.PORT || 5008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
