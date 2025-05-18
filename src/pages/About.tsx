import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Link,
  Avatar,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "#1f2235", color: "#fff", px: 2 }}
      >
        <Card
          sx={{
            maxWidth: 700,
            width: "100%",
            borderRadius: 3,
            backgroundColor: "#2c2f48",
            color: "#fff",
            p: 4,
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
                src="https://avatars.githubusercontent.com/YOUR_GITHUB_USERNAME"
                sx={{ width: 100, height: 100 }}
              />
              <Typography variant="h4" gutterBottom>
                GitHub Profile Explorer
              </Typography>
              <Typography variant="body1" align="center">
                A React + MUI app to search GitHub profiles and view detailed
                user information including followers, repositories, and bio.
                Built with ❤️ by{" "}
                <Link
                  href="https://github.com/YOUR_GITHUB_USERNAME"
                  target="_blank"
                  rel="noreferrer"
                  underline="hover"
                  sx={{ color: pink[400], fontWeight: 600 }}
                >
                  Attiqa Zaki
                </Link>
                .
              </Typography>
              <Typography variant="body2" color="gray">
                Version: <span style={{ color: "#fff" }}>1.0.0</span>
              </Typography>
              <Typography variant="body2" color="gray">
                Inspired by:
                <Link
                  href="https://www.udemy.com/course/modern-react-front-to-back/"
                  target="_blank"
                  rel="noreferrer"
                  underline="hover"
                  sx={{ color: pink[300], ml: 1 }}
                >
                  React Front To Back (Udemy)
                </Link>
              </Typography>
              <Button
                variant="outlined"
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noreferrer"
                sx={{
                  mt: 2,
                  color: "#fff",
                  borderColor: "#fff",
                  "&:hover": {
                    borderColor: pink[500],
                    backgroundColor: pink[500],
                  },
                }}
              >
                Visit My GitHub
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default About;
