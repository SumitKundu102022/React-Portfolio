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
          <FaLinkedin />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <FaGithub />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <FaSquareXTwitter />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <FaInstagram />
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar