import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Ganti dengan Client ID Google Anda

  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onFailure={onFailure}
      logo="https://path-to-your-logo.png" // Opsional: Ganti dengan logo Anda
      style={{ width: "100%" }} // Opsional: Gaya tombol
    >
      Daftar dengan Google
    </GoogleLogin>
  );
};

export default GoogleLoginButton;
