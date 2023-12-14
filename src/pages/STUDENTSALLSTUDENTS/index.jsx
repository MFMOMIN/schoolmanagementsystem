import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const selectClassOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const STUDENTSALLSTUDENTSPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_arrowright.svg"
          alt="arrowright_Three"
        />
      ),
      label: "Add Students",
    },
    {
      icon: (
        <Img
          className="h-6 mt-0.5 w-6"
          src="images/img_arrowright.svg"
          alt="arrowright_Four"
        />
      ),
      label: "Students Promotion",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_arrowright.svg"
          alt="arrowright_Five"
        />
      ),
      label: "All Students",
      href: "/studentsallstudents",
      active: window.location.pathname === "/studentsallstudents",
    },
  ];

  return (
    <>
      <div className="bg-blue_gray-50 font-poppins h-[1629px] mx-auto relative w-full">
        <div className="absolute bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[25px] md:px-5 right-[0] shadow-bs1 top-[0] w-[81%]">
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
          <div className="flex flex-row items-center justify-center md:ml-[0] ml-[15px] md:mt-0 my-[3px] w-[7%] md:w-full">
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
        <div className="absolute bottom-[1%] flex flex-col items-start justify-start md:px-5 right-[2%] w-[76%]">
          <Text
            className="text-[22px] text-black-900 sm:text-lg md:text-xl"
            size="txtPoppinsSemiBold22"
          >
            Students
          </Text>
          <Line className="bg-red-500 h-1 w-[5%]" />
          <div className="flex flex-row items-start justify-start mt-2.5 w-[19%] md:w-full">
            <Text
              className="text-gray-800 text-lg"
              size="txtPoppinsRegular18Gray800"
            >
              Home
            </Text>
            <Img
              className="h-6 ml-[9px] mt-[3px] w-6"
              src="images/img_arrowright_red_a700.svg"
              alt="arrowright"
            />
            <Text
              className="ml-2 text-lg text-red-A700"
              size="txtPoppinsMedium18RedA700"
            >
              All Students
            </Text>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start mt-[55px] p-[23px] sm:px-5 rounded-[10px] shadow-bs2 w-full">
            <div className="flex flex-col items-start justify-start mb-[7px] w-[99%] md:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtPoppinsRegular28"
              >
                All Students Data
              </Text>
              <div className="flex md:flex-col flex-row md:gap-[59px] items-center justify-between mt-5 w-[99%] md:w-full">
                <Input
                  name="group111"
                  placeholder="Search by name..."
                  className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                  wrapClassName="md:w-full"
                  type="text"
                  size="xl"
                ></Input>
                <SelectBox
                  className="leading-[normal] text-base text-left w-[35%] md:w-full"
                  placeholderClassName="text-gray-600"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdropdown.svg"
                      alt="arrow_drop_down"
                    />
                  }
                  isMulti={false}
                  name="group110"
                  options={selectClassOptionsList}
                  isSearchable={false}
                  placeholder="Select Class"
                  shape="round"
                  color="gray_300_7f"
                />
                <Button className="cursor-pointer font-semibold leading-[normal] min-w-[202px] rounded-[5px] text-center text-xl">
                  SEARCH
                </Button>
              </div>
              <List
                className="flex flex-col items-center mt-11 outline outline-[1px] outline-gray-300 w-full"
                orientation="vertical"
              >
                <div className="border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[21px] sm:px-5 w-full">
                  <Text
                    className="sm:ml-[0] ml-[17px] text-lg text-red-A700"
                    size="txtPoppinsMedium18RedA700"
                  >
                    ID
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] text-lg text-red-A700"
                    size="txtPoppinsMedium18RedA700"
                  >
                    Name
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] text-lg text-red-A700"
                    size="txtPoppinsMedium18RedA700"
                  >
                    Gender
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] text-lg text-red-A700"
                    size="txtPoppinsMedium18RedA700"
                  >
                    Class
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[38px] text-lg text-red-A700"
                    size="txtPoppinsMedium18RedA700"
                  >
                    Parents
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[58px] text-lg text-red-A700"
                    size="txtPoppinsMedium18RedA700"
                  >
                    Address
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[123px] text-lg text-red-A700"
                    size="txtPoppinsMedium18RedA700"
                  >
                    Date of Birth
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[62px] text-lg text-red-A700"
                    size="txtPoppinsMedium18RedA700"
                  >
                    Phone
                  </Text>
                </div>
                <div
                  className="common-pointer border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-[19px] w-full"
                  onClick={() => navigate("/studentdetails")}
                >
                  <Text
                    className="sm:mt-0 mt-2 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    22
                  </Text>
                  <Text
                    className="ml-7 sm:ml-[0] sm:mt-0 mt-[7px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Daniel Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[42px] sm:mt-0 mt-2 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Male
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] sm:mt-0 mt-2 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    2
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[59px] sm:mt-0 mt-1.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Kofi Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 mt-1.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    59 Australia, Sydney
                  </Text>
                  <Text
                    className="mb-1 sm:ml-[0] ml-[49px] text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    02/05/2001
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] sm:mt-0 my-0.5 text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    + 123 9988568
                  </Text>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-[19px] w-full">
                  <Text
                    className="sm:mt-0 mt-2 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    23
                  </Text>
                  <Text
                    className="ml-7 sm:ml-[0] sm:mt-0 mt-[7px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Daniel Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[42px] sm:mt-0 mt-2 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Male
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    3
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[59px] sm:mt-0 mt-[7px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Kofi Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 mt-1.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    59 Australia, Sydney
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 my-0.5 text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    02/05/2001
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] sm:mt-0 my-0.5 text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    + 123 9988568
                  </Text>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-[19px] w-full">
                  <Text
                    className="sm:mt-0 mt-2 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    24
                  </Text>
                  <Text
                    className="ml-7 sm:ml-[0] sm:mt-0 mt-[7px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Daniel Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[42px] sm:mt-0 mt-2 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Male
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] sm:mt-0 mt-[5px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    5
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[59px] sm:mt-0 mt-2 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Kofi Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 mt-1.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    59 Australia, Sydney
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 my-0.5 text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    02/05/2001
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] sm:mt-0 mt-1 text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    + 123 9988568
                  </Text>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-[18px] w-full">
                  <Text
                    className="sm:mt-0 mt-[9px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    25
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[27px] sm:mt-0 mt-2 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Daniel Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[42px] sm:mt-0 mt-[9px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Male
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] sm:mt-0 mt-1.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    4
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[59px] sm:mt-0 mt-2.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Kofi Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 mt-[7px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    59 Australia, Sydney
                  </Text>
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[49px] sm:mt-0 mt-[5px] text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    02/05/2001
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] sm:mt-0 mt-1.5 text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    + 123 9988568
                  </Text>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-[17px] w-full">
                  <Text
                    className="sm:mt-0 mt-2.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    26
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[25px] sm:mt-0 mt-[9px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Daniel Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[42px] sm:mt-0 mt-2.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Male
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] sm:mt-0 mt-[9px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    2
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[59px] sm:mt-0 mt-3 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Kofi Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 mt-2 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    59 Australia, Sydney
                  </Text>
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[49px] sm:mt-0 mt-[7px] text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    02/05/2001
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] sm:mt-0 mt-2 text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    + 123 9988568
                  </Text>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-4 w-full">
                  <Text
                    className="sm:mt-0 mt-[11px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    27
                  </Text>
                  <Text
                    className="ml-7 sm:ml-[0] sm:mt-0 mt-2.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Daniel Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[42px] sm:mt-0 mt-[11px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Male
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] sm:mt-0 mt-2 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    1
                  </Text>
                  <Text
                    className="ml-16 sm:ml-[0] sm:mt-0 mt-3.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Kofi Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 mt-[9px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    59 Australia, Sydney
                  </Text>
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[49px] sm:mt-0 mt-[9px] text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    02/05/2001
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] mr-0.5 sm:mt-0 mt-2.5 text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    + 123 9988568
                  </Text>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-[15px] w-full">
                  <Text
                    className="sm:mt-0 mt-3 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    28
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[27px] sm:mt-0 mt-[11px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Daniel Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[42px] sm:mt-0 mt-3 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Male
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] sm:mt-0 mt-1.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    3
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[59px] sm:mt-0 mt-4 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Kofi Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 mt-2.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    59 Australia, Sydney
                  </Text>
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[49px] sm:mt-0 mt-[11px] text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    02/05/2001
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] mr-[3px] sm:mt-0 mt-3 text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    + 123 9988568
                  </Text>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-3.5 w-full">
                  <Text
                    className="sm:mt-0 mt-[13px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    29
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[26px] sm:mt-0 mt-3 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Daniel Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] sm:mt-0 mt-[13px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Male
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[81px] sm:mt-0 mt-[9px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    4
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[59px] sm:mt-0 mt-[18px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Kofi Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 mt-[11px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    59 Australia, Sydney
                  </Text>
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[49px] sm:mt-0 mt-[13px] text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    02/05/2001
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] mr-1 sm:mt-0 mt-3.5 text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    + 123 9988568
                  </Text>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-[13px] w-full">
                  <Text
                    className="sm:mt-0 mt-3.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    30
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[25px] sm:mt-0 mt-[13px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Daniel Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[42px] sm:mt-0 mt-3.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Male
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] sm:mt-0 mt-3 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    4
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[59px] sm:mt-0 mt-5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Kofi Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 mt-3 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    59 Australia, Sydney
                  </Text>
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[49px] sm:mt-0 mt-[15px] text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    02/05/2001
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] mr-[5px] sm:mt-0 mt-4 text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    + 123 9988568
                  </Text>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-3 w-full">
                  <Text
                    className="sm:mt-0 mt-[15px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    31
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[29px] sm:mt-0 mt-3.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Daniel Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[42px] sm:mt-0 mt-[15px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Male
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[87px] sm:mt-0 mt-[18px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    1
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[59px] sm:mt-0 mt-[22px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Kofi Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 mt-[13px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    59 Australia, Sydney
                  </Text>
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[49px] sm:mt-0 mt-[17px] text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    02/05/2001
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] mr-1.5 sm:mt-0 mt-[18px] text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    + 123 9988568
                  </Text>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-[11px] w-full">
                  <Text
                    className="sm:mt-0 mt-4 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    32
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[26px] sm:mt-0 mt-[15px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Daniel Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[42px] sm:mt-0 mt-4 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Male
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[87px] sm:mt-0 mt-4 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    3
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[54px] sm:mt-0 mt-6 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Kofi Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 mt-3.5 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    59 Australia, Sydney
                  </Text>
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[49px] sm:mt-0 mt-[19px] text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    02/05/2001
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] mr-[7px] sm:mt-0 mt-5 text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    + 123 9988568
                  </Text>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-2.5 w-full">
                  <Text
                    className="sm:mt-0 mt-3 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    33
                  </Text>
                  <Text
                    className="ml-7 sm:ml-[0] sm:mt-0 mt-4 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Daniel Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[42px] sm:mt-0 mt-[17px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Male
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[87px] sm:mt-0 mt-[19px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    4
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[54px] sm:mt-0 mt-[26px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Kofi Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 mt-[15px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    59 Australia, Sydney
                  </Text>
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[49px] sm:mt-0 mt-[21px] text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    02/05/2001
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] mr-2 sm:mt-0 mt-[22px] text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    + 123 9988568
                  </Text>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-[9px] w-full">
                  <Text
                    className="sm:mt-0 mt-[18px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    34
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[27px] sm:mt-0 mt-[17px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Daniel Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[42px] sm:mt-0 mt-[18px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Male
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[87px] sm:mt-0 mt-[22px] text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    4
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[54px] sm:mt-0 mt-7 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Kofi Grant
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[49px] sm:mt-0 mt-4 text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    59 Australia, Sydney
                  </Text>
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[49px] sm:mt-0 mt-[23px] text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    02/05/2001
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] mr-[9px] sm:mt-0 mt-6 text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    + 123 9988568
                  </Text>
                </div>
              </List>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-end md:ml-[0] ml-[606px] mt-[26px] w-2/5 md:w-full">
                <Text
                  className="mb-1 sm:mt-0 mt-4 text-[22px] text-gray-600_01 sm:text-lg md:text-xl"
                  size="txtPoppinsRegular22Gray60001"
                >
                  Previous
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[60px] sm:ml-[0] ml-[30px] text-[22px] text-center sm:text-lg md:text-xl"
                  shape="square"
                >
                  1
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[60px] sm:ml-[0] ml-[18px] text-[22px] text-center sm:text-lg md:text-xl"
                  shape="square"
                  variant="outline"
                >
                  2
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[60px] sm:ml-[0] ml-[18px] text-[22px] text-center sm:text-lg md:text-xl"
                  shape="square"
                  variant="outline"
                >
                  3
                </Button>
                <Text
                  className="mb-1 ml-5 sm:ml-[0] sm:mt-0 mt-4 text-[22px] text-gray-600_01 sm:text-lg md:text-xl"
                  size="txtPoppinsRegular22Gray60001"
                >
                  Next
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-[42px] text-black-900 text-sm"
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
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[287px] bg-cover bg-no-repeat flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 top-[0]"
          style={{ backgroundImage: "url('images/img_frame11.svg')" }}
        >
          <Menu
            menuItemStyles={{
              button: {
                padding: "21px 21px 21px 25px",
                backgroundColor: "#14238a",
                gap: "8px",
                color: "#ffffffcc",
                fontSize: "18px",
                marginLeft: "auto",
                marginRight: "auto",
                [`&:hover, &.ps-active`]: {
                  color: "#ffffff",
                  fontWeight: "600 !important",
                  backgroundColor: "#14238aff !important",
                  position: "relative",
                },
              },
            }}
            className="sm:h-[1553px] md:h-[1583px] h-[1629px] mb-[22px] pt-[22px] relative w-full"
          >
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto py-7 w-full"
              style={{ backgroundImage: "url('images/img_frame11.svg')" }}
            >
              <div className="flex flex-col gap-3 items-center justify-start pb-1.5 w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    className="common-pointer flex-1 h-[58px] sm:h-auto object-cover w-full"
                    src="images/img_whatsappimage20210604.png"
                    alt="whatsappimageTwenty"
                    onClick={() => navigate("/dashboard")}
                  />
                  <Img
                    className="h-[38px]"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                </div>
                <MenuItem
                  active={window.location.pathname === "/dashboard"}
                  href="/dashboard"
                >
                  <div className="flex flex-col items-center justify-end">
                    <div className="flex flex-col gap-[22px] justify-start w-full">
                      <div className="flex flex-row gap-[11px] items-start justify-start md:ml-[0] ml-[23px] w-[49%] md:w-full">
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_avtimer.svg"
                          alt="avtimer"
                        />
                        <Text>Dashboard</Text>
                      </div>
                      <Line className="bg-indigo-900_01 h-[3px] w-full" />
                    </div>
                  </div>
                </MenuItem>
              </div>
              <div className="flex sm:h-[337px] md:h-[425px] h-[494px] justify-end relative w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-[26px] w-[26px]"
                      src="images/img_people.svg"
                      alt="people"
                    />
                  }
                >
                  <Text>Parents</Text>
                </MenuItem>
                <Accordion
                  preExpanded={[0]}
                  className="absolute flex flex-col gap-[3px] inset-[0] justify-center m-auto w-full"
                >
                  {[...Array(3)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="flex flex-col items-center justify-start pb-[74px] w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                          <Img
                            className="h-[26px]"
                            src="images/img_students1.svg"
                            alt="studentsOne"
                          />
                          <Text>Students</Text>
                          <Img
                            className="h-6 w-[286px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <AccordionItemHeading className="w-full">
                            <AccordionItemButton>
                              <AccordionItemState>
                                {({ expanded }) => (
                                  <div className="flex flex-col items-center justify-between w-full">
                                    <Line className="bg-indigo-900_01 h-[3px] w-full" />
                                    <div className="bg-indigo-500_cc h-[189px] w-full"></div>
                                  </div>
                                )}
                              </AccordionItemState>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                        </div>
                      </div>
                      <Line className="self-center h-[3px] bg-indigo-900_01 w-full" />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[777px] pt-0.5 w-full">
                <MenuItem
                  active={window.location.pathname === "/subjects"}
                  href="/subjects"
                >
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-col gap-5 justify-start w-full">
                      <div className="flex flex-row gap-[11px] items-start justify-start md:ml-[0] ml-[23px] w-[37%] md:w-full">
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_openbook11.svg"
                          alt="openbookEleven"
                        />
                        <Text className="mt-0.5">Subject</Text>
                      </div>
                      <Line className="bg-indigo-900_01 h-[3px] w-full" />
                    </div>
                  </div>
                </MenuItem>
                <MenuItem
                  active={window.location.pathname === "/settings"}
                  href="/settings"
                >
                  <div className="flex flex-col items-center justify-end">
                    <div className="flex flex-col gap-[15px] justify-start mt-[15px] w-full">
                      <div className="flex flex-row gap-[11px] items-start justify-start md:ml-[0] ml-[23px] w-[39%] md:w-full">
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_settings_white_a700_26x26.svg"
                          alt="settings_One"
                        />
                        <Text className="mt-0.5">Settings</Text>
                      </div>
                      <Line className="bg-indigo-900_01 h-[3px] w-full" />
                    </div>
                  </div>
                </MenuItem>
              </div>
            </div>
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default STUDENTSALLSTUDENTSPage;
