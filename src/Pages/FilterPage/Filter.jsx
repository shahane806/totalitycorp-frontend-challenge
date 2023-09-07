import React, { useEffect, useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import BlockIcon from "@mui/icons-material/Block";
import StarBoarder from "@mui/icons-material/StarBorder";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

import { Checkbox, TextField } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useDispatch, useSelector } from "react-redux";
const Filter = ({ id }) => {
  const [open, setOpen] = useState(true);
  const [openPriceRange, setOpenPriceRange] = useState(false);
  const [openRating, setOpenRating] = useState(false);
  const [Category, SetCategory] = useState([]);
  const [PriceRangeFrom, setPriceRangeFrom] = useState(0);
  const [PriceRangeTo, setPriceRangeTo] = useState(0);
  const [mAndT, setmAndT] = useState(false);
  const [cAndl, setcAndl] = useState(false);
  const [Accessories, setAccessories] = useState(false);
  const [TAndM, setTAndM] = useState(false);
  const dispatch = useDispatch();
  const [rate, setFilterRate] = useState(0);

  const ApplyFilter = () => {
    dispatch({
      type: "FILTER",
      data: {
        Category,
        PriceRangeFrom,
        PriceRangeTo,
        mAndT,
        cAndl,
        Accessories,
        TAndM,
        rate,
      },
   });
    
  };
  const ResetFilter = () => {
    SetCategory([]);
    setPriceRangeFrom(0);
    setPriceRangeTo(0);
    setmAndT(false);
    setcAndl(false);
    setAccessories(false);
    setTAndM(false);
    setFilterRate(0);
    dispatch({
      type: "FILTER",
      data: null,
    });
  };
  const handlemAndTCategory = (e, category) => {
    e.preventDefault();
    Category.push(category);

    Category.forEach((key, value) => {
      if (key === "Mobile & Tablets") {
        setmAndT(!mAndT);
      }
    });
  };
  const handlecAndlCategory = (e, category) => {
    e.preventDefault();
    Category.push(category);
    Category.forEach((key, value) => {
      if (key === "Computers & Laptops") {
        setcAndl(!cAndl);
      }
    });
  };
  const handleAccessoriesCategory = (e, category) => {
    e.preventDefault();
    Category.push(category);
    Category.forEach((key, value) => {
      if (key === "Accessories") {
        setAccessories(!Accessories);
      }
    });
  };
  const handleTAndMCategory = (e, category) => {
    e.preventDefault();
    Category.push(category);

    Category.forEach((key, value) => {
      if (key === "TV's & Monitors") {
        setTAndM(!TAndM);
      }
    });
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickPriceRange = () => {
    setOpenPriceRange(!openPriceRange);
  };
  const handleClickRating = () => {
    setOpenRating(!openRating);
  };
  const handleFilterRate = () => {
    setFilterRate(0);
  };
  return (
    <List
      id={id}
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          PRODUCT FILTER
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Category" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Checkbox
                checked={mAndT}
                onClick={(e) => handlemAndTCategory(e, "Mobile & Tablets")}
              />
            </ListItemIcon>
            <ListItemText primary="Mobile & Tablets" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Checkbox
                checked={cAndl}
                onClick={(e) => handlecAndlCategory(e, "Computers & Laptops")}
              />
            </ListItemIcon>
            <ListItemText primary="Computers & Laptops" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Checkbox
                checked={Accessories}
                onClick={(e) => handleAccessoriesCategory(e, "Accessories")}
              />
            </ListItemIcon>
            <ListItemText primary="Accessories" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Checkbox
                checked={TAndM}
                onClick={(e) => handleTAndMCategory(e, "TV's & Monitors")}
              />
            </ListItemIcon>
            <ListItemText primary="TV's & Monitors" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickPriceRange}>
        <ListItemIcon>
          <CurrencyRupeeIcon />
        </ListItemIcon>
        <ListItemText primary="Price Range" />
        {openPriceRange ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openPriceRange} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 6 }}>
            <TextField
              id="outlined-basic"
              label="From"
              variant="outlined"
              onChange={(e) => setPriceRangeFrom(e.target.value)}
              style={{ marginRight: "10px" }}
            />
            <TextField
              id="outlined-basic"
              label="To"
              onChange={(e) => setPriceRangeTo(e.target.value)}
              variant="outlined"
            />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickRating}>
        <ListItemIcon>
          <StarBoarder />
        </ListItemIcon>
        <ListItemText primary="Rating" />
        {openRating ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openRating} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 6 }}>
            <Button onClick={handleFilterRate}>
              <BlockIcon style={{ color: "red" }} />
            </Button>
            <Rating
              name="half-rating"
              defaultValue={0}
              onChange={(e) => setFilterRate(e.target.value)}
              value={rate}
              precision={1}
            />
          </ListItemButton>
        </List>
      </Collapse>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 10 }}>
          <Button onClick={ApplyFilter}>Apply</Button>
          <Button onClick={ResetFilter}>Reset</Button>
        </ListItemButton>
      </List>
    </List>
  );
};

export default Filter;
