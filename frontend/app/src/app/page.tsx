import BookingList from "./components/BookingList";
import { BookingInterface } from "./interfaces/BookingInterface"

async function getBookings() {
  const res = await fetch('http://host.docker.internal:5000/api/bookings', { cache: 'no-store', mode: 'no-cors' })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Home: React.FC = async () => {

  const bookings:BookingInterface[] = await getBookings()

  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-lg my-6 font-bold text-primary-color">Current booking count: {bookings.length}</h1>
        <BookingList bookings={bookings} />
    </div>
    </div >
  );
};

export default Home;
