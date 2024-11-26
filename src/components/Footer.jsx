import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.left}>
          <p style={styles.copyright}>
            &copy; {new Date().getFullYear()} @sumitkundu. All rights reserved.
          </p>
          <p style={styles.tagline}>Making ideas come to life.</p>
        </div>
        <div style={styles.right}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            href="https://www.linkedin.com/in/sumit-kundu-10b01d02/"
            style={styles.icon}
            target="_blank"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            href="https://www.twitter.com"
            style={styles.icon}
            target="_blank"
          >
            <FaSquareXTwitter />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            href="https://www.instagram.com"
            style={styles.icon}
            target="_blank"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "transparent",
    padding: "10px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  copyright: {
    fontSize: "14px",
    color: "#888",
    marginBottom: "5px",
  },
  tagline: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  icon: {
    fontSize: "24px",
    color: "#ffffff",
    marginLeft: "10px",
  },
};

export default Footer;
