/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */

import { useEffect, useState } from "react";

export default function CheckoutItem() {
  const [dataItem, setDataItem] = useState({
    thumbnail: "",
    name: "",
    category: {
      name: "",
    },
  });

  useEffect(() => {
    const dataItemLocal: any = localStorage.getItem("data-item");
    setDataItem(JSON.parse(dataItemLocal));
  }, []);

  const ROOT_IMG: string = `${process.env.NEXT_PUBLIC_API}/uploads/`;
  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <img
            src={`${ROOT_IMG}${dataItem.thumbnail}`}
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">{dataItem.name}</p>
        <p className="color-palette-2 m-0">
          Category: {dataItem.category.name}
        </p>
      </div>
    </div>
  );
}
