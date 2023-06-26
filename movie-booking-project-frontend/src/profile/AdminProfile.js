import { Box } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { getAdminById } from "../api-helpers/api-helpers";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
const AdminProfile = () => {
  const [admin, setAdmin] = useState();
  useEffect(() => {
    getAdminById()
      .then((res) => setAdmin(res.admin))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box width={"100%"} display="flex" style={{
      backgroundImage:
        "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-literary-atmospheric-movie-market-banner-poster-image_188563.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh", // Set the minimum height to the full viewport height
    }}>
      <Fragment>
        {" "}
        {admin && (
          <Box
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
            width={"30%"}
            padding={3}
          >
            <AccountCircleIcon
              sx={{ fontSize: "10rem", textAlign: "center", ml: 3 }}
            />

            <Typography
              mt={1}
              padding={1}
              width={"auto"}
              bgcolor="purple"
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
            >
              Email: {admin.email}
            </Typography>
          </Box>
        )}
        {admin && admin.addedMovies.length > 0 && (
          <Box width={"70%"} display="flex" flexDirection={"column"}>
            <Typography
              marginTop={"50px"}
              marginBottom={"0px"}
              marginLeft={"150px"}
              variant="h5"
              padding={2}
              width="40%"
              border="100px"
              borderRadius="10px"
              bgcolor="blue"
              color="white"
              textAlign="center"
              fontStyle={"italic"}
            >
              ADDED MOVIES
            </Typography>
            <Box
              marginTop={"30px"}
              display="flex"
              flexDirection={"column"}
              width="80%"
            >
              <List>
                {admin.addedMovies.map((movie, index) => (
                  <ListItem
                    sx={{
                      bgcolor: "#00d386",
                      color: "white",
                      textAlign: "center",
                      margin: 1,
                    }}
                  >
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Movie: {movie.title}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        )}
      </Fragment>
    </Box>
  );
};

export default AdminProfile;
