/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import { useState } from "react";
import { toast } from "react-toastify";
import { checkoutTypes } from "../../../services/data-types";
import { setCheckout } from "../../../services/player";
import { useRouter } from "next/router";

export default function CheckoutConfirmation() {
  const [checkbox, setCheckbox] = useState(false);

  const router = useRouter();
  const onSubmit = async () => {
    const dataItemLocal: any = localStorage.getItem("data-item");
    const dataTopupLocal: any = localStorage.getItem("data-topup");

    const dataItem = JSON.parse(dataItemLocal);
    const dataTopup = JSON.parse(dataTopupLocal);

    if (!checkbox) {
      toast.error("Please check confirmation box");
    } else {
      const data: checkoutTypes = {
        voucher: dataItem._id,
        nominal: dataTopup.nominalItem._id,
        payment: dataTopup.paymentItem.payment._id,
        bank: dataTopup.paymentItem.bank._id,
        fullname: dataTopup.bankAccountName,
        accountUser: dataTopup.verifyId,
      };

      const result: any = await setCheckout(data);

      if (result.error) {
        toast.error(result.message);
      } else {
        toast.success("Chekout Success");
        router.push("/completed-checkout");
      }
    }
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkbox}
          onChange={() => setCheckbox(!checkbox)}
        />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
