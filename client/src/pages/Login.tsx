import Oauth from "../components/OAuth";

const Login = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />

      <div className="hero-content text-center relative z-10">
        <div className="max-w-md text-neutral-content">
          <h1 className="text-5xl font-bold">Specview</h1>
          <p className="py-6"></p>
          <div className="flex justify-center">
            <Oauth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
