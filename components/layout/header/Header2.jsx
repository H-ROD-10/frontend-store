import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Search } from "../search/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { BtnProfile } from "../../buttons/BtnProfile";
import { BtnUserMenu } from "../../buttons/BtnUserMenu";
import { BtnPrimary } from "../../buttons/Btn";
import { useProfile } from "../../../services/users";

export const Header2 = () => {
  const { data } = useProfile();

  const router = useRouter();
  return (
    <div className="flex py-6 px-2  md:flex items-center w-full justify-between md:px-6">
      <div className="flex w-1/2 justify-between items-center">
        <Search />
      </div>

      {data?.isAuth === true ? (
        <div className="flex items-center ml-6 md:ml-0">
          <div className="mr-2 md:mr-6">
            <Link href="/Cart">
              <a>
                <ShoppingCartOutlinedIcon color="disabled" />
              </a>
            </Link>
          </div>
          {data?.user.role === "admin" ? (
            <BtnProfile data={data} />
          ) : (
            <BtnUserMenu data={data} />
          )}
        </div>
      ) : (
        <div className="w-4/12">
          <BtnPrimary onClick={() => router.push("/Login")}>
            Ingresar
          </BtnPrimary>
        </div>
      )}
    </div>
  );
};
