import React from "react";
import paymentSuccess from "../../assets/logos/paymentSuccess.gif";
import { Link } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import "./Payment.css";
import { Button } from "@mui/material";
import {Typography} from "@mui/material";
const handleDownloadReceipt = () => {};

const PaymentSuccess = () => {
 

  return (
    <div id="PaymentSuccessful" className="paymentSuccessful">
      <img src={paymentSuccess} alt="paymentSuccessful" />
      <div className="subtotal">
        <Typography gutterBottom variant="h5" component="div">
         Payment Successful
        </Typography>
      </div>

      <div className="paymentSuccessfulBtns">
        <Link to="/">
          <Button className="LoginInputsSubmit LoginInputs paymentSuccessfulBtn">
            Go To Dashboard
          </Button>
        </Link>

        <Button
          onClick={handleDownloadReceipt}
          className="DownloadIcon paymentSuccessfulBtn LoginInputsSubmit LoginInputs"
        >
          <span style={{ marginRight: "10px" }}>Download Recipt</span>
          <DownloadIcon />
        </Button>
        <div></div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
