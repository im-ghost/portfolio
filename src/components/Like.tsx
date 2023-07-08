import { Paper, Typography } from "@mui/material"
import * as React from "react"
 
import { motion,useViewportScroll, useTransform } from "framer-motion"
const Like:React.FC<{
  text:string,
  image:string
}> = ({image,text}):JSX.Element =>{
  
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const translateX = useTransform(scrollY, [0, 300], [-100, 0]);
  const translateY = useTransform(scrollY, [0, 300], [100, 0]);
  
return(
  <motion.div
  initial={{ opacity: 0, scale: 0}}
  whileInView={{ opacity: 1,scale:1 }}
  exit ={{opacity: 0, scale: 0 }}
  transition={{ duration: 3, delay:0.5 }}
  >
  <Paper>
   <motion.img style={{translateX}} src={image} className="bg"/>
   <Typography  variant="body1">{text}</Typography>
  </Paper>
  </motion.div>
  )
}

export default Like;