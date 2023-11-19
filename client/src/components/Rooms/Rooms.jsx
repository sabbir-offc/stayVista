import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";
import { getAllRooms } from "../../api/rooms";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getAllRooms().then((data) => {
      if (category) {
        const filteredData = data.filter((room) => room.category === category);
        setRooms(filteredData);
      } else setRooms(data);
      setLoading(false);
    });
  }, [category]);
  if (loading) return <Loader />;
  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {rooms?.map((item) => (
            <Card key={item._id} room={item}></Card>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title="No Rooms Available into this category."
            subtitle="You Can explore another category."
          />
        </div>
      )}
    </Container>
  );
};

export default Rooms;
