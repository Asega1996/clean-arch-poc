import { EventGroup } from "./event-group";
import { EventStatus } from "./event-status";

export type Event = {
  id: number;
  message: string;
  eventStatus: EventStatus;
  eventGroup: EventGroup;
  updatedAt: null | string;
  createdAt: string;
};
