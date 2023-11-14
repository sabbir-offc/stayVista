import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";
const Home = () => {
  return (
    <div>
      {/* category */}
      <Categories></Categories>
      {/* <h1>Welcome to StayVista</h1> */}
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
