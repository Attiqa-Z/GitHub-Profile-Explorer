import { Avatar, Stack, Typography, Card, CardContent } from "@mui/material";

const UserProfile = ({ userData }) => {
  if (!userData) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 5, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Stack spacing={2} sx={{ textAlign: "center" }}>
          <Avatar src={userData.avatar_url} alt={userData.login} sx={{ width: 100, height: 100, margin: "auto" }} />
          <Typography variant="h5">{userData.name || userData.login}</Typography>
          <Typography variant="body1">Bio: {userData.bio || "No bio available"}</Typography>
          <Typography variant="body1">Followers: {userData.followers}</Typography>
          <Typography variant="body1">Following: {userData.following}</Typography>
          <Typography variant="body1">Repositories: {userData.public_repos}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
