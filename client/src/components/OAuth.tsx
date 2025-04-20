import { GoogleLogin } from "@react-oauth/google";
import { loginAPI } from "../apis/apiStore";
import { useNavigate } from "react-router-dom";

const Oauth = () => {
  const navigate = useNavigate();
  const handleLogin = async (token: string) => {
    try {
      await loginAPI(token);
      navigate("/");
    } catch (error) {
      navigate("/login");
      console.log(error);
    }
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={(res) => {
          handleLogin(res.credential as string);
        }}
        shape="pill"
        useOneTap
      />
    </div>
  );
};

export default Oauth;
