
    document.getElementById('btn-modal-js').addEventListener('click', function () {
      UIKit.modal({
        title: 'Modal desde JavaScript',
        content: '<p>Puedes poner cualquier HTML aquí: listas, imágenes, formularios, etc.</p>',
        onClose: function () {
          console.log('El modal se cerró');
        }
      });
    });


    document.getElementById('btn-modal-js2').addEventListener('click', function () {
      UIKit.modal({
        title: 'Modal desde JavaScript ok ',
        content: '<p>Puedes jsjjs.</p>',
        onClose: function () {
          console.log('El modal se cerró');
        }
      });
    });


    
UIKit.carousel('#miCarrusel', {
    images: [
      'img/frutas1.png',
      'img/frutas2.png',
      'img/frutas3.png'
    ],
    interval: 4000 
  });