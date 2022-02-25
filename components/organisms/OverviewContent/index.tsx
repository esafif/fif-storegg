/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Cookies from "js-cookie";
import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { getMemberOverview } from "../../../services/player";
import Category from "./category";
import LatestTransaction from "./latestTransaction";
import { useRouter } from "next/router";
import {
  historyTransactionTypes,
  TopUpCategoriesTypes,
} from "../../../services/data-types";

/* eslint-disable react/jsx-one-expression-per-line */
export default function OverviewContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const IMG = "uploads";
  const URL = process.env.NEXT_PUBLIC_API;

  const getMemberOverviewApi = useCallback(async () => {
    const response = await getMemberOverview();
    if (response.error) {
      toast.error(response.message);
    } else {
      setCount(response.data.count);
      setData(response.data.data);
    }
  }, []);

  useEffect(() => {
    getMemberOverviewApi();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((item: TopUpCategoriesTypes) => {
                return (
                  <Category
                    key={item._id}
                    logo={`/icon/card-category-${item.category.name.toLowerCase()}.svg`}
                    spent={item.value}
                  >
                    Game <br /> {item.category.name}
                  </Category>
                );
              })}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: historyTransactionTypes) => {
                  return (
                    <LatestTransaction
                      key={item._id}
                      title={item.historyVoucherTopup.gameName}
                      typeGame={item.historyVoucherTopup.category}
                      gold={Number(item.historyVoucherTopup.coinQuantity)}
                      typeCoin={item.historyVoucherTopup.coinName}
                      price={item.historyVoucherTopup.price}
                      status={item.status}
                      image={`${item.historyVoucherTopup.thumbnail}`}
                    />
                  );
                })}
                {/* <LatestTransaction
                  title="Call of Duty:Modern"
                  typeGame="Desktop"
                  gold={550}
                  price="740.000"
                  status="Success"
                  image="overview-2.png"
                />
                <LatestTransaction
                  title="Clash of Clans"
                  typeGame="Mobile"
                  gold={100}
                  price="120.000"
                  status="Failed"
                  image="overview-3.png"
                />
                <LatestTransaction
                  title="The Royal Game"
                  typeGame="Desktop"
                  gold={225}
                  price="200.000"
                  status="Failed"
                  image="overview-4.png"
                /> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
