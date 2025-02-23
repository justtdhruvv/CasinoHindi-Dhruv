import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const ResponsibleGaming = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center mb-8 space-x-4">
            {/* 18+ Logo */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0"
            >
              <span className="text-white text-sm font-bold">18+</span>
            </motion.div>

            {/* Title Section */}
            <div className="flex items-center">
              <AlertTriangle className="w-6 h-6 text-[#5F5B6B] mr-2" />
              <h3 className="text-xl font-semibold text-[#323031]">
                Responsible Gaming
              </h3>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#5F5B6B] mb-4 text-center"
          >
            We promote responsible gambling and urge our users to be aware of the risks associated with online betting. 
            Always gamble responsibly and within your means.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm text-[#5F5B6B] font-medium text-center"
          >
            18+ | T&Cs Apply | Please gamble responsibly | BeGambleAware.org
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResponsibleGaming;
