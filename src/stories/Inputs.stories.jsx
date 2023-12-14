import React from "react";

import { Input } from "components";

export default {
  title: "imperial/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "round",
  color: "gray_300_7f",
  variant: "fill",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
