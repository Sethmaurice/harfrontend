// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import axios from '../../utils/axios';

// export default function Apply() {
//   const router = useRouter();
//   const { jobId } = router.query;
//   const [job, setJob] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true); // For loading state


//   useEffect(() => {
//     const fetchJobDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/jobs`, {
//           params: { id: jobId },
//         });
//         setJob(response.data[0]);
//       } catch (err) {
//         console.error('Error fetching job details:', err);
//       }
//     };

//     if (jobId) fetchJobDetails();
//   }, [jobId]);

  
  

//   // const handleApply = async () => {
//   //   const userId = localStorage.getItem('userId'); // Retrieve user ID
//   //   // const role = localStorage.getItem('role'); // Retrieve role
//   //   console.log('User ID:', userId);
//   //   console.log('Job ID:', jobId);
//   //   // console.log('Role:', role);

  
//   //   if (!userId) {
//   //     alert('You need to log in to apply for this job.');
//   //     router.push('/login');
//   //     return;
//   //   }
  
//   //   try {
//   //     await axios.post(`http://localhost:4000/applications/apply/${userId}/${jobId}`);
//   //     alert('Application successful!');
//   //     router.push('/applications'); // Redirect to applications page
//   //   } catch (err) {
//   //     console.error('Application error:', err.response?.data || err.message);
//   //     setError('Failed to apply for the job. Please try again.');
//   //   }
//   // };

//   const handleApply = async () => {
//     const userId = localStorage.getItem('userId'); // Retrieve user ID

//     if (!userId) {
//       alert('You must have an account to apply.');
//       const choice = window.confirm('Would you like to log in or sign up?');
//       if (choice) {
//         router.push('/login');
//       }
//       return;
//     }

//     try {
//       await axios.post(`http://localhost:4000/applications/apply/${userId}/${jobId}`);
//       // await axios.post(`https://harambeeback.onrender.com/applications/apply/${userId}/${jobId}`);
//       alert('Application successful!');
//       router.push('/applications'); // Redirect to applications page
//     } catch (err) {
//       console.error('Application error:', err.response?.data || err.message);
//       setError('Failed to apply for the job. Please try again.');
//     }
//   };
  

//   if (!job) return <p>Loading...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Apply for Job</h1>
//       <div className="mt-4">
//         <h2 className="text-xl">{job.title}</h2>
//         <p>Category: {job.category}</p>
//         <p>Location: {job.location}</p>
//         <p>{job.description}</p>
//         {error && <p className="text-red-500">{error}</p>}
//         <button
//           onClick={handleApply}
//           className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
//         >
//           Confirm Application
//         </button>
//       </div>
//     </div>
//   );
// }


import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Building2, MapPin, Calendar, Briefcase, ArrowLeft, Clock, DollarSign } from 'lucide-react';
import axios from '../../utils/axios';

export default function Apply() {
  const router = useRouter();
  const { jobId } = router.query;
  const [job, setJob] = useState(null);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/jobs`, {
          params: { id: jobId },
        });
        setJob(response.data[0]);
      } catch (err) {
        console.error('Error fetching job details:', err);
        setError('Failed to load job details. Please try again.');
      }
    };

    if (jobId) fetchJobDetails();
  }, [jobId]);

  const handleApply = async () => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      const choice = window.confirm('You must have an account to apply. Would you like to log in or sign up?');
      if (choice) {
        router.push('/login');
      }
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`http://localhost:4000/applications/apply/${userId}/${jobId}`);
      setShowConfirmation(true);
      setTimeout(() => {
        router.push('/applications');
      }, 2000);
    } catch (err) {
      console.error('Application error:', err.response?.data || err.message);
      setError('Failed to apply for the job. Please try again. But remember you can not apply twice for one job');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job && !error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-gray-600">Loading job details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => router.back()}
            className="text-blue-600 hover:text-blue-800 transition flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => router.back()}
            className="text-gray-600 hover:text-gray-800 transition flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Jobs
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Job Details Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {job.type || 'Full-time'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Building2 className="w-5 h-5 mr-2" />
                <span>{job.company || 'Company Name'}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Briefcase className="w-5 h-5 mr-2" />
                <span>{job.category}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <span>{job.posted || 'Recently posted'}</span>
              </div>
              {job.salary && (
                <div className="flex items-center text-gray-600">
                  <DollarSign className="w-5 h-5 mr-2" />
                  <span>{job.salary}</span>
                </div>
              )}
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <div className="prose max-w-none text-gray-600">
                {job.description}
              </div>
            </div>
          </div>

          {/* Application Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Submit Your Application</h2>
            <p className="text-gray-600 mb-6">
              Ready to apply for this position? Click the button below to submit your application.
              Make sure your profile is up to date before applying.
            </p>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4">
                {error}
              </div>
            )}

            {showConfirmation ? (
              <div className="bg-green-50 text-green-600 p-4 rounded-lg">
                Application submitted successfully! Redirecting to your applications...
              </div>
            ) : (
              <div className="flex gap-4">
                <button
                  onClick={handleApply}
                  disabled={isSubmitting}
                  className={`flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition 
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
                <button
                  onClick={() => router.back()}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Harambee Rwanda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}