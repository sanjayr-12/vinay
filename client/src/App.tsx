import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Verify from "./utils/Verify";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import { useUserStore } from "./store/Store";
import { Roles } from "./types/store.types";
import DisplayFeedBack from "./pages/DisplayFeedBack";
import Design from "./pages/Design";
import { Users } from "./pages/Users";
import Analysis from "./pages/Analysis";
import Updates from "./pages/Updates";
import Interior from "./pages/Interior";
import Page404 from "./pages/Page404";

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
          <Route path="/design" element={<Design />} />
          <Route path="/users" element={<Users />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/interior" element={<Interior />} />
        </Route>
        <Route path="*" element={<Page404/>} />
      </Routes>
    </div>
  );
};

export default App;
