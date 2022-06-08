function calculadora() {
    const operacao = Number(prompt('Escolha uma operação: \n 1-Soma[+]\n 2-Subtração [-]\n 3-Multiplicação [*]\n 4-Divisão [/]\n 5-Potenciação [**]'));

    if (!operacao || operacao > 6) {
        alert('Erro - Operação inválida');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos')
            calculadora()
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1}+${n2}=${resultado}`);
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1}-${n2}=${resultado}`);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1}*${n2}=${resultado}`);
                novaOperacao();
            }

            function divisao() {
                resultado = n1 / n2;
                alert(`${n1}/${n2}=${resultado}`);
                novaOperacao();
            }

            function potencia() {
                resultado = n1 ** n2;
                alert(`${n1}**${n2}=${resultado}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação? \n 1-Sim \n 2-Não');
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais')
                } else {
                    alert('Digite uma opção válida')
                    novaOperacao();
                }
            }
        }



        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisao();
        } else if (operacao == 5) {
            potencia();
        }
    }


}
calculadora();