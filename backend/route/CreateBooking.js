const express = require('express');
const router = express.Router();
const Booking = require('../model/Booking');

router.post("/createbooking",async(req,res)=>{
    try{
        await Booking.create({
            movie:req.body.movie,
            time:req.body.time,
            seats:req.body.seats
        })
        res.status(200).send('Booking created successfully');
    }catch(error){
        console.log(error);
        res.json({success:false})
    }
})


module.exports = router;

