import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/data/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
        Blog de Desenvolvimento
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
