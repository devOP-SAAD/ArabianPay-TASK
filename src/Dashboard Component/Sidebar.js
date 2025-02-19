import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  InputBase,
  Typography,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Dashboard as DashboardIcon,
  AccountCircle,
  ShoppingCart,
  Category,
  Settings,
  Campaign ,
  Group as SuppliersIcon,
  AccountBalance as FinancialIcon, // Add Financial Icon
} from "@mui/icons-material";

const drawerWidth = 235;

const Sidebar = ({ isOpen }) => {
  const [openAccounts, setOpenAccounts] = useState(false);
  const [openFinancial, setOpenFinancial] = useState(false);

  const handleAccountsClick = () => {
    setOpenAccounts(!openAccounts);
  };

  const handleFinancialClick = () => {
    setOpenFinancial(!openFinancial);
  };

  return (
    <Drawer
      variant="persistent"
      open={isOpen}
      sx={{
        width: isOpen ? drawerWidth : 0,
        flexShrink: 0,
        transition: "width 0.3s",
        "& .MuiDrawer-paper": {
          width: isOpen ? drawerWidth : 0,
          boxSizing: "border-box",
          backgroundColor: "#111c44",
          color: "#fff",
          borderRight: "none",
          transition: "width 0.3s",
        },
      }}
    >
      {/* Sidebar Title */}
      <Box sx={{ textAlign: "center", py: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
          Arabian Pay
        </Typography>
      </Box>
      <Box sx={{ px: 2, pb: 2, display: "flex", alignItems: "center", gap: 1 }}>
      <InputBase
        placeholder="Search in menu"
        sx={{
          color: "#fff",
          flex: 1,
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "4px",
          px: 1,
          py: 0.5,
          fontSize: "14px",
        }}
      />
    </Box>
      <List>
        {/* Dashboard */}
        <ListItem component={NavLink} to="/" sx={{ color: "inherit", textDecoration: "none" }}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        {/* Accounts with Dropdown */}
        <ListItem button onClick={handleAccountsClick} sx={{ color: "inherit" }}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Accounts" />
          {openAccounts ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        {/* Submenu for Accounts */}
        <Collapse in={openAccounts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              component={NavLink}
              to="/accounts/suppliers"
              sx={{
                pl: 4,
                color: "inherit",
                textDecoration: "none",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <ListItemIcon sx={{ color: "#fff" }}>
                <SuppliersIcon />
              </ListItemIcon>
              <ListItemText primary="All Suppliers" />
            </ListItem>
          </List>
        </Collapse>

        {/* Financial Info with Dropdown */}
        <ListItem button onClick={handleFinancialClick} sx={{ color: "inherit" }}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <FinancialIcon />
          </ListItemIcon>
          <ListItemText primary="Financial" />
          {openFinancial ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        {/* Submenu for Financial Info */}
        <Collapse in={openFinancial} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              component={NavLink}
              to="/financial"
              sx={{
                pl: 4,
                color: "inherit",
                textDecoration: "none",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <ListItemIcon sx={{ color: "#fff" }}>
                <FinancialIcon />
              </ListItemIcon>
              <ListItemText primary="Financial Dashboard" />
            </ListItem>
          </List>
        </Collapse>

        {/* Products */}
        <ListItem component={NavLink} to="/products" sx={{ color: "inherit", textDecoration: "none" }}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <Category />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>

        {/* Orders */}
        <ListItem component={NavLink} to="/orders" sx={{ color: "inherit", textDecoration: "none" }}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>


 {/* Settings */}
 <ListItem  sx={{ color: "inherit", textDecoration: "none" }}>
 <ListItemIcon sx={{ color: "#fff" }}>
 <Campaign />
 </ListItemIcon>
 <ListItemText primary="Marketing" />
</ListItem>



        {/* Settings */}
        <ListItem component={NavLink} to="/settings" sx={{ color: "inherit", textDecoration: "none" }}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
