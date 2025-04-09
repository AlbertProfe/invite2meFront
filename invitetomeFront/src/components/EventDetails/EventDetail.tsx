import { useState } from "react";
import {
  Box,
  Drawer,
  Stepper,
  Step,
  StepLabel,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { EventDetailProvider } from "./EventContext/EventDetailContext";

// Import step components
import GeneralInfo from "./Steps/GeneralInfo";
import Calendar from "./Steps/Calendar";
import Quotas from "./Steps/Quotas";
import Bundles from "./Steps/Bundles";
import Contacts from "./Steps/Contacts";
import Template from "./Steps/Template";
import Analytics from "./Steps/Analytics";
import Artists from "./Steps/Artists";

const steps = [
  "General Information",
  "Date & Time",
  "Artists/Performers",
  "Invitation Quotas",
  "Sponsor Bundles",
  "Guest Management",
  "Email Template",
  "Analytics & Send",
];

const drawerWidth = 340;

export const EventDetail = () => {
  const { id } = useParams();
  const [activeStep, setActiveStep] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const isNewEvent = !id;

  const handleStepClick = (step: number) => {
    setActiveStep(step);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f8fafc" }}>
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)`,
          transition: (theme) =>
            theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        {/* Toggle Drawer Button */}
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: "fixed",
            right: drawerOpen ? drawerWidth : 0,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "background.paper",
            borderRadius: "50% 0 0 50%",
            "&:hover": {
              bgcolor: "action.hover",
            },
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          {drawerOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
        
        
        {/* Content based on active step will be rendered here */}
        <EventDetailProvider id={id || ""}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 2,
              m: 2,
              bgcolor: "background.paper",
              minHeight: "calc(100vh - 32px)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
            }}
          >
            <Typography variant="h4" sx={{ mb: 3 }}>
              {isNewEvent ? "Create New Event" : "Edit Event"} -{" "}
              {steps[activeStep]}
            </Typography>

            {/* Render step content */}
            {activeStep === 0 && <GeneralInfo />}
            {activeStep === 1 && <Calendar />}
            {activeStep === 2 && <Artists />}
            {activeStep === 3 && <Quotas />}
            {activeStep === 4 && <Bundles />}
            {activeStep === 5 && <Contacts />}
            {activeStep === 6 && <Template />}
            {activeStep === 7 && <Analytics />}
          </Paper>
        </EventDetailProvider>
      </Box>

      {/* Stepper Drawer */}
      <Drawer
        variant="persistent"
        anchor="right"
        open={drawerOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
            bgcolor: "background.paper",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Event Setup Progress
          </Typography>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step
                key={label}
                onClick={() => handleStepClick(index)}
                sx={{ cursor: "pointer" }}
              >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Drawer>
    </Box>
  );
};

export default EventDetail;
