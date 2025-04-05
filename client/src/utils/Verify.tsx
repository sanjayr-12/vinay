import { useEffect, useState } from "react";
import { verifyAPI } from "../apis/apiStore";
import { useUserStore } from "../store/userStore";
import { Outlet, useNavigate } from "react-router-dom";

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
        console.log(response);
        setUser(response.userData);
        navigate("/");
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
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return <div>{user && <Outlet />}</div>;
};

export default Verify;
