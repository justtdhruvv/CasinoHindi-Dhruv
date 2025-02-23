import React from 'react';
import { Shield, Lock, Award, AlertCircle } from 'lucide-react';

const TrustElements = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center p-6 bg-gray-50 rounded-lg transform hover:scale-[1.02] transition-all duration-300">
            <Shield className="w-12 h-12 text-[#5F5B6B]" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-[#323031]">
                Licensed & Regulated
              </h3>
              <p className="text-gray-600">
                All partners are fully licensed
              </p>
            </div>
          </div>
          <div className="flex items-center p-6 bg-gray-50 rounded-lg transform hover:scale-[1.02] transition-all duration-300">
            <Lock className="w-12 h-12 text-[#5F5B6B]" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-[#323031]">
                Secure & Protected
              </h3>
              <p className="text-gray-600">
                256-bit SSL encryption
              </p>
            </div>
          </div>
          <div className="flex items-center p-6 bg-gray-50 rounded-lg transform hover:scale-[1.02] transition-all duration-300">
            <Award className="w-12 h-12 text-[#5F5B6B]" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-[#323031]">
                Trusted Reviews
              </h3>
              <p className="text-gray-600">
                Verified user feedback
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="w-5 h-5 text-[#5F5B6B] mr-2" />
            <h3 className="text-lg font-semibold text-[#323031]">
              Affiliate Disclosure
            </h3>
          </div>
          <p className="text-gray-600 text-sm">
            We may receive compensation from the betting sites we feature. This
            affects the ranking and position of betting sites. We are
            committed to providing honest, unbiased reviews to help you make
            informed decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustElements;