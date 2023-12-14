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

const selectStatusOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ACCOUNTEXPENSESPage = () => {
  const table3Data = React.useRef([
    {
      name: "Daniel Grant",
      expensetype: "Salary",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
      duedate: "02/02/2019",
    },
    {
      name: "Daniel Grant",
      expensetype: "Transport",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
      duedate: "02/02/2019",
    },
    {
      name: "Daniel Grant",
      expensetype: "Utilities",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
      duedate: "02/02/2019",
    },
    {
      name: "Daniel Grant",
      expensetype: "Transport",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
      duedate: "02/02/2019",
    },
    {
      name: "Daniel Grant",
      expensetype: "Transport",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
      duedate: "02/02/2019",
    },
    {
      name: "Daniel Grant",
      expensetype: "Utilities",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
      duedate: "02/02/2019",
    },
    {
      name: "Daniel Grant",
      expensetype: "Salary",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
      duedate: "02/02/2019",
    },
    {
      name: "Daniel Grant",
      expensetype: "Utilities",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
      duedate: "02/02/2019",
    },
    {
      name: "Daniel Grant",
      expensetype: "Salary",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
      duedate: "02/02/2019",
    },
    {
      name: "Daniel Grant",
      expensetype: "Utilities",
      rowamount: "arabagrant@gmail.com",
      parentphone: "+ 123 9988568",
      duedate: "02/02/2019",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("name", {
        cell: (info) => (
          <Text
            className="pb-[18px] pt-[35px] text-base text-black-900"
            size="txtPoppinsRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[102px] text-lg text-red-A700"
            size="txtPoppinsMedium18RedA700"
          >
            Name
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("expensetype", {
        cell: (info) => (
          <Text
            className="pb-[15px] sm:pl-5 pl-[29px] pt-[35px] text-base text-black-900"
            size="txtPoppinsRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[142px] pt-0.5 text-lg text-red-A700"
            size="txtPoppinsMedium18RedA700"
          >
            Expense Type
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("rowamount", {
        cell: (info) => (
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end p-2">
            <Text
              className="sm:mt-0 mt-9 text-base text-black-900"
              size="txtPoppinsRegular16"
            >
              $2,0000.00
            </Text>
            <Button
              className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[100px] sm:ml-[0] ml-[31px] sm:mt-0 mt-[26px] rounded-[18px] text-center text-lg"
              shape="round"
              size="xs"
            >
              unpaid
            </Button>
            <Text
              className="sm:ml-[0] ml-[23px] sm:mt-0 mt-8 text-black-900 text-lg"
              size="txtPoppinsRegular18Black900"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-start justify-end min-w-[476px] pb-0.5 px-0.5">
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
      table3ColumnHelper.accessor("parentphone", {
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
            className="min-w-[180px] text-lg text-red-A700"
            size="txtPoppinsMedium18RedA700"
          >
            Parent Phone
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("duedate", {
        cell: (info) => (
          <Text
            className="pb-[22px] pl-0.5 pt-[35px] text-base text-black-900"
            size="txtPoppinsRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[91px] pl-[7px] text-lg text-red-A700"
            size="txtPoppinsMedium18RedA700"
          >
            Due Date
          </Text>
        ),
      }),
    ];
  }, []);

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
                  padding: "24px 24px 24px 25px",
                  gap: "8px",
                  color: "#ffffffcc",
                  fontSize: "18px",
                  [`&:hover, &.ps-active`]: {
                    color: "#ffffff",
                    fontWeight: "600 !important",
                    backgroundColor: "#14238aff !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-start mb-[814px] pt-[25px] w-full"
            >
              <div className="sm:h-[539px] md:h-[626px] h-[667px] relative w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <MenuItem
                    active={window.location.pathname === "/dashboard"}
                    href="/dashboard"
                  >
                    <div className="bg-indigo-900 flex flex-col items-center justify-start">
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
                                alt="studentsSix"
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
                  <div className="flex flex-col items-center justify-start w-[286px] md:w-full">
                    <div className="bg-indigo-500_cc flex flex-col items-center justify-end py-[34px] w-full">
                      <MenuItem
                        icon={
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowright_white_a700_24x24.svg"
                            alt="arrowright_Two"
                          />
                        }
                        active={
                          window.location.pathname === "/accountstudentfees"
                        }
                        href="/accountstudentfees"
                      >
                        <Text>Student Fees</Text>
                      </MenuItem>
                      <MenuItem
                        icon={
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowright_white_a700_24x24.svg"
                            alt="arrowright_Three"
                          />
                        }
                        active={window.location.pathname === "/accountexpenses"}
                        href="/accountexpenses"
                      >
                        <Text className="font-semibold my-0.5 text-white-A700">
                          Expenses
                        </Text>
                      </MenuItem>
                    </div>
                    <MenuItem
                      active={window.location.pathname === "/subjects"}
                      href="/subjects"
                    >
                      <div className="bg-indigo-900 flex flex-col items-center justify-end">
                        <div className="flex flex-col gap-5 justify-start mt-[19px] w-full">
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
                  </div>
                </div>
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright_white_a700_24x24.svg"
                      alt="arrowright_Four"
                    />
                  }
                  active={window.location.pathname === "/accountaddexpenses"}
                  href="/accountaddexpenses"
                >
                  <Text className="my-0.5">Add Expenses</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright_white_a700_24x24.svg"
                      alt="arrowright_Five"
                    />
                  }
                  active={window.location.pathname === "/accountfeesgroup"}
                  href="/accountfeesgroup"
                >
                  <Text>Fees Group</Text>
                </MenuItem>
              </div>
              <div className="flex flex-col items-center justify-end mt-[27px] w-full">
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
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtPoppinsSemiBold22"
              >
                Account
              </Text>
              <Line className="bg-red-500 h-1 w-[5%]" />
              <div className="flex flex-row items-start justify-start mt-[11px] w-[17%] md:w-full">
                <Text
                  className="mb-0.5 text-gray-800 text-lg"
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
                  className="ml-2 mt-0.5 text-lg text-red-A700"
                  size="txtPoppinsMedium18RedA700"
                >
                  Expenses
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-[53px] p-[27px] sm:px-5 rounded-[10px] shadow-bs2 w-full">
                <div className="flex flex-col items-start justify-start mb-[3px] w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtPoppinsRegular28"
                  >
                    All Expenses
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-4 w-[99%] md:w-full">
                    <Input
                      name="group100"
                      placeholder="Search by name..."
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="w-[22%] md:w-full"
                      type="text"
                      size="xl"
                    ></Input>
                    <Input
                      name="groupNinetyEight"
                      placeholder="Search by expense type..."
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="ml-7 md:ml-[0] w-[24%] md:w-full"
                      size="2xl"
                    ></Input>
                    <SelectBox
                      className="leading-[normal] md:ml-[0] ml-[35px] text-base text-left w-[24%] md:w-full"
                      placeholderClassName="text-gray-600"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdropdown.svg"
                          alt="arrow_drop_down"
                        />
                      }
                      isMulti={false}
                      name="groupNinetyNine"
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
                    <div className="flex flex-col items-center justify-start mt-2.5 w-[98%] md:w-full">
                      <div className="overflow-auto w-full">
                        <ReactTable
                          columns={table3Columns}
                          data={table3Data.current}
                          rowClass={""}
                          headerClass=""
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                        <Text
                          className="sm:mt-0 mt-[11px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Daniel Grant
                        </Text>
                        <Text
                          className="sm:mt-0 mt-[9px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Transport
                        </Text>
                        <Text
                          className="sm:mt-0 mt-[15px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          $2,0000.00
                        </Text>
                        <Button
                          className="cursor-pointer font-semibold leading-[normal] mb-[5px] min-w-[100px] rounded-[18px] text-center text-lg"
                          shape="round"
                          color="indigo_900"
                          size="xs"
                        >
                          Paid
                        </Button>
                        <Text
                          className="sm:mt-0 mt-[5px] text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          arabagrant@gmail.com
                        </Text>
                        <Text
                          className="sm:mt-0 mt-3.5 text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          + 123 9988568
                        </Text>
                        <Text
                          className="sm:mt-0 mt-[15px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          02/02/2019
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[100px] w-full">
                        <Text
                          className="sm:mt-0 mt-[7px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Daniel Grant
                        </Text>
                        <Text
                          className="sm:mt-0 mt-5 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Transport
                        </Text>
                        <Text
                          className="sm:mt-0 mt-1 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          $2,0000.00
                        </Text>
                        <Button
                          className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[100px] rounded-[18px] text-center text-lg"
                          shape="round"
                          color="indigo_900"
                          size="xs"
                        >
                          Paid
                        </Button>
                        <Text
                          className="sm:mt-0 mt-[7px] text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          arabagrant@gmail.com
                        </Text>
                        <Text
                          className="sm:mt-0 mt-3 text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          + 123 9988568
                        </Text>
                        <Text
                          className="sm:mt-0 mt-[9px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          02/02/2019
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[92px] w-full">
                        <Text
                          className="sm:mt-0 mt-2 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Daniel Grant
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[31px] sm:mt-0 mt-[5px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Salary
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[63px] sm:mt-0 mt-[17px] text-base text-black-900"
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
                        <Text
                          className="sm:ml-[0] ml-[49px] sm:mt-0 mt-[11px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          02/02/2019
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

export default ACCOUNTEXPENSESPage;
