import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";
import MovieItem from "./Movies/MovieItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      width="100%"
      height="100%"
      margin="auto"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-literary-atmospheric-movie-market-banner-poster-image_188563.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box margin="auto" width="120vh" height="70vh" padding={2}>
        <Slider
          dots={true}
          infinite={true}
          speed={1500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
        >
          <div>
            <img
              src="https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/04/25091717/heWitcherS3_keyart-700x380-1.jpg"
              alt="First Image"
              width="104%"
              height="100%"
            />
          </div>
          <div>
            <img
              src="https://wallpaperaccess.com/full/3950368.jpg"
              alt="Second Image"
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <img
              src="https://images.hdqwalls.com/wallpapers/justice-league-movie-new-poster-dh.jpg"
              alt="Third Image"
              width="100%"
              height="10%"
            />
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </Box>
      <Box padding={1} margin="auto">
        <Typography variant="h3" textAlign="center">
          LATEST RELEASE
        </Typography>
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "blue" }}
          bgcolor="purple"
        >
          CLICK HERE! TO BOOK 
        </Button>
      </Box>
      <Box
        margin="auto"
        display="flex"
        width="80%"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {movies &&
          movies.slice(0, 4).map((movie, index) => (
            <MovieItem
              id={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              key={index}
              showBookButton={false} // Hide book button on HomePage
            />
          ))}
      </Box>
    </Box>
  );
};

export default HomePage;
