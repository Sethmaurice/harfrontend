import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';

export default function Apply() {
  const router = useRouter();
  const { jobId } = router.query;
  const [job, setJob] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/jobs`, {
          params: { id: jobId },
        });
        setJob(response.data[0]);
      } catch (err) {
        console.error('Error fetching job details:', err);
      }
    };

    if (jobId) fetchJobDetails();
  }, [jobId]);

  // const handleApply = async () => {
  //   const userId = localStorage.getItem('userId'); // Retrieve user ID
  //   // const role = localStorage.getItem('role'); // Retrieve role
  //   console.log('User ID:', userId);
  //   console.log('Job ID:', jobId);
  //   // console.log('Role:', role);

  
  //   if (!userId) {
  //     alert('You need to log in to apply for this job.');
  //     router.push('/login');
  //     return;
  //   }
  
  //   try {
  //     await axios.post(`http://localhost:4000/applications/apply/${userId}/${jobId}`);
  //     alert('Application successful!');
  //     router.push('/applications'); // Redirect to applications page
  //   } catch (err) {
  //     console.error('Application error:', err.response?.data || err.message);
  //     setError('Failed to apply for the job. Please try again.');
  //   }
  // };

  const handleApply = async () => {
    const userId = localStorage.getItem('userId'); // Retrieve user ID

    if (!userId) {
      alert('You must have an account to apply.');
      const choice = window.confirm('Would you like to log in or sign up?');
      if (choice) {
        router.push('/login');
      }
      return;
    }

    try {
      await axios.post(`http://localhost:4000/applications/apply/${userId}/${jobId}`);
      alert('Application successful!');
      router.push('/applications'); // Redirect to applications page
    } catch (err) {
      console.error('Application error:', err.response?.data || err.message);
      setError('Failed to apply for the job. Please try again.');
    }
  };
  

  if (!job) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Apply for Job</h1>
      <div className="mt-4">
        <h2 className="text-xl">{job.title}</h2>
        <p>Category: {job.category}</p>
        <p>Location: {job.location}</p>
        <p>{job.description}</p>
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={handleApply}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Confirm Application
        </button>
      </div>
    </div>
  );
}
