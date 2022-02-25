/* eslint-disable operator-linebreak */
/* eslint-disable quotes */

import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

/* eslint-disable react/jsx-one-expression-per-line */
export default function CheckoutDetail() {
  const [dataTopup, setDataTopup] = useState({
    verifyId: "",
    nominalItem: {
      price: 0,
      coinQuantity: 0,
      coinName: "",
      _id: "",
    },
    paymentItem: {
      payment: {
        type: "",
        _id: "",
      },
      bank: {
        nameBank: "",
        name: "",
        noRekening: "",
      },
    },
    bankAccountName: "",
  });

  const total =
    dataTopup.nominalItem.price * (10 / 100) + dataTopup.nominalItem.price;
  useEffect(() => {
    const dataTopupLocal: any = localStorage.getItem("data-topup");
    setDataTopup(JSON.parse(dataTopupLocal));
  }, []);
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID
          <span className="purchase-details">{dataTopup.verifyId}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item{" "}
          <span className="purchase-details">
            {dataTopup.nominalItem.coinQuantity}{" "}
            {dataTopup.nominalItem.coinName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price{" "}
          <span className="purchase-details">
            <NumberFormat
              value={dataTopup.nominalItem.price}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%){" "}
          <span className="purchase-details">
            <NumberFormat
              value={dataTopup.nominalItem.price * (10 / 100)}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
            <NumberFormat
              value={total}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name{" "}
          <span className="purchase-details">{dataTopup.bankAccountName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type{" "}
          <span className="payment-details">
            {dataTopup.paymentItem.payment.type}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name{" "}
          <span className="payment-details">
            {dataTopup.paymentItem.bank.nameBank}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{" "}
          <span className="payment-details">
            {dataTopup.paymentItem.bank.name}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{" "}
          <span className="payment-details">
            {dataTopup.paymentItem.bank.noRekening}
          </span>
        </p>
      </div>
    </>
  );
}
