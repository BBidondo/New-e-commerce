import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ shopItem, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const truncatedTitle = shopItem.name.length > 20 ? `${shopItem.name.slice(0, 18)}...` : shopItem.name;

  return (
    <div className="box">
      <div className="product mtop">
        <Link to={`/product/${shopItem.id}`} className="product-link">
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
              <h4>${shopItem.price}.00</h4>
              <button onClick={() => addToCart(shopItem)}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const ShopCart = ({ shopItems, addToCart, category }) => {
  return (
    <>
      {shopItems.map((shopItem, index) => (
        <ProductCard key={index} shopItem={shopItem} addToCart={addToCart} />
      ))}
    </>
  );
};

export default ShopCart;
