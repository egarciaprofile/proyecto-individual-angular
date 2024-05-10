import { TicketerVenue } from "../venue/venue.model";

export interface TicketerEvent {
  id: number;
  name: string;
  eventDate: Date;
  venue: TicketerVenue;
}
