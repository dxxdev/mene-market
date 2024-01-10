import React from "react";

const RatingBar = ({product}) => {
  return (
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
  );
};

export default RatingBar;
