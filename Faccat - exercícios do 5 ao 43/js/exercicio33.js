let maca,morango,valor_pago1,valor_pago2;

morango = parseFloat(prompt("Quantos Kg de morango você vai comprar: "))
maca = parseFloat(prompt("Quantos Kg de maçã você vai comprar: "))

if (morango>5){
    valor_pago1 = morango * 2.20;
}else{
    valor_pago1 = morango * 2.50;
}
alert("R$"+valor_pago1+" em morango.")

if (maca>5){
    valor_pago2 = maca*1.50;
}else{
    valor_pago2 = maca * 1.80;
}
alert("R$"+valor_pago2+" em maçã.")

let total_valor = valor_pago1+valor_pago2;
let total_quilo = maca+morango;
let valor_desconto = total_valor-(10/100*total_valor);

if (total_quilo>=8 || total_valor>=25){

    alert("Você pagará com desconto! Total da compra é de R$"+total_valor+" para R$"+valor_desconto)
}else{
    alert("Total da compra é de: R$"+total_valor)
}