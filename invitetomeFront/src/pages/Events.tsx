import { Box, Container, Typography, Paper, Button, Tabs, Tab, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditIcon from '@mui/icons-material/Edit';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PaletteIcon from '@mui/icons-material/Palette';
import GroupsIcon from '@mui/icons-material/Groups';
import { useState } from 'react';
import { useEventStorageContext } from '../components/EventDetails/Context/EventStorageContext';
import { EventStatus } from '../model/EventDataModel/sortKeys/CoreData';

function parseDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}


const Events = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<EventStatus>('Active');
  const { events } = useEventStorageContext();

  console.log('Events:', events);

  const handleCreateEvent = () => {
    navigate('/event/new');
  };

  const handleEventClick = (eventId: string) => {
    navigate(`/event/${eventId}`);
  };

  const filteredEvents = events.filter(event => event.core.status === activeTab);

  return (
    <Box>
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                background: 'linear-gradient(45deg, #2563eb 30%, #4f46e5 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Your Events
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleCreateEvent}
              sx={{
                borderRadius: '50px',
                background: 'linear-gradient(45deg, #2563eb 30%, #4f46e5 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1d4ed8 30%, #4338ca 90%)',
                },
              }}
            >
              Create New Event
            </Button>
          </Box>

          {/* Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
            <Tabs 
              value={activeTab} 
              onChange={(_, newValue) => setActiveTab(newValue)}
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  minWidth: 120,
                  fontSize: '1rem',
                },
                '& .Mui-selected': {
                  color: '#2563eb !important',
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#2563eb',
                },
              }}
            >
              <Tab 
                label={(
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PlayArrowIcon sx={{ fontSize: 20 }} />
                    <span>Active</span>
                    <Chip 
                      label={events.filter(e => e.core.status === 'Active').length} 
                      size="small" 
                      sx={{ 
                        ml: 1, 
                        bgcolor: activeTab === 'Active' ? '#2563eb' : 'grey.200',
                        color: activeTab === 'Active' ? 'white' : 'text.secondary',
                      }} 
                    />
                  </Box>
                )} 
                value="Active" 
              />
              <Tab 
                label={(
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccessTimeIcon sx={{ fontSize: 20 }} />
                    <span>Upcoming</span>
                    <Chip 
                      label={events.filter(e => e.core.status === 'Upcoming').length} 
                      size="small" 
                      sx={{ 
                        ml: 1, 
                        bgcolor: activeTab === 'Upcoming' ? '#2563eb' : 'grey.200',
                        color: activeTab === 'Upcoming' ? 'white' : 'text.secondary',
                      }} 
                    />
                  </Box>
                )} 
                value="Upcoming" 
              />
              <Tab 
                label={(
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EditIcon sx={{ fontSize: 20 }} />
                    <span>Draft</span>
                    <Chip 
                      label={events.filter(e => e.core.status === 'Draft').length} 
                      size="small" 
                      sx={{ 
                        ml: 1, 
                        bgcolor: activeTab === 'Draft' ? '#2563eb' : 'grey.200',
                        color: activeTab === 'Draft' ? 'white' : 'text.secondary',
                      }} 
                    />
                  </Box>
                )} 
                value="Draft" 
              />
            </Tabs>
          </Box>

          {/* Event Cards Grid */}
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: 3,
              minHeight: 400,
            }}
          >
            {filteredEvents.map((event) => (
              <EventCard
                key={event.eventId}
                id={event.eventId}
                title={event.core.generalData.name}
                date={parseDate(event.core.generalData.startDate)}
                guests={0} // Placeholder for guests count
                status={event.core.status}
                image={event.core.generalData.previewImageUrl}
                type={event.core.generalData.type}
                location={`${event.core.generalData.city}, ${event.core.generalData.country}`}
                onClick={handleEventClick}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  guests: number;
  status: EventStatus;
  image: string;
  type: 'music' | 'art' | 'conference' | any; // To Do: Define event types
  location: string;
  onClick: (id: string) => void;
}

const EventCard = ({ id, title, date, guests, status, image, type, location, onClick }: EventCardProps) => {
  const getStatusColor = (status: EventStatus) => {
    switch (status) {
      case 'Active':
        return '#2563eb';
      case 'Upcoming':
        return '#059669';
      case 'Draft':
        return '#9333ea';
      default:
        return '#6b7280';
    }
  };

  const getStatusIcon = (status: EventStatus) => {
    switch (status) {
      case 'Active':
        return <PlayArrowIcon sx={{ fontSize: 16 }} />;
      case 'Upcoming':
        return <AccessTimeIcon sx={{ fontSize: 16 }} />;
      case 'Draft':
        return <EditIcon sx={{ fontSize: 16 }} />;
    }
  };

  return (
    <Paper
      elevation={0}
      onClick={() => onClick(id)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          paddingTop: '56.25%', // 16:9 aspect ratio
          backgroundColor: 'grey.100',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            p: 2,
          }}
        >
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
            {location}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: 2, bgcolor: 'white' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
          {type === 'music' && <MusicNoteIcon sx={{ fontSize: 20, color: 'primary.main' }} />}
          {type === 'art' && <PaletteIcon sx={{ fontSize: 20, color: 'primary.main' }} />}
          {type === 'conference' && <GroupsIcon sx={{ fontSize: 20, color: 'primary.main' }} />}
          <Typography variant="body2" color="primary.main" sx={{ fontWeight: 500 }}>
            {type.charAt(0).toUpperCase() + type.slice(1)} Event
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {getStatusIcon(status)}
            <Typography
              variant="body2"
              sx={{
                color: getStatusColor(status),
                fontWeight: 500,
              }}
            >
              {status}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {guests} guests
        </Typography>
      </Box>
    </Paper>
  );
};

export default Events;
