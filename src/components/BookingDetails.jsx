import React from 'react'
import { useSelector } from 'react-redux'

const BookingDetails = () => {
  const bookingDetail = useSelector((state)=>state.bookingDetails);
  if (!bookingDetail.movie && !bookingDetail.time && Object.keys(bookingDetail.seats || {}).length === 0) {
    return <div>No booking details available.</div>;
  }
  return (
    <div>
      <div className='border mt-5 p-4' style={{height:'400px'}}>
        <div className='d-flex m-2'>
          <h5>Booking Details - &nbsp;</h5>{bookingDetail.movie}
        </div>
        <div className='d-flex m-2'>
          <h5>Booking Time -&nbsp;</h5>{bookingDetail.time}
        </div>
        <div className='m-2'>
          <h5>Booking Seat -</h5>
          {Object.entries(bookingDetail.seats).map(([seatType,seatValue])=>(
          <li key={seatType} type='square'>{seatType.toUpperCase()}: {seatValue}</li>
        ))}
        </div>
      </div>
    </div>
  )
}
export default BookingDetails;