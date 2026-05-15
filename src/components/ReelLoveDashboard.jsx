export default function ReelLoveDashboard() {
  const reasons = [
    "Your smile fixes every bad day 💕",
    "You somehow make chaos feel peaceful.",
    "You're my favorite notification.",
    "You make life softer.",
    "You are literally my safe place.",
    "You tolerate my nonsense 😭"
  ];

  const notes = [
    "I miss you more every second 💌",
    "Reel > everyone else.",
    "You're illegally adorable.",
    "My heart belongs to you fr.",
    "You make ordinary days special."
  ];

  const fortunes = [
    "Today Reel receives unlimited kisses 💋",
    "Warning: extreme cuteness detected.",
    "Sahed misses you right now 😭",
    "Love levels are dangerously high today."
  ];

  const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const showLoveNote = () => {
    alert(randomItem(notes));
  };

  const showReason = () => {
    alert(randomItem(reasons));
  };

  const showFortune = () => {
    alert(randomItem(fortunes));
  };

  const missMeter = () => {
    const percent = Math.floor(Math.random() * 11) + 90;
    alert(`Reel misses you ${percent}% right now 😭💕`);
  };

  const emergency = () => {
    alert("🚨 Emergency: missing Reel too much.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-rose-100 to-white text-gray-800 overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">💖</div>
        <div className="absolute top-32 right-20 text-5xl animate-pulse">💕</div>
        <div className="absolute bottom-20 left-20 text-6xl animate-ping">💗</div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black text-rose-600 mb-4">
            Reel's Website 💕
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A tiny corner of the internet made with love, chaos, and too much missing you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-xl border border-pink-200">
            <h2 className="text-3xl font-bold mb-4 text-rose-500">💌 Love Notes</h2>
            <p className="mb-4 text-gray-600">
              Click for random cute messages.
            </p>
            <button
              onClick={showLoveNote}
              className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-2xl transition-all shadow-lg"
            >
              Give Me Love
            </button>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-xl border border-pink-200">
            <h2 className="text-3xl font-bold mb-4 text-pink-500">😂 Miss Meter</h2>
            <p className="mb-4 text-gray-600">
              Scientifically inaccurate but emotionally correct.
            </p>
            <button
              onClick={missMeter}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl transition-all shadow-lg"
            >
              Check Meter
            </button>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-xl border border-pink-200">
            <h2 className="text-3xl font-bold mb-4 text-rose-500">🌸 Reasons I Love You</h2>
            <p className="mb-4 text-gray-600">
              Unlimited reasons available.
            </p>
            <button
              onClick={showReason}
              className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-2xl transition-all shadow-lg"
            >
              Show Reason
            </button>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-xl border border-pink-200">
            <h2 className="text-3xl font-bold mb-4 text-pink-500">🔮 Reel Fortune</h2>
            <p className="mb-4 text-gray-600">
              Your daily relationship prophecy.
            </p>
            <button
              onClick={showFortune}
              className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-2xl transition-all shadow-lg"
            >
              Reveal Fortune
            </button>
          </div>
        </div>

        <div className="mt-10 bg-white/80 backdrop-blur rounded-3xl p-8 shadow-2xl border border-pink-200 text-center">
          <h2 className="text-4xl font-black text-rose-500 mb-4">
            🚨 Emergency Button
          </h2>
          <p className="text-gray-600 mb-6">
            Press only during extreme missing-her situations.
          </p>
          <button
            onClick={emergency}
            className="bg-red-500 hover:bg-red-600 text-white text-xl px-10 py-4 rounded-full shadow-xl transition-transform hover:scale-105"
          >
            EMERGENCY
          </button>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-rose-400 to-pink-400 text-white px-10 py-6 rounded-3xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-2">💕 Final Message</h3>
            <p className="text-lg max-w-xl">
              No matter how busy life gets, this website exists to remind you that you are deeply loved every single day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}