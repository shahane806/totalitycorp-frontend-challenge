import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import '../../Pages/Dashboard/Dashboard.css'
import { useSelector } from "react-redux";
const Products = () => {
  const [Products,setProducts] = useState(null);
  const ProductCart = useSelector((state)=>state?.SetProductReducer);
  useEffect(()=>{
    setProducts(ProductCart[0]);
  },[ProductCart])
  return (
    <div id="Dashboard">
      <div className="Banner">
        
      </div>
      <div className="ProductSectionOne">
        {Products?.map(
          (
            { ProductImage, ProductName, ProductPrice, ProductCategory, ProductRating },
            index
          ) => {
            return (
              <ProductCard
                key={index}
                ProductImage={ProductImage}
                ProductName={ProductName}
                ProductPrice={ProductPrice}
                ProductCategory={ ProductCategory}
                ProductRating={ProductRating}
              />
            );
          }
        )}
      </div>
      <div className="ProductSectionTwo">
        {Products?.map(
          (
            { ProductImage, ProductName, ProductPrice, ProductCategory, ProductRating },
            index
          ) => {
            return (
              <ProductCard
                key={index}
                ProductImage={ProductImage}
                ProductName={ProductName}
                ProductPrice={ProductPrice}
                ProductCategory={ProductCategory}
                ProductRating={ProductRating}
              />
            );
          }
        )}
      </div>
      <div className="ProductSectionThree">
        {Products?.map(
          (
            { ProductImage, ProductName, ProductPrice,ProductCategory, ProductRating },
            index
          ) => {
            return (
              <ProductCard
                key={index}
                ProductImage={ProductImage}
                ProductName={ProductName}
                ProductPrice={ProductPrice}
                ProductCategory={ProductCategory}
                ProductRating={ProductRating}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Products;
