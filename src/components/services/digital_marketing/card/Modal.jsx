/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function Modal({ selected, setSelected }) {
  if (!selected) {
    return <></>;
  }

  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0  bg-black/50 z-50 cursor-pointer overflow-y-scroll"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] mx-auto my-8 px-8 cursor-default flex mt-32"
      >
        <motion.div layoutId={`card-${selected.id}`}>
          <img src={selected.url} className="w-full h-full rounded-s-lg" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="bg-white p-4"
        >
          <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
          <p className="my-4">{selected.description}</p>
        </motion.div>
      </div>
    </div>
  );
}
