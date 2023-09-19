function calculator() {
    let operation = prompt("Digite qual opeção deseja realizar: \n" + "Digite: somar, subtrair, multiplicar ou dividir")
    let number1 = parseFloat(prompt("Digite o primeiro número:"))
    let number2 = parseFloat(prompt("Digite o segundo número:"))
    let result

    switch(operation) {
        case "somar":
            result = number1 + number2
            break
        case "subtrair":
            result = number1 - number2
            break
        case "multiplicar":
            result = number1 * number2
            break
        case "dividir":
            result = number1 / number2
            break
        default:
            result = "Tipo de operação inválida!"
    }
    
    alert("resultado: " + result)
}    
