import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import {
  Button,
  Img,
  Line,
  List,
  Radio,
  RadioGroup,
  SelectBox,
  Slider,
  Text,
} from "components";

const june102021OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DASHBOARDPage = () => {
  const sideBarMenu = [
    { label: <Line className="bg-indigo-900_01 h-[3px] w-full" /> },
    {
      icon: (
        <Img
          className="h-[26px] w-[26px]"
          src="images/img_settings_white_a700.svg"
          alt="settings_One"
        />
      ),
      label: "Settings",
      href: "/settings",
      active: window.location.pathname === "/settings",
    },
    { label: <Line className="bg-indigo-900_01 h-[3px] w-full" /> },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar
            className="!sticky !w-[286px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start md:mt-0 mt-0.5 overflow-auto md:px-5 top-[0]"
            style={{ backgroundImage: "url('images/img_frame11.svg')" }}
          >
            <div className="flex flex-row items-center justify-between ml-6 md:ml-[0] mr-[15px] mt-7 w-[87%]">
              <Img
                className="h-[58px] md:h-auto object-cover"
                src="images/img_whatsappimage20210604.png"
                alt="whatsappimageTwenty"
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
                  width: "100%",
                  gap: "11px",
                  paddingBottom: "75px",
                  color: "#ffffffcc",
                  fontSize: "18px",
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
              className="flex flex-col items-center justify-start mb-[1019px] mt-[9px] w-full"
            >
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
              <SubMenu
                label={<Line className="bg-indigo-900_01 h-[3px] w-full" />}
              >
                <div className="flex flex-col items-center justify-end w-full">
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
              </SubMenu>
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
                  <div className="sm:px-5 gap-2 flex justify-start items-center flex-row">
                    Submenu Item
                  </div>
                </MenuItem>
              </SubMenu>
              <MenuItem>
                <div className="flex flex-row items-center justify-evenly">
                  <Line className="bg-indigo-900_01 h-[3px] w-full" />
                </div>
              </MenuItem>
              <SubMenu
                label={<Line className="bg-indigo-900_01 h-[3px] w-full" />}
              >
                <MenuItem>
                  <div className="sm:px-5 gap-2 flex justify-start items-center flex-row">
                    Submenu Item
                  </div>
                </MenuItem>
              </SubMenu>
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
                  <div className="sm:px-5 gap-2 flex justify-start items-center flex-row">
                    Submenu Item
                  </div>
                </MenuItem>
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
                  <div className="sm:px-5 gap-2 flex justify-start items-center flex-row">
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
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-11 items-center justify-start md:px-5 w-full">
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
                Admin Dashboad
              </Text>
              <Line className="bg-red-500 h-1 md:ml-[0] ml-[3px] mt-[3px] w-[5%]" />
              <Text
                className="mt-[15px] text-gray-800 text-lg"
                size="txtPoppinsRegular18Gray800"
              >
                Home
              </Text>
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between mt-[27px] w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col items-start justify-start sm:ml-[0] p-[17px] rounded-[5px] shadow-bs2 w-full">
                    <div className="flex flex-row items-center justify-start w-[78%] md:w-full">
                      <div className="bg-teal-50 flex flex-col h-[74px] items-center justify-end p-[17px] rounded-[50%] w-[74px]">
                        <Img
                          className="h-[39px] w-[39px]"
                          src="images/img_students1_green_500.svg"
                          alt="studentsOne"
                        />
                      </div>
                      <Line className="bg-red-A700 h-10 ml-[19px] my-[17px] w-px" />
                      <div className="flex flex-col items-start justify-start ml-3.5">
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtPoppinsMedium14"
                        >
                          Students
                        </Text>
                        <Text
                          className="text-black-900 text-xl tracking-[0.80px]"
                          size="txtPoppinsSemiBold20"
                        >
                          50000
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-start sm:ml-[0] p-[17px] rounded-[5px] shadow-bs2 w-full">
                    <div className="flex flex-row items-center justify-start ml-1.5 md:ml-[0] w-[79%] md:w-full">
                      <div className="bg-blue-50 flex flex-col h-[74px] items-center justify-start p-[13px] rounded-[50%] w-[74px]">
                        <Img
                          className="h-[47px]"
                          src="images/img_menu.svg"
                          alt="menu"
                        />
                      </div>
                      <Line className="bg-red-A700 h-10 ml-[22px] my-[17px] w-px" />
                      <div className="flex flex-col items-start justify-start ml-3.5">
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtPoppinsMedium14"
                        >
                          Teachers
                        </Text>
                        <Text
                          className="text-black-900 text-xl tracking-[0.80px]"
                          size="txtPoppinsSemiBold20"
                        >
                          1500
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-white-A700 flex md:flex-1 flex-row items-center justify-center p-[17px] rounded-[5px] shadow-bs2 w-[24%] md:w-full">
                  <div className="bg-orange-50 flex flex-col h-[74px] items-center justify-end ml-1.5 p-[13px] rounded-[50%] w-[74px]">
                    <Img
                      className="h-[47px] w-[47px]"
                      src="images/img_people_amber_700.svg"
                      alt="people_One"
                    />
                  </div>
                  <Line className="bg-red-A700 h-10 ml-[22px] my-[17px] w-px" />
                  <div className="md:h-[29px] h-[50px] ml-[15px] mr-[41px] relative w-[30%]">
                    <Text
                      className="absolute left-[0] text-gray-500 text-sm top-[0]"
                      size="txtPoppinsMedium14"
                    >
                      Parents
                    </Text>
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto text-black-900 text-xl tracking-[0.80px] w-max"
                      size="txtPoppinsSemiBold20"
                    >
                      60000
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[17px] rounded-[5px] shadow-bs2 w-[24%] md:w-full">
                  <div className="flex flex-row items-center justify-start w-[91%] md:w-full">
                    <div className="bg-red-50 flex flex-col h-[74px] items-center justify-start p-[17px] rounded-[50%] w-[74px]">
                      <Img
                        className="h-10 w-10"
                        src="images/img_attachmoney.svg"
                        alt="attachmoney"
                      />
                    </div>
                    <Line className="bg-red-A700 h-10 ml-[22px] my-[17px] w-px" />
                    <div className="flex flex-col items-start justify-start ml-[15px]">
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtPoppinsMedium14"
                      >
                        Earnings
                      </Text>
                      <Text
                        className="text-black-900 text-xl tracking-[0.80px]"
                        size="txtPoppinsSemiBold20"
                      >
                        $200000
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between mt-6 w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[17px] rounded-[5px] shadow-bs2 w-1/2 md:w-full">
                  <div className="flex flex-col items-start justify-start mb-4 mt-1 w-[99%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtPoppinsMedium20"
                      >
                        Earnings
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_morehoriz.svg"
                        alt="morehoriz"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-11 items-start justify-between ml-5 md:ml-[0] mt-[17px] w-[94%] md:w-full">
                      <div className="flex flex-col items-center justify-start">
                        <RadioGroup
                          className="flex w-full"
                          name="radiogrouptotalcollectionOne"
                        >
                          <Radio
                            value="TotalCollections"
                            className="font-medium leading-[normal] text-gray-500 text-left text-sm"
                            inputClassName="bg-indigo-900 h-2.5 mr-[5px] outline outline-[2px] outline-white-A700 shadow-bs w-2.5"
                            checked={false}
                            name="radiogrouptotalcollectionOne"
                            label="Total Collections"
                            id="TotalCollections"
                          ></Radio>
                          <Radio
                            value="FeesCollections"
                            className="font-medium leading-[normal] ml-[42px] text-gray-500 text-left text-sm"
                            inputClassName="bg-red-A700 h-2.5 mr-[5px] outline outline-[2px] outline-white-A700 shadow-bs w-2.5"
                            checked={false}
                            name="radiogrouptotalcollectionOne"
                            label="Fees Collections"
                            id="FeesCollections"
                          ></Radio>
                        </RadioGroup>
                        <div className="flex flex-row items-center justify-between w-[86%] md:w-full">
                          <Text
                            className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                            size="txtPoppinsRegular22"
                          >
                            $ 90,000
                          </Text>
                          <Text
                            className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                            size="txtPoppinsRegular22"
                          >
                            $ 75,000
                          </Text>
                        </div>
                      </div>
                      <SelectBox
                        className="font-medium leading-[normal] text-gray-500 text-left text-sm w-1/4 sm:w-full"
                        placeholderClassName="text-gray-500"
                        indicator={
                          <Img
                            className="h-6 mr-[0] w-6"
                            src="images/img_arrowdown_gray_400_01.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="group229"
                        options={june102021OptionsList}
                        isSearchable={false}
                        placeholder="June 10, 2021"
                      />
                    </div>
                    <div className="h-[274px] md:h-[290px] ml-0.5 md:ml-[0] mt-[30px] relative w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[260px] items-start justify-start p-2.5 right-[0] w-[95%]"
                        style={{
                          backgroundImage: "url('images/img_group67.svg')",
                        }}
                      >
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[232px] items-center justify-end mb-2 md:ml-[0] ml-[17px] py-0.5 w-[87%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_group68.svg')",
                          }}
                        >
                          <Img
                            className="h-[180px] mt-12"
                            src="images/img_group12.svg"
                            alt="groupTwelve"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[0]">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          75k
                        </Text>
                        <Text
                          className="mt-[41px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          50k
                        </Text>
                        <Text
                          className="mt-10 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          25k
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[13px] mt-[35px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          0
                        </Text>
                      </div>
                      <Text
                        className="absolute left-[0] text-base text-black-900 top-[0]"
                        size="txtPoppinsRegular16"
                      >
                        100k
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-end md:ml-[0] ml-[86px] mt-[5px] w-[74%] md:w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPoppinsRegular14Black900"
                      >
                        Mon
                      </Text>
                      <Text
                        className="ml-[27px] text-black-900 text-sm"
                        size="txtPoppinsRegular14Black900"
                      >
                        Tue
                      </Text>
                      <Text
                        className="ml-[26px] text-black-900 text-sm"
                        size="txtPoppinsRegular14Black900"
                      >
                        Wed
                      </Text>
                      <Text
                        className="ml-[26px] text-black-900 text-sm"
                        size="txtPoppinsRegular14Black900"
                      >
                        Thu
                      </Text>
                      <Text
                        className="ml-[37px] text-black-900 text-sm"
                        size="txtPoppinsRegular14Black900"
                      >
                        Fri
                      </Text>
                      <Text
                        className="ml-[39px] text-black-900 text-sm"
                        size="txtPoppinsRegular14Black900"
                      >
                        Sat
                      </Text>
                      <Text
                        className="ml-[35px] text-black-900 text-sm"
                        size="txtPoppinsRegular14Black900"
                      >
                        Sun
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start p-2.5 rounded-[5px] shadow-bs2 w-[24%] md:w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start mb-[31px] mt-3 w-[93%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtPoppinsMedium20"
                        >
                          Expenses
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_morehoriz.svg"
                          alt="morehoriz_One"
                        />
                      </div>
                      <div className="flex flex-row gap-[11px] items-start justify-between mt-3.5 w-full">
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtPoppinsMedium14"
                        >
                          April 2021
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtPoppinsMedium14"
                        >
                          May 2021
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtPoppinsMedium14"
                        >
                          June 2021
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                        <div className="flex flex-col gap-[5px] items-center justify-start w-[31%]">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtPoppinsRegular14Black900"
                          >
                            $ 125,000
                          </Text>
                          <Line className="bg-green-500 h-1 rotate-[90deg] w-full" />
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[31%]">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtPoppinsRegular14Black900"
                          >
                            $ 100,000
                          </Text>
                          <Line className="bg-indigo-900 h-1 md:ml-[0] ml-[5px] rotate-[90deg] w-[91%]" />
                        </div>
                        <div className="flex flex-col gap-[5px] items-center justify-start w-[28%]">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtPoppinsRegular14Black900"
                          >
                            $ 75,000
                          </Text>
                          <Line className="bg-red-A700 h-1 rotate-[90deg] w-full" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          150k
                        </Text>
                        <Text
                          className="ml-0.5 md:ml-[0] mt-[23px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          125k
                        </Text>
                        <Text
                          className="ml-0.5 md:ml-[0] mt-[19px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          100k
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[7px] mt-[22px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          75k
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[5px] mt-[21px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          50k
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[7px] mt-5 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          25k
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[19px] mt-[25px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          0
                        </Text>
                      </div>
                      <div className="md:h-[275px] h-[276px] relative w-[85%]">
                        <Img
                          className="absolute h-[275px] inset-[0] justify-center m-auto"
                          src="images/img_group8.svg"
                          alt="groupEight"
                        />
                        <div className="absolute bg-green-A200 bottom-[0] h-[226px] left-[16%] w-[23%]"></div>
                        <div className="absolute bg-indigo-A700 bottom-[0] h-[183px] right-[35%] w-[23%]"></div>
                        <div className="absolute bg-red-600 bottom-[0] h-[137px] right-[8%] w-[23%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[19px] rounded-[5px] shadow-bs2 w-[24%] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-[15px] w-[96%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtPoppinsMedium20"
                      >
                        Students
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_morehoriz.svg"
                        alt="morehoriz_Two"
                      />
                    </div>
                    <div className="h-[211px] md:h-[293px] mt-[83px] relative w-[212px]">
                      <div className="absolute bg-indigo-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[23px] sm:px-5 rounded-[50%] w-[210px]">
                        <div className="bg-white-A700 h-[161px] mt-[3px] rounded-[80px] w-[161px]"></div>
                      </div>
                      <Img
                        className="absolute h-[150px] left-[0] top-[0] w-[151px]"
                        src="images/img_vector3.svg"
                        alt="vectorThree"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-between mt-[59px] w-[97%] md:w-full">
                      <div className="flex flex-col h-[53px] items-start justify-start w-[53px]">
                        <div className="bg-indigo-A700 h-1 rotate-[90deg] rounded-sm w-[85%]"></div>
                        <Text
                          className="mt-[5px] text-gray-500 text-sm"
                          size="txtPoppinsMedium14"
                        >
                          Female{" "}
                        </Text>
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsMedium16"
                        >
                          30,000
                        </Text>
                      </div>
                      <Line className="bg-gray-500_cc h-[51px] mb-0.5 w-px" />
                      <div className="flex flex-col h-[53px] items-start justify-start w-[53px]">
                        <div className="bg-red-600_01 h-1 rotate-[90deg] rounded-sm w-[85%]"></div>
                        <Text
                          className="mt-[5px] text-gray-500 text-sm"
                          size="txtPoppinsMedium14"
                        >
                          Female{" "}
                        </Text>
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsMedium16"
                        >
                          20,000
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 2 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="mt-6 w-full"
                items={[...Array(6)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="bg-white-A700 flex flex-col items-center justify-start mx-2.5 p-6 sm:px-5 rounded-[5px] shadow-bs2">
                      <div className="flex flex-col items-center justify-start mb-[25px] w-[99%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="text-black-900 text-xl"
                              size="txtPoppinsMedium20"
                            >
                              Reminders
                            </Text>
                            <Img
                              className="h-6 mt-[3px] w-6"
                              src="images/img_morehoriz.svg"
                              alt="morehoriz"
                            />
                          </div>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[120px] mt-[22px] text-center text-sm"
                            shape="round"
                            color="cyan_300"
                            size="xs"
                          >
                            16 June, 2021
                          </Button>
                          <Text
                            className="mt-[7px] text-black-900 text-sm w-[90%] sm:w-full"
                            size="txtPoppinsMedium14Black900"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod
                          </Text>
                          <Line className="bg-gray-400_01 h-px mt-[41px] w-[93%]" />
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[120px] mt-3.5 text-center text-sm"
                            shape="round"
                            color="amber_A200"
                            size="xs"
                          >
                            16 June, 2021
                          </Button>
                          <Text
                            className="mt-[7px] text-black-900 text-sm w-[90%] sm:w-full"
                            size="txtPoppinsMedium14Black900"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod
                          </Text>
                          <Line className="bg-gray-400_01 h-px mt-[45px] w-[93%]" />
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[120px] mt-3.5 text-center text-sm"
                            shape="round"
                            color="pink_A200"
                            size="xs"
                          >
                            16 June, 2021
                          </Button>
                          <Text
                            className="mt-[7px] text-black-900 text-sm w-[90%] sm:w-full"
                            size="txtPoppinsMedium14Black900"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod
                          </Text>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
              <Text
                className="mt-[193px] text-black-900 text-sm"
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

export default DASHBOARDPage;
