"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="flex items-center space-x-2 bg-gradient-to-r from-metal-light to-metal-medium text-white px-6 py-3 rounded-xl transition-all duration-300 hover:from-metal-medium hover:to-metal-dark hover:shadow-lg"
    >
      <span className="text-lg">👍</span>
      <span>Curtir ({likes})</span>
    </button>
  );
}
