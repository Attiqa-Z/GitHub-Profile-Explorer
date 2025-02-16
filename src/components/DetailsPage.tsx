import { Avatar, Stack, Typography, Card, CardContent, Box, Container } from "@mui/material";
import Cards from "./Cards";

const DetailsPage = () => {
  return (
    <Container maxWidth="md">
      {/* Profile Section */}
      <Card sx={{ p: 2, mt: 4, display: "flex", alignItems: "center", gap: 2, boxShadow: 3 }}>
        <Avatar src="/My.image.jpeg" alt="Myimage" sx={{ width: 56, height: 56 }} />
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Attiqa Zaki
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The number of Repositories is 40.
          </Typography>
        </Box>
      </Card>

      {/* Cards Section */}
      <Card sx={{ mt: 3, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" textAlign="center" fontWeight="bold">
            Projects
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
            <Cards />
            <Cards />
            <Cards />
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DetailsPage;
