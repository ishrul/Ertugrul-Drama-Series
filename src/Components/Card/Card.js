import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCamera,
  faAddressCard,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  // distructuring for getting all data from props
  const { charecter, actor, Nationality, img, salary, age } = props.actor;

  return (
    <div className="card">
      <div>
        <img src={img} className="image" alt="" />
      </div>
      <h4>Name: {actor}</h4>
      <h5>Role: {charecter}</h5>
      <h5>Country: {Nationality}</h5>
      <h5>Age: {age}</h5>
      <h5>Salary: $ {salary}</h5>
      {/* button or icons div */}
      <div className="button-div">
        <button onClick={() => props.handleAddToCart(props.actor)}>
          <FontAwesomeIcon className="shopping-cart" icon={faShoppingCart} />
          Add To Cart
        </button>
        <br />
        <div>
          <FontAwesomeIcon className="icon" icon={faCamera} />
          <FontAwesomeIcon className="icon" icon={faStar} />
        </div>
      </div>
    </div>
  );
};

export default Card;
