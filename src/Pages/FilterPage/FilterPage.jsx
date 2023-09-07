import * as React from "react";
import "./FilterPage.css";

import { useState, useEffect } from "react";
import Filter from "./Filter";
import FilterProductsCard from "../../Pages/FilterPage/FilterProductsCard";
import { useSelector } from "react-redux";
export default function FilterPage() {
  const [Products, setProducts] = useState([]);
  const [FilteredProducts, setFilteredProducts] = useState(null);
  const [temp, setTemp] = useState([]);
  const [temp2, setTemp2] = useState([]);
  const ProductCart = useSelector((state) => state?.SetProductReducer);
  const filter = useSelector((state) => state?.FilterReducer);

  useEffect(() => {
    setProducts(ProductCart[0]);
    setTemp2(ProductCart[0]);
    Products.map((item, index) => {
      if (filter) {
        if (filter?.mAndT) {
          setTemp2(Products);

          if (item?.ProductCategory == "Mobile & Tablets") {
            temp.push(temp2.splice(index, 1)[0]);
            setFilteredProducts(temp);
          }
        }
        if (filter?.cAndl) {
          setTemp2(Products);
          if (item?.ProductCategory == "Computers & Laptops") {
            temp.push(temp2.splice(index, 1)[0]);
            setFilteredProducts(temp);
          }
        }
        if (filter?.TAndM) {
          setTemp2(Products);
          if (item?.ProductCategory == "TV's & Monitors") {
            temp.push(temp2.splice(index, 1)[0]);
            setFilteredProducts(temp);
          }
        }
        if (filter?.Accessories) {
          setTemp2(Products);
          if (item?.ProductCategory == "Accessories") {
            temp.push(temp2.splice(index, 1)[0]);
            setFilteredProducts(temp);
          }
        }
      } else {
        setFilteredProducts(Products);
      }
    });
  }, [ filter,ProductCart]);

  return (
    <div id="FilterPage">
      <Filter id={"Filter"} />

      <div id="FilteredProducts" className="FilteredProducts">
        {FilteredProducts &&
          FilteredProducts?.map(
            (
              {
                ProductImage,
                ProductName,
                ProductPrice,
                ProductCategory,
                ProductRating,
              },
              index
            ) => {
              return (
                <FilterProductsCard
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
        {!FilteredProducts &&
          Products?.map(
            (
              {
                ProductImage,
                ProductName,
                ProductPrice,
                ProductCategory,
                ProductRating,
              },
              index
            ) => {
              return (
                <FilterProductsCard
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
}
