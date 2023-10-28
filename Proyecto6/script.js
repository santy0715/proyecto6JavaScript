const marcoPuntaje = document.querySelector('.puntaje');
let puntajeActual = 0;
const puntajeLimite = 5; 

const html = Array.from(Array(puntajeLimite)).map((item, i) =>{ 
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
}); 
marcoPuntaje.innerHTML = html.join('');


document.querySelectorAll(".item").forEach(item =>{
    item.addEventListener("mouseover", (e) =>{
         //console.log("Funciona");
         const posicion = item.getAttribute("data-pos");

         if (puntajeActual === parseInt(posicion) +1) {
            return;
         }

         document.querySelectorAll(".item").forEach(cuadroGris =>{
            if(cuadroGris.classList.contains("selec")){
                cuadroGris.classList.remove("selec");
            }
         });

         for(let i = 0; i <= posicion; i++){
            const cuadro = document.querySelector(`.item-${i}`);
            if(!cuadro.classList.contains("selec")){
                cuadro.classList.add("selec");
            }
         }
         puntajeActual = parseInt(posicion) + 1;
        });
        item.addEventListener("click", (e) => {
            const posicion = item.getAttribute("data-pos");
            puntajeActual = parseInt(posicion) + 1;
            console.log(puntajeActual); 
        });
    });
    