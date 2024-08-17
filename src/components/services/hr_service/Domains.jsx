import { HR_Content } from "../constant";

const Domains = () => {
  const { title, description, description1, list } = HR_Content[2];
  const fthree = list[0].items.slice(0, 3);
  const sthree = list[0].items.slice(3, 6);

  return (
    <div className="flex w-full h-[35rem]">
      <div className="bg-t-primary w-[50%] flex flex-col items-start px-20 justify-center relative">
        <h1 className="text-2xl font-semibold mb-5 text-white">{title}</h1>
        <p className="font-medium text-white">{description}</p>
        <p className="font-medium text-white">{description1}</p>
        <div className="w-10 h-10 bg-t-primary absolute -right-5 rotate-45" ></div>
      </div>
      <div className="w-[50%] flex flex-col items-center justify-center">
        {list.map((i) => (
          <div key={i.id} className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-xl">{i.title}</h2>

            <div className="flex flex-col items-center justify-center gap-12 p-12">

              <div className="flex gap-12">
                {fthree.map((j) => (
                  <div key={j.id} className="flex flex-col items-center justify-center">
                    <img
                      src={j.img}
                      alt=""
                      className="w-32 grid grid-cols-2 grid-rows-3"
                    />
                    <p className="font-medium text-sm text-center p-3  text-t-primary">{j.content}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-12 mr-4">
                {sthree.map((j) => (
                  <div key={j.id} className="flex flex-col items-center ">
                    <img
                      src={j.img}
                      alt=""
                      className="w-32 grid grid-cols-2 grid-rows-3"
                    />
                    <p className="font-medium text-sm text-center p-3 text-t-primary">{j.content}</p>

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
