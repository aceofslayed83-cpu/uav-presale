import { useState, useEffect } from "react";

export default function App() {
  const PRESALE_GOAL = 20000000;
  const [raised] = useState(0);

  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 14);

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = endDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const progress = Math.min((raised / PRESALE_GOAL) * 100, 100);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* NAV */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">UAV Coin</h1>
        <div className="space-x-6 text-gray-300">
          <a href="#presale">Presale</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#roadmap">Roadmap</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="h-[300px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1528784351875-d797d86873a1)",
        }}
      >
        <div className="bg-black/60 p-8 rounded-xl">
          <h2 className="text-4xl font-bold mb-2">United American Values</h2>
          <p className="text-gray-300">
            A community-driven patriotic crypto movement
          </p>
        </div>
      </section>

      {/* PRESALE */}
      <section id="presale" className="max-w-3xl mx-auto p-6 mt-10">
        <h3 className="text-3xl font-bold mb-4 text-center">
          Presale – $20,000,000 Goal
        </h3>

        {/* Progress */}
        <div className="mb-6">
          <div className="w-full bg-gray-800 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">
            ${raised.toLocaleString()} / ${PRESALE_GOAL.toLocaleString()} raised
          </p>
        </div>

        {/* Countdown */}
        <div className="bg-gray-800 rounded-xl p-4 text-center mb-6">
          <p className="text-gray-400 mb-1">Next price increase in</p>
          <p className="text-2xl font-mono">
            {timeLeft.days || 0}d {timeLeft.hours || 0}h{" "}
            {timeLeft.minutes || 0}m {timeLeft.seconds || 0}s
          </p>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-gray-800 p-4 rounded-xl">
            <p className="text-gray-400">Current Presale Price</p>
            <p className="text-xl font-bold">$0.001</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <p className="text-gray-400">Launch Price</p>
            <p className="text-xl font-bold">$0.01</p>
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section
        id="tokenomics"
        className="max-w-3xl mx-auto p-6 mt-16"
      >
        <h3 className="text-3xl font-bold mb-4 text-center">Tokenomics</h3>
        <ul className="space-y-2 text-lg">
          <li>• Presale: 50%</li>
          <li>• Liquidity: 25%</li>
          <li>• Marketing: 10%</li>
          <li>• Team: 10%</li>
          <li>• Reserves / Future Utility: 5%</li>
        </ul>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="max-w-3xl mx-auto p-6 mt-16 mb-20">
        <h3 className="text-3xl font-bold mb-4 text-center">Roadmap</h3>
        <ul className="space-y-4 text-lg">
          <li>
            <strong>Phase 1:</strong> Website, presale, whitelist, marketing
          </li>
          <li>
            <strong>Phase 2:</strong> Token distribution, DEX listing
          </li>
          <li>
            <strong>Phase 3:</strong> Community growth, partnerships, expansion
          </li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © {new Date().getFullYear()} UAV Coin — uavcoincrypto.com
      </footer>
    </div>
  );
}
