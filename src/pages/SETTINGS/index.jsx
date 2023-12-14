import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SETTINGSPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar
            className="!sticky !w-[286px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
            style={{ backgroundImage: "url('images/img_frame11.svg')" }}
          >
            <div className="flex flex-row items-center justify-between ml-6 md:ml-[0] mr-2.5 mt-[21px] w-[89%]">
              <Img
                className="common-pointer h-[58px] md:h-auto object-cover"
                src="images/img_whatsappimage20210604.png"
                alt="whatsappimageTwenty"
                onClick={() => navigate("/dashboard")}
              />
              <Img
                className="h-[38px] w-[38px]"
                src="images/img_sort.svg"
                alt="sort"
              />
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  paddingBottom: "74px",
                  width: "100%",
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
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              )}
              className="flex flex-col items-center justify-start mb-[1361px] mt-4 pt-[25px] w-full"
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
              <div className="flex flex-col items-center justify-start mt-[25px] pb-[231px] w-full">
                <div className="flex flex-col items-center justify-end w-full">
                  <SubMenu
                    icon={
                      <Img
                        className="h-[26px] w-[26px]"
                        src="images/img_students1.svg"
                        alt="studentsOne"
                      />
                    }
                    label={<Text className="my-1.5">Students</Text>}
                  >
                    <MenuItem>
                      <div className="sm:px-5 pt-1 gap-[11px] flex justify-start items-center flex-row px-1">
                        Submenu Item
                      </div>
                    </MenuItem>
                  </SubMenu>
                  <SubMenu
                    label={<Line className="bg-indigo-900_01 h-[3px] w-full" />}
                  >
                    <MenuItem>
                      <div className="sm:px-5 pt-1 gap-[11px] flex justify-start items-center flex-row px-1">
                        Submenu Item
                      </div>
                    </MenuItem>
                  </SubMenu>
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
                    <Text className="my-0.5">Subjects</Text>
                  </MenuItem>
                  <MenuItem>
                    <div className="flex flex-row items-center justify-evenly">
                      <Line className="bg-indigo-900_01 h-[3px] w-full" />
                    </div>
                  </MenuItem>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
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
                  <MenuItem>
                    <div className="flex flex-row items-center justify-evenly">
                      <Line className="bg-indigo-900_01 h-[3px] w-full" />
                    </div>
                  </MenuItem>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <SubMenu
                  icon={
                    <Img
                      className="h-[26px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  }
                  label={<Text className="my-1.5">Teachers</Text>}
                >
                  <MenuItem>
                    <div className="sm:px-5 pt-1 gap-[11px] flex justify-start items-center flex-row px-1">
                      Submenu Item
                    </div>
                  </MenuItem>
                </SubMenu>
                <SubMenu
                  label={<Line className="bg-indigo-900_01 h-[3px] w-full" />}
                >
                  <div className="flex flex-col items-center justify-end mt-[85px] w-full">
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
                  </div>
                </SubMenu>
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
                    <div className="sm:px-5 pt-1 gap-[11px] flex justify-start items-center flex-row px-1">
                      Submenu Item
                    </div>
                  </MenuItem>
                </SubMenu>
                <SubMenu
                  label={<Line className="bg-indigo-900_01 h-[3px] w-full" />}
                >
                  <MenuItem>
                    <div className="sm:px-5 pt-1 gap-[11px] flex justify-start items-center flex-row px-1">
                      Submenu Item
                    </div>
                  </MenuItem>
                </SubMenu>
                <MenuItem>
                  <div className="flex flex-row items-center justify-evenly">
                    <Line className="bg-indigo-900_01 h-[3px] w-full" />
                  </div>
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[53px] items-center justify-start md:px-5 w-full">
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
                className="h-6 md:ml-[0] ml-[808px] w-6"
                src="images/img_lock.svg"
                alt="lock"
              />
              <Img
                className="h-6 ml-4 md:ml-[0] w-6"
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
            <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
              <div className="flex flex-col relative w-[9%]">
                <Text
                  className="mx-auto text-[22px] text-black-900 sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Settings
                </Text>
                <Line className="bg-red-500 h-1 mt-[-1.8px] w-[49%] z-[1]" />
              </div>
              <div className="flex flex-row items-start justify-start mt-2.5 w-[16%] md:w-full">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsRegular18Gray800"
                >
                  Home
                </Text>
                <Img
                  className="h-[29px] ml-[9px]"
                  src="images/img_arrowright_red_a700.svg"
                  alt="arrowright_Three"
                />
                <Text
                  className="ml-2 mt-0.5 text-lg text-red-A700"
                  size="txtPoppinsMedium18RedA700"
                >
                  Settings
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-[59px] pb-[161px] rounded-[10px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                  <div className="md:h-[350px] h-[498px] relative w-full">
                    <div className="absolute h-[350px] inset-x-[0] mx-auto top-[0] w-full">
                      <Img
                        className="h-[350px] m-auto object-cover w-full"
                        src="images/img_rectangle69.png"
                        alt="rectangleSixtyNine"
                      />
                      <Text
                        className="absolute left-[3%] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 top-[7%]"
                        size="txtPoppinsSemiBold28"
                      >
                        Account Setting
                      </Text>
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[326px] left-[3%] rounded-[50%] w-[326px]"
                      src="images/img_ellipse14.png"
                      alt="ellipseFourteen"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      Prince Afful Quansah - Admin
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[62px] items-center justify-start mt-[38px] w-[95%] md:w-full">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtPoppinsRegular22"
                      >
                        School Name *
                      </Text>
                      <Input
                        name="groupEightyOne"
                        placeholder="Firm Foundation School - Accra"
                        className="leading-[normal] md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left w-full"
                        wrapClassName="outline outline-[1px] outline-black-900 w-[77%] md:w-full"
                        color="white_A700"
                        size="sm"
                      ></Input>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[18px] w-[95%] md:w-full">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtPoppinsRegular22"
                      >
                        Email *
                      </Text>
                      <Input
                        name="email_One"
                        placeholder="arabagrant@gmail.com"
                        className="leading-[normal] md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left w-full"
                        wrapClassName="outline outline-[1px] outline-black-900 md:w-full"
                        type="email"
                        color="white_A700"
                        size="xs"
                      ></Input>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[18px] w-[95%] md:w-full">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtPoppinsRegular22"
                      >
                        Mobile No
                      </Text>
                      <Input
                        name="mobileNo_One"
                        placeholder="0264622310"
                        className="leading-[normal] md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left w-full"
                        wrapClassName="outline outline-[1px] outline-black-900 md:w-full"
                        type="number"
                        color="white_A700"
                        size="sm"
                      ></Input>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[22px] w-[95%] md:w-full">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtPoppinsRegular22"
                      >
                        City
                      </Text>
                      <Input
                        name="groupSeventyEight"
                        placeholder="Accra"
                        className="leading-[normal] md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left w-full"
                        wrapClassName="outline outline-[1px] outline-black-900 md:w-full"
                        color="white_A700"
                        size="sm"
                      ></Input>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[22px] w-[95%] md:w-full">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtPoppinsRegular22"
                      >
                        Address
                      </Text>
                      <Input
                        name="groupSeventySeven"
                        placeholder="Greater-Accra"
                        className="leading-[normal] md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left w-full"
                        wrapClassName="outline outline-[1px] outline-black-900 md:w-full"
                        color="white_A700"
                        size="sm"
                      ></Input>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[22px] w-full">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtPoppinsRegular22"
                      >
                        Username
                      </Text>
                      <Input
                        name="groupSeventySix"
                        placeholder="Prince Afful Quansah"
                        className="leading-[normal] md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left w-full"
                        wrapClassName="md:flex-1 md:ml-[0] ml-[110px] outline outline-[1px] outline-black-900 w-[72%] md:w-full"
                        color="white_A700"
                        size="sm"
                      ></Input>
                      <Img
                        className="h-6 md:ml-[0] ml-[35px] w-6"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[22px] w-full">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtPoppinsRegular22"
                      >
                        Password
                      </Text>
                      <Input
                        name="password_One"
                        placeholder="**********"
                        className="leading-[normal] md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left w-full"
                        wrapClassName="md:flex-1 md:ml-[0] ml-[118px] outline outline-[1px] outline-black-900 w-[72%] md:w-full"
                        color="white_A700"
                        size="xs"
                      ></Input>
                      <Img
                        className="h-6 md:ml-[0] ml-[35px] w-6"
                        src="images/img_edit.svg"
                        alt="edit_One"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[31px] w-[95%] md:w-full">
                      <Text
                        className="md:mt-0 mt-0.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtPoppinsRegular22"
                      >
                        Language
                      </Text>
                      <SelectBox
                        className="leading-[normal] outline outline-[1px] outline-black-900 text-[22px] text-left sm:text-lg md:text-xl w-[77%] md:w-full"
                        placeholderClassName="text-black-900"
                        indicator={
                          <Img
                            className="h-7 mr-[0] w-7"
                            src="images/img_arrowdropdown.svg"
                            alt="arrow_drop_down"
                          />
                        }
                        isMulti={false}
                        name="language_One"
                        options={languageOneOptionsList}
                        isSearchable={false}
                        placeholder="English"
                        shape="round"
                        color="white_A700"
                        size="xs"
                      />
                    </div>
                    <Button className="cursor-pointer font-semibold leading-[normal] min-w-[162px] mt-8 rounded-[5px] text-center text-xl">
                      Save
                    </Button>
                  </div>
                </div>
              </div>
              <Text
                className="ml-3 md:ml-[0] mt-[241px] text-black-900 text-sm"
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

export default SETTINGSPage;
