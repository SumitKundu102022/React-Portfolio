import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/p_pic.png";
import { color, motion } from "framer-motion";
import { Toaster, toast } from "sonner";

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
            {/* <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span> */}
            <motion.span
              initial={{ opacity: 0, y: 20, backgroundPosition: "0% 50%" }}
              animate={{ opacity: 1, y: 0, backgroundPosition: "100% 50%" }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-[length:200%_200%] bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent"
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

            {/* Download Resume/CV Button */}
            <motion.a
              //href="https://drive.google.com/uc?export=download&id=1ZxGVEOGw-FY82le7WJu-56ZFpw8bq8LY"
              target="_blank"
              rel="noopener noreferrer"
              download
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px 5px rgba(156, 39, 176, 0.8)", // Purple glow
                background: "linear-gradient(to right, #6b46c1, #b83280)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-900 text-white rounded-full text-lg font-medium cursor-pointer"
              //  hover:from-purple-500 hover:to-pink-600 hover:scale-105 transform transition duration-300 ease-in-out
              //  shadow-md hover:shadow-lg hover:shadow-pink-400/50"
              onClick={() =>
                toast.error(
                  "Right now button is disabled, Please contact to the developer for more information.",
                  {
                    style: {
                      color: "red",
                    },
                  }
                )
              }
            >
              Download Resume/CV ↓
            </motion.a>
          </div>
        </div>

        {/* Right Side: Profile Picture */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
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
