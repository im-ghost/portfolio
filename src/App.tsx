import Navbar from "./components/Navrbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Likes from "./components/Likss"
import Home from "./components/Home"
import { Box } from "@mui/material"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setShowButton(scrollTop > 300); // Show button when scrolled down 300px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box className="dark">
       <Navbar />
     <Home />
     <Projects />
     <Skills />
     <Likes />
     <Contact/>
      {showButton && (
        <motion.button
          className="back-to-top-button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          T
        </motion.button>
      )}
    </Box>
  );
};

export default App;
