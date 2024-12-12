import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const MuiCard = ({ user }: { user: { id: number; login: string; avatar_url: string; repositories: number } }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/details/${user.id}`);
  };

  return (
    <Box width="300px" sx={{ border: 1, margin: "10px" }}>
      <Card>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ padding: 2 }}>
          <Avatar src={user.avatar_url} alt={user.login} />
          <Typography variant="h6">{user.login}</Typography>
        </Stack>
        <CardContent>
          <Typography variant="body2">
            Number of Repositories: {user.repositories}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" variant="contained" onClick={handleButtonClick}>
            View Profile
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
