import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Recommendations = () => {
  const [Data, setData] = useState();

  const navigate = useNavigate();
  const handler_route = async (e) => {
    e.preventDefault();
    navigate("/login");
  };

  //  recommendations data

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to fetch data from the backend
        const response = await fetch(
          "http://localhost:5000/user/recommendations",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[100%]  flex h-5/6  overflow-auto items-center justify-center">
      <div
        className=" p-4 mt-12 
     md:w-[90%]"
      >
        <h3
          className="text-[#313178]"
          style={{
            fontFamily: "'Madimi One',sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "40px",
          }}
        >
          {" "}
          Recommendations
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-2">
          {Data?.tasks?.map((task) => (
            <div
              key={task.username}
              className="border-2   my-2 p-3   rounded-[10px]"
            >
              <p className="mb-3 font-bold">{task.username}</p>
              <p className="mb-3 font-semibold">{task.email} </p>
              <p>{task.review} </p>

              {/* Render other properties like email and review here */}
            </div>
          ))}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
        px-4 rounded"
          onClick={handler_route}
        >
          {" "}
          give recommendations
        </button>
      </div>
    </div>
  );
};

export default Recommendations;
