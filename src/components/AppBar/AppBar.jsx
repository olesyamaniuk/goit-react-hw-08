import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import { AppBar as MuiAppBar } from "@mui/material";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <MuiAppBar position="fixed" sx={{ width: "100%" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Navigation />
        </Box>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </MuiAppBar>
  );
}