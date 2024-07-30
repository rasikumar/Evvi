import { scrollItems } from "../constant";

const Sliding = () => {
    return (
        <div className="w-full flex items-center justify-center gap-40 p-4 bg-b-primary mt-10 overflow-hidden">
            <div className="flex gap-52 animate-scroll">
                {scrollItems.map((scrollItem, index) => (
                    <div key={index} className="whitespace-nowrap">
                        <span className="text-lg bg-white rounded-lg p-2 mx-2">{scrollItem}</span>
                    </div>
                ))}
                {scrollItems.map((scrollItem, index) => (
                    <div key={index} className="whitespace-nowrap">
                        <span className="text-lg bg-white rounded-lg p-2 mx-2">{scrollItem}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sliding;
