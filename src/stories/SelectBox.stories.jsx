import React from "react";

import { SelectBox } from "components";

export default {
  title: "imperial/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder5",
  variant: "FillGray3007f",
  className: "w-[300px]",
};
