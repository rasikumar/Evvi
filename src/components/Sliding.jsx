import { scrollItems } from "../constant";
import styled,{ keyframes } from "styled-components";

const Sliding = () => {
    return (
            <div className="flex w-[100%] mt-10 p-4 bg-b-primary items-center justify-center overflow-hidden">
                <MarqueeGroup className="flex p-4 flex-shrink-0 items-center justify-around whitespace-nowrap w-full">
                    {scrollItems.map(scrollitem => (
                        <div key={scrollitem.id} className="gride place-items-center">
                            <Text className="w-full max-mobile:mr-10 object-contain rounded-[0.5rem] laptop:text-xl tablet:text-lg mobile:text-sm desktop:text-2xl ">{scrollitem}</Text>
                        </div>
                    ))}
                </MarqueeGroup>
                <MarqueeGroup className="flex max-mobile:hidden p-4 flex-shrink-0 items-center justify-around whitespace-nowrap w-full">
                    {scrollItems.map(scrollitem => (
                        <div key={scrollitem.id} className="gride place-items-center">
                            <Text className="w-full max-mobile:mr-10 object-contain rounded-[0.5rem] laptop:text-xl tablet:text-lg mobile:text-sm desktop:text-2xl ">{scrollitem}</Text>
                        </div>
                    ))}
                </MarqueeGroup>
                <MarqueeGroup className="flex max-mobile:hidden p-4 flex-shrink-0 items-center justify-around whitespace-nowrap w-full">
                    {scrollItems.map(scrollitem => (
                        <div key={scrollitem.id} className="gride place-items-center">
                            <Text className="w-full max-mobile:mr-10 object-contain rounded-[0.5rem] laptop:text-xl tablet:text-lg mobile:text-sm desktop:text-2xl ">{scrollitem}</Text>
                        </div>
                    ))}
                </MarqueeGroup>
            </div>
    );
}

export default Sliding;


const scrollX = keyframes `
    from{
        left : translateX(0);
    }
    to{
        transform : translateX(-100%)
    }
`;

const MarqueeGroup = styled.div`
    animation : ${scrollX} 15s linear infinite;
`;



const Text = styled.div`
    box-shadow : rgba (99,99,99,0.2) 0px 2px 8px 0px;
`;









