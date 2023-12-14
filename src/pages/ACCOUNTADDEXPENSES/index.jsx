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

import { Button, Img, Input, Line, Text } from "components";

const ACCOUNTADDEXPENSESPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_arrowright_white_a700_24x24.svg"
          alt="arrowright_Two"
        />
      ),
      label: "Fees Group",
      href: "/accountfeesgroup",
      active: window.location.pathname === "/accountfeesgroup",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_arrowright_white_a700_24x24.svg"
          alt="arrowright_Three"
        />
      ),
      label: "Student Fees",
      href: "/accountstudentfees",
      active: window.location.pathname === "/accountstudentfees",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_arrowright_white_a700_24x24.svg"
          alt="arrowright_Four"
        />
      ),
      label: "Expenses",
      href: "/accountexpenses",
      active: window.location.pathname === "/accountexpenses",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_arrowright_white_a700_24x24.svg"
          alt="arrowright_Five"
        />
      ),
      label: "Add Expenses",
      href: "/accountaddexpenses",
      active: window.location.pathname === "/accountaddexpenses",
    },
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_openbook11.svg"
          alt="openbookEleven"
        />
      ),
      label: "Subject",
      href: "/subjects",
      active: window.location.pathname === "/subjects",
    },
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
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[286px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
            style={{ backgroundImage: "url('images/img_frame11.svg')" }}
          >
            <div className="flex flex-row items-center justify-between ml-6 md:ml-[0] mr-2.5 mt-7 w-[89%]">
              <Img
                className="common-pointer h-[58px] md:h-auto object-cover"
                src="images/img_whatsappimage20210604.png"
                alt="whatsappimageTwenty"
                onClick={() => navigate("/dashboard")}
              />
              <Img
                className="h-[38px] w-[38px]"
                src="images/img_thumbsup.svg"
                alt="thumbsup"
              />
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  gap: "11px",
                  paddingTop: "24px",
                  paddingBottom: "74px",
                  paddingLeft: "25px",
                  paddingRight: "24px",
                  color: "#ffffffcc",
                  fontSize: "18px",
                  [`&:hover, &.ps-active`]: {
                    color: "#ffffff",
                    fontWeight: "600 !important",
                    backgroundColor: "#14238aff !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-end mb-[814px] mt-[9px] pt-[25px] w-full"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-[26px] w-[26px]"
                      src="images/img_avtimer.svg"
                      alt="avtimer"
                    />
                  }
                  active={window.location.pathname === "/dashboard"}
                  href="/dashboard"
                >
                  <Text className="my-0.5">Dashboard</Text>
                </MenuItem>
                <MenuItem>
                  <div className="flex flex-row items-center justify-evenly">
                    <Line className="bg-indigo-900_01 h-[3px] w-full" />
                  </div>
                </MenuItem>
              </div>
              <div className="sm:h-[152px] md:h-[239px] h-[303px] mt-[3px] relative w-full">
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
                  className="absolute flex flex-col gap-px inset-[0] justify-center m-auto w-full"
                >
                  {[...Array(3)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="flex flex-col items-center justify-start pb-[74px] w-full">
                        <div className="bg-indigo-900 flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                          <Img
                            className="h-[26px]"
                            src="images/img_students1.svg"
                            alt="studentsSeven"
                          />
                          <Text>Students</Text>
                          <Img
                            className="h-6 w-[286px]"
                            src="images/img_arrowright_white_a700.svg"
                            alt="arrowright"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <AccordionItemHeading className="w-full">
                            <AccordionItemButton>
                              <AccordionItemState>
                                {({ expanded }) => (
                                  <div className="flex flex-col items-center justify-between w-full">
                                    <Line className="bg-indigo-900_01 h-[3px] w-full" />
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
              <div className="flex flex-col gap-[-10.03px] items-center justify-end mt-1 w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
            </Menu>
          </Sidebar>
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
                Account
              </Text>
              <Line className="bg-red-500 h-1 w-[5%]" />
              <div className="flex flex-row items-start justify-start mt-[11px] w-1/5 md:w-full">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsRegular18Gray800"
                >
                  Home
                </Text>
                <Img
                  className="h-6 ml-[9px] mt-0.5 w-6"
                  src="images/img_arrowright_red_a700.svg"
                  alt="arrowright_Six"
                />
                <Text
                  className="ml-2 text-lg text-red-A700"
                  size="txtPoppinsMedium18RedA700"
                >
                  Add Expense
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-[93px] p-[25px] sm:px-5 w-full">
                <div className="flex flex-col items-start justify-start mb-[25px] w-[99%] md:w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                    size="txtPoppinsMedium26"
                  >
                    Add New Expenses
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[19px] w-[88%] md:w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Name *
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[203px] md:mt-0 mt-0.5 text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Expense Type *
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[138px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Status *
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[199px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Amount *
                    </Text>
                  </div>
                  <div className="gap-[55px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between mt-[7px] w-full">
                    <Input
                      name="rectangleThirtyFive"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex flex-1 h-[49px] w-full"
                    ></Input>
                    <Input
                      name="groupEleven"
                      placeholder="Please Select Class"
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-[13px] text-left w-full"
                      wrapClassName="flex flex-1 w-full"
                      suffix={
                        <Img
                          className="h-6 ml-[35px] w-[24pxpx] my-auto"
                          src="images/img_arrowdropdown.svg"
                          alt="arrow_drop_down"
                        />
                      }
                      size="lg"
                    ></Input>
                    <Input
                      name="groupTwelve"
                      placeholder="Please Select"
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-[13px] text-left w-full"
                      wrapClassName="flex flex-1 w-full"
                      suffix={
                        <Img
                          className="h-6 ml-[35px] w-[24pxpx] my-auto"
                          src="images/img_arrowdropdown.svg"
                          alt="arrow_drop_down"
                        />
                      }
                      size="lg"
                    ></Input>
                    <Input
                      name="rectangleFiftyNine"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex flex-1 h-[49px] w-full"
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[41px] w-[61%] md:w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Phone
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[214px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      E-Mail Address
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[141px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Due Date
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[3px] w-[74%] md:w-full">
                    <Input
                      name="rectangleSixty"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-[49px] w-[29%] md:w-full"
                    ></Input>
                    <Input
                      name="rectangleSixtyOne"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-[49px] md:ml-[0] ml-[55px] w-[29%] md:w-full"
                    ></Input>
                    <Input
                      name="groupThirteen"
                      placeholder="dd/mm/yy"
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-[13px] text-left w-full"
                      wrapClassName="flex md:ml-[0] ml-[57px] w-[29%] md:w-full"
                      suffix={
                        <Img
                          className="h-[19px] ml-[35px] my-px"
                          src="images/img_calendar.svg"
                          alt="calendar"
                        />
                      }
                      size="xl"
                    ></Input>
                  </div>
                  <div className="flex flex-row gap-3.5 items-center justify-start mt-[45px] w-[33%] md:w-full">
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
                className="mt-[51px] text-black-900 text-sm"
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

export default ACCOUNTADDEXPENSESPage;
