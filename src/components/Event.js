import { Grid, Typography, Button, Box } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

function Event(props) {
  return (
    <div id="events">
      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        <Grid item xs={5}>
          IMAGE
        </Grid>
        <Grid item xs={7} justifyContent="left">
          <Box alignItems="left">
            <Typography variant="button">{props.date}</Typography>
            <Typography variant="h5">{props.title}</Typography>
            <Typography variant="subtitle1">{props.subtitle}</Typography>
            <Box display="flex" sx={{ marginTop: 1 }}>
              <Typography variant="h6">
                <PlaceIcon sx={{ marginRight: 1, marginBottom: "-5px" }} />
                {props.location}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              disableElevation
              href={props.link}
              sx={{ marginTop: 2, marginBottom: 5 }}
            >
              View Event Page
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Event;
