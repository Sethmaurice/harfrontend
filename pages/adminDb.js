// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// export default function AdminDashboard() {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const role = localStorage.getItem('role');

//     if (!token || role !== 'admin') {
//       router.push('/login'); // Redirect to login if not an admin
//     } else {
//       setUser({ role });
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//     router.push('/login'); // Redirect to login after logout
//   };

//   if (!user) return <div>Loading...</div>; // Show loading or blank page until user data is available

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
//         <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">Welcome to the Admin Dashboard</h1>
//         <p className="text-lg text-gray-700 text-center mb-6">
//           Welcome, Admin! Manage job listings, view applicants, and more.
//         </p>

//         <div className="flex flex-col gap-6">
//           <button
//             onClick={() => router.push('../addJob')}
//             className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             Add New Job Listing
//           </button>
//           <button
//             onClick={() => router.push('../jobs')}
//             className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
//           >
//             View Available Jobs
//           </button>
//           <button
//             onClick={() => router.push('/applicants')}
//             className="w-full py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
//           >
//             Manage Applicants
//           </button>
//           <button
//             onClick={handleLogout}
//             className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement);

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [statistics, setStatistics] = useState({
    totalJobs: 0,
    totalApplications: 0, // Initially set to 0
    approvedApplications: 0,
  });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token || role !== 'admin') {
      router.push('/login'); // Redirect to login if not an admin
    } else {
      setUser({ role });

  // Fetch statistics data from backend
  const fetchStatistics = async () => {
    try {
      const response = await fetch('/jobs/total');
      if (!response.ok) {
        const errorText = await response.text(); // Get the error text for better debugging
        console.error('Error response:', errorText);
        throw new Error('Failed to fetch statistics');
      }
      const data = await response.json();
      setStatistics(prevStats => ({
        ...prevStats,
        totalJobs: data.totalJobs,
      }));
    } catch (error) {
      console.error('Error fetching total jobs:', error);
    }
  };
  
  
  fetchStatistics(); // Call the function to get the data
}
}, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    router.push('/login'); // Redirect to login after logout
  };

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-700">Loading...</p>
      </div>
    );

  // Charts data
  const jobApplicationsOverTime = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Job Applications',
        data: [30, 40, 45, 50, 60, 70],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const jobListingsByCategory = {
    labels: ['Tech', 'Marketing', 'Finance', 'Sales', 'Design'],
    datasets: [
      {
        label: 'Job Listings',
        data: [15, 10, 7, 8, 10],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const jobApplicationsByLocation = {
    labels: ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Seattle'],
    datasets: [
      {
        label: 'Job Applications by Location',
        data: [10, 20, 10, 2, 22],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Welcome, Admin!</h2>
          <p className="text-gray-600 text-center mb-6">
            Manage job listings, applicants, and more with ease.
          </p>
        </div>

        {/* Statistics Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 text-blue-700 rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">Total Jobs</h3>
            <p className="text-4xl font-semibold">{statistics.totalJobs}</p>
          </div>
          <div className="bg-yellow-50 text-yellow-700 rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">Total Applications</h3>
            <p className="text-4xl font-semibold">{statistics.totalApplications}</p>
          </div>
          <div className="bg-green-50 text-green-700 rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">Approved Applications</h3>
            <p className="text-4xl font-semibold">{statistics.approvedApplications}</p>
          </div>
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Job Applications Over Time</h3>
            <Line data={jobApplicationsOverTime} />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Job Listings by Category</h3>
            <Bar data={jobListingsByCategory} />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Job Applications by Location</h3>
            <Pie data={jobApplicationsByLocation} style={{ height: '10px', width: '10px' }} />
          </div>

        </section>

        {/* Actions Section */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <button
              onClick={() => router.push('../addJob')}
              className="py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-600 shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
            >
              Add New Job Listing
            </button>
            <button
              onClick={() => router.push('../jobs')}
              className="py-4 px-6 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:bg-gradient-to-l hover:from-indigo-700 hover:to-indigo-600 shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
            >
              View Available Jobs
            </button>
            <button
              onClick={() => router.push('/applicants')}
              className="py-4 px-6 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg hover:bg-gradient-to-l hover:from-teal-700 hover:to-teal-600 shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
            >
              Manage Applicants
            </button>
            <button
              onClick={handleLogout}
              className="py-4 px-6 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg hover:bg-gradient-to-l hover:from-red-700 hover:to-red-600 shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
            >
              Logout
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-600 py-4 text-center">
        © {new Date().getFullYear()} Job Portal. All rights reserved.
      </footer>
    </div>
  );
}
