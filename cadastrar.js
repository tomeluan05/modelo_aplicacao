function calculoProjeto(){
    var nomeProjeto = document.getElementById("nomeProjeto").value;
    console.log(nomeProjeto);
    var dataInicio = document.getElementById("dataInicio").value;
    console.log(dataInicio);
    var dataTermino = document.getElementById("dataTermino").value;
    console.log(dataTermino);
    var valorProjeto = document.getElementById("valorProjeto").value;
    console.log(valorProjeto);
    var riscoProjeto = document.getElementById("riscoProjeto").value;
    console.log(riscoProjeto);
    var participantesProjeto = document.getElementById("participantesProjeto").value;
    console.log(participantesProjeto);

    var res = document.querySelector("div#res");

    if(riscoProjeto == 0){
        riscoProjeto = valorProjeto * (5/100);
    }else if(riscoProjeto == 1){
        riscoProjeto = valorProjeto * (10/100);
    }else if(riscoProjeto == 2){
        riscoProjeto = valorProjeto * (20/100);
    }

    if(nomeProjeto == " " || dataInicio == " " || dataTermino == " " || valorProjeto == " " || riscoProjeto == " " || participantesProjeto == " "){
        alert("Verifique se todos os campos estão preenchidos!");
    }else{
        res.innerHTML += `<h2>Cadastro realizado com sucesso</h2>`;
        res.innerHTML += `<p>Nome do projeto: ${nomeProjeto}</p>`;
        res.innerHTML += `<p>Data de início: ${dataInicio}</p>`;
        res.innerHTML += `<p>Data do término: ${dataTermino}</p>`;
        res.innerHTML += `<p>Valor do projeto: ${valorProjeto}</p>`;
        res.innerHTML += `<p>Risco do investimento será de ${riscoProjeto}</p>`;
        res.innerHTML += `<p>Participantes do projeto: ${participantesProjeto}</p>`;
    }
      
}