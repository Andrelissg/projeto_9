import LikeButton from "@/components/LikeButton";

export default function Post() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 fade-in">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 metal-gradient">
          Meu Primeiro Post
        </h1>
        <div className="flex items-center text-metal-medium mb-6">
          <span className="mr-4">15 de Janeiro, 2024</span>
          <span>•</span>
          <span className="ml-4">5 min de leitura</span>
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-metal-accent to-metal-light"></div>
      </header>

      <div className="glass-card p-8 mb-8">
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            Este é o conteúdo do meu primeiro post no blog! Estou muito animada
            para compartilhar meus aprendizados com vocês.
          </p>
          <p className="mb-6">
            O Next.js está sendo muito interessante de aprender, mesmo para
            iniciantes. A combinação de Server Components e Client Components
            oferece uma flexibilidade incrível.
          </p>
          <blockquote className="border-l-4 border-metal-medium pl-6 italic my-8 text-metal-dark">
            "A simplicidade é o último grau de sofisticação." - Leonardo da
            Vinci
          </blockquote>
          <p>
            Estou ansiosa para continuar esta jornada e compartilhar mais
            descobertas com vocês!
          </p>
        </div>
      </div>

      <div className="glass-card p-6 flex justify-between items-center">
        <LikeButton />
        <div className="flex space-x-4">
          <button className="p-2 rounded-lg bg-metal-light/10 hover:bg-metal-light/20 transition-colors">
            📋 Copiar Link
          </button>
          <button className="p-2 rounded-lg bg-metal-light/10 hover:bg-metal-light/20 transition-colors">
            📤 Compartilhar
          </button>
        </div>
      </div>
    </article>
  );
}
