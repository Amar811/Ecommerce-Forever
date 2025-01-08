import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets, products } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { produts, currency, cartItems,updateQuantity,navigate } = useContext(ShopContext);
  console.log(cartItems);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    console.log("Temp data:", tempData);
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-top pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item) => {
          console.log("Checking item ID:", item._id);
          const productData = products.find(
            (product) => String(product._id) === String(item._id)
          );

          return (
            <div
              key={item._id}
              className="flex items-center justify-between border-b pb-6"
            >
              {/* Product Details */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                {/* Product Image */}
                <img
                  className="w-16 sm:w-20 rounded"
                  src={productData.image[0]}
                  alt={productData.name}
                />
    
                {/* Product Info */}
                <div>
                  <p className="text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center space-x-5 text-gray-600">
                    <p className="text-sm">
                      {currency}
                      {productData.price}
                    </p>
                    <p className="text-sm px-3 py-1 border rounded bg-gray-100">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
    
              {/* Quantity and Bin Icon */}
              <div className="flex items-center justify-between space-x-96 w-24  sm:w-auto">
                {/* Quantity Input */}
                <input onChange={(e)=>e.target.value === '' || e.target.value==='0' ? null :updateQuantity(item._id,item.size,Number(e.target.value))}
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className="w-12 text-center border rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                {/* Bin Icon */}
                <img onClick={()=>updateQuantity(item._id,item.size,0)}
                  className="w-5 cursor-pointer"
                  src={assets.bin_icon}
                  alt="Delete"
                />
              </div>
            </div>
            
            
          );
        })}
      </div>

      <div className="flex justify-end my-20">
             <div className="w-full sm:w-[450px]">
              <CartTotal/>
              <div className="w-full text-end">
                <button onClick={()=>navigate('/place-order')} className="bg-black text-white text-sm my-8 px-8 py-3">PROCEED TO CHECKOUT</button>

              </div>

             </div>

      </div>
    </div>
  );
};

export default Cart;
