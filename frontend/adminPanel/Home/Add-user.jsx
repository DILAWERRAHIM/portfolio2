import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewForm = ({ setuser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userStatus, setUserStatus] = useState();
  const [password, setPassword] = useState("");
  const url = `http://localhost:5000/user`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password || userStatus) {
      console.log(username, password, userStatus);
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password, userStatus }),
        });

        if (!res.ok) {
          throw new Error("failed to add user");
        }

        navigate("/adminPanel/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className=" flex justify-center items-center relative  h-full">
      <form
        onSubmit={handleSubmit}
        className=" mt-7 p-6 md:w-[100%] w-[90%]   rounded-md ring-gray-200 ring-2"
      >
        <h2 className="text-2xl font-bold mb-4">Add User</h2>
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
        <div className="flex items-center">
          <input
            type="radio"
            id="admin"
            name="userStatus"
            value="admin"
            checked={userStatus === "admin"}
            onChange={(e) => setUserStatus(e.target.value)}
          />
          <label htmlFor="admin" className="ml-1">
            Admin
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="user"
            name="userStatus"
            value="user"
            checked={userStatus === "user"}
            onChange={(e) => setUserStatus(e.target.value)}
          />
          <label htmlFor="user" className="ml-1">
            User
          </label>
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
