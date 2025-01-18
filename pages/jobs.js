// import { useState, useEffect } from 'react';
// import axios from '../utils/axios'; // Axios instance with JWT interceptor
// import { useRouter } from 'next/router';

// export default function Jobs() {
//   const [jobs, setJobs] = useState([]);
//   const [filters, setFilters] = useState({ title: '', category: '', location: '' });
//   const router = useRouter();

//   const fetchJobs = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/jobs', { params: filters });
//       setJobs(response.data);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, [filters]);

//   const handleApply = (jobId) => {
//     router.push(`/apply/${jobId}`);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>

//       {/* Filters */}
//       <div className="flex gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Title"
//           value={filters.title}
//           onChange={(e) => setFilters({ ...filters, title: e.target.value })}
//           className="px-3 py-2 border rounded-md"
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           value={filters.category}
//           onChange={(e) => setFilters({ ...filters, category: e.target.value })}
//           className="px-3 py-2 border rounded-md"
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={filters.location}
//           onChange={(e) => setFilters({ ...filters, location: e.target.value })}
//           className="px-3 py-2 border rounded-md"
//         />
//         <button
//           onClick={fetchJobs}
//           className="px-4 py-2 bg-blue-600 text-white rounded-md"
//         >
//           Search
//         </button>
//       </div>

//       {/* Job List */}
//       <div>
//         {jobs.map((job) => (
//           <div key={job.id} className="p-4 mb-4 border rounded-md">
//             <h2 className="text-xl font-bold">{job.title}</h2>
//             <p>Category: {job.category}</p>
//             <p>Location: {job.location}</p>
//             <p>{job.description}</p>
//             <button
//               onClick={() => handleApply(job.id)}
//               className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
//             >
//               Apply
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import axios from '../utils/axios'; // Axios instance with JWT interceptor
import { useRouter } from 'next/router';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ title: '', category: '', location: '' });
  const router = useRouter();

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:4000/jobs', { params: filters });
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  const handleApply = (jobId) => {
    router.push(`/apply/${jobId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Title */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Find Your Dream Job</h1>
        <p className="text-gray-600 mt-2">Browse and apply for exciting opportunities</p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <input
          type="text"
          placeholder="Job Title"
          value={filters.title}
          onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Category"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          onClick={fetchJobs}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Job List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow-lg border hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h2>
              <p className="text-sm text-gray-500">Category: {job.category}</p>
              <p className="text-sm text-gray-500">Location: {job.location}</p>
              <p className="text-gray-600 mt-2">{job.description}</p>
              <button
                onClick={() => handleApply(job.id)}
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No jobs found. Try adjusting your filters.
          </p>
        )}
      </div>

       {/* Footer */}
       <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <li><a href="/" className="hover:text-white transition">Logout</a></li>
          <p>© {new Date().getFullYear()} Harambee Rwanda. All rights reserved. #SethMaurice</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
