/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/newline-after-import */
/* eslint-disable quotes */
import callAPI from "../config/api";
import { checkoutTypes } from "./data-types";
const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export const getFeaturedGame = async () => {
  // eslint-disable-next-line quotes
  const URL = `players/landingpage`;

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: "GET",
    data: null,
  });
};

export const getDetailVoucher = async (id: string) => {
  const URL = `players/${id}/detail`;

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: "GET",
  });
};

export async function getGameCategory() {
  const URL = "players/category";

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: "GET",
  });
}

export async function setCheckout(data: checkoutTypes) {
  const URL = "players/checkout";

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: "POST",
    data,
    token: true,
  });
}

export async function getMemberOverview() {
  const URL = "players/dashboard";

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: "GET",
    token: true,
  });
}
