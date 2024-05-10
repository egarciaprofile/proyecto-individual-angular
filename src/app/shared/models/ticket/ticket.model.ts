import { TicketerConcert } from "../concert/concert.model";
import { TicketerSeat } from "../seat/seat.model";
import { TicketerUser } from "../user/user.model";


export interface TicketerTicket {
  id: number;
  user: TicketerUser;
  concert: TicketerConcert;
  seat: TicketerSeat;
  purchaseDate: Date;
}
