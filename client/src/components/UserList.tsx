import React, { useEffect, useState } from "react";
import { getSessions } from "../services/api";
import { Session } from "../types";
import { format } from "date-fns";

const UserList: React.FC = () => {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const { data } = await getSessions("userId");
        setSessions(data);
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    };

    fetchSessions();
  }, []);

  return (
    <div>
      <h2>Your Sessions</h2>
      <ul>
        {sessions.map((session) => (
          <li key={session._id}>
            {/* Format the start and end dates */}
            {format(new Date(session.start), "PPpp")} -{" "}
            {format(new Date(session.end), "PPpp")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
