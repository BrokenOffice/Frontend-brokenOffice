import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import {  DashboardUser } from "./Dashboard";

export const UserHome = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  return (
    <Box className="header-container-home home-text">
      {user?.email ? (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5">{`Hey ${user.name} ${user.lastName}!`}</Typography>
          <DashboardUser />
        </Box>
      ) : (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h3">Hey Glober!</Typography>
          <Typography variant="h6">
            Looks like you are not signed in...
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: 20, mt: 3}}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Box>
      )}
    </Box>
  );
};