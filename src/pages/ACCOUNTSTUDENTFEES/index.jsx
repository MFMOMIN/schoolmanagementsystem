import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  ReactTable,
  SelectBox,
  Text,
} from "components";

const selectClassOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectStatusOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ACCOUNTSTUDENTFEESPage = () => {
  const table2Data = React.useRef([
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "2",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "3",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "5",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "4",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "2",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "1",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "3",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "4",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "4",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "1",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "3",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "4",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
    },
  ]);
  const navigate = useNavigate();
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("rowid", {
        cell: (info) => (
          <div className="flex flex-row gap-7 items-start justify-start pr-[17px] py-[17px]">
            <Text
              className="mt-[29px] text-base text-black-900"
              size="txtPoppinsRegular16"
            >
              22
            </Text>
            <Text
              className="mt-7 text-base text-black-900"
              size="txtPoppinsRegular16"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[49px] items-center justify-start min-w-[174px] px-[3px]">
            <Text
              className="text-lg text-red-A700"
              size="txtPoppinsMedium18RedA700"
            >
              ID
            </Text>
            <Text
              className="text-lg text-red-A700"
              size="txtPoppinsMedium18RedA700"
            >
              Name
            </Text>
          </div>
        ),
      }),
      table2ColumnHelper.accessor("gender", {
        cell: (info) => (
          <Text
            className="pb-[17px] pl-[15px] pt-[35px] text-base text-black-900"
            size="txtPoppinsRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[117px] text-lg text-red-A700"
            size="txtPoppinsMedium18RedA700"
          >
            Gender
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("class", {
        cell: (info) => (
          <Text
            className="pb-[17px] pl-[19px] pt-[35px] text-base text-black-900"
            size="txtPoppinsRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[79px] text-lg text-red-A700"
            size="txtPoppinsMedium18RedA700"
          >
            Class
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("rowamount", {
        cell: (info) => (
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end p-2">
            <Text
              className="sm:mt-0 mt-[38px] text-base text-black-900"
              size="txtPoppinsRegular16"
            >
              $2,0000.00
            </Text>
            <Button
              className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[100px] sm:ml-[0] ml-[31px] sm:mt-0 mt-7 rounded-[18px] text-center text-lg"
              shape="round"
              size="xs"
            >
              unpaid
            </Button>
            <Text
              className="sm:ml-[0] ml-[23px] sm:mt-0 mt-[34px] text-black-900 text-lg"
              size="txtPoppinsRegular18Black900"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-end min-w-[476px] px-[9px]">
            <Text
              className="text-lg text-red-A700"
              size="txtPoppinsMedium18RedA700"
            >
              Amount
            </Text>
            <Text
              className="text-lg text-red-A700"
              size="txtPoppinsMedium18RedA700"
            >
              Status
            </Text>
            <Text
              className="text-lg text-red-A700"
              size="txtPoppinsMedium18RedA700"
            >
              Parent Email
            </Text>
          </div>
        ),
      }),
      table2ColumnHelper.accessor("parentphone", {
        cell: (info) => (
          <Text
            className="pb-5 pl-[7px] pt-[35px] text-black-900 text-lg"
            size="txtPoppinsRegular18Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[131px] text-lg text-red-A700"
            size="txtPoppinsMedium18RedA700"
          >
            Parent Phone
          </Text>
        ),
      }),
    ];
  }, []);

  const sideBarMenu = [
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
                            alt="studentsFive"
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
              <div className="flex flex-col items-center justify-start mt-[3px] pb-[34px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright_white_a700_24x24.svg"
                      alt="arrowright_Two"
                    />
                  }
                  active={window.location.pathname === "/accountfeesgroup"}
                  href="/accountfeesgroup"
                >
                  <Text>Fees Group</Text>
                </MenuItem>
                <SubMenu
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright_white_a700_24x24.svg"
                      alt="arrowright_Three"
                    />
                  }
                  label={
                    <Text className="font-semibold text-white-A700">
                      Student Fees
                    </Text>
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <MenuItem
                  active={window.location.pathname === "/accountexpenses"}
                  href="/accountexpenses"
                >
                  <div className="flex flex-col relative w-full">
                    <MenuItem
                      icon={
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowright_white_a700_24x24.svg"
                          alt="arrowright_Four"
                        />
                      }
                      active={window.location.pathname === "/accountexpenses"}
                      href="/accountexpenses"
                    >
                      <Text className="my-[3px]">Expenses</Text>
                    </MenuItem>
                    <MenuItem
                      icon={
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowright_white_a700_24x24.svg"
                          alt="arrowright_Five"
                        />
                      }
                      active={
                        window.location.pathname === "/accountaddexpenses"
                      }
                      href="/accountaddexpenses"
                    >
                      <Text className="mb-2.5 mt-0.5">Add Expenses</Text>
                    </MenuItem>
                  </div>
                </MenuItem>
              </div>
              <div className="flex flex-col gap-[-10.03px] items-center justify-end mt-[22px] w-full">
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
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtPoppinsSemiBold22"
              >
                Account
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
                  alt="arrowright_Six"
                />
                <Text
                  className="ml-2 text-lg text-red-A700"
                  size="txtPoppinsMedium18RedA700"
                >
                  Student Fees
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-[55px] p-[23px] sm:px-5 rounded-[10px] shadow-bs2 w-full">
                <div className="flex flex-col items-start justify-start mb-[7px] w-[99%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtPoppinsRegular28"
                  >
                    All Student Fees Data
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-5 w-[99%] md:w-full">
                    <Input
                      name="groupEightyEight"
                      placeholder="Search by name..."
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="w-[21%] md:w-full"
                      type="text"
                      size="xl"
                    ></Input>
                    <SelectBox
                      className="leading-[normal] md:ml-[0] ml-[77px] text-base text-left w-[21%] md:w-full"
                      placeholderClassName="text-gray-600"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdropdown.svg"
                          alt="arrow_drop_down"
                        />
                      }
                      isMulti={false}
                      name="groupEightySix"
                      options={selectClassOptionsList}
                      isSearchable={false}
                      placeholder="Select Class"
                      shape="round"
                      color="gray_300_7f"
                    />
                    <SelectBox
                      className="leading-[normal] md:ml-[0] ml-[54px] text-base text-left w-[21%] md:w-full"
                      placeholderClassName="text-gray-600"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdropdown.svg"
                          alt="arrow_drop_down"
                        />
                      }
                      isMulti={false}
                      name="groupEightySeven"
                      options={selectStatusOptionsList}
                      isSearchable={false}
                      placeholder="Select Status.."
                      shape="round"
                      color="gray_300_7f"
                    />
                    <Button className="cursor-pointer font-semibold leading-[normal] min-w-[202px] md:ml-[0] ml-[53px] rounded-[5px] text-center text-xl">
                      SEARCH
                    </Button>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[968px] items-center justify-end mt-[43px] p-2.5 w-full"
                    style={{
                      backgroundImage: "url('images/img_group140.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-7 items-center justify-start mt-2.5 w-[97%] md:w-full">
                      <div className="overflow-auto w-full">
                        <ReactTable
                          columns={table2Columns}
                          data={table2Data.current}
                          rowClass={""}
                          headerClass=""
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:mt-0 mt-[9px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          34
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
                          className="sm:ml-[0] ml-[87px] sm:mt-0 mt-[13px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          4
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[45px] sm:mt-0 mt-[17px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          $2,0000.00
                        </Text>
                        <Button
                          className="cursor-pointer font-semibold leading-[normal] mb-1.5 min-w-[100px] sm:ml-[0] ml-[42px] rounded-[18px] text-center text-lg"
                          shape="round"
                          color="indigo_900"
                          size="xs"
                        >
                          Paid
                        </Button>
                        <Text
                          className="sm:ml-[0] ml-[17px] sm:mt-0 mt-3.5 text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          arabagrant@gmail.com
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[19px] sm:mt-0 mt-[15px] text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          + 123 9988568
                        </Text>
                      </div>
                    </div>
                  </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ACCOUNTSTUDENTFEESPage;
