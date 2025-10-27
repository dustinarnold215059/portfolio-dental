import { motion } from 'framer-motion'
import {
  BookOpenIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  BoltIcon,
  UserGroupIcon,
  DocumentTextIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline'

export default function Resources() {
  const resources = [
    {
      title: 'Pre-Operative Instructions',
      icon: ClipboardDocumentListIcon,
      items: [
        {
          procedure: 'Tooth Extraction',
          instructions: [
            'Eat a light meal before your appointment',
            'Arrange for someone to drive you home if sedation is used',
            'Wear comfortable, loose-fitting clothing',
            'Avoid alcohol and smoking 24 hours before procedure',
          ],
        },
        {
          procedure: 'Dental Implant Surgery',
          instructions: [
            'Take prescribed antibiotics as directed before surgery',
            'Fast for 8 hours if general anesthesia will be used',
            'Arrange transportation home',
            'Stock soft foods at home for recovery',
          ],
        },
        {
          procedure: 'Root Canal Treatment',
          instructions: [
            'Eat a normal meal before your appointment',
            'Take prescribed pain medication before procedure if recommended',
            'Avoid alcohol 24 hours before treatment',
            'Inform us of any changes to your medical history',
          ],
        },
      ],
    },
    {
      title: 'Post-Operative Care',
      icon: HeartIcon,
      items: [
        {
          procedure: 'After Tooth Extraction',
          instructions: [
            'Bite on gauze for 30-45 minutes to control bleeding',
            'Apply ice pack to reduce swelling (20 minutes on, 20 off)',
            'Avoid smoking, drinking through straws, and spitting for 24 hours',
            'Eat soft foods and avoid the extraction site',
            'Take prescribed pain medication as directed',
            'Resume gentle brushing after 24 hours, avoiding the extraction site',
          ],
        },
        {
          procedure: 'After Dental Implant',
          instructions: [
            'Rest and avoid strenuous activity for 48 hours',
            'Use ice packs to minimize swelling',
            'Eat soft foods for the first week',
            'Rinse gently with warm salt water after 24 hours',
            'Take all prescribed medications as directed',
            'Attend all follow-up appointments',
          ],
        },
        {
          procedure: 'After Teeth Whitening',
          instructions: [
            'Avoid dark-colored foods and beverages for 48 hours',
            'Use sensitivity toothpaste if needed',
            'Avoid smoking for at least 24 hours',
            'Maintain good oral hygiene',
            'Use a straw for dark beverages',
          ],
        },
      ],
    },
  ]

  const dentalTips = [
    {
      title: 'Brush Properly',
      description: 'Brush twice daily for 2 minutes using a soft-bristled brush at a 45-degree angle',
      icon: SparklesIcon,
    },
    {
      title: 'Floss Daily',
      description: 'Floss at least once per day to remove plaque and food particles between teeth',
      icon: HeartIcon,
    },
    {
      title: 'Regular Checkups',
      description: 'Visit your dentist every 6 months for professional cleanings and examinations',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Healthy Diet',
      description: 'Limit sugary foods and drinks, eat calcium-rich foods for strong teeth',
      icon: SparklesIcon,
    },
    {
      title: 'Replace Your Toothbrush',
      description: 'Change your toothbrush every 3-4 months or when bristles are frayed',
      icon: SparklesIcon,
    },
    {
      title: 'Use Fluoride',
      description: 'Use fluoride toothpaste and consider fluoride treatments for added protection',
      icon: ShieldCheckIcon,
    },
  ]

  const emergencyGuide = [
    {
      emergency: 'Severe Toothache',
      steps: [
        'Rinse mouth with warm water',
        'Gently floss to remove any trapped food',
        'Take over-the-counter pain reliever',
        'Apply cold compress to outside of cheek',
        'Call our office immediately for same-day appointment',
      ],
      icon: BoltIcon,
    },
    {
      emergency: 'Knocked-Out Tooth',
      steps: [
        'Handle tooth by crown only, not the root',
        'Rinse gently with water if dirty (do not scrub)',
        'Try to place tooth back in socket if possible',
        'If not possible, keep tooth in milk or saliva',
        'Get to our office within 30 minutes for best chance of saving tooth',
      ],
      icon: BoltIcon,
    },
    {
      emergency: 'Broken or Chipped Tooth',
      steps: [
        'Save any broken pieces',
        'Rinse mouth with warm water',
        'Apply gauze if bleeding',
        'Use cold compress to reduce swelling',
        'Call us for prompt treatment',
      ],
      icon: BoltIcon,
    },
    {
      emergency: 'Lost Filling or Crown',
      steps: [
        'Save the crown if possible',
        'Clean the crown and affected tooth',
        'Apply temporary dental cement or sugar-free gum as temporary measure',
        'Avoid chewing on that side',
        'Schedule appointment as soon as possible',
      ],
      icon: BoltIcon,
    },
  ]

  const childrenTips = [
    {
      age: 'Infants (0-2 years)',
      tips: [
        'Clean gums with soft cloth after feeding',
        'Begin brushing when first tooth appears',
        'Use rice-sized amount of fluoride toothpaste',
        'Avoid bottles at bedtime',
        'Schedule first dental visit by age 1',
      ],
    },
    {
      age: 'Toddlers (2-5 years)',
      tips: [
        'Brush twice daily with pea-sized fluoride toothpaste',
        'Supervise brushing until age 7-8',
        'Limit sugary snacks and drinks',
        'Visit dentist every 6 months',
        'Consider dental sealants',
      ],
    },
    {
      age: 'School Age (6-12 years)',
      tips: [
        'Encourage independent brushing with supervision',
        'Ensure they brush for 2 minutes',
        'Consider orthodontic evaluation around age 7',
        'Use mouthguards for sports',
        'Discuss nutrition and its impact on teeth',
      ],
    },
  ]

  const oralHygieneGuide = [
    {
      step: 1,
      title: 'Choose the Right Tools',
      description: 'Use a soft-bristled toothbrush and fluoride toothpaste. Consider an electric toothbrush for more effective cleaning.',
    },
    {
      step: 2,
      title: 'Proper Brushing Technique',
      description: 'Hold brush at 45-degree angle to gums. Use gentle circular motions. Brush all surfaces of teeth for 2 minutes.',
    },
    {
      step: 3,
      title: 'Do Not Forget to Floss',
      description: 'Floss at least once daily, preferably before bedtime. Gently curve floss around each tooth in a C-shape.',
    },
    {
      step: 4,
      title: 'Use Mouthwash',
      description: 'Rinse with antibacterial mouthwash to kill bacteria and freshen breath. Do not rinse with water after.',
    },
    {
      step: 5,
      title: 'Clean Your Tongue',
      description: 'Brush or scrape your tongue to remove bacteria and prevent bad breath.',
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
            <BookOpenIcon className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dental Health Resources
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100">
              Educational resources to help you maintain optimal oral health and
              prepare for dental procedures
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pre/Post Operative Instructions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Pre & Post-Operative Instructions</h2>
            <p className="section-subtitle">
              Important guidelines to ensure the best outcomes for your dental procedures
            </p>
          </div>

          {resources.map((resource, index) => (
            <div key={resource.title} className={`mb-16 ${index % 2 === 1 ? 'bg-gray-50 py-12 -mx-4 px-4' : ''}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                    <resource.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold ml-4 text-gray-900">{resource.title}</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {resource.items.map((item, idx) => (
                    <motion.div
                      key={item.procedure}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="card p-6"
                    >
                      <h4 className="text-xl font-semibold mb-4 text-primary-600">{item.procedure}</h4>
                      <ul className="space-y-2">
                        {item.instructions.map((instruction, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <span className="text-primary-600 mr-2">•</span>
                            <span>{instruction}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Dental Health Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Daily Dental Health Tips</h2>
            <p className="section-subtitle">
              Simple habits for a lifetime of healthy smiles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dentalTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <tip.icon className="h-10 w-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Dental Care Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <BoltIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h2 className="section-title">Emergency Dental Care Guide</h2>
            <p className="section-subtitle">
              Quick action steps for common dental emergencies
            </p>
            <div className="mt-6 bg-red-50 border-l-4 border-red-600 p-4 max-w-3xl mx-auto">
              <p className="text-red-800 font-semibold">
                For dental emergencies, call us immediately at{' '}
                <a href="tel:7345559999" className="underline">(734) 555-9999</a>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {emergencyGuide.map((emergency, index) => (
              <motion.div
                key={emergency.emergency}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 border-l-4 border-red-500"
              >
                <div className="flex items-center mb-4">
                  <emergency.icon className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{emergency.emergency}</h3>
                </div>
                <ol className="space-y-2">
                  {emergency.steps.map((step, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="font-semibold text-red-600 mr-2">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Children's Dental Care */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <UserGroupIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="section-title">Children's Dental Care Guide</h2>
            <p className="section-subtitle">
              Age-appropriate tips for your child's oral health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {childrenTips.map((ageGroup, index) => (
              <motion.div
                key={ageGroup.age}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-600">{ageGroup.age}</h3>
                <ul className="space-y-3">
                  {ageGroup.tips.map((tip, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <HeartIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Oral Hygiene Best Practices */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Oral Hygiene Best Practices</h2>
            <p className="section-subtitle">
              Master your daily oral care routine
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {oralHygieneGuide.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 flex items-start"
              >
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Library & Downloadable Guides */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <PlayCircleIcon className="h-10 w-10 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Educational Videos</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Watch our video library for visual guides on proper brushing techniques,
                flossing methods, and what to expect during common procedures.
              </p>
              <div className="space-y-4">
                {['Proper Brushing Technique', 'How to Floss Correctly', 'Understanding Root Canals', 'Dental Implant Process'].map((video) => (
                  <div key={video} className="card p-4 flex items-center justify-between hover:shadow-lg transition-shadow">
                    <span className="font-medium text-gray-900">{video}</span>
                    <PlayCircleIcon className="h-6 w-6 text-primary-600" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <DocumentTextIcon className="h-10 w-10 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Downloadable Guides</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Download our comprehensive guides for detailed information on dental health topics.
              </p>
              <div className="space-y-4">
                {[
                  'Complete Oral Hygiene Guide',
                  'Dental Emergency Handbook',
                  'Children\'s Dental Health',
                  'Post-Op Care Instructions',
                ].map((guide) => (
                  <div key={guide} className="card p-4 flex items-center justify-between hover:shadow-lg transition-shadow">
                    <span className="font-medium text-gray-900">{guide}</span>
                    <button className="text-primary-600 font-semibold hover:text-primary-700">
                      Download PDF →
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Have Questions About Your Dental Health?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Our team is here to help. Schedule a consultation or call us with your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Schedule Consultation
              </a>
              <a href="tel:7345557645" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                Call (734) 555-SMILE
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Missing import - add at top
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline'
