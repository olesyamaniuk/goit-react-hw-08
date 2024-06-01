import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";

export default function AuthNav() {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <NavLink to="/register">
        Register
      </NavLink>
      <NavLink to="/login">
        Log In
      </NavLink>
    </Stack>
  );
}