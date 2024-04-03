import React, { useState } from "react";

const Projects_form = ({ formData, setFormData }) => {
  const [responsive, setResponsive] = useState(false);
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: checked,
    }));
    if (id === "webDesign") {
      setResponsive(checked);
    }
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
        className=" mt-10 mb-6"
      >
        {" "}
        Projects Details
      </h2>

      <div>
        <p className="my-4"> How can I help You?</p>
        <div className="flex justify-between">
          <div>
            <input
              type="checkbox"
              className="mx-3 cursor-pointer h-5 w-5 "
              id="webDevelopment"
              checked={formData.webDevelopment} // Use formData for checked state
              onChange={handleCheckboxChange}
            />
            <label htmlFor="webDevelopment" className="text-gray-700">
              Web development
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mx-3 cursor-pointer h-5 w-5 "
              id="webDesign"
              checked={formData.webDesign} // Use formData for checked state
              onChange={handleCheckboxChange}
            />
            <label htmlFor="webDesign" className="text-gray-700">
              Web design
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mx-3 cursor-pointer h-5 w-5 "
              id="other"
              checked={formData.other} // Use formData for checked state
              onChange={handleCheckboxChange}
            />
            <label htmlFor="other" className="text-gray-700">
              Other
            </label>
          </div>
        </div>
        <p className="my-7 text-gray-700">
          {" "}
          Web Design is all about the visuals, no code. Project deliverable will
          be in PSD format, and you will need a developer for the site to be
          fully functional. This said, If you need a fully functional website
          from wireframing to launch, please select Web Design and Web
          Development. I won't code other designer's work.
        </p>
        <p className="my-6">
          Is this is a new project or a redesign for an existing site / brand?
        </p>
        <div className="flex justify-between ">
          <div>
            <input
              type="checkbox"
              className="mx-3 cursor-pointer h-5 w-5 "
              id="newProjects"
              checked={formData.newProjects} // Use formData for checked state
              onChange={handleCheckboxChange}
            />
            <label htmlFor="New-project" className="text-gray-700">
              New Project
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mx-3 cursor-pointer h-5 w-5 "
              id="redesign"
              checked={formData.redesign} // Use formData for checked state
              onChange={handleCheckboxChange}
            />
            <label htmlFor="redesign" className="text-gray-700">
              Redesign
            </label>
          </div>
        </div>
        {responsive && (
          <div>
            <p className="my-6">Do you need Responsive Design for the site? </p>
            <div className="flex justify-between ">
              <div>
                <input
                  type="checkbox"
                  className="mx-3 cursor-pointer h-5 w-5 "
                  id="responsive"
                  checked={formData.responsive} // Use formData for checked state
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="New-project" className="text-gray-700">
                  Yes Please
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="mx-3 cursor-pointer h-5 w-5 "
                  id="static"
                  checked={formData.static} // Use formData for checked state
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="redesign" className="text-gray-700">
                  No, Thanks
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="mx-3 cursor-pointer h-5 w-5 "
                  id="telling"
                  checked={formData.telling} // Use formData for checked state
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="redesign" className="text-gray-700">
                  Don't know, please tell me more about responsive sites
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects_form;
