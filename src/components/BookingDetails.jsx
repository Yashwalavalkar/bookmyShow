import React, { useEffect, useState } from "react";

const BookingDetails = () => {
  //The fetching data is comming here
  const [data, setData] = useState(null);

  //Function for fetching the data from database
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://bookmyshow-6-6lon.onrender.com/api/booking",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  // Each render refresh the page that the lastest data will be visible
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container border">
      <h1>Booking Details</h1>
      {/* Displaying the data here */}
      {data && data.message === "No booking details available." ? (
        <p>No Booking Details</p>
      ) : data ? (
        <div>
          <p>
            <strong>Movie:</strong> {data.movie}
          </p>
          <p>
            <strong>Time:</strong> {data.time}
          </p>
          <p>
            <strong>Seats:</strong>
          </p>
          {data.seats &&
            Object.entries(data.seats).map(([seat, value]) => (
              <span className="d-flex" key={seat}>
                {seat}: {value ? value : ""}{" "}
              </span>
            ))}
        </div>
      ) : (
        <h6>Loading ...</h6>
      )}
    </div>
  );
};

export default BookingDetails;
