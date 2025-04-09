import { Box, TextField, Grid, Typography, Button } from "@mui/material";
import { useEventDetailContext } from "../EventContext/EventDetailContext";

export const GeneralInfo = () => {
  
  const { currentEvent } = useEventDetailContext();
  
  console.log(currentEvent);

  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={3}>
        {/* Event Basic Info */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Basic Information
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField value={currentEvent.core.generalData.name || ""} fullWidth label="Event Name" variant="outlined" required />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Event Tag"
            variant="outlined"
            helperText="Short identifier for your event"
          />
        </Grid>

        {/* Venue Information */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2, mt: 2 }}>
            Venue Details
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Venue Name" variant="outlined" required />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Phone" variant="outlined" type="tel" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            variant="outlined"
            required
            multiline
            rows={2}
          />
        </Grid>
        {/* Event Logo Upload */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2, mt: 2 }}>
            Event Logo
          </Typography>
          <Button variant="outlined" component="label" sx={{ mt: 1 }}>
            Upload Logo
            <input type="file" hidden accept="image/*" />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GeneralInfo;
