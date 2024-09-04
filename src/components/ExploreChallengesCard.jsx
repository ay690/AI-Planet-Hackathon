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
      <div className="mb-4 overflow-hidden text-center bg-white rounded-xl hover:rotate-1">
        <img
          src={item.image}
          alt="card header"
          className="object-cover w-full h-40 mb-5"
        />

        <button
          className={`${
            status === "Upcoming"
              ? "text-orange-500 bg-orange-100 rounded-lg p-3"
              : status === "Active"
              ? "text-custom-green bg-green-100 rounded-lg p-3"
              : "text-red-800 bg-red-100 rounded-lg p-3"
          }`}
        >
          {status}
        </button>

        <div className="flex flex-col items-center p-8 space-y-4">
          <h4>{item.title}</h4>
          <p>
            {status === "Upcoming"
              ? "Starts in"
              : status === "Active"
              ? "Ends in"
              : "Ended in"}
          </p>
          {status !== "Past" ? (
            <div className="flex justify-center w-full space-x-2">
              <div className="text-center">
                <h4>{diff.day}</h4>
                <p>Days</p>
              </div>

              <span>:</span>

              <div className="text-center">
                <h4>{diff.hour}</h4>
                <p>Hours</p>
              </div>

              <span>:</span>

              <div className="text-center">
                <h4>{diff.minute}</h4>
                <p>Mins</p>
              </div>

              <span>:</span>

              <div className="text-center">
                <h4>{diff.second}</h4>
                <p>Secs</p>
              </div>
            </div>
          ) : (
            <h4 className="text-center">{item.endDate}</h4>
          )}
          <div className="space-x-4">
            <button
              disabled={status === "Past"}
              className="flex items-center space-x-2 text-white rounded-lg bg-custom-green disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src={checkIcon} className="w-5 h-5" alt="Check Icon" />
              <span>Participate now</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExploreChallengesCard;
