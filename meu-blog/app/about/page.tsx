import { Mail, Github, Linkedin, BookOpen } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
        Sobre o Blog
      </h1>

      <div className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mr-6">
            <BookOpen size={32} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              Blog de Desenvolvimento - Andrelis
            </h2>
            <p className="text-green-600">
              Compartilhando conhecimento em programação
            </p>
          </div>
        </div>

        <div className="prose prose-lg">
          <p className="text-gray-700 mb-4">
            Este blog foi criado como parte de um projeto do curso de
            Desenvolvimento de Software para demonstrar o uso de Next.js, React
            e modernas práticas de desenvolvimento web.
          </p>
          <p className="text-gray-700 mb-4">
            O foco é fornecer conteúdo acessível e prático para pessoas que
            estão iniciando sua jornada na programação.
          </p>
          <p className="text-gray-700">
            Aqui você encontrará tutoriais, dicas e experiências relacionadas ao
            desenvolvimento front-end e tecnologias web.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-green-800 mb-4">
          📧 Contato
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="mailto:contato@blog.com"
            className="flex items-center text-green-600 hover:text-green-800 transition-colors"
          >
            <Mail size={20} className="mr-2" />
            Email
          </a>
          <a
            href="https://github.com/Andrelissg/projeto_9"
            className="flex items-center text-green-600 hover:text-green-800 transition-colors"
          >
            <Github size={20} className="mr-2" />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            className="flex items-center text-green-600 hover:text-green-800 transition-colors"
          >
            <Linkedin size={20} className="mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
