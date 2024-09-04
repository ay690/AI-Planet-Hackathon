import { useNavigate, useParams } from "react-router-dom";
import { items } from "../utils/items";
import graph from "../assets/icons/carbon_skill-level-basic.svg";

const ChallengeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <section className="flex flex-col h-screen">
      <header className="w-full max-w-6xl px-4 py-8 mx-auto space-y-8 md:space-y-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <button className="px-4 py-2 text-xs font-semibold bg-yellow-300 rounded-md text-custom-light font-inter sm:text-sm md:text-base">
            🕛 Starts on 17th Jun'22 09:00 PM (India Standard Time)
          </button>
        </div>
        <div className="space-y-4 md:space-y-8">
          <h2 className="text-xl font-semibold text-white font-poppins sm:text-2xl md:text-3xl lg:text-4xl text-start">
            {items[id].title}
          </h2>
          <p className="text-sm font-medium text-white font-inter sm:text-base md:text-lg lg:text-xl">
            Identify the class to which each butterfly belongs to
          </p>
        </div>
        <button className="flex items-center px-4 py-2 space-x-2 text-gray-500 bg-white rounded-lg">
          <img src={graph} className="w-4 h-4 sm:w-5 sm:h-5" alt="Check Icon" />
          <span className="text-xs sm:text-sm md:text-base">
            {items[id].type}
          </span>
        </button>
      </header>
      <div className="flex-1 bg-white">
        <div className="max-w-6xl py-4 mx-auto space-y-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center justify-between">
            <h4 className="p-3 text-sm font-semibold font-inter sm:text-base md:text-lg">
              Overview
            </h4>
            <div className="flex flex-wrap p-3 space-x-2">
              <button
                className="px-4 py-2 text-xs font-semibold text-white rounded-md bg-custom-green font-inter sm:text-sm md:text-base"
                onClick={() => navigate(`/hackathon/admin/${id}`)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 text-xs font-semibold text-red-800 bg-red-100 rounded-md font-inter sm:text-sm md:text-base"
                onClick={() => {
                  items.splice(id, 1);
                  navigate("/hackathon");
                }}
              >
                Delete
              </button>
            </div>
          </nav>
          <div className="w-full p-3 space-y-4 whitespace-pre-wrap">
            <p className="text-sm font-medium leading-relaxed text-justify text-gray-500 font-poppins sm:text-base md:text-lg lg:text-xl">
              Butterflies are the adult flying stage of certain insects
              belonging to an order or group called Lepidoptera. The word
              "Lepidoptera" means "scaly wings" in Greek. This name perfectly
              suits the insects in this group because their wings are covered
              with thousands of tiny scales overlapping in rows.
            </p>
            <p className="text-sm font-medium leading-relaxed text-justify text-gray-500 font-poppins sm:text-base md:text-lg lg:text-xl">
              An agency of the Governmental Wildlife Conservation is planning to
              implement an automated system based on computer vision so that it
              can identify butterflies based on captured images. As a consultant
              for this project, you are responsible for developing an efficient
              model.
            </p>
            <p className="text-sm font-medium leading-relaxed text-justify text-gray-500 font-poppins sm:text-base md:text-lg lg:text-xl">
              Your Task is to build an Image Classification Model using CNN that
              classifies to which class of weather each image belongs to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeDetails;
