import { createContext, useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar.jsx";
import CurrentMoney from "./components/CurrentMoney.jsx";
import PageContent from "./components/PageContent.jsx";
import Checkout from "./components/Checkout.jsx";
import productData from "./data.js";

export const AppContext = createContext(null);

function App() {
  const [currentMoney, setCurrentMoney] = useState(100000000000);
  const [cart, setCart] = useState([...productData]);

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.map((cartItem) => {
      if (cartItem.count > 0) {
        total = total + cartItem.count * cartItem.price;
      }
    });
    setTotalCost(total);
  }, [cart]);

  return (
    <AppContext.Provider
      value={{ currentMoney, setCurrentMoney, setCart, cart, totalCost }}
    >
      <div className="app-root">
        <div className="app">
          <Navbar />
          <CurrentMoney />
          <PageContent />
          {totalCost > 0 && <Checkout />}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
