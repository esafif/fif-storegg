/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/first */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/alt-text */
export interface GameItemProps {
  image: string;
  title: string;
  type: string;
  id: string;
}
import Image from "next/image";
import Link from "next/link";

export default function GameItem(props: GameItemProps) {
  const { image, title, type, id } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href={`/detail/${id}`}>
        <a>
          <div className="blur-sharp">
            <Image
              className="thumbnail"
              src={image}
              width={205}
              height={270}
              alt="thumnail"
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image src="/icon/console.svg" width={54} height={36} />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{type}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
