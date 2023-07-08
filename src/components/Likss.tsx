
import { Paper, Typography,Box } from "@mui/material"
import  React from "react"
 
import { motion } from "framer-motion"
import  gospel from "../images/gospel.jpeg"
import  fun from "../images/fun.jpeg"
import  music from "../images/music.jpeg"
import  coding from "../images/code.jpeg"

const Likes = () =>{
  return(
    <Box className="page bg" id="likes">
    <Typography variant="h4" className="font"> I like </Typography>
      <motion.div
  initial={{ opacity: 0, scale: 0}}
  whileInView={{ opacity: 1,scale:1 }}
  exit ={{opacity: 0, scale: 0 }}
  transition={{ duration: 3, delay:0.5 }}
  >
  <Paper className="bg rounded-[50%] min-h-36 w-[90vw] m-2 flex justiy-evenly items-center">
   <motion.img src={gospel} className="bg rounded-[50%] h-24 w-24 m-2"/>
   <Typography  variant="body1">The Gospel of Christ</Typography>
  </Paper>
  </motion.div>
      <motion.div
  initial={{ opacity: 0, scale: 0}}
  whileInView={{ opacity: 1,scale:1 }}
  exit ={{opacity: 0, scale: 0 }}
  transition={{ duration: 3, delay:0.5 }}
  >
  <Paper className="bg rounded-[50%] min-h-36 w-[90vw] m-2 flex justiy-evenly items-center p-2">
   <motion.img src={music} className="bg rounded-[50%] h-24 w-24 m-2"/>
   <Typography  variant="body1">Music</Typography>
  </Paper>
  </motion.div>
      <motion.div
  initial={{ opacity: 0, scale: 0}}
  whileInView={{ opacity: 1,scale:1 }}
  exit ={{opacity: 0, scale: 0 }}
  transition={{ duration: 3, delay:0.5 }}
  >
  <Paper className="bg rounded-[50%] min-h-36 w-[90vw] m-2 p-2 flex justiy-evenly items-center">
   <motion.img src={fun} className=" bg rounded-[50%] h-24 w-24 m-2"/>
   <Typography  variant="body1"> Having fun</Typography>
  </Paper>
  </motion.div>
      <motion.div
  initial={{ opacity: 0, scale: 0}}
  whileInView={{ opacity: 1,scale:1 }}
  exit ={{opacity: 0, scale: 0 }}
  transition={{ duration: 3, delay:0.5 }}
  >
  <Paper className="bg rounded-[50%] min-h-36 w-[90vw] m-2 flex justiy-evenly items-center p-2">
   <motion.img src={coding} className="bg rounded-[50%] h-24 w-24 m-2"/>
   <Typography  variant="body1"> Coding</Typography>
  </Paper>
  </motion.div>
    </Box>
    )
}

export default Likes;