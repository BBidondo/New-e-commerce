import React, { useState } from "react";

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {shopItems.map((shopItem, index) => {
        // Truncar el título si es demasiado largo
        const truncatedTitle = shopItem.name.length > 20 ? `${shopItem.name.slice(0, 18)}...` : shopItem.name;

        return (
          <div className="box" key={index}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{shopItem.discount}% Off</span>
                <img src={shopItem.cover} alt="" />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <h3 title={shopItem.name}>{truncatedTitle}</h3>
                <div className="price">
                  <h4>${shopItem.price}.00 </h4>
                  <button onClick={() => addToCart(shopItem)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
