"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export default function LikeButton({ postId }: { postId: number }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setIsLiked(!isLiked);

    // Simulação de API call
    try {
      await fetch("/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId, likes: newLikes }),
      });
    } catch (error) {
      console.error("Erro ao curtir:", error);
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        isLiked
          ? "bg-red-100 text-red-600"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      <Heart size={20} className={isLiked ? "fill-current" : ""} />
      <span>Curtir ({likes})</span>
    </button>
  );
}
