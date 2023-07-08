import {
  Box
} from "@mui/material"
import * as gospel from "../images/"
import * as fun from "../images/"
import * as music from "../images/"
import * as coding from "../images/"
const Like:React.FC<{
  text:string,
  image:string
}> = ({image,text}):JSX.Element =>{
  
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const translateX = useTransform(scrollY, [0, 300], [-100, 0]);
  const translateY = useTransform(scrollY, [0, 300], [100, 0]);
  
return(
 
  )
}

const Likes = () =>{
  const likes:Array<{
    text:string,
    image:string
  }>= [
    { text:"movies",image:""},
    { text: "writing codes" ,image :""},
    { text:"Having Fun" , image:""}
    ]
  return(
    <Box className="page bg" id="likes">
      <motion.div
  initial={{ opacity: 0, scale: 0}}
  whileInView={{ opacity: 1,scale:1 }}
  exit ={{opacity: 0, scale: 0 }}
  transition={{ duration: 3, delay:0.5 }}
  >
  <Paper className="bg">
   <motion.img style={{translateX}} src={gospel} className="bg"/>
   <Typography  variant="body1">The Gospel of Christ</Typography>
  </Paper>
  </motion.div>
      <motion.div
  initial={{ opacity: 0, scale: 0}}
  whileInView={{ opacity: 1,scale:1 }}
  exit ={{opacity: 0, scale: 0 }}
  transition={{ duration: 3, delay:0.5 }}
  >
  <Paper className="bg">
   <motion.img style={{translateX}} src={gospel} className="bg"/>
   <Typography  variant="body1">The Gospel of Christ</Typography>
  </Paper>
  </motion.div>
      <motion.div
  initial={{ opacity: 0, scale: 0}}
  whileInView={{ opacity: 1,scale:1 }}
  exit ={{opacity: 0, scale: 0 }}
  transition={{ duration: 3, delay:0.5 }}
  >
  <Paper className="bg">
   <motion.img style={{translateX}} src={music} className="bg"/>
   <Typography  variant="body1">Music</Typography>
  </Paper>
  </motion.div>
      <motion.div
  initial={{ opacity: 0, scale: 0}}
  whileInView={{ opacity: 1,scale:1 }}
  exit ={{opacity: 0, scale: 0 }}
  transition={{ duration: 3, delay:0.5 }}
  >
  <Paper className="bg">
   <motion.img style={{translateX}} src={fun} className="bg"/>
   <Typography  variant="body1"> Having fun</Typography>
  </Paper>
  </motion.div>
  </motion.div>
      <motion.div
  initial={{ opacity: 0, scale: 0}}
  whileInView={{ opacity: 1,scale:1 }}
  exit ={{opacity: 0, scale: 0 }}
  transition={{ duration: 3, delay:0.5 }}
  >
  <Paper className="bg">
   <motion.img style={{translateX}} src={coding} className="bg"/>
   <Typography  variant="body1"> Coding</Typography>
  </Paper>
  </motion.div>
    </Box>
    )
}

export default Likes;