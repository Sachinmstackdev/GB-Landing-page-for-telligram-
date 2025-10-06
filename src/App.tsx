import React, { useEffect } from 'react';
import { Star, Send } from 'lucide-react';

function App() {
  // Auto redirect to Telegram community after 20 seconds
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://t.me/+D2KKb3nV4uw3ZjE1';
    }, 20000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(redirectTimer);
  }, []);

  const memberAvatars = [
    'https://res.cloudinary.com/twosapiens/image/upload/v1747893959/image_2_xql6kh.png',
    'https://res.cloudinary.com/twosapiens/image/upload/v1755117767/Screenshot_2025-08-14_015542_vhy2hm.png',
    'https://res.cloudinary.com/twosapiens/image/upload/v1748803107/WhatsApp_Image_2025-06-02_at_12.07.10_AM_qqrzqf.jpg',
    'https://res.cloudinary.com/twosapiens/image/upload/v1747893959/image_1_nyihdt.png',
    'https://res.cloudinary.com/twosapiens/image/upload/v1747893959/image_3_sfske4.png',
    'https://res.cloudinary.com/twosapiens/image/upload/v1747893958/image_4_rpgncg.png'
  ];

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://res.cloudinary.com/twosapiens/image/upload/v1756036035/20250824_1714_Dynamic_Cricket_Swing_simple_compose_01k3dy718mex7vzws13pwq1h7e_wotmgl.png)'}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Join Our Private Community{' '}
              <span className="inline-block">🚀</span>
            </h1>
            <p className="text-golden text-xl md:text-2xl lg:text-3xl font-semibold mb-12 max-w-3xl mx-auto leading-relaxed">
              Exclusive updates, strategies, and daily tips – only inside.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="https://t.me/+D2KKb3nV4uw3ZjE1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-golden text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-golden/25 flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Send className="w-5 h-5" />
              Join Telegram Community
            </a>
            <a
              href="https://t.me/+z_BctcDcyu5hNjBl"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-golden text-golden px-8 py-4 rounded-2xl font-bold text-lg hover:bg-golden hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Send className="w-5 h-5" />
              Follow Telegram Channel
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            Instant access – no email required.
          </p>
        </div>
      </section>

      {/* Desktop Mockup Section */}
      <section className="px-4 py-16 md:py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Join Our Gaming Community
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Connect with fellow gaming enthusiasts for exclusive strategies, tips, and community discussions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Desktop Mockup */}
            <div className="relative">
              <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
                <div className="bg-gray-700 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <Send className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Gully Gaming Hub</h3>
                      <p className="text-gray-400 text-sm">@gullycommunity</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-600 rounded-lg p-3">
                      <p className="text-white text-sm">🎰 Daily gaming strategies & tips</p>
                    </div>
                    <div className="bg-gray-600 rounded-lg p-3">
                      <p className="text-white text-sm">💰 Exclusive winning patterns shared</p>
                    </div>
                    <div className="bg-gray-600 rounded-lg p-3">
                      <p className="text-white text-sm">🏆 Join successful gaming community</p>
                    </div>
                    <div className="bg-gray-600 rounded-lg p-3">
                      <p className="text-white text-sm">💎 Premium gaming insights daily</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-gray-700 rounded-lg p-3">
                    <p className="text-gray-400 text-sm">Share your gaming experience...</p>
                  </div>
                  <button className="bg-golden text-black px-4 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Why Join Our Gaming Community?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-golden rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">Exclusive gaming strategies and winning patterns</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-golden rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">Real-time gaming tips from experienced players</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-golden rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">Community discussions on gaming techniques</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-golden rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">Connect with 10,000+ gaming enthusiasts</p>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h4 className="text-golden font-bold text-lg mb-3">🎯 What You'll Get:</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Daily gaming insights and strategies</li>
                  <li>• Exclusive access to winning patterns</li>
                  <li>• Community support and discussions</li>
                  <li>• Premium gaming content and tips</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://t.me/+D2KKb3nV4uw3ZjE1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-golden text-black px-6 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-golden/25 flex items-center gap-2 justify-center"
                >
                  <Send className="w-5 h-5" />
                  Join Gaming Community
                </a>
                <a
                  href="https://t.me/+z_BctcDcyu5hNjBl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-golden text-golden px-6 py-4 rounded-xl font-bold text-lg hover:bg-golden hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
                >
                  <Send className="w-5 h-5" />
                  Follow Gaming Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            10,000+ members are already inside
          </h2>
          
          <div className="flex justify-center items-center gap-2 mb-8">
            {memberAvatars.map((avatar, index) => (
              <div key={index} className="relative">
                <img 
                  src={avatar} 
                  alt={`Community member ${index + 1}`}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-golden object-cover shadow-lg"
                />
                {index < 3 && (
                  <Star className="absolute -top-1 -right-1 w-4 h-4 text-golden fill-golden" />
                )}
              </div>
            ))}
            <div className="ml-2 text-golden font-semibold">
              +10K
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-16 md:py-24 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-golden text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Don't Miss Out
          </h2>
          <p className="text-white text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Choose your way to connect with us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href=" https://t.me/+D2KKb3nV4uw3ZjE1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-golden text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-golden/25 flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Send className="w-5 h-5" />
              Join Telegram Community
            </a>
            <a
              href="https://t.me/+z_BctcDcyu5hNjBl"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-golden text-golden px-8 py-4 rounded-2xl font-bold text-lg hover:bg-golden hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Send className="w-5 h-5" />
              Follow Telegram Channel
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            Join thousands of like-minded individuals in our exclusive community
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;