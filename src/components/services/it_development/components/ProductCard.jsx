import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
function ProductCard({ imgURL, name, price }) {
  return (
    <motion.div
      className="flex flex-col w-[17.5rem] justify-center p-4 bg-white rounded-lg shadow-lg"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.img
        src={imgURL}
        className="w-[18rem] max-tablet:w-[15rem] flex items-center justify-center rounded-lg"
        alt="Product Image"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      />
      <motion.h3
        className="w-fit text-base px-2 text-center m-auto font-medium text-t-primary mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {name}
      </motion.h3>
      <motion.p
        className="text-sm p-2 font-medium leading-snug text-justify w-fit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {price}
      </motion.p>
    </motion.div>
  );
}

export default ProductCard;
