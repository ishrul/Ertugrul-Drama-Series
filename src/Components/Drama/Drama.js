import React from "react";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./Drama.css";

const Drama = () => {
  // use state for actor or card data load
  const [actors, setActors] = useState([]);
  //   use state for taking data on click in add to cart btn
  const [cart, setCart] = useState([]);
  //   use effect function for getting or setting data in card
  useEffect(() => {
    fetch("./drama.JSON")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);

  //   function for cart handling
  const handleAddToCart = (actor) => {
    const newCart = [...cart, actor];
    setCart(newCart);
  };

  return (
    //   drama section
    <div className="Drama-section">
      {/* cart component */}
      <Cart cart={cart} />
      {/* cards division */}
      <div className="drama-container cards-div">
        {actors.map((actor) => (
          <Card
            key={actor.charecter}
            actor={actor}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container"></div>
    </div>
  );
};

export default Drama;
