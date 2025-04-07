'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiSun, FiMoon, FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Evita problemas de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Renderizar um placeholder enquanto o componente não está montado
  if (!mounted) {
    return (
      <header className="flex justify-between items-center p-5 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
        <div className="h-[50px] w-[100px]"></div>
        <div className="flex items-center gap-4">
          <div className="w-[40px] h-[40px]"></div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="flex justify-between items-center p-5 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo-ecolution.png"
              alt="Ecolution Engenharia"
              width={100}
              height={50}
              className="transition-transform duration-300 hover:translate-x-2 dark:brightness-110"
            />
          </Link>
        </div>

        {/* Navegação horizontal para desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`py-2 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium ${pathname === '/' ? 'text-green-600 dark:text-green-400' : ''}`}
          >
            Início
          </Link>
          <div className="relative group">
            <Link
              href="/servicos"
              className={`py-2 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium flex items-center gap-1 ${pathname === '/servicos' || pathname?.startsWith('/servicos/') ? 'text-green-600 dark:text-green-400' : ''}`}
            >
              Serviços
              <FiChevronDown className="text-sm" />
            </Link>
            <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top-left z-50">
              <Link
                href="/servicos/ambiental"
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${pathname === '/servicos/ambiental' ? 'bg-gray-100 dark:bg-gray-700 text-green-600 dark:text-green-400' : ''}`}
              >
                Consultoria Ambiental
              </Link>
              <Link
                href="/servicos/alimentos"
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${pathname === '/servicos/alimentos' ? 'bg-gray-100 dark:bg-gray-700 text-green-600 dark:text-green-400' : ''}`}
              >
                Consultoria em Alimentos
              </Link>
              <Link
                href="/servicos/seguranca"
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${pathname === '/servicos/seguranca' ? 'bg-gray-100 dark:bg-gray-700 text-green-600 dark:text-green-400' : ''}`}
              >
                Segurança do Trabalho
              </Link>
            </div>
          </div>
          <Link
            href="/sobre"
            className={`py-2 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium ${pathname === '/sobre' ? 'text-green-600 dark:text-green-400' : ''}`}
          >
            Sobre
          </Link>
          <Link
            href="/contato"
            className={`py-2 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium ${pathname === '/contato' ? 'text-green-600 dark:text-green-400' : ''}`}
          >
            Contato
          </Link>
          <Link
            href="/depoimentos"
            className={`py-2 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium ${pathname === '/depoimentos' ? 'text-green-600 dark:text-green-400' : ''}`}
          >
            Depoimentos
          </Link>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {mounted && (
            <button
              onClick={() => {
                // Chamar a função global de alternancia de tema
                if (typeof window !== 'undefined' && window.toggleTheme) {
                  window.toggleTheme();
                }
                // Também chamar a função local para atualizar o estado do React
                toggleTheme();
              }}
              style={{
                padding: '0.5rem',
                borderRadius: '9999px',
                backgroundColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: `1px solid ${theme === 'dark' ? '#4b5563' : '#d1d5db'}`,
                transition: 'all 0.3s ease'
              }}
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? (
                <>
                  <FiSun style={{ fontSize: '1.25rem', color: '#f59e0b' }} />
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: 500
                  }} className="hidden sm:inline">Modo Claro</span>
                </>
              ) : (
                <>
                  <FiMoon style={{ fontSize: '1.25rem', color: '#2563eb' }} />
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: 500
                  }} className="hidden sm:inline">Modo Escuro</span>
                </>
              )}
            </button>
          )}
          {/* Botão de menu apenas para mobile */}
          <button
            onClick={toggleSidebar}
            style={{
              fontSize: '1.5rem',
              padding: '0.5rem',
              borderRadius: '9999px',
              transition: 'all 0.3s ease'
            }}
            className="md:hidden"
            aria-label="Abrir menu"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* Sidebar / Menu de navegação mobile */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleSidebar}
            className="text-2xl p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Fechar menu"
          >
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col p-4">
          <Link
            href="/"
            className={`py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors ${pathname === '/' ? 'bg-gray-100 dark:bg-gray-800 text-green-600 dark:text-green-400 font-medium' : ''}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Início
          </Link>
          <Link
            href="/servicos"
            className={`py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors ${pathname === '/servicos' ? 'bg-gray-100 dark:bg-gray-800 text-green-600 dark:text-green-400 font-medium' : ''}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Nossos Serviços
          </Link>
          <Link
            href="/servicos/ambiental"
            className={`py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors ml-4 ${pathname === '/servicos/ambiental' ? 'bg-gray-100 dark:bg-gray-800 text-green-600 dark:text-green-400 font-medium' : ''}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Consultoria Ambiental
          </Link>
          <Link
            href="/servicos/alimentos"
            className={`py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors ml-4 ${pathname === '/servicos/alimentos' ? 'bg-gray-100 dark:bg-gray-800 text-green-600 dark:text-green-400 font-medium' : ''}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Consultoria em Alimentos
          </Link>
          <Link
            href="/servicos/seguranca"
            className={`py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors ml-4 ${pathname === '/servicos/seguranca' ? 'bg-gray-100 dark:bg-gray-800 text-green-600 dark:text-green-400 font-medium' : ''}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Consultoria em Segurança do Trabalho
          </Link>
          <Link
            href="/sobre"
            className={`py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors ${pathname === '/sobre' ? 'bg-gray-100 dark:bg-gray-800 text-green-600 dark:text-green-400 font-medium' : ''}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Nossa História
          </Link>
          <Link
            href="/contato"
            className={`py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors ${pathname === '/contato' ? 'bg-gray-100 dark:bg-gray-800 text-green-600 dark:text-green-400 font-medium' : ''}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Contato
          </Link>
          <Link
            href="/depoimentos"
            className={`py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors ${pathname === '/depoimentos' ? 'bg-gray-100 dark:bg-gray-800 text-green-600 dark:text-green-400 font-medium' : ''}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Depoimentos
          </Link>
        </nav>
      </div>

      {/* Overlay para fechar o sidebar ao clicar fora (apenas mobile) */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Header;
