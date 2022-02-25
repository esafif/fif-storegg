/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from "@storybook/react";
import Forms, { FormProps } from "../../../../components/atoms/Forms";

export default {
  title: "Components/atoms/input",
  component: Forms,
} as Meta;

const Template = (args: FormProps) => <Forms {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  label: "Nama Lengkap",
  placeholder: "Enter Your Name",
};
