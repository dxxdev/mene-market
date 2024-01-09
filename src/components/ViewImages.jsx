import { Close } from "@mui/icons-material";
import React from "react";
import { createPortal } from "react-dom";

const ViewImages = ({ images, index, setActiveImage, setOpenViewImage }) => {
  return createPortal(
    <div className="fixed flex justify-center items-center w-full h-full bg-black/50 left-0 top-0 z-[9999]">
      <div
        onClick={() => setOpenViewImage(false)}
        className="relative w-full h-full flex justify-center items-center"
      >
        <img src={images[index]} className="h-full" alt="" />
      </div>
      <button
        onClick={() => setOpenViewImage(false)}
        className="absolute right-3 hover:bg-gray-500 top-3 p-2"
      >
        <Close />
      </button>
      <div className="absolute w-full h-full flex justify-between items-stretch max-h-[calc(100vh-100px)]">
        <button
          onClick={() =>
            setActiveImage((prev) => {
              if (prev == 0) {
                return prev;
              } else {
                return prev - 1;
              }
            })
          }
          className="px-3 transition-all text-white hover:bg-gray-900/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 19.92L8.48 13.4C7.71 12.63 7.71 11.37 8.48 10.6L15 4.08"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div onClick={() => setOpenViewImage(false)} className="grow"></div>
        <button
          onClick={() =>
            setActiveImage((prev) => {
              if (prev == images.length - 1) {
                return prev;
              } else {
                return prev + 1;
              }
            })
          }
          className="px-3 transition-all text-white hover:bg-gray-900/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>,
    document.body
  );
};

export default ViewImages;
