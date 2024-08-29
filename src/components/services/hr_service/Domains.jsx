import { HR_Content } from "../constant";

const Domains = () => {
  const { title, description, description1, list } = HR_Content[2];
  const fthree = list[0].items.slice(0, 3);
  const sthree = list[0].items.slice(3, 6);

  return (
    <div className="flex max-tablet:flex-col w-full max-tablet:h-full h-[30rem] overflow-hidden">
      <div className="bg-t-primary w-[50%] max-tablet:w-full flex flex-col items-start max-tablet:px-24 max-tablet:py-20 max-mobile:py-10 max-mobile:px-4 px-20 justify-center relative">
        <h1 className="text-2xl font-semibold mb-5 text-white">{title}</h1>
        <p className="font-medium text-white max-tablet:text-sm">{description}</p>
        <p className="font-medium text-white max-tablet:text-sm">{description1}</p>
        <div className="w-10 h-10 max-tablet:-bottom-5 max-tablet:right-[45%] bg-t-primary absolute -right-5 rotate-45"></div>
      </div>
      <div className="w-[50%] max-tablet:w-full max-mobile:py-10 max-tablet:py-20 flex flex-col items-center justify-center overflow-hidden">
        {list.map((i) => (
          <div key={i.id} className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-xl">{i.title}</h2>

            <div className="flex flex-col overflow-hidden items-center justify-center gap-12 p-12 max-tablet:gap-10 max-mobile:gap-4 max-tablet:p-8 max-mobile:py-10">

              <div className="flex overflow-hidden gap-12 max-tablet:gap-10 max-mobile:gap-4 items-start">
                {fthree.map((j) => (
                  <div key={j.id} className="flex flex-col items-center justify-center">
                    <img
                      src={j.img}
                      alt=""
                      className="w-32 max-tablet:w-28"
                    />
                    <p className="font-medium max-mobile:text-xs max-mobile:w-28 text-sm w-40 text-center text-t-primary">{j.content}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex overflow-hidden gap-12 max-tablet:gap-10 max-mobile:gap-4 items-start">
                {sthree.map((j) => (
                  <div key={j.id} className="flex flex-col items-center">
                    <img
                      src={j.img}
                      alt=""
                      className="w-32 max-tablet:w-28"
                    />
                    <p className="font-medium max-mobile:text-xs max-mobile:w-28 text-sm w-40 text-center text-t-primary">{j.content}</p>
                  </div>
                ))}
              </div>

              {/* Uncomment if needed
              <div className="flex overflow-hidden gap-12 max-tablet:gap-10 max-mobile:gap-4 items-start">
                {tthree.map((j) => (
                  <div key={j.id} className="flex flex-col items-center">
                    <img
                      src={j.img}
                      alt=""
                      className="w-32 max-tablet:w-28"
                    />
                    <p className="font-medium max-mobile:text-xs max-mobile:w-28 text-sm w-40 text-center text-t-primary">{j.content}</p>
                  </div>
                ))}
              </div> 
              */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domains;
