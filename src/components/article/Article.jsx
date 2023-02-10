import React from "react";
import "../../style/style.scss";
import cube from "../../img/cube.png";
import headset from "../../img/headset.png";
import wallet from "../../img/wallet.png";
import flowerFirst from "../../img/flowerFirst.png";
import flowerSecond from "../../img/flowerSecond.png";
import flowerThird from "../../img/flowerThird.png";
import roomFirst from "../../img/roomFirst.jpg";
import sun from "../../img/sun.png";
import drop from "../../img/drop.png";
import flower from "../../img/flower.png";

const Article = () => {
  return (
    <article className="article">
      <section className="article__info">
        <div className="article__container-wrap">
          <div className="article__item">
            <div className="article__item-container__img">
              <img className="article__item-img" src={cube} alt="cube" />
            </div>
            <div className="article__item-right__container">
              <p className="article__item__title">Free Shapping</p>
              <p className="article__item__text">No charge for each delivery</p>
            </div>
          </div>
          <div className="article__item">
            <div className="article__item-container__img">
              <img className="article__item-img" src={headset} alt="headset" />
            </div>
            <div className="article__item-right__container">
              <p className="article__item__title">Quick Payment</p>
              <p className="article__item__text">100% secure payment</p>
            </div>
          </div>
          <div className="article__item">
            <div className="article__item-container__img">
              <img className="article__item-img" src={wallet} alt="wallet" />
            </div>
            <div className="article__item-right__container">
              <p className="article__item__title">Quick Support</p>
              <p className="article__item__text">24/7 quick support</p>
            </div>
          </div>
        </div>
        <div className="article__market">
          <div className="article__seller">
            <p className="article__seller-title">
              Best Seller <br /> Product
            </p>
            <div className="article__seller-info__container">
              <p className="article__seller-text">See all collection</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="article__seller-svg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
          </div>
          <div className="article__production">
            <div className="article__production-container">
              <div className="article__production-wrap__first">
                <div className="article__production-img__wrap">
                  <img
                    className="article__production-img"
                    src={flowerFirst}
                    alt="flowerFirst"
                  ></img>
                </div>
              </div>
              <div className="article__production-wrap__second">
                <div className="article__production-header__wrap">
                  <p className="article__production-header__title"> Cammile</p>
                  <div className="article__production-header__stars">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </div>
                <div className="article__production-under__wrap">
                  <p className="article__production-under__wrap-price">70$</p>
                  <div className="article__production-under__wrap-add">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="article__production-under__wrap-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="article__production-container">
              <div className="article__production-wrap__first">
                <div className="article__production-img__wrap">
                  <img
                    className="article__production-img"
                    src={flowerThird}
                    alt="flowerFirst"
                  ></img>
                </div>
              </div>
              <div className="article__production-wrap__second">
                <div className="article__production-header__wrap">
                  <p className="article__production-header__title"> Cammile</p>
                  <div className="article__production-header__stars">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </div>
                <div className="article__production-under__wrap">
                  <p className="article__production-under__wrap-price">70$</p>
                  <div className="article__production-under__wrap-add">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="article__production-under__wrap-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="article__production-container">
              <div className="article__production-wrap__first">
                <div className="article__production-img__wrap">
                  <img
                    className="article__production-img"
                    src={flowerSecond}
                    alt="flowerFirst"
                  ></img>
                </div>
              </div>
              <div className="article__production-wrap__second">
                <div className="article__production-header__wrap">
                  <p className="article__production-header__title"> Cammile</p>
                  <div className="article__production-header__stars">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="article__production-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </div>
                <div className="article__production-under__wrap">
                  <p className="article__production-under__wrap-price">70$</p>
                  <div className="article__production-under__wrap-add">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="article__production-under__wrap-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="article__interior">
        <div className="article__interior-wrap__first">
          <p className="article__interior-wrap__title">
            Interior Plant Reference
          </p>
          <p className="article__interior-wrap__text">
            make your home so comfortable with refreshing plants
          </p>
        </div>
        <div className="article__interior-wrap__second">
          <div className="article__plants">
            <div className="article__plants-container__title">
              <div className="article__plants-title">
                How to care for plants
              </div>
              <div className="article__plants-text">
                Take care of plants with all your heart
              </div>
            </div>
            <div className="article__plants-container__info">
              <div className="article__plants-info">
                <div className="article__plants-container__img">
                  <img
                    src={sun}
                    alt="sun"
                    className="article__plants-img"
                  ></img>
                </div>
                <div className="article__plants-wrap">
                  <p className="article__plants-wrap__title">Adjust Lighting</p>
                  <p className="article__plants__text">
                    When caring for indoor plants, male sure the <br /> room
                    temperature in neither too cold nor too hot
                  </p>
                </div>
              </div>
            </div>
            <div className="article__plants-container__info">
              <div className="article__plants-info">
                <div className="article__plants-container__img">
                  <img
                    src={drop}
                    alt="sun"
                    className="article__plants-img"
                  ></img>
                </div>
                <div className="article__plants-wrap">
                  <p className="article__plants-wrap__title">
                    Don't water too often
                  </p>
                  <p className="article__plants__text">
                    Watering ornament plants indoors does <br /> not have to be
                    done every day
                  </p>
                </div>
              </div>
            </div>
            <div className="article__plants-container__info">
              <div className="article__plants-info">
                <div className="article__plants-container__img">
                  <img
                    src={flower}
                    alt="sun"
                    className="article__plants-img"
                  ></img>
                </div>
                <div className="article__plants-wrap">
                  <p className="article__plants-wrap__title">
                    Fertilize regularly
                  </p>
                  <p className="article__plants__text">
                    The nutrients most indoor houseplants need are <br />{" "}
                    nitrogen for balance and potassium for stem
                    <br />
                    strength
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="article__interior-roomFirst">
            <img
              className="article__interior-img"
              src={roomFirst}
              alt="roomFirst"
            ></img>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Article;
