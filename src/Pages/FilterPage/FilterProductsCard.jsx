import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Button, CardActionArea, CardActions, TextField } from "@mui/material";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Rating from "@mui/material/Rating";
import "./FilterPage.css";
import { useState, useEffect } from "react";

const blue = {
  100: "#daecff",
  200: "#b6daff",
  300: "#66b2ff",
  400: "#3399ff",
  500: "#007fff",
  600: "#0072e5",
  800: "#004c99",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledInputRoot = styled("div")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[500]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`
);

const StyledInput = styled("input")(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  border-radius: 4px;
  margin: 0 4px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }

  &:focus-visible {
    outline: 0;
  }
`
);

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 0;
  border-radius: 999px;
  color: ${theme.palette.mode === "dark" ? blue[300] : blue[600]};
  background: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? blue[800] : blue[100]};
    cursor: pointer;
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`
);

export default function FilterProductsCard({
  ProductImage,
  ProductName,

  ProductPrice,
  ProductCategory,
  ProductRating,
}) {
  const productStyle = {
    width: "200px",

    margin: "30px auto 40px auto",
    objectfit: "contain",
    padding: "3px",
  };

  const dispatch = useDispatch();
  const [ProductQuantity, SetProductQuantity] = useState(1);
  const [counter, setCounter] = useState(1);
  const [TotalCost, setTotalCost] = useState(1);

  const c = useSelector((state) => state?.CounterReducer);
  useEffect(() => {
    SetProductQuantity(c?.data);
    setTotalCost(ProductPrice * c?.data);

  }, [c]);

  const handleDecrementCounter = () => {
    const updateCounter = counter - 1;
    if (updateCounter < 1) {
      setCounter(1);
      dispatch({ type: "COUNTER", data: updateCounter });
    } else {
      setCounter(updateCounter);
      dispatch({ type: "COUNTER", data: updateCounter });
    }
  };
  const handleIncrementCounter = () => {
    const updateCounter = counter + 1;
    setCounter(updateCounter);
    dispatch({ type: "COUNTER", data: updateCounter });
  };

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      data: {
        ProductQuantity,
        ProductImage,
        ProductName,
        ProductPrice,
        ProductCategory,
        ProductRating,
        TotalCost,
      },
    });
  };

  return (
    <Card sx={{ margin: "30px" }} className="FilterProductsCard">
      <CardActionArea>
        <CardMedia
          component="img"
          style={productStyle}
          image={ProductImage}
          alt={ProductName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ProductName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ₹{ProductPrice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ProductCategory}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total Cost : {ProductPrice * counter}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Rating
              name="half-rating-read"
              defaultValue={ProductRating}
              precision={0.5}
              readOnly
            />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div id="Inputs">
          <div>
            <Button
              style={{ marginRight: "10px" }}
              onClick={handleDecrementCounter}
            >
              -
            </Button>
          </div>
          <div>
            <TextField
              onChange={(e) => setCounter(e.target.value)}
              value={counter}
              id="Inputs_TextField"
            />
          </div>
          <div>
            <Button
              style={{ marginLeft: "10px" }}
              onClick={handleIncrementCounter}
            >
              +
            </Button>
          </div>
        </div>
      </CardActions>
      <CardActions>
        <Button size="small" color="primary" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
