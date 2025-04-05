import { GoogleLogin } from "@react-oauth/google";
import { loginAPI } from "../apis/apiStore";

const Oauth = () => {
  const handleLogin = async (token: string) => {
    try {
      const response = await loginAPI(token);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={(res) => {
          handleLogin(res.credential as string);
        }}
      />
    </div>
  );
};

export default Oauth;
