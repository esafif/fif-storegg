/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable import/order */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
import { useEffect, useCallback, useState } from "react";
import ButtonTab from "./ButtonTab";
import { toast } from "react-toastify";
import TableRow from "./TableRow";
import { getMemberTransactions } from "../../../services/member";
import NumberFormat from "react-number-format";
import { historyTransactionTypes } from "../../../services/data-types";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function TransactionContent() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(Number);
  const [tab, setTab] = useState("all");

  const getMemberTransactionAPI = useCallback(async (value: string) => {
    const response: any = await getMemberTransactions(value);

    if (response.error) {
      toast.error(response.message);
    } else {
      setData(response.data.data);
      setTotal(response.data.total);
    }
  }, []);

  useEffect(() => {
    getMemberTransactionAPI("all");
  }, []);

  const onTabClick = (value: string) => {
    setTab(value);
    getMemberTransactionAPI(value);
  };

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumberFormat
              value={total}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab
                title="All Trx"
                onClick={() => onTabClick("all")}
                active={tab === "all"}
              />
              <ButtonTab
                title="Success"
                onClick={() => onTabClick("success")}
                active={tab === "success"}
              />
              <ButtonTab
                title="Pending"
                onClick={() => onTabClick("pending")}
                active={tab === "pending"}
              />
              <ButtonTab
                title="Failed"
                onClick={() => onTabClick("failed")}
                active={tab === "failed"}
              />
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
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {data.map((item: historyTransactionTypes) => {
                  return (
                    <TableRow
                      id={item._id}
                      image={item.historyVoucherTopup.thumbnail}
                      title={item.historyVoucherTopup.gameName}
                      category={item.historyVoucherTopup.category}
                      item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                      price={item.value}
                      status={item.status}
                    />
                  );
                })}
                {/* <TableRow
                  image="overview-2.png"
                  title="Call of Duty:Modern"
                  category="Desktop"
                  item="550"
                  price={740000}
                  status="Success"
                />
                <TableRow
                  image="overview-3.png"
                  title="Clash of Clans"
                  category="Mobile"
                  item="100"
                  price={120000}
                  status="Failed"
                />
                <TableRow
                  image="overview-4.png"
                  title="The Royal Game"
                  category="Desktop"
                  item="225"
                  price={200000}
                  status="Failed"
                /> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
