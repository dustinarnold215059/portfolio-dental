import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  SparklesIcon,
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  CheckCircleIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

export default function Home() {
  const services = [
    {
      name: 'General Dentistry',
      description: 'Comprehensive dental exams, cleanings, and preventive care',
      icon: ShieldCheckIcon,
      link: '/services'
    },
    {
      name: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, and smile makeovers',
      icon: SparklesIcon,
      link: '/services'
    },
    {
      name: 'Restorative Care',
      description: 'Crowns, bridges, dentures, and dental implants',
      icon: HeartIcon,
      link: '/services'
    },
    {
      name: 'Emergency Care',
      description: '24/7 emergency dental services for urgent needs',
      icon: ClockIcon,
      link: '/contact'
    },
    {
      name: 'Family Dentistry',
      description: 'Dental care for patients of all ages',
      icon: UserGroupIcon,
      link: '/services'
    },
    {
      name: 'Preventive Care',
      description: 'Maintain optimal oral health with regular checkups',
      icon: CheckCircleIcon,
      link: '/services'
    },
  ]

  const benefits = [
    {
      title: 'Experienced Team',
      description: 'Over 20 years of combined experience in comprehensive dental care',
      icon: UserGroupIcon,
    },
    {
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment for precise diagnoses and comfortable treatments',
      icon: SparklesIcon,
    },
    {
      title: 'Flexible Scheduling',
      description: 'Evening and Saturday appointments available for your convenience',
      icon: ClockIcon,
    },
    {
      title: 'Insurance Accepted',
      description: 'We accept most major insurance plans and offer flexible payment options',
      icon: ShieldCheckIcon,
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Dr. Anderson and his team are absolutely wonderful! They made my dental implant procedure comfortable and stress-free. Highly recommend!',
      date: '2 weeks ago'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Best dental office in Troy! The staff is friendly, professional, and genuinely cares about their patients. My whole family goes here.',
      date: '1 month ago'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'I was terrified of dentists, but Bright Smile changed everything. They are patient, gentle, and made me feel completely at ease.',
      date: '3 weeks ago'
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
  ]

  const beforeAfter = [
    {
      title: 'Teeth Whitening',
      description: 'Professional whitening treatment',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop'
    },
    {
      title: 'Dental Veneers',
      description: 'Complete smile transformation',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981a782dfe?w=400&h=300&fit=crop'
    },
    {
      title: 'Dental Implants',
      description: 'Permanent tooth replacement',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop'
    },
    {
      title: 'Invisalign',
      description: 'Clear aligner treatment',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop'
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Family's Trusted Dental Care
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Advanced Dental Care with a Personal Touch
              </p>
              <p className="text-lg mb-8 text-gray-100">
                Experience exceptional dental care in a comfortable, welcoming environment.
                We're committed to helping you achieve and maintain a healthy, beautiful smile for life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                  Book Appointment
                </Link>
                <Link to="/new-patients" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 text-center">
                  New Patients
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm">
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  <span>Emergency? Call <a href="tel:7345559999" className="font-semibold hover:text-accent-400">(734) 555-9999</a></span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop"
                  alt="Modern dental office with comfortable patient chair"
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome to Bright Smile Dental Care
              </h2>
              <div className="flex justify-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150&h=150&fit=crop"
                  alt="Dr. James Anderson"
                  className="w-32 h-32 rounded-full border-4 border-primary-600 shadow-lg"
                />
              </div>
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold text-primary-600">Dr. James Anderson, DDS</span> and our dedicated team
                have been serving the Troy community since 2012. We believe in providing personalized,
                compassionate care that puts our patients first.
              </p>
              <p className="text-lg text-gray-600">
                Whether you need a routine cleaning, cosmetic enhancement, or restorative treatment,
                we're here to help you achieve optimal oral health in a relaxing, judgment-free environment.
              </p>
              <Link to="/team" className="inline-block mt-6 text-primary-600 font-semibold hover:text-primary-700">
                Meet Our Team →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Bright Smile?</h2>
            <p className="section-subtitle">
              We're committed to providing exceptional dental care that exceeds your expectations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive dental care for your entire family
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:scale-105 transition-transform duration-300"
              >
                <service.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="text-primary-600 font-semibold hover:text-primary-700">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Patients Say</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-700">4.9/5</span>
              <span className="text-gray-600">(200+ reviews)</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials" className="btn-outline">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Smile Transformations</h2>
            <p className="section-subtitle">
              See the amazing results we've achieved for our patients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfter.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance Providers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Insurance Providers We Accept</h2>
            <p className="section-subtitle">
              We work with most major insurance providers to make your care affordable
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {insuranceProviders.map((provider, index) => (
              <motion.div
                key={provider}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 flex items-center justify-center hover:border-primary-600 hover:shadow-md transition-all duration-300"
              >
                <span className="text-gray-700 font-medium text-center">{provider}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Don't see your provider? Contact us to verify coverage.</p>
            <Link to="/new-patients" className="text-primary-600 font-semibold hover:text-primary-700">
              Learn About Payment Options →
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Care CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary-700 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ClockIcon className="h-16 w-16 mx-auto mb-6 text-accent-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dental Emergency? We're Here to Help
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
              We offer same-day emergency appointments for urgent dental needs.
              Don't wait in pain - call us now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:7345559999"
                className="bg-white text-secondary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <PhoneIcon className="h-5 w-5" />
                Call Emergency Line: (734) 555-9999
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary-700 transition-all duration-300"
              >
                Request Appointment
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-200">
              Available 24/7 for dental emergencies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Experience the Bright Smile Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule your appointment today and take the first step toward a healthier, more confident smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Book Your Appointment
              </Link>
              <Link to="/new-patients" className="btn-outline">
                New Patient Information
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
