// import { useState } from 'react';
// import axios from '../utils/axios'; // Ensure axios is configured
// import { useRouter } from 'next/router';

// export default function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:4000/auth/register', { email, password });
//       router.push('/login');
//     } catch (err) {
//       setError('Error during registration');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md w-80">
//         <h2 className="text-xl font-bold mb-4">Register</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <form onSubmit={handleRegister}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none"
//               required
//             />
//           </div>
//           <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md">
//             Register
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account?{' '}
//           <a href="/login" className="text-blue-600">Login here</a>
//         </p>
//       </div>
//     </div>
//   );
// }




// import { useState } from 'react';
// import axios from '../utils/axios';
// import { useRouter } from 'next/router';
// import Link from 'next/link';

// export default function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const handleRegister = async (e) => {
//     e.preventDefault();
    
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     setIsLoading(true);
//     setError('');

//     try {
//       await axios.post('http://localhost:4000/auth/register', { email, password });
//       router.push('/login');
//     } catch (err) {
//       setError('Error during registration. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
//         {/* Header Section */}
//         <div className="text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-2">Create Account</h2>
//           <p className="text-gray-600">Join our community today</p>
//         </div>

//         {/* Error Alert */}
//         {error && (
//           <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-red-700">{error}</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Registration Form */}
//         <form onSubmit={handleRegister} className="mt-8 space-y-6">
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
//                 required
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
//                 required
//                 placeholder="Create a password"
//               />
//             </div>

//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//                 Confirm Password
//               </label>
//               <input
//                 id="confirmPassword"
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
//                 required
//                 placeholder="Confirm your password"
//               />
//             </div>
//           </div>

//           <div className="flex items-center">
//             <input
//               id="terms"
//               name="terms"
//               type="checkbox"
//               required
//               className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//             />
//             <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
//               I agree to the{' '}
//               <a href="#" className="text-blue-600 hover:text-blue-500">
//                 Terms and Conditions
//               </a>
//             </label>
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white ${
//               isLoading
//                 ? 'bg-blue-400 cursor-not-allowed'
//                 : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
//             } transition-colors duration-200`}
//           >
//             {isLoading ? (
//               <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//             ) : (
//               'Create Account'
//             )}
//           </button>

//           <div className="text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account?{' '}
//               <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
//                 Sign in here
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }




// import { useState } from 'react';
// import axios from '../utils/axios';
// import { useRouter } from 'next/router';

// export default function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//     try {
//       await axios.post('/auth/register', { email, password });
//       router.push('/login');
//     } catch {
//       setError('Error during registration. Try again.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
//         <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Register</h2>
//         {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
//         <form onSubmit={handleRegister}>
//           <div className="mb-4">
//             <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="confirmPassword">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
//           >
//             Register
//           </button>

//           <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <a href="/login" className="text-blue-600 hover:underline">
//           Sign in here
//           </a>
//         </p>
//         </form>
//       </div>
//     </div>
//   );
// }



import { useState } from 'react';
import axios from '../utils/axios';
import { useRouter } from 'next/router';
import { Mail, Lock, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setIsLoading(true);
    setError('');

    try {
      await axios.post('/auth/register', { email, password });
      router.push('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Error during registration. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Password strength checker
  const getPasswordStrength = (pass) => {
    if (!pass) return '';
    if (pass.length < 8) return 'weak';
    if (pass.length < 12) return 'medium';
    return 'strong';
  };

  const passwordStrength = getPasswordStrength(password);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel - Decorative */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-white justify-center items-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6">Join Our Community</h1>
          <p className="text-blue-100 text-lg">
            Create an account to unlock personalized job recommendations and track your application progress.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-blue-300" />
              <span className="text-blue-100">Access to thousands of job opportunities</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-blue-300" />
              <span className="text-blue-100">Track your application status</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-blue-300" />
              <span className="text-blue-100">Get personalized job recommendations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Registration Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
              <p className="text-gray-600 mt-2">Start your career journey with us</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                <p>{error}</p>
              </div>
            )}

            {/* Registration Form */}
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                  <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Choose a strong password"
                    required
                  />
                  <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {password && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-2">
                      <div className={`h-1 flex-1 rounded ${
                        passwordStrength === 'weak' ? 'bg-red-400' :
                        passwordStrength === 'medium' ? 'bg-yellow-400' :
                        'bg-green-400'
                      }`}></div>
                      <span className="text-xs text-gray-500">
                        {passwordStrength.charAt(0).toUpperCase() + passwordStrength.slice(1)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    required
                  />
                  <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6">
              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                  Sign in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}