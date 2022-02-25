/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useCallback, useEffect, useState } from "react";
import { GameItemTypes } from "../../../services/data-types";
import { getFeaturedGame } from "../../../services/player";
import GameItem from "../../molecules/GameItem";

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  const getFeatureGameList = useCallback(async () => {
    const response = await getFeaturedGame();
    setGameList(response.data);
  }, []);

  useEffect(() => {
    getFeatureGameList();
  }, []);

  const IMG = "uploads";
  const URL = process.env.NEXT_PUBLIC_API;

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: GameItemTypes) => {
            return (
              <GameItem
                key={item._id}
                id={item._id}
                title={item.name}
                type={item.category.name}
                image={`${URL}/${IMG}/${item.thumbnail}`}
              />
            );
          })}
          {/* <GameItem title="Super Mechs" type="Mobile" image="Thumbnail-1" />
          <GameItem
            title="Call of Duty: Modern"
            type="Mobile"
            image="Thumbnail-2"
          />
          <GameItem title="Mobile Legends" type="Mobile" image="Thumbnail-3" />
          <GameItem title="Clash of Clans" type="Mobile" image="Thumbnail-4" />
          <GameItem title="Valorant" type="Desktop" image="Thumbnail-5" /> */}
        </div>
      </div>
    </section>
  );
}
