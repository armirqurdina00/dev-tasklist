import AddBookingForm from "@/app/components/AddBookingForm";

const AddBooking = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full xl:w-3/4">
        <h1 className="text-center my-4 text-lg font-bold text-primary-color">Add new booking</h1>
        <AddBookingForm />
      </div>
    </div>
  );
}

export default AddBooking;