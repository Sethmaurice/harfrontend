// import withAuth from '../utils/withAuth';
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
//       const response = await axios.get('/applications', {
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
//       await axios.put(`/applications/${id}/status`, { status });
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
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin - Manage Applications</h1>

//       {/* Filters */}
//       <div className="flex gap-6 mb-6 flex-wrap">
//         <select
//           name="status"
//           onChange={handleFilterChange}
//           value={filters.status}
//           className="px-4 py-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
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
//           className="px-4 py-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="date"
//           name="dateRangeEnd"
//           onChange={handleFilterChange}
//           value={filters.dateRangeEnd}
//           className="px-4 py-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
//         />
//         <select
//           name="sortBy"
//           onChange={handleFilterChange}
//           value={filters.sortBy}
//           className="px-4 py-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="dateApplied">Date Applied</option>
//           <option value="user">User</option>
//         </select>
//         <select
//           name="sortOrder"
//           onChange={handleFilterChange}
//           value={filters.sortOrder}
//           className="px-4 py-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="ASC">Ascending</option>
//           <option value="DESC">Descending</option>
//         </select>
//       </div>

//       {/* Application List */}
//       <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
//         <table className="min-w-full table-auto">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               <th className="px-6 py-3 text-left">User</th>
//               <th className="px-6 py-3 text-left">Job Title</th>
//               <th className="px-6 py-3 text-left">Date Applied</th>
//               <th className="px-6 py-3 text-left">Status</th>
//               <th className="px-6 py-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700">
//             {applications.map((application) => (
//               <tr key={application.id} className="hover:bg-gray-100">
//                 <td className="px-6 py-4 border-b">{application.user.email}</td>
//                 <td className="px-6 py-4 border-b">{application.job.title}</td>
//                 <td className="px-6 py-4 border-b">{application.dateApplied}</td>
//                 <td className="px-6 py-4 border-b">{application.status}</td>
//                 <td className="px-6 py-4 border-b">
//                   <select
//                     value={application.status}
//                     onChange={(e) => handleStatusChange(application.id, e.target.value)}
//                     className="px-3 py-1 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
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
//       <div className="mt-6 flex justify-between items-center">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => handlePageChange(currentPage - 1)}
//           className="px-4 py-2 bg-gray-400 text-white rounded-l-md shadow-md hover:bg-gray-500 transition"
//         >
//           Previous
//         </button>
//         <div className="flex items-center gap-2">
//           <span>Page {currentPage} of {totalPages}</span>
//         </div>
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => handlePageChange(currentPage + 1)}
//           className="px-4 py-2 bg-gray-400 text-white rounded-r-md shadow-md hover:bg-gray-500 transition"
//         >
//           Next
//         </button>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//           <div>
//               <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="/addJob" className="hover:text-white transition">Upload Jobs</a></li>
//                 <li><a href="/jobs" className="hover:text-white transition">Browser Jobs</a></li>
//                 <li><a href="/applicants" className="hover:text-white transition">Browser Applications</a></li>
//                 <li><a href="/" className="hover:text-white transition">Logout</a></li>
//               </ul>
//             </div>
//           <p>© {new Date().getFullYear()} Harambee Rwanda. All rights reserved. #SethMaurice</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default withAuth(AdminApplications);

import withAuth from '../utils/withAuth';
import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Filter, 
  Search, 
  ArrowUpDown, 
  Trash2, 
  Mail, 
  AlertCircle,
  CheckCircle2,
  Clock,
  RefreshCcw,
  ChevronLeft,
  ChevronRight,
  Download
} from 'lucide-react';
import axios from '../utils/axios';

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    status: '',
    dateRangeStart: '',
    dateRangeEnd: '',
    sortBy: 'dateApplied',
    sortOrder: 'ASC',
    search: ''
  });

  useEffect(() => {
    fetchApplications();
  }, [currentPage, filters]);

  const fetchApplications = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, status) => {
    setLoading(true);
    try {
      await axios.put(`/applications/${id}/status`, { status });
      alert(`Status updated to ${status}. An email notification has been sent.`);
      fetchApplications();
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setLoading(false);
    };
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      try {
        await axios.delete(`/applications/${id}`);
        fetchApplications();
      } catch (error) {
        console.error('Error deleting application:', error);
      }
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setCurrentPage(1);
  };

  const getStatusBadgeClass = (status) => {
    const baseClass = "px-3 py-1 rounded-full text-sm font-medium";
    switch (status) {
      case 'Pending':
        return `${baseClass} bg-yellow-100 text-yellow-800`;
      case 'Reviewed':
        return `${baseClass} bg-blue-100 text-blue-800`;
      case 'Accepted':
        return `${baseClass} bg-green-100 text-green-800`;
      default:
        return `${baseClass} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Application Management</h1>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by user or job title..."
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <select
              name="status"
              onChange={handleFilterChange}
              value={filters.status}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Reviewed">Reviewed</option>
              <option value="Accepted">Accepted</option>
            </select>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 pt-4 border-t">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
                <input
                  type="date"
                  name="dateRangeStart"
                  onChange={handleFilterChange}
                  value={filters.dateRangeStart}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
                <input
                  type="date"
                  name="dateRangeEnd"
                  onChange={handleFilterChange}
                  value={filters.dateRangeEnd}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select
                  name="sortBy"
                  onChange={handleFilterChange}
                  value={filters.sortBy}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="dateApplied">Date Applied</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                <select
                  name="sortOrder"
                  onChange={handleFilterChange}
                  value={filters.sortOrder}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="ASC">Ascending</option>
                  <option value="DESC">Descending</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Applications Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applicant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Applied
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((application) => (
                  <tr key={application.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <Mail className="w-5 h-5 text-gray-500" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {application.user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{application.job.title}</div>
                      <div className="text-sm text-gray-500">{application.job.company}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(application.dateApplied).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={getStatusBadgeClass(application.status)}>
                        {application.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-3">
                        <select
                          value={application.status}
                          onChange={(e) => handleStatusChange(application.id, e.target.value)}
                          className="px-3 py-1 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Reviewed">Reviewed</option>
                          <option value="Accepted">Accepted</option>
                        </select>
                        <button
                          onClick={() => handleDelete(application.id)}
                          className="text-red-600 hover:text-red-900 transition"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded-md hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border rounded-md hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/addJob" className="hover:text-white transition">Upload Jobs</a></li>
                <li><a href="/jobs" className="hover:text-white transition">Browse Jobs</a></li>
                <li><a href="/applicants" className="hover:text-white transition">Browse Applications</a></li>
                <li><a href="/" className="hover:text-white transition">Logout</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Harambee Rwanda. All rights reserved. #SethMaurice</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default withAuth(AdminApplications);
