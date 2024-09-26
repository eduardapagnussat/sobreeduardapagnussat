document.addEventListener("DOMContentLoaded", function () {
   const nome = document.getElementById("nome");

    //Iniciar animação de escrita
    setTimeout(() => {
       nome.style.width = nome.textContent.length + 'ch';
    }, 1000);

    document.querySelectorAll("ul.menu li a").forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevenir o comportamento padrão do link
  
          // Pega o valor do atributo href (sem o #)
          const targetId = this.getAttribute("href").substring(1);
  
          // Seleciona o elemento com o ID correspondente
          const targetElement = document.getElementById(targetId);
  
          // Verifica se o elemento existe antes de rolar até ele
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: "smooth", // Rolagem suave
                  block: "start" // Rolagem até o topo do elemento
              });
          }
      });
  });
});
