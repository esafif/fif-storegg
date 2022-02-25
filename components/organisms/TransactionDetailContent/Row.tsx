/* eslint-disable quotes */
import NumberFormat from "react-number-format";

interface RowProps {
  label: string;
  value: string | number;
  className?: string;
}

/* eslint-disable react/jsx-one-expression-per-line */
export default function Row(props: Partial<RowProps>) {
  const { label, value, className } = props;

  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}{" "}
      <span className={`purchase-details ${className}`}>
        {typeof value === "string" ? (
          value
        ) : (
          <NumberFormat
            value={value}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        )}
      </span>
    </p>
  );
}
