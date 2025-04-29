import React, { useEffect } from "react";

const MidtransSnap = () => {
  useEffect(() => {
    // Load Snap.js Midtrans
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", "YOUR_CLIENT_KEY"); // Ganti dengan client key kamu
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const pay = () => {
    window.snap.pay("cd644ea9-ac9c-465a-b4db-b82cee880538"); // Ganti dengan token dari backend
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-sans">
      <h3 className="text-xl mb-5 font-semibold">Bayar Donasi</h3>
      <button
        onClick={pay}
        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Bayar Sekarang
      </button>
    </div>
  );
};

export default MidtransSnap;
