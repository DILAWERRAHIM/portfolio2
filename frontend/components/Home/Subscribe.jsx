import React from 'react';

const Subscribe = () => {
  return (
    <div className="max-w-md mx-auto">
      <form className=" flex rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 flex-1">
          <input
            className="shadow appearance-none border rounded w-full py-2 
            px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="ml-2">
          <button
            className=" border-white border-2 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
           Get in touch
          </button>
        </div>
      </form>
    </div>
  );
}

export default Subscribe;
