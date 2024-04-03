import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send data to an API)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="  w-[70%] mx-auto p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2
          style={{
            fontFamily: "'Madimi One',sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "40px",
          }}
          className=" my-4"
        >
          {" "}
          Questionnaire
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div>
            <label
              htmlFor="name"
              className="block text-sm my-6 font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1  p-4 w-full border border-gray-400 focus:placeholder-red-300
              hover:border-gray-800 focus:border-red-500 focus:outline-none rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm my-6 font-medium text-gray-700"
            >
              Your Email Address{" "}
              <span className="text-[#FFA500] text-lg"> *</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1  p-4 w-full border border-gray-400  focus:placeholder-red-300
              hover:border-gray-800 focus:border-red-500 focus:outline-none rounded-md"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div>
            <label
              htmlFor="website"
              className="block text-sm my-6 font-medium text-gray-700"
            >
              Your website, if you have one
            </label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="mt-1  p-4 w-full border border-gray-400  focus:placeholder-red-300
                   hover:border-gray-800 focus:border-red-500 focus:outline-none rounded-md"
              placeholder="http://"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block my-6 text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 p-4 w-full border border-gray-400  focus:placeholder-red-300
              hover:border-gray-800 focus:border-red-500 focus:outline-none rounded-md"
              placeholder="ie. Pakistan, USA, UK"
              k
            />
            <p className="mt-3 text-gray-500">
              I am based in Islamabad, Pakistan, but I work with clients all
              around the world. I only ask this to know your timezone.
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
