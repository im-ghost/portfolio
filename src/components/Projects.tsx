import { Box,Typography } from "@mui/material";
import Project from "./Project";

const Projects = () =>{
  const projects:Array<{
    image:string | null,
    text:string,
    repo: string,
    live: string,
    name:string
  }> = [
    { image:null,text:"Library API is an api built using graphql and expressjs with graphical interface. It allows user perform CRUD operations.",repo:"https://github.com/im-ghost/library-app-api",live:"https://gli-api.herokuapp.com",name:"Library Api"},
    { image:null,text:"Quiz API is an api built using Jwt and expressjs with graphical interface. It allows user perform CRUD operations.",repo:"https://github.com/im-ghost/quiz-api",live:"https://quiz-app-api-nokp.onrender.com",name:"Quiz Api"},
    { image:null,text:"Media API is an api built using jwt and expressjs with graphical interface. It allows user perform CRUD operations.",repo:"https://github.com/im-ghost/media-api/tree/master",live:"https://media-app-api-a06z.onrender.com",name:"Media Api"},
    { image:"",text:"Quiz App is a vanila JavaScript project. It allows user to take quizzes on courses available.",repo:"https://github.com/im-ghost/",live:"https://peculiar-quiz-app.netlify.app/",name:"Quiz App"},
    { image:"",text:"This is my portfolio. It contains my skills and projects. it was built using reactjs ,Material Ui , tailwindcss, Typescript and Framer motons",repo:"https://github.com/im-ghost/portfolio",live:"",name:"My Portfolio"},
    ]
    return (
      <Box className="bg page">
      <Typography variant="h4" className="font"> My Works </Typography>
       {
         projects.map(project => <Project image={project.image} text={project.text} repo={project.repo} live={project.live} name={project.name}/>)
       }
      </Box>
      )
}

export default Projects;