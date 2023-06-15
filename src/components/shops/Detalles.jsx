import React from "react";

const ProductDetailsPage = ({ shopItems, match }) => {
  const productId = match.params.id;
  const shopItem = shopItems.find((item) => item.id === productId);

  if (!shopItem) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-details-page">
      <h2>{shopItem.name}</h2>
      <img src={shopItem.cover} alt="" />
      <p>Price: ${shopItem.price}.00</p>
      <p>Discount: {shopItem.discount}% Off</p>
      {/* Agrega más detalles del producto según tus necesidades */}
    </div>
  );
};

export default ProductDetailsPage;