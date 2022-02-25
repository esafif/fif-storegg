/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from "@storybook/react";
import GameItem, {
  GameItemProps,
} from "../../../../components/molecules/GameItem";

export default {
  title: "Components/molecules/GameItem",
  component: GameItem,
} as Meta;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  image: "Thumbnail-1.png",
  title: "mobile legends",
  type: "Mobile",
};
