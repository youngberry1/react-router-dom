// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
   return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
         <h1 className='text-5xl font-extrabold mb-4'>
            Welcome to Night Mode App
         </h1>
         <p className='text-lg text-gray-400'>
            Explore the pages with React Router v6!
         </p>
      </div>
   );
}

function About() {
   return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white'>
         <h1 className='text-4xl font-bold mb-2'>About Page</h1>
         <p className='text-gray-400 max-w-xl text-center'>
            This is the about page. Learn more about our awesome React project
            and night mode styling.
         </p>
      </div>
   );
}

function Services() {
   return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
         <h1 className='text-4xl font-bold mb-2'>Services</h1>
         <ul className='text-gray-400 mt-4 space-y-2'>
            <li>🌙 Night Mode UI/UX</li>
            <li>⚡ Fast React Performance</li>
            <li>🎨 Beautiful Tailwind Design</li>
         </ul>
      </div>
   );
}

function Contact() {
   return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white'>
         <h1 className='text-4xl font-bold mb-2'>Contact Us</h1>
         <p className='text-gray-400 mt-2'>Email: contact@nightmodeapp.com</p>
         <p className='text-gray-400'>Phone: +123 456 7890</p>
      </div>
   );
}

function Portfolio() {
   return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
         <h1 className='text-4xl font-bold mb-2'>Portfolio</h1>
         <p className='text-gray-400 max-w-xl text-center'>
            Showcase of projects built with React, Tailwind CSS, and beautiful
            night mode themes.
         </p>
      </div>
   );
}

function Footer() {
   return (
      <footer className='bg-gray-700 text-white p-4 text-center'>
         <p>
            &copy; {new Date().getFullYear()} Night Mode App. All rights
            reserved.
         </p>
      </footer>
   );
}

export default function App() {
   return (
      <Router>
         <div className='flex flex-col min-h-screen'>
            <nav className='bg-gray-800 p-4 flex justify-center space-x-6 shadow-md'>
               <Link
                  to='/'
                  className='text-blue-400 hover:text-blue-600 font-semibold'
               >
                  Home
               </Link>
               <Link
                  to='/about'
                  className='text-blue-400 hover:text-blue-600 font-semibold'
               >
                  About
               </Link>
               <Link
                  to='/services'
                  className='text-blue-400 hover:text-blue-600 font-semibold'
               >
                  Services
               </Link>
               <Link
                  to='/portfolio'
                  className='text-blue-400 hover:text-blue-600 font-semibold'
               >
                  Portfolio
               </Link>
               <Link
                  to='/contact'
                  className='text-blue-400 hover:text-blue-600 font-semibold'
               >
                  Contact
               </Link>
            </nav>
            <div className='flex-grow'>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/services' element={<Services />} />
                  <Route path='/portfolio' element={<Portfolio />} />
                  <Route path='/contact' element={<Contact />} />
               </Routes>
            </div>
            <Footer />
         </div>
      </Router>
   );
}
