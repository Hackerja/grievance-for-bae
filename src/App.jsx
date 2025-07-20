// App.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function App() {
  const [message, setMessage] = useState("");
  const [mood, setMood] = useState("😊");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://api.telegram.org/bot8159632565:AAE9dFavqJy38NI9bSy2og0xKEaS7MqiSfo/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: "@o_light4321",
          text: `📩 New Grievance:\n\n💬 "${message}"\n\nMood: ${mood}`
        }),
      });
      alert("Your message has been sent to Light 💌");
      setMessage("");
    } catch (err) {
      alert("Failed to send. Check your connection or bot setup.");
    }
  };

  return (
    <div className="min-h-screen w-full text-center font-sans bg-gradient-to-b from-pink-400 via-pink-200 to-pink-50 text-rose-900">
      {/* Top Section - Animated Text & Sparkles */}
      <div className="h-[75vh] bg-gradient-to-b from-pink-400 via-pink-300 to-pink-200 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-1000 ease-in-out">
        {/* Sparkle Sprinkles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-white rounded-full opacity-60 absolute"
              initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", scale: 0 }}
              animate={{ scale: [0, 1, 0], rotate: 360 }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        {/* Typing Animation */}
        <h1 className="text-4xl md:text-5xl font-extrabold z-10 text-fuchsia-100 drop-shadow-md">
          <Typewriter
            options={{
              loop: true,
              delay: 75,
              deleteSpeed: 40,
              pauseFor: 1400
            }}
            onInit={(typewriter) => {
              typewriter
              .typeString("A Space")
              .pauseFor(1000)
              .deleteAll()
              .typeString("jass")
                .pauseFor(1000)
                .deleteAll()
                .typeString("your space")
                .pauseFor(1000)
                .deleteAll()
                .typeString("our space")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </h1>
      </div>

      {/* Message Section */}
      <div className="px-4 py-10 md:py-20 text-pink-700 font-[DancingScript]">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-pink-700 font-[\'Dancing Script\'] tracking-wide">You angry Meri jaan?? Or just For Fun..Or love</h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4 flex flex-col items-center"
        >
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me everything..."
            className="w-full h-36 p-4 rounded-xl border border-pink-200 shadow-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-pink-700 font-[\'Dancing Script\'] bg-white bg-opacity-70"
            required
          ></textarea>

          {/* Mood Buttons */}
          <div className="flex gap-4 justify-center">
            {['😊', '😔', '😡', '🥺'].map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => setMood(emoji)}
                className={`text-2xl px-4 py-2 rounded-full transition transform hover:scale-110 ${mood === emoji ? 'bg-pink-300 text-white' : 'bg-white'} shadow`}
              >
                {emoji}
              </button>
            ))}
          </div>

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg text-lg"
          >
            Sure 💖
          </button>
        </form>

        {/* Memories Button */}
        <div className="mt-10">
          <button
            onClick={() => alert("Coming soon 💫")}
            className="mt-6 bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-5 py-2 rounded-full transition duration-300 shadow-md text-sm"
          >
            💭 Memories
          </button>
        </div>
      </div>
    </div>
  );
}
