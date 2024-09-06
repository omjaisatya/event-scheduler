import React, { useState } from "react";
import { addAvailability, updateAvailability } from "../services/api";
import { Availability } from "../types";

interface Props {
  userId: string;
  existingAvailability?: Availability[];
}

const AvailabilityForm: React.FC<Props> = ({
  userId,
  existingAvailability = [],
}) => {
  const [availability, setAvailability] =
    useState<Availability[]>(existingAvailability);
  const [day, setDay] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleAddSlot = () => {
    const newAvailability = [...availability];
    const dayIndex = newAvailability.findIndex((a) => a.day === day);

    if (dayIndex === -1) {
      newAvailability.push({
        day,
        slots: [{ start, end }],
        start: "",
        end: "",
      });
    } else {
      newAvailability[dayIndex].slots.push({ start, end });
    }

    setAvailability(newAvailability);
    setStart("");
    setEnd("");
  };

  const handleSubmit = async () => {
    try {
      await addAvailability(userId, availability);
      alert("Availability updated");
    } catch (error) {
      console.error("Error adding availability:", error);
    }
  };

  return (
    <div>
      <h2>Manage Availability</h2>
      <input
        type="text"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        placeholder="Day"
      />
      <input
        type="time"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        placeholder="Start"
      />
      <input
        type="time"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        placeholder="End"
      />
      <button onClick={handleAddSlot}>Add Slot</button>
      <button onClick={handleSubmit}>Save Availability</button>
    </div>
  );
};

export default AvailabilityForm;
