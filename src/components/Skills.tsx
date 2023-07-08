import React from 'react';
import { List, ListItemButton, ListItem, ListItemText,Typography } from '@mui/material';
import { motion } from "framer-motion"
const Skills = () => {
  const skills:Array<string>= [
    'HTML5',
    'CSS',
    'SASS',
    'TailwindCss',
    'JavaScript',
    'TypeScript',
    'Reactjs',
    'Material UI',
    'React Redux',
    'Webpack',
    'Pug',
    'Expressjs',
    'Nodejs',
    'Graphql',
  ];

  return (
    <List className="page bg" id="skills">
    
      <Typography variant="h4" className="font"> My Skills</Typography>
      {skills.map((item) => (
        <ListItem key={item} disablePadding>
        <motion.div
        initial={{ opacity: 0, translateY: 100}}
        whileInView={{ opacity: 1,translateY:0 }}
       exit ={{opacity: 0, translateY: 100 }}
       transition={{ duration: 3, delay:0.5 }}
        >
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={item} />
          </ListItemButton>
          </motion.div>
        </ListItem>
      ))}
    </List>
  );
};

export default Skills;
