import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { useApplicationContext } from "../context/application-context/use-application-context";
import { createEventsApi } from "infrastructure/api/events";
import { createEventsRepository } from "infrastructure/repositories/events-repository";
import { listEventsUseCaseImp } from "application/use-cases/list-events-uc-imp";
import { readEventUseCaseImp } from "application/use-cases/read-event-uc-imp";
import { deleteEventUseCaseImp } from "application/use-cases/delete-event-uc-imp";
import { createEventUseCaseImp } from "application/use-cases/create-event-uc-imp";
import { Event } from "domain/model/event";

export const useEvents = () => {
  const queryClient = useQueryClient();
  const { dataSourceClient } = useApplicationContext();

  const eventsApi = createEventsApi(dataSourceClient);
  const eventsRepo = useMemo(
    () => createEventsRepository(eventsApi),
    [eventsApi]
  );

  const onSuccessCallback = {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  };

  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: () => listEventsUseCaseImp(eventsRepo),
  });

  const { mutate: readEvent } = useMutation({
    mutationFn: (event: Event) => readEventUseCaseImp(eventsRepo, event),
    ...onSuccessCallback,
  });

  const { mutate: deleteEvent } = useMutation({
    mutationFn: (eventId: number) => deleteEventUseCaseImp(eventsRepo, eventId),
    ...onSuccessCallback,
  });

  const { mutate: createEvent } = useMutation({
    mutationFn: (event: Omit<Event, "id">) =>
      createEventUseCaseImp(eventsRepo, event),
    ...onSuccessCallback,
  });

  return {
    events: data,
    readEvent: readEvent,
    deleteEvent: deleteEvent,
    createEvent: createEvent,
  };
};
