import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const STUDENTSSTUDENTPROMOTIONPage = () => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_arrowright.svg"
          alt="arrowright"
        />
      ),
      label: "All Students",
      href: "/studentsallstudents",
      active: window.location.pathname === "/studentsallstudents",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_arrowright.svg"
          alt="arrowright_One"
        />
      ),
      label: "Add Students",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_arrowright.svg"
          alt="arrowright_Two"
        />
      ),
      label: "Students Promotion",
    },
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_people.svg"
          alt="people"
        />
      ),
      label: "Parents",
    },
    { label: <Line className="bg-indigo-900_01 h-[3px] w-full" /> },
  ];

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar
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
                  paddingBottom: "68px",
                  gap: "11px",
                  paddingTop: "19px",
                  color: "#ffffffcc",
                  fontSize: "18px",
                  paddingLeft: "19px",
                  paddingRight: "19px",
                  [`&:hover, &.ps-active`]: {
                    color: "#ffffff",
                    fontWeight: "600 !important",
                    backgroundColor: "#14238aff !important",
                  },
                },
              }}
              renderExpandIcon={() => (
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              )}
              className="flex flex-col items-center justify-end mb-[830px] mt-3 pt-[22px] w-full"
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
                  <Text>Dashboard</Text>
                </MenuItem>
                <MenuItem>
                  <div className="flex flex-row items-center justify-evenly">
                    <Line className="bg-indigo-900_01 h-[3px] w-full" />
                  </div>
                </MenuItem>
                <SubMenu
                  icon={
                    <Img
                      className="h-[26px] w-[26px]"
                      src="images/img_students1.svg"
                      alt="studentsOne"
                    />
                  }
                  label={<Text className="my-[3px]">Students</Text>}
                >
                  <MenuItem>
                    <div className="sm:pl-5 pl-[3px] gap-[11px] flex justify-start items-center flex-row">
                      Submenu Item
                    </div>
                  </MenuItem>
                </SubMenu>
              </div>
              <Line className="bg-indigo-900_01 h-[3px] w-full" />
              <div className="flex flex-col items-center justify-end mt-4 w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
                <SubMenu
                  icon={
                    <Img
                      className="h-[26px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  }
                  label={<Text className="my-[3px]">Teachers</Text>}
                >
                  <MenuItem>
                    <div className="sm:pl-5 pl-[3px] gap-[11px] flex justify-start items-center flex-row">
                      Submenu Item
                    </div>
                  </MenuItem>
                </SubMenu>
                <SubMenu
                  label={<Line className="bg-indigo-900_01 h-[3px] w-full" />}
                >
                  <MenuItem>
                    <div className="sm:pl-5 pl-[3px] gap-[11px] flex justify-start items-center flex-row">
                      Submenu Item
                    </div>
                  </MenuItem>
                </SubMenu>
                <SubMenu
                  icon={
                    <Img
                      className="h-[26px] w-[26px]"
                      src="images/img_calculator.svg"
                      alt="calculator"
                    />
                  }
                  label={<Text className="my-[3px]">Account</Text>}
                >
                  <MenuItem>
                    <div className="sm:pl-5 pl-[3px] gap-[11px] flex justify-start items-center flex-row">
                      Submenu Item
                    </div>
                  </MenuItem>
                </SubMenu>
                <SubMenu
                  label={<Line className="bg-indigo-900_01 h-[3px] w-full" />}
                >
                  <div className="flex flex-col items-center justify-end w-full">
                    <MenuItem
                      icon={
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_openbook11.svg"
                          alt="openbookEleven"
                        />
                      }
                      active={window.location.pathname === "/subjects"}
                      href="/subjects"
                    >
                      <Text className="my-0.5">Subject</Text>
                    </MenuItem>
                  </div>
                </SubMenu>
                <MenuItem>
                  <div className="flex flex-row items-center justify-evenly">
                    <Line className="bg-indigo-900_01 h-[3px] w-full" />
                  </div>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-[26px] w-[26px]"
                      src="images/img_settings_white_a700_26x26.svg"
                      alt="settings_One"
                    />
                  }
                  active={window.location.pathname === "/settings"}
                  href="/settings"
                >
                  <Text className="my-0.5">Settings</Text>
                </MenuItem>
                <MenuItem>
                  <div className="flex flex-row items-center justify-evenly">
                    <Line className="bg-indigo-900_01 h-[3px] w-full" />
                  </div>
                </MenuItem>
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
                Students
              </Text>
              <Line className="bg-red-500 h-1 w-[5%]" />
              <div className="flex flex-row items-start justify-start mt-2.5 w-[26%] md:w-full">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsRegular18Gray800"
                >
                  Home
                </Text>
                <Img
                  className="h-6 ml-[9px] mt-[3px] w-6"
                  src="images/img_arrowright_red_a700.svg"
                  alt="arrowright_Five"
                />
                <Text
                  className="ml-2 text-lg text-red-A700"
                  size="txtPoppinsMedium18RedA700"
                >
                  Student Admit Form
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-[95px] p-[21px] sm:px-5 w-full">
                <div className="flex flex-col items-start justify-start mb-[75px] w-[98%] md:w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                    size="txtPoppinsMedium26"
                  >
                    <>Student Promotion</>
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[23px] w-[97%] md:w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Name
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[216px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Current Class
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[149px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Promotion From Class *
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[61px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Promotion To Class *
                    </Text>
                  </div>
                  <div className="gap-[55px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between mt-[9px] w-full">
                    <Input
                      name="rectangleThirtyFive"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex flex-1 h-[49px] w-full"
                    ></Input>
                    <Input
                      name="groupFortySix"
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
                      name="groupFortyEight"
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
                      name="groupFortySeven"
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
                  </div>
                  <div className="flex flex-row gap-3.5 items-center justify-start mt-[63px] w-[33%] md:w-full">
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
                className="mt-[109px] text-black-900 text-sm"
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

export default STUDENTSSTUDENTPROMOTIONPage;
