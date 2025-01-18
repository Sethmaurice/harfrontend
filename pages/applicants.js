// import { useState, useEffect } from 'react';
// import axios from '../utils/axios'; // Assuming you have an axios instance with JWT setup

// const AdminApplications = () => {
//   const [applications, setApplications] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({
//     status: '',
//     dateRangeStart: '',
//     dateRangeEnd: '',
//     sortBy: 'dateApplied',
//     sortOrder: 'ASC',
//   });

//   useEffect(() => {
//     fetchApplications();
//   }, [currentPage, filters]);

//   const fetchApplications = async () => {
//     try {
//       const response = await axios.get('/admin/applications', {
//         params: {
//           page: currentPage,
//           limit: 10,
//           ...filters,
//         },
//       });
//       setApplications(response.data.applications);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleStatusChange = async (id, status) => {
//     try {
//       await axios.put(`/admin/applications/${id}/status`, { status });
//       fetchApplications(); // Refresh the list
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin - Manage Applications</h1>

//       {/* Filters */}
//       <div className="flex gap-4 mb-6">
//         <select
//           name="status"
//           onChange={handleFilterChange}
//           value={filters.status}
//           className="px-3 py-2 border rounded"
//         >
//           <option value="">All Status</option>
//           <option value="Pending">Pending</option>
//           <option value="Reviewed">Reviewed</option>
//           <option value="Accepted">Accepted</option>
//         </select>
//         <input
//           type="date"
//           name="dateRangeStart"
//           onChange={handleFilterChange}
//           value={filters.dateRangeStart}
//           className="px-3 py-2 border rounded"
//         />
//         <input
//           type="date"
//           name="dateRangeEnd"
//           onChange={handleFilterChange}
//           value={filters.dateRangeEnd}
//           className="px-3 py-2 border rounded"
//         />
//         <select
//           name="sortBy"
//           onChange={handleFilterChange}
//           value={filters.sortBy}
//           className="px-3 py-2 border rounded"
//         >
//           <option value="dateApplied">Date Applied</option>
//           <option value="user">User</option>
//         </select>
//         <select
//           name="sortOrder"
//           onChange={handleFilterChange}
//           value={filters.sortOrder}
//           className="px-3 py-2 border rounded"
//         >
//           <option value="ASC">Ascending</option>
//           <option value="DESC">Descending</option>
//         </select>
//       </div>

//       {/* Application List */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border">User</th>
//               <th className="px-4 py-2 border">Job Title</th>
//               <th className="px-4 py-2 border">Date Applied</th>
//               <th className="px-4 py-2 border">Status</th>
//               <th className="px-4 py-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applications.map((application) => (
//               <tr key={application.id}>
//                 <td className="px-4 py-2 border">{application.user.email}</td>
//                 <td className="px-4 py-2 border">{application.job.title}</td>
//                 <td className="px-4 py-2 border">{application.dateApplied}</td>
//                 <td className="px-4 py-2 border">{application.status}</td>
//                 <td className="px-4 py-2 border">
//                   <select
//                     value={application.status}
//                     onChange={(e) => handleStatusChange(application.id, e.target.value)}
//                     className="px-2 py-1"
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="Reviewed">Reviewed</option>
//                     <option value="Accepted">Accepted</option>
//                   </select>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="mt-4">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => handlePageChange(currentPage - 1)}
//           className="px-4 py-2 bg-gray-400 text-white rounded-l"
//         >
//           Previous
//         </button>
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => handlePageChange(currentPage + 1)}
//           className="px-4 py-2 bg-gray-400 text-white rounded-r"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminApplications;


import { useState, useEffect } from 'react';
import axios from '../utils/axios'; // Assuming you have an axios instance with JWT setup

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    status: '',
    dateRangeStart: '',
    dateRangeEnd: '',
    sortBy: 'dateApplied',
    sortOrder: 'ASC',
  });

  useEffect(() => {
    fetchApplications();
  }, [currentPage, filters]);

  const fetchApplications = async () => {
    try {
      const response = await axios.get('/applications', {
        params: {
          page: currentPage,
          limit: 10,
          ...filters,
        },
      });
      setApplications(response.data.applications);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`/applications/${id}/status`, { status });
      fetchApplications(); // Refresh the list
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin - Manage Applications</h1>

      {/* Filters */}
      <div className="flex gap-6 mb-6 flex-wrap">
        <select
          name="status"
          onChange={handleFilterChange}
          value={filters.status}
          className="px-4 py-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Accepted">Accepted</option>
        </select>
        <input
          type="date"
          name="dateRangeStart"
          onChange={handleFilterChange}
          value={filters.dateRangeStart}
          className="px-4 py-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          name="dateRangeEnd"
          onChange={handleFilterChange}
          value={filters.dateRangeEnd}
          className="px-4 py-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="sortBy"
          onChange={handleFilterChange}
          value={filters.sortBy}
          className="px-4 py-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="dateApplied">Date Applied</option>
          <option value="user">User</option>
        </select>
        <select
          name="sortOrder"
          onChange={handleFilterChange}
          value={filters.sortOrder}
          className="px-4 py-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>

      {/* Application List */}
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">User</th>
              <th className="px-6 py-3 text-left">Job Title</th>
              <th className="px-6 py-3 text-left">Date Applied</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {applications.map((application) => (
              <tr key={application.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 border-b">{application.user.email}</td>
                <td className="px-6 py-4 border-b">{application.job.title}</td>
                <td className="px-6 py-4 border-b">{application.dateApplied}</td>
                <td className="px-6 py-4 border-b">{application.status}</td>
                <td className="px-6 py-4 border-b">
                  <select
                    value={application.status}
                    onChange={(e) => handleStatusChange(application.id, e.target.value)}
                    className="px-3 py-1 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Reviewed">Reviewed</option>
                    <option value="Accepted">Accepted</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-400 text-white rounded-l-md shadow-md hover:bg-gray-500 transition"
        >
          Previous
        </button>
        <div className="flex items-center gap-2">
          <span>Page {currentPage} of {totalPages}</span>
        </div>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-400 text-white rounded-r-md shadow-md hover:bg-gray-500 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminApplications;
