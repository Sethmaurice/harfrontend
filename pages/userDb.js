// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// export default function UserDashboard() {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const role = localStorage.getItem('role');

//     if (!token || role !== 'user') {
//       router.push('/login'); // Redirect to login if not a user
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
//         <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">Welcome to Your Dashboard</h1>
//         <p className="text-lg text-gray-700 text-center mb-6">
//           Welcome, User! Here you can browse available jobs, track your applications, and more.
//         </p>

//         <div className="flex flex-col gap-6">
//           <button
//             onClick={() => router.push('../jobs')}
//             className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             View Available Jobs
//           </button>
//           <button
//             onClick={() => router.push('../applications')}
//             className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
//           >
//             View My Applications
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


//TRY ME


// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// export default function UserDashboard() {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const role = localStorage.getItem('role');

//     if (!token || role !== 'user') {
//       router.push('/login'); // Redirect to login if not a user
//     } else {
//       setUser({ role });
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//     router.push('/login'); // Redirect to login after logout
//   };

//   if (!user)
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <p className="text-lg text-gray-700">Loading...</p>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <header className="bg-blue-600 text-white py-6 shadow-md">
//         <div className="container mx-auto px-4">
//           <h1 className="text-3xl font-bold text-center">User Dashboard</h1>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
//             Welcome, User!
//           </h2>
//           <p className="text-gray-600 text-center mb-6">
//             Manage your jobs and applications efficiently.
//           </p>
//         </div>

//         {/* Statistics Section */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-blue-50 text-blue-700 rounded-lg shadow p-6">
//             <h3 className="text-xl font-bold mb-2">Available Jobs</h3>
//             <p className="text-4xl font-semibold">25</p>
//           </div>
//           <div className="bg-yellow-50 text-yellow-700 rounded-lg shadow p-6">
//             <h3 className="text-xl font-bold mb-2">Pending Applications</h3>
//             <p className="text-4xl font-semibold">10</p>
//           </div>
//           <div className="bg-green-50 text-green-700 rounded-lg shadow p-6">
//             <h3 className="text-xl font-bold mb-2">Approved Applications</h3>
//             <p className="text-4xl font-semibold">8</p>
//           </div>
//         </section>

//         {/* Actions Section */}
//         <section className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <button
//               onClick={() => router.push('../jobs')}
//               className="py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 shadow"
//             >
//               View Available Jobs
//             </button>
//             <button
//               onClick={() => router.push('../applications')}
//               className="py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 shadow"
//             >
//               View My Applications
//             </button>
//             <button
//               onClick={handleLogout}
//               className="py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 shadow"
//             >
//               Logout
//             </button>
//           </div>
//         </section>
//       </main>

//        {/* Footer */}
//        <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//           <div>
//               <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="/jobs" className="hover:text-white transition">Browse Jobs</a></li>
//                 <li><a href="/applications" className="hover:text-white transition">My Applications</a></li>
//                 <li><a href="/" className="hover:text-white transition">Logout</a></li>
//               </ul>
//             </div>
//           <p>© {new Date().getFullYear()} Harambee Rwanda. All rights reserved. #SethMaurice</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Briefcase, FileText, Bell, User, LogOut, Search, BookOpen, CheckCircle, Clock } from 'lucide-react';

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const [recentJobs, setRecentJobs] = useState([
    { id: 1, title: 'Software Engineer', company: 'rssb', location: 'Kigali', posted: '2d ago' },
    { id: 2, title: 'Product Manager', company: 'Harambe', location: 'Kigali', posted: '4d ago' },
    { id: 3, title: 'UX Designer', company: 'Norrsken', location: 'Rwanda', posted: '6d ago' },
  ]);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token || role !== 'user') {
      router.push('/login');
    } else {
      setUser({ role });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    router.push('/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
          <div className="text-lg text-gray-600">Loading your dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="hidden lg:flex flex-col w-64 bg-white border-r">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-800">My Career Hub</h2>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg">
            <BookOpen size={20} />
            <span>Dashboard</span>
          </button>
          <button onClick={() => router.push('../jobs')} 
                  className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition">
            <Briefcase size={20} />
            <span>Browse Jobs</span>
          </button>
          <button onClick={() => router.push('../applications')}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition">
            <FileText size={20} />
            <span>My Applications</span>
          </button>
        </nav>

        <div className="p-4">
          <button onClick={handleLogout}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition">
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Welcome Back!</h1>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Bell size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <User size={20} />
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for jobs..."
                className="w-full px-4 py-3 pl-12 bg-white rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Available Jobs</p>
                  <h3 className="text-2xl font-bold text-gray-900">8</h3>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pending Applications</p>
                  <h3 className="text-2xl font-bold text-gray-900">4</h3>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Approved Applications</p>
                  <h3 className="text-2xl font-bold text-gray-900">1</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Jobs */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Job Matches</h2>
            <div className="space-y-4">
              {recentJobs.map(job => (
                <div key={job.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{job.title}</h3>
                      <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">{job.posted}</span>
                    <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Harambee Rwanda. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}