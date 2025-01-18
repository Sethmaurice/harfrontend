// import { useState } from 'react';
// import axios from '../utils/axios';
// import { useRouter } from 'next/router';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/auth/login', {
//         email,
//         password,
//       });
  
//       console.log('Login Response:', response.data); // Check full response here
//       console.log('AccessToken:', response.data.accessToken);
//       console.log('User ID during login:', response.data.userId);
  
//       localStorage.setItem('token', response.data.accessToken); // Store token in localStorage
//       localStorage.setItem('userId', response.data.userId); // Store userId in localStorage
//       router.push('/dash'); // Redirect to dashboard
//     } catch (err) {
//       setError('Invalid credentials'); // Show error if login fails
//     }
//   };
  

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md w-80">
//         <h2 className="text-xl font-bold mb-4">Login</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <form onSubmit={handleLogin}>
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
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Don't have an account?{' '}
//           <a href="/register" className="text-blue-600">Register here</a>
//         </p>
//       </div>
//     </div>
//   );
// }







// import { useState } from 'react';
// import axios from '../utils/axios'; // Axios instance with JWT interceptor
// import { useRouter } from 'next/router';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/auth/login', {
//         email,
//         password,
//       });
  
//       // Store token, userId, and role in localStorage
//       localStorage.setItem('token', response.data.accessToken);
//       localStorage.setItem('userId', response.data.userId);
//       localStorage.setItem('role', response.data.role); // Store role here

//       // Redirect to appropriate dashboard based on user role
//       if (response.data.role === 'admin') {
//         router.push('/adminDb'); // Admin dashboard route
//       } else {
//         router.push('/userDb'); // User dashboard route
//       }
//     } catch (err) {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md w-80">
//         <h2 className="text-xl font-bold mb-4">Login</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <form onSubmit={handleLogin}>
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
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Don't have an account?{' '}
//           <a href="/register" className="text-blue-600">Register here</a>
//         </p>
//       </div>
//     </div>
//   );
// }





// import { useState, useEffect } from 'react';
// import axios from '../utils/axios'; // Axios instance with JWT interceptor
// import { useRouter } from 'next/router';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoaded, setIsLoaded] = useState(false); // Ensures client-side rendering
//   const router = useRouter();

//   useEffect(() => {
//     // Ensures the component is only executed after hydration
//     setIsLoaded(true);
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/auth/login', {
//         email,
//         password,
//       });

//       // Store token, userId, and role in localStorage
//       localStorage.setItem('token', response.data.accessToken);
//       localStorage.setItem('userId', response.data.userId);
//       localStorage.setItem('role', response.data.role);

//       // Redirect to appropriate dashboard based on user role
//       if (response.data.role === 'admin') {
//         router.push('/adminDb'); // Admin dashboard route
//       } else {
//         router.push('/userDb'); // User dashboard route
//       }
//     } catch (err) {
//       setError('Invalid credentials');
//     }
//   };

//   if (!isLoaded) {
//     return null; // Avoid rendering until client-side rendering is ready
//   }

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md w-80">
//         <h2 className="text-xl font-bold mb-4">Login</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <form onSubmit={handleLogin}>
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
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Don't have an account?{' '}
//           <a href="/register" className="text-blue-600">Register here</a>
//         </p>
//       </div>
//     </div>
//   );
// }




// TRY ME

// import { useState, useEffect } from 'react';
// import axios from '../utils/axios';
// import { useRouter } from 'next/router';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoaded, setIsLoaded] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/auth/login', { email, password });
//       localStorage.setItem('token', response.data.accessToken);
//       localStorage.setItem('role', response.data.role);
//       response.data.role === 'admin' ? router.push('/adminDb') : router.push('/userDb');
//     } catch {
//       setError('Invalid credentials');
//     }
//   };

//   if (!isLoaded) return null;

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//         {/* <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Login</h2> */}
//         <h1 className="text-3xl font-bold text-blue-500 text-center">Login</h1>
//         {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
//         <form onSubmit={handleLogin}>
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
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don’t have an account?{' '}
//           <a href="/register" className="text-blue-600 hover:underline">
//             Register here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import { useRouter } from 'next/router';
import { User, Lock, ArrowRight, Mail } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('role', response.data.role);
      response.data.role === 'admin' ? router.push('/adminDb') : router.push('/userDb');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel - Decorative */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-white justify-center items-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>
          <p className="text-blue-100 text-lg">
            Log in to access your account and explore job opportunities that match your skills and aspirations.
          </p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Logo/Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
              <p className="text-gray-600 mt-2">Access your career dashboard</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                <p className="flex items-center">
                  <span className="mr-2">⚠️</span>
                  {error}
                </p>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
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
                    placeholder="Enter your password"
                    required
                  />
                  <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a>
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
                    Sign In
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6">
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                  Create one now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}