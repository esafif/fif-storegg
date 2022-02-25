/* eslint-disable comma-dangle */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import OverviewContent from "../../components/organisms/OverviewContent";
import SideBar from "../../components/organisms/SideBar";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";
import jwtDecode from "jwt-decode";

/* eslint-disable react/function-component-definition */
export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar menu="overview" />
      <OverviewContent />
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
  const IMG = process.env.NEXT_PUBLIC_API;
  userDecode.avatar = `${IMG}/uploads/${userDecode.avatar}`;

  return {
    props: {
      user: userDecode,
    },
  };
};
