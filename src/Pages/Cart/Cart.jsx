import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartProducts from "./CartProducts";
import CustomizedSnackbars from "./Notification";
import Subtotal from "./Subtotal";
import { Typography } from "@mui/material";
const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cpl, setCPL] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const cart = useSelector((state) => state?.AddToCartReducer);
  useEffect(() => {
    setCartProducts(cart);
    setCPL(cart.length);
    setTotalPrice(
      cart.reduce(
        (amount, item) => amount + item?.TotalCost,

        0
      )
    );
    setSubtotal(cart.length);
  }, [cart]);
  return (
    <div className="FilterProductsCard">
      {cpl !== 0 && <Subtotal subtotal={subtotal} totalPrice={totalPrice} />}
      {cpl !== 0 && (
        <div id="Checkout" className="subtotal">
          <Typography gutterBottom variant="h5" component="div">
            &nbsp; &nbsp; Review Cart
          </Typography>
          <div id="Cart">
        <div className="ProductSectionOne">
          {cpl === 0 ? (
            <CustomizedSnackbars />
          ) : (
            cartProducts?.map(
              (
                {
                  ProductImage,
                  ProductName,
                  ProductQuantity,
                  ProductPrice,
                  ProductCategory,
                  ProductRating,
                  TotalCost,
                },
                index
              ) => {
                return (
                  <CartProducts
                    key={index}
                    index={index}
                    ProductImage={ProductImage}
                    ProductName={ProductName}
                    ProductPrice={ProductPrice}
                    ProductQuantity={ProductQuantity}
                    ProductCategory={ProductCategory}
                    TotalCost={TotalCost}
                    ProductRating={ProductRating}
                  />
                );
              }
            )
          )}
        </div>
      </div>
        </div>
      )}

     
    </div>
  );
};

export default Cart;
