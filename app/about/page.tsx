
'use client';

import Link from 'next/link';
import Header from '../../components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white pt-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-8">About Wanderlust</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            We're passionate travel experts dedicated to creating extraordinary journeys that inspire, 
            transform, and connect you with the world's most amazing destinations.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Story</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Founded in 2010, Wanderlust was born from a simple belief: travel has the power to 
                transform lives. Our founders, experienced travelers themselves, noticed a gap in the market 
                for truly personalized, high-quality travel experiences that go beyond the typical tourist path.
              </p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Today, we've grown into a globally recognized travel company, having served over 50,000 
                satisfied customers across 6 continents. Our team of travel experts, local guides, and 
                cultural ambassadors work tirelessly to craft unforgettable journeys that create lifelong memories.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">50K+</div>
                  <div className="text-gray-600 font-medium">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">100+</div>
                  <div className="text-gray-600 font-medium">Destinations</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20travel%20company%20office%20with%20diverse%20international%20team%20of%20travel%20professionals%2C%20world%20map%20on%20wall%2C%20modern%20workspace%2C%20collaborative%20environment%2C%20professional%20atmosphere%2C%20happy%20employees%20planning%20travel%20experiences&width=600&height=500&seq=about_team_office&orientation=portrait"
                alt="Our Team"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl">
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-sm">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do and shape every journey we create
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-2xl">
                <i className="ri-heart-line text-4xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Passion & Care</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                We treat every traveler like family, caring deeply about their experience and 
                going above and beyond to exceed expectations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-2xl">
                <i className="ri-shield-check-line text-4xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Trust & Safety</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Your safety and peace of mind are our top priorities. We maintain the highest 
                standards of safety and reliability in all our services.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-2xl">
                <i className="ri-star-line text-4xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Excellence & Innovation</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                We constantly innovate and improve our services, setting new standards 
                for luxury travel and customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced leadership team brings together decades of travel industry expertise 
              and passion for creating exceptional experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-10">
            {/* CEO */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20CEO%20of%20travel%20company%2C%20confident%20business%20leader%2C%20modern%20office%20background%2C%20professional%20headshot%2C%20executive%20portrait%2C%20successful%20entrepreneur%2C%20warm%20and%20approachable%20expression&width=300&height=400&seq=ceo_portrait&orientation=portrait"
                  alt="Sarah Johnson"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-blue-600 mb-4 font-semibold">CEO & Founder</p>
                <p className="text-gray-600 text-sm">20+ years in luxury travel industry</p>
              </div>
            </div>

            {/* CTO */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20CTO%20of%20tech%20company%2C%20technology%20expert%2C%20modern%20office%20setting%2C%20professional%20headshot%2C%20innovation%20leader%2C%20confident%20expression%2C%20technical%20background&width=300&height=400&seq=cto_portrait&orientation=portrait"
                  alt="Michael Chen"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Michael Chen</h3>
                <p className="text-blue-600 mb-4 font-semibold">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">Expert in travel technology solutions</p>
              </div>
            </div>

            {/* Head of Operations */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20operations%20director%2C%20experienced%20travel%20operations%20manager%2C%20professional%20business%20attire%2C%20confident%20leader%2C%20operational%20excellence%20expert%2C%20warm%20professional%20smile&width=300&height=400&seq=operations_head&orientation=portrait"
                  alt="Emily Rodriguez"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Emily Rodriguez</h3>
                <p className="text-blue-600 mb-4 font-semibold">Head of Operations</p>
                <p className="text-gray-600 text-sm">Global operations and logistics expert</p>
              </div>
            </div>

            {/* Customer Experience Director */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20customer%20service%20director%2C%20customer%20experience%20expert%2C%20friendly%20and%20approachable%20professional%2C%20hospitality%20industry%20background%2C%20warm%20welcoming%20expression%2C%20professional%20portrait&width=300&height=400&seq=customer_director&orientation=portrait"
                  alt="David Thompson"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">David Thompson</h3>
                <p className="text-blue-600 mb-4 font-semibold">Customer Experience Director</p>
                <p className="text-gray-600 text-sm">Hospitality and service excellence specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Why Choose Wanderlust?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <i className="ri-award-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Award-Winning Service</h3>
              <p className="text-gray-700 leading-relaxed">Recognized globally for exceptional service quality and customer satisfaction</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <i className="ri-team-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-700 leading-relaxed">Professional travel consultants and local guides with deep destination knowledge</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <i className="ri-customer-service-2-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Approach</h3>
              <p className="text-gray-700 leading-relaxed">Every journey is tailored to your unique preferences and travel style</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <i className="ri-shield-check-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Peace of Mind</h3>
              <p className="text-gray-700 leading-relaxed">Comprehensive insurance, 24/7 support, and emergency assistance worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied travelers who have discovered the world with Wanderlust. 
            Let us create your perfect journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-full transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-2xl text-lg">
              Contact Us
            </Link>
            <Link href="/destinations" className="border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold px-10 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap backdrop-blur-sm text-lg">
              View Destinations
            </Link>
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
