import React from 'react';
import { Users, Zap, MessageCircle, ArrowRight, Star } from 'lucide-react';

function App() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Updates",
      description: "Get exclusive insights and updates you won't find anywhere else on social media"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Exclusive Strategies",
      description: "Access premium strategies and tips shared only with our private community members"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Like-minded Community",
      description: "Connect with thousands of motivated individuals sharing the same goals and vision"
    }
  ];

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
              Join Community
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/+z_BctcDcyu5hNjBl"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-golden text-golden px-8 py-4 rounded-2xl font-bold text-lg hover:bg-golden hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2 min-w-[200px] justify-center"
            >
              Official channel
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            Instant access – no email required.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="text-golden bg-golden/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-sm mx-auto">
                  {benefit.description}
                </p>
              </div>
            ))}
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
              Join Community
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/+z_BctcDcyu5hNjBl"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-golden text-golden px-8 py-4 rounded-2xl font-bold text-lg hover:bg-golden hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2 min-w-[200px] justify-center"
            >
              Follow Channel
              <ArrowRight className="w-5 h-5" />
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