function converterRealParaDolar(valorEmReais) {
   const taxaDeCambio = 5; // 1 dólar = 5 reais
   const valorEmDolares = valorEmReais / taxaDeCambio;
   return valorEmDolares;
}

// Exemplo de uso da função
const valorEmReais = 50; // Você pode alterar este valor para testar
const valorConvertido = converterRealParaDolar(valorEmReais);
console.log(`R$${valorEmReais} equivalem a $${valorConvertido.toFixed(2)} dólares.`);