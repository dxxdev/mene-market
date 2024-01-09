import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { products, savedProduct } from "../data/data";

const ProductCard = ({ product, rendered }) => {
  useEffect(() => {
    rendered((prev) => !prev);
  }, [products]);

  return (
    <li className="flex shadow-md flex-col overflow-hidden gap-y-4 rounded-3xl">
      <Link
        className="overflow-hidden"
        to={`/${product.category.categoryName}/${product.productName}`}
      >
        <Swiper
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          className="mySwiper h-80"
        >
          {product.images.slice(0, 4).map((image, index) => {
            return (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <img src={image} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Link>
      <div className="pt-0 p-6 flex flex-col gap-y-2">
        <h5 className="text-jet-black text-xl font-semibold leading-[112%]">
          {product.productName}
        </h5>
        <div className="flex gap-3">
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              className={`${product.rating >= 1 ? "block" : "hidden"}`}
            >
              <path
                d="M9.24494 0L11.962 5.50528L18.0374 6.38809L13.6412 10.6734L14.679 16.7243L9.24494 13.8674L3.8109 16.7243L4.84871 10.6734L0.452479 6.38809L6.52792 5.50528L9.24494 0Z"
                fill="#FFC436"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              className={`${
                product.rating > 1 && product.rating < 2 ? "block" : "hidden"
              }`}
            >
              <path
                d="M3.76418 16.7243L9.19822 13.701V0L6.57901 5.63991L0.405762 6.38809L4.96026 10.6219L3.76418 16.7243Z"
                fill="#FFC436"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              className={`${product.rating >= 2 ? "block" : "hidden"}`}
            >
              <path
                d="M9.24494 0L11.962 5.50528L18.0374 6.38809L13.6412 10.6734L14.679 16.7243L9.24494 13.8674L3.8109 16.7243L4.84871 10.6734L0.452479 6.38809L6.52792 5.50528L9.24494 0Z"
                fill="#FFC436"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              className={`${
                product.rating > 2 && product.rating < 3 ? "block" : "hidden"
              }`}
            >
              <path
                d="M3.76418 16.7243L9.19822 13.701V0L6.57901 5.63991L0.405762 6.38809L4.96026 10.6219L3.76418 16.7243Z"
                fill="#FFC436"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              className={`${product.rating >= 3 ? "block" : "hidden"}`}
            >
              <path
                d="M9.24494 0L11.962 5.50528L18.0374 6.38809L13.6412 10.6734L14.679 16.7243L9.24494 13.8674L3.8109 16.7243L4.84871 10.6734L0.452479 6.38809L6.52792 5.50528L9.24494 0Z"
                fill="#FFC436"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              className={`${
                product.rating > 3 && product.rating < 4 ? "block" : "hidden"
              }`}
            >
              <path
                d="M3.76418 16.7243L9.19822 13.701V0L6.57901 5.63991L0.405762 6.38809L4.96026 10.6219L3.76418 16.7243Z"
                fill="#FFC436"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              className={`${product.rating >= 4 ? "block" : "hidden"}`}
            >
              <path
                d="M9.24494 0L11.962 5.50528L18.0374 6.38809L13.6412 10.6734L14.679 16.7243L9.24494 13.8674L3.8109 16.7243L4.84871 10.6734L0.452479 6.38809L6.52792 5.50528L9.24494 0Z"
                fill="#FFC436"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              className={`${
                product.rating > 4 && product.rating < 5 ? "block" : "hidden"
              }`}
            >
              <path
                d="M3.76418 16.7243L9.19822 13.701V0L6.57901 5.63991L0.405762 6.38809L4.96026 10.6219L3.76418 16.7243Z"
                fill="#FFC436"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              className={`${product.rating >= 5 ? "block" : "hidden"}`}
            >
              <path
                d="M9.24494 0L11.962 5.50528L18.0374 6.38809L13.6412 10.6734L14.679 16.7243L9.24494 13.8674L3.8109 16.7243L4.84871 10.6734L0.452479 6.38809L6.52792 5.50528L9.24494 0Z"
                fill="#FFC436"
              />
            </svg>
          </div>
          <p className="text-sm flex items-center space-x-px leading-4 font-normal text-jet-black">
            <span>{product.rating}</span>
            <span>/</span>
            <span className="text-dark-gray">5</span>
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <p className="text-xl leading-[112%] font-semibold text-jet-black">
            ${product.price}
          </p>
          <p className="text-xl leading-[112%] font-semibold text-dark-gray">
            <del>${product.discountPrice()}</del>
          </p>
          <span className="px-[14px] py-1.5 rounded-full text-sm leading-[112%] font-normal bg-off-red text-red-velvet">
            -${product.howMuchDiscount()}%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button className="gradient-btn hover:opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M1.6665 2.15649H3.11651C4.01651 2.15649 4.72484 2.93149 4.64984 3.82316L3.95817 12.1232C3.8415 13.4815 4.9165 14.6482 6.28317 14.6482H15.1582C16.3582 14.6482 17.4082 13.6648 17.4998 12.4732L17.9498 6.22316C18.0498 4.83983 16.9998 3.71482 15.6082 3.71482H4.84984"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5417 18.8231C14.117 18.8231 14.5833 18.3567 14.5833 17.7814C14.5833 17.2061 14.117 16.7397 13.5417 16.7397C12.9664 16.7397 12.5 17.2061 12.5 17.7814C12.5 18.3567 12.9664 18.8231 13.5417 18.8231Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.87516 18.8231C7.45046 18.8231 7.91683 18.3567 7.91683 17.7814C7.91683 17.2061 7.45046 16.7397 6.87516 16.7397C6.29987 16.7397 5.8335 17.2061 5.8335 17.7814C5.8335 18.3567 6.29987 18.8231 6.87516 18.8231Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 7.15649H17.5"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-base leading-[164%] font-normal text-white">
              Xarid qilish
            </span>
          </button>
          <button
            onClick={() => {
              savedProduct(product);
              rendered((prev) => !prev);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill={`${product.saved ? "#FE3A30" : "none"}`}
              className="transition-all duration-100 active:scale-75 active:rotate-6"
            >
              <path
                d="M11.62 19.2998C11.28 19.4198 10.72 19.4198 10.38 19.2998C7.48 18.3098 1 14.1798 1 7.17984C1 4.08984 3.49 1.58984 6.56 1.58984C8.38 1.58984 9.99 2.46984 11 3.82984C12.01 2.46984 13.63 1.58984 15.44 1.58984C18.51 1.58984 21 4.08984 21 7.17984C21 14.1798 14.52 18.3098 11.62 19.2998Z"
                stroke="#FE3A30"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
