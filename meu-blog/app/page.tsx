import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 fade-in">
      {/* Hero Section Moderna */}
      <section className="text-center py-12 mb-16">
        <h1 className="text-5xl font-bold mb-6 metal-gradient">Blog Pessoal</h1>
        <p className="text-xl text-metal-medium mb-8 max-w-2xl mx-auto">
          Um espaço moderno para compartilhar ideias e conhecimentos
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-metal-accent to-metal-light mx-auto"></div>
      </section>

      {/* Conteúdo existente com novo visual */}
      <div className="glass-card p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-metal-dark">
          <Link
            href="/posts/primeiro-post"
            className="hover:text-metal-medium transition-colors"
          >
            Meu Primeiro Post
          </Link>
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Descubra minha jornada aprendendo Next.js e criando um blog com visual
          metálico contemporâneo.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-metal-medium font-medium">
            15 de Janeiro, 2024
          </span>
          <Link href="/posts/primeiro-post" className="btn-modern text-sm">
            Ler Post Completo
          </Link>
        </div>
      </div>

      {/* Newsletter com visual moderno */}
      <div className="glass-card p-8 bg-gradient-to-br from-metal-light/5 to-metal-medium/10 border-metal-light/30">
        <h3 className="text-2xl font-semibold mb-4 text-metal-dark">
          Fique por dentro
        </h3>
        <p className="text-gray-700 mb-6">
          Receba as últimas atualizações e posts diretamente no seu email.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Seu melhor email"
            className="flex-1 px-4 py-3 border border-metal-light/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-metal-medium bg-white/50"
          />
          <button className="btn-modern px-6 py-3 whitespace-nowrap">
            Inscrever
          </button>
        </div>
      </div>
    </div>
  );
}
