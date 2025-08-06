"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfissionaisPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedLocation, setSelectedLocation] = useState('todos');
  const [sortBy, setSortBy] = useState('avaliacao');

  // Mock data dos profissionais
  const profissionais = [
    {
      id: 1,
      nome: 'Carlos Silva',
      categoria: 'eletricista',
      especialidades: ['Instalações Elétricas', 'Automação', 'Painéis'],
      avaliacao: 4.9,
      totalAvaliacoes: 127,
      localizacao: 'São Paulo, SP',
      precoMinimo: 150,
      foto: 'CS',
      verificado: true,
      disponivel: true,
      descricao: 'Eletricista com 10+ anos de experiência em instalações residenciais e comerciais.'
    },
    {
      id: 2,
      nome: 'Ana Costa',
      categoria: 'encanador',
      especialidades: ['Hidráulica', 'Vazamentos', 'Instalações'],
      avaliacao: 4.8,
      totalAvaliacoes: 89,
      localizacao: 'Rio de Janeiro, RJ',
      precoMinimo: 120,
      foto: 'AC',
      verificado: true,
      disponivel: false,
      descricao: 'Especialista em sistemas hidráulicos residenciais e comerciais.'
    },
    {
      id: 3,
      nome: 'Roberto Santos',
      categoria: 'pintor',
      especialidades: ['Pintura Residencial', 'Textura', 'Verniz'],
      avaliacao: 4.7,
      totalAvaliacoes: 156,
      localizacao: 'Belo Horizonte, MG',
      precoMinimo: 80,
      foto: 'RS',
      verificado: true,
      disponivel: true,
      descricao: 'Pintor profissional com acabamentos de alta qualidade.'
    },
    {
      id: 4,
      nome: 'Maria Oliveira',
      categoria: 'limpeza',
      especialidades: ['Limpeza Residencial', 'Pós-Obra', 'Organização'],
      avaliacao: 4.9,
      totalAvaliacoes: 203,
      localizacao: 'São Paulo, SP',
      precoMinimo: 60,
      foto: 'MO',
      verificado: true,
      disponivel: true,
      descricao: 'Serviços de limpeza com produtos ecológicos e técnicas especializadas.'
    },
    {
      id: 5,
      nome: 'João Pereira',
      categoria: 'marceneiro',
      especialidades: ['Móveis Planejados', 'Restauração', 'Carpintaria'],
      avaliacao: 4.6,
      totalAvaliacoes: 74,
      localizacao: 'Curitiba, PR',
      precoMinimo: 200,
      foto: 'JP',
      verificado: false,
      disponivel: true,
      descricao: 'Marceneiro especializado em móveis sob medida e restauração.'
    },
    {
      id: 6,
      nome: 'Fernanda Lima',
      categoria: 'jardineiro',
      especialidades: ['Paisagismo', 'Manutenção', 'Irrigação'],
      avaliacao: 4.8,
      totalAvaliacoes: 92,
      localizacao: 'Brasília, DF',
      precoMinimo: 100,
      foto: 'FL',
      verificado: true,
      disponivel: true,
      descricao: 'Paisagista com foco em jardins sustentáveis e sistemas de irrigação.'
    }
  ];

  // Filtrar profissionais
  const profissionaisFiltrados = profissionais.filter(prof => {
    const matchSearch = prof.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       prof.especialidades.some(esp => esp.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchCategory = selectedCategory === 'todos' || prof.categoria === selectedCategory;
    const matchLocation = selectedLocation === 'todos' || prof.localizacao.includes(selectedLocation);
    
    return matchSearch && matchCategory && matchLocation;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'avaliacao':
        return b.avaliacao - a.avaliacao;
      case 'preco':
        return a.precoMinimo - b.precoMinimo;
      case 'avaliacoes':
        return b.totalAvaliacoes - a.totalAvaliacoes;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da Página */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Encontre os Melhores Profissionais</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conecte-se com profissionais qualificados e verificados em sua região. 
              Compare avaliações, preços e especialidades para encontrar o serviço ideal.
            </p>
          </div>

          {/* Barra de Busca e Filtros */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Campo de Busca */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Buscar Profissional</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nome do profissional ou especialidade..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Filtro por Categoria */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categoria</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="todos">Todas as categorias</option>
                  <option value="eletricista">Eletricista</option>
                  <option value="encanador">Encanador</option>
                  <option value="pintor">Pintor</option>
                  <option value="limpeza">Limpeza</option>
                  <option value="marceneiro">Marceneiro</option>
                  <option value="jardineiro">Jardineiro</option>
                </select>
              </div>

              {/* Filtro por Localização */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Localização</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="todos">Todas as cidades</option>
                  <option value="São Paulo">São Paulo</option>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                  <option value="Belo Horizonte">Belo Horizonte</option>
                  <option value="Curitiba">Curitiba</option>
                  <option value="Brasília">Brasília</option>
                </select>
              </div>
            </div>

            {/* Ordenação */}
            <div className="mt-4 flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Ordenar por:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="avaliacao">Melhor Avaliação</option>
                  <option value="preco">Menor Preço</option>
                  <option value="avaliacoes">Mais Avaliações</option>
                </select>
              </div>
              <div className="text-sm text-gray-600">
                {profissionaisFiltrados.length} profissionais encontrados
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Profissionais */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profissionaisFiltrados.map((profissional) => (
              <div key={profissional.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                {/* Header do Card */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-lg">{profissional.foto}</span>
                        </div>

                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{profissional.nome}</h3>
                        <p className="text-gray-600 capitalize">{profissional.categoria}</p>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      profissional.disponivel 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {profissional.disponivel ? 'Disponível' : 'Ocupado'}
                    </div>
                  </div>

                  {/* Avaliação */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-lg">★★★★★</span>
                      <span className="text-gray-700 font-semibold ml-2">{profissional.avaliacao}</span>
                      <span className="text-gray-500 ml-1">({profissional.totalAvaliacoes} avaliações)</span>
                    </div>
                  </div>

                  {/* Localização */}
                  <div className="flex items-center mb-3 text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{profissional.localizacao}</span>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-600 text-sm mb-4">{profissional.descricao}</p>

                  {/* Especialidades */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {profissional.especialidades.slice(0, 3).map((esp, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {esp}
                        </span>
                      ))}
                      {profissional.especialidades.length > 3 && (
                        <span className="text-gray-500 text-xs">+{profissional.especialidades.length - 3} mais</span>
                      )}
                    </div>
                  </div>

                  {/* Preço e Ações */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-600">A partir de</span>
                      <div className="text-xl font-bold text-blue-600">R$ {profissional.precoMinimo}</div>
                    </div>
                    <div className="space-x-2">
                      <button 
                        onClick={() => router.push('/profissional')}
                        className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-sm"
                      >
                        Ver Perfil
                      </button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        Contratar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensagem quando não há resultados */}
          {profissionaisFiltrados.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhum profissional encontrado</h3>
              <p className="text-gray-600">Tente ajustar os filtros de busca para encontrar mais resultados.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Você é um profissional?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Cadastre-se em nossa plataforma e conecte-se com milhares de clientes em busca dos seus serviços.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Cadastrar como Profissional
          </button>
        </div>
      </section>
    </div>
  );
}