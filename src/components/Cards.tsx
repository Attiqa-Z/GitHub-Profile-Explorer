import { Box, Card, CardContent, Typography } from "@mui/material";

const Cards = () => {

  return (
          <Box width="auto" height='auto' sx={{ border: 2, display: "block"  }}>
          <Box width="600px" height='100px' sx={{ border: 2, margin: "10px" }}>
        <Card sx={{ position: "relative", height:'100px' }}>
          <CardContent >
            <Typography
              gutterBottom
              component="div"
              sx={{
                position: "absolute",
                top: "10px",
                left: "60px",
                height:'100px'
              }}
            >
            
            </Typography>
          </CardContent>
        </Card>
      </Box>
      </Box>
  );
};

export default Cards;
