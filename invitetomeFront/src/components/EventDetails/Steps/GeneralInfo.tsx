import { useState } from "react";
import { GeneralData } from "../../../model/EventDataModel/sortKeys/CoreData";
import {
  Box,
  TextField,
  Grid,
  Typography,
  Button,
  Autocomplete,
  Chip,
} from "@mui/material";
import { useEventDetailContext } from "../EventContext/EventDetailContext";

export const GeneralInfo = () => {
  const { currentEvent } = useEventDetailContext();

  const [generalInfoForm, setGeneralInfoForm] = useState<GeneralData>({
    ...currentEvent.core.generalData,
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGeneralInfoForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={3}>
        {/* Event Basic Info */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Basic Information
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            value={generalInfoForm.eventCode}
            fullWidth
            label="Event Code"
            variant="outlined"
            required
            onChange={handleOnChange}
            name="eventCode"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            value={generalInfoForm.name}
            fullWidth
            label="Event Name"
            variant="outlined"
            required
            onChange={handleOnChange}
            name="name"
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            multiple
            options={[]}
            freeSolo
            value={generalInfoForm.tags}
            onChange={(_event, newValue) => {
              setGeneralInfoForm((prevState) => ({
                ...prevState,
                tags: newValue,
              }));
            }}
            renderTags={(value: string[], getTagProps) =>
              value.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  sx={{
                    bgcolor: "#2196f3",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  key={option}
                  label={option}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tags"
                variant="outlined"
                placeholder="Add tags"
              />
            )}
          />
        </Grid>

        {/* Venue Information */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2, mt: 2 }}>
            Venue Details
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={generalInfoForm.venue}
            fullWidth
            label="Venue Name"
            variant="outlined"
            required
            onChange={handleOnChange}
            name="venue"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={generalInfoForm.city}
            fullWidth
            label="City"
            variant="outlined"
            type="text"
            required
            onChange={handleOnChange}
            name="city"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={generalInfoForm.address}
            fullWidth
            label="Address"
            variant="outlined"
            required
            multiline
            rows={2}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            multiple
            options={[]}
            freeSolo
            value={generalInfoForm.gates}
            onChange={(_event, newValue) => {
              setGeneralInfoForm((prevState) => ({
                ...prevState,
                gates: newValue,
              }));
            }}
            renderTags={(value: string[], getTagProps) =>
              value.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  sx={{
                    bgcolor: "#2196f3",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  key={option}
                  label={option}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Gates"
                variant="outlined"
                placeholder="Add gates"
              />
            )}
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
