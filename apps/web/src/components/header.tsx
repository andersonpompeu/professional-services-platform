"use client";
import Link from "next/link";

export default function Header() {
  const links = [
    { to: "/", label: "Início" },
    { to: "/servicos", label: "Serviços" },
    { to: "/profissionais", label: "Profissionais" },
    { to: "/como-funciona", label: "Como Funciona" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-white text-blue-600 px-3 py-2 rounded-lg font-bold text-xl mr-3">
              S
            </div>
            <span className="text-xl font-bold">ServiçosAI</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {links.map(({ to, label }) => {
              return (
                <Link 
                  key={to} 
                  href={to}
                  className="hover:text-blue-200 transition-colors"
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium hover:text-blue-200 transition-colors">
              Entrar
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
