/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line quotes

export interface StepItemProps {
  title?: string;
  firstDesc?: string;
  secondDesc?: string;
  imageFile: string;
}

export default function Stepitem(props: Partial<StepItemProps>) {
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img src={props.imageFile} width={80} height={80} className="mb-30" />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">
          {props.title}
        </p>
        <p className="text-lg color-palette-1 mb-0">
          {props.firstDesc}
          <br />
          {props.secondDesc}
        </p>
      </div>
    </div>
  );
}
