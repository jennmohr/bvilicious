import React from "react";
import { Container, Typography, Divider, Grid, Box } from "@mui/material";
import eventData from "../assets/eventsInfo.json";
import { useParams } from "react-router-dom";

function EventPage() {
  const params = useParams();
  const event = eventData[params.eventName];

  if (!event) {
    console.log(params);
    return <div>Event not found.</div>;
  }

  return (
    <Container>
      {/* Wide Image */}
      {event.imageUrl && (
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "auto",
          }}
          src={event.imageUrl}
          alt="Event Image"
        />
      )}

      {/* Header Title */}
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ marginTop: 5, fontWeight: 600 }}
      >
        {event.title}
      </Typography>

      {/* Divider */}
      <Divider sx={{ my: 2 }} />

      {/* Date */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: 4, marginTop: 5 }}
      >
        {event.date} {event.time}
      </Typography>

      {/* Description */}
      <Typography variant="h6" paragraph sx={{ marginBottom: 5 }}>
        {event.description}
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Two Columns: Venue and Google Maps */}
      <Grid container spacing={4}>
        {/* Venue Location */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            paddingRight: 1,
          }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              component="h2"
              sx={{ fontWeight: 600 }}
            >
              Venue:
            </Typography>
            <Typography variant="h6">{event.venue}</Typography>
          </Box>
          {event.note && (
            <Box>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{ fontWeight: 600 }}
              >
                Note:
              </Typography>
              <Typography variant="h6">{event.note}</Typography>
            </Box>
          )}
        </Grid>

        {/* Google Maps Integration */}
        <Grid item xs={12} md={6}>
          <Box
            component="iframe"
            src={event.googleMapsUrl}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            sx={{
              width: "100%",
              height: 300, // Adjust as needed
              border: 0,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default EventPage;
