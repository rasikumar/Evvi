import { useState } from "react";
import axios from "axios";
import { ContactUs } from "../../constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Hourglass } from "react-loader-spinner";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const { title, heading, button } = ContactUs[0];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select a Service");
  const [otherService, setOtherService] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://evvisolutions.com/contact",
        formData
      );
      if (response.status === 200) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          details: "",
        });
        toast.success("Your message has been sent successfully!");
      } else {
        toast.error("Problem. Please try again later.");
      }
    } catch (err) {
      toast.error("Message is not sending. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
    setFormData({ ...formData, subject: value });
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col bg-t-primary p-8 gap-6 w-full rounded-xl">
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-white">{heading}</h2>
        <p className="text-4xl max-tablet:text-3xl max-mobile:text-2xl font-semibold text-white">
          {title}
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4 max-mobile:flex-col">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="bg-none bg-white/30 border-2 rounded-md border-white/30 py-2 px-5 placeholder:text-white placeholder:font-medium focus:border-t-secondary transition-all delay-75 w-full"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-none bg-white/30 border-2 rounded-md border-white/30 py-2 px-5 placeholder:text-white placeholder:font-medium focus:border-t-secondary transition-all delay-75 w-full"
              required
            />
          </div>
          <div className="flex gap-4 max-mobile:flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-none bg-white/30 border-2 rounded-md border-white/30 py-2 px-6 placeholder:text-white placeholder:font-medium focus:border-t-secondary transition-all delay-75 w-full"
              required
            />
            {/* Custom dropdown */}
            <div className="relative w-full px-6 bg-white/30 border-2 rounded-md border-white/30 py-2 text-white font-medium cursor-pointer">
              <div className="bg-none w-full" onClick={handleToggle}>
                {selectedOption === "Other Service" ? (
                  <input
                    type="text"
                    className=" text-white rounded-md p-0 bg-transparent border-none outline-none placeholder:text-white px-3 py-1"
                    placeholder="Please specify..."
                    value={otherService}
                    onChange={(e) => setOtherService(e.target.value)}
                  />
                ) : (
                  selectedOption || "Select a Service"
                )}
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    className="absolute top-full left-0 w-full mt-2 bg-slate-600 rounded-md"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <li
                      className="py-2 px-5 hover:bg-slate-700 cursor-pointer"
                      onClick={() => handleSelect("Business Consulting")}
                    >
                      Business Consulting
                    </li>
                    <li
                      className="py-2 px-5 hover:bg-slate-700 cursor-pointer"
                      onClick={() => handleSelect("Digital Transformation")}
                    >
                      Digital Transformation
                    </li>
                    <li
                      className="py-2 px-5 hover:bg-slate-700 cursor-pointer"
                      onClick={() => handleSelect("HR Consulting")}
                    >
                      HR Consulting
                    </li>
                    <li
                      className="py-2 px-5 hover:bg-slate-700 cursor-pointer"
                      onClick={() => handleSelect("IT Consulting")}
                    >
                      IT Consulting
                    </li>
                    <li
                      className="py-2 px-5 hover:bg-slate-700 cursor-pointer"
                      onClick={() => handleSelect("Other Service")}
                    >
                      Other Service
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
          <input
            type="text"
            name="details"
            placeholder="Details here"
            value={formData.details}
            onChange={handleChange}
            className="bg-none bg-white/30 border-2 rounded-md border-white/30 py-6 px-6 placeholder:text-white placeholder:font-medium focus:border-t-secondary transition-all delay-75"
            required
          />
          <button
            type="submit"
            className="btn-secondary text-white w-60 max-mobile:w-full"
          >
            <div className="flex items-center justify-center">
              {loading ? (
                <Hourglass
                  visible={true}
                  height="20"
                  width="20"
                  ariaLabel="hourglass-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  colors={["#306cce", "#72a1ed"]}
                />
              ) : (
                button
              )}
            </div>
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
