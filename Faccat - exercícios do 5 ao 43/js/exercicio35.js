let nome_produto, quantidade, valor, desconto,total;

nome_produto = prompt("Digite o nome do produto: ")
quantidade = parseInt(prompt("Quantidade de "+nome_produto+" adquirida: "))
valor = parseFloat(prompt("Valor unitário do "+nome_produto+":"))

total = quantidade*valor

if (quantidade <= 5){
    desconto = total-(2/100*total);
    alert("Parabéns! Você ganhou 2% de desconto nessa compra de R$"+total+" você pagará R$"+desconto+" em " +nome_produto)

}else if(quantidade>5 && quantidade<=10){
    desconto = total-(3/100*total);
    alert("Parabéns! Você ganhou 3% de desconto nessa compra de R$"+total+" você pagará R$"+desconto+" em " +nome_produto)

}else if(quantidade>10){
    desconto = total-(5/100*total);
    alert("Parabéns! Você ganhou 5% de desconto nessa compra de R$"+total+" você pagará R$"+desconto+" em " +nome_produto)
}
