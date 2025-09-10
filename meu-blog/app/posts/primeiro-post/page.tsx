import LikeButton from "@/components/LikeButton";

export default function Post() {
  return (
    <article className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Meu Primeiro Post
      </h1>
      <p className="text-gray-600 mb-2">Publicado em: 09 de setembro, 2025</p>

      <div className="prose mt-6">
        <p>
          Este é o conteúdo do meu primeiro post no blog! Estou muito animada
          para compartilhar meus aprendizados com vocês.
        </p>
        <p>
          O Next.js está sendo muito interessante de aprender, mesmo para
          iniciantes.
        </p>
      </div>

      <LikeButton />
    </article>
  );
}
