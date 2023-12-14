import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    gray_300_7f: "bg-gray-300_7f text-gray-600",
  },
};
const shapes = { round: "rounded-[5px]" };
const sizes = {
  xs: "pb-2.5 pt-[5px] px-[5px]",
  sm: "pb-1.5 pt-[9px] px-1.5",
  md: "pb-4 pt-3 px-3",
  lg: "pb-[11px] pl-[11px] pr-2 pt-3.5",
  xl: "pb-[13px] pl-3 pr-[13px] pt-[15px]",
  "2xl": "pb-2.5 pl-[7px] pr-2.5 pt-[19px]",
  "3xl": "pb-[17px] pl-[17px] pr-3 pt-[22px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      size = "",
      variant = "fill",
      color = "gray_300_7f",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "gray_300_7f"]),
};

export { Input };
