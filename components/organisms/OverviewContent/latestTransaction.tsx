/* eslint-disable quotes */
/* eslint-disable import/first */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
interface LatestTransProps {
  title: string;
  image: string;
  typeGame: string;
  gold: number;
  price: number;
  typeCoin: string;
  // eslint-disable-next-line quotes
  status: string;
}
import NumberFormat from "react-number-format";

export default function LatestTransaction(props: LatestTransProps) {
  const { title, typeGame, gold, price, status, image, typeCoin } = props;
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/overview-${image}`}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {typeGame}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{gold}</p>
        <p className="fw-medium color-palette-1 m-0">
          {typeCoin.toUpperCase()}
        </p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          <NumberFormat
            value={price}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </p>
      </td>
      <td>
        <div>
          <span
            className={`float-start icon-status ${status.toLocaleLowerCase()}`}
          />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
