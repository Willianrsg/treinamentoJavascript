/*
Desenvolva uma função que recebe dois parâmetros,
um é a quantidade de horas trabalhadas por um funcionario num mes, 
e o quanto ele recebe por hora. O retorno da função 
deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionario
ganhou no mês.
*/

function calculaSalario(horaTrabalhada, valorHora){
    return horaTrabalhada * valorHora
}

console.log('Salário igual a R$ ', calculaSalario(150, 40.5))