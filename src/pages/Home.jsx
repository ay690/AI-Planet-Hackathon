import { Header, Statistics, WhyParticipate } from "../components/index";

const Home = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <Header />
      <Statistics />
      <WhyParticipate />
    </div>
  );
};

export default Home;
