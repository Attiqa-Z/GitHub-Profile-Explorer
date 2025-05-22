import {
  Box,
  Typography,
  Card,
  CardContent,
  Link,
  Avatar,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <Box>
      <Navbar onSearch={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <Card
        sx={{
          maxWidth: 700,
          width: "100%",
          borderRadius: 3,
          backgroundColor: "#2c2f48",
          color: "#fff",
          p: 3,
          margin: "20px",
        }}
        elevation={6}
      >
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
            <Avatar
              alt="Attiqa Zaki"
              src="https://avatars.githubusercontent.com/Attiqa-Z"
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h3" gutterBottom>
              <img
                src="/images.png"
                alt="Logo"
                style={{ height: "40px", width: "40px", margin:"2px" }}
              />
              GitHub Profile Explorer
            </Typography>
            <Typography variant="body1" align="center">
              A React + MUI app to search GitHub profiles and view detailed user
              information including followers, repositories, and bio. Built with
              ❤️ by{" "}
              <Link
                href="https://github.com/Attiqa-Z"
                target="_blank"
                rel="noreferrer"
                underline="hover"
                sx={{ color: pink[400], fontWeight: 600 }}
              >
                Attiqa Zaki
              </Link>
              .
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Footer />
    </Box>
  );
};

export default About;
