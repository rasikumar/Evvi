/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Marketing_content } from "../../constant";

const Card = ({ setSelected, item }) => {
  return (
    <div className="inline-block w-full mb-4">
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
  return (
    <div className="p-4 -mt-24">
      <h1 className="text-center font-bold text-4xl mb-8">Services</h1>
      <div className="columns-2 md:columns-3 p-5 gap-12">
        {Marketing_content[1].items.map((item) => (
          <Card key={item.id} setSelected={setSelected} item={item} />
        ))}
      </div>
    </div>
  );
}
