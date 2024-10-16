import React from "react";
import { EventCardTypes } from "./types";
import "./style.css";
import { EventStatusEnum } from "domain/model/event-status";
import { useEvents } from "../../hooks";

const formatDate = (date: Date) => {
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};

export const EventCard = (props: EventCardTypes) => {
  const { event } = props;

  const { deleteEvent, readEvent } = useEvents();

  const { id, message, createdBy, createdAt, updatedAt, eventStatus } = event;

  const formattedDate = formatDate(new Date(createdAt));

  const handleClickDelete = () => {
    deleteEvent(id);
  };

  const handleClickRead = () => {
    readEvent(event);
  };

  return (
    <div className="event-card">
      <h5 className="event-card__title">
        {id} | {message}
        <span className="event-card__author">{createdBy}</span>
      </h5>
      <div className="event-card__content">
        <p>{formattedDate}</p>
        <p>
          {eventStatus.id === EventStatusEnum.READ
            ? `READ (${formatDate(new Date(updatedAt))})`
            : "UNREAD"}
        </p>
      </div>
      <div className="event-card__actions">
        {eventStatus.id !== EventStatusEnum.READ && (
          <button className="event-card__button" onClick={handleClickRead}>
            Read Event
          </button>
        )}

        {createdBy === "alejandrosgal" && (
          <button className="event-card__button" onClick={handleClickDelete}>
            Delete Event
          </button>
        )}
      </div>
    </div>
  );
};
