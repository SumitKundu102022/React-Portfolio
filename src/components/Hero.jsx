import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/p_pic.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .5,
      delay: delay
    },
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 p-10">
      <div className="flex flex-wrap">
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sumit Kundu
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Side: Profile Picture */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .5, delay: 1.2 }}
            src={profilePic}
            alt="Sumit Kundu"
            className="object-cover rounded-lg shadow-lg max-w-[390px] sm:max-w-[370px] md:max-w-[350px] lg:max-w-[300px] xl:max-w-[350px] h-auto overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
