import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  TvIcon,
  AdjustmentsHorizontalIcon,
  StarIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import './App.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeRoom, setActiveRoom] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    message: ''
  });

  const rooms = [
    {
      type: 'Air-Conditioned Room',
      price: '160',
      currency: 'GH₵',
      features: ['Air Conditioning', 'Television', 'Private Bathroom'],
      image: 'https://drive.google.com/uc?export=view&id=1I1NDjkXLM9-WM2_Vl_8ds9hFAHxJHLz-',
      description: 'Luxurious comfort with modern air conditioning and premium amenities.'
    },
    {
      type: 'Standard Room',
      price: '100',
      currency: 'GH₵',
      features: ['Television', 'Fan', 'Private Bathroom'],
      image: 'https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg',
      description: 'Comfortable accommodation with essential amenities at an affordable price.'
    }
  ];

  const testimonials = [
    {
      name: "Kwame Asante",
      location: "Accra, Ghana",
      rating: 5,
      text: "YAAPO Guest House provided exceptional traditional hospitality. The rooms were clean and comfortable, and the staff made us feel at home."
    },
    {
      name: "Sarah Johnson",
      location: "Tourist from UK",
      rating: 5,
      text: "Perfect location in Koforidua Oyoko! The traditional atmosphere and modern amenities made our stay memorable. Highly recommended!"
    },
    {
      name: "Emmanuel Osei",
      location: "Kumasi, Ghana",
      rating: 5,
      text: "Great value for money. The air-conditioned rooms are excellent, and the service is outstanding. Will definitely return!"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Booking Inquiry - YAAPO Guest House`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Room Type: ${formData.roomType}
Message: ${formData.message}
    `;
    window.location.href = `mailto:baahgeorge497@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container-custom section-padding">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-display font-bold gradient-text"
            >
              YAAPO Guest House
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'rooms', 'amenities', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-earth-700 hover:text-primary-600 font-medium transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-earth-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/30"
            >
              <div className="section-padding py-4 space-y-4">
                {['home', 'rooms', 'amenities', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left text-earth-700 hover:text-primary-600 font-medium transition-colors duration-300 capitalize"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-background min-h-screen flex items-center justify-center relative pattern-overlay">
        <div className="container-custom section-padding text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 text-shadow">
              Welcome to
              <span className="block text-gold-300">YAAPO Guest House</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-shadow">
              Experience authentic Ghanaian hospitality in the heart of Koforidua Oyoko
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('rooms')}
                className="btn-primary text-lg"
              >
                Explore Rooms
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary text-lg"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <ChevronDownIcon className="w-8 h-8 scroll-indicator" />
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
              Our Comfortable Rooms
            </h2>
            <p className="text-xl text-earth-600 max-w-2xl mx-auto">
              Choose from our well-appointed rooms designed for your comfort and relaxation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="room-card rounded-2xl overflow-hidden elevation-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full font-bold">
                    {room.currency}{room.price}/night
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-earth-800 mb-3">
                    {room.type}
                  </h3>
                  <p className="text-earth-600 mb-6">
                    {room.description}
                  </p>
                  
                  <div className="space-y-3">
                    {room.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-earth-700">
                        <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="btn-primary w-full mt-6"
                  >
                    Book This Room
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-gradient-to-r from-primary-50 to-gold-50">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
              Premium Amenities
            </h2>
            <p className="text-xl text-earth-600 max-w-2xl mx-auto">
              Modern comfort meets traditional Ghanaian hospitality
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: AdjustmentsHorizontalIcon, title: 'Air Conditioning', desc: 'Climate control in premium rooms' },
              { icon: TvIcon, title: 'Television', desc: 'Entertainment in every room' },
              { icon: MapPinIcon, title: 'Prime Location', desc: 'Heart of Koforidua Oyoko' }
            ].map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <amenity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-earth-800 mb-2">{amenity.title}</h3>
                <p className="text-earth-600">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-earth-600">
              Hear from those who experienced YAAPO hospitality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-effect rounded-2xl p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-earth-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-earth-800">{testimonial.name}</p>
                  <p className="text-earth-600 text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-primary-600 to-gold-600 text-white">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Book Your Stay
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to experience authentic Ghanaian hospitality? Contact us today!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneIcon className="w-6 h-6 mr-4 text-gold-300" />
                    <div>
                      <p className="font-medium">Call us</p>
                      <p className="text-white/90">+233530965113 / +233556002465</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="w-6 h-6 mr-4 text-gold-300" />
                    <div>
                      <p className="font-medium">Email us</p>
                      <p className="text-white/90">baahgeorge497@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="w-6 h-6 mr-4 text-gold-300" />
                    <div>
                      <p className="font-medium">Visit us</p>
                      <p className="text-white/90">Koforidua Oyoko, Eastern Region, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Room Rates</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Air-Conditioned Room</span>
                    <span className="font-bold">GH₵ 160/night</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Standard Room</span>
                    <span className="font-bold">GH₵ 100/night</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send Booking Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-gold-300"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-gold-300"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-gold-300"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-gold-300"
                  />
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-gold-300"
                  />
                </div>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-gold-300"
                >
                  <option value="">Select Room Type</option>
                  <option value="ac-room">Air-Conditioned Room (GH₵ 160/night)</option>
                  <option value="standard-room">Standard Room (GH₵ 100/night)</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Special requests or message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-gold-300"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-white text-primary-600 font-bold py-4 rounded-lg hover:bg-white/90 transition-colors duration-300"
                >
                  Send Booking Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-900 text-white py-12">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h3 className="text-3xl font-display font-bold gradient-text mb-4">
              YAAPO Guest House
            </h3>
            <p className="text-white/70 mb-6">
              Your home away from home in Koforidua Oyoko, Ghana
            </p>
            <div className="flex justify-center space-x-8 text-sm text-white/60">
              <span>© 2024 YAAPO Guest House</span>
              <span>•</span>
              <span>Koforidua Oyoko, Ghana</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;