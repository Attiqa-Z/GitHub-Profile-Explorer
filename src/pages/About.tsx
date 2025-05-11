import { Avatar, Box, Button, Chip, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { pink } from "@mui/material/colors";

const About = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#2c2f48",
        color: "#fff",
        borderRadius: 2,
        maxWidth: 1000,
        margin: "0 auto",
        mt: 4,
      }}
    >
      {/* Top Section */}
      <Typography variant="body2" color="gray" sx={{ mb: 2 }}>
        BACK TO SEARCH
      </Typography>
      <Box display="flex" gap={4} flexWrap="wrap">
        {/* Avatar and Basic Info */}
        <Box>
          <Avatar
            src="https://avatars.githubusercontent.com/Attiqa-Z"
            alt="Attiqa Zaki"
            sx={{ width: 180, height: 180, borderRadius: 2 }}
          />
          <Typography variant="h5" sx={{ mt: 2 }}>
            Attiqa Zaki{" "}
            <Chip label="User" size="small" color="success" sx={{ ml: 1 }} />
          </Typography>
          <Typography color="gray">@Attiqa-Z</Typography>
        </Box>

        {/* GitHub Button and Bio */}
        <Box flex={1}>
          <Button
            variant="outlined"
            href="https://github.com/Attiqa-Z"
            target="_blank"
            rel="noreferrer"
            sx={{
              mb: 2,
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

          <Typography>
            Location: <strong>Pakistan</strong>
          </Typography>
          <Typography>
            Twitter: <strong>@AttiqaZaki</strong>
          </Typography>
        </Box>
      </Box>

      {/* Stats */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        mt={4}
        bgcolor="#1f2235"
        p={3}
        borderRadius={2}
      >
        <Stat label="Followers" value="10" icon={<PeopleIcon />} />
        <Stat label="Following" value="5" icon={<PeopleIcon />} />
        <Stat label="Public Repos" value="15" icon={<AccountTreeIcon />} />
        {/* <Stat label="Public Gists" value="2" icon={<StorefrontIcon />} /> */}
      </Box>
    </Box>
  );
};

const Stat = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => (
  <Box textAlign="center" mx={2}>
    <Typography variant="h6" sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
      {icon} {value}
    </Typography>
    <Typography variant="body2" color="gray">
      {label}
    </Typography>
  </Box>
);

export default About;
