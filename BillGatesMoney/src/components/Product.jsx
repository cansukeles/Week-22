import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { AppContext } from "../App";
import "../App.css";

function Product({ id, title, price, image, count }) {
  const [currentCount, setCurrentCount] = useState(count);

  const { currentMoney, setCurrentMoney, setCart, cart } =
    useContext(AppContext);

  useEffect(() => {
    const tempCart = [...cart];
    const productIndex = tempCart.findIndex((item) => item.id === id);
    if (productIndex < 0) {
      return;
    }

    let product = tempCart[productIndex];
    product = { ...product, count: currentCount };
    tempCart[productIndex] = product;
    setCart(tempCart);
  }, [currentCount, id, setCart]);

  const handleSell = (sellCount) => {
    if (currentCount > sellCount - 1) {
      setCurrentMoney((prevState) => prevState + price * sellCount);
      setCurrentCount((prevState) => prevState - sellCount);
    }
  };

  const handleBuy = (buyCount) => {
    if (currentMoney >= price * buyCount) {
      setCurrentMoney((prevState) => prevState - price * buyCount);
      setCurrentCount((prevState) => prevState + buyCount);
    }
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    const countDifference = newValue - currentCount;

    console.log("countDifference", countDifference);

    if (countDifference > 0) {
      handleBuy(countDifference);
    } else {
      handleSell(-countDifference);
    }
  };

  return (
    <div className="product-box">
      <img src={image} className="product-image" />
      <span
        style={{
          fontSize: "22px",
          fontWeight: 700,
          fontFamily: "Roboto, sans-serif",
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontSize: "20px",
          color: "#24c486",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
      <div className="product-sell-buy">
        <button
          className="product-sell-button"
          style={
            currentCount === 0 ? { background: "#f1f2f6", color: "#333" } : {}
          }
          onClick={() => handleSell(1)}
        >
          Sell
        </button>
        <input
          className="product-count-input"
          value={currentCount}
          onChange={handleInputChange}
        />
        <button className="product-buy-button" onClick={() => handleBuy(1)}>
          Buy
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Product;
