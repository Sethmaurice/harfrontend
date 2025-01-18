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
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* Page Title */}
//       <header className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-800">Find Your Dream Job</h1>
//         <p className="text-gray-600 mt-2">Browse and apply for exciting opportunities</p>
//       </header>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-4 justify-center mb-10">
//         <input
//           type="text"
//           placeholder="Job Title"
//           value={filters.title}
//           onChange={(e) => setFilters({ ...filters, title: e.target.value })}
//           className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           value={filters.category}
//           onChange={(e) => setFilters({ ...filters, category: e.target.value })}
//           className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={filters.location}
//           onChange={(e) => setFilters({ ...filters, location: e.target.value })}
//           className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//         />
//         <button
//           onClick={fetchJobs}
//           className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
//         >
//           Search
//         </button>
//       </div>

//       {/* Job List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {jobs.length > 0 ? (
//           jobs.map((job) => (
//             <div
//               key={job.id}
//               className="bg-white p-6 rounded-lg shadow-lg border hover:shadow-xl transition"
//             >
//               <h2 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h2>
//               <p className="text-sm text-gray-500">Category: {job.category}</p>
//               <p className="text-sm text-gray-500">Location: {job.location}</p>
//               <p className="text-gray-600 mt-2">{job.description}</p>
//               <button
//                 onClick={() => handleApply(job.id)}
//                 className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//               >
//                 Apply Now
//               </button>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-600 col-span-full">
//             No jobs found. Try adjusting your filters.
//           </p>
//         )}
//       </div>

//        {/* Footer */}
//        <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//           <li><a href="/" className="hover:text-white transition">Logout</a></li>
//           <p>© {new Date().getFullYear()} Harambee Rwanda. All rights reserved. #SethMaurice</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Search, MapPin, Briefcase, Building2, Clock, Filter, ChevronDown, X } from 'lucide-react';
import axios from '../utils/axios';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ title: '', category: '', location: '', experience: '' });
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();

  const categories = ['Software Development', 'Data Science', 'DevOps', 'Product Management', 'Design'];
  const experiences = ['Entry Level', '1-3 years', '3-5 years', '5+ years'];

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

  const clearFilters = () => {
    setFilters({ title: '', category: '', location: '', experience: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-900">Harambee Rwanda Jobs</h1>
            <button 
              onClick={() => router.push('/')}
              className="px-4 py-2 text-blue-600 hover:text-blue-800 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by job title or keyword"
                value={filters.title}
                onChange={(e) => setFilters({ ...filters, title: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Location"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown className="w-4 h-4" />
            </button>
            <button
              onClick={fetchJobs}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Search Jobs
            </button>
          </div>

          {/* Extended Filters */}
          {showFilters && (
            <div className="mt-4 p-4 border-t">
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                  <select
                    value={filters.experience}
                    onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">All Experience Levels</option>
                    {experiences.map((exp) => (
                      <option key={exp} value={exp}>{exp}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-red-600 hover:text-red-700 transition"
                >
                  <X className="w-4 h-4" /> Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h2>
                    <div className="flex flex-wrap gap-3">
                      <span className="flex items-center text-sm text-gray-600">
                        <Building2 className="w-4 h-4 mr-1" />
                        {job.company}
                      </span>
                      <span className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center text-sm text-gray-600">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.category}
                      </span>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">
                    {job.type || 'Full-time'}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{job.description}</p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    Posted {job.posted || '2 days ago'}
                  </div>
                  <button
                    onClick={() => handleApply(job.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600">Try adjusting your search filters or try again later.</p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Harambee Rwanda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}