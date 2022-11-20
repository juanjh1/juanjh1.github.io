// busca el elemento en el documento html
let link = document.querySelectorAll('.close')
//recorre el arreglo de selectores
link.forEach(function(link){
    //crea un evento para cada elemento del arreglo
    link.addEventListener('click', function(evento){
      // quita los elementos por defecto
      evento.preventDefault();
      // busca el elemento en el documento html
      let content = document.querySelector('.centercontent')
     // elimina las clases de las animaciones
      content.classList.remove('animate__fadeInDownBig')
      content.classList.remove('animate__animated')
      //agrega nuevas clases de animaciones
      content.classList.add('animate__fadeOutUp')
      content.classList.add('animate__animated')
     // crea un seteo del tiempo
      setTimeout(function(){
        location.href='../index.html'
      },600)
      
      return false;

    })

})


