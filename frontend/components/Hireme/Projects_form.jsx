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
  const handleAudience = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
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
        className=" mt-10 mb-6"
      >
        {" "}
        Projects Details
      </h2>
      <div>
        <p className="my-4"> How can I help You?</p>
        <div className="flex flex-col md:flex-row justify-between">
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
        {/*   this is to cehck whether project is new or redesign  */}
        <p className="my-6">
          Is this is a new project or a redesign for an existing site / brand?
        </p>
        <div className="flex md:flex-row flex-col justify-around  ">
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
        </div>{" "}
        {/*   this is for responsive  */}
        {responsive && (
          <div>
            <p className="my-6">Do you need Responsive Design for the site? </p>
            <div className="flex  md:flex-row flex-col justify-between">
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
        {/*   this is for  time */}
        <div className="mt-8">
          <p className="mb-5">
            {" "}
            <span className="text-xl ">Timeline.</span> When do you need this
            completed by?
          </p>
          <div>
            <select
              id="times"
              className="p-2 m-1 bg-transparent border border-gray-400 focus:outline-none 
                      
              rounded-md text-gray-700 mb-4"
              name="times"
              value={formData.times}
              onChange={handleChange}
            >
              <option>Please Select one</option>

              <option value="emergency">As soon as possible</option>
              <option value="two_week">Within 2 weeks</option>
              <option value="four_week">Within 4 weeks</option>
              <option value="eight_week">Within 8 weeks</option>
              <option value="own_choice">When Your are available</option>
            </select>
          </div>
          <p className="text-gray-400">
            I generally recommend at least three weeks for most projects, to
            ensure that the appropriate research and creative output is the best
            it can be.
          </p>
        </div>
        {/*    time emd  */}
        {/* budget started */}
        <div className="mt-8">
          <p className="mb-5">
            {" "}
            <span className="text-xl ">Budget.</span> How much are you planning
            to invest in the project? (USD){" "}
          </p>
          <div>
            <select
              id="budget"
              className="p-2 m-1 bg-transparent border border-gray-400 focus:outline-none 
                      
              rounded-md text-gray-700 mb-4"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option>Please Select one</option>

              <option value="first_100">$ &lt;100</option>
              <option value="100-500">$ 100-500</option>
              <option value="500-1000">$ 500-1000</option>
              <option value="1000-2000">$ 1000-2000</option>
              <option value="2000-5000">$ 2000-5000</option>
            </select>
          </div>
          <p className="text-gray-400">
            Design isn't a commodity, meaning that you will get different costs
            from every designer. I listen to your specific needs first, and then
            put together a customized estimate based on these needs . Please
            provide a rough idea of what you are willing to invest, keeping in
            mind that the more you can invest, the more I can invest in your
            project.
          </p>
        </div>
        {/* budget end */}
        {/* audience start */}
        <div className="mt-14">
          <p>
            Why is the site / redesign / project needed? Who is the audience?
          </p>
          <textarea
            type="text"
            name="audience"
            id="audience"
            value={formData.audience}
            onChange={handleAudience}
            className=" w-[100%] h-36 p-1 md:p-4  mt-6 border-2  
            hover:border-gray-800 focus:text-orange-700 rounded-md border-gray-400"
          />
          <p className="text-gray-400 mt-5">
            Is it a new site for an event or business, or an existing but
            outdated site in need of technical or visual upgrades? Information
            about target group; i.e. gender, age group, country, yearly income,
            profession, hobbies and interests is very helpful to narrow down the
            ideal audience.
          </p>
        </div>
        {/* audience end */}
        {/* objective start  */}
        <div className="mt-14">
          <p>
            What are the primary objectives and goals (long term and short term)
            for the project?{" "}
          </p>
          <textarea
            type="text"
            name="objective"
            id="objective"
            value={formData.objective}
            onChange={handleAudience}
            className=" w-[100%] h-36 p-1 md:p-4  mt-6 border-2  
            hover:border-gray-800 focus:text-orange-700 rounded-md border-gray-400"
          />
          <p className="text-gray-400 mt-5">
            Generate sales and leads? Get your business name out there to create
            stronger awareness for your brand? What do you want to achieve with
            my help?{" "}
          </p>
        </div>
        {/* objective end */}
        {/* additional  start */}
        <div className="mt-14">
          <p>Please provide any additional details for the project</p>
          <textarea
            type="text"
            name="additional"
            id="addiotional"
            value={formData.addiotional}
            onChange={handleAudience}
            className=" w-[100%] h-36 p-1 md:p-4  mt-6 border-2  
            hover:border-gray-800 focus:text-orange-700 rounded-md border-gray-400"
          />
          <p className="text-gray-400 mt-5">
            Personal preference, a list of good and bad examples, colors,
            overall message, competitors in your field etc.{" "}
          </p>
        </div>
        {/* addiotional end */}
      </div>
    </div>
  );
};

export default Projects_form;
