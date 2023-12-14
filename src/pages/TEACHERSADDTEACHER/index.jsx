import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const TEACHERSADDTEACHERPage = () => {
  const sideBarMenu = [
    { label: <Line className="bg-indigo-900_01 h-[3px] w-full" /> },
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_settings_white_a700_26x26.svg"
          alt="settings_One"
        />
      ),
      label: "Settings",
      href: "/settings",
      active: window.location.pathname === "/settings",
    },
    { label: <Line className="bg-indigo-900_01 h-[3px] w-full" /> },
  ];

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1
            className="!sticky !w-[286px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
            style={{ backgroundImage: "url('images/img_frame11.svg')" }}
          />
          <div className="flex flex-1 flex-col gap-[51px] items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[25px] sm:px-5 shadow-bs1 w-full">
              <Img
                className="h-[43px] md:mt-0 my-[3px] w-[43px]"
                src="images/img_search.svg"
                alt="search"
              />
              <Text
                className="md:ml-[0] ml-[9px] text-gray-500_cc text-lg"
                size="txtPoppinsMedium18"
              >
                Search
              </Text>
              <Img
                className="h-6 md:ml-[0] ml-[810px] w-6"
                src="images/img_lock.svg"
                alt="lock"
              />
              <Img
                className="h-6 ml-3.5 md:ml-[0] w-6"
                src="images/img_notificationsnone.svg"
                alt="notificationsno"
              />
              <Line className="bg-red-A700 md:h-0.5 h-[25px] md:ml-[0] ml-[17px] md:mt-0 my-3 w-0.5 md:w-full" />
              <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[15px] md:mt-0 my-[3px] w-[7%] md:w-full">
                <Img
                  className="h-[43px] md:h-auto rounded-[50%] w-[43px]"
                  src="images/img_ellipse10.png"
                  alt="ellipseTen"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdropdown.svg"
                  alt="arrowdropdown"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtPoppinsSemiBold22"
              >
                Teachers
              </Text>
              <Line className="bg-red-500 h-1 w-[5%]" />
              <div className="flex flex-row items-start justify-start mt-2.5 w-1/5 md:w-full">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsRegular18Gray800"
                >
                  Home
                </Text>
                <Img
                  className="h-6 ml-[9px] mt-[3px] w-6"
                  src="images/img_arrowright_red_a700.svg"
                  alt="arrowright_Four"
                />
                <Text
                  className="ml-2 text-lg text-red-A700"
                  size="txtPoppinsMedium18RedA700"
                >
                  Add Teacher
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-[95px] p-[21px] sm:px-5 w-full">
                <div className="flex flex-col items-start justify-start mb-[21px] w-[98%] md:w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                    size="txtPoppinsMedium26"
                  >
                    Add New Teacher
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[22px] w-[92%] md:w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      First Name *
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[161px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Last Name *
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[163px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Gender *
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[190px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Date Of Birth *
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-1 w-full">
                    <Input
                      name="rectangleThirtyFive"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex sm:flex-1 h-[49px] sm:mt-0 mt-1.5 sm:w-full"
                    ></Input>
                    <Input
                      name="rectangleFiftySix"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex sm:flex-1 h-[49px] sm:mt-0 my-[3px] sm:w-full"
                    ></Input>
                    <Input
                      name="groupTwentySix"
                      placeholder="Please Select Gender"
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-[13px] text-left w-full"
                      wrapClassName="flex sm:flex-1 mb-1.5 sm:w-full"
                      suffix={
                        <Img
                          className="h-6 ml-[33px] my-auto"
                          src="images/img_arrowdropdown.svg"
                          alt="arrow_drop_down"
                        />
                      }
                      size="lg"
                    ></Input>
                    <Input
                      name="groupTwentyTwo"
                      placeholder="dd/mm/yy"
                      className="!placeholder:text-gray-700_01 !text-gray-700_01 leading-[normal] p-0 text-[13px] text-left w-full"
                      wrapClassName="flex sm:flex-1 sm:mt-0 my-[3px] sm:w-full"
                      suffix={
                        <Img
                          className="mt-px mb-auto h-[19px] ml-[35px]"
                          src="images/img_calendar.svg"
                          alt="calendar"
                        />
                      }
                      size="md"
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[29px] w-[85%] md:w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Blood group *
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[148px] md:mt-0 mt-1 text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Religion *
                    </Text>
                    <Text
                      className="mb-1 md:ml-[0] ml-[188px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Email{" "}
                    </Text>
                    <Text
                      className="mb-1 md:ml-[0] ml-[222px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Phone
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <Input
                      name="rectangleFiftyEight"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex sm:flex-1 h-[49px] sm:w-full"
                    ></Input>
                    <Input
                      name="groupTwentyFour"
                      placeholder="Please Select Religion"
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-[13px] text-left w-full"
                      wrapClassName="flex sm:flex-1 sm:w-full"
                      suffix={
                        <Img
                          className="h-6 ml-8 my-auto"
                          src="images/img_arrowdropdown.svg"
                          alt="arrow_drop_down"
                        />
                      }
                      size="lg"
                    ></Input>
                    <Input
                      name="rectangleSixty"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex sm:flex-1 h-[49px] sm:w-full"
                    ></Input>
                    <Input
                      name="rectangleSixtyOne"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex sm:flex-1 h-[49px] sm:w-full"
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[33px] w-[68%] md:w-full">
                    <Text
                      className="mb-[5px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Class *
                    </Text>
                    <Text
                      className="ml-52 md:ml-[0] md:mt-0 mt-[5px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Address *
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[185px] md:mt-0 mt-1 text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Admission Date *
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-0.5 w-[74%] md:w-full">
                    <Input
                      name="groupTwentyThree"
                      placeholder="Please Select Class"
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-[13px] text-left w-full"
                      wrapClassName="flex mb-1 w-[29%] md:w-full"
                      suffix={
                        <Img
                          className="h-6 ml-[35px] my-auto"
                          src="images/img_arrowdropdown.svg"
                          alt="arrow_drop_down"
                        />
                      }
                      size="lg"
                    ></Input>
                    <Input
                      name="rectangleSixtyThree"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-[49px] md:ml-[0] ml-[54px] md:mt-0 mt-1 w-[29%] md:w-full"
                    ></Input>
                    <Input
                      name="groupTwentyFive"
                      placeholder="dd/mm/yy"
                      className="!placeholder:text-gray-700_01 !text-gray-700_01 leading-[normal] p-0 text-[13px] text-left w-full"
                      wrapClassName="flex mb-1 md:ml-[0] ml-[55px] w-[29%] md:w-full"
                      suffix={
                        <Img
                          className="h-[19px] ml-[35px] my-px"
                          src="images/img_calendar.svg"
                          alt="calendar"
                        />
                      }
                      size="md"
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[9px] items-start justify-start md:ml-[0] ml-[31px] mt-[59px] w-[61%] md:w-full">
                    <div className="bg-gray-300 h-[280px] rounded-[50%] w-[280px]"></div>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[54%] md:w-full">
                      <Text
                        className="text-black-900 text-lg"
                        size="txtPoppinsRegular18Black900"
                      >
                        Upload Teacher Photo (150px X 150px)
                      </Text>
                      <div className="flex flex-row gap-[9px] items-center justify-start w-[71%] md:w-full">
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[122px] outline outline-[1px] outline-black-900 text-base text-center"
                          shape="square"
                          color="gray_300"
                          size="xs"
                        >
                          Choose File
                        </Button>
                        <Text
                          className="text-[15px] text-black-900"
                          size="txtPoppinsRegular15"
                        >
                          No file chosen
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3.5 items-center justify-start mt-[26px] w-[33%] md:w-full">
                    <Button className="cursor-pointer font-semibold leading-[normal] min-w-[162px] rounded-[5px] text-center text-xl">
                      Save
                    </Button>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[162px] rounded-[5px] text-center text-xl"
                      color="indigo_900"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </div>
              <Text
                className="mt-16 text-black-900 text-sm"
                size="txtPoppinsMedium14Black900"
              >
                <span className="text-black-900_63 font-poppins text-left font-medium">
                  © Copyrights{" "}
                </span>
                <span className="text-black-900 font-poppins text-left font-medium">
                  firmfoundation{" "}
                </span>
                <span className="text-black-900_63 font-poppins text-left font-medium">
                  2021. All rights reserved
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TEACHERSADDTEACHERPage;
