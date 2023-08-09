import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import { logout } from "../Auth";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  const exit = () => {
    logout();
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 2 }}>
            About
          </Button>
          <Button
            variant="h6"
            component="div"
            onClick={exit}
            sx={{ flexGrow: 3 }}
          >
            Contact
          </Button>
          <AccountCircle />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
