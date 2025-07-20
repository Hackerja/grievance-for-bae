import { useState } from "react";

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
    <div className="min-h-screen bg-pink-50 text-center text-gray-800 p-6 font-sans">
      <div className="bg-gradient-to-r from-pink-300 to-pink-200 p-4 rounded-xl shadow-lg text-2xl font-bold animate-pulse">
        Grievance Box for You 💌
      </div>
      <p className="text-md text-gray-600 mt-2">
        Your message goes straight to Light. No one else. Speak freely 🕊️
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write anything that’s on your heart…"
          className="w-full max-w-xl h-32 p-4 rounded-lg text-base border border-gray-300 shadow"
          required
        ></textarea>

        <div>
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="text-base p-2 rounded-md border border-gray-300"
          >
            <option value="😊">😊 Happy</option>
            <option value="😔">😔 Sad</option>
            <option value="😡">😡 Angry</option>
            <option value="🥺">🥺 Anxious</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition"
        >
          Send to Light 💘
        </button>
      </form>
    </div>
  );
}
