import { Container, Typography, Box, Divider } from "@mui/material";
import Event from "./Event.js";

function Events() {
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: 500, marginBottom: 3, marginTop: 3 }}>
        <Typography variant="h3"></Typography>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 800 }}>
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h5">Upcoming Events</Typography>
        </Box>
        <Divider />
        <Event
          title="BV Bite-Sized"
          subtitle=""
          date="04.11.2024"
          location="TBD"
          link="/"
        />
        <Divider />
        <Event
          title="Rainbow Solstice"
          subtitle="South Philly's Pride Festival"
          date="06.22.2024"
          location="700 Block of Catherine St."
          link="/"
        />
      </Box>
    </Container>
  );
}

export default Events;
