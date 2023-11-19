import { DateRange } from "react-date-range";

const Calender = ({ value }) => {
  return (
    <DateRange
      rangeColors={["#F43F5E"]}
      direction="vertical"
      ranges={[value]}
      minDate={new Date()}
      showDateDisplay={false}
    />
  );
};

export default Calender;
