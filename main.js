// Validación simple del formulario
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('¡Mensaje enviado! Pronto me contactaré contigo.');
    form.reset();
  });
}
<> <link rel="stylesheet" href="css/style.css" /><script src="js/main.js"></script></>