import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Edit_recommendaions = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    review: "",
  });
  const location = useLocation();
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const userIdParam = searchParams.get("userid");
        setUserId(userIdParam);
        const url = `http://localhost:5000/user/recommendations/${userIdParam}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("field to fetch data");
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location]);
  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = user.name || data.tasks.username;
    const email = user.email || data.tasks.email;
    const review = user.review || data.tasks.review;

    try {
      const res = await fetch(
        `http://localhost:5000/user/recommendations/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, review }),
        },
      );
      if (!res.ok) {
        throw new Error("failed to update data");
      }
      navigate("../arecommendations");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center relative  h-full">
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="bg-white  mt-7 p-6  w-[100%] rounded-md ring-gray-200 ring-2"
      >
        <h2 className="text-2xl font-bold mb-4">Update recommendations</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name || data?.tasks?.username}
            onChange={(e) => handleInputChange(e)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={user.email || data?.tasks?.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="review" className="block text-gray-700">
            Review:
          </label>
          <textarea
            placeholder="message"
            id="review"
            name="review"
            value={user.review || data?.tasks?.review}
            onChange={handleInputChange}
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

export default Edit_recommendaions;
