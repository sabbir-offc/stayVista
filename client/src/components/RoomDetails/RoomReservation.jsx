import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calendar";
import { useState } from "react";

const RoomReservation = ({ room }) => {
  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection",
  });

  //price calculation
  //total days * price
  const totalDays = formatDistance(
    new Date(room?.from),
    new Date(room?.to)
  ).split(" ")[0];
  const totalPrice = parseInt(totalDays * room?.price);
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <h1 className="text-2xl font-semibold">${room?.price}</h1>
        <h5 className="font-light text-neutral-600">night</h5>
      </div>
      <hr />
      <div className="flex justify-center items-center">
        <Calender value={value} />
      </div>
      <hr />
      <div className="p-4">
        <Button label="Reserve" />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <h2>Total</h2>
        <h2>${totalPrice}</h2>
      </div>
    </div>
  );
};

export default RoomReservation;
