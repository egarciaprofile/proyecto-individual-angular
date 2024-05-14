import { TicketerEvent } from "../event/event.model";
import { TicketerZone } from "../zone/zone.model";

export interface TicketerSeat {
  id: number;
  zone: TicketerZone;
  event: TicketerEvent;
}
