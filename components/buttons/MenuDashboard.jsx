import React, { useState } from "react";
import Link from "next/link";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const MenuProduct = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="z-50">
      {/* Code block starts */}
      <div className="relative">
        <div
          className="bg-white dark:bg-gray-800 w-28 flex items-center justify-between border rounded border-gray-300 dark:border-gray-700  cursor-pointer md:w-40"
          onClick={() => setShow(!show)}
        >
          <p className="pl-3 py-3 text-red-500 dark:text-gray-400 text-sm leading-3 tracking-normal font-normal">
            Productos
          </p>
          <div className="cursor-pointer text-gray-600 dark:text-gray-400 mr-3">
            {show ? (
              <ExpandMoreIcon color="disabled" />
            ) : (
              <ExpandLessIcon color="disabled" />
            )}
          </div>
        </div>
        {show && (
          <ul className="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow rounded mt-2 w-30 py-1 absolute md:w-40">
            <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
              <Link href="/admin/product/NewProduct">
                <a>Crear Producto</a>
              </Link>
            </li>
            <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
              <Link href="/MyOrders">
                <a>Editar Producto</a>
              </Link>
            </li>
            <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
              <Link href="/Dashboard">
                <a>Borrar Producto</a>
              </Link>
            </li>
          </ul>
        )}
      </div>
      {/* Code block ends */}
    </div>
  );
};
