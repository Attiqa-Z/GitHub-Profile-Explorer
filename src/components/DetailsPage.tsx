import {
  Avatar,
  Box,
  Button,
  Chip,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { pink } from "@mui/material/colors";

const DetailsPage = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (username) {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => {
          setUserData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    }
  }, [username]);

  if (loading) return <p>Loading...</p>;

  return (
    <Box width="100%" sx={{ mt: 4 }}>
      {/* Cover Section */}
      <Box
        sx={{
          maxWidth: 1000,
          backgroundColor: "#2c2f48",
          color: "#fff",
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Box display="flex" flexWrap="wrap" gap={4} alignItems="center">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src={userData?.avatar_url}
              alt={userData?.login}
              sx={{ width: 180, height: 180, borderRadius: 2 }}
            />
            <Button
              variant="outlined"
              href={`https://github.com/${username}`}
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
              VISIT GITHUB PROFILE
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate("/")}
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
              Back To Search
            </Button>
          </Box>

          {/* Right Side: Bio */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ mt: 0 }}>
              {userData?.name || userData?.login}
              <Chip label="User" size="small" color="success" sx={{ ml: 1 }} />
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {userData?.bio || "No bio available"}
            </Typography>
            <Typography variant="body2" color="white">
              Location: {userData?.location || "Not specified"}
            </Typography>
            <Typography variant="body2" color="white">
              Website: {userData?.blog ? userData.blog : "No Website"}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Stats Section */}
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={3}
        mt={4}
      >
        <StatCard
          label="Followers"
          value={userData?.followers}
          icon={<PeopleIcon />}
        />
        <StatCard
          label="Following"
          value={userData?.following}
          icon={<PeopleIcon />}
        />
        <StatCard
          label="Public Repos"
          value={userData?.public_repos}
          icon={<AccountTreeIcon />}
        />
      </Box>
    </Box>
  );
};

const StatCard = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) => (
  <Card
    sx={{
      minWidth: 200,
      textAlign: "center",
      backgroundColor: "#1f2235",
      color: "#fff",
      borderRadius: 2,
    }}
  >
    <CardContent>
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          mb: 1,
        }}
      >
        {icon} {value}
      </Typography>
      <Typography variant="body2" color="white">
        {label}
      </Typography>
    </CardContent>
  </Card>
);

export default DetailsPage;
