import { Box, TextField, Grid, Typography, Chip, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

export const Artists = () => {
  const [artists, setArtists] = useState<string[]>([]);
  const [newArtist, setNewArtist] = useState("");

  const handleAddArtist = () => {
    if (newArtist.trim()) {
      setArtists([...artists, newArtist.trim()]);
      setNewArtist("");
    }
  };

  const handleDeleteArtist = (artistToDelete: string) => {
    setArtists(artists.filter((artist) => artist !== artistToDelete));
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={3}>
        {/* Artists Section */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2, mt: 2 }}>
            Artists/Performers
          </Typography>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              <TextField
                label="Add Artist"
                variant="outlined"
                value={newArtist}
                onChange={(e) => setNewArtist(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddArtist();
                  }
                }}
                sx={{ flexGrow: 1 }}
              />
              <Button
                variant="contained"
                onClick={handleAddArtist}
                startIcon={<AddIcon />}
              >
                Add
              </Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {artists.map((artist, index) => (
                <Chip
                  key={index}
                  label={artist}
                  onDelete={() => handleDeleteArtist(artist)}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Artists;
