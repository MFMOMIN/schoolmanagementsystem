import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const Sidebar1 = (props) => {
  const navigate = useNavigate();

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
      <Sidebar
        className={props.className}
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
              padding: "24px 24px 24px 25px",
              gap: "8px",
              color: "#ffffffcc",
              fontSize: "18px",
              fontFamily: "Poppins",
              [`&:hover, &.ps-active`]: {
                color: "#ffffff",
                fontWeight: "600 !important",
                backgroundColor: "#14238aff !important",
              },
            },
          }}
          renderExpandIcon={() => (
            <Img
              className="h-6 mt-[5px] w-6"
              src="images/img_arrowright.svg"
              alt="arrowright_Three"
            />
          )}
          className="flex flex-col items-center justify-end mb-[883px] pt-[25px] w-full"
        >
          <div className="flex flex-col relative w-full">
            <div className="flex flex-col items-center justify-start mx-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[75px] items-center justify-start w-full">
                <MenuItem active={window.location.pathname === "/dashboard"}>
                  <div className="bg-indigo-900 flex flex-col items-center justify-start md:w-full">
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
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mb-auto mt-[-NaNpx] mx-auto w-full z-[1]">
              <div className="bg-indigo-900 flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[26px]"
                  src="images/img_students1.svg"
                  alt="studentsThree"
                />
                <Text>Students</Text>
                <Img
                  className="h-6 w-[286px]"
                  src="images/img_arrowright_white_a700.svg"
                  alt="arrowright"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Line className="bg-indigo-900_01 h-[3px] w-full" />
                </div>
              </div>
              <Line className="bg-indigo-900_01 h-[3px] mt-[71px] w-full" />
            </div>
            <div className="flex flex-col gap-[21px] items-center justify-end w-full z-[1]">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[19px] w-full">
                <Img
                  className="h-[26px]"
                  src="images/img_settings.svg"
                  alt="settings"
                />
                <Text>Teachers</Text>
                <Img
                  className="h-6 md:mt-0 mt-1 w-[286px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Line className="bg-indigo-900_01 h-[3px] w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end mt-[9px] w-full">
            <MenuItem
              icon={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright_white_a700_24x24.svg"
                  alt="arrowright_One"
                />
              }
            >
              <Text>All Teachers</Text>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright_white_a700_24x24.svg"
                  alt="arrowright_Two"
                />
              }
            >
              <Text className="font-semibold text-white-A700">
                Add Teachers
              </Text>
            </MenuItem>
            <SubMenu
              icon={
                <Img
                  className="h-[26px] mt-1 w-[26px]"
                  src="images/img_calculator.svg"
                  alt="calculator"
                />
              }
              label={<Text className="my-1.5">Account</Text>}
            >
              <MenuItem>
                <div className="md:w-full sm:px-5 gap-[11px] flex justify-start items-center flex-row">
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
                >
                  <Text className="my-0.5">Subject</Text>
                </MenuItem>
              </div>
            </SubMenu>
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
