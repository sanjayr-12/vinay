import { useEffect, useState } from "react";
import { verifyAPI } from "../apis/apiStore";
import { useUserStore } from "../store/Store";
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Verify = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await verifyAPI();
        setUser(response.userData);
      } catch (error) {
        console.log(error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <div>{user && <Outlet />}</div>;
};

export default Verify;
