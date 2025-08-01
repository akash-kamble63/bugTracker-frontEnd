import React from "react";

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-2 md:w-2 h-3 md:h-5 ${color} rounded-full`}> </div>
      <p className="text-xs md:text-[14px] text-gray-500">
        {value}  
        <span className="text-sm md:text-[15px] text-black font-semibold"> {label}</span>
      </p>
    </div>
  );
};

export default InfoCard;
