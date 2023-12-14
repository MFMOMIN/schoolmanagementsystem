import React from "react";

const sizeClasses = {
  txtPoppinsBold18: "font-bold font-poppins",
  txtPoppinsLight18: "font-light font-poppins",
  txtPoppinsRegular18Black900: "font-normal font-poppins",
  txtPoppinsRegular28: "font-normal font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular22Gray60001: "font-normal font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsLight24: "font-light font-poppins",
  txtPoppinsMedium18RedA700: "font-medium font-poppins",
  txtPoppinsRegular14Black900: "font-normal font-poppins",
  txtPoppinsMedium14Black900: "font-medium font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsLight18WhiteA700: "font-light font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsRegular22: "font-normal font-poppins",
  txtPoppinsMedium18Gray700: "font-medium font-poppins",
  txtPoppinsSemiBold26: "font-poppins font-semibold",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsBold70: "font-bold font-poppins",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtPoppinsBold18Black900: "font-bold font-poppins",
  txtPoppinsRegular18Gray800: "font-normal font-poppins",
  txtPoppinsSemiBold28: "font-poppins font-semibold",
  txtPoppinsLight18Gray40002: "font-light font-poppins",
  txtPoppinsMedium26: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
