import React, { useState } from 'react';

const ReviewForm = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  const [Popup,setPopup]=useState(false)


  const handleSubmit =async (event) => {
    event.preventDefault();
    if (!username || !email || !review) {
      alert('Please fill in all fields');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/user/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, review })
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      // Reset the form after successful submission
      setName('');
      setEmail('');
      setReview('');

      setPopup(true);
      setTimeout(() => {
        setPopup(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert('Failed to submit review');
    }
  };

  return (
    <div className="flex justify-center items-center relative  h-full">
      <form onSubmit={handleSubmit} className="bg-white mt-7 p-6 md:w-[40%] w-[100%] rounded-md ring-gray-200 ring-2">
        <h2 className="text-2xl font-bold mb-4">Submit a review</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="review" className="block text-gray-700">Review:</label>
          <textarea
          placeholder='message'
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Submit</button>
        </div>
      </form>
      {Popup && (
        <div className="z-1 absolute  bg-green-500 text-white px-4 py-2 rounded-md mr-4 mt-4">
          Thanks for your recommendations!
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
