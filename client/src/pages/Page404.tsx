const Page404 = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-9xl font-bold">404</h1>
            <p className="py-6 text-2xl">Oops! Page not found</p>
            <p className="text-lg mb-6">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => (window.location.href = "/")}
            >
              Go to Homepage
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;
