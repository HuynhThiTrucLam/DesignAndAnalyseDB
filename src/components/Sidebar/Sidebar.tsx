import React from "react";
import { useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { SidebarWidth } from "../../assets/global/Theme-variable";
import LogoIcon from "../../assets/images/logo.png";
import Menuitems from "./data";
import Buynow from "./Buynow";

// Type for the component's props
interface SidebarProps {
  isSidebarOpen: boolean; // Sidebar open state for larger screens
  isMobileSidebarOpen: boolean; // Sidebar open state for mobile screens
  onSidebarClose: () => void; // Callback to close the mobile sidebar
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const [open, setOpen] = React.useState<number | boolean>(true); // Manage sub-menu open state
  const { pathname } = useLocation(); // Get the current location (URL path)
  const pathDirect = pathname; // Current path for comparison
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg")); // Check for large screen size

  // Toggle the state of the menu item (used for collapsible menus if needed)
  const handleClick = (index: number) => {
    if (open === index) {
      setOpen((prevOpen) => !prevOpen); // Toggle the state if it's already open
    } else {
      setOpen(index); // Set to the index of the clicked item
    }
  };

  // Sidebar content JSX
  const SidebarContent = (
    <Box sx={{ p: 3, height: "calc(100vh - 40px)" }}>
      {/* Logo section */}
      <Link to="/admin">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={LogoIcon} alt="" />
        </Box>
      </Link>

      {/* Menu Items List */}
      <Box>
        <List sx={{ mt: 4 }}>
          {Menuitems.map((item, index) => {
            return (
              <List component="li" disablePadding key={item.title}>
                <ListItem
                  onClick={() => handleClick(index)}
                  component={NavLink}
                  to={item.href}
                  selected={pathDirect === item.href}
                  sx={{
                    mb: 1,
                    ...(pathDirect === item.href && {
                      color: "white",
                      backgroundColor: (theme) =>
                        `${theme.palette.primary.main}!important`,
                    }),
                  }}
                >
                  <ListItemIcon
                    sx={{
                      ...(pathDirect === item.href && { color: "white" }),
                    }}
                  >
                    {/* Dynamic icon */}
                    <item.icon width="20" height="20" />
                  </ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </ListItem>
              </List>
            );
          })}
        </List>
      </Box>

      {/* Buy Now Section */}
      <Buynow />
    </Box>
  );

  // Render the Sidebar based on screen size (lgUp: large screens use persistent, small screens use temporary)
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={props.isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: SidebarWidth, // Use the SidebarWidth variable from your theme
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose} // Close the sidebar when clicked outside
      PaperProps={{
        sx: {
          width: SidebarWidth,
        },
      }}
      variant="temporary" // Use temporary for mobile view
    >
      {SidebarContent}
    </Drawer>
  );
};

export default Sidebar;
