function calcularMedia(a, b, c) {
    return (a + b + c) / 3; 
}

function exibirResultado() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const numero3 = parseFloat(document.getElementById("numero3").value);

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert("Por favor, insira valores válidos!");
        return;
    }

    const media = calcularMedia(numero1, numero2, numero3);
    document.getElementById("resultadoMedia").innerText = `A média dos números é: ${media.toFixed(2)}`;
}

document.getElementById("calcularBtn").addEventListener("click", exibirResultado);
