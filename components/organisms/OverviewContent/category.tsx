/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable import/first */
/* eslint-disable quotes */

import Image from "next/image";
import { ReactNode } from "react";
import NumberFormat from "react-number-format";

interface CategoryProps {
  children: ReactNode;
  logo: string;
  spent: number;
}

/* eslint-disable react/jsx-one-expression-per-line */
export default function Category(props: CategoryProps) {
  const { children, logo, spent } = props;

  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={logo} width={60} height={60} />
          <p className="color-palette-1 mb-0 ms-12">{children}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            <NumberFormat
              value={spent}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </p>
        </div>
      </div>
    </div>
  );
}
