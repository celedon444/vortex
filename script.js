let indiceDiapositiva = 0;
    let diapositivas = document.getElementsByClassName("diapositiva-del-carrusel");
    let temporizador;
        
    function mostrarDiapositivas() {
        for (let i = 0; i < diapositivas.length; i++) {
            diapositivas[i].style.display = "none";  
        }
        indiceDiapositiva++;
        if (indiceDiapositiva > diapositivas.length) {
            indiceDiapositiva = 1;
        }    
        diapositivas[indiceDiapositiva - 1].style.display = "block";  
        temporizador = setTimeout(mostrarDiapositivas, 3000);
        }
        
    function cambiarDiapositiva(n) {
        clearTimeout(temporizador);
        indiceDiapositiva += n - 1;
        if (indiceDiapositiva < 0) {
            indiceDiapositiva = diapositivas.length - 1;
        }
        mostrarDiapositivas();
        }
        
        document.addEventListener("DOMContentLoaded", () => {
        mostrarDiapositivas();
        document.querySelector(".anterior").addEventListener("click", () => cambiarDiapositiva(-1));
        document.querySelector(".siguiente").addEventListener("click", () => cambiarDiapositiva(1));
    });

    function login() {

        let validar_usuario = "vortex@gmail.com";
        let validar_contrasena = "vortex123";
        let usuario = document.getElementById("usuario").value;
        let contrasena = document.getElementById("contrasena").value;


        if (usuario === validar_usuario && contrasena === validar_contrasena) {
            sessionStorage.setItem("usuarioLoguead", "true");
            window.location.href = "index.html"; 
        }
        if(usuario != validar_usuario && contrasena != validar_contrasena){
            alert("Cuenta no existe")
        }
        if( usuario === validar_usuario && contrasena != validar_contrasena){
            alert("Contraseña incorrecta");
        }
        if( contrasena === validar_contrasena && usuario != validar_usuario){
            alert("Cuenta no existe");
        }
    }


    function loguearse(){
        let usuarioLoguead = sessionStorage.getItem("usuarioLoguead");

        if(usuarioLoguead=== "true"){
            alert("Ya has iniciado sesion")

        }else{
            window.location.href = "login.html";
            
        }
}
let cambiarNombre=sessionStorage.getItem("usuarioLoguead");
let parrafoCambiar=document.getElementById("tx");
if(cambiarNombre === "true"){
    parrafoCambiar.textContent = 'Vortex';
    parrafoCambiar.style.color = '#ff750a;'
}

    function buscarSeccion(id) {
    const seccion = document.getElementById(id);

    if (seccion) {
        seccion.scrollIntoView({ behavior: "smooth" });
    } 
    }

const botonesComprar = document.querySelectorAll('.comprar');
const contador = document.getElementById('contadorCarrito');
let cantidad = 0;

botonesComprar.forEach(boton => {
boton.addEventListener('click', () => {
    cantidad++;
    contador.textContent = cantidad;
    console.log(`Carrito actualizado: ${cantidad}`);
    alert("Se agregó al carrito");
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector('.icon-menu');
  const menuResponsive = document.getElementById('menu-responsive');

  if (menuIcon && menuResponsive) {
    menuIcon.addEventListener('click', () => {
      if (menuResponsive.style.display === 'flex') {
        menuResponsive.style.display = 'none';
      } else {
        menuResponsive.style.display = 'flex';
      }
    });
    document.addEventListener('click', (e) => {
      if (!menuResponsive.contains(e.target) && !menuIcon.contains(e.target)) {
        menuResponsive.style.display = 'none';
      }
    });
  }
});



