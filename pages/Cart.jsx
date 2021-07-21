import React from "react";
import { useProfile } from "../services/users";
import { CardItem } from "../components/cart/CardItem";

const Cart = () => {
  const { data, isError, isLoading } = useProfile();

  if (isError) return <p>Hubo un error</p>;
  if (isLoading) return <p>Cargando...</p>;

  console.log(data?.user.myCart);

  const { user } = data;

  const { myCart } = user;

  return (
    <>
      {isLoading ? (
        "Cargando..."
      ) : (
        <div className="flex flex-col justify-center">
          <h1>Cart</h1>
          <div className="m-auto w-5/12 py-3  border-2 border-gray-500 rounded-md">
            <h2 className="text-center text-blue-500 text-2xl">
              {myCart.totalPrice}
            </h2>
          </div>
          {myCart.cartItems.map((product, i) => {
            return (
              <div
                key={i}
                className="flex flex-col justify-center my-4 md:flex-row md:items-center md:justify-between"
              >
                <CardItem product={product} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Cart;
