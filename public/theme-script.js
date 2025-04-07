// Este script é executado antes do React ser carregado
(function() {
  try {
    // Verificar o tema salvo no localStorage
    var savedTheme = localStorage.getItem('theme');
    
    // Aplicar o tema dark se estiver salvo como dark
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    // Fallback para o tema claro em caso de erro
    document.documentElement.classList.remove('dark');
  }
})();
