import React from "react";

const DiamondMemberPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white transition-all duration-300">
      {/* Header */}
      <header className="py-8 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">
          BECOME A LEGEND
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-300">
          DIAMOND MEMBER
        </h2>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Exclusivity Section */}
        <section className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 text-center">
            EXCLUSIVITY & PRIVILEGES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit Cards */}
            <div className="bg-gray-800 rounded-lg p-6 border border-yellow-400">
              <h4 className="text-xl font-bold text-yellow-300 mb-4">
                Financial Benefits
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>15% Top up bonus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>10% Tickets, food & beverage</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-yellow-400">
              <h4 className="text-xl font-bold text-yellow-300 mb-4">
                VIP Access
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>VIP lounge access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Complementary welcome drinks</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-yellow-400">
              <h4 className="text-xl font-bold text-yellow-300 mb-4">
                Special Rewards
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Birthday rewards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Paint rebates 10%</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Exclusive Events */}
        <section className="mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
            Exclusive events
          </h3>
          <div className="bg-gray-800 rounded-lg p-8 border-2 border-yellow-400 max-w-2xl mx-auto">
            <h4 className="text-4xl font-bold text-yellow-300 mb-6">
              DIAMOND MEMBER
            </h4>
            <div className="flex justify-center space-x-8 mb-6">
              <div className="text-center">
                <p className="text-sm text-gray-400">LESSES</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">MONTHS</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <nav className="flex justify-center space-x-8 text-lg font-medium">
          <a href="#" className="text-yellow-400 hover:text-yellow-300">
            Now Showing
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="text-yellow-400 hover:text-yellow-300">
            Coming Soon
          </a>
        </nav>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Diamond Member Program. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default DiamondMemberPage;
