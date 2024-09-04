import Rocket from "../assets/icons/PicsArt_04-14-04.42 1.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-between h-auto py-16 mx-auto md:flex-row md:py-32 max-w-7xl">
      <div className="w-full space-y-8 md:w-2/3 md:space-y-16">
        <div className="space-y-4 md:space-y-8">
          <h1 className="text-2xl font-bold leading-tight text-center text-white md:text-4xl md:text-left">
            Accelerate Innovation with Global AI Challenges
          </h1>
          <p className="max-w-full text-base font-medium text-center text-white md:text-lg md:max-w-lg font-poppins md:text-left">
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </p>
        </div>
        <div className="flex">
          <button
            className="px-6 py-3 mx-auto text-base font-semibold bg-white rounded-lg text-custom-light font-poppins md:mx-0 md:text-lg"
            onClick={() => navigate("/hackathon/admin")}
          >
            Create Challenge
          </button>
        </div>
      </div>
      <img
        src={Rocket}
        alt="rocket pic"
        className="w-3/4 mt-8 md:w-1/3 md:mt-0"
        loading="lazy"
      />
    </section>
  );
};

export default Header;
