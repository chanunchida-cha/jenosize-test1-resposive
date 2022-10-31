import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { observer } from "mobx-react-lite";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { setterStore } from "../../stores/setterStore";

const CalendarDaily = observer(() => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(new Date()));

  return (
    <div className="bg-white">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CalendarPicker
          date={date}
          onChange={(newDate) => {
            setDate(newDate);
            const datString = newDate?.toString();
            setterStore.setCalendarDate(datString!);
          }}
        />
      </LocalizationProvider>
    </div>
  );
});

export default CalendarDaily;
