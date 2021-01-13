function calculoProjeto(){
    var valorProjeto = document.getElementById("valorProjeto").value;
    console.log(valorProjeto);

    var valorInvestimento = parseInt(document.getElementById("valorInvestimento").value);
    console.log(valorInvestimento);

    var riscoProjeto = document.getElementById("riscoProjeto").value;
    console.log(riscoProjeto);

    var res = document.querySelector("div#res");

    var retornoInvestimento = 0;

    if(valorInvestimento < valorProjeto){
        alert("ERRO! Investimento não pode ser menor que o projeto.");
    }

    if(riscoProjeto == 0){
        retornoInvestimento = valorInvestimento * (5/100);
    }else if(riscoProjeto == 1){
        retornoInvestimento = valorInvestimento * (10/100);
    }else if(riscoProjeto == 2){
        retornoInvestimento = valorInvestimento * (20/100);
    }


    res.innerHTML = `<p>Retorno do investimento será de ${retornoInvestimento},00</p>`;
}