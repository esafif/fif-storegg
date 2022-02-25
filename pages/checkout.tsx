/* eslint-disable import/order */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable quotes */

// eslint-disable-next-line import/extensions
import Image from "next/image";
import CheckoutConfirmation from "../components/organisms/CheckoutConfirmation";
import CheckoutDetail from "../components/organisms/CheckoutDetail";
import CheckoutItem from "../components/organisms/CheckoutItem";
import { JWTPayloadTypes, UserTypes } from "../services/data-types";
import jwtDecode from "jwt-decode";

/* eslint-disable react/jsx-one-expression-per-line */
export default function checkout() {
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <a className="" href="/#">
            <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
          </a>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">
            Waktunya meningkatkan cara bermain
          </p>
        </div>
        <CheckoutItem />
        <hr />
        <CheckoutDetail />
        <CheckoutConfirmation />
      </div>
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
