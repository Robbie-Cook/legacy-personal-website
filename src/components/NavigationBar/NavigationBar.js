import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Link} from 'react-router-dom'


class NavigationBar extends React.Component {

  // Generate the links to other pages
  // passed in via props.pages
  generateNavItems() {
    let array = []
    for( let item of this.props.pages ) {
      array.push(<Tab label={item.name} to={item.path} component={Link} />)
    }
    return array;
  };

  render() {

    return (
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Tabs>
              {this.generateNavItems()}
            </Tabs>
          </Toolbar>
        </AppBar>
    );
  }
}

export default (NavigationBar);
