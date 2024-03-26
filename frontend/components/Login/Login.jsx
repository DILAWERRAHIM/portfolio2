import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const url = `http://localhost:5000/user/Single/${username}/${password}`;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields");
    }
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("error occured in fetching data");
      }
      const userdata = await res.json();

      if (!userdata.tasks) {
        navigate("/hire-me");
      } else {
        navigate("/add-recommendations");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center items-center relative  h-full">
      <form
        onSubmit={handleSubmit}
        className=" mt-7 p-6 md:w-[40%] w-[90%]   rounded-md ring-gray-200 ring-2"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex justify-center items-center h-full">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
