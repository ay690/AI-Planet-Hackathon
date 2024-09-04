import {
  Header,
  Statistics,
  WhyParticipate,
  ExploreChallenges,
} from "../components/index";

const Home = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <Header />
      <Statistics />
      <WhyParticipate />
      <ExploreChallenges />
    </div>
  );
};

export default Home;
