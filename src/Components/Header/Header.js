import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Ertugrul Drama Series</h1>
        <p>
          This series is about the Turkish warrior Ertugrul from the 13th
          century, one of the most famous warriors of his time and also the
          father of Osman (the founder of the Ottoman Empire). He is an
          ambitious man who wants to bring peace and justice to his people.
        </p>
        <h2>
          Total Budget: <span className="budget">150 Billion</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
