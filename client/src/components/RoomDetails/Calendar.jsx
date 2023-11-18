import { DateRange } from "react-date-range";

const Calender = ({ value }) => {
  return (
    <DateRange
      rangeColors={["#F43F5E"]}
      direction="vertical"
      ranges={[value]}
      showDateDisplay={false}
    />
  );
};

export default Calender;
