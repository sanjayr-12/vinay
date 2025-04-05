import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Verify from "./utils/Verify";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Verify />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
