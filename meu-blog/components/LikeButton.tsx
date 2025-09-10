"use client"; // IMPORTANTE: Esta linha deve estar no topo

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mt-4"
    >
      Curtir ({likes})
    </button>
  );
}
