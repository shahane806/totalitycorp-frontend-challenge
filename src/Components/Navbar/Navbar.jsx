import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logos/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import NavDrawer from "./NavDrawer";
import { useEffect } from "react";
import "./Navbar.css";

export default function ButtonAppBar({display}) {
  const cart = useSelector((state) => state?.AddToCartReducer);
  const [count, setCount] = useState(0);
  useEffect(() => {
   setCount(cart.length);
  }, [cart]);
  const newStyle = {
    display:display,
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          maxWidth: "100%",
          border: "1px solid grey",
          backgroundColor: "white",
          color: "grey",
        }}
      >
        <Toolbar>
         
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
              <img src={logo} alt="logo" className="logo"></img>
            </Link>
            <Link
              to="/Filter"
              style={{
                textDecoration: "none",
                color: "grey",
                paddingLeft: "20px",
              }}
            >
              
              <Typography sx={{ minWidth: 50 }}>PRODUCTS </Typography>
            <NavDrawer newStyle={newStyle}/>
            </Link>
          </Typography>
          <Link
            to="/Cart"
            style={{
              textDecoration: "none",
              color: "grey",
              paddingLeft: "20px",
            }}
          >
            <Typography sx={{ minWidth: 10, textAlign: "center" }}>
              {count} CART
            </Typography>
          </Link>

         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
