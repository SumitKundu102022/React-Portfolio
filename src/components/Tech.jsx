import { BiLogoPostgresql } from 'react-icons/bi';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiPostman } from 'react-icons/si';
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandNextjs } from 'react-icons/tb';
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";
import { TbBrandFramerMotion } from "react-icons/tb";


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" title='React' />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <TbBrandNextjs className="text-7xl" /> */}
          <TbBrandCpp className="text-7xl" title='C++'/>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" title='MongoDB'/>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-gray-400" title='Express'/>
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" title='Node.js' />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <GrMysql className="text-7xl text-blue-700" /> */}
          <TbBrandFramerMotion className="text-7xl text-rose-500"  title='Framer Motion'/>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostman className="text-7xl text-orange-500" title='Postman'/>
        </motion.div>
        
      </motion.div>
    </div>
  );
}

export default Tech