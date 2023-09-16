import * as React from "react";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logos/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import NavDrawer from "./NavDrawer";
import { useEffect } from "react";
import "./Navbar.css";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Skeleton } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimits from "@mui/icons-material/CardTravel";

export default function ButtonAppBar({display}) {
  const cart = useSelector((state) => state?.AddToCartReducer);
  const [count, setCount] = useState(0);
  useEffect(() => {
   setCount(cart.length);
  }, [cart]);
 
  const newStyle = {
    display:display,
  }
  const [loading, setLoading] = useState(false);
  setTimeout(() => {

    setLoading(true);
    clearTimeout();
  }, 3000);
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
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
           
            { loading &&  <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
              <img src={logo} alt="logo" className="logo"></img>
            </Link>||
              !loading&&<Skeleton variant="rectangle" width={100} height={23} />

            }
            <Link
              to="/Filter"
              style={{
                textDecoration: "none",
                color: "grey",
                paddingLeft: "20px",
              }}
            >
              
              { loading && <Typography sx={{ minWidth: 10, textAlign: "center" }}>
              <InventoryIcon/>
            </Typography>||
              !loading&&<Skeleton variant="rectangle" width={100} height={23} />

            }
           { loading && <NavDrawer newStyle={newStyle}/>}
            
            </Link>
            { loading &&  <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>||
              !loading&&<Skeleton variant="rectangle" width={100} height={23} />

            }
           
          </Typography>
          
          <Link
            to="/Cart"
            style={{
              textDecoration: "none",
              color: "grey",
              paddingLeft: "20px",
            }}
          >
            
            
           { loading && <><Typography sx={{ minWidth: 10, textAlign: "center" }}>
              {count} 
            </Typography> <ProductionQuantityLimits/></>||
              !loading&&<Skeleton variant="rectangle" width={100} height={23} />

            }
          </Link>
        
          <Link
            to="/Auth/SignIn"
            style={{
              textDecoration: "none",
              color: "grey",
              paddingLeft: "20px",
            }}
          >
           { loading && <Typography sx={{ minWidth: 10, textAlign: "center" }}>
              <Avatar/>
            </Typography>||
              !loading&&<Skeleton variant="rectangle" width={100} height={23} />

            }
            
          </Link>
         
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
