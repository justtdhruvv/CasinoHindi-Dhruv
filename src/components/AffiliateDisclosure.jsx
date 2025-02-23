import React from 'react';
import { motion } from 'framer-motion';

const AffiliateDisclosure = () => {
  return (
    <section className="py-8 bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <p className="max-w-3xl mx-auto text-sm text-gray-600 text-center">
          Affiliate Disclosure: Some links on this page are affiliate links. 
          We may receive a commission if you sign up through these links, 
          but this doesn't affect our rankings or recommendations. 
          We maintain editorial independence in our reviews.
        </p>
      </motion.div>
    </section>
  );
};

export default AffiliateDisclosure;
