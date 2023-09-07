import React from "react";
import paymentFailed from "../../assets/logos/paymentFailed.webp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
import { Button } from "@mui/material";
import {Typography} from "@mui/material";
const PaymentFailed = () => {
    const navigate = useNavigate();
    const handlePaymentFailedTryAgain = (e) => { e.preventDefault(); navigate("/Cart")};
 
  return (
    <div id="PaymentSuccessful" className="paymentSuccessful">
      <img src={paymentFailed} alt="paymentFailed" />
      <div className="subtotal">
        <Typography gutterBottom variant="h5" component="div">
         Payment Failed
        </Typography>
      </div>

      <div className="paymentSuccessfulBtns">
        <Link to="/">
        <Button className="LoginInputsSubmit LoginInputs paymentSuccessfulBtn">
            Go To Dashboard
          </Button>
        </Link>

        <Button
          onClick={handlePaymentFailedTryAgain}
          className="DownloadIcon paymentSuccessfulBtn LoginInputsSubmit LoginInputs"
        >
          <span style={{ marginRight: "10px" }}>Try Again</span>
        </Button>
        <div></div>
      </div>
    </div>
  );
};

export default PaymentFailed;
