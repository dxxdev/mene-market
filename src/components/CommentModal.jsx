import { Star } from "@mui/icons-material";
import React, { useState } from "react";
import { createPortal } from "react-dom";

const CommentModal = ({ setOpenModal }) => {
  const [rating, setRating] = useState(0);
  return createPortal(
    <div>
      <div
        onClick={() => setOpenModal(false)}
        className="fixed w-full bg-black/20 z-[9999] h-full left-0 top-0 backdrop-blur-sm"
      ></div>
      <div className="fixed w-full max-w-2xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-8 rounded-[20px] bg-white z-[99999] flex flex-col items-start gap-6">
        <div className="flex flex-col gap-2 text-jet-black">
          <h3 className="text-[26px] leading-[112%] font-semibold">
            Mahsulot uchun sharh qoldiring
          </h3>
          <p className="leading-[164%] font-normal">
            Sizning fikringiz boshqa xaridorlar uchun ham foydali bo’lishiga
            ishonamiz.
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <Star
            color={rating > 0 ? "warning" : "disabled"}
            className="cursor-pointer"
            onClick={() => setRating(1)}
          />
          <Star
            color={rating > 1 ? "warning" : "disabled"}
            className="cursor-pointer"
            onClick={() => setRating(2)}
          />
          <Star
            color={rating > 2 ? "warning" : "disabled"}
            className="cursor-pointer"
            onClick={() => setRating(3)}
          />
          <Star
            color={rating > 3 ? "warning" : "disabled"}
            className="cursor-pointer"
            onClick={() => setRating(4)}
          />
          <Star
            color={rating > 4 ? "warning" : "disabled"}
            className="cursor-pointer"
            onClick={() => setRating(5)}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label
            htmlFor="comment"
            className="text-[13px] leading-[112%] text-dark-gray"
          >
            Mahsulot haqida fikringiz qanday?
          </label>
          <textarea
            className="resize-none w-full h-36 text-base p-2.5 outline-none rounded-md border border-dark-gray"
            name=""
            id="comment"
          ></textarea>
        </div>
        <button className="gradient text-white py-2 px-10 rounded-lg text-base leading-[175%] font-medium -tracking-[0.4px]">
          Send Message
        </button>
      </div>
    </div>,
    document.body
  );
};

export default CommentModal;
