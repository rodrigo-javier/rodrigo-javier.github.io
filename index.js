
const boton = document.querySelector("#boton");

boton.addEventListener("click",function(){Swal.fire({
    title: 'Mi Curriculum Vitae.',
    width: 600,
    padding: '3em',
    color: '#fff',
    background: '#fff url(./img/fondo claro.jpg)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://media.tenor.com/-AyTtMgs2mMAAAAj/nyan-cat-nyan.gif")
      left top
      no-repeat
      `
  })});


const diaNoche = document.querySelector("#diaNoche");
diaNoche.addEventListener("click", function(){
    setTimeout( function() { location.href = "./indexclaro.html"; }, 5000 );
});
