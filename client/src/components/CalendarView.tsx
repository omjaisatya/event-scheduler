import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Availability } from "../types";

interface Props {
  availability: Availability[];
}

const CalendarView: React.FC<Props> = ({ availability }) => {
  const events = availability.map((slot) => ({
    title: "Available",
    start: slot.start,
    end: slot.end,
    backgroundColor: "#28a745",
    borderColor: "#28a745",
  }));

  return (
    <div>
      <h2>Calendar View</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        editable={false}
        selectable={true}
        allDaySlot={false}
        slotDuration="00:30:00"
        height="auto"
      />
    </div>
  );
};

export default CalendarView;
