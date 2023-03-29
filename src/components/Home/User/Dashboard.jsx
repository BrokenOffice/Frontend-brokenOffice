import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { muiDashboardHome } from "../../../utils/styleMUI";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import { ReportListHomeUser } from "./ReportListHome";
import HistoryIcon from '@mui/icons-material/History';

export const DashboardUser = () => {
  return (
    <Box sx={muiDashboardHome}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <BuildCircleIcon />
            <Typography gutterBottom variant="h5" component="div">
              New Ticket
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Report a problem with your office supplies
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, mt: '1rem' }}>
        <CardActionArea>
          <CardContent>
            <HistoryIcon />
            <Typography gutterBottom variant="h5" component="div">
              History
            </Typography>
            <ReportListHomeUser />
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
};
