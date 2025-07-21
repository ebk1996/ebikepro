import React from 'react';
import { BatteryCharging, Zap, Gauge, Bike, Camera, DollarSign, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

// Main App component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      {/* Header/Navigation */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4 bg-transparent">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold text-yellow-500">SURRON X</div>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#hero" className="hover:text-yellow-500 transition-colors">Home</a></li>
            <li><a href="#features" className="hover:text-yellow-500 transition-colors">Features</a></li>
            <li><a href="#gallery" className="hover:text-yellow-500 transition-colors">Gallery</a></li>
            <li><a href="#specs" className="hover:text-yellow-500 transition-colors">Specifications</a></li>
            <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a></li>
          </ul>
          <button className="md:hidden text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/1a202c/ffffff?text=SURRON+X')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-up">
            Unleash the <span className="text-yellow-500">Power</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
            Experience the thrill of electric off-road performance.
          </p>
          <a href="#specs" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-block animate-fade-in-up animation-delay-400 shadow-lg">
            Explore Features
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-yellow-500">About the Surron X</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/800x600/2d3748/ffffff?text=SURRON+X+Riding"
                alt="Surron X Riding"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 text-left">
              <p className="text-lg text-gray-300 mb-4">
                The Surron X is a revolutionary electric dirt bike that redefines off-road riding. Combining lightweight design with immense power, it offers an unparalleled riding experience for both enthusiasts and professionals.
              </p>
              <p className="text-lg text-gray-300">
                Its advanced electric powertrain delivers instant torque, silent operation, and zero emissions, making it an eco-friendly choice without compromising on performance. Conquer any terrain with confidence and agility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-yellow-500">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-12 h-12 text-yellow-500 mb-4" />}
              title="Instant Torque"
              description="Experience exhilarating acceleration with the powerful electric motor delivering instant torque."
            />
            <FeatureCard
              icon={<BatteryCharging className="w-12 h-12 text-yellow-500 mb-4" />}
              title="Long Range Battery"
              description="Equipped with a high-capacity battery for extended adventures and minimal charging stops."
            />
            <FeatureCard
              icon={<Gauge className="w-12 h-12 text-yellow-500 mb-4" />}
              title="High Performance"
              description="Top speeds and agile handling designed for competitive off-road performance."
            />
            <FeatureCard
              icon={<Bike className="w-12 h-12 text-yellow-500 mb-4" />}
              title="Lightweight Frame"
              description="An aerospace-grade aluminum frame ensures durability without compromising on weight."
            />
            <FeatureCard
              icon={<Camera className="w-12 h-12 text-yellow-500 mb-4" />}
              title="Advanced Suspension"
              description="Fully adjustable front and rear suspension systems for superior comfort and control on any terrain."
            />
            <FeatureCard
              icon={<DollarSign className="w-12 h-12 text-yellow-500 mb-4" />}
              title="Cost-Effective"
              description="Lower running costs compared to traditional gas bikes, saving you money on fuel and maintenance."
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-yellow-500">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <GalleryImage src="https://placehold.co/600x400/2d3748/ffffff?text=Surron+X+1" alt="Surron X 1" />
            <GalleryImage src="https://placehold.co/600x400/2d3748/ffffff?text=Surron+X+2" alt="Surron X 2" />
            <GalleryImage src="https://placehold.co/600x400/2d3748/ffffff?text=Surron+X+3" alt="Surron X 3" />
            <GalleryImage src="https://placehold.co/600x400/2d3748/ffffff?text=Surron+X+4" alt="Surron X 4" />
            <GalleryImage src="https://placehold.co/600x400/2d3748/ffffff?text=Surron+X+5" alt="Surron X 5" />
            <GalleryImage src="https://placehold.co/600x400/2d3748/ffffff?text=Surron+X+6" alt="Surron X 6" />
            <GalleryImage src="https://placehold.co/600x400/2d3748/ffffff?text=Surron+X+7" alt="Surron X 7" />
            <GalleryImage src="https://placehold.co/600x400/2d3748/ffffff?text=Surron+X+8" alt="Surron X 8" />
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-yellow-500">Specifications</h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <SpecItem label="Motor Type" value="Air-cooled Permanent Magnet Synchronous Motor" />
              <SpecItem label="Rated Power" value="3000W" />
              <SpecItem label="Peak Power" value="6000W" />
              <SpecItem label="Max Torque" value="250 N.m" />
              <SpecItem label="Top Speed" value="47 mph (75 km/h)" />
              <SpecItem label="Range" value="62 miles (100 km) @ 20 mph" />
              <SpecItem label="Battery" value="60V 38.5Ah Lithium-ion" />
              <SpecItem label="Charging Time" value="2.5 - 3.5 hours" />
              <SpecItem label="Frame Material" value="6061 T4 & T6 Aluminum Alloy" />
              <SpecItem label="Front Suspension" value="DNM USD-8S" />
              <SpecItem label="Rear Suspension" value="DNM RCP-2S" />
              <SpecItem label="Brakes" value="Hydraulic Disc Brakes (203mm rotors)" />
              <SpecItem label="Weight" value="115 lbs (52 kg)" />
              <SpecItem label="Wheelbase" value="49.2 inches (1250 mm)" />
              <SpecItem label="Seat Height" value="33.1 inches (840 mm)" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Pre-order Section */}
      <section id="cta" className="py-16 bg-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ride?</h2>
          <p className="text-lg md:text-xl mb-8">
            Join the electric revolution and experience the future of off-road biking.
          </p>
          <a href="#contact" className="bg-gray-900 hover:bg-gray-700 text-yellow-500 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-block shadow-lg">
            Contact Us to Order
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-yellow-500">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl flex flex-col items-center">
              <Mail className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">info.ebikepro@proton.me</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl flex flex-col items-center">
              <Phone className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (520) 543-7890</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl flex flex-col items-center md:col-span-2">
              <MapPin className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">134223 Electric Avenue, Dirtville, CA 90210</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 text-gray-400 text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://facebook.com" className="hover:text-yellow-500 transition-colors" target="_blank" rel="noopener noreferrer"><Facebook className="w-6 h-6" /></a>
            <a href="https://twitter.com" className="hover:text-yellow-500 transition-colors" target="_blank" rel="noopener noreferrer"><Twitter className="w-6 h-6" /></a>
            <a href="https://instagram.com" className="hover:text-yellow-500 transition-colors" target="_blank" rel="noopener noreferrer"><Instagram className="w-6 h-6" /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} EBIKE PRO&trade;. All rights reserved.</p>
          <p className="text-sm mt-2">Designed with passion for electric adventures.</p>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
    {icon}
    <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </div>
);

// Gallery Image Component
const GalleryImage = ({ src, alt }) => (
  <div className="overflow-hidden rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
    <img src={src} alt={alt} className="w-full h-48 object-cover" />
  </div>
);

// Specification Item Component
const SpecItem = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
    <span className="font-medium text-gray-300">{label}:</span>
    <span className="text-yellow-500">{value}</span>
  </div>
);

export default App;