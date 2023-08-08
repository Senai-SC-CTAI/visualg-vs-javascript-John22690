function mostrar() {
    let nome= document.getElementById("nome").value;
    let idade= Number(document.getElementById("idade").value);
    
    document.getElementById("resposta").innerHTML = "Seu nome é: "+ nome+ ". E sua idade é: "+ idade
}