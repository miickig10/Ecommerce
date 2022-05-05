
function fadeOutEffect(){
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() =>{
      document.querySelector(".fade-out-effect").classList.remove("active")
    },300)
  }


  document.addEventListener(("click"), (e) => {
    if (e.target.classList.contains("navbar_item")) {
      // Me aseguro que event.target antes del default
      if(e.target.hash !== ""){
        // prevengo el default
        e.preventDefault();
        const hash = e.target.hash;

     // Desativo la sección activa
      document.querySelector(".section.active").classList.add("hide");
      document.querySelector(".section.active").classList.remove("active");


      // Activo una nueva sección 

      document.querySelector(hash).classList.add("active");
      document.querySelector(hash).classList.remove("hide");

    } else {

      let navItems = menu.querySelectorAll(".navbar_item");
      navItems.forEach((item) => {
        if(hash === item.hash){
          item.classList.add("active");
        }
      })
      fadeOutEffect();
    }
 }
  window.location.hash = hash;
})();