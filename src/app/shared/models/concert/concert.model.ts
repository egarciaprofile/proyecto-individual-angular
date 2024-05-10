import { TicketerEvent } from "../event/event.model";
import { TicketerPerformer } from "../performer/performer.model";

export interface TicketerConcert {
  id: number;
  event: TicketerEvent;
  performer: TicketerPerformer;
}
