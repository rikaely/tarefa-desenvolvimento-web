function mostrarNumerosImpares() {
   const container = document.createElement('div');
   for (let i = 101; i < 200; i += 2) {
       const numero = document.createElement('p');
       numero.textContent = i;
       container.appendChild(numero);
   }
   document.body.appendChild(container);
}

mostrarNumerosImpares();