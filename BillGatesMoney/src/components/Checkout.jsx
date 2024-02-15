import { useContext, useState, useEffect } from "react";

import { AppContext } from "../App";
import CheckoutItem from "./CheckoutItem";

function Checkout() {
  const { totalCost, cart } = useContext(AppContext);

  return (
    <div className="checkout">
      <span className="checkout-title">Your Receipt</span>
      <div style={{ height: 20 }} />
      <div className="checkout-bill">
        {cart.map((cartItem) => {
          if (cartItem.count > 0) {
            return (
              <CheckoutItem
                key={cartItem.id}
                title={cartItem.title}
                count={cartItem.count}
                price={cartItem.price}
              />
            );
          }
        })}

        <hr style={{ width: "100%" }} />
        <span className="checkout-total">
          <span>TOTAL:</span>
          <span style={{ color: "#1abc9c" }}>
            {`$${totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          </span>
        </span>
      </div>
    </div>
  );
}

export default Checkout;
