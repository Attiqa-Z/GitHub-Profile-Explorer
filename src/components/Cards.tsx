import { Box, Card, CardContent, Typography } from "@mui/material";

const Cards = () => {

  return (
          <Box width="auto" height='auto' sx={{ border: 1, display: "block"  }}>
          <Box width="600px" height='100px' sx={{ border: 1, margin: "10px" }}>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              tempora fuga quod temporibus, eos vel quas eaque at doloremque
              quisquam, repudiandae vitae?
            </Typography>
          </CardContent>
        </Card>
      </Box>
      </Box>
  );
};

export default Cards;
