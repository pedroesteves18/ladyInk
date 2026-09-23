import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import prisma from "./config/database.js";
import routes from "./src/routes/routes.js";
import session from "express-session";
dotenv.config();

const app = express();

prisma.databaseConnection();
app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { 
    httpOnly: true,
    secure: false 
  } // Set to true if using HTTPS
}));

app.use("/api", routes);
app.listen(5000, () => {
  console.log("API server is running on port 5000");
});
