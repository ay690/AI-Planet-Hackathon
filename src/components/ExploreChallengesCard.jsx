import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDateDiff } from "../utils/formatTime";
import checkIcon from "../assets/icons/checIcon.png";

const ExploreChallengesCard = ({ item }) => {
  const [diff, setDiff] = useState({});

  const status =
    new Date() > new Date(item.startDate) && new Date() < new Date(item.endDate)
      ? "Active"
      : new Date() > new Date(item.endDate)
      ? "Past"
      : "Upcoming";

  item.status = status;

  useEffect(() => {
    const timer =
      (status === "Upcoming" || status === "Active") &&
      setInterval(() => {
        setDiff(getDateDiff(new Date(), new Date(item.startDate)));
      }, 1000);
    return () => clearInterval(timer);
  }, [item, status]);

  return (
    <Link to={`/hackathon/details/${item.id}`}>
      <div className="mb-4 overflow-hidden text-center bg-white min-h-[400px] md:min-h-[520px] rounded-xl hover:rotate-1 transition-transform duration-300">
        <img
          src={item.image}
          alt="card header"
          className="object-cover w-full h-32 mb-4 md:h-40 md:mb-5"
        />

        <button
          className={`${
            status === "Upcoming"
              ? "text-orange-500 bg-orange-100 rounded-lg p-2 md:p-3"
              : status === "Active"
              ? "text-custom-green bg-green-100 rounded-lg p-2 md:p-3"
              : "text-red-800 bg-red-100 rounded-lg p-2 md:p-3"
          } text-xs md:text-sm`}
        >
          {status}
        </button>

        <div className="flex flex-col items-center p-4 space-y-4 md:p-8">
          <h4 className="text-sm font-semibold font-poppins md:text-base">
            {item.title}
          </h4>
          <p className="text-xs font-medium font-poppins md:text-sm">
            {status === "Upcoming"
              ? "Starts in"
              : status === "Active"
              ? "Ends in"
              : "Ended on"}
          </p>
          {status !== "Past" ? (
            <div className="flex flex-wrap justify-center w-full space-x-2 text-center">
              <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold font-poppins md:text-xl">
                  {diff.day}
                </h4>
                <p className="text-xs font-medium font-poppins md:text-sm">
                  Days
                </p>
              </div>

              <span className="hidden md:block">:</span>

              <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold font-poppins md:text-xl">
                  {diff.hour}
                </h4>
                <p className="text-xs font-medium font-poppins md:text-sm">
                  Hours
                </p>
              </div>

              <span className="hidden md:block">:</span>

              <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold font-poppins md:text-xl">
                  {diff.minute}
                </h4>
                <p className="text-xs font-medium font-poppins md:text-sm">
                  Mins
                </p>
              </div>

              <span className="hidden md:block">:</span>

              <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold font-poppins md:text-xl">
                  {diff.second}
                </h4>
                <p className="text-xs font-medium font-poppins md:text-sm">
                  Secs
                </p>
              </div>
            </div>
          ) : (
            <h4 className="text-sm text-center md:text-base">{item.endDate}</h4>
          )}
          <div className="space-x-2">
            <button
              disabled={status === "Past"}
              className="flex items-center px-2 py-1 space-x-2 text-white rounded-lg bg-custom-green disabled:opacity-50 disabled:cursor-not-allowed md:px-4 md:py-2"
            >
              <img
                src={checkIcon}
                className="w-4 h-4 md:w-5 md:h-5"
                alt="Check Icon"
              />
              <span className="text-xs font-medium font-poppins md:text-sm">
                Participate now
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExploreChallengesCard;
