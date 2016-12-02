import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const MenuDrawer = ({ open, onRequestChange }) => (
  <Drawer open={open} docked={false} onRequestChange={onRequestChange}>
    <MenuItem>Menu Item</MenuItem>
    <MenuItem>Menu Item 2</MenuItem>
  </Drawer>
);

export default MenuDrawer;
