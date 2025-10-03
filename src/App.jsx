// src/App.jsx
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
   return (
      <div className='flex flex-col min-h-screen bg-gray-900 text-white p-6 md:p-12'>
         <h1 className='text-5xl font-extrabold mb-6'>
            React Router Night Blog
         </h1>
         <p className='text-gray-400 text-lg max-w-3xl mb-6'>
            Welcome to your React Router practice site! Explore different pages
            to see navigation, layouts, and dark mode styling in action.
         </p>

         <div className='grid md:grid-cols-2 gap-6'>
            <article className='bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition'>
               <h2 className='text-2xl font-bold mb-2'>
                  Getting Started with React Router
               </h2>
               <p className='text-gray-300'>
                  pl Learn the basics of React Router v6, including routes,
                  links, and nested navigation.
               </p>
            </article>

            <article className='bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition'>
               <h2 className='text-2xl font-bold mb-2'>
                  Building a Multi-Page App
               </h2>
               <p className='text-gray-300'>
                  See how to structure your app with multiple pages, layout
                  components, and shared footers.
               </p>
            </article>

            <article className='bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition'>
               <h2 className='text-2xl font-bold mb-2'>
                  Styling with Tailwind CSS
               </h2>
               <p className='text-gray-300'>
                  Explore how Tailwind makes it easy to build responsive,
                  dark-themed UIs for your React apps.
               </p>
            </article>

            <article className='bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition'>
               <h2 className='text-2xl font-bold mb-2'>
                  Dark Mode Best Practices
               </h2>
               <p className='text-gray-300'>
                  Learn how to use color contrast and spacing for optimal
                  readability in night mode designs.
               </p>
            </article>
         </div>
      </div>
   );
}

function About() {
   return (
      <div className='flex flex-col min-h-screen bg-gray-800 text-white p-6 md:p-12'>
         <h1 className='text-4xl font-bold mb-6'>About This Blog</h1>
         <p className='text-gray-300 max-w-3xl mb-4'>
            This project is a playground for learning React Router DOM v6. Each
            page demonstrates routing, navigation, and responsive design.
         </p>
         <p className='text-gray-300 max-w-3xl mb-4'>
            Tailwind CSS is used for styling. Everything is dark-themed to
            reduce eye strain during late-night coding sessions.
         </p>
         <p className='text-gray-300 max-w-3xl'>
            Navigate through the pages to explore Services, Portfolio, and
            Contact sections.
         </p>
      </div>
   );
}

function Services() {
   return (
      <div className='flex flex-col min-h-screen bg-gray-900 text-white p-6 md:p-12'>
         <h1 className='text-4xl font-bold mb-6'>Services Offered</h1>
         <ul className='space-y-4 text-gray-300 max-w-3xl'>
            <li>
               <span className='font-semibold text-blue-400'>
                  React Router Training:
               </span>{' '}
               Step-by-step tutorials for beginners to advanced users.
            </li>
            <li>
               <span className='font-semibold text-blue-400'>
                  Component Design:
               </span>{' '}
               Learn how to build reusable and responsive React components.
            </li>
            <li>
               <span className='font-semibold text-blue-400'>
                  Tailwind CSS Styling:
               </span>{' '}
               Dark-mode and responsive design tips for real-world apps.
            </li>
            <li>
               <span className='font-semibold text-blue-400'>
                  Project Reviews:
               </span>{' '}
               Practical feedback on your React projects and routing setups.
            </li>
         </ul>
      </div>
   );
}

function Portfolio() {
   return (
      <div className='flex flex-col min-h-screen bg-gray-800 text-white p-6 md:p-12'>
         <h1 className='text-4xl font-bold mb-6'>Portfolio</h1>
         <p className='text-gray-300 mb-6 max-w-3xl'>
            Here's a showcase of mini-projects demonstrating React Router v6,
            multi-page apps, and responsive design:
         </p>
         <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition'>
               <h2 className='text-2xl font-bold mb-2'>Blog SPA</h2>
               <p className='text-gray-300'>
                  A single-page blog application with multiple routes and dark
                  mode styling.
               </p>
            </div>
            <div className='bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition'>
               <h2 className='text-2xl font-bold mb-2'>Portfolio Site</h2>
               <p className='text-gray-300'>
                  Showcasing projects with routing, Tailwind design, and
                  responsive layouts.
               </p>
            </div>
            <div className='bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition'>
               <h2 className='text-2xl font-bold mb-2'>Tutorial Hub</h2>
               <p className='text-gray-300'>
                  Interactive tutorials for learning React Router v6 and
                  component design.
               </p>
            </div>
            <div className='bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition'>
               <h2 className='text-2xl font-bold mb-2'>Night Mode Dashboard</h2>
               <p className='text-gray-300'>
                  Dashboard template optimized for dark mode viewing and
                  responsive layouts.
               </p>
            </div>
         </div>
      </div>
   );
}

function Contact() {
   return (
      <div className='flex flex-col min-h-screen bg-gray-900 text-white p-6 md:p-12'>
         <h1 className='text-4xl font-bold mb-6'>Get in Touch</h1>
         <p className='text-gray-300 max-w-3xl mb-4'>
            Have questions about React Router or want to practice routing
            together? Reach out!
         </p>
         <form className='max-w-md flex flex-col space-y-4'>
            <input
               type='text'
               placeholder='Name'
               className='p-3 rounded bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400'
            />
            <input
               type='email'
               placeholder='Email'
               className='p-3 rounded bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400'
            />
            <textarea
               placeholder='Message'
               rows={4}
               className='p-3 rounded bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400'
            />
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition'>
               Send Message
            </button>
         </form>
      </div>
   );
}

function Footer() {
   return (
      <footer className='bg-gray-700 text-white p-4 text-center'>
         <p>
            &copy; {new Date().getFullYear()} React Router Night Blog. All
            rights reserved.
         </p>
      </footer>
   );
}

export default function App() {
   return (
      <Router basename='/react-router-dom'>
         <div className='flex flex-col min-h-screen bg-gray-900 text-white'>
            <nav className='bg-gray-800 p-4 flex flex-wrap justify-center space-x-4 md:space-x-6 shadow-md'>
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
