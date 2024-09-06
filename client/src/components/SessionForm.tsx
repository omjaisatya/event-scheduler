import React, { useState } from "react";
import { createSession } from "../services/api";
import { Session } from "../types";

const SessionForm: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [duration, setDuration] = useState(30);
  const [attendees, setAttendees] = useState<{ name: string; email: string }[]>(
    []
  );

  const handleSubmit = async () => {
    try {
      const sessionData: Session = {
        user: userId,
        start,
        end,
        duration,
        attendees,
        _id: undefined,
      };
      await createSession(sessionData);
      alert("Session created");
    } catch (error) {
      console.error("Error creating session:", error);
    }
  };

  return (
    <div>
      <h2>Create Session</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="datetime-local"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        placeholder="Start"
      />
      <input
        type="datetime-local"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        placeholder="End"
      />
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(parseInt(e.target.value, 10))}
        placeholder="Duration"
      />
      <button onClick={handleSubmit}>Create Session</button>
    </div>
  );
};

export default SessionForm;
