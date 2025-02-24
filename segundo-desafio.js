/*Faça um programa para calcular o valor de uma viagem.
Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância de KM da viagem;
Imprima no console o valor que será gasto para realizar está viagem.
*/
let etanol = 4.13, gasolina = 6.37, tipoCombustivel = "etanol", kmLitro = 13, distanciaViagem = 336, valorGasto
if(tipoCombustivel === "gasolina"){
   valorGasto = (distanciaViagem/kmLitro) * gasolina
}
else{
    valorGasto = (distanciaViagem/kmLitro) * etanol
}
console.log("Valor gasto para realizar a viagem é: R$" + valorGasto.toFixed(2))