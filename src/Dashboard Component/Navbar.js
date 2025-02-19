import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Avatar } from "@mui/material";
import { Menu, Notifications, Language } from "@mui/icons-material";

const Navbar = ({ toggleSidebar }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#fff",
        p: 2,
        borderRadius: 2,
        mb: 2,
        boxShadow: 1,
      }}
    >
      {/* Left Section with Toggle Button */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton onClick={toggleSidebar}>
          <Menu />
        </IconButton>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#f8d7da",
            color: "#721c24",
            "&:hover": { bgcolor: "#f5c6cb" },
            borderRadius: 2,
            px: 2,
            minWidth: 130,
          }}
        >
          Clear Cache
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#e5e1fc",
            color: "#4c3dff",
            "&:hover": { bgcolor: "#d4caff" },
            borderRadius: 2,
            px: 2,
            minWidth: 180,
          }}
        >
          Activate Google Auth
        </Button>
      </Box>

      {/* Right Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Language />
        </IconButton>
        <Avatar sx={{ bgcolor: "#aaa" }}>A</Avatar>
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>super-admin</Typography>
          <Typography sx={{ fontSize: "12px", color: "#888" }}>admin</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
