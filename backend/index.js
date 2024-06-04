const express = require("express");
const app = express();
const PORT = 8000;
const mongoDb = require("./db");
const cors = require("cors");
const Booking = require("./model/Booking");

// Connect to MongoDB
mongoDb();

// Get allowed origins from environment variables
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://radiant-pasca-cf3c66.netlify.app");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  ); 
  next();
});


// Parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello from backend" });
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
  console.log(`Server is running on port ${PORT}`);
});
