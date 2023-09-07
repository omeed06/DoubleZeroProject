import React from "react";
import Location from "../../Asset/Images/Socialicons/location.svg";

const InputField = ({ label, placeholder, exerpt, location }) => {
  return (
    <>
      <p className="font-medium text-xl">
        {label}
        <span className="text-[#FF0000]">*</span>
      </p>

      {location ? (
        <div className="flex items-center">
          <img src={Location} className="absolute z-10 pl-3" />
          <input
            type="text"
            id="country"
            className="relative bg-[#F5F5F5] px-10 py-2 w-96 rounded-lg outline-none "
            placeholder="Karachi, PK"
          />
        </div>
      ) : (
        <input
          type="text"
          className="bg-[#F5F5F5] px-5 py-2 w-96 rounded-lg outline-none"
          placeholder={placeholder}
        />
      )}
      {exerpt && (
        <p className="text-xs">
          We'll use your email address to send you updates
        </p>
      )}
    </>
  );
};

export default InputField;
