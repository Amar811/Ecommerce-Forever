import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { products } from "../assets/assets";
import Title from "./Title";
import Product from "../pages/Product";
import ProductItem from "./ProductItem";

const RelatedProduct = ({ category, subCategory }) => {
  const { Products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = [...products]; // Using the spread operator to copy the array

      // Filter products based on category and subCategory
      if (category) {
        productCopy = productCopy.filter((item) => category === item.category);
      }
      if (subCategory) {
        productCopy = productCopy.filter(
          (item) => subCategory === item.subCategory
        );
      }

      setRelated(productCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
        <div className="text-center text-3xl py-2">
            <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {
            related.map((item,index)=>(
                <ProductItem key={index} _id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}/>
            ))
          }
        </div>

    </div>
  )
};

export default RelatedProduct;
