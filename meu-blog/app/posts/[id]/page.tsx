import LikeButton from "@/components/LikeButton";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Link from "next/link";

// Conteúdo real dos posts
const posts = {
  1: {
    title: "Como Iniciar no Desenvolvimento Web",
    content: `Se você está começando sua jornada no desenvolvimento web, pode se sentir sobrecarregada com a quantidade de tecnologias disponíveis. Neste post, vou compartilhar um roteiro simples para iniciantes.

## Por Onde Começar?

1. **HTML & CSS**: A base de tudo. Aprenda a estruturação de páginas e estilização.
2. **JavaScript**: Adicione interatividade às suas páginas.
3. **React**: Uma biblioteca JavaScript popular para interfaces modernas.
4. **Next.js**: Framework React para aplicações completas.

## Dicas Importantes:

- Não tente aprender tudo de uma vez
- Pratique com projetos pequenos
- Não tenha medo de cometer erros

Lembre-se: toda desenvolvedora experiente já foi iniciante um dia!`,
    date: "2025-09-15",
    author: "Andrelis",
  },
  2: {
    title: "Next.js: Por Onde Começar",
    content: `Next.js tem se tornado uma ferramenta essencial para desenvolvedores React. Aqui está um guia rápido para começar.

## Vantagens do Next.js:

- **Renderização Híbrida**: Server-side e client-side rendering
- **Roteamento Automático**: Sistema de arquivos intuitivo
- **Otimizações**: Performance built-in
- **TypeScript**: Suporte nativo

## Primeiros Passos:

\`\`\`bash
npx create-next-app@latest meu-app
cd meu-app
npm run dev
\`\`\`

É realmente simples começar!`,
    date: "2025-09-10",
    author: "Andrelis",
  },
};

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts[params.id as keyof typeof posts];

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4 text-center">
        <h1 className="text-2xl text-green-800 mb-4">Post não encontrado</h1>
        <Link href="/" className="text-green-600 hover:underline">
          Voltar para a página inicial
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto py-8 px-4">
      <Link
        href="/"
        className="inline-flex items-center text-green-600 hover:text-green-800 mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        Voltar para posts
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">{post.title}</h1>

        <div className="flex items-center space-x-6 text-gray-600">
          <div className="flex items-center">
            <User size={20} className="mr-2" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={20} className="mr-2" />
            <span>
              {format(new Date(post.date), "dd 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </span>
          </div>
        </div>
      </header>

      <div className="prose prose-lg max-w-none mb-8">
        {post.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      <LikeButton postId={parseInt(params.id)} />
    </article>
  );
}
