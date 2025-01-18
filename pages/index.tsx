// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// import router from "next/router";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home() {
//   return (
//     <div
//       className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-100 text-gray-800`}
//     >
//       {/* Header */}
//       <header className="bg-blue-600 text-white py-6 shadow-md">
//         <div className="container mx-auto px-6 flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Harambee Rwanda</h1>
//           <nav className="flex gap-6">
//             <button
//               onClick={() => router.push("../login")}
//               className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition"
//             >
//               Login
//             </button>
//             <button
//               onClick={() => router.push("../register")}
//               className="bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//             >
//               Sign Up
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-blue-50 py-20">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-extrabold text-blue-700 mb-6">
//             Discover Your Dream Job
//           </h2>
//           <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//             Explore thousands of job opportunities and take your career to the
//             next level. Connect with top employers and make your mark.
//           </p>
//           <button
//             onClick={() => router.push("../jobs")}
//             className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
//           >
//             Explore Jobs
//           </button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
//             Why Choose Harambee Rwanda?
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="flex flex-col items-center text-center">
//               <h4 className="text-xl font-semibold mb-2">Browse Jobs</h4>
//               <p className="text-gray-600">
//                 Easily explore and filter jobs that suit your skills and
//                 preferences.
//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center">
//               <h4 className="text-xl font-semibold mb-2">Apply with Ease</h4>
//               <p className="text-gray-600">
//                 Submit applications quickly with our intuitive platform.
//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center">
//               <h4 className="text-xl font-semibold mb-2">Track Progress</h4>
//               <p className="text-gray-600">
//                 Monitor your application status and receive timely updates.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-200 text-gray-600 py-8">
//         <div className="container mx-auto px-6 text-center">
//           <p>© {new Date().getFullYear()} Harambee Rwanda. All rights reserved.</p>
//           <nav className="flex justify-center gap-4 mt-4">
//             <a
//               href="#"
//               className="hover:underline"
//               onClick={() => router.push("../terms")}
//             >
//               Terms
//             </a>
//             <a
//               href="#"
//               className="hover:underline"
//               onClick={() => router.push("../privacy")}
//             >
//               Privacy
//             </a>
//           </nav>
//         </div>
//       </footer>
//     </div>
//   );
// }


import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Geist, Geist_Mono } from "next/font/google";
import { Search, MapPin, BriefcaseIcon, TrendingUp, Users, Bell } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push(`/jobs?search=${searchQuery}&location=${location}`);
  };

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}>
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-4 fixed w-full z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BriefcaseIcon className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Harambee Rwanda</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/jobs" className="hover:text-blue-200 transition">Find Jobs</a>
            {/* <a href="/companies" className="hover:text-blue-200 transition">Companies</a>
            <a href="/resources" className="hover:text-blue-200 transition">Resources</a> */}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push("/login")}
              className="bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-900 transition"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/register")}
              className="bg-white text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Search */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">
              Find Your Next Career Opportunity in Rwanda
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Connect with top employers and discover thousands of job opportunities across Rwanda
            </p>
            
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center bg-gray-50 rounded px-4">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title or keywords"
                  className="w-full p-2 bg-transparent focus:outline-none text-gray-800"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex-1 flex items-center bg-gray-50 rounded px-4">
                <MapPin className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full p-2 bg-transparent focus:outline-none text-gray-800"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Harambee Rwanda?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BriefcaseIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Smart Job Matching</h4>
              <p className="text-gray-600">
                Our AI-powered system matches your skills and preferences with the perfect job opportunities.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Career Growth</h4>
              <p className="text-gray-600">
                Access professional development resources and track your career progress.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Real-time Updates</h4>
              <p className="text-gray-600">
                Get instant notifications about new job postings and application status changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600">5000+</p>
              <p className="text-gray-600">Active Jobs</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">1000+</p>
              <p className="text-gray-600">Companies</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">10000+</p>
              <p className="text-gray-600">Job Seekers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">95%</p>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">About Us</h5>
              <p className="text-gray-400">
                Harambee Rwanda is dedicated to connecting talented individuals with 
                outstanding career opportunities across Rwanda.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/jobs" className="hover:text-white transition">Browse Jobs Here</a></li>
                <li><a href="#" className="hover:text-white transition">Companies</a></li>
                <li><a href="#" className="hover:text-white transition">Resources</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Connect With Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Users className="w-6 h-6" />
                </a>
                {/* Add more social icons as needed */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Harambee Rwanda. All rights reserved. #SethMaurice</p>
          </div>
        </div>
      </footer>
    </div>
  );
}