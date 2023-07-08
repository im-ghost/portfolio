import {
  Button,
  Typography,
  Box
} from "@mui/material";
import { useState } from "react";
import  Typed  from "react-typed";
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';

const Home = () => {
  const [complete, setComplete] = useState<boolean>(false);
const handlePermission = () =>{
  console.log(this);
}
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const translateY = useTransform(scrollY, [0, 300], [100, 0]);

  return (
    <Box id="#home" className="page bg">
      <motion.div
        className="animated-element"
        initial={{ opacity: 0, translateY: -100}}
        whileInView={{ opacity: 1,translateY:0 }}
        exit ={{opacity: 0, translateY: -100 }}
        transition={{ duration: 3, delay:0.5 }}
      >
        <Typography variant="h4">
          Hi, my name is
        </Typography>
        <Typography variant="h1">
         <Typed
      strings={[
            "Richard",
          ]}
          typeSpeed={150}
          loop
        />
        </Typography>
     
        <Button onClick={handlePermission}>
          <Typography variant="body1">
     
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                Let's make magic
              </motion.p>
            
          </Typography>
        </Button>
      </motion.div>
    </Box>
  );
};

export default Home;
