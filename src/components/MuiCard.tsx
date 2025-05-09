import {
  Avatar,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const MuiCard = ({
  user,
}: {
  user: { id: number; login: string; avatar_url: string;};
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/details/${user.login}`);
  };

  return (
    <Card
      sx={{
        width: 220,
        m: 1,
        height: 80,
        borderRadius: "12px",
        backgroundColor: "#eeeeee",
        position: "relative",
        p: 1,
        boxShadow: "none",
      }}
    >
      <CardContent sx={{ p: 1, pb: "8px !important" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          <Avatar
            src={user.avatar_url}
            alt={user.login}
            sx={{
              width: 36,
              height: 36,
            }}
          />
          <Typography variant="body2" noWrap fontWeight="normal" color="black">
            {user.login}
          </Typography>
        </Box>

        <Box sx={{ mt: 1.5, textAlign: "left" }}>
          <Button
            size="small"
            variant="text"
            onClick={handleButtonClick}
            sx={{
              color: "black",
              fontSize: "0.75rem",
              textTransform: "none",
              padding: 0,
              minWidth: 0,
            }}
          >
            View Profile
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MuiCard;