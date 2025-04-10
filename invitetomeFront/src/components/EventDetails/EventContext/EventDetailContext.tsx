import React, { createContext, useContext, useReducer, useEffect } from "react";
import { EventData } from "../../../model/EventDataModel/EventData";
import { useEventStorageContext } from "./EventStorageContext";
import { GeneralData } from "../../../model/EventDataModel/sortKeys/CoreData";

/* Context for managing event details */
interface EventDetailContextType {
  currentEvent: EventData;
  dispatch: React.Dispatch<Action>;
}

const EventDetailContext = createContext<EventDetailContextType | undefined>(
  undefined
);

export const useEventDetailContext = () => {
  const context = useContext(EventDetailContext);
  if (!context) {
    throw new Error(
      "useEventDetailContext must be used within an EventDetailProvider"
    );
  }
  return context;
};

export const EventDetailProvider: React.FC<{
  children: React.ReactNode;
  id: string;
}> = ({ children, id }) => {
  const { eventStorageApi } = useEventStorageContext();

  const initReducer = (id: string) => {
    if (id) {
      const eventData = eventStorageApi.getEventById(id);
      if (eventData) {
        console.info("Loading event data into reducer", eventData);
        return eventData;
      } else {
        console.error(
          "Failed to load event data, initializing empty event data"
        );
        return emptyEventData;
      }
    }
    console.info("No event data found, initializing empty event data");
    return emptyEventData;
  };

  const [currentEvent, dispatch] = useReducer(
    eventReducer,
    {} as EventData,
    () => initReducer(id)
  );

  useEffect(() => {
     eventStorageApi.updateEvent(currentEvent);
  }, [currentEvent]);

  return (
    <EventDetailContext.Provider value={{ currentEvent, dispatch }}>
      {children}
    </EventDetailContext.Provider>
  );
};

/* Reducer for managing event details */
type Action = { type: "GENERAL_DATA"; payload: GeneralData };

const eventReducer = (state: EventData, action: Action) => {
  switch (action.type) {
    case "GENERAL_DATA":
      return {
        ...state,
        core: {
          ...state.core,
          generalData: {
            ...state.core.generalData,
            ...action.payload,
          },
        },
        sync: {
          ...state.sync,
          timestamps: {
            ...state.sync.timestamps,
            core: new Date().toISOString(),
          },
        }
      };
    default:
      return state;
  }
};

// Empty event data for initialization
const emptyEventData: EventData = {
  eventId: "",
  core: {
    generalData: {
      country: "",
      venue: "",
      address: "",
      city: "",
      endDate: "",
      postalCode: "",
      description: "",
      edition: "",
      daysQty: 0,
      type: "",
      logoUrl: "",
      createdBy: "",
      phone: "",
      websiteUrl: "",
      yearEdition: 0,
      name: "",
      modifiedBy: "",
      tags: [],
      startDate: "",
      eventCode: "",
      previewImageUrl: "",
      gates: [],
    },
    eventDates: [],
    quotes: {},
    status: "Draft",
  },
  artists: {
    artists: [],
    artistsQty: 0,
  },
  statistics: {
    statisticsData: {
      openRate: 0,
      totalScans: 0,
      attendanceRate: 0,
    },
  },
  sync: {
    timestamps: {
      core: "",
      bundles: "",
      artists: "",
      statistics: "",
    },
  },
};
