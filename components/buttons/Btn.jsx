import React from "react";

export const BtnPrimary = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full  p-2 bg-red-500 rounded-md shadow-lg font-bold text-white text-sm"
    >
      {children}
    </button>
  );
};

export const BtnSecondary = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full mt-6 p-2 bg-white  rounded-lg shadow-lg font-bold text-blue-600 text-sm"
    >
      {children}
    </button>
  );
};

export const BtnAction = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full mt-6 p-2 bg-blue-500  rounded-lg shadow-lg font-bold text-white text-sm"
    >
      {children}
    </button>
  );
};
