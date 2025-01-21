import React from 'react'
import logo from "../assets/sumitKunduLogo.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion";




const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-10" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <a
            href="https://www.linkedin.com/in/sumit-kundu-10b01d02"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <a href="https://github.com/SumitKundu102022" target="_blank">
            <FaGithub />
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <a href="https://x.com/sumit__Kundu" target="_blank">
            <FaSquareXTwitter />
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <a href="https://www.instagram.com/kitkat.o.sumit" target="_blank">
            <FaInstagram />
          </a>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar