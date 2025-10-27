import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    reasonForVisit: '',
    insuranceProvider: '',
    patientType: 'new',
    additionalNotes: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.reasonForVisit) newErrors.reasonForVisit = 'Please select a reason for visit'

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setErrors({})
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        reasonForVisit: '',
        insuranceProvider: '',
        patientType: 'new',
        additionalNotes: '',
      })
      setTimeout(() => setSubmitted(false), 8000)
    } else {
      setErrors(newErrors)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const officeHours = [
    { day: 'Monday - Thursday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 2:00 PM (by appointment)' },
    { day: 'Sunday', hours: 'Closed' },
  ]

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      primary: '(734) 555-SMILE (7645)',
      secondary: 'Emergency: (734) 555-9999',
      action: 'tel:7345557645',
      description: 'Call us during business hours',
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      primary: 'appointments@brightsmiledental.com',
      secondary: 'We respond within 24 hours',
      action: 'mailto:appointments@brightsmiledental.com',
      description: 'Send us an email',
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      primary: '321 Dental Plaza',
      secondary: 'Troy, MI 48084',
      action: 'https://maps.google.com',
      description: 'Get directions',
    },
  ]

  const reasonsForVisit = [
    'Routine Cleaning & Checkup',
    'New Patient Exam',
    'Toothache or Pain',
    'Cosmetic Consultation',
    'Emergency',
    'Teeth Whitening',
    'Dental Implants',
    'Crowns or Veneers',
    'Root Canal',
    'Dentures or Bridges',
    'Other',
  ]

  const insuranceProviders = [
    'Delta Dental',
    'Blue Cross Blue Shield',
    'Aetna',
    'Cigna',
    'MetLife',
    'United Healthcare',
    'Humana',
    'Guardian',
    'No Insurance',
    'Other',
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100">
              Ready to schedule your appointment? We're here to help you achieve
              the healthy, beautiful smile you deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{method.title}</h3>
                <p className="text-primary-600 font-semibold mb-1">{method.primary}</p>
                <p className="text-gray-600 text-sm mb-3">{method.secondary}</p>
                <span className="text-primary-600 font-medium hover:text-primary-700">
                  {method.description} →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Request Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Request an Appointment</h2>
              <p className="section-subtitle">
                Fill out the form below and we'll contact you to confirm your appointment
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      aria-invalid={errors.firstName ? 'true' : 'false'}
                      aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="mt-1 text-sm text-red-600 flex items-center">
                        <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      aria-invalid={errors.lastName ? 'true' : 'false'}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(734) 555-1234"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      aria-invalid={errors.phone ? 'true' : 'false'}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Patient Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Type *
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="patientType"
                        value="new"
                        checked={formData.patientType === 'new'}
                        onChange={handleChange}
                        className="mr-2 text-primary-600 focus:ring-primary-600"
                      />
                      <span className="text-gray-700">New Patient</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="patientType"
                        value="existing"
                        checked={formData.patientType === 'existing'}
                        onChange={handleChange}
                        className="mr-2 text-primary-600 focus:ring-primary-600"
                      />
                      <span className="text-gray-700">Existing Patient</span>
                    </label>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (8AM-12PM)</option>
                      <option value="afternoon">Afternoon (12PM-4PM)</option>
                      <option value="evening">Evening (4PM-6PM)</option>
                    </select>
                  </div>
                </div>

                {/* Reason for Visit */}
                <div>
                  <label htmlFor="reasonForVisit" className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Visit *
                  </label>
                  <select
                    id="reasonForVisit"
                    name="reasonForVisit"
                    value={formData.reasonForVisit}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent ${
                      errors.reasonForVisit ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-invalid={errors.reasonForVisit ? 'true' : 'false'}
                  >
                    <option value="">Select a reason</option>
                    {reasonsForVisit.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                  {errors.reasonForVisit && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.reasonForVisit}
                    </p>
                  )}
                </div>

                {/* Insurance Provider */}
                <div>
                  <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700 mb-2">
                    Insurance Provider
                  </label>
                  <select
                    id="insuranceProvider"
                    name="insuranceProvider"
                    value={formData.insuranceProvider}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Select provider</option>
                    {insuranceProviders.map((provider) => (
                      <option key={provider} value={provider}>
                        {provider}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    rows="4"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Tell us about any specific concerns, questions, or special accommodations you may need..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg"
                  >
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-green-800 font-semibold text-lg mb-1">
                          Thank You for Contacting Us!
                        </h3>
                        <p className="text-green-700">
                          We've received your appointment request. Our team will contact you within
                          24 hours to confirm your appointment. If this is an emergency, please call
                          us immediately at (734) 555-9999.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                >
                  Request Appointment
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. By submitting this form, you consent to be contacted by our office
                  regarding your appointment request.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Hours & Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <ClockIcon className="h-10 w-10 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
              </div>
              <div className="card p-6 space-y-4">
                {officeHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0"
                  >
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
                  <p className="text-red-800 font-semibold">Emergency Care Available 24/7</p>
                  <p className="text-red-700 text-sm mt-1">
                    Call <a href="tel:7345559999" className="underline">(734) 555-9999</a> for urgent dental needs
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Location & Directions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <MapPinIcon className="h-10 w-10 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Location & Directions</h3>
              </div>
              <div className="card p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-700">321 Dental Plaza</p>
                  <p className="text-gray-700">Troy, MI 48084</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Directions & Parking</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Located on Dental Plaza, just off Main Street
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Free parking available in our lot
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Wheelchair accessible entrance
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Easily accessible from I-75
                    </li>
                  </ul>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-0">
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <MapPinIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Interactive Map</p>
            <p className="text-gray-500 text-sm">321 Dental Plaza, Troy, MI 48084</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prefer to Call?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Our friendly staff is ready to answer your questions and schedule your appointment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7345557645"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <PhoneIcon className="h-5 w-5" />
                Call (734) 555-SMILE (7645)
              </a>
              <a
                href="tel:7345559999"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PhoneIcon className="h-5 w-5" />
                Emergency: (734) 555-9999
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
