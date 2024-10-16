export type EventStatus = {
  id: EventStatusEnum;
  description: string;
};

export enum EventStatusEnum {
  READ,
  UNREAD,
}
