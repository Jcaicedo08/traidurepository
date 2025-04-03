document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todos los enlaces del menú
  const menuLinks = document.querySelectorAll(".menu li a");
  // Selecciona todas las secciones
  const sections = document.querySelectorAll(".section");

  menuLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      // Remueve la clase 'active' de todos los enlaces
      menuLinks.forEach(link => link.classList.remove("active"));
      // Remueve la clase 'active' de todas las secciones
      sections.forEach(section => section.classList.remove("active"));
      // Agrega la clase 'active' al enlace clicado
      link.classList.add("active");
      // Obtén el id de la sección a mostrar desde el atributo data-section
      const sectionId = link.getAttribute("data-section");
      const targetSection = document.getElementById(sectionId);
      // Muestra la sección correspondiente
      targetSection.classList.add("active");
    });
  });

  const searchInput = document.getElementById("searchInput")
  searchInput.addEventListener("input",function(){
    const query =this.value.toLowerCase();
    // selecciona todos los files-box de todas las secciones
    const fileBoxes = document.querySelectorAll(".files-container .file-box");
    fileBoxes.forEach(box => {
      // obten el texto del file-box de todas las secciones
      const text = box.textContent.toLowerCase();
      console.log("Contenido del box",text);
      if(text.indexOf(query) > -1){
        // si el query  conincide, mostrar el file box
        box.style.display = "flex";
      } else {
        box.style.display = "none";
      }
    })
  })
});