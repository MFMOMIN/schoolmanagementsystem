import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

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
import Sidebar1 from "components/Sidebar1";

const selectClassOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TEACHERSALLTEACHERPage = () => {
  const tableData = React.useRef([
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "2",
      subjectOne: "English",
      address: "59 Australia, Sydney",
      dateofbirth: "02/05/2001",
      phone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "3",
      subjectOne: "English",
      address: "59 Australia, Sydney",
      dateofbirth: "02/05/2001",
      phone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "5",
      subjectOne: "English",
      address: "59 Australia, Sydney",
      dateofbirth: "02/05/2001",
      phone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "4",
      subjectOne: "English",
      address: "59 Australia, Sydney",
      dateofbirth: "02/05/2001",
      phone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "2",
      subjectOne: "English",
      address: "59 Australia, Sydney",
      dateofbirth: "02/05/2001",
      phone: "+ 123 9988568",
    },
    {
      rowid: "Daniel Grant",
      gender: "Male",
      class: "1",
      subjectOne: "English",
      address: "59 Australia, Sydney",
      dateofbirth: "02/05/2001",
      phone: "+ 123 9988568",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowid", {
        cell: (info) => (
          <div className="flex flex-row gap-7 items-start justify-start pr-[18px] py-[18px]">
            <Text
              className="mt-[26px] text-base text-black-900"
              size="txtPoppinsRegular16"
            >
              22
            </Text>
            <Text
              className="mt-[26px] text-base text-black-900"
              size="txtPoppinsRegular16"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[49px] items-center justify-start min-w-[174px]">
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
      tableColumnHelper.accessor("gender", {
        cell: (info) => (
          <Text
            className="pb-[19px] pl-[15px] pt-[35px] text-base text-black-900"
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
      tableColumnHelper.accessor("class", {
        cell: (info) => (
          <Text
            className="h-[88px] pb-[18px] pl-[19px] pt-[35px] text-base text-black-900"
            size="txtPoppinsRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[88px] text-lg text-red-A700"
            size="txtPoppinsMedium18RedA700"
          >
            Class
          </Text>
        ),
      }),
      tableColumnHelper.accessor("subjectOne", {
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
            className="min-w-[128px] pt-0.5 text-lg text-red-A700"
            size="txtPoppinsMedium18RedA700"
          >
            Subject
          </Text>
        ),
      }),
      tableColumnHelper.accessor("address", {
        cell: (info) => (
          <Text
            className="pb-5 pt-[35px] text-base text-black-900"
            size="txtPoppinsRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[197px] text-lg text-red-A700"
            size="txtPoppinsMedium18RedA700"
          >
            Address
          </Text>
        ),
      }),
      tableColumnHelper.accessor("dateofbirth", {
        cell: (info) => (
          <Text
            className="pb-[22px] pl-[11px] pt-[35px] text-black-900 text-lg"
            size="txtPoppinsRegular18Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[149px] pb-0.5 text-lg text-red-A700"
            size="txtPoppinsMedium18RedA700"
          >
            Date of Birth
          </Text>
        ),
      }),
      tableColumnHelper.accessor("phone", {
        cell: (info) => (
          <Text
            className="pb-[22px] pt-[35px] text-black-900 text-lg"
            size="txtPoppinsRegular18Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[124px] sm:pl-5 pl-[25px] text-lg text-red-A700"
            size="txtPoppinsMedium18RedA700"
          >
            Phone
          </Text>
        ),
      }),
    ];
  }, []);

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
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtPoppinsSemiBold22"
              >
                Teachers
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
                  alt="arrowright_Four"
                />
                <Text
                  className="ml-2 text-lg text-red-A700"
                  size="txtPoppinsMedium18RedA700"
                >
                  All Teachers
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-[55px] p-[23px] sm:px-5 rounded-[10px] shadow-bs2 w-full">
                <div className="flex flex-col items-start justify-start mb-[7px] w-[99%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtPoppinsRegular28"
                  >
                    All Teachers Data
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-[59px] items-center justify-between mt-5 w-[99%] md:w-full">
                    <Input
                      name="group133"
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
                      name="group194"
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
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[968px] items-center justify-end mt-11 p-1.5 w-full"
                    style={{
                      backgroundImage: "url('images/img_group140.svg')",
                    }}
                  >
                    <div className="flex flex-col items-center justify-start mt-3.5 w-[96%] md:w-full">
                      <div className="overflow-auto w-full">
                        <ReactTable
                          columns={tableColumns}
                          data={tableData.current}
                          rowClass={""}
                          headerClass=""
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[33px] w-full">
                        <Text
                          className="sm:mt-0 mt-1.5 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          28
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[27px] sm:mt-0 mt-[5px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Daniel Grant
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[42px] sm:mt-0 mt-[5px] text-base text-black-900"
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
                          className="sm:ml-[0] ml-[59px] sm:mt-0 mt-3 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          English
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[72px] sm:mt-0 mt-1 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          59 Australia, Sydney
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[49px] sm:mt-0 my-1 text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          02/05/2001
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[43px] sm:mt-0 my-1 text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          + 123 9988568
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[34px] w-full">
                        <Text
                          className="sm:mt-0 mt-[3px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          29
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[26px] sm:mt-0 mt-[3px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Daniel Grant
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[43px] sm:mt-0 mt-[3px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Male
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[81px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          4
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[59px] sm:mt-0 mt-[11px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          English
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[72px] sm:mt-0 mt-0.5 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          59 Australia, Sydney
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[49px] sm:mt-0 my-1 text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          02/05/2001
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[43px] sm:mt-0 my-[3px] text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          + 123 9988568
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[35px] w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          30
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[25px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Daniel Grant
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[42px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Male
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[82px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          4
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[59px] sm:mt-0 mt-2.5 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          English
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[72px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          59 Australia, Sydney
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[49px] sm:mt-0 my-[3px] text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          02/05/2001
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[43px] sm:mt-0 my-[3px] text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          + 123 9988568
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[34px] w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          31
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[29px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Daniel Grant
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[42px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Male
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[87px] sm:mt-0 mt-1 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          1
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[59px] sm:mt-0 mt-[11px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          English
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[72px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          59 Australia, Sydney
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[49px] sm:mt-0 my-[3px] text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          02/05/2001
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[43px] sm:mt-0 my-[3px] text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          + 123 9988568
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[33px] w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          32
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[26px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Daniel Grant
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[42px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Male
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[87px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          3
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[54px] sm:mt-0 mt-3 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          English
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[72px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          59 Australia, Sydney
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[49px] sm:mt-0 my-1 text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          02/05/2001
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[43px] sm:mt-0 my-1 text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          + 123 9988568
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[29px] w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          33
                        </Text>
                        <Text
                          className="ml-7 sm:ml-[0] sm:mt-0 mt-1 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Daniel Grant
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[42px] sm:mt-0 mt-1 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Male
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[87px] sm:mt-0 mt-[7px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          4
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[54px] sm:mt-0 mt-4 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          English
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[72px] sm:mt-0 mt-[3px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          59 Australia, Sydney
                        </Text>
                        <Text
                          className="mb-1 sm:ml-[0] ml-[49px] sm:mt-0 mt-[9px] text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          02/05/2001
                        </Text>
                        <Text
                          className="mb-[3px] sm:ml-[0] ml-[43px] sm:mt-0 mt-[9px] text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          + 123 9988568
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[31px] w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          34
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[27px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Daniel Grant
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[42px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Male
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[87px] sm:mt-0 mt-[5px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          4
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[54px] sm:mt-0 mt-3.5 text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          English
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[72px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          59 Australia, Sydney
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[49px] sm:mt-0 my-[5px] text-black-900 text-lg"
                          size="txtPoppinsRegular18Black900"
                        >
                          02/05/2001
                        </Text>
                        <Text
                          className="mb-[3px] sm:ml-[0] ml-[43px] sm:mt-0 mt-[7px] text-black-900 text-lg"
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

export default TEACHERSALLTEACHERPage;
