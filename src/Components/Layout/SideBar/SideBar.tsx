import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  CachedOutlined,
  DashboardOutlined,
  HowToRegOutlined,
  Inventory2Outlined,
} from "@mui/icons-material";
import hfactorLogo from "../../../Assets/logos/hfactor_white.png";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  backgroundColor: "#000000",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  backgroundColor: "#000000",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  backgroundColor: "#000000",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ open }) {
  const theme = useTheme();

  const menuArray = [
    {
      name: "Dashboard",
      path: "/assetManagerDashboard",
      icon: <DashboardOutlined />,
    },
    { name: "Approval Request", path: "/users", icon: <HowToRegOutlined /> },
    { name: "Assets Recovery", path: "/settings", icon: <CachedOutlined /> },
    { name: "Inventory", path: "/settings", icon: <Inventory2Outlined /> },
  ];

  return (
    <Drawer
      variant="permanent"
      open={open}
    >
      <DrawerHeader>
        <img
          src={hfactorLogo}
          className="App-logo"
          alt="logo"
          style={{ maxHeight: "70px", maxWidth: "230px" }}
        />
      </DrawerHeader>
      <Divider />
      <List>
        {menuArray.map((text, index) => (
          <ListItem
            key={text.name}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              href={text.path}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#ffff",
                }}
              >
                {text.icon}
              </ListItemIcon>
              <ListItemText
                primary={text.name}
                sx={{ opacity: open ? 1 : 0, color: "#ffff" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
