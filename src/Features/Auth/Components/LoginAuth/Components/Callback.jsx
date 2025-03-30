import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { token, user } = router.query;

      if (token) {
        // Simpan token di cookie agar tetap login
        Cookies.set("token", token, { expires: 7, secure: true });

        // Simpan data user di localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // Redirect ke dashboard setelah login sukses
        router.push("/dashboard");
      } else {
        console.error("Gagal mendapatkan token");
        router.push("/");
      }
    };

    handleAuth();
  }, [router.query]);

  return <p>Memproses login...</p>;
};

export default Callback;
