import Link from "next/link";

async function getBooking(id: string) {
    const res = await fetch(`http://host.docker.internal:5000/api/bookings/` + id, { cache: 'no-store', mode: 'no-cors' })
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }
  
  const BookingDetails: React.FC = async ({ params }: { params: { id: string } }) => {

    const booking = await getBooking(params.id);
  
    return (
      <div>
        <div className="my-4">
          <Link href={"/"} className="text-primary-color hover:underline text-lg">Back</Link>
        </div>
        <h1 className="text-xl font-bold text-primary-color my-8 text-center">Booking details</h1>
        <div className="bg-primary-color border border-primary-color rounded-2xl text-white p-12 my-8 text-xl text-center">
          <h1>This Booking is with {booking.doctor_name} For {booking.service} and it ends on {booking.end_time}</h1>
        </div>
      </div>
    );
  };
  
  export default BookingDetails;
  