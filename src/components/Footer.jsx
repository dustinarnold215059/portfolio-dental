import { Link } from 'react-router-dom'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Our Team', href: '/team' },
    { name: 'New Patients', href: '/new-patients' },
    { name: 'Resources', href: '/resources' },
  ]

  const services = [
    { name: 'General Dentistry', href: '/services' },
    { name: 'Cosmetic Dentistry', href: '/services' },
    { name: 'Restorative Care', href: '/services' },
    { name: 'Emergency Care', href: '/services' },
  ]

  const hours = [
    'Monday - Thursday: 8:00 AM - 6:00 PM',
    'Friday: 8:00 AM - 4:00 PM',
    'Saturday: 8:00 AM - 2:00 PM',
    'Sunday: Closed',
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              <span className="text-primary-400">Bright Smile</span> Dental Care
            </h3>
            <p className="text-sm mb-4">
              Advanced Dental Care with a Personal Touch. Serving families in Troy, MI with comprehensive dental services.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:7345557645"
                className="flex items-center gap-2 hover:text-primary-400 transition"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>(734) 555-SMILE</span>
              </a>
              <a
                href="mailto:appointments@brightsmiledental.com"
                className="flex items-center gap-2 hover:text-primary-400 transition"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>appointments@brightsmiledental.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-primary-400 transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/testimonials" className="hover:text-primary-400 transition text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="hover:text-primary-400 transition text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Office Hours</h3>
            <div className="flex items-start gap-2 mb-4">
              <ClockIcon className="h-5 w-5 flex-shrink-0 mt-1" />
              <ul className="text-sm space-y-1">
                {hours.map((hour, index) => (
                  <li key={index}>{hour}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-start gap-2 mt-4">
              <MapPinIcon className="h-5 w-5 flex-shrink-0 mt-1" />
              <div className="text-sm">
                <p>321 Dental Plaza</p>
                <p>Troy, MI 48084</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Bright Smile Dental Care. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/contact" className="hover:text-primary-400 transition">Privacy Policy</Link>
            {' | '}
            <Link to="/contact" className="hover:text-primary-400 transition">Terms of Service</Link>
            {' | '}
            <Link to="/contact" className="hover:text-primary-400 transition">Accessibility</Link>
          </p>
          <p className="mt-4 text-gray-500">
            Emergency? Call us 24/7 at <a href="tel:7345559999" className="text-primary-400 hover:underline">(734) 555-9999</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
