document.addEventListener('DOMContentLoaded', () => {
   const contactLinks = document.querySelectorAll('.contactInfo .text a');

   contactLinks.forEach(link => {
      link.addEventListener('click', (event) => {
         console.log(`Lien cliqué : ${event.target.href}`);
      });
   });
});

