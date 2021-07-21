import React from "react";
import Head from "next/head";

import { Header2 } from "./header/Header2";

export const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Guitar Store</title>
      </Head>
      <div className="bg-gray-50 h-screen">
        <Header2 />
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {props.children}
        </div>
      </div>
    </>
  );
};
