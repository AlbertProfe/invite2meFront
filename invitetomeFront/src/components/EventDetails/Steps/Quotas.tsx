import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Quota } from "../../../model/EventItemModel/Core";

const defaultQuotas: Quota[] = [
  {
    invitationType: "GENERAL",
    quotaQuantity: 0,
    color: "#2196f3",
    description: "Standard admission",
  },
  {
    invitationType: "VIP",
    quotaQuantity: 0,
    color: "#f50057",
    description: "VIP access and benefits",
  },
  {
    invitationType: "COMPROMIS",
    quotaQuantity: 0,
    color: "#9c27b0",
    description: "Reserved for partners",
  },
  {
    invitationType: "BACKSTAGE",
    quotaQuantity: 0,
    color: "#ff9800",
    description: "Backstage access",
  },
];

export const Quotas = () => {
  const [quotas, setQuotas] = useState<Quota[]>(defaultQuotas);
  const [totalInvitations, setTotalInvitations] = useState<number>(0);
  const [accordionExpanded, setAccordionExpanded] = useState<boolean>(false);
  const [newQuota, setNewQuota] = useState<Quota>({
    invitationType: "",
    quotaQuantity: 0,
    color: "#4caf50",
    description: "",
  });

  const handleQuotaChange = (invitationType: string, value: number) => {
    setQuotas(
      quotas.map((quota) =>
        quota.invitationType === invitationType
          ? { ...quota, quotaQuantity: value }
          : quota
      )
    );
  };

  const handleTotalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTotal = parseInt(event.target.value) || 0;
    setTotalInvitations(newTotal);
  };

  const getQuotasSum = () =>
    quotas.reduce((sum, quota) => sum + quota.quotaQuantity, 0);

  const getRemainingQuota = () => totalInvitations - getQuotasSum();

  const handleAccordionToggle = () => {
    setAccordionExpanded(!accordionExpanded);
  };

  const handleAddQuota = () => {
    if (newQuota.invitationType && newQuota.description) {
      setQuotas([...quotas, { ...newQuota }]);
      setNewQuota({
        invitationType: "",
        quotaQuantity: 0,
        color: "#4caf50",
        description: "",
      });
      setAccordionExpanded(false);
    }
  };

  const handleDeleteQuota = (invitationType: string) => {
    setQuotas(
      quotas.filter((quota) => quota.invitationType !== invitationType)
    );
  };

  const handleNewQuotaChange = (field: keyof Quota, value: string | number) => {
    setNewQuota({
      ...newQuota,
      [field]: value,
    });
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", pt: 2 }}>
      {/* Total Invitations Section */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Invitations Quota Target
        </Typography>
        <TextField
          type="number"
          label="Total Invitations"
          value={totalInvitations}
          onChange={handleTotalChange}
          fullWidth
          InputProps={{ inputProps: { min: 0 } }}
          helperText="Set the total number of invitations for this event"
        />
      </Paper>

      {/* Add New Quota Section */}

      <Box sx={{ mb: 4 }}>
        <Accordion
          expanded={accordionExpanded}
          onChange={handleAccordionToggle}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              "& .MuiAccordionSummary-content": {
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              },
            }}
          >
            <Typography variant="h6" gutterBottom>
              New Invitation Type
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={(e) => {
                e.stopPropagation();
                handleAccordionToggle();
              }}
              size="small"
            >
              {accordionExpanded ? "Cancel" : "Add invitation type"}
            </Button>
          </AccordionSummary>
          <AccordionDetails>
            {/* Add New Quota Form */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Invitation Type"
                  value={newQuota.invitationType}
                  onChange={(e) =>
                    handleNewQuotaChange("invitationType", e.target.value)
                  }
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Description"
                  value={newQuota.description}
                  onChange={(e) =>
                    handleNewQuotaChange("description", e.target.value)
                  }
                  fullWidth
                  required
                />
              </Grid>

              {/* Quota Quantity and Color in the same row */}
              <Grid item xs={6}>
                <TextField
                  type="number"
                  label="Quota Quantity"
                  value={newQuota.quotaQuantity}
                  onChange={(e) =>
                    handleNewQuotaChange(
                      "quotaQuantity",
                      parseInt(e.target.value) || 0
                    )
                  }
                  fullWidth
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Color"
                  value={newQuota.color}
                  InputProps={{
                    endAdornment: (
                      <input
                        type="color"
                        value={newQuota.color}
                        onChange={(e) =>
                          handleNewQuotaChange("color", e.target.value)
                        }
                        style={{
                          width: "30px",
                          height: "30px",
                          border: "none",
                        }}
                      />
                    ),
                  }}
                  onChange={(e) =>
                    handleNewQuotaChange("color", e.target.value)
                  }
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddQuota}
                  disabled={!newQuota.invitationType || !newQuota.description}
                >
                  Add Invitation Type
                </Button>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Quotas Distribution Section */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Invitation Types & Quotas
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {quotas.map((quota) => (
                <TableRow key={quota.invitationType}>
                  <TableCell>
                    <Chip
                      label={quota.invitationType}
                      sx={{
                        bgcolor: quota.color,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">{quota.description}</TableCell>
                  <TableCell align="right">
                    <TextField
                      type="number"
                      value={quota.quotaQuantity}
                      onChange={(e) =>
                        handleQuotaChange(
                          quota.invitationType,
                          parseInt(e.target.value) || 0
                        )
                      }
                      InputProps={{ inputProps: { min: 0 } }}
                      size="small"
                      sx={{ width: 100 }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => handleDeleteQuota(quota.invitationType)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Summary Section */}
        <Box
          sx={{ mt: 4, p: 2, bgcolor: "background.default", borderRadius: 1 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle2">Total Capacity</Typography>
              <Typography variant="h6">{totalInvitations}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle2">Allocated</Typography>
              <Typography
                variant="h6"
                color={getQuotasSum() > totalInvitations ? "error" : "inherit"}
              >
                {getQuotasSum()}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle2">Remaining</Typography>
              <Typography
                variant="h6"
                color={getRemainingQuota() < 0 ? "error" : "inherit"}
              >
                {getRemainingQuota()}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Quotas;
