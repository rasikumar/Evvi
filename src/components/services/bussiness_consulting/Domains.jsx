import { Business_Consulting } from "../constant";

const Domains = () => {
  const { title, description, description1, list } = Business_Consulting[2];
  const fthree = list[0].items.slice(0, 3);
  const sthree = list[0].items.slice(3, 6);

  return (
    <div className="flex max-tablet:flex-col w-full max-tablet:h-full h-[35rem] overflow-x-hidden">
      <div className="bg-t-primary w-[50%] max-tablet:w-full flex flex-col items-start max-tablet:px-12 max-mobile:py-10 max-mobile:px-4 px-20 justify-center relative gap-2">
        <h2 className="text-2xl font-semibold mb-5 text-white">{title}</h2>
        <p className="font-medium text-white max-tablet:text-sm text-justify">{description}</p>
        <p className="font-medium text-white max-tablet:text-sm text-justify">{description1}</p>
        <div className="w-10 h-10 max-tablet:-bottom-5 max-tablet:right-[45%] bg-t-primary absolute -right-5 rotate-45" ></div>
        <a className="btn-primary" href="">Consult with us</a> 
      </div>
      <div className="w-[50%] max-tablet:w-full max-mobile:py-10 flex flex-col items-center justify-center">
        {list.map((i) => (
          <div key={i.id} className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-xl max-mobile:w-[80%]">{i.title}</h2>

            <div className="flex flex-col items-center justify-center gap-12 p-12 max-tablet:gap-10 max-mobile:gap-4 max-tablet:p-8 max-mobile:py-10">

              <div className="flex gap-12 max-tablet:gap-10 max-mobile:gap-0 items-start">
                {fthree.map((j) => (
                  <div key={j.id} className="flex flex-col items-center justify-center">
                    <img
                      src={j.img}
                      alt="domain_image"
                      className="w-20 max-tablet:w-28"
                    />
                    <p className="font-medium max-mobile:text-xs max-mobile:w-28 text-sm w-40 text-center text-t-primary">{j.content}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-12 max-tablet:gap-10 max-mobile:gap-0 items-start">
                {sthree.map((j) => (
                  <div key={j.id} className="flex flex-col items-center ">
                    <img
                      src={j.img}
                      alt="domain_image"
                      className="w-20 max-tablet:w-28"
                    />
                    <p className="font-medium max-mobile:text-xs max-mobile:w-28 text-sm w-40 text-center text-t-primary">{j.content}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Domains;
