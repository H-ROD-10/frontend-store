import { useState } from "react";

export const useCounter = (stock, quantity) => {
  const [qty, setQty] = useState(quantity);

  const add = () => {
    if (qty >= stock) return;
    setQty(qty + 1);
  };

  const remove = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
  };
  const reset = () => {
    setQty(1);
  };

  return {
    qty,
    add,
    remove,
    reset,
    setQty,
  };
};
