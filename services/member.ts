/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import callAPI from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export async function getMemberTransactions(value: string) {
  const params = value === "all" ? "" : `?status=${value}`;
  const URL = `players/history${params}`;

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: "GET",
    token: true,
  });
}

export async function getTransactionDetail(id: string, serverToken: string) {
  const URL = `players/history/${id}/detail`;

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: "GET",
    serverToken,
  });
}

export async function updateProfile(data: FormData) {
  const URL = `players/profile/`;

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: "PUT",
    data,
    token: true,
  });
}
