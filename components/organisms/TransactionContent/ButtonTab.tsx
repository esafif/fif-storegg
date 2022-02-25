/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
interface ButtonTabProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ButtonTab(props: ButtonTabProps) {
  const { title, active, onClick } = props;
  const CN = active
    ? "btn btn-status rounded-pill text-sm btn-active me-3"
    : "btn btn-status rounded-pill text-sm me-3";

  return (
    <button className={CN} type="button" onClick={onClick}>
      {title}
    </button>
  );
}
