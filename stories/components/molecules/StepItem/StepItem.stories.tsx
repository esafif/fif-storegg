/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

import { Meta } from "@storybook/react";
import Stepitem, {
  StepItemProps,
} from "../../../../components/molecules/StepItem";

export default {
  title: "Components/molecules/StepItem",
  component: Stepitem,
} as Meta;

const Template = (args: StepItemProps) => <Stepitem {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  title: "Title Game",
  firstDesc: "First Desc",
  secondDesc: "Second Desc",
  imageFile: "/icon/step1.svg",
};
