import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

export default function ExerciseCard({
  id,
  gifUrl,
  name,
  bodyPart,
  equipment,
  addToFavorites,
  isAddedFavorite,
}) {
  return (
    <Card sx={{ maxWidth: 345 }} className="exercise-item">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={gifUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>BodyPart: {bodyPart}</p>
            <p>Equipment: {equipment}</p>
            <Button
              variant="secondary"
              className="add-to-favorites"
              onClick={() => addToFavorites({ id, bodyPart, equipment })}
            >
              {isAddedFavorite
                ? "Already added to favorites"
                : "Add to Favorites"}
            </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
