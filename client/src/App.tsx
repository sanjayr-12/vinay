import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Verify from "./utils/Verify";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import { useUserStore } from "./store/Store";
import { Roles } from "./types/store.types";
import DisplayFeedBack from "./pages/DisplayFeedBack";

const App = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Verify />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/feedback"
            element={
              user?.roles.includes(Roles.ADMIN) ? (
                <DisplayFeedBack />
              ) : (
                <Feedback />
              )
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
