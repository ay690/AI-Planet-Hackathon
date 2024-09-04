import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-between py-32 mx-auto max-w-7xl h-2/3">
      <div className="w-2/3 space-y-16">
        <div className="space-y-8">
          <h1 className="font-bold text-white">
            Accelerate Innovation with Global AI Challenges
          </h1>
          <p className="text-white text-[18px] max-w-lg font-poppins">
            AI Challenges at asity simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </p>
        </div>
        <button
          className="font-bold bg-white rounded-lg text-custom-light "
          onClick={() => navigate("/hackathon/admin")}
        >
          Create Challenge
        </button>
      </div>
      <img
        src="https://s3-alpha-sig.figma.com/img/a715/f083/9c74dfc068180486a815eb6ff68d89bd?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n~GF2YHdICTvg6i5QW~ODlzvQ75lJj3ImOu3ZZ5wScM2X2PBI8yVphJuqZ6cUZSvdtyDjPBv0fgiypid1kQZC~hnEJJibfHyh8d1QuVakPBdEHIBipT2jJdQGbF3qfbtCLYNo9uF~rNv8VLPwqHS7o0Qujt5NwHgoZaFpXsW2OHzLYFDXMjSTBAZV2x65qsxNFJ7hxgr1Kq72aYBl3OQKhMmehscGKYIWahuF2bEreiXRORYXLTDMzBDnemnzcvYTxNWHPYmItd95xTtgbI6E4IvWn~kC0oA0Z6x7pSZ4bEV6uLR-hem5iynP2PW4xfmFBrDwgT6o6dH1QSrYCr-~w__"
        alt="rocket pic"
        className="w-1/3"
        loading="lazy"
      />
    </section>
  );
};

export default Header;
