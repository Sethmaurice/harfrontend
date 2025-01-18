import withAuth from '../utils/withAuth';
import { useRouter } from 'next/router';

function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear(); // Clear all session data
    router.push('/login'); // Redirect to login
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => router.push('/add-job')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          ADD JOB
        </button>
        <button
          onClick={() => router.push('/jobs')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          VIEW AVAILABLE JOBS
        </button>
        <button
          onClick={() => router.push('/applications')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          VIEW MY APPLICATIONS
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-md"
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
