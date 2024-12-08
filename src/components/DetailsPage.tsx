import { Avatar, Stack, Typography } from "@mui/material";
import Cards from "./Cards";
const DetailsPage = () => {


  return (
    <div>
      <Stack
        sx={{
          position: "absolute",
          top: "100px",
          left: "10px",
          variant: "contained",
        }}
      >
        <Avatar src="/My.image.jpeg" alt="Myimage" />
      </Stack>
      <Typography
        gutterBottom
        variant="h6"
        color="black"
        component="div"
        sx={{
          position: "absolute",
          top: "100px",
          left: "60px",
        }}
      >
        Attiqa Zaki
      </Typography>
      <Typography
        variant="body1"
        color="black"
        sx={{
          position: "absolute",
          top: "130px",
          left: "60px",
        }}
      >
        The number of Repositories is 30.
      </Typography>

      <>
        {" "}
        <Cards />
        <Cards />
        <Cards />
      </>
      {/* <><Card/>{id}</> */}
      {/* You can fetch or display more details for this specific ID */}
    </div>
  );
};

export default DetailsPage;
