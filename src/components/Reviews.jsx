import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';
import {
  stakeLogo,
  winLogo,
  bcgameLogo,
  lotus365Logo,
  parimatchLogo,
  twinLogo,
  megapariLogo,
  pinupLogo,
  rokuLogo,
  bettiltLogo
} from '../assets';

const reviews = [
  {
    id: 1,
    siteName: 'Stake',
    logo: stakeLogo,
    rating: 4.9,
    shortReview: '✅ Most Trusted Crypto Betting Platform - Highly Recommended',
    longReview: `Stake.com stands out as the most reliable betting platform with exceptional features:
    • 100% Deposit Success Rate
    • Instant Withdrawals (processed within minutes)
    • Accounts Always Secure & Protected
    • No Bank Account Issues Ever Reported
    • Professional Customer Support 24/7
    • Transparent & Fair Gaming
    • Multiple Cryptocurrency Options
    • Regular Bonuses & VIP Rewards
    • Proven Track Record of Fair Payouts
    • Licensed & Regulated Platform`,
    visitLink: 'http://stake.com/?c=CASINOHINDI2025'
  },
  {
    id: 2,
    siteName: '1Win',
    logo: winLogo,
    rating: 4.8,
    shortReview: '✅ Superior Betting Experience with Guaranteed Payouts',
    longReview: `1Win delivers excellence in every aspect:
    • 100% Successful Deposit Rate
    • Quick & Reliable Withdrawals
    • Account Security Guaranteed
    • Safe Banking Integration
    • Professional Support Team
    • Multiple Payment Methods
    • Regular Player Bonuses
    • Verified Fast Payouts
    • Fully Licensed Platform
    • Clean Track Record,`,
    visitLink: 'https://1wuyue.top/?open=register&p=375q'
  },
  {
    id: 3,
    siteName: 'BC.Game',
    logo: bcgameLogo,
    rating: 2.1,
    shortReview: '⚠️ Multiple User Complaints and Issues Reported',
    longReview: `Warning: Users have reported significant issues with BC.Game:
    • Deposit Success Rate: Only 1%
    • Withdrawal Problems: 99% failure rate
    • Account Blocking: Multiple reports of accounts blocked after big wins
    • Bank Issues: Users report frozen bank accounts
    • Harassment: Excessive spam calls and messages after registration
    • Poor Customer Support: No response to withdrawal issues
    • Limited Payment Options: Many payment methods don't work`,
    
  },
  {
    id: 4,
    siteName: 'Lotus365',
    logo: lotus365Logo,
    rating: 1.9,
    shortReview: '⚠️ High Risk Platform with Multiple Red Flags',
    longReview: `Critical Warning about Lotus365:
    • Deposits: 99% failure rate reported
    • Withdrawals: Almost impossible to withdraw winnings
    • Account Security: Mass reports of blocked accounts
    • Banking Issues: Users report frozen bank accounts
    • Privacy Concerns: Excessive marketing calls and messages
    • Suspicious Activity: Accounts blocked after winning
    • Customer Service: Non-responsive to user complaints`,
    
  },
  {
    id: 5,
    siteName: 'Parimatch',
    logo: parimatchLogo,
    rating: 2.3,
    shortReview: '⚠️ Numerous User Complaints and Technical Issues',
    longReview: `User Warning for Parimatch:
    • Deposit Problems: 99% transaction failure
    • Withdrawal Issues: Most requests denied
    • Account Restrictions: Frequent blocking after wins
    • Banking Risk: Multiple reports of frozen accounts
    • Privacy Issues: Spam calls and messages reported
    • Technical Problems: Platform often unavailable
    • Support: Unresponsive to serious issues`,
    
  },
  {
    id: 6,
    siteName: 'Twin Casino',
    logo: twinLogo,
    rating: 2.0,
    shortReview: '⚠️ Serious Platform Issues and User Warnings',
    longReview: `Important Warning about Twin Casino:
    • Failed Deposits: 99% failure rate
    • Withdrawal Problems: Almost all requests rejected
    • Account Issues: Blocked after significant wins
    • Banking Concerns: User accounts frozen
    • Privacy Violation: Excessive marketing contact
    • Platform Stability: Frequent crashes and errors
    • Customer Support: Poor response to complaints`,
    
  },
  {
    id: 7,
    siteName: 'MegaPari',
    logo: megapariLogo,
    rating: 1.8,
    shortReview: '⚠️ Major Concerns with Platform Reliability',
    longReview: `Warning: MegaPari shows significant issues:
    • Deposits: 99% transaction failure rate
    • Withdrawals: Extremely difficult to process
    • Account Security: Unexplained blockings
    • Banking Problems: Linked accounts frozen
    • Marketing Abuse: Excessive spam messages
    • Platform Issues: Frequent downtime
    • Support: Non-existent customer service`,
    
  },
  {
    id: 8,
    siteName: 'Pin-Up Casino',
    logo: pinupLogo,
    rating: 2.2,
    shortReview: '⚠️ Multiple User Warnings and Platform Issues',
    longReview: `Critical Alert for Pin-Up Casino:
    • Deposit Issues: 99% failure in transactions
    • Withdrawal Problems: Most requests denied
    • Account Blocking: Common after winning
    • Bank Accounts: Risk of freezing
    • Privacy: Aggressive marketing tactics
    • Platform Reliability: Frequent crashes
    • Support: Unresponsive to user issues`,
    
  },
  {
    id: 9,
    siteName: 'Roku',
    logo: rokuLogo,
    rating: 1.7,
    shortReview: '⚠️ Serious Platform Issues and User Complaints',
    longReview: `Warning: Major issues reported with Roku:
    • Deposits: 99% failure rate
    • Withdrawals: Nearly impossible
    • Account Security: Random blockings
    • Banking Issues: Frozen accounts reported
    • Privacy Concerns: Spam messages and calls
    • Platform Problems: Unstable service
    • Support: No response to complaints`,
    
  },
  {
    id: 10,
    siteName: 'Bettilt',
    logo: bettiltLogo,
    rating: 2.0,
    shortReview: '⚠️ Multiple Red Flags and User Warnings',
    longReview: `Important Warning about Bettilt:
    • Deposits: 99% transaction failures
    • Withdrawals: Extremely problematic
    • Account Issues: Blocked after wins
    • Banking Problems: Account freezing reported
    • Privacy: Aggressive marketing tactics
    • Platform Stability: Frequent issues
    • Support: Poor customer service`,
    
  }
];

