import { useNavigate, useParams } from "react-router-dom";
import { items } from "../utils/items";
import graph from "../assets/icons/carbon_skill-level-basic.svg";

const ChallengeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <section className="flex flex-col h-screen">
      <header className="w-full max-w-6xl py-16 mx-auto space-y-16">
        <div className="flex items-center justify-between">
          <button className="bg-yellow-300 rounded-md text-custom-light">
            Starts on 17th Jun'22 09:00 PM (India Standard Time)
          </button>
        </div>
        <div className="space-y-8">
          <h1 className="text-white">{items[id].title}</h1>
          <p className="text-white">
            Identify the class to which each butterfly belongs to
          </p>
        </div>
        <button className="flex items-center space-x-2 text-gray-500 bg-white rounded-lg">
          <img src={graph} className="w-5 h-5" alt="Check Icon" />
          <span>Easy</span>
        </button>
      </header>
      <div className="flex-1 bg-white">
        <div className="max-w-6xl py-4 mx-auto space-y-4">
          <nav className="flex items-center justify-between">
            <h4>Overview</h4>
            <div className="space-x-4">
              <button
                className="text-white rounded-md bg-custom-light"
                onClick={() =>
                  alert(
                    "Functionality under construction, Thank you for understanding🥹"
                  )
                }
              >
                Edit
              </button>
              <button
                className="text-red-800 bg-red-100 rounded-md"
                onClick={() => {
                  items.splice(id, 1);
                  navigate("/hackathon");
                }}
              >
                Delete
              </button>
            </div>
          </nav>
          <p className="font-poppins font-[500] text-[18px] text-gray-500 max-w-full whitespace-pre-line">
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows. <br className="mt-4" />
            An agency of the Governmental Wildlife Conservation is planning to
            implement an automated system based on computer vision so that it
            can identify butterflies based on captured images. As a consultant
            for this project, you are responsible for developing an efficient
            model. <br className="mt-4" />
            Your Task is to build an Image Classification Model using CNN that
            classifies to which class of weather each image belongs to.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChallengeDetails;
