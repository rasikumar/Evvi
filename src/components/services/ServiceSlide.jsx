import { useState } from "react";
import { OurServices } from "../../constant";
import { Link } from "react-router-dom";

const ServiceSlide = () => {
  const [state, setState] = useState(1);
  // const [showSecond, setShowSecond] = useState(false)

  const action = (index) => {
    setState(index);
  };

  const { lists } = OurServices[0];
  const itemOneRender = lists[0].content;
  const itemTwoRender = lists[1].content;
  const itemThreeRender = lists[2].content;
  const itemFourthRender = lists[3].content;

  const { lists_items } = OurServices[0];
  const item1 = lists_items[0].listo;
  const item2 = lists_items[1].listo;
  const item3 = lists_items[2].listo;
  const item4 = lists_items[3].listo;

  return (
    <div className="box">
      <div className="tabs max-mobile:overflow-x-scroll">
        <div
          className={`transition-all delay-100 tab font-medium ${
            state === 1 ? "active-tab" : "text-white"
          }`}
          onClick={() => action(1)}
        >
          {itemOneRender}
        </div>
        <div
          className={`transition-all delay-100 tab font-medium ${
            state === 2 ? "active-tab" : "text-white"
          }`}
          onClick={() => action(2)}
        >
          {itemTwoRender}
        </div>
        <div
          className={`transition-all delay-100 tab font-medium ${
            state === 3 ? "active-tab" : "text-white"
          }`}
          onClick={() => action(3)}
        >
          {itemThreeRender}
        </div>
        <div
          className={`transition-all delay-100 tab font-medium ${
            state === 4 ? "active-tab" : "text-white"
          }`}
          onClick={() => action(4)}
        >
          {itemFourthRender}
        </div>
      </div>

      <div
        className={`content rounded-b-2xl rounded-tr-xl ${
          state === 1 ? "active-content" : ""
        }`}
      >
        <div className="flex max-laptop:flex-col flex-row w-full max-mobile:gap-3 gap-10 items-center">
          <div className="w-full min-w-[40%]">
            <img
              src={lists_items[0].img}
              alt="list_images"
              className="w-full rounded-3xl"
            />
          </div>
          <div className="flex flex-col gap-4 max-mobile:gap-2">
            <h2 className="text-3xl max-tablet:text-2xl max-mobile:text-lg font-bold text-t-primary">
              {lists_items[0].heading}
            </h2>
            <p className="line-clamp-3 max-mobile:line-clamp-5 font-medium max-mobile:text-sm text-justify">
              {lists_items[0].description}
            </p>
            <div className="flex max-laptop:flex-wrap gap-6 max-mobile:gap-0">
              <div className="flex flex-col gap-4 max-mobile:gap-1">
                {item1.map((i) => (
                  <div key={i.content} className="flex items-center gap-2">
                    <img src={i.icon} alt="icon_image" width={15} />
                    <p className="text-t-primary font-medium max-mobile:text-xs text-sm">
                      {i.content}
                    </p>
                  </div>
                ))}
              </div>
              {/* <div className={`flex flex-col gap-4 max-mobile:${showSecond ? 'block' : 'hidden'}`}>
                  {item1.slice(4, 8).map(i => (
                    <div key={i.content} className='flex items-center gap-2'>
                      <img src={i.icon} alt="" width={15} className='max-mobile:mt-1'/>
                      <p className='text-t-primary font-medium max-mobile:text-xs max-mobile:mt-1 text-sm'>{i.content}</p>
                    </div>
                  ))}
                </div>
                {!showSecond && (
                  <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(true)}>
                    Read More
                  </button>
                )}
                {showSecond && (
                  <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(false)}>
                    Less
                  </button>
                )} */}
            </div>
            <Link
              to={lists_items[0].url}
              className="btn-secondary md:text-base text-sm"
              title={lists_items[0].btntitle}
            >
              {lists_items[0].btn}
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`content rounded-xl ${state === 2 ? "active-content" : ""}`}
      >
        <div className="flex max-laptop:flex-col flex-row w-full max-mobile:gap-3 gap-10 items-center">
          <div className="w-full min-w-[40%]">
            <img
              src={lists_items[1].img}
              alt="List_items"
              className="w-full rounded-3xl"
            />
          </div>
          <div className="flex flex-col gap-4 max-mobile:gap-2">
            <h2 className="text-3xl max-tablet:text-2xl max-mobile:text-lg font-semibold text-t-primary">
              {lists_items[1].heading}
            </h2>
            <p className="line-clamp-3 max-mobile:line-clamp-5 font-medium max-mobile:text-sm text-justify">
              {lists_items[1].description}
            </p>
            <div className="flex max-laptop:flex-wrap gap-6 max-mobile:gap-0">
              <div className="flex flex-col gap-4 max-mobile:gap-1">
                {item2.map((i) => (
                  <div key={i.content} className="flex items-center gap-2">
                    <img src={i.icon} alt="icon_image" width={15} />
                    <p className="text-t-primary font-medium max-mobile:text-xs text-sm">
                      {i.content}
                    </p>
                  </div>
                ))}
              </div>
              {/* <div className={`flex flex-col gap-4 max-mobile:${showSecond ? 'block' : 'hidden'}`}>
                {item2.slice(4, 8).map(i => (
                  <div key={i.content} className='flex items-center gap-2'>
                    <img src={i.icon} alt="" width={15} className='max-mobile:mt-1'/>
                    <p className='text-t-primary font-medium max-mobile:text-xs text-sm'>{i.content}</p>
                  </div>
                ))}
              </div>
              {!showSecond && (
                <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(true)}>
                  Read More
                </button>
              )}
              {showSecond && (
                <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(false)}>
                  Less
                </button>
              )} */}
            </div>
            <Link
              to={lists_items[1].url}
              className="btn-secondary md:text-base text-sm"
              title={lists_items[1].btntitle}
            >
              {lists_items[1].btn}
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`content rounded-xl ${state === 3 ? "active-content" : ""}`}
      >
        <div className="flex max-laptop:flex-col flex-row w-full max-mobile:gap-3 gap-10 items-center">
          <div className="w-full min-w-[40%]">
            <img
              src={lists_items[2].img}
              alt="list_image"
              className="w-full rounded-3xl"
            />
          </div>
          <div className="flex flex-col gap-4 max-mobile:gap-2">
            <h2 className="text-3xl max-tablet:text-2xl max-mobile:text-lg font-semibold text-t-primary">
              {lists_items[2].heading}
            </h2>
            <p className="line-clamp-3 max-mobile:line-clamp-5 font-medium max-mobile:text-sm text-justify">
              {lists_items[2].description}
            </p>
            <div className="flex max-laptop:flex-wrap gap-6 max-mobile:gap-0">
              <div className="flex flex-col gap-4 max-mobile:gap-1">
                {item3.map((i) => (
                  <div key={i.content} className="flex items-center gap-2">
                    <img src={i.icon} alt="icon_image" width={15} />
                    <p className="text-t-primary font-medium max-mobile:text-xs text-sm">
                      {i.content}
                    </p>
                  </div>
                ))}
              </div>
              {/* <div className={`flex flex-col gap-4 max-mobile:${showSecond ? 'block' : 'hidden'}`}>
                  {item3.slice(4, 8).map(i => (
                    <div key={i.content} className='flex items-center gap-2'>
                      <img src={i.icon} alt="" width={15} className='max-mobile:mt-1'/>
                      <p className='text-t-primary font-medium max-mobile:text-xs text-sm'>{i.content}</p>
                    </div>
                  ))}
                </div>
                {!showSecond && (
                  <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(true)}>
                    Read More
                  </button>
                )}
                {showSecond && (
                  <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(false)}>
                    Less
                  </button>
                )} */}
            </div>
            <Link
              to={lists_items[2].url}
              className="btn-secondary md:text-base text-sm"
              title={lists_items[0].btntitle}
            >
              {lists_items[2].btn}
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`content  rounded-b-2xl rounded-tl-xl ${
          state === 4 ? "active-content" : ""
        }`}
      >
        <div className="flex max-laptop:flex-col flex-row w-full max-mobile:gap-3 gap-10 items-center">
          <div className="w-full min-w-[40%]">
            <img
              src={lists_items[3].img}
              alt="list_item"
              className="w-full rounded-3xl"
            />
          </div>
          <div className="flex flex-col gap-4 max-mobile:gap-3">
            <h2 className="text-3xl max-tablet:text-2xl max-mobile:text-lg font-semibold text-t-primary">
              {lists_items[3].heading}
            </h2>
            <p className="line-clamp-3 max-mobile:line-clamp-5 font-medium max-mobile:text-sm text-justify">
              {lists_items[3].description}
            </p>
            <div className="flex max-laptop:flex-wrap gap-6 max-mobile:gap-0">
              <div className="flex flex-col gap-4 max-mobile:gap-1">
                {item4.map((i) => (
                  <div key={i.content} className="flex items-center gap-3">
                    <img src={i.icon} alt="icon_image" width={15} />
                    <p className="text-t-primary font-medium max-mobile:text-xs text-sm">
                      {i.content}
                    </p>
                  </div>
                ))}
              </div>
              {/* <div className={`flex flex-col gap-4 max-mobile:${showSecond ? 'block' : 'hidden'}`}>
                  {item4.slice(4, 8).map(i => (
                    <div key={i.content} className='flex items-center gap-2'>
                      <img src={i.icon} alt="" width={15} className='max-mobile:mt-1'/>
                      <p className='text-t-primary font-medium max-mobile:text-xs text-sm'>{i.content}</p>
                    </div>
                  ))}
                </div>
                {!showSecond && (
                  <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(true)}>
                    Read More
                  </button>
                )}
                {showSecond && (
                  <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(false)}>
                    Less
                  </button>
                )} */}
            </div>
            <Link
              to={lists_items[3].url}
              className="btn-secondary md:text-base text-sm"
              title={lists_items[0].btntitle}
            >
              {lists_items[3].btn}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlide;

