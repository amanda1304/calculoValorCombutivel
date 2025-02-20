/* Faça um programa para calcular o valor de uma viagem
 Você terá 3 variáveis. Sendo elas:
 1- Preço do combustível;
 2- Gasto médio de combustível do carro por KM;
 3- Distância em KM da Viagem;
 Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/
const precoCombustivel = 6.37, kmLitro = 13, distanciaViagem = 330;
const valorGasto = (distanciaViagem/kmLitro) * precoCombustivel;
 console.log('Valor gasto de combustível é: R$'+ valorGasto.toFixed(2));

 