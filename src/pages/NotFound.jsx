import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon } from '@heroicons/react/24/outline';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-cyan-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-block mb-8"
        >
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            404
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          This page seems to have been extracted! Don't worry though - we'll help you find what you're looking for.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <HomeIcon className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-teal-600 font-semibold rounded-lg border-2 border-teal-600 transition-all duration-300"
          >
            Book Appointment
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Quick Links
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link to="/services" className="text-teal-600 hover:underline">Services</Link>
            <span className="text-gray-300">|</span>
            <Link to="/team" className="text-teal-600 hover:underline">Our Team</Link>
            <span className="text-gray-300">|</span>
            <Link to="/new-patients" className="text-teal-600 hover:underline">New Patients</Link>
            <span className="text-gray-300">|</span>
            <Link to="/contact" className="text-teal-600 hover:underline">Contact</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;
