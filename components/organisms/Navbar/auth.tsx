/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import { useRouter } from "next/router";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  });

  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken: JWTPayloadTypes = jwt_decode(atob(token));
      const userDecode: UserTypes = jwtToken.player;
      const IMG = process.env.NEXT_PUBLIC_API;
      userDecode.avatar = `${IMG}/uploads/${userDecode.avatar}`;
      setIsLogin(true);
      setUser(userDecode);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("token");
    setIsLogin(false);
    router.push("/");
  };

  const viewIsLogin = () => (
    <li className="nav-item my-auto dropdown d-flex">
      <div className="vertical-line d-lg-block d-none" />
      <div>
        <a
          className="dropdown-toggle ms-lg-40"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="true"
        >
          <img
            src={user.avatar}
            className="rounded-circle"
            width="40"
            height="40"
            alt=""
          />
        </a>

        <ul
          className="dropdown-menu border-0"
          aria-labelledby="dropdownMenuLink"
        >
          <li>
            <Link href="/member">
              <a className="dropdown-item text-lg color-palette-2">
                My Profile
              </a>
            </Link>
          </li>
          <li>
            <Link href="/wallet">
              <a className="dropdown-item text-lg color-palette-2">Wallet</a>
            </Link>
          </li>
          <li>
            <Link href="/member/edit-profile">
              <a className="dropdown-item text-lg color-palette-2">
                Account Settings
              </a>
            </Link>
          </li>
          <li onClick={onLogout}>
            <a className="dropdown-item text-lg color-palette-2">Log Out</a>
          </li>
        </ul>
      </div>
    </li>
  );

  const viewSignIn = () => (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>
  );

  return isLogin ? viewIsLogin() : viewSignIn();
}
