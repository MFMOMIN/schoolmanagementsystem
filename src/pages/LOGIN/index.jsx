import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const LOGINPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-poppins items-center justify-start mx-auto p-[86px] md:px-10 sm:px-5 w-full">
        <div className="bg-indigo-900 flex flex-col items-start justify-start max-w-[1020px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
            <div className="h-[851px] relative w-[57%] md:w-full">
              <div className="h-[851px] m-auto w-full">
                <Img
                  className="h-[851px] m-auto object-cover w-full"
                  src="images/img_vector4.png"
                  alt="vectorFour"
                />
                <Img
                  className="absolute h-[113px] inset-x-[0] mx-auto object-cover top-[35%] w-1/5"
                  src="images/img_whatsappimage20210604.png"
                  alt="whatsappimageTwenty"
                />
              </div>
              <Text
                className="absolute bottom-[40%] inset-x-[0] mx-auto md:text-5xl text-[70px] text-white-A700 w-max"
                size="txtPoppinsBold70"
              >
                WELCOME
              </Text>
            </div>
            <div className="flex flex-col gap-14 items-center justify-start md:mt-0 mt-[239px] w-[44%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-center p-[29px] sm:px-5 rounded-[15px] w-full">
                <Input
                  name="name"
                  placeholder="Prince Afful Quansah"
                  className="leading-[normal] p-0 placeholder:text-black-900 text-left text-lg w-full"
                  wrapClassName="mt-[38px] outline outline-[1px] outline-black-900_42 w-full"
                  color="white_A700"
                  size="2xl"
                ></Input>
                <Input
                  name="prompt"
                  placeholder="Enter your password"
                  className="!placeholder:text-gray-400 !text-gray-400 leading-[normal] p-0 text-base text-left w-full"
                  wrapClassName="mt-[15px] w-full"
                  type="password"
                  size="3xl"
                ></Input>
                <a
                  href="javascript:"
                  className="md:ml-[0] ml-[3px] mt-1.5 text-indigo-900 text-xs underline"
                >
                  <Text size="txtPoppinsRegular12">Forgot your password?</Text>
                </a>
                <Button
                  className="common-pointer cursor-pointer font-medium leading-[normal] mb-[26px] min-w-[348px] mt-[18px] rounded-[5px] text-[22px] text-center sm:text-lg md:text-xl"
                  onClick={() => navigate("/dashboard")}
                  size="md"
                >
                  SIGN IN
                </Button>
              </div>
              <Text
                className="text-sm text-white-A700"
                size="txtPoppinsRegular14"
              >
                © 2021 Firm Foundation School Management
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LOGINPage;
