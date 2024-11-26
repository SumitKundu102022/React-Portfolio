import { CONTACT } from "../constants"
import { FaAddressBook } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <div className="m-8 flex items-center justify-center gap-4 text-lg cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <FaAddressBook className="text-xl" />
            </motion.div>
            {/* <MdOutlineMail /> */}
            {CONTACT.address}
          </div>
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 block"
          href="tel:"
        >
          <div className="m-8 flex items-center justify-center gap-4 text-lg cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <FaPhone className="text-xl" />
            </motion.div>

            {CONTACT.phoneNo}
          </div>
        </motion.a>
        <a href="mailto:" className="border-b">
          <div className="m-8 flex items-center justify-center gap-4 text-lg cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <MdEmail className="text-2xl" />
            </motion.div>

            {CONTACT.email}
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact