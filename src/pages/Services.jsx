import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  ClockIcon,
  CheckCircleIcon,
  HeartIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'

export default function Services() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const serviceCategories = [
    {
      category: 'General Dentistry',
      icon: ShieldCheckIcon,
      description: 'Comprehensive preventive and diagnostic dental care',
      services: [
        {
          name: 'Dental Exams & Cleanings',
          description: 'Thorough examination and professional cleaning to maintain optimal oral health',
          benefits: ['Early detection of dental issues', 'Prevention of gum disease', 'Fresh, clean smile'],
          duration: '45-60 minutes',
        },
        {
          name: 'Fillings',
          description: 'Tooth-colored composite fillings to restore teeth affected by decay',
          benefits: ['Natural appearance', 'Preserves tooth structure', 'Long-lasting results'],
          duration: '30-60 minutes',
        },
        {
          name: 'Root Canal Therapy',
          description: 'Save infected teeth and relieve pain with modern, comfortable root canal treatment',
          benefits: ['Pain relief', 'Saves natural tooth', 'Prevents infection spread'],
          duration: '60-90 minutes',
        },
        {
          name: 'Tooth Extractions',
          description: 'Safe and comfortable tooth removal when necessary',
          benefits: ['Pain relief', 'Prevents further complications', 'Gentle procedure'],
          duration: '20-45 minutes',
        },
      ],
    },
    {
      category: 'Cosmetic Dentistry',
      icon: SparklesIcon,
      description: 'Transform your smile with our aesthetic dental treatments',
      services: [
        {
          name: 'Professional Teeth Whitening',
          description: 'Brighten your smile up to 8 shades with professional whitening treatments',
          benefits: ['Dramatic results', 'Safe and effective', 'Customized treatment'],
          duration: '60-90 minutes',
        },
        {
          name: 'Porcelain Veneers',
          description: 'Thin shells of porcelain bonded to front teeth for a perfect smile',
          benefits: ['Natural appearance', 'Stain-resistant', 'Long-lasting (10-15 years)'],
          duration: '2-3 appointments',
        },
        {
          name: 'Dental Bonding',
          description: 'Repair chips, cracks, or gaps with tooth-colored composite resin',
          benefits: ['Quick procedure', 'Affordable', 'Natural-looking results'],
          duration: '30-60 minutes per tooth',
        },
        {
          name: 'Smile Makeovers',
          description: 'Complete smile transformation combining multiple cosmetic treatments',
          benefits: ['Customized plan', 'Comprehensive results', 'Boosts confidence'],
          duration: 'Multiple appointments',
        },
      ],
    },
    {
      category: 'Restorative Dentistry',
      icon: WrenchScrewdriverIcon,
      description: 'Restore function and beauty to damaged or missing teeth',
      services: [
        {
          name: 'Dental Crowns',
          description: 'Custom-made caps that cover damaged teeth for strength and appearance',
          benefits: ['Protects weak teeth', 'Natural appearance', 'Long-lasting solution'],
          duration: '2 appointments',
        },
        {
          name: 'Dental Bridges',
          description: 'Replace missing teeth with permanent, natural-looking bridges',
          benefits: ['Restores function', 'Prevents teeth shifting', 'Improves appearance'],
          duration: '2-3 appointments',
        },
        {
          name: 'Dentures',
          description: 'Full or partial dentures to replace multiple missing teeth',
          benefits: ['Affordable solution', 'Restores smile', 'Improves eating and speaking'],
          duration: 'Multiple appointments',
        },
        {
          name: 'Dental Implants',
          description: 'Permanent tooth replacement that looks and functions like natural teeth',
          benefits: ['Most natural option', 'Prevents bone loss', 'Lifetime solution'],
          duration: '3-6 months (complete process)',
        },
      ],
    },
    {
      category: 'Emergency Dental Care',
      icon: BoltIcon,
      description: 'Immediate care for urgent dental problems',
      services: [
        {
          name: 'Same-Day Emergency Appointments',
          description: 'Quick response to dental emergencies including severe pain, trauma, or infection',
          benefits: ['Fast pain relief', 'Immediate treatment', 'Prevent complications'],
          duration: 'As needed',
        },
        {
          name: 'Emergency Pain Relief',
          description: 'Rapid diagnosis and treatment to eliminate dental pain',
          benefits: ['Immediate relief', 'Expert care', '24/7 availability'],
          duration: 'Varies by condition',
        },
      ],
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
              Our Dental Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100">
              Comprehensive dental care tailored to your unique needs. From preventive care
              to cosmetic enhancements, we offer a full range of services to keep your smile
              healthy and beautiful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((category, catIndex) => (
        <section key={category.category} className={catIndex % 2 === 0 ? 'py-16 bg-gray-50' : 'py-16'}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <category.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.category}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {category.services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    <span>Typical duration: {service.duration}</span>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Additional Features */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CpuChipIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Advanced Technology</h3>
              <p className="text-gray-600">
                We use the latest dental technology for precise, comfortable treatments
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Gentle Care</h3>
              <p className="text-gray-600">
                Patient comfort is our priority. We offer sedation options for anxious patients
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Quality Materials</h3>
              <p className="text-gray-600">
                We use only the highest quality materials for lasting, beautiful results
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a consultation to discuss which services are right for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={scrollToTop} className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Book Appointment
              </Link>
              <a href="tel:7345557645" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
                Call (734) 555-SMILE
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
