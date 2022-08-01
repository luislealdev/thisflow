// import { Link as RouterLink } from "react-router-dom";
// import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
// import { LogoutOutlined, MenuOutlined} from "@mui/icons-material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
// import { useDispatch } from "react-redux";
// import { logout } from "../../store/auth/authSlice";
// import { startLogoutFirebase } from "../../store/auth";

// export const NavBar = ({ drawerWidth = 0 }) => {
//   return (
//     <AppBar
//       position="fixed"
//       // sx={{
//       //   width: { sm: `calc(100% - ${drawerWidth}px)` },
//       //   ml: { sm: `${drawerWidth}px` },
//       // }}
//     >
//       <Toolbar>
//         {/* <IconButton
//           color="inherit"
//           edge="start"
//           sx={{ mr: 2, display: { sm: "none" } }}
//         >
//           <MenuOutlined />
//         </IconButton> */}

//         <Grid
//           container
//           direction="row"
//           justifyContent="space-between"
//           alignItems="center"
//         >
//           <Typography variant="h6" noWrap component="div">
//             THIS FLOW
//               <LocalFireDepartmentIcon />
//           </Typography>

//           <Typography variant="p" component="div">
//             Login
//           </Typography>

//         </Grid>
//       </Toolbar>
//     </AppBar>
//   );
// };

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home', 'About', 'Donations'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalFireDepartmentIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            THIS FLOW
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalFireDepartmentIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            THIS FLOW
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
           <Typography>
            Login
           </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};