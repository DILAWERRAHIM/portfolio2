import React, { useEffect, useId, useState } from "react";
import { Delete, Edit } from "../../components/Icons/icons.jsx";
import { useNavigate } from "react-router-dom";
const User = () => {
  const [Data, setData] = useState("");
  const url = "http://localhost:5000/user/recommendations";
  const navigate = useNavigate();
  const handleDelete = async (userId) => {
    // Implement deletion logic using the userId
    const url2 = `${url}/${userId}`;
    try {
      const res = await fetch(url2, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("failed to delete data");
      }
      setData((prevData) => ({
        ...prevData,
        tasks: prevData.tasks.filter((user) => user._id !== userId),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (userId) => {
    navigate(`../edit-recommendations?userid=${userId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("can not fetch data");
        }

        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="  w-[90%] mx-auto flex justify-center items-center">
      <div className=" my-9 ">
        <h2 className="text-2xl font-bold mb-4">User Recommendations</h2>
        <div className="overflow-x-auto my-5">
          <table className="table-auto w-full  border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">First Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Review</th>
                <th className="px-4 py-2">Edit</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {Data?.tasks?.map((user, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.username}
                  </td>
                  <td className="px-4 py-2 border text-red-400 border-gray-300">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.review}
                  </td>
                  <td
                    onClick={() => handleEdit(user._id)}
                    className="px-4 py-2 border border-gray-300"
                  >
                    <Edit />
                  </td>

                  <td
                    onClick={() => handleDelete(user._id)}
                    className=" py-2 border border-gray-300"
                  >
                    <Delete />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
