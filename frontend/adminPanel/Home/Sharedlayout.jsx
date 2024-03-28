import React, { useEffect, useState } from "react";
import { Delete } from "../../components/Icons/icons.jsx";

const User = () => {
  const [Data, setData] = useState("");
  const url = "http://localhost:5000/user";

  const Add_user = async () => {
    console.log("user adding button is working");
  };
  const handleDelete = async (userId) => {
    // Implement deletion logic using the userId

    const url = `http://localhost:5000/user/${userId}`;
    try {
      const res = await fetch(url, {
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
    <div className="flex justify-center items-center ">
      <div className="max-w-screen-md my-9 ">
        <h2 className="text-2xl font-bold mb-4">User Data</h2>
        <div className="overflow-x-auto my-5">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">First Name</th>

                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {Data?.tasks?.map((user, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.username}
                  </td>
                  <td
                    onClick={() => handleDelete(user._id)}
                    className="px-4 cursor-pointer py-2 border border-gray-300"
                  >
                    <Delete />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          type="button"
          className="bg-blue-500 my-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={Add_user}
        >
          {" "}
          add user
        </button>
      </div>
    </div>
  );
};

export default User;
