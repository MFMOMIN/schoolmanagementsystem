import React from "react";

import { Img, Text } from "components";

const TEACHERSTEACHERDETAILSPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto p-[34px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-[55px] items-start justify-between max-w-[1009px] mb-9 mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[50px] items-start justify-start w-[37%] md:w-full">
            <Img
              className="h-[71px] md:h-auto object-cover w-[18%] sm:w-full"
              src="images/img_whatsappimage20210604.png"
              alt="whatsappimageTwenty"
            />
            <Img
              className="h-[364px] md:h-auto rounded-[50%] w-[364px]"
              src="images/img_ellipse12.png"
              alt="ellipseTwelve"
            />
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[120px] w-[59%] md:w-full">
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
              size="txtPoppinsSemiBold26"
            >
              Daniel Grant
            </Text>
            <Text
              className="mt-[19px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[90%] sm:w-full"
              size="txtPoppinsLight24"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            </Text>
            <div className="flex flex-row items-center justify-between mt-[74px] w-[55%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                ID Number:
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                22
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between mt-[29px] w-[76%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Name:
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Daniel Grant
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between mt-[29px] w-3/5 md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Gender:
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Male
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between mt-[30px] w-[74%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Father Name:
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Steve Grant
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between mt-[29px] w-[77%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Mother Name:
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Naomi Grant
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between mt-[29px] w-[70%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Date Of Birth:
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                07.08.2016
              </Text>
            </div>
            <div className="flex flex-row gap-[203px] items-start justify-start mt-[29px] w-[63%] md:w-full">
              <Text
                className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Religion:
              </Text>
              <Text
                className="mb-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                {" "}
                Islam
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[65px] items-center justify-start mt-[29px] w-[86%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Father Occupation:
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Graphic Designer
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[26px] w-full">
              <Text
                className="mb-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                E-mail:
              </Text>
              <Text
                className="sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                arabagrant@gmail.com
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between mt-[27px] w-[70%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Admission Date:
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                07.08.2019
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between mt-[29px] w-[53%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Class:
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                2
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TEACHERSTEACHERDETAILSPage;
