import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white px-4 py-8" style={
      {
        backgroundColor :'#FF9933',
        color :'#FFFFFF',
        fontSize:'20px'
      }
    }>
      <div className="max-w-6xl mx-auto">
        <nav className="flex flex-wrap justify-center gap-4 mb-8 text-center">
          <a href="/contact-us" className="hover:text-gray-200">Contact Us</a>
          <span className="hidden md:inline">|</span>
          <p href="/why-yatradham" className="">259 Uttar Paras math Near kanak bhavan mandir ayodhya 224123 uttar pradesh</p>
          <span className="hidden md:inline">|</span>
          <a href="mailto: veerraghaw98@gmail.com" className="hover:text-gray-200">veerraghaw98@gmail.com</a>
          <span className="hidden md:inline">|</span>
          <p href="/travel-agents" className="">7376717607</p>
          <span className="hidden md:inline">|</span>
          <a href="/about" className="hover:text-gray-200">About veer raghav hotel</a>
          <span className="hidden md:inline">|</span>
          <a href="/terms" className="hover:text-gray-200">Terms Of Use</a>
        </nav>

        <nav className="flex flex-wrap justify-center gap-4 mb-8 text-center">
          <a href="/privacy" className="hover:text-gray-200">Privacy Policy</a>
          <span className="hidden md:inline">|</span>
          <a href="/agreement" className="hover:text-gray-200">User agreement</a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:opacity-80">
            <div className="bg-white p-2 rounded-lg">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </div>
          </a>
          <a href="#" className="hover:opacity-80">
            <div className="bg-white p-2 rounded-lg">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </a>
          <a href="#" className="hover:opacity-80">
            <div className="bg-white p-2 rounded-lg">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.314.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.399.863 4.829z"/>
              </svg>
            </div>
          </a>
          <a href="#" className="hover:opacity-80">
            <div className="bg-white p-2 rounded-lg">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="#" className="hover:opacity-80">
            <img src="https://yatradham.org/skin/frontend/default/hotel/yd_newtheme/images/google-play.png" alt="Google Play" className="h-12" />
          </a>
          <a href="#" className="hover:opacity-80">
            <img src="https://yatradham.org/skin/frontend/default/hotel/yd_newtheme/images/app-store.png" alt="App Store" className="h-12" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['Visa', 'Mastercard', 'RuPay', 'Maestro', 'UPI', 'Razorpay'].map((payment) => (
            <div key={payment} className="bg-white p-2 rounded-lg w-16 h-10 flex items-center justify-center">
              <span className="text-xs text-orange-500 font-bold">{payment}</span>
            </div>
          ))}
        </div>

        <div className="text-center text-sm">
          <p>©  veer raghav hotel . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;