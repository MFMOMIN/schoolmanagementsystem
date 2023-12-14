import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[17px]" };
const variants = {
  fill: {
    cyan_300: "bg-cyan-300 text-white-A700",
    amber_A200: "bg-amber-A200 text-white-A700",
    pink_A200: "bg-pink-A200 text-white-A700",
    gray_300: "bg-gray-300 text-black-900",
    indigo_900: "bg-indigo-900 text-white-A700",
    red_A700: "bg-red-A700 text-white-A700",
  },
  outline: {
    red_A700: "outline outline-[1px] outline-red-A700 text-black-900",
  },
};
const sizes = { xs: "p-1", sm: "p-3", md: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "red_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "cyan_300",
    "amber_A200",
    "pink_A200",
    "gray_300",
    "indigo_900",
    "red_A700",
  ]),
};

export { Button };
