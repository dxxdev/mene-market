import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { useParams } from "react-router-dom";
import { products } from "../data/data";
import ViewImages from "../components/ViewImages";

const Detail = () => {
  const { productName } = useParams();
  const verticalImageList = useRef(null);
  const [openViewImage, setOpenViewImage] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const info = products.find((product) => product.productName == productName);
  console.log(info);

  useEffect(() => {
    if (verticalImageList.current && activeImage > 0) {
      verticalImageList.current.scrollTop += 137;
    }
  }, [activeImage]);
  return (
    <div className={`${styles.container}`}>
      <div className="pt-12 pb-6 flex flex-col md:flex-row gap-6">
        <div className="flex gap-2.5">
          <ul
            ref={verticalImageList}
            className="w-24 overflow-auto h-[600px] scroll-none space-y-2.5"
          >
            {info.images.map((image, index) => {
              return (
                <li
                  onClick={() => {
                    setActiveImage(index);
                  }}
                  key={index}
                  className={`p-0.5 cursor-pointer ${
                    activeImage === index
                      ? "opacity-100 bg-gray-800"
                      : "opacity-80 bg-transparent"
                  }`}
                >
                  <img src={image} alt={productName} />
                </li>
              );
            })}
          </ul>
          <div className="h-full relative max-h-[600px]">
            <div className="absolute top-1/2 left-0 w-full flex justify-between items-center -translate-y-1/2 px-2">
              <button
                className="opacity-75"
                onClick={() =>
                  setActiveImage((prev) => {
                    if (prev == 0) {
                      return prev;
                    } else {
                      return prev - 1;
                    }
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM13.79 15C14.08 15.29 14.08 15.77 13.79 16.06C13.64 16.21 13.45 16.28 13.26 16.28C13.07 16.28 12.88 16.21 12.73 16.06L9.2 12.53C8.91 12.24 8.91 11.76 9.2 11.47L12.73 7.94C13.02 7.65 13.5 7.65 13.79 7.94C14.08 8.23 14.08 8.71 13.79 9L10.79 12L13.79 15Z"
                    fill="#292D32"
                  />
                </svg>
              </button>
              <button
                className="opacity-75"
                onClick={() =>
                  setActiveImage((prev) => {
                    if (prev == info.images.length - 1) {
                      return prev;
                    } else {
                      return prev + 1;
                    }
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM14.79 12.53L11.26 16.06C11.11 16.21 10.92 16.28 10.73 16.28C10.54 16.28 10.35 16.21 10.2 16.06C9.91 15.77 9.91 15.29 10.2 15L13.2 12L10.2 9C9.91 8.71 9.91 8.23 10.2 7.94C10.49 7.65 10.97 7.65 11.26 7.94L14.79 11.47C15.09 11.76 15.09 12.24 14.79 12.53Z"
                    fill="#292D32"
                  />
                </svg>
              </button>
            </div>
            <img
              onClick={() => setOpenViewImage(true)}
              src={info.images[activeImage]}
              className="h-full"
              alt=""
            />
          </div>
        </div>
      </div>
      {openViewImage && (
        <ViewImages
          images={info.images}
          index={activeImage}
          setActiveImage={setActiveImage}
          setOpenViewImage={setOpenViewImage}
        />
      )}
    </div>
  );
};

export default Detail;
