import ExploreChallengesCard from "./ExploreChallengesCard";
import { items } from "../utils/items";
import { useState } from "react";

const checkStatusList = ["easy", "medium", "hard"];

const checkLevelList = ["all", "active", "past", "upcoming"];

const CheckListLayout = ({ item, setSearchItem }) => (
  <div className="flex items-center px-4 py-2 space-x-2 rounded-sm cursor-pointer hover:bg-white">
    <input
      id={item}
      type="checkbox"
      value={item}
      onChange={(e) =>
        e.target.value !== "all"
          ? e.target.checked && setSearchItem(e.target.value)
          : e.target.checked && setSearchItem("")
      }
    />
    <label
      htmlFor={item}
      style={{
        textTransform: "capitalize",
        fontWeight: "400",
        fontFamily: "inter",
        fontSize: "14px",
      }}
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
        <h2 className="text-white font-poppins text-[28px] font-[600]">
          Explore challenges
        </h2>
        <div className="flex items-center justify-center space-x-2">
          <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchItem}
              onChange={handleChange}
              placeholder="🍳 Search"
              className="w-full px-6 py-3 text-sm bg-white border-none rounded-sm outline-none font-inter font-[300] text-[18px]"
            />
          </form>
          <div className="relative">
            <button
              type="submit"
              className="bg-white text-custom-dark font-inter font-[400] text-[18px]"
              onClick={(e) => setIsOpen(!isOpen)}
            >
              Filter
            </button>
            {isOpen && (
              <form className="absolute z-40 flex flex-col mt-2 border border-transparent divide-y rounded-sm bg-white/90 backdrop-blur-sm divide-custom-light hover:border-custom-dark">
                <div className="p-4">
                  <p>Status</p>
                  {checkLevelList.map((item) => (
                    <CheckListLayout
                      item={item}
                      setSearchItem={setSearchItem}
                    />
                  ))}
                </div>
                <div className="p-4">
                  <p>Level</p>
                  {checkStatusList.map((item) => (
                    <CheckListLayout
                      item={item}
                      setSearchItem={setSearchItem}
                    />
                  ))}
                </div>
                <button
                  className="mx-4 mb-4 text-white bg-custom-light"
                  onClick={(e) => setIsOpen(false)}
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
          filteredItems.length && "grid grid-cols-3 gap-5"
        } max-w-6xl mx-auto py-16 grid grid-cols-3 gap-5`}
      >
        {filteredItems.length ? (
          filteredItems.map((item) => (
            <ExploreChallengesCard item={item} key={item.id} />
          ))
        ) : (
          <h2 className="text-white">Please try another search...</h2>
        )}
      </div>
    </section>
  );
};

export default ExploreChallenges;
