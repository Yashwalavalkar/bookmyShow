const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const mongoDb = require("./db");
const cors = require("cors");
const Booking = require("./model/Booking");
// Connect to MongoDB
mongoDb();
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello from backed" });
});

app.get("/api/booking", async (req, res) => {
  try {
    const booking = await Booking.find();
    const data = booking[booking.length - 1];
    if (booking.length === 0) {
      return res.status(200).json({ message: "No booking details available." });
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.use("/api", require("./route/CreateBooking"));
app.listen(PORT, () => {
  console.log(`port is listening ${PORT}`);
});
