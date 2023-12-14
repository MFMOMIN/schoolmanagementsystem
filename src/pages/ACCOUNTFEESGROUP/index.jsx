
    import React from 'react';

    

    import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion"
  import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar"
  import { useNavigate } from "react-router-dom"
  
  import { createColumnHelper } from "@tanstack/react-table"
  
  import { Button, Img, Input, Line, ReactTable, Text } from "components"
  
  

    

    

    

    const ACCOUNTFEESGROUPPage = () => {
      const table1Data = React.useRef([{no:  "2"   ,name:  "Nurse Fee Group"   ,feestype:  "Feeding Fee - GHS15.00
Maintenance - GHS100.00
Tuition - GHS450.00"   ,description:  "To be paid every
semester"   ,},]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();
  const table1Columns = React.useMemo(() => {
          const table1ColumnHelper = createColumnHelper();
          return [
    table1ColumnHelper.accessor("no", {
      cell: (info) => <Text
  className="pb-[34px] pl-2 pt-[13px] text-[22px] text-black-900 sm:text-lg md:text-xl"
  size="txtPoppinsRegular22"
  
  
>{info?.getValue()}</Text>,
      header: (info) => <Text
  className="min-w-[102px] pb-1 text-2xl md:text-[22px] text-black-900 sm:text-xl"
  size="txtPoppinsMedium24"
  
  
>No.</Text>
    })
  ,
    table1ColumnHelper.accessor("name", {
      cell: (info) => <Text
  className="pb-[35px] text-black-900 text-lg"
  size="txtPoppinsRegular18Black900"
  
  
>{info?.getValue()}</Text>,
      header: (info) => <Text
  className="min-w-[376px] py-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
  size="txtPoppinsMedium24"
  
  
>Name</Text>
    })
  ,
    table1ColumnHelper.accessor("feestype", {
      cell: (info) => <Text
  className="text-black-900 text-lg"
  size="txtPoppinsRegular18Black900"
  
  
>{info?.getValue()}</Text>,
      header: (info) => <Text
  className="min-w-[279px] pl-[9px] pt-1 text-2xl md:text-[22px] text-black-900 sm:text-xl"
  size="txtPoppinsMedium24"
  
  
>Fees Type</Text>
    })
  ,
    table1ColumnHelper.accessor("description", {
      cell: (info) => <Text
  className="pb-[27px] text-black-900 text-lg"
  size="txtPoppinsRegular18Black900"
  
  
>{info?.getValue()}</Text>,
      header: (info) => <Text
  className="min-w-[150px] py-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
  size="txtPoppinsMedium24"
  
  
>Description</Text>
    })
  ];
        }, []);
  

      const sideBarMenu  = [{ icon:<Img className="h-6 w-6" src="images/img_arrowright_white_a700_24x24.svg" alt="arrowright" />, label: "Fees Group", href:"/accountfeesgroup",  active:window.location.pathname==="/accountfeesgroup"},{ icon:<Img className="h-6 w-6" src="images/img_arrowright_white_a700_24x24.svg" alt="arrowright_One" />, label: "Student Fees", href:"/accountstudentfees",  active:window.location.pathname==="/accountstudentfees"},{ icon:<Img className="h-6 w-6" src="images/img_arrowright_white_a700_24x24.svg" alt="arrowright_Two" />, label: "Expenses", href:"/accountexpenses",  active:window.location.pathname==="/accountexpenses"}]
  

      

      return (<><div
  className="bg-blue_gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full"
  

  
  ><div
  className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full"
  
  
  ><Sidebar
    onClick={() => collapseSidebar(!collapsed)}
    className="!sticky !w-[286px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
    
    style={{"backgroundImage":"url('images/img_frame11.svg')"}}
    
  ><div
  className="flex flex-row items-center justify-between ml-6 md:ml-[0] mr-2.5 mt-7 w-[89%]"
  
  
  ><Img className="common-pointer h-[58px] md:h-auto object-cover" src="images/img_whatsappimage20210604.png" alt="whatsappimageTwenty" onClick={() => navigate('/dashboard')} /><Img className="h-[38px] w-[38px]" src="images/img_thumbsup.svg" alt="thumbsup" /></div><Menu
  menuItemStyles={{
    button: {
      "padding":"11px 11px 11px 25px","gap":"8px","color":"#ffffffcc","fontSize":"18px",
      [`&:hover, &.ps-active`]: {"color":"#ffffff","fontWeight":"600 !important","backgroundColor":"#14238aff !important"},
    },
  }}
  
  className="flex flex-col items-center justify-start mb-[801px] pt-3 w-full"
  
    
  ><div
    className="h-[667px] md:h-[686px] relative w-full"
      

    
  ><div
  className="flex flex-col h-full items-center justify-start m-auto w-full"
  

  
  ><div
  className="flex flex-col items-center justify-start py-[9px] w-full"
  

  
  ><MenuItem
  
    active={window.location.pathname==="/dashboard"}
  href="/dashboard"
  
  ><div
    className="bg-indigo-900 flex flex-col items-center justify-start"
    
  ><div
  className="flex flex-col gap-[22px] justify-end w-full"
  

  
  ><div
  className="flex flex-row gap-[11px] items-start justify-start md:ml-[0] ml-[23px] mr-[125px] w-[49%] md:w-full"
  
  
  ><Img className="h-[26px] w-[26px]" src="images/img_avtimer.svg" alt="avtimer" /><Text
    
    
    
    
  >Dashboard</Text></div><Line
    className="bg-indigo-900_01 h-[3px] w-full"
    
    
  /></div></div></MenuItem><MenuItem
  icon={<Img className="h-[26px] w-[26px]" src="images/img_people.svg" alt="people" />}
    
  
  
  ><Text
    
    
    
    
  >Parents</Text></MenuItem><div
  className="bg-indigo-500_cc flex flex-col gap-[-1.42px] items-center justify-start mt-[166px] py-2.5 w-full"
  

  
  >{sideBarMenu?.map((menu,i) => (
  <MenuItem
    key={`sideBarMenuItem${i}`}
    {...menu}
  >
  {menu.label}
  </MenuItem>
))}</div><MenuItem
  
    active={window.location.pathname==="/subjects"}
  href="/subjects"
  
  ><div
    className="bg-indigo-900 flex flex-col items-center justify-end"
    
  ><div
  className="flex flex-col gap-5 justify-end w-full"
  

  
  ><div
  className="flex flex-row gap-[11px] items-start justify-start md:ml-[0] ml-[23px] mr-[158px] w-[37%] md:w-full"
  
  
  ><Img className="h-[26px] w-[26px]" src="images/img_openbook11.svg" alt="openbookEleven" /><Text
    className="mt-0.5"
    
    
    
  >Subject</Text></div><Line
    className="bg-indigo-900_01 h-[3px] w-full"
    
    
  /></div></div></MenuItem></div></div><Accordion preExpanded={[0]}
    className="absolute flex flex-col gap-px inset-x-[0] mx-auto top-[12%] w-full"
    
    
  >{[...Array(3)].map((item, index)=> <AccordionItem uuid={index} key={Math.random()} ><div
  className="flex flex-col items-center justify-start pb-[74px] w-full"
  

  
  ><div
  className="bg-indigo-900 flex md:flex-col flex-row md:gap-5 items-center justify-start w-full"
  
  
  ><Img className="h-[26px]" src="images/img_students1.svg" alt="studentsFour" /><Text
    
    
    
    
  >Students</Text><Img className="h-6 w-[286px]" src="images/img_arrowright_white_a700.svg" alt="arrowright_Three" /></div><div
  className="flex flex-col items-center justify-start w-full"
  

  
  >
      <AccordionItemHeading className="w-full">
      <AccordionItemButton>
      <AccordionItemState>{({ expanded }) => <div
  className="flex flex-col items-center justify-between w-full"
  

  
  ><Line
    className="bg-indigo-900_01 h-[3px] w-full"
    
    
  /></div> }</AccordionItemState>
      </AccordionItemButton>
      </AccordionItemHeading></div></div><Line
    className="self-center h-[3px] bg-indigo-900_01 w-full"
    
    
  /></AccordionItem> )}</Accordion><MenuItem
  icon={<Img className="h-6 w-6" src="images/img_arrowright_white_a700_24x24.svg" alt="arrowright_Five" />}
    active={window.location.pathname==="/accountaddexpenses"}
  href="/accountaddexpenses"
  
  ><Text
    className="my-0.5"
    
    
    
  >Add Expenses</Text></MenuItem></div><div
  className="flex flex-col items-center justify-end mt-[27px] w-full"
  

  
  ><MenuItem
  icon={<Img className="h-[26px] w-[26px]" src="images/img_settings_white_a700_26x26.svg" alt="settings_One" />}
    active={window.location.pathname==="/settings"}
  href="/settings"
  
  ><Text
    className="my-0.5"
    
    
    
  >Settings</Text></MenuItem><MenuItem
  
    
  
  
  ><div
    className="flex flex-row items-center justify-evenly"
    
  ><Line
    className="bg-indigo-900_01 h-[3px] w-full"
    
    
  /></div></MenuItem></div></Menu></Sidebar><div
  className="flex flex-1 flex-col gap-[51px] items-center justify-start md:px-5 w-full"
  

  
  ><div
  className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[25px] sm:px-5 shadow-bs1 w-full"
  
  
  ><Img className="h-[43px] md:mt-0 my-[3px] w-[43px]" src="images/img_search.svg" alt="search" /><Text
    className="md:ml-[0] ml-[9px] text-gray-500_cc text-lg"
    size="txtPoppinsMedium18"
    
    
  >Search</Text><Img className="h-6 md:ml-[0] ml-[810px] w-6" src="images/img_lock.svg" alt="lock" /><Img className="h-6 ml-3.5 md:ml-[0] w-6" src="images/img_notificationsnone.svg" alt="notificationsno" /><Line
    className="bg-red-A700 md:h-0.5 h-[25px] md:ml-[0] ml-[17px] md:mt-0 my-3 w-0.5 md:w-full"
    
    
  /><div
  className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[15px] md:mt-0 my-[3px] w-[7%] md:w-full"
  
  
  ><Img className="h-[43px] md:h-auto rounded-[50%] w-[43px]" src="images/img_ellipse10.png" alt="ellipseTen" /><Img className="h-6 w-6" src="images/img_arrowdropdown.svg" alt="arrowdropdown" /></div></div><div
  className="flex flex-col items-start justify-start w-[96%] md:w-full"
  

  
  ><Text
    className="text-[22px] text-black-900 sm:text-lg md:text-xl"
    size="txtPoppinsSemiBold22"
    
    
  >Account</Text><Line
    className="bg-red-500 h-1 w-[5%]"
    
    
  /><div
  className="flex flex-row items-start justify-start mt-[11px] w-[18%] md:w-full"
  
  
  ><Text
    className="mb-0.5 text-gray-800 text-lg"
    size="txtPoppinsRegular18Gray800"
    
    
  >Home</Text><Img className="h-6 ml-[9px] mt-0.5 w-6" src="images/img_arrowright_red_a700.svg" alt="arrowright_Six" /><Text
    className="ml-2 mt-0.5 text-lg text-red-A700"
    size="txtPoppinsMedium18RedA700"
    
    
  >Fees Group</Text></div><div
  className="bg-white-A700 flex flex-col items-center justify-start mt-[93px] p-[26px] sm:px-5 w-full"
  

  
  ><div
  className="flex flex-col items-start justify-start mb-10 w-[99%] md:w-full"
  

  
  ><div
  className="flex flex-row items-start justify-start w-[36%] md:w-full"
  
  
  ><Img className="h-6 mt-2.5 w-6" src="images/img_list.svg" alt="list" /><div
    className="flex flex-col ml-1 mt-[9px] relative w-[38%]"
      

    
  ><Text
    className="mx-auto text-black-900 text-lg"
    size="txtPoppinsBold18Black900"
    
    
  >Fees Group List</Text><Line
    className="bg-red-A700 h-0.5 mt-[-0.65px] mx-auto w-[43%] z-[1]"
    
    
  /></div><Line
    className="bg-black-900 h-[42px] ml-[15px] w-px"
    
    
  /><Text
    className="ml-[37px] mt-[11px] text-black-900 text-lg"
    size="txtPoppinsBold18Black900"
    
    
  >Add Fees Group</Text></div><Input
    name="groupOne" placeholder="Search..." className="leading-[normal] p-0 placeholder:text-gray-600 text-left text-lg w-full" wrapClassName="md:ml-[0] ml-[684px] w-[34%]"
    
    
    

size="xl"

  ></Input><div
    className="md:h-[2616px] h-[852px] sm:h-[872px] mt-5 relative w-full"
      

    
  ><div
    className="absolute md:h-[1364px] sm:h-[848px] h-[852px] inset-[0] justify-center m-auto w-full"
      

    
  ><div
  className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto outline outline-[1px] outline-black-900 w-full"
  

  
  ><div
  className="flex flex-col gap-[43px] justify-start mb-[38px] mt-[21px] w-full"
  

  
  ><div className="overflow-auto md:ml-[0] ml-[29px] w-[89%]" >
<ReactTable  columns={table1Columns} data={table1Data.current} rowClass={""} headerClass=""
   />
</div><div
  className="flex flex-col items-start justify-start w-full"
  

  
  ><Line
    className="bg-black-900 h-px w-full"
    
    
  /><div
  className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-10 md:ml-[0] mt-[7px] w-[87%] md:w-full"
  
  
  ><Text
    className="text-[22px] text-black-900 sm:text-lg md:text-xl"
    size="txtPoppinsRegular22"
    
    
  >3</Text><Text
    className="md:ml-[0] ml-[82px] text-black-900 text-lg"
    size="txtPoppinsRegular18Black900"
    
    
  > Kindergarten Fee Group</Text><Text
    className="md:ml-[0] ml-[157px] text-black-900 text-lg"
    size="txtPoppinsRegular18Black900"
    
    
  ><>Feeding Fee - GHS180.00<br />Maintenance - GHS120.00<br />Tuition - GHS500.00</></Text><Text
    className="md:ml-[0] ml-[50px] text-black-900 text-lg"
    size="txtPoppinsRegular18Black900"
    
    
  ><>To be paid every<br />semester</></Text></div><Line
    className="bg-black-900 h-px mt-[69px] w-full"
    
    
  /><div
  className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-10 md:ml-[0] mt-[11px] w-[87%] md:w-full"
  
  
  ><Text
    className="text-[22px] text-black-900 sm:text-lg md:text-xl"
    size="txtPoppinsRegular22"
    
    
  >4</Text><Text
    className="md:ml-[0] ml-[77px] text-black-900 text-lg"
    size="txtPoppinsRegular18Black900"
    
    
  >Class 1 Fee Group</Text><Text
    className="md:ml-[0] ml-[222px] text-black-900 text-lg"
    size="txtPoppinsRegular18Black900"
    
    
  ><>Feeding Fee - GHS100.00<br />PTA - GHS150.00<br />Computer Fees - GHS150.00<br />Tuition - GHS500.00</></Text><Text
    className="md:ml-[0] ml-[30px] text-black-900 text-lg"
    size="txtPoppinsRegular18Black900"
    
    
  ><>To be paid every<br />semester</></Text></div><Line
    className="bg-black-900 h-px mt-[74px] w-full"
    
    
  /><div
  className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-10 md:ml-[0] mt-1 w-[87%] md:w-full"
  
  
  ><Text
    className="text-[22px] text-black-900 sm:text-lg md:text-xl"
    size="txtPoppinsRegular22"
    
    
  >5</Text><Text
    className="md:ml-[0] ml-[77px] md:mt-0 mt-2 text-black-900 text-lg"
    size="txtPoppinsRegular18Black900"
    
    
  >Class 2 Fee Group</Text><Text
    className="ml-52 md:ml-[0] md:mt-0 mt-1.5 text-black-900 text-lg"
    size="txtPoppinsRegular18Black900"
    
    
  ><>Feeding Fee - GHS100.00<br />PTA - GHS150.00<br />Computer Fees - GHS150.00<br />Tuition - GHS500.00</></Text><Text
    className="md:ml-[0] ml-[35px] md:mt-0 mt-1 text-black-900 text-lg"
    size="txtPoppinsRegular18Black900"
    
    
  ><>To be paid every<br />semester</></Text></div></div></div></div><Line
    className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[8%] w-full"
    
    
  /><Line
    className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[24%] w-full"
    
    
  /></div><div
  className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-y-[0] items-center justify-start left-[11%] my-auto w-[64%]"
  
  
  ><Line
    className="bg-black-900 h-[852px] md:h-px md:w-full w-px"
    
    
  /><Line
    className="bg-black-900 h-[852px] md:h-px md:ml-[0] ml-[373px] md:w-full w-px"
    
    
  /><Line
    className="bg-black-900 h-[852px] md:h-px md:ml-[0] ml-[278px] md:w-full w-px"
    
    
  /></div></div><div
  className="flex sm:flex-col flex-row sm:gap-5 items-end justify-end md:ml-[0] ml-[625px] mt-[41px] w-2/5 md:w-full"
  
  
  ><Text
    className="mb-1 sm:mt-0 mt-4 text-[22px] text-gray-600_01 sm:text-lg md:text-xl"
    size="txtPoppinsRegular22Gray60001"
    
    
  >Previous</Text><Button
  className="cursor-pointer font-medium leading-[normal] min-w-[60px] sm:ml-[0] ml-[30px] text-[22px] text-center sm:text-lg md:text-xl"
    
    shape="square"



  >1</Button><Button
  className="cursor-pointer leading-[normal] min-w-[60px] sm:ml-[0] ml-[18px] text-[22px] text-center sm:text-lg md:text-xl"
    
    shape="square"


variant="outline"
  >2</Button><Button
  className="cursor-pointer leading-[normal] min-w-[60px] sm:ml-[0] ml-[18px] text-[22px] text-center sm:text-lg md:text-xl"
    
    shape="square"


variant="outline"
  >3</Button><Text
    className="mb-1 ml-5 sm:ml-[0] sm:mt-0 mt-4 text-[22px] text-gray-600_01 sm:text-lg md:text-xl"
    size="txtPoppinsRegular22Gray60001"
    
    
  >Next</Text></div></div></div><Text
    className="mt-[104px] text-black-900 text-sm"
    size="txtPoppinsMedium14Black900"
    
    
  ><span  className="text-black-900_63 font-poppins text-left font-medium" >© Copyrights </span><span  className="text-black-900 font-poppins text-left font-medium" >firmfoundation </span><span  className="text-black-900_63 font-poppins text-left font-medium" >2021. All rights reserved</span></Text></div></div></div></div></>);
    };

    

    export default ACCOUNTFEESGROUPPage;
  