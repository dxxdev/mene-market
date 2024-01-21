import React from "react";

const Service = ({ icon, title, description }) => {
  return (
    <li className="p-6 flex flex-col items-start w-full sm:w-[280px] shadow-md rounded-[20px] gap-2">
      <div className="p-3 rounded-2xl gradient">
        <img src={icon} alt="" />
      </div>
      <h6 className="text-lg leading-[112%] font-medium text-jet-black">
        {title}
      </h6>
      <p className="text-xs leading-[112%] font-normal text-dark-gray">
        {description}
      </p>
    </li>
  );
};

export default Service;
