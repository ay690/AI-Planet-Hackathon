import Rocket from "../assets/icons/PicsArt_04-14-04.42 1.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-between py-32 mx-auto max-w-7xl h-2/3">
      <div className="w-2/3 space-y-16">
        <div className="space-y-8">
          <h1 className="font-bold leading-normal text-white">
            Accelerate Innovation with Global AI Challenges
          </h1>
          <p className="text-white text-[18px] max-w-lg font-poppins font-[500] ">
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </p>
        </div>
        <button
          className=" bg-white rounded-lg text-custom-light font-poppins font-[600] text-[18px]"
          onClick={() => navigate("/hackathon/admin")}
        >
          Create Challenge
        </button>
      </div>
      <img src={Rocket} alt="rocket pic" className="w-1/3" loading="lazy" />
    </section>
  );
};

export default Header;
