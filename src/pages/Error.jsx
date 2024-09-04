import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="grid h-screen space-y-8 bg-custom-light place-content-center place-items-center">
      <h2 className="text-white">Hi there, this page isn't valid 🥹</h2>
      <button
        className="bg-white rounded-lg text-custom-dark w-fit"
        onClick={() => navigate("/hackathon")}
      >
        Go back to home
      </button>
    </section>
  );
};

export default Error;
