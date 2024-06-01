import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <Box
        sx={{
          mr: 3,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "white",
          textDecoration: "none",
          fontSize: "1.5rem",
        }}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <NavLink to="/">
            Home
          </NavLink>
          {isLoggedIn ? (
            <NavLink to="/contacts">
              Contacts
            </NavLink>
          ) : (
            <Tooltip title="You need to log in to access Contacts">
              <span>Contacts</span>
            </Tooltip>
          )}
        </Stack>
      </Box>
    </nav>
  );
}