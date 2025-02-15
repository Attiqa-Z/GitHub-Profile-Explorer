import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const MuiCard = ({
  user,
}: {
  user: { id: number; login: string; avatar_url: string; repositories: number };
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/details/${user.id}`);
  };

  return (
    <Card
      sx={{
        width: "350px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
            <CardHeader
        title={
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar
              src={user.avatar_url}
              alt={user.login}
              sx={{
                width: 50,
                height: 50,
                border: "2px solid black",
              }}
            />
            <Typography variant="h6" fontWeight="normal">
              {user.login}
            </Typography>
          </Stack>
        }
      />
      <CardContent sx={{ textAlign: "center", padding: "16px" }}>
        <Typography variant="body1" fontWeight="500">
          Number of Repositories:
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          sx={{ mt: 1 }}
        >
          {user.repositories}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", paddingBottom: "16px" }}>
        <Button
          size="medium"
          variant="contained"
          onClick={handleButtonClick}
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            fontWeight: "bold",
            borderRadius: "20px",
            px: 3,
            "&:hover": {
              backgroundColor: "#00bcd4",
            },
          }}
        >
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
};

export default MuiCard;