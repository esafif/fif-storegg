/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
// eslint-disable-next-line quotes
// eslint-disable-next-line import/extensions
import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

interface CallApiProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
  serverToken,
}: CallApiProps) {
  let headers: any = {};

  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (token) {
    const tokenCookies = Cookies.get("token");
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((error) => error.response);
  // .post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
  // .catch((error) => error.response);

  let res;
  if (response?.status > 300) {
    res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const { length } = Object.keys(response.data);
  res = {
    error: false,
    message: "Success",
    data: length > 1 ? response.data : response.data.data,
  };

  return res;
}
