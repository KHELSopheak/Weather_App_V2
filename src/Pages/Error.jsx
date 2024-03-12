import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="text-center">
        <h3>Not found!</h3>
        <p>Can not find the location you are looking for.</p>
        <p className="underline decoration-sky-500/30 text-bold">
          <Link to="/home">Back to Home</Link>
        </p>
      </div>
    );
  }
  return <div>Something when wrong with the internet connection</div>;
};

export default Error;
