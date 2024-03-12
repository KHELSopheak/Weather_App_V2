import { Link } from "react-router-dom";
import landingImg from "../images/landingImg.png";

const LandingPage = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-evenly items-center p-4 bg-gradient-to-r from-cyan-500 to-sky-200 h-screen">
      <img
        className="size-56 my-2 rounded-md md:size-96"
        src={landingImg}
        alt="landingImage"
      />
      <div className="text-center text-2xl font-bold md:mt-32">
        <h1 className="my-4 text-5xl">
          Weather <span className="text-pink-500">Forecasts</span>
        </h1>
        <Link to="/home">
          <button className="text-slate-100 p-4 my-6 rounded-full focus:outline-none focus:ring-1 focus:ring-black focus:ring-opacity-75 bg-gradient-to-r from-pink-500 to-amber-300 transform hover:scale-110 animate-pulse w-full text-xl md:p-6">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