// ______________________________________________________________________________________________________________________

// different style of tab using materul Ui

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// import { OurServices } from '../../constant';

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   const { lists } = OurServices[0];
//   const itemOneRender = lists[0].content;
//   const itemTwoRender = lists[1].content;
//   const itemThreeRender = lists[2].content;
//   const itemFourthRender = lists[3].content;

//   const { lists_items } = OurServices[0];
//   const item1 = lists_items[0].listo;
//   const item2 = lists_items[1].listo;
//   const item3 = lists_items[2].listo;
//   const item4 = lists_items[3].listo;

//   const [showSecond, setShowSecond] = React.useState(false)

//   return (
//     <div className='bg-white p-5 rounded-3xl '>
//         <Box sx={{ width: '100%' }}>
//         <Box sx={{ borderBottom: 0 }}>
//             <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons allowScrollButtonsMobile textColor='primary' indicatorColor='secondary' aria-label="scrollable basic tabs example" >
//               <Tab label={itemOneRender} {...a11yProps(0)} />
//               <Tab label={itemTwoRender} {...a11yProps(1)} />
//               <Tab label={itemThreeRender} {...a11yProps(2)} />
//               <Tab label={itemFourthRender} {...a11yProps(3)} />
//             </Tabs>
//         </Box>

//         <CustomTabPanel value={value} index={0}>
//         <div className='flex max-laptop:flex-col flex-row w-full max-mobile:gap-3 gap-10 items-center'>
//           <div className='w-full min-w-[40%]'>
//             <img src={lists_items[0].img} alt="" className='w-full rounded-3xl'/>
//           </div>
//           <div className='flex flex-col gap-4 max-mobile:gap-2'>
//             <h2 className='text-3xl max-tablet:text-2xl max-mobile:text-lg font-bold text-t-primary'>
//               {lists_items[0].heading}
//             </h1>
//             <p className='line-clamp-3 max-mobile:line-clamp-5 font-semibold max-mobile:text-sm'>{lists_items[0].description}</p>
//             <div className='flex max-laptop:flex-wrap gap-6 max-mobile:gap-0'>
//               <div className='flex flex-col gap-4 max-mobile:gap-1'>
//                 {item1.slice(0, 4).map(i => (
//                   <div key={i.content} className='flex items-center gap-2'>
//                     <img src={i.icon} alt="" width={15} />
//                     <p className='text-t-primary font-medium max-mobile:text-xs'>{i.content}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className={`flex flex-col gap-4 max-mobile:${showSecond ? 'block' : 'hidden'}`}>
//                 {item1.slice(4, 8).map(i => (
//                   <div key={i.content} className='flex items-center gap-2'>
//                     <img src={i.icon} alt="" width={15} className='max-mobile:mt-1'/>
//                     <p className='text-t-primary font-medium max-mobile:text-xs max-mobile:mt-1'>{i.content}</p>
//                   </div>
//                 ))}
//               </div>
//               {!showSecond && (
//                 <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(true)}>
//                   Read More
//                 </button>
//               )}
//               {showSecond && (
//                 <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(false)}>
//                   Less
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//         </CustomTabPanel>

