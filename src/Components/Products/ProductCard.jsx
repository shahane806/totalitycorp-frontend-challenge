import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
export default function ProductCard({
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
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
    clearTimeout();
  }, 3000);

  const [ProductQuantity, SetProductQuantity] = useState(0);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    localStorage.setItem("Counter", counter);

    SetProductQuantity(localStorage.getItem("Counter"));
  }, [ProductQuantity, counter]);
  const [TotalCost, setTotalCost] = useState(0);
  useEffect(() => {
    setTotalCost(ProductPrice * ProductQuantity);
  }, [ProductQuantity]);
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
    <Card sx={{ maxWidth: 400, margin: "30px" }}>
      {!loading && <Skeleton variant="rectangle" width={500} height={500} />}
      {
        loading && <>
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
        <Button size="small" color="primary" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </CardActions>
        </>
      }
    </Card>
  );
}
