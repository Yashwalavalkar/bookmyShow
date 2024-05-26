import React, { useState } from "react";
import BookingDetails from "../components/BookingDetails";
import { useDispatch } from "react-redux";
import { bookingDetails } from "../redux/action";

const Home = () => {
  //change commited
  const [activeButton, setActiveButton] = useState(null);
  const [activeButton1, setActiveButton1] = useState(null);
  const [activeButton2, setActiveButton2] = useState(null);

  //state is declared
  const [data, setData] = useState({
    movie: '',
    time: '',
    seats: {
      a1: '',
      a2: '',
      a3: '',
      a4: '',
      d1: '',
      d2: ''
    }
  });

  // dispating action
  const dispatch = useDispatch();
  const handleClick = async (e)=>{
    e.preventDefault();
    dispatch(bookingDetails(data));
    setActiveButton(null);
    setActiveButton1(null);
    setActiveButton2(null);
    try{
      const response = await fetch('https://bookmyshow-6-6lon.onrender.com/api/CreateBooking',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        movie:data.movie,
        time:data.time,
        seats:data.seats
      })
    });
    }catch(error){
      console.log(error)
    }
  }
  //set the input changing data to the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      seats: {
        ...prevData.seats,
        [name]: value
      }
    }));
  };
// set the movie data
  const handleMovieClick = (movie, buttonId) => {
    setData((prevData) => ({
      ...prevData,
      movie: movie
    }));
    setActiveButton(buttonId);
  };
// set the time data to state
  const handleTimeClick = (time, buttonId) => {
    setData((prevData) => ({
      ...prevData,
      time: time
    }));
    setActiveButton1(buttonId);
  };