const ReviewCard = ({ review }) => {
  const isTrustedSite = review.siteName === 'Stake' || review.siteName === '1Win';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden mb-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-64 p-6 flex flex-col items-center justify-center bg-gray-50">
          <img 
            src={review.logo} 
            alt={review.siteName}
            className="w-32 h-32 object-contain mb-4"
          />
          <div className="flex items-center mb-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold">{review.rating}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">{review.siteName}</h3>
        </div>
        
        <div className="flex-1 p-6">
          <p className="text-lg font-semibold text-gray-900 mb-4">
            {review.shortReview}
          </p>
          <div className="prose prose-sm text-gray-600 mb-6">
            <p className="whitespace-pre-line">{review.longReview}</p>
          </div>
          {isTrustedSite && review.visitLink && (
            <div className="flex justify-end">
              <a
                href={review.visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors duration-200"
              >
                Visit Site
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Reviews = () => {
  const trustedSites = reviews.filter(review => 
    review.siteName === 'Stake' || review.siteName === '1Win'
  );

  const untrustedSites = reviews.filter(review => 
    !trustedSites.some(trusted => trusted.id === review.id)
  );

  return (
    <div id="reviews" className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Detailed Site Reviews
        </motion.h1>
        
        {/* Trusted Sites - Stacked */}
        <div className="max-w-4xl mx-auto mb-16"> {/* Reduced from 5xl and increased margin bottom */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Recommended Sites
          </h2>
          {trustedSites.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Untrusted Sites - Grid */}
        <div className="max-w-[1400px] mx-auto"> {/* Increased from 6xl to specific width */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Other Sites to Avoid
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0"> {/* Added padding control and increased gap */}
            {untrustedSites.map(review => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full" // Added full width
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
