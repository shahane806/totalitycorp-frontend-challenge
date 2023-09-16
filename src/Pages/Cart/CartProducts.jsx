import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Rating from "@mui/material/Rating";
import "../FilterPage/FilterPage.css";
import { useState, useEffect } from "react";
export default function CartProducts({
  index,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductCategory,
  ProductRating,
  TotalCost,
}) {
  const productStyle = {
    width: "100px",
    display:"flex",
    margin: "30px auto 40px auto",
    objectfit: "contain",
    padding: "3px",
  };
  const dispatch = useDispatch();
  
  const cart = useSelector((state)=>state?.AddToCartReducer);
  const [newCart,setNewCart] = useState([]);
  useEffect(()=>{
    setNewCart(cart);
  },[cart,newCart])
  const handleRemoveFromCart = (e, index) => {
    e.preventDefault();
    newCart.splice(index,1);
    dispatch({ type: "REMOVE_FROM_CART", data: newCart });
  };
  return (
    <Card sx={{ margin: "30px" }} className="FilterProductsCard" >
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
            Quantity: {TotalCost/ProductPrice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            TotalCost: {TotalCost}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ProductCategory}
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
        <Button
          size="small"
          color="primary"
          onClick={(e) => handleRemoveFromCart(e, index)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
