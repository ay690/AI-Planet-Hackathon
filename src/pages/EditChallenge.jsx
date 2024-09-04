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
    <section className="flex flex-col h-screen">
      <div className="py-4 bg-gray-200">
        <h4 className="max-w-6xl mx-auto font-bold font-inter">
          Edit Challenge
        </h4>
      </div>
      <div className="flex-1 py-16 bg-white">
        <form className="max-w-6xl mx-auto" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border rounded-sm"
            />
            <label className="block text-gray-700">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border rounded-sm"
            />
            <label className="block text-gray-700">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border rounded-sm"
            />
            <label className="block text-gray-700">Type</label>
            {/* <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border rounded-sm"
            /> */}
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border rounded-sm"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <label className="block text-gray-700">Image</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border rounded-sm"
            />
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-1/2 h-32 px-4 py-2 border rounded-sm"
            />
          </div>
          <button
            type="submit"
            className="text-white rounded-lg w-fit bg-custom-green font-inter font-[500] text-[18px]"
          >
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditChallenge;
