import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, useTheme, Tooltip, Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import TemplateIcon from '@mui/icons-material/Description';
import MenuIcon from '@mui/icons-material/Menu';
import ContactsIcon from '@mui/icons-material/Contacts';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { useState } from 'react';

import Home from './pages/Home';
import Events from './pages/Events';
import Templates from './pages/Templates';
import EventDetail from './components/EventDetails/EventDetail';
import Contacts from './pages/Contacts';

import './App.css'

import { EventStorageProvider } from './components/EventDetails/EventContext/EventStorageContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#4f46e5',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

const DRAWER_WIDTH = 240;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDesktopDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const DrawerContent = () => {
    const location = useLocation();
    const theme = useTheme();

    const menuItems = [
      { text: 'Home', icon: <HomeIcon />, path: '/' },
      { text: 'Events', icon: <EventIcon />, path: '/events' },
      { text: 'Templates', icon: <TemplateIcon />, path: '/templates' },
      { text: 'Contacts', icon: <ContactsIcon />, path: '/contacts' },
    ];

    return (
      <Box sx={{ py: 2 }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          px: 2, 
          mb: 3,
          minHeight: 48,
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 1,
            overflow: 'hidden',
          }}>
            <MarkEmailReadIcon 
              sx={{ 
                fontSize: 32, 
                color: 'primary.main',
                transform: isDrawerOpen ? 'none' : 'scale(0.75)',
                transition: theme.transitions.create('transform'),
              }} 
            />
            {isDrawerOpen && (
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #2563eb 30%, #4f46e5 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  whiteSpace: 'nowrap',
                }}
              >
                Invite2Me
              </Typography>
            )}
          </Box>
          <IconButton 
            onClick={handleDesktopDrawerToggle} 
            sx={{ 
              display: { xs: 'none', sm: 'flex' },
              '&:hover': {
                backgroundColor: 'rgba(37, 99, 235, 0.08)',
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem
              component={Link}
              to={item.path}
              key={item.text}
              sx={{
                mx: 1,
                borderRadius: 2,
                mb: 1,
                backgroundColor: location.pathname === item.path ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                color: location.pathname === item.path ? theme.palette.primary.main : 'inherit',
                '&:hover': {
                  backgroundColor: 'rgba(37, 99, 235, 0.08)',
                },
                cursor: 'pointer',
                minHeight: 48,
                justifyContent: isDrawerOpen ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <Tooltip title={!isDrawerOpen ? item.text : ''} placement="right">
                <ListItemIcon 
                  sx={{ 
                    color: location.pathname === item.path ? theme.palette.primary.main : 'inherit',
                    minWidth: 0,
                    mr: isDrawerOpen ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              </Tooltip>
              {isDrawerOpen && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <EventStorageProvider>
          <Router>
              <Box sx={{ display: 'flex' }}>
                {/* Mobile menu button */}
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    mr: 2, 
                    display: { sm: 'none' }, 
                    position: 'fixed', 
                    top: 16, 
                    left: 16, 
                    zIndex: 1200,
                    bgcolor: 'white',
                    boxShadow: 1,
                    '&:hover': { bgcolor: 'white' }
                  }}
                >
                  <MenuIcon />
                </IconButton>

              {/* Desktop toggle button (when drawer is closed) */}
              {!isDrawerOpen && (
                <Tooltip title="Open menu" placement="right">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDesktopDrawerToggle}
                    sx={{ 
                      display: { xs: 'none', sm: 'flex' }, 
                      position: 'fixed',
                      top: 16,
                      left: 16,
                      zIndex: 1200,
                      bgcolor: 'white',
                      boxShadow: 1,
                      '&:hover': { bgcolor: 'white' }
                    }}
                  >
                    <MenuOpenIcon />
                  </IconButton>
                </Tooltip>
              )}

              {/* Mobile drawer */}
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
                }}
              >
                <DrawerContent />
              </Drawer>

              {/* Desktop drawer */}
              <Drawer
                variant="permanent"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: isDrawerOpen ? DRAWER_WIDTH : 73,
                    borderRight: '1px solid',
                    borderColor: 'divider',
                    transition: theme.transitions.create('width', {
                      easing: theme.transitions.easing.sharp,
                      duration: theme.transitions.duration.enteringScreen,
                    }),
                    overflowX: 'hidden',
                  },
                }}
                open={isDrawerOpen}
              >
                <DrawerContent />
              </Drawer>

              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  width: { sm: `calc(100% - ${isDrawerOpen ? DRAWER_WIDTH : 73}px)` },
                  ml: { sm: `${isDrawerOpen ? DRAWER_WIDTH : 73}px` },
                  transition: theme.transitions.create(['width', 'margin-left'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                  })
                }}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/templates" element={<Templates />} />
                  <Route path="/event/new" element={<EventDetail />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/event/:id" element={<EventDetail />} />
                </Routes>
              </Box>
            </Box>
          </Router>
      </EventStorageProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App
