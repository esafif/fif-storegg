/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
export interface FormProps {
  label: string;
}

export default function Forms(props: any) {
  // eslint-disable-next-line object-curly-newline
  const { label, ...nativeProps } = props;

  return (
    <div className="pt-30">
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input className="form-control rounded-pill text-lg" {...nativeProps} />
    </div>
  );
}
