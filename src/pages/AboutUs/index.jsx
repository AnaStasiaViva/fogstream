import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MapsNews from "../../components/Maps";

const googleMapsUrl = process.env.REACT_APP_GOOGLE_MAPS_URL;

function AboutUs(props) {
  return (
    <Paper
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", mt: 3 }}>
        Наши адреса
      </Typography>
      <Box sx={{ my: 5 }}>
        <MapsNews
          googleMapURL={googleMapsUrl}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `80vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Box>
    </Paper>
  );
}

export default AboutUs;
