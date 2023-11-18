import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";
const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const roomData = data.find((item) => item._id === id);
        setRoom(roomData);
        setLoading(false);
      });
  }, [id]);
  if (loading) return <Loader />;
  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <Header room={room} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-9 mt-8">
          {/* Room Info. */}

          <RoomInfo room={room} />
          <div className="md:col-span-3 order-first md:order-last mb-10">
            {/* Room Reservation */}
            <RoomReservation room={room} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
