import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Post } from "@/lib/constants";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-green-800 mb-3 line-clamp-2">
          <Link
            href={`/posts/${post.id}`}
            className="hover:text-green-600 transition-colors"
          >
            {post.title}
          </Link>
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <User size={16} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar size={16} />
            <span>
              {format(new Date(post.date), "dd MMM yyyy", { locale: ptBR })}
            </span>
          </div>
        </div>

        <Link
          href={`/posts/${post.id}`}
          className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Ler mais
        </Link>
      </div>
    </div>
  );
}
