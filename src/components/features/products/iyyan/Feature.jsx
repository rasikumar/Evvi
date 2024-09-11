import { IyyanContent } from "../constant/constant"

const Feature = () => {
  const { heading, subheading, list } = IyyanContent[2];
  

  return (
    <div className="m-auto p-10 max-mobile:p-7 backdrop-blur-md bg-white/30">
      <h2 className="text-2xl text-center">{heading}</h2>
      <p>{subheading}</p>
      <div className="flex flex-col gap-4 m-auto">
        <h2 className="text-center text-t-primary font-medium">Features</h2>
        <p className="text-center text-4xl max-tablet:text-2xl max-mobile:text-xl mb-4">Explore the Unparalled <br /> Features of Iyyan</p>
        {list.map((item) => (
          <div key={item.id} className={`flex max-tablet:flex-col gap-2 items-center m-auto ${item.id % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
            <div className={`${item.id % 2 === 0 ? "text-left" : "text-right"} flex flex-col gap-2`}>
              <h2 className="text-t-primary text-3xl max-tablet:text-xl font-medium">{item.content}</h2>
              <p className="w-[32rem] max-mobile:w-[20rem] m-auto">{item.paragraph}</p>
            </div>
            <div>
              <img src={item.img} alt={item.content} className="h-72 m-auto " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
