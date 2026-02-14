import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['Sri Lanka', 'Island of Gems', 'By Appointment'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+94 77 843 8570', 'Mon-Sat: 9AM - 6PM', 'Sunday: By Appointment'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@chrishroyal.com', 'Inquiries Welcome', 'Quick Response'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: By Appointment Only', 'We respect your time'],
    },
  ];

  const services = [
    'Custom Jewelry Design',
    'Jewelry Appraisal',
    'Ring Sizing & Repair',
    'Gemstone Certification',
    'Estate Jewelry',
    'Private Consultations',
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif text-white mb-6"
            >
              Get in Touch
            </motion.h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mb-8" />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              We're here to help you find the perfect piece or answer any questions you may have
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-black/80 to-gray-900/80 p-8 rounded-2xl border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 h-full">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-6 mx-auto"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4 text-center">
                      {info.title}
                    </h3>
                    
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 text-center text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-black/80 to-gray-900/80 p-8 md:p-10 rounded-2xl border border-teal-500/20">
                <div className="flex items-center gap-3 mb-8">
                  <MessageCircle className="w-8 h-8 text-teal-400" />
                  <h2 className="text-3xl font-serif text-white">Send Us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-black/60 border border-teal-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-black/60 border border-teal-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2 text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-black/60 border border-teal-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm font-medium">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-black/60 border border-teal-500/30 rounded-lg text-white focus:outline-none focus:border-teal-400 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="purchase">Product Purchase</option>
                        <option value="custom">Custom Design</option>
                        <option value="repair">Repair & Services</option>
                        <option value="appointment">Book Appointment</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-black/60 border border-teal-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(94, 234, 212, 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-full hover:from-teal-400 hover:to-teal-500 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Services Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Services */}
              <div className="bg-gradient-to-br from-black/80 to-gray-900/80 p-8 rounded-2xl border border-teal-500/20">
                <h3 className="text-2xl font-serif text-white mb-6">Our Services</h3>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-teal-400" />
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-black/80 to-gray-900/80 p-6 rounded-2xl border border-teal-500/20 overflow-hidden"
              >
                <h3 className="text-xl font-serif text-white mb-4">Find Us</h3>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1767921482419-d2d255b5b700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnZW1zdG9uZSUyMGpld2Vscnl8ZW58MXx8fHwxNzY5NjA0MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Showroom Location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-teal-500 text-white rounded-full text-sm font-medium hover:bg-teal-400 transition-colors"
                    >
                      Get Directions
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto" />
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Do you offer custom jewelry design?',
                a: 'Yes! Our master artisans work closely with you to create one-of-a-kind pieces that reflect your personal style and vision.',
              },
              {
                q: 'What is your return policy?',
                a: 'We offer a 30-day return policy for all purchases. Items must be in original condition with all certificates and packaging.',
              },
              {
                q: 'Are your gemstones certified?',
                a: 'Absolutely. All our gemstones come with certificates from recognized gemological institutes like GIA, AGS, or IGI.',
              },
              {
                q: 'Do you offer financing options?',
                a: 'Yes, we offer flexible financing options to make your dream jewelry more accessible. Contact us for details.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-black/80 to-gray-900/80 p-6 rounded-xl border border-teal-500/20"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-300 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
