var readline = require('readline-sync');

console.log('Cadastro de laranjas');
let laranjas_db = [];
preencher(laranjas_db)
//console.log(laranjas_db);
//console.log(laranjas_db.length);

/* while(readline.question("Digite 's' para sair ou 'Enter' para continuar ") != "s"){
    laranjas_db.push(
        {
           "Tipo de laranja":readline.question("Digite o tipo da laranja: "),
           quantidade       :readline.questionInt("Quantidade: "),
           precoCompra      :readline.questionFloat("Preco de compra: "),
           precoVenda       :readline.questionFloat("Margem de lucro para preço de venda %: ")
       });
       console.log('\033[2J');
} */
console.log(laranjas_db); 


var result = laranjas_db.reduce(function(totals, v, i, array) {
    if (v["Tipo de laranja"]=="Laranja-pera"){
        totals.push( v.quantidade);
    }
    //totals[i] += array[i].quantidade;
    return totals;
}, []);

console.log(result);

function preencher(laranjas_db) {
    let tipo_laranjas = ["Laranja-pera","Laranja-lima","Laranja-da-terra","Laranja-seleta","Laranja vermelha"];

    for (let i = 0; i < 4; i++) {
        laranjas_db.push({
            "Tipo de laranja":tipo_laranjas[gerarAleatorio(tipo_laranjas.length-1,0)],
            quantidade:gerarAleatorio(500),
            precoCompra:gerarAleatorio(2, 0.10),
            precoVenda:gerarAleatorio(4,0.70)
        });  
    }
}

function gerarAleatorio(max=10,min=1) {
    return  Number.isInteger(max+min)? Math.floor(Math.random() * (max - min + 1)) + min : (Math.random() * (max - min) + min).toFixed(2) ;
}
