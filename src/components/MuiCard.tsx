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
  

const MuiCard = ({ id}:{id:number[]}) => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate(`/details/${id}`);
  };
  return (
    <Box width="500px"  sx={{ border: 1, margin: "10px" }}>
      <Card sx={{ position: 'relative' }}>
        <Stack sx={{
        position: "absolute",
        top: "10px", 
        left: "10px", 
      }}>
      <Avatar src="/My.image.jpeg" alt="Myimage" />
        </Stack>
        <CardContent>
          <Typography gutterBottom component="div" sx={{
        position: "absolute",
        top: "10px", 
        left: "60px", 
      }}>
            Attiqa Zaki
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{
         position: "relative",
         top: "20px", 
        left: "40px", 
      }}>
            The number of Repositories is 30.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" variant="contained" 
          onClick={() => handleButtonClick()}>
            GitHub
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
