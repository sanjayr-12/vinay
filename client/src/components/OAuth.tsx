import { GoogleLogin } from "@react-oauth/google";

const Oauth = () => {
  return (
    <div>
      <GoogleLogin
        onSuccess={(res) => {
          console.log(res);
        }}
      />
    </div>
  );
};

export default Oauth;
