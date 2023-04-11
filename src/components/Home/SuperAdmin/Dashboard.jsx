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
import BusinessIcon from "@mui/icons-material/Business";
import { Link } from "react-router-dom";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import checkType from "../../../utils/checkType";

export const DashboardSuperAdmin = () => {
  const navigate = useNavigate();
  const userType = useSelector(state => state.user.type)

  let num = checkType(userType)
  return (
    <Box sx={muiDashboardHome}>
      <Card
        sx={{ minWidth: 345, height: 155 }}
        onClick={() => navigate("/admin/offices")}
      >
        <CardActionArea>
          <CardContent>
            <BusinessIcon />
            <Typography gutterBottom variant="h5" component="div">
              Globant Offices
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {num === 66 ? 'Click here to view, create and delete offices':'Click here to view, edit, create and delete offices'}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>

      <Card
        sx={{ minWidth: 345, height: 155, mt: "1rem" }}
        onClick={() => navigate(`/${num === 66 ? "admin": "superadmin"}/users`)}
      >
        <CardActionArea>
          <CardContent>
            <PeopleAltIcon />
            <Typography gutterBottom variant="h5" component="div">
              Globant Users
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {num === 66 ? 'Click here to view, create and delete users':'Click here to view, edit, create and delete users'}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
};
