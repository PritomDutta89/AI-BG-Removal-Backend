import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";

// App config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

// Initialize middlewares
app.use(express.json());
app.use(cors());

app.get("/get", (req, resp) => {
  resp.send("Api working");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
