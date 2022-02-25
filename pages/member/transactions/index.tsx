/* eslint-disable comma-dangle */
/* eslint-disable import/order */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/alt-text */

// eslint-disable-next-line quotes
import SideBar from "../../../components/organisms/SideBar";
import TransactionContent from "../../../components/organisms/TransactionContent";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import jwtDecode from "jwt-decode";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar menu="transactions" />
      <TransactionContent />
    </section>
  );
}

export const getServerSideProps = async ({ req }: any) => {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken: JWTPayloadTypes = jwtDecode(
    Buffer.from(token, "base64").toString("ascii")
  );
  const userDecode: UserTypes = jwtToken.player;

  return {
    props: {
      user: userDecode,
    },
  };
};
