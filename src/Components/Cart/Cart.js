import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let totalSalary = 0;
  let name = [];
  for (const actor of cart) {
    totalSalary = totalSalary + actor.salary;
    name.push(actor.actor);
  }

  return (
    <div>
      <div className="cart-div">
        <div id="cart" className="cart-text">
          <h1>Actor Added: {props.cart.length}</h1>
          <h2>Total Salary: $ {totalSalary}</h2>
          <ul>
            {name.map((nam) => (
              <li> {nam}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
