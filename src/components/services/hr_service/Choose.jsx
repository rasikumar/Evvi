import { useState } from "react";
import { HR_Content } from "../constant";

const Choose = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = (id) => {
    setOpen(open === id ? null : id);
  };

  const { title, heading, list } = HR_Content[3];
  return (
    <div className="bg-heroImage bg-cover max-mobile:bg-right bg-no-repeat h-[26rem] w-full ">
      <div className="w-[60%] max-mobile:w-full flex flex-col justify-center bg-gradient-to-r from-t-secondary  h-full">
        <div className="px-28 max-tablet:px-14 max-mobile:px-8 gap-6 flex flex-col">
          <div>
            <h1 className="text-xl font-semibold text-white">{title}</h1>
            <p className="text-sm font-medium">{heading}</p>
          </div>
          <div>
            {list.map((item) => (
              <div key={item.id} className="mb-4">
                <h2
                  className="text-lg font-semibold text-t-primary"
                  onClick={() => toggleOpen(item.id)}
                >
                  {item.title}
                </h2>
                {open === item.id && (
                  <p className="text-sm font-medium text-white">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
