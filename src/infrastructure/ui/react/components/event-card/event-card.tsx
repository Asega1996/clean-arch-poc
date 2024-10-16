import React from "react";
import { EventCardTypes } from "./types";

export const EventCard = (props: EventCardTypes) => {
  const { event } = props;

  return (
    <div>
      <h5>{event.message}</h5>
    </div>
  );
};
