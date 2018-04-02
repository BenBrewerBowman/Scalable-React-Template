import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

import Colors from 'app/styles/Colors';

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

const Header = () => (



  <div style={{ position: 'fixed', top: 0, zIndex: 2, width: "100%", backgroundColor: Colors.materialUIBlue }} >
    <AppBar
      title="Title"
      style={{color: 'black'}}
      titleStyle={{paddingLeft: 100, color: 'black'}}
      iconElementLeft={<IconButton><MenuIcon /></IconButton>}
      iconStyleLeft={{color: 'black'}}
      iconElementRight={<Logged />}
    />
  </div>
);

export default Header;
