import { Paper, Typography } from "@mui/material"
import * as React from "react"
import { motion,useViewportScroll, useTransform } from "framer-motion"
const Project:React.FC<{
  image:string | null,
  text:string,
  repo: string,
  live: string,
  name:string
}> = ({image,text,name,live,repo}):JSX.Element =>{
  return(
  <motion.div
  initial={{ opacity: 0, translateX: -100}}
  whileInView={{ opacity: 1,translateX:0 }}
  exit ={{opacity: 0, translateX: -100 }}
   transition={{ duration: 3, delay:0.5 }}
  >
  <Paper className="m-4 p-2 bg hover:shadow:3xl rounded-3xl w-[90%]">
  { image !== null &&  (<motion.img  src={image} className=""/>) }
   <Typography variant="h4">{name}</Typography>
   <Typography  variant="body1">{text}</Typography>
   <div className="flex p-2 justify-evenly">
    <Typography variant="body2"><a href={live} className="hover:shadow-xl p-2 rounded-xl">View Live</a></Typography>
    <Typography variant="body2"><a href={repo} className="hover:shadow-xl p-2 rounded-xl">View Repo</a></Typography>
   </div>
  </Paper>
  </motion.div>
  )
}

export default Project;