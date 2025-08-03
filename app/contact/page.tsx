
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '../../components/Home/Header/Header';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white pt-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-8">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to plan your dream vacation? Our travel experts are here to help you create unforgettable experiences
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Have questions, special requests, or need a custom travel plan? Get in touch with our team 
                and we'll respond within 24 hours!
              </p>
              
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      className="w-full pr-8 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Assistance</option>
                      <option value="custom">Custom Travel Plan</option>
                      <option value="complaint">Complaint</option>
                      <option value="partnership">Partnership Opportunities</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    maxLength={500}
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                    placeholder="Tell us about your dream destination or any questions you have..."
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-2">Maximum 500 characters</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 px-6 rounded-xl transition-all transform hover:scale-105 whitespace-nowrap shadow-2xl text-lg"
                >
                  {formSubmitted ? 'Message Sent ✓' : 'Send Message'}
                </button>
              </form>

              {formSubmitted && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-800 font-medium">
                    <i className="ri-check-line mr-2"></i>
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-10">
              {/* Office Info */}
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Office Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-pin-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Address</h4>
                      <p className="text-gray-700 leading-relaxed">
                        123 Travel Avenue, Suite 500<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-phone-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Phone</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Main: +1 (555) 123-4567<br />
                        Toll Free: +1 (800) 987-6543
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-mail-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Email</h4>
                      <p className="text-gray-700 leading-relaxed">
                        General: info@wanderlust.com<br />
                        Bookings: booking@wanderlust.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-time-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Business Hours</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Monday - Friday: 9:00 AM - 8:00 PM<br />
                        Saturday: 10:00 AM - 6:00 PM<br />
                        Sunday: 12:00 PM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-3xl p-10">
                <h3 className="text-3xl font-bold mb-6">Quick Contact</h3>
                <p className="mb-8 text-blue-100 leading-relaxed text-lg">
                  Need immediate assistance? Call us now or chat with us on WhatsApp for instant support
                </p>
                
                <div className="space-y-6">
                  <a 
                    href="tel:+15551234567"
                    className="flex items-center space-x-4 bg-white/20 hover:bg-white/30 rounded-2xl p-6 transition-all cursor-pointer backdrop-blur-sm"
                  >
                    <i className="ri-phone-fill text-3xl"></i>
                    <div>
                      <div className="font-bold text-lg">Call Now</div>
                      <div className="text-blue-100">+1 (555) 123-4567</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 bg-white/20 hover:bg-white/30 rounded-2xl p-6 transition-all cursor-pointer backdrop-blur-sm"
                  >
                    <i className="ri-whatsapp-line text-3xl"></i>
                    <div>
                      <div className="font-bold text-lg">WhatsApp</div>
                      <div className="text-blue-100">Chat with us instantly</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@wanderlust.com"
                    className="flex items-center space-x-4 bg-white/20 hover:bg-white/30 rounded-2xl p-6 transition-all cursor-pointer backdrop-blur-sm"
                  >
                    <i className="ri-mail-line text-3xl"></i>
                    <div>
                      <div className="font-bold text-lg">Email Us</div>
                      <div className="text-blue-100">info@wanderlust.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Location</h3>
                <div className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215470095644!2d-74.00369368459473!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to the most common questions about our travel services
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How do I book a trip with Wanderlust?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                You can book online through our website, call our booking hotline, or visit our office. 
                We'll help you customize the perfect itinerary and handle all the details.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What's your cancellation policy?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Cancellations 30+ days before departure: Full refund. 15-29 days: 50% refund. 
                Less than 15 days: 25% refund. We also offer travel insurance for additional protection.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Do you offer group discounts?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Yes! Groups of 8+ travelers receive special pricing. We also offer corporate packages 
                for business retreats and team building trips.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What's included in the tour packages?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Most packages include accommodation, transportation, guided tours, and specified meals. 
                Each package clearly lists what's included and optional add-ons available.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Do you provide travel insurance?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                We offer comprehensive travel insurance covering medical emergencies, trip cancellations, 
                lost luggage, and more. It's optional but highly recommended for international travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <i className="ri-flight-takeoff-line text-white"></i>
                </div>
                <h3 className="font-[\'Pacifico\'] text-2xl text-white">Wanderlust</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">Discover the world's most incredible destinations with our curated travel experiences.</p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Destinations</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Maldives</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Bali</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Iceland</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Japan</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Switzerland</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Hotel Booking</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Flight Tickets</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Tour Packages</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Travel Insurance</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <i className="ri-phone-line text-blue-500"></i>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-mail-line text-blue-500"></i>
                  <span>info@wanderlust.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-map-pin-line text-blue-500"></i>
                  <span>New York, NY 10001</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Wanderlust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
