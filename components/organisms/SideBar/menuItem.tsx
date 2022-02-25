/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
/* eslint-disable quotes */
import Image from "next/image";
import Link from "next/link";

interface MenuProps {
  title: string;
  href: string;
  active?: boolean;
  imageSrc: string;
  onClick?: () => void;
}

export default function MenuItem(props: Partial<MenuProps>) {
  // eslint-disable-next-line object-curly-newline
  const {
    title,
    href = "/#",
    active = false,
    imageSrc = "/icon/",
    onClick,
  } = props;
  const classActive = active ? "item active mb-30" : "item mb-30";

  return (
    <div className={classActive} onClick={onClick}>
      <div className="me-3">
        <Image src={imageSrc} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
