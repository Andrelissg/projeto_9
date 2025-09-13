// Configurações centralizadas do blog
export const BLOG_CONFIG = {
  author: {
    name: "Andrelis Scheppa Gurgel",
    email: "andrelis.sheppa@gmail.com",
    social: {
      github: "https://github.com/Andrelissg",
      linkedin: "https://www.linkedin.com/in/andrelis-scheppa/",
    },
  },
  blogInfo: {
    title: "Blog de Desenvolvimento",
    description: "Compartilhando conhecimento em programação",
    baseUrl: "https://meublog.com",
  },
} as const;

// Datas dos posts (setembro de 2025)
export const POST_DATES = {
  1: "2025-09-15",
  2: "2025-09-10",
  3: "2025-09-05",
  4: "2025-09-20",
  5: "2025-09-25",
} as const;

// Tipo para os posts
export interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}
