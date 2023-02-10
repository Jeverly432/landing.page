import React from "react";
import "../../style/style.scss";

const Header = () => {
  return (
    <header className="header">
      <ul className="header__row">
        <li className="header__row-title__gradient">Home</li>
        <li className="header__row-title">Shop</li>
        <li className="header__row-title">About Us</li>
        <li className="header__row-title">Contact</li>
      </ul>
      <section className="article__container">
        <div className="article__title">
          Bring Serenity to Your Place <br /> With Interior Plants
        </div>
        <div className="article__text">
          find your dream plant for you home decoration <br /> with us, we will
          make it happen.
        </div>
        <div className="article__container-second">
          <input
            className="article__container-input"
            type="text"
            placeholder="Search plant"
          ></input>
          <div className="article__container-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
