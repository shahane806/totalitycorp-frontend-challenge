import React, { useState } from "react";
import "./Cart.css";
import { TextField, Typography } from "@mui/material";
import {useNavigate} from 'react-router-dom';

const Subtotal = ({ subtotal, totalPrice }) => {
const navigate = useNavigate();
const [card,setCard] = useState(null);
const [cvv,setCVV] = useState(null);
const [expiryDate,setExpiryDate] = useState(null);
const [name , setName] = useState(null);
const [Address , setAddress] = useState(null);
const [Mobile , setMobile] = useState(null);


const handlePayment=()=>{
    card==null||cvv==null||expiryDate==null||name==null||Address==null||Mobile==null? navigate("/Payment/Failed"):navigate("/Payment/Successful");
    }
  return (
    <div id="Checkout">
      <div className="subtotal">
        <Typography gutterBottom variant="h5" component="div">
          Checkout
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Total {subtotal} items
        </Typography>
      </div>
      <div className="subtotal">
        <Typography gutterBottom variant="h5" component="div">
          Total Amount : ₹{totalPrice}
        </Typography>
      </div>
      <br></br>
      <div className="subtotal">
        <Typography gutterBottom variant="h5" component="div">
          Shipping Address
        </Typography>
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-aligned"
          label="Name"
          onChange={e=>setName(e.target.value)}
          fullWidth
        />
        <TextField
          helperText="Please enter your Address"
          id="demo-helper-text-aligned"
          label="Address"
          onChange={e=>setAddress(e.target.value)}
          fullWidth
         
        />
        <TextField
          helperText="Please enter your Mobile"
          id="demo-helper-text-aligned"
          label="Mobile"
          onChange={e=>setMobile(e.target.value)}
          fullWidth
        />
     
      </div>
      <br></br>
      <div className="subtotal">
      <Typography gutterBottom variant="h5" component="div">
          Payment Details
        </Typography>
        <TextField
          helperText="Please enter your Card Number"
          id="demo-helper-text-aligned"
          label="Card"
          onChange={e=>setCard(e.target.value)}
          fullWidth
        />
        <TextField
          helperText="Please enter your Expiry Date"
          id="demo-helper-text-aligned"
          label="DD/MM"
          onChange={e=>setExpiryDate(e.target.value)}
          fullWidth
        
        />
        <TextField
          helperText="Please enter your CVV"
          id="demo-helper-text-aligned"
          label="CVV"
          onChange={e=>setCVV(e.target.value)}
          fullWidth
          
        />
      </div>
      

      <button className="AddToCartButton subtotal" onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default Subtotal;
