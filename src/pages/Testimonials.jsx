import { motion } from 'framer-motion'
import { StarIcon, HeartIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Testimonials() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '5',
    review: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', rating: '5', review: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      review: 'Dr. Smith and her team are absolutely wonderful! They made my dental implant procedure comfortable and stress-free. The office is modern, clean, and the staff genuinely cares about their patients. I highly recommend Bright Smile to anyone looking for exceptional dental care!',
      date: 'October 15, 2025',
      treatment: 'Dental Implants',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      review: 'Best dental office in Troy! I have been coming here for 3 years with my whole family. Dr. Johnson is amazing with my kids - they actually look forward to their appointments now! The staff is professional, friendly, and always accommodating with scheduling.',
      date: 'October 8, 2025',
      treatment: 'Family Dentistry',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      review: 'I was terrified of dentists my entire life, but Bright Smile changed everything for me. They took the time to understand my anxiety and made sure I was comfortable every step of the way. The sedation options helped tremendously. I finally have the smile I always wanted!',
      date: 'September 28, 2025',
      treatment: 'Smile Makeover',
    },
    {
      name: 'David Martinez',
      rating: 5,
      review: 'Had an emergency tooth situation on a Saturday morning and they got me in right away! Dr. Smith fixed my broken tooth and the pain was gone immediately. The emergency care here is outstanding. Thank you for being available when I needed you most!',
      date: 'September 22, 2025',
      treatment: 'Emergency Care',
    },
    {
      name: 'Jennifer Taylor',
      rating: 5,
      review: 'The teeth whitening results exceeded my expectations! My smile is 7 shades whiter and looks completely natural. The process was quick and painless. Jennifer, my hygienist, explained everything clearly and made sure I was comfortable throughout. Worth every penny!',
      date: 'September 15, 2025',
      treatment: 'Teeth Whitening',
    },
    {
      name: 'Robert Williams',
      rating: 5,
      review: 'After years of struggling with dentures, I decided to get implants. Dr. Smith walked me through the entire process and the results are life-changing. I can eat anything I want and my confidence has skyrocketed. The investment in myself was absolutely worth it.',
      date: 'September 10, 2025',
      treatment: 'Dental Implants',
    },
    {
      name: 'Amanda Lee',
      rating: 5,
      review: 'The preventive care program here is fantastic. Regular cleanings and checkups have helped me avoid major dental issues. The hygienists are thorough yet gentle, and they provide great education about oral health. My teeth have never been healthier!',
      date: 'August 30, 2025',
      treatment: 'Preventive Care',
    },
    {
      name: 'James Brown',
      rating: 5,
      review: 'Got veneers done by Dr. Smith and I couldn\'t be happier with the results! My smile transformation is incredible - it looks natural and beautiful. The attention to detail and craftsmanship is evident. Everyone at the office made the process smooth and enjoyable.',
      date: 'August 22, 2025',
      treatment: 'Veneers',
    },
  ]

  const beforeAfterGallery = [
    {
      title: 'Complete Smile Makeover',
      description: 'Veneers and teeth whitening',
      category: 'Cosmetic',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&q=80'
    },
    {
      title: 'Dental Implant Restoration',
      description: 'Full arch implant replacement',
      category: 'Restorative',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop&q=80'
    },
    {
      title: 'Professional Teeth Whitening',
      description: '8 shades whiter in one visit',
      category: 'Cosmetic',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop&q=80'
    },
    {
      title: 'Invisalign Treatment',
      description: '14-month clear aligner treatment',
      category: 'Orthodontic',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop&q=80'
    },
    {
      title: 'Porcelain Veneers',
      description: 'Natural-looking smile enhancement',
      category: 'Cosmetic',
      image: 'https://images.unsplash.com/photo-1609758174888-03268e358a75?w=600&h=400&fit=crop&q=80'
    },
    {
      title: 'Crown and Bridge Work',
      description: 'Restorative dentistry',
      category: 'Restorative',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=400&fit=crop&q=80'
    },
  ]

  const successStories = [
    {
      name: 'Maria Garcia',
      story: 'After a car accident left me with several missing teeth, I felt self-conscious about smiling. Dr. Smith created a comprehensive treatment plan that included dental implants and crowns. The transformation has been incredible - I have my confidence back and I can\'t stop smiling! The entire team made what seemed like an overwhelming process feel manageable and even enjoyable.',
      treatment: 'Full Mouth Reconstruction',
      duration: '8 months',
    },
    {
      name: 'Thomas Anderson',
      story: 'I had been hiding my smile for years due to discoloration and uneven teeth. After my consultation, Dr. Smith recommended a combination of whitening and veneers. The results are beyond what I imagined! I look 10 years younger and I am no longer embarrassed to smile in photos. This investment in myself has improved my personal and professional life.',
      treatment: 'Cosmetic Smile Design',
      duration: '3 months',
    },
    {
      name: 'Lisa Thompson',
      story: 'As someone with severe dental anxiety, I avoided the dentist for over 10 years. My teeth were in bad shape when I finally came to Bright Smile. The team was incredibly patient and understanding. They offered sedation options and went at my pace. After completing my treatment plan, I now have healthy teeth and gums, and I am no longer afraid of dental visits!',
      treatment: 'Comprehensive Restorative Care',
      duration: '12 months',
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
              Patient Testimonials
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100 mb-8">
              Don't just take our word for it - hear what our patients have to say about
              their experience at Bright Smile Dental Care
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-8 w-8 text-yellow-400" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-sm text-gray-200">200+ reviews</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-subtitle">
              Real reviews from real patients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.treatment}
                  </span>
                </div>
                <p className="text-gray-700 italic">"{testimonial.review}"</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Read more reviews on Google, Yelp, and Facebook
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Google Reviews
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Facebook Reviews
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Before & After Gallery</h2>
            <p className="section-subtitle">
              See the incredible smile transformations we've achieved
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {beforeAfterGallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-secondary-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All photos are of actual patients who have consented to share their results
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <HeartIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="section-title">Patient Success Stories</h2>
            <p className="section-subtitle">
              Life-changing smile transformations
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-600">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{story.name}</h3>
                        <p className="text-primary-600 font-medium">{story.treatment}</p>
                      </div>
                      <span className="text-sm text-gray-500">Treatment: {story.duration}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">"{story.story}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Experience Form */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <ChatBubbleLeftRightIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h2 className="section-title">Share Your Experience</h2>
              <p className="section-subtitle">
                We'd love to hear about your visit! Your feedback helps us improve and helps
                others make informed decisions about their dental care.
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Rating *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star.toString() })}
                        className="focus:outline-none"
                      >
                        <StarIcon
                          className={`h-10 w-10 transition-colors ${
                            star <= parseInt(formData.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review *
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    required
                    rows="6"
                    value={formData.review}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Tell us about your experience at Bright Smile Dental Care..."
                  />
                </div>

                {submitted && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="text-green-800 font-semibold">
                      Thank you for your feedback! Your review will be published after verification.
                    </p>
                  </div>
                )}

                <button type="submit" className="w-full btn-primary py-4 text-lg">
                  Submit Review
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Your review may be featured on our website and social media channels
                </p>
              </form>
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
              Ready to Start Your Smile Journey?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Join hundreds of satisfied patients who have transformed their smiles with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Book Your Consultation
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
