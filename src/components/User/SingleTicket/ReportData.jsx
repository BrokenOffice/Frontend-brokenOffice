import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Chat from "../../Chat";
import React from "react";

export const ReportData = ({ singleReport }) => {
  const imageSrc =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png";

  return (
    <div>
      {" "}
      <Grid
        container
        spacing={2}
        columns={16}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: { xs: "85%", sm: "80%" }, margin: "0 auto" }}
      >
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            alt="Input Image"
            src={singleReport.image ? singleReport?.image : imageSrc}
            sx={{ maxWidth: "100%" }}
          ></Box>
        </Grid>

        <Grid item xs={16} md={8}>
          <Divider></Divider>
          <List disablePadding>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="ID:" sx={{ maxWidth: "6rem" }} />
              <Typography
                variant="subtitle1"
                sx={{
                  wordWrap: "break-word",
                  maxWidth: { xs: "60%", sm: "80%" },
                }}
              >
                {singleReport?._id}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Title:" sx={{ maxWidth: "6rem" }} />
              <Typography
                variant="subtitle1"
                sx={{
                  wordWrap: "break-word",
                  maxWidth: { xs: "60%", sm: "80%" },
                  }}
              >
                {singleReport?.title}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Description:" sx={{ maxWidth: "6rem" }} />
              <Typography
                variant="subtitle1"
                sx={{
                  wordWrap: "break-word",
                  maxWidth: { xs: "60%", sm: "80%" },
                }}
              >
                {singleReport?.description}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Office:" sx={{ maxWidth: "6rem" }} />
              <Typography
                variant="subtitle1"
                sx={{
                  wordWrap: "break-word",
                  maxWidth: { xs: "60%", sm: "80%" },
                }}
              >
                {singleReport.office &&
                  `${singleReport?.office.address.street}, ${singleReport?.office.address.zip}, ${singleReport?.office.address.floor}, ${singleReport.office.name}`}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Status:" sx={{ maxWidth: "6rem" }} />
              <Typography variant="subtitle1">
                {singleReport?.status}
              </Typography>
            </ListItem>
            <Divider></Divider>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Product:" sx={{ maxWidth: "6rem" }} />
              <Typography variant="subtitle1">

                {singleReport?.product}
              </Typography>
            </ListItem>
            <Divider></Divider>
          </List>
          {singleReport._id && <Chat report={singleReport?._id} chatType={"issued"} />}
        </Grid>
      </Grid>
    </div>
  );
};
