import React from "react";

const Client_form = ({ formData, setFormData }) => {
  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
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
          <p className="mt-4 mb-9 text-sm text-gray-500">
            I am based in Islamabad, Pakistan, but I work with clients all
            around the world. I only ask this to know your timezone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Client_form;
