import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MonthPicker } from "@mui/x-date-pickers/MonthPicker";
import { observer } from "mobx-react-lite";
import { setterStore } from "../../stores/setterStore";
const minDate = dayjs("2020-01-01T00:00:00.000");
const maxDate = dayjs("2034-01-01T00:00:00.000");

const CalendarMonthly = observer(() => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(new Date()));


  return (
    <div className="bg-white  flex justify-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MonthPicker
          date={date}
          minDate={minDate}
          maxDate={maxDate}
          onChange={(newDate) => {
            setDate(newDate);
            const dateString = newDate.toString();
            setterStore.setCalendarMonth(new Date(dateString).getMonth());
          }}
        />
      </LocalizationProvider>
    </div>
  );
});

export default CalendarMonthly;
