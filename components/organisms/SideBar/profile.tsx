/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { JWTPayloadTypes } from "../../../services/data-types";
import jwtDecode from "jwt-decode";

/* eslint-disable jsx-a11y/alt-text */
export default function Profile() {
  const [user, setUser] = useState({
    avatar: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    const token: any = Cookies.get("token");
    const jwtToken: JWTPayloadTypes = jwtDecode(atob(token));
    let userDecode: any = jwtToken.player;
    userDecode = {
      avatar: `${process.env.NEXT_PUBLIC_API}/uploads/${userDecode.avatar}`,
      username: userDecode.username,
      email: userDecode.email,
    };
    setUser(userDecode);
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <img
        src={user.avatar}
        width="90"
        height="90"
        className="rounded-circle"
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.username}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
