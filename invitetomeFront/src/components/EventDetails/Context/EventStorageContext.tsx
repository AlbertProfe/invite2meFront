import React, { createContext, useContext, useState } from "react";
import { EventData } from "../../../model/EventDataModel/EventData";

interface EventStorageContextType {
  events: EventData[];
  eventStorageApi: {
    addEvent: (event: EventData) => void;
    getEventById: (id: string) => EventData | undefined;
    updateEvent: (event: EventData) => void;
    removeEvent: (id: string) => void;
  }
}

const EventStorageContext = createContext<EventStorageContextType | undefined>(
  undefined
);

export const useEventStorageContext = () => {
  const context = useContext(EventStorageContext);
  if (!context) {
    throw new Error(
      "useEventStorageContext must be used within an EventProvider"
    );
  }
  return context;
};

// Initialize events from local storage
const initializeEvents = () => {
  const storedIds = JSON.parse(
    localStorage.getItem("eventIds") || "[]"
  ) as string[];
  return storedIds
    .map((id) => {
      const eventData = localStorage.getItem(`event_${id}`);
      return eventData ? JSON.parse(eventData) : null;
    })
    .filter(Boolean) as EventData[];
};

// Provider component
export const EventStorageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [events, setEvents] = useState<EventData[]>(initializeEvents);

  const eventStorageApi = {
    addEvent: (event: EventData) => {
      setEvents((prevEvents) => {
        const updatedEvents = [...prevEvents, event];
        localStorage.setItem(
          "eventIds",
          JSON.stringify(updatedEvents.map((e) => e.eventId))
        );
        localStorage.setItem(`event_${event.eventId}`, JSON.stringify(event));
        return updatedEvents;
      });
    },
    getEventById: (id: string) => events.find((event) => event.eventId === id),
    updateEvent: (updatedEvent: EventData) => {
      setEvents((prevEvents) => {
        const updatedEvents = prevEvents.map((event) =>
          event.eventId === updatedEvent.eventId ? updatedEvent : event
        );
        localStorage.setItem(
          `event_${updatedEvent.eventId}`,
          JSON.stringify(updatedEvent)
        );
        return updatedEvents;
      });
    },
    removeEvent: (id: string) => {
      setEvents((prevEvents) => {
        const updatedEvents = prevEvents.filter((event) => event.eventId !== id);
        const updatedIds = updatedEvents.map((e) => e.eventId);
        localStorage.setItem("eventIds", JSON.stringify(updatedIds));
        localStorage.removeItem(`event_${id}`);
        return updatedEvents;
      });
    },
  }

  return (
    <EventStorageContext.Provider
      value={{ events, eventStorageApi }}
    >
      {children}
    </EventStorageContext.Provider>
  );
};
