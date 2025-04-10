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
  const { currentEvent, dispatch } = useEventDetailContext();
  const [generalInfoForm, setGeneralInfoForm] = useState<GeneralData>({
    ...currentEvent.core.generalData,
  });
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
 

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: "GENERAL_DATA",
      payload: { ...generalInfoForm, [name]: value },
    });
  };

  const handleOnChangeTags = (newValue: string[], field : string) => {
    dispatch({
      type: "GENERAL_DATA",
      payload: { ...generalInfoForm, [field]: newValue },
    });
    setGeneralInfoForm((prevState) => ({
      ...prevState,
      [field]: newValue,
    }));
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setLogoPreview(result);
      };
      reader.readAsDataURL(file);
    }
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
            onChange={(_e, newValue) => handleOnChangeTags(newValue, "tags")}
            renderTags={(value: string[], getTagProps) =>
              value.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  sx={{
                    bgcolor: "#7799CC",
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
            onChange={(_event, newValue) => handleOnChangeTags(newValue, "gates")}
            renderTags={(value: string[], getTagProps) =>
              value.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  sx={{
                    bgcolor: "#7799CC",
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Button variant="outlined" component="label" sx={{ mt: 1 }}>
              Upload Logo
              <input type="file" hidden accept="image/*" onChange={handleLogoUpload} />
            </Button>
            
            {/* Logo Preview */}
            {logoPreview && (
              <Box 
                sx={{ 
                  mt: 1, 
                  width: 100, 
                  height: 100, 
                  borderRadius: 1, 
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={logoPreview} 
                  alt="Event Logo Preview" 
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GeneralInfo;
