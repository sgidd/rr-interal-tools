import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FadeMenu from '../UIComponents/Menu/Menu';
import { Link } from 'react-router-dom';
import { getThemeProps } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  appBar :{
    backgroundColor:'#10069f'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: [
      '"RRPioneer-Bold"'
    ]
  },
  menuItem : {
    fontFamily: [
      '"RRPioneer-Regular"'
    ]
  },
}));

const  MenuAppBar = (props) => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>

      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            RR INTERNAL TOOL'S
          </Typography>
          <FadeMenu />
          {auth && (
            <div>
             
        
              
            
        
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              
              <SettingsIcon />
              </IconButton>
              
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorPosition={{ top: 606, left: 400 }}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
                style ={{top:'50px'}}
                className={classes.menuItem}
              >
                
                <MenuItem onClick={handleClose} className = {classes.menuItem}>Profile</MenuItem>
                <MenuItem onClick={handleClose} className = {classes.menuItem} >My account</MenuItem>
                <MenuItem onClick={handleClose} className = {classes.menuItem}>
                <Link to="/signin" style={{textDecoration:'none'}} onClick= {props.logout}>Logout</Link>
                </MenuItem>
              </Menu>
              
            </div>
          )}
        </Toolbar>
      </AppBar>
      
    </div>
  );
}

export default MenuAppBar;