/* eslint-disable import/order */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Footer from "./footer";
import MenuItem from "./menuItem";
import Profile from "./profile";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

/* eslint-disable jsx-a11y/alt-text */
interface SideBarProps {
  menu: "overview" | "settings" | "transactions" | "messages";
}

export default function SideBar(props: SideBarProps) {
  const { menu } = props;

  const router = useRouter();
  const onLogout = () => {
    Cookies.remove("token");
    router.push("/sign-in");
  };
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            href="/member/"
            active={menu === "overview"}
            imageSrc="/icon/ic-menu-overview.svg"
          />
          <MenuItem
            title="Transactions"
            href="/member/transactions"
            active={menu === "transactions"}
            imageSrc="/icon/ic-transaction.svg"
          />
          <MenuItem
            title="Messages"
            href="/#"
            active={menu === "messages"}
            imageSrc="/icon/ic-messages.svg"
          />
          <MenuItem title="Card" href="/#" imageSrc="/icon/ic-card.svg" />
          <MenuItem title="Rewards" href="/#" imageSrc="/icon/ic-reward.svg" />
          <MenuItem
            title="Settings"
            href="/member/edit-profile"
            active={menu === "settings"}
            imageSrc="/icon/ic-settings.svg"
          />
          <MenuItem
            title="Log Out"
            imageSrc="/icon/ic-logout.svg"
            onClick={onLogout}
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
