// window.onload = function () {
    let $imagenes = document.querySelectorAll('li');
    let contador = 0;
    let intervalo = null;
    let $elements_list=document.querySelectorAll('.circle_element');

    function iniciarSlider() {
        $imagenes.forEach((img) => {
            img.classList.remove("active");
        });
        $elements_list.forEach((li)=>{
           li.classList.remove('active');

        });

        $elements_list[contador].classList.add('active');
        $imagenes[contador].classList.add("active");

        intervalo = setInterval(() => {
            $imagenes[contador].classList.remove("active");
            $elements_list[contador].classList.remove('active');

            contador = (contador + 1) % $imagenes.length;
            $imagenes[contador].classList.add("active");
            $elements_list[contador].classList.add('active');

        }, 5000);
    }

    iniciarSlider();

    let $contenedorArrowSection = document.querySelector('.arrow_section');
    let $contenedorArrow = $contenedorArrowSection.querySelector('.arrows');
    let $enlaces = $contenedorArrow.querySelectorAll('a');

    $enlaces[0].addEventListener('click', () => {
        clearInterval(intervalo);
        $imagenes[contador].classList.remove("active");
        $elements_list[contador].classList.remove('active');
        contador = (contador - 1 + $imagenes.length) % $imagenes.length;
        $imagenes[contador].classList.add("active");
        $elements_list[contador].classList.add('active');
        iniciarSlider();
    });

    $enlaces[1].addEventListener('click', () => {
        clearInterval(intervalo);
        $imagenes[contador].classList.remove("active");
        $elements_list[contador].classList.remove('active');
        contador = (contador + 1) % $imagenes.length;
        $imagenes[contador].classList.add('active');
        $imagenes[contador].classList.add("active");
        iniciarSlider();
     });


let currentIndex = 0;
const $carouselContainer = document.querySelector(".carousel_container");
const $carouselElements = document.querySelectorAll(".carousel_element");

// function moveToNext() {
//     currentIndex++;
//     $carouselContainer.style.transition = "transform 0.5s ease-in-out";
//     $carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//
//     // Si llegamos al último elemento
//     if (currentIndex === $carouselElements.length - 1) {
//         // Espera el tiempo de transición para reiniciar el carrusel
//         setTimeout(() => {
//             $carouselContainer.style.transition = "none";
//             $carouselContainer.appendChild($carouselElements[0]);
//             $carouselContainer.style.transform = "translateX(0)";
//             currentIndex = 0;
//
//             // Forzar un reflow para que la transición vuelva a aplicarse correctamente
//             $carouselContainer.offsetHeight; // No hace nada visible, pero es necesario para que el DOM se refresque
//
//             $carouselContainer.style.transition = "transform 0.5s ease-in-out";
//         }, 500); // El tiempo aquí debe coincidir con la duración de la transición
//     }
// }
//
// setInterval(moveToNext, 2000);



