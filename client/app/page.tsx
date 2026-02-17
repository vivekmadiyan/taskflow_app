"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white flex flex-col">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold tracking-wide">
          TaskFlow
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 border border-white/30 rounded-lg hover:bg-white/10 transition"
          >
            Login
          </button>

          <button
            onClick={() => router.push("/register")}
            className="px-4 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition"
          >
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="text-center max-w-2xl">

          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Manage Your Tasks <br />
            <span className="text-indigo-400">
              Securely & Efficiently
            </span>
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            A scalable dashboard built with Next.js, JWT authentication,
            and secure backend APIs. Designed for modern web workflows.
          </p>

          <div className="flex justify-center gap-6">
            <button
              onClick={() => router.push("/register")}
              className="bg-indigo-500 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/30"
            >
              Get Started
            </button>

            <button
              onClick={() => router.push("/login")}
              className="border border-white/30 px-8 py-3 rounded-xl text-lg hover:bg-white/10 transition"
            >
              Login
            </button>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm border-t border-white/10">
        © 2026 TaskFlow — Built with Next.js & Node.js
      </footer>

    </div>
  );
}
