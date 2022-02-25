/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quote-props */
/* eslint-disable quotes */

import Link from "next/link";

/* eslint-disable react/require-default-props */
interface MenuProps {
  title: string;
  href: string;
  active?: boolean;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, active = false, href = "/" } = props;
  const classActive = active ? "nav-link active" : "nav-link";

  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classActive} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
