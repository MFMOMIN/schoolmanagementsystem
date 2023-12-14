import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const selectClassOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SUBJECTSPage = () => {
  const navigate = useNavigate();

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
              className="flex flex-col items-center justify-start mb-[1361px] mt-[9px] pt-[25px] w-full"
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
                      <div className="sm:px-5 pt-[3px] pl-1 pr-[3px] gap-[11px] flex justify-start items-center flex-row">
                        Submenu Item
                      </div>
                    </MenuItem>
                  </SubMenu>
                  <SubMenu
                    label={<Line className="bg-indigo-900_01 h-[3px] w-full" />}
                  >
                    <MenuItem>
                      <div className="sm:px-5 pt-[3px] pl-1 pr-[3px] gap-[11px] flex justify-start items-center flex-row">
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
                    <div className="sm:px-5 pt-[3px] pl-1 pr-[3px] gap-[11px] flex justify-start items-center flex-row">
                      Submenu Item
                    </div>
                  </MenuItem>
                </SubMenu>
                <SubMenu
                  label={<Line className="bg-indigo-900_01 h-[3px] w-full" />}
                >
                  <div className="flex flex-col items-center justify-end mt-[86px] w-full">
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
                    <div className="sm:px-5 pt-[3px] pl-1 pr-[3px] gap-[11px] flex justify-start items-center flex-row">
                      Submenu Item
                    </div>
                  </MenuItem>
                </SubMenu>
                <SubMenu
                  label={<Line className="bg-indigo-900_01 h-[3px] w-full" />}
                >
                  <MenuItem>
                    <div className="sm:px-5 pt-[3px] pl-1 pr-[3px] gap-[11px] flex justify-start items-center flex-row">
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
          <div className="flex flex-1 flex-col justify-start md:px-5 w-full">
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
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[29px] mt-[53px] w-[94%] md:w-full">
              <div className="flex flex-col relative w-[8%]">
                <Text
                  className="mx-auto text-[22px] text-black-900 sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Sujects
                </Text>
                <Line className="bg-red-500 h-1 mt-[-1.71px] w-[55%] z-[1]" />
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
                  Subject
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-[49px] p-[22px] sm:px-5 rounded-[10px] shadow-bs2 w-full">
                <div className="flex flex-col items-end justify-start mb-4 mt-[9px] w-full">
                  <div className="flex flex-col gap-[17px] items-start justify-start w-[99%] md:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtPoppinsRegular28"
                    >
                      <>All Subjects</>
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-[59px] items-center justify-between w-full">
                      <Input
                        name="group142"
                        placeholder="Search by subject name..."
                        className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                        wrapClassName="sm:flex-1 sm:w-full"
                        type="text"
                        size="xl"
                      ></Input>
                      <SelectBox
                        className="sm:flex-1 leading-[normal] text-base text-left w-[35%] sm:w-full"
                        placeholderClassName="text-gray-600"
                        indicator={
                          <Img
                            className="h-6 mr-[0] w-6"
                            src="images/img_arrowdropdown.svg"
                            alt="arrow_drop_down"
                          />
                        }
                        isMulti={false}
                        name="group141"
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
                  </div>
                  <div className="sm:h-[1523px] h-[708px] md:h-[973px] mt-[55px] relative w-full">
                    <div className="flex flex-col gap-[51px] h-full justify-start ml-[33px] my-auto w-[88%]">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-[94%] md:w-full">
                        <Text
                          className="mt-[3px] text-lg text-red-A700"
                          size="txtPoppinsMedium18RedA700"
                        >
                          Subject Name
                        </Text>
                        <Text
                          className="mb-1 text-lg text-red-A700"
                          size="txtPoppinsMedium18RedA700"
                        >
                          Teacher
                        </Text>
                        <Text
                          className="my-0.5 text-lg text-red-A700"
                          size="txtPoppinsMedium18RedA700"
                        >
                          Classes
                        </Text>
                        <Text
                          className="mt-1 text-lg text-red-A700"
                          size="txtPoppinsMedium18RedA700"
                        >
                          Days
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[35px] w-[97%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <Text
                            className="sm:mt-0 mt-[7px] text-base text-black-900"
                            size="txtPoppinsMedium16"
                          >
                            English
                          </Text>
                          <Text
                            className="mb-0.5 sm:ml-[0] ml-[211px] sm:mt-0 mt-[5px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Daniel Grant
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[166px] sm:mt-0 mt-1.5 text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            1,2&4
                          </Text>
                          <Text
                            className="mb-[7px] sm:ml-[0] ml-[166px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Mon, Tue and Fri
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[47px] w-full">
                          <Text
                            className="sm:mt-0 mt-0.5 text-base text-black-900"
                            size="txtPoppinsMedium16"
                          >
                            Maths
                          </Text>
                          <Text
                            className="mb-0.5 sm:ml-[0] ml-[218px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Daniel Grant
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[166px] sm:mt-0 mt-0.5 text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            6&JHS1
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[150px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Mon, Tue and Fri
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[53px] w-full">
                          <Text
                            className="sm:mt-0 mt-1.5 text-base text-black-900"
                            size="txtPoppinsMedium16"
                          >
                            French
                          </Text>
                          <Text
                            className="mb-1.5 sm:ml-[0] ml-[212px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Daniel Grant
                          </Text>
                          <Text
                            className="mb-1 sm:ml-[0] ml-[166px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            1,2&4
                          </Text>
                          <Text
                            className="mb-[5px] sm:ml-[0] ml-[166px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Mon, Tue and Fri
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[46px] w-full">
                          <Text
                            className="sm:mt-0 mt-[5px] text-base text-black-900"
                            size="txtPoppinsMedium16"
                          >
                            Science
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[204px] sm:mt-0 mt-[5px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Daniel Grant
                          </Text>
                          <Text
                            className="mb-[5px] sm:ml-[0] ml-[166px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            6&JHS1
                          </Text>
                          <Text
                            className="mb-[5px] sm:ml-[0] ml-[150px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Mon, Tue and Fri
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[50px] w-[99%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtPoppinsMedium16"
                          >
                            Arts
                          </Text>
                          <Text
                            className="ml-56 md:ml-[0] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Daniel Grant
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[166px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            1,2&4
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[165px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Mon, Tue and Fri
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-12 w-full">
                          <Text
                            className="mb-1.5 text-base text-black-900"
                            size="txtPoppinsMedium16"
                          >
                            French
                          </Text>
                          <Text
                            className="mb-1.5 sm:ml-[0] ml-[212px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Daniel Grant
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[166px] sm:mt-0 my-[3px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            6&JHS1
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[148px] sm:mt-0 mt-1.5 text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Mon, Tue and Fri
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-11 w-full">
                          <Text
                            className="mb-[7px] text-base text-black-900"
                            size="txtPoppinsMedium16"
                          >
                            Science
                          </Text>
                          <Text
                            className="mb-1.5 sm:ml-[0] ml-[201px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Daniel Grant
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[169px] sm:mt-0 mt-[5px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            1,2&4
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[165px] sm:mt-0 mt-[7px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Mon, Tue and Fri
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[43px] w-[98%] md:w-full">
                          <Text
                            className="mb-[5px] text-base text-black-900"
                            size="txtPoppinsMedium16"
                          >
                            Arts
                          </Text>
                          <Text
                            className="mb-1.5 md:ml-[0] ml-[221px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Daniel Grant
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[169px] md:mt-0 mt-1.5 text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            6&JHS1
                          </Text>
                          <Text
                            className="mb-[5px] md:ml-[0] ml-[143px] text-base text-black-900"
                            size="txtPoppinsRegular16"
                          >
                            Mon, Tue and Fri
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[708px] inset-[0] justify-center m-auto"
                      src="images/img_group40.svg"
                      alt="groupForty"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-end mt-[23px] w-2/5 md:w-full">
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
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-[42px] p-3.5 rounded-[10px] shadow-bs2 w-full">
                <div className="flex flex-col items-start justify-start mb-[83px] mt-[9px] w-[99%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtPoppinsRegular28"
                  >
                    <>Add New Subject</>
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-6 w-[84%] md:w-full">
                    <Text
                      className="md:mt-0 mt-1 text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Subject Name *
                    </Text>
                    <Text
                      className="mb-1 md:ml-[0] ml-[131px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Teacher
                    </Text>
                    <Text
                      className="mb-1 md:ml-[0] ml-[199px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Classes
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[199px] text-black-900 text-lg"
                      size="txtPoppinsRegular18Black900"
                    >
                      Days
                    </Text>
                  </div>
                  <div className="gap-[55px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between mt-1.5 w-full">
                    <Input
                      name="rectangleThirtyFive"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex flex-1 h-[49px] w-full"
                    ></Input>
                    <Input
                      name="rectangleFiftyEight"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex flex-1 h-[49px] w-full"
                    ></Input>
                    <Input
                      name="rectangleFiftyThree"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex flex-1 h-[49px] w-full"
                    ></Input>
                    <Input
                      name="rectangleFiftyNine"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex flex-1 h-[49px] w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-row gap-3.5 items-center justify-start mt-[52px] w-[33%] md:w-full">
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
            </div>
            <Text
              className="ml-3 md:ml-[0] mt-[207px] text-black-900 text-sm"
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
    </>
  );
};

export default SUBJECTSPage;
