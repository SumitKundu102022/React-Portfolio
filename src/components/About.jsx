import aboutImg from "../assets/about2.jpg"
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        {/* <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center mt-10 sticky top-0 z-40 shadow-md bg-gradient-to-t from-purple-600 to-transparent text-white animate-slide-down">
            <img className="rounded-2xl relative top-0 z-30" src={aboutImg} alt="about" />
          </div>
        </motion.div> */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="relative flex items-center justify-center mt-0 cursor-pointer group">
            {/* Image */}
            <img className="rounded-2xl" src={aboutImg} alt="about" />

            {/* Gradient + shadow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md bg-gradient-to-t from-purple-600 to-transparent"></div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start py-4 lg:py-0">
            <p className="my-2 lg:my-0 max-w-xl py-20 lg:py-5 lg:mx-8">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About