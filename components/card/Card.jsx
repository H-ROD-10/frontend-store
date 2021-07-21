import React from "react";
//import Image from "next/image";
//import Fender from "../../images/fender-tele/telecaster1.jpg";
import { BtnSecondary } from "../buttons/Btn";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export const Card = ({ product }) => {
  const { name, images, price, brand } = product;
  return (
    <div className="w-72 shadow-md h-auto my-4 p-5">
      <div>
        <img src={images[0].url} alt={name} layout="intrinsic" />
      </div>
      <div>
        <h2 className="font-bold text-left my-2 text-blue-900 text-md">
          {name}
        </h2>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-semibold text-gray-600">Marca: {brand}</p>
        <p className="font-bold text-lg text-red-600">${price}</p>
      </div>
      <BtnSecondary>
        Agregar <AddShoppingCartIcon color="disabled" />
      </BtnSecondary>
    </div>
  );
};
