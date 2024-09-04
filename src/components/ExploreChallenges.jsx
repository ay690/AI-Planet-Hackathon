import ExploreChallengesCard from "./ExploreChallengesCard";
import { items } from "../utils/items";
import { useState } from "react";

const checkStatusList = ["easy", "medium", "hard"];
const checkLevelList = ["all", "active", "past", "upcoming"];

const CheckListLayout = ({ item, setSearchItem }) => (
  <div className="flex items-center px-4 py-2 space-x-2 rounded-sm cursor-pointer hover:bg-gray-100">
    <input
      id={item}
      type="checkbox"
      value={item}
      onChange={(e) =>
        e.target.value !== "all"
          ? e.target.checked && setSearchItem(e.target.value)
          : e.target.checked && setSearchItem("")
      }
      className="form-checkbox"
    />
    <label
      htmlFor={item}
      className="text-sm text-gray-700 capitalize font-inter md:text-base"
    >
      {item}
    </label>
  </div>
);

const ExploreChallenges = () => {
  const [searchItem, setSearchItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => setSearchItem(e.target.value);
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchItem) ||
      item.type.toLowerCase().includes(searchItem) ||
      item.status.toLowerCase().includes(searchItem)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchItem("");
  };

  return (
    <section className="bg-custom-light">
      <div className="py-16 space-y-8 bg-custom-dark">
        <h2 className="text-2xl font-semibold text-center text-white font-poppins md:text-3xl lg:text-4xl">
          Explore Challenges
        </h2>
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchItem}
              onChange={handleChange}
              placeholder="🍳 Search"
              className="w-full px-4 py-2 mx-auto text-base bg-white border rounded-md outline-none font-inter"
            />
          </form>
          <div className="relative">
            <button
              type="button"
              className="px-4 py-2 text-base bg-white rounded-md text-custom-dark font-inter md:text-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              Filter
            </button>
            {isOpen && (
              <form className="absolute z-40 flex flex-col mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                <div className="p-4">
                  <p className="font-semibold text-gray-700">Status</p>
                  {checkLevelList.map((item) => (
                    <CheckListLayout
                      item={item}
                      setSearchItem={setSearchItem}
                      key={item}
                    />
                  ))}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-gray-700">Level</p>
                  {checkStatusList.map((item) => (
                    <CheckListLayout
                      item={item}
                      setSearchItem={setSearchItem}
                      key={item}
                    />
                  ))}
                </div>
                <button
                  className="px-4 py-2 mx-4 mb-4 text-white rounded-md bg-custom-dark"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          filteredItems.length
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
            : ""
        } max-w-6xl mx-auto py-16`}
      >
        {filteredItems.length ? (
          filteredItems.map((item) => (
            <ExploreChallengesCard item={item} key={item.id} />
          ))
        ) : (
          <h2 className="text-center text-white">
            Please try another search...
          </h2>
        )}
      </div>
    </section>
  );
};

export default ExploreChallenges;
