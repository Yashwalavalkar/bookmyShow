const express = require("express");
const app = express();
const PORT = 8000;
const mongoDb = require("./db");
const cors = require("cors");
const Booking = require("./model/Booking");
const router = express.Router();

// Connect to MongoDB
try {
  mongoDb();
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

// Cors configuration
const allowedOrigins = [process.env.ALLOWED_ORIGIN || "https://wondrous-torte-e1cc88.netlify.app"];
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
}));

// Parse JSON bodies
app.use(express.json());

// Define routes
router.get("/", (req, res) => {
  res.json({ message: "hello from backend" });
});

router.get("/api/booking", async (req, res) => {
  try {
    const bookings = await Booking.find();
    if (bookings.length === 0) {
      return res.status(200).json({ message: "No booking details available." });
    }
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});