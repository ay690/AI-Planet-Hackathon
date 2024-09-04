import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between py-4 mx-auto max-w-7xl">
        <Link to="/hackathon">
          <img
            src="https://s3-alpha-sig.figma.com/img/99ba/7507/b588a3af66673e7bb695c247d66635cc?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gb9-q5QFoA9D3GS7FCTO1JcwhuGqi-~8yKSMtfkqp6TY65ghermxhmdsPEjq0KYY4YnoaJIL9a8s0yuaB6uCvwaND8rLfuE10z2Z--DSrdCxdccHz0BDfls6uVg~I-sqm3aoFGNEg3lRZrSAdAQyubc6SE5ElHqjrFdb~BUlPszCZXA0nYTIvA2mlv0G2w6uX0wPXDioSP8gVcInxiDRnI3bob4nFl~pZ8mz~Jm1Zji7MJJQYFcjpuz9jIeSjYtN2iuJg7dgv4bRHqLgXW50JveBDY~adAI0EIKyOV2ByvaUchOQooorJcdkNcFFTjLC~j0gIZDOh-1qVUVzvusW6A__"
            alt="logo pic"
            className="h-16 w-28"
            loading="lazy"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
