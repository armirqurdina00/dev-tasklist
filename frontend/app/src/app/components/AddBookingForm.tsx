"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const AddBookingForm = () => {
  const router = useRouter();

  const [service, setService] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleServiceChange = (e) => {
    setService(e.target.value);
  }

  const handleDoctorChange = (e) => {
    setDoctor(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  }

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  }

  function convertTo12hr(timeString: string) {
    const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
      .toLocaleTimeString('en-US',
        { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
      );

    return timeString12hr;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const start_time_12hr = convertTo12hr(startTime)
    const end_time_12hr = convertTo12hr(endTime)

    const booking = { service, doctor_name: doctor, start_time: start_time_12hr, end_time: end_time_12hr, date }

    const res = await fetch('http://host.docker.internal:5000/api/bookings', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(booking)
    })

    if (res.status === 201) {
      setError("");
      setLoading(false);
      router.push('/');
      router.refresh();
    }

    else if (res.status === 500) {
      setLoading(false);
      const responseJson = await res.json()
      setError(responseJson.message)
    }
  }

  return (
    <form className="w-full my-4" onSubmit={handleSubmit}>
      <div>
        <span>Service</span><br />
        <input type="text" onChange={handleServiceChange} value={service} required />
      </div>
      <div>
        <span>Doctor</span><br />
        <input type="text" onChange={handleDoctorChange} value={doctor} required />
      </div>
      <div>
        <span>Date</span><br />
        <input type="date" onChange={handleDateChange} value={date} required />
      </div>
      <div>
        <span>Start time</span><br />
        <input type="time" onChange={handleStartTimeChange} value={startTime} required />
      </div>
      <div>
        <span>End time</span><br />
        <input type="time" onChange={handleEndTimeChange} value={endTime} required />
      </div>
      <button type="submit" className="bg-primary-color text-white">{loading ? "Submitting..." : "Submit"}</button>
      {error && <div className="text-red-500 font-bold">{error}</div>}
    </form>
  );
}

export default AddBookingForm;