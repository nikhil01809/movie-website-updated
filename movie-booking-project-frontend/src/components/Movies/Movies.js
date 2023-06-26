import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../api-helpers/api-helpers";
import MovieItem from "./MovieItem";

const Movies = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      margin="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-literary-atmospheric-movie-market-banner-poster-image_188563.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Set the minimum height to the full viewport height
      }}
    >
      <Typography
        marginTop={"50px"}
        marginBottom={"30px"}
        variant="h5"
        padding={2}
        width="40%"
        border="100px"
        borderRadius="10px"
        bgcolor="purple"
        color="white"
        textAlign="center"
        fontStyle={"italic"}
      >
        BOOK YOUR SHOW HERE
      </Typography>
      <Box
        width="100%"
        margin="auto"
        marginTop={0}
        display="flex"
        justifyContent="flex-start"
        flexWrap="wrap"
      >
        {movies &&
          movies.map((movie, index) => (
            <MovieItem
              key={index}
              id={movie._id}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              title={movie.title}
              showBookButton={true}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Movies;
