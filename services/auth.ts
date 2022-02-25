/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable quotes */
import callAPI from "../config/api";
import { LoginTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export const setSignUp = async (data: FormData) => {
  // eslint-disable-next-line quotes
  const URL = `auth/signup`;

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: "POST",
    data,
  });
};

// eslint-disable-next-line arrow-body-style
export const setLogin = async (data: LoginTypes) => {
  const URL = `auth/signin`;

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: "POST",
    data,
  });
};
