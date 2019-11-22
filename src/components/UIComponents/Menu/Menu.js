import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} style ={{color:'white' ,  fontFamily: ['"RRPioneer-Medium"']}}>
        Open Tools<span style={{marginTop:'5px'}}><ArrowDropDownIcon /></span>
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        style ={{top:'50px'}}
      >
        <MenuItem onClick={handleClose} style= {{fontFamily :['"RRPioneer-Regular"']}}>TimeSheet</MenuItem>
        <MenuItem onClick={handleClose} style= {{fontFamily :['"RRPioneer-Regular"']}}>SQCDP</MenuItem>
        <MenuItem onClick={handleClose} style= {{fontFamily :['"RRPioneer-Regular"']}}>Digital Wall</MenuItem>
      </Menu>
    </div>
  );
}
