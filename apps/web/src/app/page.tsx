"use client"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Encontre o profissional
            <br />
            perfeito para você
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Conectamos você aos melhores profissionais para todos os tipos de
            serviços. Qualidade garantida e preços justos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Sou um Profissional
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Buscar Serviços
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10k+</div>
              <div className="text-gray-600">Profissionais</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50k+</div>
              <div className="text-gray-600">Serviços Realizados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Cidades Atendidas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Serviços em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encontre profissionais de alta qualidade para os serviços mais procurados
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Reforma e Reparos</h3>
                <p className="text-gray-600 text-sm mb-4">Profissionais especializados em reformas</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-sm text-gray-600 ml-1">4.9</span>
                  </div>
                  <span className="text-blue-600 font-semibold">A partir de R$ 150</span>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Limpeza Residencial</h3>
                <p className="text-gray-600 text-sm mb-4">Serviços de limpeza profissional</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-sm text-gray-600 ml-1">4.8</span>
                  </div>
                  <span className="text-blue-600 font-semibold">A partir de R$ 80</span>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Jardinagem</h3>
                <p className="text-gray-600 text-sm mb-4">Cuidados com jardins e plantas</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-sm text-gray-600 ml-1">4.7</span>
                  </div>
                  <span className="text-blue-600 font-semibold">A partir de R$ 120</span>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600"></div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Tecnologia</h3>
                <p className="text-gray-600 text-sm mb-4">Suporte técnico e instalações</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-sm text-gray-600 ml-1">4.9</span>
                  </div>
                  <span className="text-blue-600 font-semibold">A partir de R$ 100</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Ver todos os serviços
            </button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              É simples e rápido encontrar o profissional ideal para seu serviço
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Descreva seu projeto</h3>
              <p className="text-gray-600">
                Conte-nos sobre o serviço que você precisa e receba orçamentos personalizados
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Compare profissionais</h3>
              <p className="text-gray-600">
                Veja perfis, avaliações e orçamentos dos melhores profissionais
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Contrate com segurança</h3>
              <p className="text-gray-600">
                Escolha o melhor e contrate com total segurança e garantia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Professionals Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Profissionais em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos nossos profissionais mais bem avaliados
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Professional 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">CS</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Carlos Silva</h3>
              <p className="text-gray-600 mb-2">Eletricista</p>
              <div className="flex items-center justify-center mb-3">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-gray-600 ml-1">4.9 (127 avaliações)</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Especialista em instalações elétricas residenciais</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                Ver perfil completo
              </button>
            </div>

            {/* Professional 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">AS</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Ana Santos</h3>
              <p className="text-gray-600 mb-2">Designer de Interiores</p>
              <div className="flex items-center justify-center mb-3">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-gray-600 ml-1">4.8 (89 avaliações)</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Transformo ambientes com criatividade e funcionalidade</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                Ver perfil completo
              </button>
            </div>

            {/* Professional 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">JO</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">João Oliveira</h3>
              <p className="text-gray-600 mb-2">Encanador</p>
              <div className="flex items-center justify-center mb-3">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-gray-600 ml-1">4.9 (156 avaliações)</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Soluções rápidas e eficientes para problemas hidráulicos</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                Ver perfil completo
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Ver todos os profissionais
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para encontrar seu profissional?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Cadastre-se agora e receba orçamentos gratuitos de profissionais qualificados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Começar Agora
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Sou Profissional
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
