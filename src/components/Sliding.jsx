import { scrollItems } from "../constant";
import styled, { keyframes } from "styled-components";

const Sliding = () => {
  return (
    <div className="flex w-[100%] mt-10 items-center justify-center overflow-hidden">
      <MarqueeGroup className="flex items-center justify-around whitespace-nowrap w-full">
        {scrollItems.map((scrollitem) => (
          <div key={scrollitem.id} >
            <Text className="after_slide -skew-x-[20deg] max-mobile:mr-10 object-contain laptop:text-xl tablet:text-lg mobile:text-sm desktop:text-2xl" textcolor = {scrollitem.tcolor} backgroudcolor = {scrollitem.bgColor}>
              <scrollitem.Icon className="mr-8" />
              {scrollitem.text}
            </Text>
          </div>
        ))}
      </MarqueeGroup>
      <MarqueeGroup className="flex max-mobile:hidden items-center justify-around whitespace-nowrap w-full">
        {scrollItems.map((scrollitem) => (
          <div key={scrollitem.id} >
            <Text className="after_slide -skew-x-[20deg] max-mobile:mr-10 object-contain laptop:text-xl tablet:text-lg mobile:text-sm desktop:text-2xl" textcolor = {scrollitem.tcolor} backgroudcolor = {scrollitem.bgColor}>
            <scrollitem.Icon className="mr-8" />
            {scrollitem.text}
            </Text>
          </div>
        ))}
      </MarqueeGroup>
      <MarqueeGroup className="flex max-mobile:hidden items-center justify-around whitespace-nowrap w-full">
        {scrollItems.map((scrollitem) => (
          <div key={scrollitem.id} >
            <Text className="after_slide -skew-x-[20deg] max-mobile:mr-10 object-contain laptop:text-xl tablet:text-lg mobile:text-sm desktop:text-2xl " textcolor = {scrollitem.tcolor} backgroudcolor = {scrollitem.bgColor}>
            <scrollitem.Icon className="mr-8"/>
            {scrollitem.text}
            </Text>
          </div>
        ))}
      </MarqueeGroup>
      <MarqueeGroup className="flex max-mobile:hidden items-center justify-around whitespace-nowrap w-full">
        {scrollItems.map((scrollitem) => (
          <div key={scrollitem.id} >
            <Text className="after_slide -skew-x-[20deg] max-mobile:mr-10 object-contain laptop:text-xl tablet:text-lg mobile:text-sm desktop:text-2xl " textcolor = {scrollitem.tcolor} backgroudcolor = {scrollitem.bgColor}>
            <scrollitem.Icon className="mr-8"/>
            {scrollitem.text}
            </Text>
          </div>
        ))}
      </MarqueeGroup>
    </div>
  );
};

export default Sliding;

const scrollX = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`;

const MarqueeGroup = styled.div`
  animation: ${scrollX} 15s linear infinite;
`;

const Text = styled.div`
  padding: 20px;
  position: relative;
  display: flex;
  align-items: center; /* Center icon and text vertically */
  white-space: nowrap;
  background-color: ${(props) => props.backgroudcolor || "transparent"};
  color: ${(props) => props.textcolor  || "transparent"};

  // &:after {
  //   content: '';
  //   position: absolute;
  //   top: 50%;
  //   left: 100%; 
  //   transform: translate(20px, -50%) skewX(-15deg);
  //   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  //   width: 2px;
  //   height: 100%;
  //   background-color: red;
  // }

  // &:hover {
  //   cursor : pointer;
  //   color: #ff6347; /* Example hover effect */
  //   transform: scale(1.05); /* Slightly enlarge on hover */
  //   transition: transform 0.3s ease;
  // }
  
`;
