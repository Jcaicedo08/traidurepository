document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los enlaces del menú
    const menuLinks = document.querySelectorAll(".menu li a");
    // Selecciona todas las secciones del contenido
    const sections = document.querySelectorAll(".section");
  
    menuLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
  
        // Remueve la clase 'active' de todos los enlaces del menú
        menuLinks.forEach(link => link.classList.remove("active"));
  
        // Oculta todas las secciones removiendo la clase 'active'
        sections.forEach(section => section.classList.remove("active"));
  
        // Agrega la clase 'active' al enlace clicado
        link.classList.add("active");
  
        // Obtén el id de la sección a mostrar desde el atributo data-section
        const sectionId = link.getAttribute("data-section");
        const targetSection = document.getElementById(sectionId);
  
        // Muestra la sección correspondiente agregándole la clase 'active'
        targetSection.classList.add("active");
      });
    });
  });