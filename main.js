
    const $days = document.getElementById('days'),
    $hours = document.getElementById('hours'),
    $minutes = document.getElementById('minutes'),
    $seconds = document.getElementById('seconds'),
    $finalMessage = document.querySelector('.final-sms');
    let boton = document.querySelector("#btn")

    boton.addEventListener("click", () => {

        Swal.fire({
          title: '<strong>VER LA UBICACION <u></u></strong>',
          icon: 'success',
          html:
            'INGRESA' +
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.5907893645062!2d-58.81571198543341!3d-34.63977998045015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc941338df622b%3A0xdba6b2bc21820454!2sLa%20Piedad%201450%2C%20B1738GTD%20La%20Reja%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1675255606944!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
            'Podes ampliar en mapa',
            
            
        })
      });


   
    //Fecha a futuro
const countdownDate = new Date('May 6 2023 18:43:30 GMT-0300').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    //Cuando llegue a 0
    if(distance < 0){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
    }
}, 1000);