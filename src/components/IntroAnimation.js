"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroAnimation({ onComplete }) {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setShowLogo(true), 5500); // Show logo
    const redirectTimer = setTimeout(() => onComplete(), 7500); // Hide animation after 7.5s

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(redirectTimer);
    };
  }, [onComplete]);

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100 text-white"
      style={{ backgroundColor: "#01356d" }}
    >
      {!showLogo ? (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.8, delay: 4 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="fw-bold display-4 text-white"
          >
            Fact and Figure
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.2, delay: 2 }}
            className="fs-4 mt-3 text-white"
          >
            Business with no complaints
          </motion.h2>
        </motion.div>
      ) : (
        <motion.img
          src="/img/logo-2.png" // Adjust the path if needed
          alt="Logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="img-fluid"
          style={{ maxWidth: "250px" }} // Adjust size using Bootstrap utilities
        />
      )}
    </div>
  );
}
