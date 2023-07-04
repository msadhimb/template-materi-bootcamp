import React from "react";

const Input = ({ text, name, color, onChange, value }) => {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        id={name}
        className={`block rounded-t-lg px-2.5 pb-2.5 pt-5 text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-${color}-600 peer w-[35rem]`}
        placeholder=" "
        name={name}
        onChange={onChange}
        value={value}
      />
      <label
        for={name}
        className={`absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-${color}-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 w-[35rem] text-start`}
      >
        {text}
      </label>
    </div>
  );
};

export default Input;
