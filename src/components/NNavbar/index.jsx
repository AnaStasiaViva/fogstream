import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ThemeSwitcher from "../ThemeSwitcher";
import { CustomLink } from "./CustomLink";
import { useTheme } from "@mui/material/styles";
import { settings } from "../../utils/data";
import Settings from "../Settings/index";

const NNavbar = ({ ...props }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ border: "1px solid white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          ></Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {settings?.map((page) => (
                <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                  <CustomLink
                    theme={theme.palette.mode}
                    setActiveUnderline={false}
                    switchDefault={true}
                    to={page.link}
                  >
                    <div style={{ display: "flex" }}>
                      <page.icon size={12} sx={{ pr: 1 }} /> {page.name}
                    </div>
                  </CustomLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {settings?.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <CustomLink
                  switchDefault={false}
                  theme={theme.palette.mode}
                  to={page.link}
                  setActiveUnderline={false}
                >
                  {page.name}
                </CustomLink>
              </Button>
            ))}
          </Box>
          <ThemeSwitcher />
          <Settings />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NNavbar;
