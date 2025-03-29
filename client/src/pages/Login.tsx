import Oauth from "../components/OAuth";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Login to see the images</p>
          <div className="flex justify-center">
            <Oauth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
