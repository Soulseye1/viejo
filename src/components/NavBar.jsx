import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="bg-[#f5f5f4] border-b border-black px-6 py-4 mb-8 shadow-sm">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
          Viejo
        </Link>
        <div className="space-x-4 text-sm uppercase font-medium">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/events" className="hover:underline">Events</Link>
          <Link to="/merch" className="hover:underline">Merch</Link>
        </div>
      </div>
    </nav>
  );
}
