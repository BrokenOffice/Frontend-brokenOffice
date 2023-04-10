import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { DashboardUser } from "./Dashboard";

export const UserHome = () => {
  const user = useSelector((state) => state.user);

  return (
    <Box className="header-container-home home-text">
      {user?.email && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{fontWeight: '600'}}>{`Hey ${user.name} ${user.lastName}!`}</Typography>
          <DashboardUser />
        </Box>
      )}
    </Box>
  );
};
