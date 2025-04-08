import React, { createContext, useContext, useReducer } from "react";
import { EventData } from "../../../model/EventDataModel/EventData";

interface EventDetailContextType {
  event: EventData;
  dispatch: React.Dispatch<Action>;
}

type Action = { type: "SET_EVENT"; payload: EventData };

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

const eventReducer = (state: EventData, action: Action) => {
  switch (action.type) {
    case "SET_EVENT":
      return action.payload;
    default:
      return state;
  }
};

export const EventDetailProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [event, dispatch] = useReducer(eventReducer, {} as EventData);

  return (
    <EventDetailContext.Provider value={{ event, dispatch }}>
      {children}
    </EventDetailContext.Provider>
  );
};
