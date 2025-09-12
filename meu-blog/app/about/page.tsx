export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 metal-gradient">Sobre Mim</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-metal-medium to-metal-light mx-auto"></div>
      </div>

      <div className="glass-card p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-metal-light to-metal-medium rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8">
            <span className="text-4xl text-white font-bold">B</span>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-metal-dark mb-2">
              Andrelis
            </h2>
            <p className="text-metal-medium">Desenvolvedora</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Olá! Sou uma desenvolvedora a criar experiências web. Este blog é
            meu espaço para compartilhar aprendizados e ideias.
          </p>
          <p className="text-gray-700">
            Acredito que vou conseguir completar a tarefa.
          </p>
        </div>
      </div>
    </div>
  );
}
