import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";

import Button from "@mui/material/Button";
import "./Navbar.css";
import Filter from "../../Pages/FilterPage/Filter";

export default function NavDrawer({ newStyle }) {

  const [state, setState] = React.useState({
    bottom: false,
  });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <div id="NavMenu">
        {["bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} style={newStyle}>
              Filter
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
             
              >
                <Filter />
              </List>
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
