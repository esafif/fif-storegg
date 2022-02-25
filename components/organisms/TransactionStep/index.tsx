/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import Stepitem from "../../molecules/StepItem";

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br />
          Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <Stepitem
            title="1. Start"
            firstDesc="Pilih salah satu game"
            secondDesc="yang ingin kamu top up"
            imageFile="/icon/step1.svg"
          />
          <Stepitem
            title="2. Fill Up"
            firstDesc="Top up sesuai dengan"
            secondDesc="nominal yang sudah tersedia"
            imageFile="/icon/step2.svg"
          />
          <Stepitem
            title="3. Be a Winner"
            firstDesc="Siap digunakan untuk"
            secondDesc="improve permainan kamu"
            imageFile="/icon/step3.svg"
          />
        </div>
      </div>
    </section>
  );
}
