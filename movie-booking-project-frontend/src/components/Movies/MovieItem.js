import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieItem = ({ title, releaseDate, posterUrl, id, showBookButton }) => {
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);

  const handleBookButtonClick = (e) => {
    // Prevents the default navigation behavior

    if (isUserLoggedIn) {
      // Proceed with booking
      console.log("Booking movie:", id);
    } else if (isAdminLoggedIn) {
      e.preventDefault();
      alert("Admins do not have the feature to book Show. Please log in as a Auth.");
    } else {
      e.preventDefault();
      alert("Please log in as a Auth to book."); // Show warning message
    }
  };

  return (
    <Card
      sx={{
        margin: 2,
        width: 250,
        height: 320,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <img height={"50%"} width="100%" src={posterUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      {showBookButton && (
        <CardActions>
          <Button
            variant="contained"
            fullWidth
            component={Link}
            to={`/booking/${id}`}
            sx={{
              margin: "auto",
              bgcolor: "#2b2d42",
              ":hover": {
                bgcolor: "#121217",
              },
            }}
            size="small"
            onClick={handleBookButtonClick}
          >
            Book
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default MovieItem;
