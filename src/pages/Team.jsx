import { motion } from 'framer-motion'
import {
  AcademicCapIcon,
  StarIcon,
  HeartIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Smith',
      title: 'DDS - Lead Dentist',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
      education: 'Doctor of Dental Surgery, University of Michigan School of Dentistry, 2005',
      specialties: ['Cosmetic Dentistry', 'Implant Dentistry', 'Full Mouth Reconstruction'],
      bio: 'Dr. Smith founded Bright Smile Dental Care in 2012 with a vision to provide exceptional, personalized dental care. With over 18 years of experience, she specializes in cosmetic and restorative dentistry. Dr. Smith is passionate about helping patients achieve their dream smiles through advanced techniques and compassionate care.',
      certifications: ['American Dental Association', 'Academy of General Dentistry', 'American Academy of Cosmetic Dentistry'],
      languages: ['English', 'Spanish'],
    },
    {
      name: 'Dr. Michael Johnson',
      title: 'DDS - Associate Dentist',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
      education: 'Doctor of Dental Surgery, Ohio State University College of Dentistry, 2012',
      specialties: ['Endodontics', 'Pediatric Dentistry', 'Emergency Care'],
      bio: 'Dr. Johnson joined our practice in 2015, bringing expertise in root canal therapy and emergency dental care. He has a special talent for working with anxious patients and children, making dental visits comfortable and stress-free. His gentle approach and attention to detail have earned him the trust of countless families.',
      certifications: ['American Dental Association', 'American Association of Endodontists', 'Academy of Pediatric Dentistry'],
      languages: ['English'],
    },
    {
      name: 'Jennifer Martinez',
      title: 'RDH - Senior Dental Hygienist',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
      education: 'Bachelor of Science in Dental Hygiene, Wayne State University, 2008',
      specialties: ['Preventive Care', 'Periodontal Therapy', 'Patient Education'],
      bio: 'Jennifer has been with Bright Smile since 2013 and is dedicated to helping patients maintain optimal oral health. Her thorough cleanings and gentle technique make her a patient favorite. She believes in empowering patients with knowledge about their oral health and preventive care strategies.',
      certifications: ['Registered Dental Hygienist (RDH)', 'CPR Certified', 'Local Anesthesia Certification'],
      languages: ['English', 'Spanish'],
    },
    {
      name: 'Amanda Chen',
      title: 'RDH - Dental Hygienist',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      education: 'Associate Degree in Dental Hygiene, Oakland Community College, 2016',
      specialties: ['Teeth Whitening', 'Preventive Care', 'Patient Comfort'],
      bio: 'Amanda joined our team in 2017 and brings enthusiasm and expertise to every patient interaction. She specializes in cosmetic consultations and teeth whitening procedures. Her warm personality and skilled technique help patients feel relaxed and confident about their dental care.',
      certifications: ['Registered Dental Hygienist (RDH)', 'CPR Certified'],
      languages: ['English', 'Mandarin'],
    },
    {
      name: 'Robert Williams',
      title: 'Dental Assistant & Office Coordinator',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
      education: 'Certified Dental Assistant Program, Ross Medical Education Center, 2010',
      specialties: ['Patient Care', 'Surgical Assistance', 'Office Management'],
      bio: 'Robert has been an integral part of our team since 2014, ensuring smooth operations and excellent patient experiences. His organizational skills and friendly demeanor make every visit pleasant. Robert assists with procedures and coordinates scheduling, insurance, and patient communications.',
      certifications: ['Certified Dental Assistant (CDA)', 'Expanded Functions Certified', 'X-Ray Certified'],
      languages: ['English'],
    },
  ]

  const associations = [
    'American Dental Association (ADA)',
    'Michigan Dental Association',
    'Academy of General Dentistry',
    'American Academy of Cosmetic Dentistry',
    'International Congress of Oral Implantologists',
    'Academy of Dental Hygiene',
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
              Meet Our Team
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100">
              Our experienced, compassionate team is dedicated to providing you with
              the highest quality dental care in a warm, welcoming environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="relative">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-6 py-3 rounded-lg shadow-lg">
                      <div className="flex items-center gap-2">
                        <StarIcon className="h-5 w-5" />
                        <span className="font-semibold">5.0 Rating</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h2>
                  <p className="text-xl text-primary-600 font-semibold mb-4">
                    {member.title}
                  </p>

                  <div className="mb-4">
                    <div className="flex items-start gap-2 mb-2">
                      <AcademicCapIcon className="h-5 w-5 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Education</h3>
                        <p className="text-gray-600">{member.education}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Professional Associations</h3>
                    <ul className="space-y-1">
                      {member.certifications.map((cert) => (
                        <li key={cert} className="flex items-center text-gray-600">
                          <ShieldCheckIcon className="h-4 w-4 text-primary-600 mr-2" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
                    <p className="text-gray-600">{member.languages.join(', ')}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Associations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Memberships & Affiliations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team maintains active memberships in leading dental organizations
              to stay current with the latest techniques and best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {associations.map((association, index) => (
              <motion.div
                key={association}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-primary-200 rounded-lg p-6 text-center hover:border-primary-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-2">
                  <ShieldCheckIcon className="h-8 w-8 text-primary-600" />
                </div>
                <p className="text-gray-700 font-medium">{association}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Compassionate Care</h3>
              <p className="text-gray-600">
                We treat every patient with kindness, respect, and understanding, creating
                a judgment-free environment where you feel comfortable and valued.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality dental care using
                advanced techniques, technology, and continuing education.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Trust & Integrity</h3>
              <p className="text-gray-600">
                We build lasting relationships based on honesty, transparency, and
                always putting your best interests first.
              </p>
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
              Experience the Difference Our Team Makes
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Schedule an appointment and meet the team dedicated to your smile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Book Appointment
              </a>
              <a
                href="tel:7345557645"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Call (734) 555-SMILE
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
