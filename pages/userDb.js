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

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token || role !== 'user') {
      router.push('/login'); // Redirect to login if not a user
    } else {
      setUser({ role });
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">User Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Welcome, User!
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Manage your jobs and applications efficiently.
          </p>
        </div>

        {/* Statistics Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 text-blue-700 rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">Available Jobs</h3>
            <p className="text-4xl font-semibold">25</p>
          </div>
          <div className="bg-yellow-50 text-yellow-700 rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">Pending Applications</h3>
            <p className="text-4xl font-semibold">10</p>
          </div>
          <div className="bg-green-50 text-green-700 rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">Approved Applications</h3>
            <p className="text-4xl font-semibold">8</p>
          </div>
        </section>

        {/* Actions Section */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => router.push('../jobs')}
              className="py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 shadow"
            >
              View Available Jobs
            </button>
            <button
              onClick={() => router.push('../applications')}
              className="py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 shadow"
            >
              View My Applications
            </button>
            <button
              onClick={handleLogout}
              className="py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 shadow"
            >
              Logout
            </button>
          </div>
        </section>
      </main>

       {/* Footer */}
       <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/jobs" className="hover:text-white transition">Browse Jobs</a></li>
                <li><a href="/applications" className="hover:text-white transition">My Applications</a></li>
                <li><a href="/" className="hover:text-white transition">Logout</a></li>
              </ul>
            </div>
          <p>© {new Date().getFullYear()} Harambee Rwanda. All rights reserved. #SethMaurice</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
