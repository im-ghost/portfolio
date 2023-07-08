import { Typography,Box, Button, TextField,IconButton } from '@mui/material';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons"
 const Contact = () => {
  const [email,setEmail] = React.useState<string>("")
  const [name,setName] = React.useState<string>("")
  const [message,setMessage] = React.useState<string>("")
  const [res,setRes] = React.useState<string>("")
  const form = useRef();

  const create = (e:any) => {
    e.preventDefault();
  if(form.current && form.current !== undefined){
    emailjs.sendForm('richardadetonwa', 'template_richard', form.current as HTMLFormElement, 'kRvnH0UrtHrXcYeVo')
      .then((result:any) => {
        setMessage("")
        setName("")
        setEmail("")
        setRes("I have received your message ")
          console.log(result.text);
      }, (error:any) => {
          console.log(error.text);
      });
  }
  };
  return (
    <motion.div
    className="bg page"
    id="contact"
     initial={{ opacity: 0, translateY: -100}}
        whileInView={{ opacity: 1,translateY:0 }}
        exit ={{opacity: 0, translateY: -100 }}
        transition={{ duration: 3, delay:0.5 }}
    >
    <Typography variant="h4" className="font heading">Lets Work Together</Typography>
      <Box
          component="form"
          autoComplete="on"
          className="mu-2 bg"
          ref={form}
          onSubmit={create}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '69vw' },
          }}
        >
        
    <TextField
      id="name"
      label="name"
      name="user_name"
      placeholder="Your Name"
      className="bg"
      InputProps={{
        type: 'text',
        value: name,
        onChange: (e) => {
          setName(e.target.value);
        },
      }}
    />
    <TextField
      id="email"
      label="Email Address"
      name="user_email"
      placeholder="Your email address"
      className="bg"
      InputProps={{
        type: 'email',
        value: email,
        onChange: (e) => {
          setEmail(e.target.value);
        },
      }}
    />
    <TextField
      id="message"
      label="Message"
      name="message"
      placeholder="Your message"
      className="bg"
      InputProps={{
        type: 'text',
        value: message,
        onChange: (e) => {
          setMessage(e.target.value);
        },
      }}
    />
        </Box>
        <Button
          variant="contained"
          onClick={create}
        >
          <Typography variant="body1">Send</Typography>
         
        </Button>
         <Typography variant="h6">{res}</Typography>
    	<Box className="flex space-evenly bg w-screen h-36 m-2 justify-evenly">
			
						<SocialIcon url= "https://wa.me/+2349152694711?text=Hello%20Richard!%20I'm%20interested%20in%20working%20with%you." network="whatsapp"/>
						<SocialIcon	url= "mailto:culestfrosh@gmail.com?subject=I'd Love to Work with You!"/>
						<SocialIcon url= "https://www.linkedin.com/in/me/"/>
						<SocialIcon	url= "https://twitter.com/__richies__"/>
						<SocialIcon url= "https://github.com/im-ghost" />
					</Box>
					</motion.div>
  );
};
				


export default Contact
