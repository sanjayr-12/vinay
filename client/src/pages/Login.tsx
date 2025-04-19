import Oauth from "../components/OAuth";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Specview</h1>
          <div className="flex justify-center">
            <Oauth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
