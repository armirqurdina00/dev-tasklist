import Link from "next/link";
import { BookingInterface } from "../interfaces/BookingInterface"

interface BookingListProps {
  bookings: BookingInterface[]
}

const BookingList: React.FC<BookingListProps> = (props) => {
  return (
    <div>
      {
        props.bookings.map(booking => (
          <Link href={`/booking/${booking.id}`} key={booking.id}>
            <div className="mx-auto my-4 w-full xl:w-3/4 p-4 text-lg bg-gray-100 text-gray-500 border rounded-xl border-gray-300 hover:bg-primary-color hover:text-white" >
              <div>A Booking on {new Date(booking.date).toLocaleDateString()} starting at {booking.start_time}</div>
            </div>
          </Link>
        ))
      }
    </div>
  );
}

export default BookingList;