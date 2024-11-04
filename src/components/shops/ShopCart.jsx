import React from "react";
import { useSelector, useDispatch  } from "react-redux";
import {useState, useEffect } from "react";
import Sdata from "./Sdata";
import { getAllProd } from "../../common/redux/actions";




const ProductCard = ({ shopItem, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const truncatedTitle =
    shopItem.name.length > 20 ? `${shopItem.name.slice(0, 18)}...` : shopItem.name;

  return (
    <div className="box">
      <div className="product mtop">
        <div className="img">
          <span className="discount">{shopItem.discount}% Off</span>
          <img src={shopItem.cover} alt="" />
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
      </div>
    </div>
  );
};

const ShopCart = ({ addToCart, category }) => {
  const dispatch = useDispatch();
  const shopItems = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getAllProd()); // Llama a la acción getAllProd para cargar los productos
  }, [dispatch]);

  return (
    <>
      {shopItems.map((shopItem) => (
        <ProductCard key={shopItem.id} shopItem={shopItem} addToCart={addToCart} />
      ))}
    </>
  );
};

export default ShopCart;

