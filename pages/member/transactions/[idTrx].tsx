/* eslint-disable comma-dangle */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/function-component-definition */

import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import { historyTransactionTypes } from "../../../services/data-types";
import { getTransactionDetail } from "../../../services/member";

interface TransactionDetailProps {
  transactionDetail: historyTransactionTypes;
}

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function TransactionDetail({
  transactionDetail,
}: TransactionDetailProps) {
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}

export const getServerSideProps = async ({ req, params }: any) => {
  const { token } = req.cookies;
  const { idTrx } = params;

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken: string = Buffer.from(token, "base64").toString("ascii");
  const response = await getTransactionDetail(idTrx, jwtToken);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
};
