import { useSearchParams } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";
import { Helmet } from "react-helmet-async";
const Home = () => {
  const [params, setParams] = useSearchParams();

  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      {/* category */}
      <Categories></Categories>
      {/* <h1>Welcome to StayVista</h1> */}
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
