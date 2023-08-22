
listaSalarios = [120.00 , 250, 500, 750, 1000, 1250, 1700, 2450, 2600, 2900]
console.log("Salários originais: ")
console.log(listaSalarios)
 
// Aumenta os salários em porcentagem baseado em seu valor anterior
const aumentarSalario = listaSalarios.map(salario =>{
    if (salario<=2000){
        return salario*1.15
}
    else{
        return salario*1.10
        }
    }    
)
// Log dos salários novos
console.log("Os salários atualizados são: ")
console.log(aumentarSalario.map(salario => salario.toFixed(2)));
 
// Cria um novo array separando os salários atualizados acima de R$2500 
console.log("Os salários acima de R$2500.00 são: ")
const salariosGrandes = aumentarSalario.filter(salario => salario > 2500);
console.log(salariosGrandes.map(salariogrande => salariogrande.toFixed(2))) 

// Soma dos salários total
const salariosTotal = aumentarSalario.reduce((total, salario) => total + salario, 0);
console.log("A soma total dos salários atualizados é: ")
console.log(salariosTotal)


