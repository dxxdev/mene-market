import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { headerRender, products, savedProduct } from "../data/data";
import RatingBar from "./RatingBar";
import { shoppingCart } from "../assets/icons";

const ProductCard = ({ product, rendered }) => {
  const navigate = useNavigate();
  useEffect(() => {
    rendered((prev) => !prev);
  }, [products]);

  return (
    <li className="flex shadow-md flex-col overflow-hidden gap-y-4 rounded-3xl">
      <Link
        aria-label="product detail"
        className="overflow-hidden"
        to={`/products/${product.category.categoryName}/${product.id}`}
      >
        <Swiper
          autoplay={{ delay: Math.floor(Math.random() * 4000 + 3000) }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper h-80"
        >
          {product.images.slice(0, 4).map((image, index) => {
            return (
              <SwiperSlide
                key={index}
                className="flex justify-center overflow-hidden rounded-3xl items-center"
              >
                <img src={image} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Link>
      <div className="pt-0 p-6 flex flex-col grow gap-y-2 justify-between">
        <div className="flex flex-col gap-y-2">
          <b className="text-jet-black text-xl font-semibold leading-[112%]">
            {product.productName}
          </b>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-3 items-center">
            <RatingBar product={product} />
            <p className="text-sm flex items-center space-x-px leading-4 font-normal text-jet-black">
              <span>{product.rating}</span>
              <span>/</span>
              <span className="text-dark-gray">5</span>
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <p className="text-xl leading-[112%] font-semibold text-jet-black">
              ${product.discountPrice()}
            </p>
            <p className="text-xl leading-[112%] font-semibold text-dark-gray">
              <del>${product.price}</del>
            </p>
            <span className="px-[14px] py-1.5 rounded-full text-sm leading-[112%] font-normal bg-off-red text-red-velvet">
              -${product.howMuchDiscount()}%
            </span>
          </div>
          <div className="flex justify-between items-center">
            <button
              aria-label="product detail page button"
              onClick={() =>
                navigate(`/products/${product.category}/${product.id}`)
              }
              className={`gradient-btn relative hover:opacity-90`}
            >
              <span>
                <img src={shoppingCart} alt="" />
              </span>
              <span
                className={`text-base leading-[164%] font-normal text-white`}
              >
                Xarid qilish
              </span>
            </button>
            <button
              aria-label="liked button"
              onClick={() => {
                savedProduct(product);
                console.log(headerRender);
                rendered((prev) => !prev);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill={`${product.saved ? "#FE3A30" : "none"}`}
                className="transition-all duration-750 active:scale-75"
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
      </div>
    </li>
  );
};

export default ProductCard;
