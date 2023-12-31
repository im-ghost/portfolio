import {
  Typography,
  AppBar,
  Box,
  CssBaseline,
  Divider,
  List,
  ListItemButton,
  ListItem,
  IconButton,
  ListItemText,
  Drawer,
  Toolbar,
} from "@mui/material";
import { NavHashLink } from "react-router-hash-link"
import * as React from "react"
const drawerWidth = 240;
const navItems = ['Home', 'Likes','Skills','Projects','Contact'];
const Navbar = (props:any):JSX.Element =>{
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div className="dark w-full h-screen m-0">
    <div onClick={handleDrawerToggle}  className="bg h-full text-center">
      <Typography variant="h6" sx={{ my: 2 }} className="bg font">
        Adetonwa Richard
      </Typography>
      <Divider />
      <List className="bg">
        {navItems.map((item) => (
          <ListItem key={item} disablePadding className="bg">
            <ListItemButton sx={{ textAlign: 'center' }} className="bg">
            <NavHashLink
  to={`#${item.toLowerCase()}`}
  className="[text-decoration:none]"
>
              <ListItemText className="bg" primary={item} />
</NavHashLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
    </div>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} className="bg dark">
      <CssBaseline />
      <AppBar component="nav" className="bg">
        <Toolbar className="bg">
          <IconButton
          className="bg"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            Menu
          </IconButton>
          <Typography
          className="bg"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Adetonwa Richard
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }} className="bg">
            {navItems.map((item) => (
              <div key={item} className="bg">
                {item}
              </div>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" className="bg m-0">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          className="bg"
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
export default Navbar;