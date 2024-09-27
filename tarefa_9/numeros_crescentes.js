function mostrarNumerosCrescentes() {
   const container = document.createElement('div');
   for (let i = 1; i <= 100; i++) {
       const numero = document.createElement('p');
       numero.textContent = i;
       container.appendChild(numero);
   }
   document.body.appendChild(container);
}

mostrarNumerosCrescentes();
