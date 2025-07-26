// import React from 'react'
// import logo from "../assets/sumitKunduLogo.png";
// import { FaLinkedin } from 'react-icons/fa';
// import { FaGithub } from 'react-icons/fa';
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from 'react-icons/fa';
// import { motion } from "framer-motion";




// const Navbar = () => {
//   return (
//     <nav className="mb-20 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <img src={logo} alt="logo" className="mx-2 w-10" />
//       </div>

//       <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
//         <motion.div
//           whileHover={{ scale: 1.2 }}
//           onHoverStart={(e) => {}}
//           onHoverEnd={(e) => {}}
//         >
//           <a
//             href="https://www.linkedin.com/in/sumit-kundu-10b01d02"
//             target="_blank"
//           >
//             <FaLinkedin />
//           </a>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.2 }}
//           onHoverStart={(e) => {}}
//           onHoverEnd={(e) => {}}
//         >
//           <a href="https://github.com/SumitKundu102022" target="_blank">
//             <FaGithub />
//           </a>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.2 }}
//           onHoverStart={(e) => {}}
//           onHoverEnd={(e) => {}}
//         >
//           <a href="https://x.com/sumit__Kundu" target="_blank">
//             <FaSquareXTwitter />
//           </a>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.2 }}
//           onHoverStart={(e) => {}}
//           onHoverEnd={(e) => {}}
//         >
//           <a href="https://www.instagram.com/kitkat.o.sumit" target="_blank">
//             <FaInstagram />
//           </a>
//         </motion.div>
//       </div>
//     </nav>
//   );
// }
// export default Navbar

import React, { useState } from "react";
import logo from "../assets/sumitKunduLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    // <motion.nav
    //   initial={{ y: -100, opacity: 0 }}
    //   animate={{ y: 0, opacity: 1 }}
    //   transition={{ duration: 0.6, ease: "easeOut" }}
    //   className=""
    // >
    <nav className="sticky top-0 z-50 shadow-md py-6 px-4 bg-gradient-to-t from-purple-600 to-transparent text-white animate-slide-down">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=""
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-10 mx-2" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-base font-medium text-white cursor-pointer">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:text-purple-400 transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4 text-2xl cursor-pointer">
            <motion.a
              href="https://www.linkedin.com/in/sumit-kundu-10b01d02"
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/SumitKundu102022"
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://x.com/sumit__Kundu"
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <FaSquareXTwitter />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/kitkat.o.sumit"
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram />
            </motion.a>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl focus:outline-none"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className=""
            >
              <div className="mt-4 flex flex-col items-center gap-4 text-white md:hidden">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-purple-400 transition"
                  >
                    {item.label}
                  </a>
                ))}

                {/* Mobile Social Icons */}
                <div className="flex items-center gap-4 text-xl mt-4">
                  <motion.a
                    href="https://www.linkedin.com/in/sumit-kundu-10b01d02"
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="https://github.com/SumitKundu102022"
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="https://x.com/sumit__Kundu"
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaSquareXTwitter />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/kitkat.o.sumit"
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaInstagram />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.nav>
    </nav>
  );
};

export default Navbar;