//         <CustomTabPanel value={value} index={1}>
//         <div className='flex max-laptop:flex-col flex-row w-full max-mobile:gap-3 gap-10 items-center'>
//           <div className='w-full min-w-[40%]'>
//             <img src={lists_items[1].img} alt="" className='w-full rounded-3xl'/>
//           </div>
//           <div className='flex flex-col gap-4 max-mobile:gap-2'>
//             <h2 className='text-3xl max-tablet:text-2xl max-mobile:text-lg font-semibold text-t-primary'>
//               {lists_items[1].heading}
//             </h1>
//             <p className='line-clamp-3 max-mobile:line-clamp-5 font-medium max-mobile:text-sm'>{lists_items[1].description}</p>
//             <div className='flex max-laptop:flex-wrap gap-6 max-mobile:gap-0'>
//               <div className='flex flex-col gap-4 max-mobile:gap-1'>
//                 {item2.slice(0, 4).map(i => (
//                   <div key={i.content} className='flex items-center gap-2'>
//                     <img src={i.icon} alt="" width={15} />
//                     <p className='text-t-primary font-medium max-mobile:text-xs'>{i.content}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className={`flex flex-col gap-4 max-mobile:${showSecond ? 'block' : 'hidden'}`}>
//                 {item2.slice(4, 8).map(i => (
//                   <div key={i.content} className='flex items-center gap-2'>
//                     <img src={i.icon} alt="" width={15} className='max-mobile:mt-1'/>
//                     <p className='text-t-primary font-medium max-mobile:text-xs max-mobile:mt-1'>{i.content}</p>
//                   </div>
//                 ))}
//               </div>
//               {!showSecond && (
//                 <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(true)}>
//                   Read More
//                 </button>
//               )}
//               {showSecond && (
//                 <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(false)}>
//                   Less
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//         </CustomTabPanel>

//         <CustomTabPanel value={value} index={2}>
//         <div className='flex max-laptop:flex-col flex-row w-full max-mobile:gap-3 gap-10 items-center'>
//           <div className='w-full min-w-[40%]'>
//             <img src={lists_items[2].img} alt="" className='w-full rounded-3xl'/>
//           </div>
//           <div className='flex flex-col gap-4 max-mobile:gap-2'>
//             <h2 className='text-3xl max-tablet:text-2xl max-mobile:text-lg font-semibold text-t-primary'>
//               {lists_items[2].heading}
//             </h1>
//             <p className='line-clamp-3 max-mobile:line-clamp-5 font-medium max-mobile:text-sm'>{lists_items[2].description}</p>
//             <div className='flex max-laptop:flex-wrap gap-6 max-mobile:gap-0'>
//               <div className='flex flex-col gap-4 max-mobile:gap-1'>
//                 {item3.slice(0, 4).map(i => (
//                   <div key={i.content} className='flex items-center gap-2'>
//                     <img src={i.icon} alt="" width={15} />
//                     <p className='text-t-primary font-medium max-mobile:text-xs'>{i.content}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className={`flex flex-col gap-4 max-mobile:${showSecond ? 'block' : 'hidden'}`}>
//                 {item3.slice(4, 8).map(i => (
//                   <div key={i.content} className='flex items-center gap-2'>
//                     <img src={i.icon} alt="" width={15} className='max-mobile:mt-1'/>
//                     <p className='text-t-primary font-medium max-mobile:text-xs max-mobile:mt-1'>{i.content}</p>
//                   </div>
//                 ))}
//               </div>
//               {!showSecond && (
//                 <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(true)}>
//                   Read More
//                 </button>
//               )}
//               {showSecond && (
//                 <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(false)}>
//                   Less
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//         </CustomTabPanel>

//         <CustomTabPanel value={value} index={3}>
//         <div className='flex max-laptop:flex-col flex-row w-full max-mobile:gap-3 gap-10 items-center'>
//           <div className='w-full min-w-[40%]'>
//             <img src={lists_items[3].img} alt="" className='w-full rounded-3xl'/>
//           </div>
//           <div className='flex flex-col gap-4 max-mobile:gap-2'>
//             <h2 className='text-3xl max-tablet:text-2xl max-mobile:text-lg font-semibold text-t-primary'>
//               {lists_items[3].heading}
//             </h1>
//             <p className='line-clamp-3 max-mobile:line-clamp-5 font-medium max-mobile:text-sm'>{lists_items[3].description}</p>
//             <div className='flex max-laptop:flex-wrap gap-6 max-mobile:gap-0'>
//               <div className='flex flex-col gap-4 max-mobile:gap-1'>
//                 {item4.slice(0, 4).map(i => (
//                   <div key={i.content} className='flex items-center gap-2'>
//                     <img src={i.icon} alt="" width={15} />
//                     <p className='text-t-primary font-medium max-mobile:text-xs'>{i.content}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className={`flex flex-col gap-4 max-mobile:${showSecond ? 'block' : 'hidden'}`}>
//                 {item4.slice(4, 8).map(i => (
//                   <div key={i.content} className='flex items-center gap-2'>
//                     <img src={i.icon} alt="" width={15} className='max-mobile:mt-1'/>
//                     <p className='text-t-primary font-medium max-mobile:text-xs max-mobile:mt-1'>{i.content}</p>
//                   </div>
//                 ))}
//               </div>
//               {!showSecond && (
//                 <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(true)}>
//                   Read More
//                 </button>
//               )}
//               {showSecond && (
//                 <button className='max-mobile:block hidden mt-5' onClick={() => setShowSecond(false)}>
//                   Less
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//         </CustomTabPanel>

//       </Box>
//     </div>
//   );
// }
