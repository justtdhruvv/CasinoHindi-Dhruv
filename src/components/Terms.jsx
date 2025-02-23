import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="container mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Terms of Service Section */}
          <section className="mb-16">
            <div className="flex items-center justify-center mb-8 space-x-3">
              <Shield className="w-8 h-8 text-gray-700" />
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
            </div>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600">
                By accessing and using CasinoHindi, you agree to comply with these terms and conditions:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>This website is intended for informational purposes only.</li>
                <li>Users must be 18 years or older to use our services.</li>
                <li>We are not responsible for any losses incurred through gambling activities.</li>
                <li>Our reviews and recommendations are based on our research and experience.</li>
                <li>We may receive commissions through affiliate links.</li>
                <li>Content may not be reproduced without permission.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of any changes.
              </p>
            </div>
          </section>

          {/* Privacy Policy Section */}
          <section className="pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center mb-8 space-x-3">
              <Lock className="w-8 h-8 text-gray-700" />
              <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
            </div>
            <div className="prose prose-lg mx-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Basic analytics data (page views, time spent, etc.)</li>
                <li>Device information for optimization</li>
                <li>Affiliate link interactions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">How We Use Your Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Improve user experience</li>
                <li>Track affiliate conversions</li>
                <li>Analyze site performance</li>
                <li>Communicate updates (if subscribed)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Data Protection</h3>
              <p className="text-gray-600">
                We implement security measures to protect your information. We do not sell personal data to third parties.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Contact Us</h4>
                <p className="text-blue-800">
                  For any questions about our terms or privacy policy, please contact us at:{' '}
                  <a href="mailto:casinohindi@gmail.com" className="underline">
                    casinohindi@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
