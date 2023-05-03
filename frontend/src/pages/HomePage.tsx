const HomePage = () => {
  const isAuthenticated = false;
  return isAuthenticated ? (
    <div>
      <p>You are logged into the homepage!</p>
    </div>
  ) : (
    <div>
      <p>You are not logged in, redirecting to login page...</p>
    </div>
  );
};

export default HomePage;
