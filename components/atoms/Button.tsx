/* eslint-disable jsx-a11y/no-redundant-roles */
interface ButtonProps {
  title: string;
}

export default function Button(props: ButtonProps) {
  const { title } = props;

  return (
    <div className="button-group d-flex flex-column pt-50">
      <button
        type="submit"
        className="btn btn-save fw-medium text-lg text-white rounded-pill"
        role="button"
      >
        {title}
      </button>
    </div>
  );
}
