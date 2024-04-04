import React, { useState } from "react";
import Client_form from "./Client_form";
import Projects_form from "./Projects_form";
const Final_form = () => {
  const [showProjectfrom, setProjectForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    location: "",
    webDevelopment: false,
    webDesign: false,
    other: false,
    newProjects: false,
    redesign: false,
    responsive: false,
    static: false,
    telling: false,
    times: "",
    budget: "",
    audience: "",
    objective: "",
    additional: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.location) {
      return;
    }
    setProjectForm(true);

    // You can handle form submission here (e.g., send data to an API)
    console.log("Form submitted:", formData);
  };

  return (
    <div className=" w-[95%] md:w-[70%] mx-auto p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Client_form formData={formData} setFormData={setFormData} />

        {showProjectfrom && (
          <div>
            <p className="w-[100%] h-[1px]  bg-gray-300"> </p>

            <Projects_form formData={formData} setFormData={setFormData} />
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2  px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Final_form;
