"use client"

import { Badge } from "@/components/ui/badge"

export default function ProfissionalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Professional Profile */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Professional Photo and Basic Info */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-4xl">CS</span>
                  </div>

                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold">Carlos Silva</h1>
                  <Badge variant="verified" className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Verificado
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4">Eletricista Profissional</p>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="text-gray-600 ml-2">4.9 (127 avaliações)</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    São Paulo, SP
                  </div>


                </div>
              </div>
              
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="font-semibold text-lg mb-4">Entre em Contato</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Solicitar Orçamento
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                    Enviar Mensagem
                  </button>
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
            
            {/* Professional Details */}
            <div className="md:col-span-2 space-y-6">
              {/* About Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Sobre o Profissional</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sou eletricista profissional com mais de 10 anos de experiência em instalações elétricas residenciais e comerciais. 
                  Especializado em sistemas de automação residencial, painéis elétricos e manutenção preventiva.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Trabalho sempre com materiais de qualidade e ofereço garantia em todos os serviços realizados. 
                  Atendo com pontualidade e prezando pela segurança e satisfação do cliente.
                </p>
              </div>
              
              {/* Services and Prices */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Serviços e Preços</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Instalação Elétrica Básica</h3>
                    <p className="text-gray-600 text-sm mb-2">Pontos de luz, tomadas e interruptores</p>
                    <p className="text-blue-600 font-bold">A partir de R$ 150</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Manutenção de Quadro Elétrico</h3>
                    <p className="text-gray-600 text-sm mb-2">Revisão e reparo de painéis</p>
                    <p className="text-blue-600 font-bold">A partir de R$ 200</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Automação Residencial</h3>
                    <p className="text-gray-600 text-sm mb-2">Smart switches e sensores</p>
                    <p className="text-blue-600 font-bold">A partir de R$ 300</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Emergência 24h</h3>
                    <p className="text-gray-600 text-sm mb-2">Atendimento urgente</p>
                    <p className="text-blue-600 font-bold">A partir de R$ 120</p>
                  </div>
                </div>
              </div>
              
              {/* Specialties */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Especialidades</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Instalações Elétricas</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Automação Residencial</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Painéis Elétricos</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Manutenção Preventiva</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Emergências</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Iluminação LED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">

          
          {/* Galeria de Trabalhos */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Galeria de Trabalhos</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Conheça alguns dos nossos trabalhos mais bem executados
                </p>
              </div>
              
              {/* Gallery Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="h-48 rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                      alt="Instalação Elétrica Residencial" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-1">Instalação Elétrica Residencial</h4>
                  <p className="text-gray-600 mb-2">Casa Moderna - Alphaville</p>
                  <p className="text-sm text-gray-600 mb-4">Projeto completo de instalação elétrica com automação residencial</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                    Ver detalhes
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="h-48 rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="Sistema de Iluminação LED" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-1">Sistema de Iluminação LED</h4>
                  <p className="text-gray-600 mb-2">Escritório Comercial - Vila Olímpia</p>
                  <p className="text-sm text-gray-600 mb-4">Modernização completa do sistema de iluminação com tecnologia LED</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                    Ver detalhes
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="h-48 rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="Automação Residencial" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-1">Automação Residencial</h4>
                  <p className="text-gray-600 mb-2">Apartamento - Jardins</p>
                  <p className="text-sm text-gray-600 mb-4">Sistema inteligente de controle de iluminação e climatização</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                    Ver detalhes
                  </button>
                </div>
              </div>
            

            
            <div className="text-center mt-6">
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Ver Galeria Completa
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Avaliações dos Clientes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">MR</span>
                </div>
                <div>
                  <h4 className="font-semibold">Maria Rosa</h4>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "Excelente profissional! Muito pontual e caprichoso. Resolveu o problema elétrico da minha casa rapidamente e com preço justo."
              </p>
              <p className="text-gray-500 text-xs mt-2">Há 2 semanas</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">JS</span>
                </div>
                <div>
                  <h4 className="font-semibold">João Santos</h4>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "Instalou todo o sistema de automação da minha casa. Trabalho impecável e explicou tudo detalhadamente. Super recomendo!"
              </p>
              <p className="text-gray-500 text-xs mt-2">Há 1 mês</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">AL</span>
                </div>
                <div>
                  <h4 className="font-semibold">Ana Lima</h4>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "Atendimento de emergência no final de semana. Chegou rápido e resolveu o problema. Muito profissional e educado."
              </p>
              <p className="text-gray-500 text-xs mt-2">Há 3 semanas</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Ver todas as avaliações
            </button>
          </div>
        </div>
      </section>
      
      {/* Service Evaluation Form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Avaliar Serviço</h2>
              <p className="text-gray-600 text-center mb-8">
                Sua opinião é muito importante! Avalie o serviço prestado por Carlos Silva.
              </p>
              
              <form className="space-y-6">
                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Nota do Serviço
                  </label>
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="text-3xl text-gray-300 hover:text-yellow-400 transition-colors focus:outline-none"
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle star rating logic here
                        }}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Service Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Serviço
                  </label>
                  <select
                    id="serviceType"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Selecione o serviço</option>
                    <option value="instalacao">Instalação Elétrica</option>
                    <option value="manutencao">Manutenção de Quadro Elétrico</option>
                    <option value="automacao">Automação Residencial</option>
                    <option value="emergencia">Emergência 24h</option>
                    <option value="iluminacao">Iluminação LED</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                {/* Client Name */}
                <div>
                  <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-2">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Digite seu nome"
                  />
                </div>
                
                {/* Comment */}
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                    Comentário
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Conte como foi sua experiência com o serviço..."
                  ></textarea>
                </div>
                
                {/* Recommendation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Você recomendaria este profissional?
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="recommendation"
                        value="yes"
                        className="mr-2 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Sim, recomendo</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="recommendation"
                        value="no"
                        className="mr-2 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Não recomendo</span>
                    </label>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Enviar Avaliação
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}