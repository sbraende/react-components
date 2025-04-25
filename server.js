import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

const PORT = 3001;
const BASE_URL = "http://api.weatherapi.com/v1";
dotenv.config();
const app = express();

app.use(cors());

app.get("/weather", async (req, res) => {
  const query = req.query.q || "Oslo";
  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${query}&days=3`
    );
    const result = await response.json();
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log("Could not fetch data", error);
  }
});

// Create server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
