import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BettingSites from './components/BettingSites';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <BettingSites />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} BetCompare. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;