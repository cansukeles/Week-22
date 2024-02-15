import { useState, useContext } from "react";
import data from "../data";
import { AppContext } from "../App";

function CurrentMoney() {
  const { currentMoney } = useContext(AppContext);

  //   const totalWorth = data.reduce((acc, item) => {
  //     return acc + item.price;
  //   }, 0);
  return (
    <div className="totalworth-container">
      <h2 className="total-worth">
        ${currentMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </h2>
    </div>
  );
}

export default CurrentMoney;
