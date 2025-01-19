// import { useState } from 'react';
// import axios from '../utils/axios'; // Axios instance with JWT interceptor
// import { useRouter } from 'next/router';

// export default function AddJob() {
//   const [title, setTitle] = useState('');
//   const [category, setCategory] = useState('');
//   const [location, setLocation] = useState('');
//   const [description, setDescription] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const router = useRouter();

//   const handleAddJob = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('http://localhost:4000/jobs/add', {
//         // await axios.post('/jobs/add', {
//         title,
//         category,
//         location,
//         description,
//       });

//       setSuccess('Job successfully added!');
//       setTitle('');
//       setCategory('');
//       setLocation('');
//       setDescription('');

//       // Optional: Redirect to jobs list page
//       setTimeout(() => {
//         router.push('/jobs');
//       }, 2000);
//     } catch (err) {
//       console.error('Error adding job:', err);
//       setError('Failed to add job. Please try again.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-4">Add a Job</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         {success && <p className="text-green-500 mb-4">{success}</p>}
//         <form onSubmit={handleAddJob}>
//           <div className="mb-4">
//             <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//               Job Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//               Category
//             </label>
//             <input
//               type="text"
//               id="category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//               Location
//             </label>
//             <input
//               type="text"
//               id="location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//               Description
//             </label>
//             <textarea
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none"
//               rows="4"
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-600 text-white rounded-md"
//           >
//             Add Job
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


import { useState } from 'react';
import axios from '../utils/axios'; // Axios instance with JWT interceptor
import { useRouter } from 'next/router';

export default function AddJob() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleAddJob = async (e) => {
    e.preventDefault();

    try {
      // await axios.post('http://localhost:4000/jobs/add', {
        await axios.post('https://harambeeback.onrender.com/jobs/add', {        
        title,
        category,
        location,
        description,
      });

      setSuccess('Job successfully added!');
      setTitle('');
      setCategory('');
      setLocation('');
      setDescription('');

      // Optional: Redirect to jobs list page
      setTimeout(() => {
        router.push('/jobs');
      }, 2000);
    } catch (err) {
      console.error('Error adding job:', err);
      setError('Failed to add job. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add a New Job</h2>
        
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && <p className="text-green-600 text-center mb-4">{success}</p>}
        
        <form onSubmit={handleAddJob}>
          <div className="mb-5">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition duration-200"
          >
            Add Job
          </button>
          <button 
          className="w-full py-3 bg-blue-200 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition"
          onClick={() => window.location.href = '/jobs'} 
          >
            Browse Jobs
          </button>
          {/* <li><a href="/" className="hover:text-white transition">Logout</a></li> */}
        </form>
      </div>
      {/* Footer
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/addJob" className="hover:text-white transition">Upload Jobs</a></li>
                <li><a href="/jobs" className="hover:text-white transition">Browser Jobs</a></li>
                <li><a href="/applicants" className="hover:text-white transition">Browser Applications</a></li>
                <li><a href="/" className="hover:text-white transition">Logout</a></li>
              </ul>
            </div>
          <p>© {new Date().getFullYear()} Harambee Rwanda. All rights reserved. #SethMaurice</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
