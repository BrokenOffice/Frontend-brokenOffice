import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { DashboardAdmin } from "./Dashboard";


export const AdminHome = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  return (
    <Box className="header-container-home home-text">
      {user?.email && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5">{`Hey ${user.name} ${user.lastName}!`}</Typography>
          <DashboardAdmin />
        </Box>
      )}
    </Box>
  );
};