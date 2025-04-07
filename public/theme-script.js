// Este script é executado antes do React ser carregado para evitar flash de conteúdo
(function() {
  try {
    // Verificar o tema salvo no localStorage
    var savedTheme = localStorage.getItem('theme');

    // Aplicar o tema baseado no localStorage
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      // Se não houver tema salvo, aplicar o tema escuro como padrão
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    // Fallback para o tema escuro em caso de erro
    document.documentElement.classList.add('dark');
  }
})();
