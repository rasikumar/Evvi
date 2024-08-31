/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Business_Consulting } from "../../constant";

const Card = ({ setSelected, item }) => {
  return (
    <div className="inline-block w-full mb-4 ">
      <h1 className="text-center mb-5 font-semibold">{item.title}</h1>
      <motion.img
        whileHover={{
          scale: 1.025,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => {
          setSelected(item);
        }}
        layoutId={`card-${item.id}`}
        src={item.url}
        className="w-full bg-base-100 shadow-xl image-full cursor-pointer rounded-xl"
      />
    </div>
  );
};

export default function List({ setSelected }) {
  const { header,subheader } = Business_Consulting[1];
  return (
    <div className="px-16 max-mobile:px-8 max-mobile:py-6 py-10 flex flex-col gap-4 max-mobile:gap-2 w-full -mt-24">
      <h1 className="text-center font-bold text-4xl mb-8 max-mobile:text-2xl">{header}</h1>
      <p className="font-medium text-justify">{subheader}</p>
      <div className="flex max-tablet:flex-wrap p-5 gap-12">
        {Business_Consulting[1].items.map((item) => (
          <Card key={item.id} setSelected={setSelected} item={item} />
        ))}
      </div>
    </div>
  );
}
