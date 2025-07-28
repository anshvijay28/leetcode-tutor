function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">LC</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">LeetCoach</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Features
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Testimonials
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Pricing
              </a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ace Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Tech Interview</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Personalized LeetCode coaching from an ex-FAANG engineer. Land your dream job with expert guidance and proven strategies.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose LeetCoach?</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed in technical interviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1-on-1 Coaching</h3>
              <p className="text-gray-600">Personalized sessions tailored to your strengths and weaknesses with direct feedback.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real Interview Prep</h3>
              <p className="text-gray-600">Mock interviews and comprehensive feedback from an ex-FAANG engineer.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">Students have successfully landed jobs at Google, Meta, Amazon, and other top tech companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our students who landed their dream jobs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AP</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Alex P.</h4>
                  <p className="text-gray-600">Software Engineer at Google</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"I landed my dream job at Google thanks to these coaching sessions! The mock interviews were spot on and the personalized feedback made all the difference."</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">PS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Priya S.</h4>
                  <p className="text-gray-600">Senior Developer at Meta</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"The personalized feedback and real LeetCode drills made all the difference. I went from struggling with medium problems to acing hard ones. Highly recommend!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Flexible pricing options to fit your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <p className="text-4xl font-bold text-indigo-600 mb-6">$99<span className="text-lg text-gray-600">/session</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>1 Mock Interview</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Detailed Feedback</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Study Plan</li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">Get Started</button>
            </div>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-2xl shadow-lg text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6">$299<span className="text-lg opacity-80">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>4 Sessions per Month</li>
                <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Priority Support</li>
                <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Custom Study Materials</li>
              </ul>
              <button className="w-full bg-white text-indigo-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Get Started</button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-4xl font-bold text-indigo-600 mb-6">$599<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Unlimited Sessions</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>24/7 Support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Interview Guarantee</li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to start your journey? Let's talk!</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">hello@leetcoach.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white">📱</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send us a message</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                  <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                  <textarea placeholder="Your Message" rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">LC</span>
                </div>
                <span className="text-xl font-bold">LeetCoach</span>
              </div>
              <p className="text-gray-400">Your path to tech interview success starts here.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">1-on-1 Coaching</a></li>
                <li><a href="#" className="hover:text-white transition">Mock Interviews</a></li>
                <li><a href="#" className="hover:text-white transition">Study Plans</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LeetCoach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;