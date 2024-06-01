import PageTitle from "../../components/PageTitle/PageTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import Typography from "@mui/material/Typography";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
export default function LoginPage() {
  return (
    <div>
      <Container component="main" maxWidth="xl">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            <PageTitle>Please log in</PageTitle>
          </Typography>

          <LoginForm />
        </Box>
      </Container>
    </div>
  );
}