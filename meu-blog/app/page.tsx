import PostCard from "@/components/PostCard";

// Conteúdo real para posts (substitui a API)
const posts = [
  {
    id: 1,
    title: "Como Iniciar no Desenvolvimento Web",
    excerpt:
      "Um guia para quem está começando na programação e quer aprender desenvolvimento web do zero.",
    date: "2025-09-15",
  },
  {
    id: 2,
    title: "Next.js: Por Onde Começar",
    excerpt:
      "Descubra como Next.js pode facilitar a criação de aplicações React modernas e eficientes.",
    date: "2025-09-10",
  },
  {
    id: 3,
    title: "EM BREVE - Dicas de CSS para Layouts Responsivos",
    excerpt:
      "Aprenda técnicas essenciais para criar designs que funcionam em todos os dispositivos. ",
    date: "2025-09-05",
  },
];

export default function Home() {
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
