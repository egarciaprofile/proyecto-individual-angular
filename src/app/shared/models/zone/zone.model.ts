import { TicketerVenue } from "../venue/venue.model";

export interface TicketerZone {
  id: number;
  name: string;
  description: string;
  venue: TicketerVenue;
  price: number;
}
