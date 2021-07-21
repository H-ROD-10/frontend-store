import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "../../helpers/Axios";
import { useCounter } from "../../hooks/useCounter";

export const CardItem = ({ product }) => {
  const { _id, price, image, name, quantity, stock } = product;

  const { add, remove, qty, setQty } = useCounter(stock, quantity);

  console.log(qty);

  const mutation = useMutation(
    async (_id, qty) => await axios.put(`/api/v1/cart/${_id}/${qty}/decrement`)
  );

  const decrement = (_id, qty) => {
    mutation.mutate(_id, qty);
  };

  const handleChange = () => {
    setQty({
      ...quantity,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mx-2 p-2 shadow-lg rounded-lg">
      <div className="flex items-center justify-between px-4">
        <div className="w-7/12 p-4">
          <img src={image} alt={name} className="object-cover rounded-md" />
        </div>
        <div className="w-5/12">
          <p className="text-xs">{name}</p>
          <p className="text-xs">Quedan: {stock}</p>
        </div>
      </div>
      <div className="flex items-center justify-between my-3 px-4">
        <div className="w-auto">
          <p className="text-red-500 text-lg">{price}</p>
        </div>
        <div className="w-5/12">
          <input
            type="number"
            value={qty}
            className="w-full text-center bg-gray-200 text-blue-500"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-between px-3">
        <button>Recalcular</button>
        <button>Borrar</button>

        <button>+</button>

        <button type="button" onClick={(remove, () => decrement(_id, qty))}>
          -
        </button>
      </div>
    </div>
  );
};
