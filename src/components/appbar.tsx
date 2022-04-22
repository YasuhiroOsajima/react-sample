import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { TemporaryDrawer } from "./drawer";

export const ButtonAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <TemporaryDrawer />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sample App
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};
