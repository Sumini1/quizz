import React, { useState } from "react";
import { Send } from "lucide-react";

const AiChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Daftar kata kunci dan respons AI
  const aiResponses = [
    { keywords: ["halo", "hai"], response: "Halo! Ada yang bisa saya bantu?" },
    {
      keywords: ["nama", "siapa kamu"],
      response: "Saya Sumini!",
    },
    {
      keywords: ["rukun", "islam"],
      response: "Segala sesuatu yang harus ada",
    },
    {
      keywords: ["begadang", "panas", "hujan"],
      response:
        "Begadang untuk hal baik tak mengapa, tapi jangan keseringan tidak baik untuk kesehatan ",
    },
    {
      keywords: ["waktu", "jam"],
      response: `Sekarang pukul ${new Date().toLocaleTimeString()}`,
    },
    { keywords: ["terima kasih", "makasih"], response: "Sama-sama! 😊" },
  ];

  const getAiResponse = (userMessage) => {
    userMessage = userMessage.toLowerCase();

    // Cari jawaban berdasarkan kata kunci
    for (let entry of aiResponses) {
      if (entry.keywords.some((keyword) => userMessage.includes(keyword))) {
        return entry.response;
      }
    }

    // Jika tidak ada yang cocok, berikan respons default
    return "Maaf, saya belum mengerti pertanyaan Anda. Bisa dijelaskan lebih lanjut?";
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    // Tambahkan pesan pengguna
    setMessages([...messages, { text: input, sender: "user" }]);
    const userMessage = input;
    setInput("");

    // Dapatkan respons AI berdasarkan input user
    const aiReply = getAiResponse(userMessage);

    // Simulasi balasan AI dengan delay
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: aiReply, sender: "ai" },
      ]);
    }, 1000);
  };

  return (
    <div className="m-5 mt-16 border rounded-lg shadow-lg flex flex-col overflow-hidden ">
      <div className="bg-blue-500 text-white p-3 text-center font-semibold">
        Ada yang bisa saya bantu ?
      </div>
      <div className="p-3 h-60 overflow-y-auto flex flex-col gap-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-xs ${
              msg.sender === "user"
                ? "bg-blue-100 self-end"
                : "bg-gray-200 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-2 border-t flex items-center gap-2 mt-10">
        <input
          type="text"
          className="flex-1 p-2 border rounded-md outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ketik pesan..."
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={handleSend}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default AiChatBox;
