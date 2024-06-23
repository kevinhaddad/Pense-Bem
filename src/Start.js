import './App.css';
import Globais from './Globais';
// Variavel "programa" é para armazenar o número do programa que o usuario escolher
// Variavel "num" armazena o número da pergunta
// Variavel "tentativa" serve para indicar se o usuario está na tentativa 1, 2 ou 3 de resposta
// Variavel "pontos" serve para armazenar qual a pontuação do jogador
// Variavel "gabarito" serve para copiar o gabarito correspondente ao programa que for escolhido pelo jogador. Vamos criar uma função só para o jogo para a var gabarito. 

// var programa, num, tentativa, pontos
// var gabarito = new Array(5) //vai ter um array de 30 posições aqui para o trabalho
// var gabarito021 = new Array('B', 'A', 'A', 'D', 'C') 
// var gabarito022 = new Array('B', 'D', 'A', 'A', 'D')
// var gabarito023 = new Array('B', 'D', 'A', 'A', 'D')
// var gabarito024 = new Array('B', 'D', 'A', 'A', 'D')
// var gabarito025 = new Array('B', 'D', 'A', 'A', 'D')
// var gabarito026 = new Array('B', 'D', 'A', 'A', 'D')

function Start(){
    const iniciar = () => { //arrow function dentro da função start para iniciar o programa
        document.getElementById('visor1').style.border = '0' //tira a borda do visor depois da primeira rodada ou quando reset o jogo.
        Globais.programa = prompt("Digite o número do Programa (021 a 026)", "")

        if(Globais.programa == "021")
            Globais.gabarito = Globais.gabarito021
        else if (Globais.programa == "022")
        Globais.gabarito = Globais.gabarito022 //continuar essa lógica para ter todos os gabaritos. Cada livro tem geralmente 6 programas
        else if (Globais.programa == "023")
        Globais.gabarito = Globais.gabarito023 //continuar essa lógica para ter todos os gabaritos. Cada livro tem geralmente 6 programas
        else if (Globais.programa == "024")
        Globais.gabarito = Globais.gabarito024 //continuar essa lógica para ter todos os gabaritos. Cada livro tem geralmente 6 programas
        else if (Globais.programa == "025")
        Globais.gabarito = Globais.gabarito025 //continuar essa lógica para ter todos os gabaritos. Cada livro tem geralmente 6 programas
        else if (Globais.programa == "026")
        Globais.gabarito = Globais.gabarito026 //continuar essa lógica para ter todos os gabaritos. Cada livro tem geralmente 6 programas
        else{
            alert("Número de programa inválido!\nDigite um número entre 021 e 026")
            iniciar()
        }
        Globais.pontos = 0 // pontuação do jogo inicia zerada
        Globais.num = 1 // pergunta começa em 1
        Globais.tentativa = 1 //tentativa começa em 1
        
        //Colocando as informações no visor

        // document.getElementById('visor1').value = `${Globais.programa} -> ${Globais.num}:` 
        // document.getElementById('visor2').value = `Tentativa ${Globais.tentativa} de 3` 

    }


    return(
        <input type="button" id="botaoStart" value="Start/Reset Jogo" onClick={iniciar} /> //Aqui é criado o botao Start que vai ser chamado no App.js

    )
}

// Para exportar essa função de maneira que possa ser utilizada em outros arquivos .js
export default Start