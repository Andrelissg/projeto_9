import { Post, POST_DATES, BLOG_CONFIG } from "@/lib/constants";

export const posts: Post[] = [
  {
    id: 1,
    title: "Como Iniciar no Desenvolvimento Web",
    excerpt:
      "Um guia para quem está começando na programação e quer aprender desenvolvimento web do zero.",
    date: POST_DATES[1],
    author: BLOG_CONFIG.author.name,
  },
  {
    id: 2,
    title: "Next.js: Por Onde Começar",
    excerpt:
      "Descubra como Next.js pode facilitar a criação de aplicações React modernas e eficientes.",
    date: POST_DATES[2],
    author: BLOG_CONFIG.author.name,
  },
  {
    id: 3,
    title: "Dicas de CSS para Layouts Responsivos",
    excerpt:
      "Aprenda técnicas essenciais para criar designs que funcionam em todos os dispositivos.",
    date: POST_DATES[3],
    author: BLOG_CONFIG.author.name,
  },
];

// Função para buscar post por ID
export function getPostById(id: number): Post | undefined {
  return posts.find((post) => post.id === id);
}

// Função para todos os posts
export function getAllPosts(): Post[] {
  return posts;
}
