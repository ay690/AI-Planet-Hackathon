import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { items as data } from "../utils/items";
import { items } from "../data/Admin";

const style =
  "border px-4 py-2 rounded-sm focus:border-custom-light outline-none w-1/2";

const Admin = () => {
  const filePickerRef = useRef(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    type: "Easy",
    image:
      "https://images.unsplash.com/photo-1655601597743-7ddd6fdc2903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.push({
      id: data.length,
      ...formData,
    });
    navigate("/hackathon");
  };

  return (
    <section className="flex flex-col h-screen ">
      <div className="py-4 bg-gray-200">
        <h4 className="max-w-6xl mx-auto font-bold font-inter">
          Challenge Details
        </h4>
      </div>
      <div className="flex-1 py-16 bg-white">
        <form
          className="grid max-w-6xl grid-cols-1 gap-4 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="col-span-1 space-y-8">
            {items.map((item, index) => (
              <div className="flex flex-col space-y-2" key={item.label}>
                <label className="text-[16px] font-inter font-[500]">
                  {item.label}
                </label>
                {item.type === "select" ? (
                  <select
                    className={`${style} `}
                    name={item.name}
                    onChange={handleChange}
                  >
                    {item.options.map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : item.type === "file" ? (
                  <input
                    type={item.type}
                    placeholder={item.placeholder}
                    name={item.name}
                    className={`${style} file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-green-50 file:text-green-500
                    hover:file:bg-green-100 appearance-none`}
                    ref={filePickerRef}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                ) : (
                  <input
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    className={style}
                    onChange={handleChange}
                    required
                  />
                )}
                {item.type === "file" && file && (
                  <div className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="selected pic"
                      className="rounded-sm"
                    />
                    <button
                      className="absolute text-white bg-red-500 rounded-lg right-4 bottom-4"
                      onClick={() => setFile(null)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            <label>Description</label>
            <textarea
              name="description"
              className={`${style} h-full col-span-1 `}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="text-white rounded-lg w-fit bg-custom-green"
          >
            Create challenge
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
