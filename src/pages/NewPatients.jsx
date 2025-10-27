import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ClipboardDocumentListIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  DocumentArrowDownIcon,
  CheckCircleIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'

export default function NewPatients() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    insurance: '',
    reason: '',
    preferredDate: '',
    preferredTime: '',
    hearAboutUs: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const firstVisitSteps = [
    {
      step: 1,
      title: 'Complete Patient Forms',
      description: 'Fill out our new patient registration forms online or arrive 15 minutes early to complete them in our office.',
    },
    {
      step: 2,
      title: 'Comprehensive Examination',
      description: 'Dr. Smith or Dr. Johnson will perform a thorough examination, including digital X-rays and oral cancer screening.',
    },
    {
      step: 3,
      title: 'Personalized Treatment Plan',
      description: 'We will discuss your dental health, answer questions, and create a customized treatment plan tailored to your needs.',
    },
    {
      step: 4,
      title: 'Professional Cleaning',
      description: 'Our skilled hygienist will provide a gentle, thorough cleaning and offer tips for maintaining your oral health at home.',
    },
  ]

  const paymentOptions = [
    {
      title: 'Dental Insurance',
      description: 'We accept most major insurance plans and will file claims on your behalf',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Cash & Credit Cards',
      description: 'We accept cash, checks, Visa, MasterCard, American Express, and Discover',
      icon: CreditCardIcon,
    },
    {
      title: 'CareCredit',
      description: 'Flexible financing options with low monthly payments and special promotions',
      icon: SparklesIcon,
    },
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
    'Anthem',
    'Principal',
  ]

  const faqs = [
    {
      question: 'How long will my first appointment take?',
      answer: 'Plan for about 90 minutes for your first comprehensive exam and cleaning. This allows us time to get to know you, review your dental history, perform a thorough examination, and complete your cleaning.',
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical information. If you have recent dental X-rays, we can request them from your previous dentist.',
    },
    {
      question: 'Do you accept my insurance?',
      answer: 'We work with most major insurance providers. Call our office at (734) 555-SMILE and we will verify your coverage and explain your benefits before your appointment.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes! We offer CareCredit financing with flexible payment plans and special promotional offers. Our team can help you apply and find a plan that fits your budget.',
    },
    {
      question: 'What if I am nervous about dental visits?',
      answer: 'We completely understand dental anxiety and have extensive experience helping nervous patients feel comfortable. We offer sedation options, a calming environment, and a gentle, patient-centered approach.',
    },
    {
      question: 'Can I schedule same-day appointments?',
      answer: 'While we try to accommodate same-day requests, especially for emergencies, we recommend scheduling in advance. Evening and Saturday appointments are available for your convenience.',
    },
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
              Welcome New Patients!
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100 mb-8">
              We're excited to welcome you to our dental family. Your journey to a healthier,
              more beautiful smile starts here.
            </p>
            <div className="inline-flex items-center bg-accent-400 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              <SparklesIcon className="h-6 w-6 mr-2" />
              <span>Special Offer: $99 New Patient Exam & X-rays</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What to Expect on Your First Visit</h2>
            <p className="section-subtitle">
              We've designed your first appointment to be thorough yet comfortable
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {firstVisitSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 bg-gradient-to-r from-accent-400 to-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <SparklesIcon className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              New Patient Special Offer
            </h2>
            <div className="text-5xl font-bold mb-4">$99</div>
            <p className="text-2xl mb-6">
              Comprehensive Exam & Digital X-rays
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Regular value $250. Includes complete oral examination, digital X-rays,
              oral cancer screening, and personalized treatment plan consultation.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Claim Your Offer
            </Link>
            <p className="mt-4 text-sm">*Offer for new patients without insurance. Cannot be combined with other offers.</p>
          </motion.div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Payment & Financing Options</h2>
            <p className="section-subtitle">
              We offer flexible payment solutions to make quality dental care affordable
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {paymentOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <option.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Insurance Providers</h2>
            <p className="section-subtitle">
              We accept most major dental insurance plans
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-8">
            {insuranceProviders.map((provider, index) => (
              <motion.div
                key={provider}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-primary-600 hover:shadow-md transition-all duration-300"
              >
                <span className="text-gray-700 font-medium text-sm">{provider}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Don't see your insurance provider? Contact us - we likely work with them!
            </p>
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 max-w-3xl mx-auto text-left">
              <h3 className="font-semibold text-gray-900 mb-2">We Handle Insurance For You</h3>
              <p className="text-gray-700">
                Our friendly staff will verify your coverage, file claims, and maximize your benefits.
                We will provide a clear cost estimate before any treatment begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <QuestionMarkCircleIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">New Patient Registration</h2>
              <p className="section-subtitle">
                Fill out this form to get started - we'll contact you to schedule your first visit
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-2">
                      Insurance Provider
                    </label>
                    <select
                      id="insurance"
                      name="insurance"
                      value={formData.insurance}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    >
                      <option value="">Select provider</option>
                      {insuranceProviders.map(provider => (
                        <option key={provider} value={provider}>{provider}</option>
                      ))}
                      <option value="none">No insurance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Visit
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows="4"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Tell us about any concerns or what brings you in..."
                  />
                </div>

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
                      <option value="">Select time</option>
                      <option value="morning">Morning (8AM-12PM)</option>
                      <option value="afternoon">Afternoon (12PM-4PM)</option>
                      <option value="evening">Evening (4PM-6PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    id="hearAboutUs"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Select option</option>
                    <option value="google">Google Search</option>
                    <option value="friend">Friend or Family</option>
                    <option value="insurance">Insurance Provider</option>
                    <option value="social">Social Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {submitted && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                      <p className="text-green-800 font-semibold">
                        Thank you! We will contact you within 24 hours to schedule your appointment.
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                >
                  Submit Registration
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and consent to be contacted by our office.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Downloadable Forms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <DocumentArrowDownIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h2 className="section-title">Patient Forms</h2>
              <p className="section-subtitle">
                Download and complete these forms before your visit to save time
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <ClipboardDocumentListIcon className="h-10 w-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">New Patient Registration</h3>
                <p className="text-gray-600 mb-4">
                  Complete medical and dental history form
                </p>
                <button className="text-primary-600 font-semibold hover:text-primary-700">
                  Download PDF →
                </button>
              </div>

              <div className="card p-6">
                <ShieldCheckIcon className="h-10 w-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Insurance Information</h3>
                <p className="text-gray-600 mb-4">
                  Insurance and billing information form
                </p>
                <button className="text-primary-600 font-semibold hover:text-primary-700">
                  Download PDF →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Join Our Dental Family?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Call us today or complete the form above to schedule your first appointment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7345557645"
                className="btn-primary"
              >
                Call (734) 555-SMILE
              </a>
              <Link to="/contact" onClick={scrollToTop} className="btn-outline">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
