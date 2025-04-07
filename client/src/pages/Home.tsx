import Body from "../components/Body";
import NavBar from "../components/NavBar";
import { useUserStore } from "../store/Store";

const Home = () => {
  const user = useUserStore((state) => state.user);
  if (!user) {
    return (
      <div>
        <p> Noting here</p>
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <Body />
    </div>
  );
};

export default Home;
