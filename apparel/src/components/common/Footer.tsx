import { useState } from "react";
import Modal from "./Modal";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-white/10 text-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src="/images/logo.png" alt="Logo" className="h-8 mb-4" />
          <p className="text-sm leading-relaxed">
            Minimal, Modern, and Timeless Apparel.
            <br />
            © 2025 EC-Apparel Inc. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <h3 className="text-white font-semibold mb-2">Company</h3>
          <a href="#" className="hover:text-gray-700">About Us</a>
          <a href="#" className="hover:text-gray-700">Careers</a>
          <a href="#" className="hover:text-gray-700">Contact</a>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="opacity-60 hover:opacity-100 hover:scale-110 transition transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="opacity-60 hover:opacity-100 hover:scale-110 transition transform"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="opacity-60 hover:opacity-100 hover:scale-110 transition transform"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to get the latest collections and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-10">
          <img src="/icons/payments/visa.svg" alt="Visa" className="h-6 opacity-60 hover:opacity-100 hover:scale-105 transition transform" />
          <img src="/icons/payments/mastercard.svg" alt="MasterCard" className="h-6 opacity-60 hover:opacity-100 hover:scale-105 transition transform" />
          <img src="/icons/payments/paypal.svg" alt="PayPal" className="h-6 opacity-60 hover:opacity-100 hover:scale-105 transition transform" />
          <img src="/icons/payments/amex.svg" alt="Amex" className="h-6 opacity-60 hover:opacity-100 hover:scale-105 transition transform" />
        </div>
      </div>

      <div className="border-t border-black py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 EC-Apparel Inc.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <button onClick={() => setShowTerms(true)} className="hover:text-gray-300">
              Terms of Service
            </button>
            <button onClick={() => setShowPrivacy(true)} className="hover:text-gray-300">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={showTerms} onClose={() => setShowTerms(false)} title="Terms of Service">
        <p>
          These Terms of Service govern your use of our website and services...
        </p>
        <p>
          By using our site, you agree to comply with these terms...
        </p>
      </Modal>

      <Modal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} title="Privacy Policy">
        <p>
          We respect your privacy and are committed to protecting your personal information...
        </p>
        <p>
          This policy explains how we collect, use, and safeguard your data...
        </p>
      </Modal>
    </footer>
  );
};

export default Footer;
