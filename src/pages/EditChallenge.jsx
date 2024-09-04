import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { items } from "../utils/items";

const EditChallenge = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = items[id];

  const [formData, setFormData] = useState({
    title: item.title,
    startDate: item.startDate,
    endDate: item.endDate,
    type: item.type,
    image: item.image,
    description: item.description,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    items[id] = { ...items[id], ...formData };
    navigate(`/hackathon`);
  };

  return (
    <section className="flex flex-col min-h-screen">
      <div className="px-2 py-4 bg-gray-200">
        <h4 className="max-w-6xl mx-auto text-lg font-bold font-inter md:text-xl">
          Edit Challenge
        </h4>
      </div>
      <div className="flex-1 py-8 bg-white">
        <form
          className="max-w-6xl px-4 mx-auto space-y-6 md:px-8"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 md:text-base">
              Challenge Name
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-sm outline-none md:w-1/2 focus:ring focus:ring-custom-light"
            />
            <label className="block text-sm font-medium text-gray-700 md:text-base">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-sm outline-none md:w-1/2 focus:ring focus:ring-custom-light"
            />
            <label className="block text-sm font-medium text-gray-700 md:text-base">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-sm outline-none md:w-1/2 focus:ring focus:ring-custom-light"
            />
            <label className="block text-sm font-medium text-gray-700 md:text-base">
              Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-sm outline-none md:w-1/2 focus:ring focus:ring-custom-light"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <label className="block text-sm font-medium text-gray-700 md:text-base">
              Image
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-sm outline-none md:w-1/2 focus:ring focus:ring-custom-light"
            />
            <label className="block text-sm font-medium text-gray-700 md:text-base">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full h-32 px-4 py-2 border rounded-sm outline-none md:w-1/2 focus:ring focus:ring-custom-light"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium text-white rounded-lg bg-custom-green font-inter md:text-base"
          >
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditChallenge;
