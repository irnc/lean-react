import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import MenuDrawer from './MenuDrawer';

export default class Chrome extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggleDrawer = () => this.setState({open: !this.state.open});

  render() {
    const { children } = this.props;
    const menuButton = (
      <IconButton onTouchTap={this.handleToggleDrawer}>
        <NavigationMenu />
      </IconButton>
    );

    return (
      <div>
        <AppBar title="Prototype One" iconElementLeft={menuButton} />
        <MenuDrawer
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})} />
        {children}
      </div>
    );
  }
}
