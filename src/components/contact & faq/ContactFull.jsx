import { motion } from "framer-motion";
import Contact from "./Contact";
import { Helmet } from "react-helmet-async";

const ContactFull = () => {
  return (
    <div className="w-[90%] mb-10 max-tablet:py-8 max-mobile:gap-10 m-auto py-12 gap-20">
      <Helmet>
        <title>Contact Evvi Solutions</title>
        <meta
          name="description"
          content="Transform your business with our tailored solutions"
        />
      </Helmet>
      <div className="flex flex-col gap-2 p-10">
        <motion.h2
          className="text-3xl text-center font-bold"
          initial={{ opacity: 0, y: "200px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-center max-mobile:text-sm"
          initial={{ opacity: 0, x: "300px" }}
          animate={{ opacity: 1, x: "0px" }}
          transition={{ duration: 1 }}
        >
          Ready to transform your business?
        </motion.p>
        <motion.p
          className="text-center max-mobile:text-sm"
          initial={{ opacity: 0, x: "300px" }}
          animate={{ opacity: 1, x: "0px" }}
          transition={{ duration: 1 }}
        >
           Reach out to us today, and let&apos;s explore how we can help you achieve your goals together
        </motion.p>
      </div>
      <div className="flex max-tablet:flex-col-reverse max-mobile:items-start items-center max-tablet:px-0 gap-10  px-10 bg-slate-200 py-10">
        <div className="w-[40%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1724310043327!6m8!1m7!1sJIqzsx8ncKlm33X7Dz0dvA!2m2!1d9.885797638190073!2d78.07614603762858!3f89.30333776964493!4f-3.3316428267530966!5f1.0997163242364822"
            loading="lazy"
            className="w-[400px] h-[400px] max-mobile:w-[250px] max-mobile:h-[250px] max-mobile:ml-16 rounded-xl"
          ></iframe>
        </div>
        <div className="w-[70%] max-tablet:w-full">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default ContactFull;