// set the seat data to state
  const handleSeatClick = (seatType, buttonId) => {
    setActiveButton2(buttonId);
  };
  
  return (
    <div>
      <div className="row">
        <div className="col-sm-8">
          <div className="border p-2">
            <div className="d-flex align-items-center mt-3 flex-wrap">
              <h3>Set A Movie</h3>
            </div>
            <button
              className="btn border m-1"
              style={{
                backgroundColor: activeButton === "btn1" ? "red" : "white",
              }}
              onClick={() => handleMovieClick("Suraj Par Mangal Bhari", "btn1")}
            >
              Suraj Par Mangal Bhari
            </button>
            <button
              className="btn border m-1"
              style={{
                backgroundColor: activeButton === "btn2" ? "red" : "white",
              }}
              onClick={() => handleMovieClick("Tenet", "btn2")}
            >
              Tenet
            </button>
            <button
              className="btn border m-1"
              style={{
                backgroundColor: activeButton === "btn3" ? "red" : "white",
              }}
              onClick={() => handleMovieClick("The War With Grandpa", "btn3")}
            >
              The War With Grandpa
            </button>
            <button
              className="btn border m-1"
              style={{
                backgroundColor: activeButton === "btn4" ? "red" : "white",
              }}
              onClick={() => handleMovieClick("The Personal History of David Copperfield", "btn4")}
            >
              The Personal History of David Copperfield
            </button>
            <button
              className="btn border m-1"
              style={{
                backgroundColor: activeButton === "btn5" ? "red" : "white",
              }}
              onClick={() => handleMovieClick("Come Play", "btn5")}
            >
              Come Play
            </button>
          </div>

          <div className="border p-2">
            <div className="d-flex align-items-center mt-3 flex-wrap">
              <h3>Set A Time Slot</h3>
            </div>
            <button
              className="btn border m-1"
              style={{
                backgroundColor: activeButton1 === "btn6" ? "red" : "white",
              }}
              onClick={() => handleTimeClick("10:00 AM", "btn6")}
            >
              10:00 AM
            </button>
            <button
              className="btn border m-1"
              style={{
                backgroundColor: activeButton1 === "btn7" ? "red" : "white",
              }}
              onClick={() => handleTimeClick("01:00 PM", "btn7")}
            >
              01:00 PM
            </button>
            <button
              className="btn border m-1"
              style={{
                backgroundColor: activeButton1 === "btn8" ? "red" : "white",
              }}
              onClick={() => handleTimeClick("3:00 PM", "btn8")}
            >
              3:00 PM
            </button>
            <button
              className="btn border m-1"
              style={{
                backgroundColor: activeButton1 === "btn9" ? "red" : "white",
              }}
              onClick={() => handleTimeClick("6:00 PM", "btn9")}
            >
              6:00 PM
            </button>
            <button
              className="btn border m-1"
              style={{
                backgroundColor: activeButton1 === "btn10" ? "red" : "white",
              }}
              onClick={() => handleTimeClick("8:00 PM", "btn10")}
            >
              8:00 PM
            </button>
          </div>

          <div className="border p-2">
            <div className="d-flex align-items-center mt-3 flex-wrap">
              <h3>Select A Seat</h3>
            </div>
            <div className="d-flex flex-wrap">
              <div
                className="border d-flex flex-column align-items-center justify-content-center m-2"
                style={{
                  backgroundColor: activeButton2 === "btn11" ? "red" : "white",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleSeatClick("A1", "btn11")}
              >
                <div className="m-2">
                  <b>Type A1</b>
                </div>
                <div>
                  <input
                    name='a1'
                    value={data.seats.a1}
                    onChange={handleChange}
                    style={{ width: "40px" }}
                    type="text"
                  />
                </div>
              </div>

              <div
                className="border d-flex flex-column align-items-center justify-content-center m-2"
                style={{
                  backgroundColor: activeButton2 === "btn12" ? "red" : "white",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleSeatClick("A2", "btn12")}
              >
                <div className="m-2">
                  <b>Type A2</b>
                </div>
                <div>
                  <input
                    name='a2'
                    value={data.seats.a2}
                    onChange={handleChange}
                    style={{ width: "40px" }}
                    type="text"
                  />
                </div>
              </div>
              <div
                className="border d-flex flex-column align-items-center justify-content-center m-2"
                style={{
                  backgroundColor: activeButton2 === "btn13" ? "red" : "white",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleSeatClick("A3", "btn13")}
              >
                <div className="m-2">
                  <b>Type A3</b>
                </div>
                <div>
                  <input
                    name='a3'
                    value={data.seats.a3}
                    onChange={handleChange}
                    style={{ width: "40px" }}
                    type="text"
                  />
                </div>
              </div>
              <div
                className="border d-flex flex-column align-items-center justify-content-center m-2"
                style={{
                  backgroundColor: activeButton2 === "btn14" ? "red" : "white",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleSeatClick("A4", "btn14")}
              >
                <div className="m-2">
                  <b>Type A4</b>
                </div>
                <div>
                  <input
                    name='a4'
                    value={data.seats.a4}
                    onChange={handleChange}
                    style={{ width: "40px" }}
                    type="text"
                  />
                </div>
              </div>
              <div
                className="border d-flex flex-column align-items-center justify-content-center m-2"
                style={{
                  backgroundColor: activeButton2 === "btn15" ? "red" : "white",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleSeatClick("D1", "btn15")}
              >
                <div className="m-2">
                  <b>Type D1</b>
                </div>
                <div>
                  <input
                    name='d1'
                    value={data.seats.d1}
                    onChange={handleChange}
                    style={{ width: "40px" }}
                    type="text"
                  />
                </div>
              </div>
              <div
                className="border d-flex flex-column align-items-center justify-content-center m-2"
                style={{
                  backgroundColor: activeButton2 === "btn16" ? "red" : "white",
                  width: "100px",
                  height: "100px",
                }}
                onClick={() => handleSeatClick("D2", "btn16")}
              >
                <div className="m-2">
                  <b>Type D2</b>
                </div>
                <div>
                  <input
                    name='d2'
                    value={data.seats.d2}
                    onChange={handleChange}
                    style={{ width: "40px" }}
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="m-3">
            <button
            style={{
              backgroundColor: activeButton2 === "btn17" ? "red" : "white",
            }}
            
            className="p-2 btn bg-primary" onClick={(e)=>handleClick(e)}>Create</button>
            </div>
          
        </div>

        <div className="col-sm-4">
          <BookingDetails />
        </div>
      </div>
    </div>
  );
};

export default Home;
