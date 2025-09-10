import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Meu Blog Pessoal
      </h1>
      <p className="text-lg">
        Bem-vindo ao meu blog! Aqui está meu primeiro post:
      </p>

      <div className="mt-6 p-4 bg-green-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          <Link
            href="/posts/primeiro-post"
            className="text-green-700 hover:underline"
          >
            Meu Primeiro Post
          </Link>
        </h2>
        <p>Um pouco sobre minha experiência aprendendo Next.js</p>
      </div>
    </div>
  );
}
