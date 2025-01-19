// import withAuth from '../utils/withAuth';
// import { useState, useEffect } from 'react';
// import axios from '../utils/axios';

// function Applications() {
//   const [applications, setApplications] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const userId = localStorage.getItem('userId'); // Get userId from localStorage
//     if (!userId) {
//       setError('You need to log in to view applications.');
//       return;
//     }

//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/applications/user/${userId}`);
//         setApplications(response.data);
//       } catch (err) {
//         setError('Error fetching applications.');
//       }
//     };

//     fetchApplications();
//   }, []);

//   if (error) return <p>{error}</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">My Applications</h1>
//       <div>
//         {applications.map((application) => (
//           <div key={application.id} className="p-4 mb-4 border rounded-md">
//             <h2 className="text-xl">{application.job.title}</h2>
//             <p>Status: {application.status}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default withAuth(Applications);

import withAuth from '../utils/withAuth';
import { useState, useEffect } from 'react';
import axios from '../utils/axios';

function Applications() {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Get userId from localStorage
    if (!userId) {
      setError('You need to log in to view applications.');
      return;
    }

    const fetchApplications = async () => {
      try {
        // const response = await axios.get(`http://localhost:4000/applications/user/${userId}`);
        const response = await axios.get(`https://harambeeback.onrender.com/applications/user/${userId}`);
        setApplications(response.data);
      } catch (err) {
        setError('Error fetching applications.');
      }
    };

    fetchApplications();
  }, []);

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">My Applications</h1>
        <p className="text-gray-600 mt-2">View and track your job applications</p>
      </header>

      {/* Applications List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.length > 0 ? (
          applications.map((application) => (
            <div
              key={application.id}
              className="bg-white p-6 rounded-lg shadow-lg border hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{application.job.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-semibold">Status:</span> {application.status}
              </p>
              <p className="text-gray-600">{application.job.description}</p>
              <div className="mt-4">
                <span
                  className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                    application.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-600'
                      : application.status === 'Accepted'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {application.status}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            You haven't applied for any jobs yet. Start applying today!
          </p>
        )}
      </div>
    </div>
  );
}

export default withAuth(Applications);
