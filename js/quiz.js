/* Aula 20 MaiaQuiz  */
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "Nos sistemas de Informacao qual das seguintes alternativas em relacao a dados e correcto dizer :",
    alternativaA : "Informacao que possuem significado isoladamente",
    alternativaB : "Representacao do conhecimento contextualizado",
    alternativaC : "Definicao do real sentido das coisas",
    alternativaD : "Correspondencias de um atributo ,caracteristicas ou propriedades que,sozinho,nao tem significado",
    correta      : "Correspondencias de um atributo ,caracteristicas ou propriedades que,sozinho,nao tem significado",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Nos sistemas de Informacao qual das seguintes alternativas em relacao a informacao e  correcto dizer :",
    alternativaA : "Tem o mesmo significado que o dado",
    alternativaB : "Nao tem conexao com geracao de conhecimento",
    alternativaC : "E qualquer dado colectado e mantido por uma pessoa ou organizacao de forma nao contextualizada",
    alternativaD : "E o conjunto de dados presentes num contexto ,carregado de segnificados e entregue a pessoa adequada",
    correta      : "E o conjunto de dados presentes num contexto ,carregado de segnificados e entregue a pessoa adequada",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Uma caixa registadora de supermercado com conexao a uma rede e exemplo de:",
    alternativaA : "Sistemas de gestao de relacionamento com cliente",
    alternativaB : "Sistema especialista",
    alternativaC : "Sistemas de Apaio a decisiao",
    alternativaD : "Sistemas de processamento de transacoes",
    correta      : "Sistemas de processamento de transacoes",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Para garantir que o sistema forneca as informacoes de que os gestores precisam , a construcao de SADSs de sucesso requer:",
    alternativaA : "Mineracao de dados",
    alternativaB : "Processamento abstrato de decisao",
    alternativaC : "co-integracao de dados",
    alternativaD : "Um alto nivel de participacao de utilizador",
    correta      : "Um alto nivel de participacao de utilizador",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "O objectivo central dos sistemas de gestao da cadeia de abastecimento(SCM) e:",
    alternativaA : "alavancagem de cacdeia de suprimentos",
    alternativaB : "Criacao de custos de Mudanca",
    alternativaC : "Benificios de longo alcance",
    alternativaD : "Visibilidade da informcao ",
    correta      : "Benificios de longo alcance",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "O que e arquitectura de Informacao?",
    alternativaA : "Organizar conteudo numa estrutura coerente",
    alternativaB : "Tornar as paginas da web esteticamente agradaveis",
    alternativaC : "Projectar paginas da web com HTML5",
    alternativaD : "Contratar um arquitecto para desenhar uma pagina da web",
    correta      : "Organizar conteudo numa estrutura coerente",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "A informacao do MIS provem de :",
    alternativaA : "Fonte interna",
    alternativaB : "Fonte externa",
    alternativaC : "Ambas as fontes",
    alternativaD : "Nenhuma das fontes",
    correta      : "Ambas as fontes",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "A informacao critica para a gestao de topo e fornecida pelo sistema de informacao:",
    alternativaA : "Especialista",
    alternativaB : "De Apoio ao Executivo",
    alternativaC : "De Apoio a Decisao",
    alternativaD : "De Gestao",
    correta      : "De Apoio ao Executivo",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "A primeira fase do planeamento de TI e chamada de planeamento",
    alternativaA : "Tatico",
    alternativaB : "Do Projecto",
    alternativaC : "Organizacional",
    alternativaD : "Estrategico",
    correta      : "Estrategico",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Na abordagem de estrategia de SI com impacto nos negocios:",
    alternativaA : "A estrategia de Si influencia fortemente a estrategia de negocios",
    alternativaB : "A estrategia de negocios e independente da estrategia de SI",
    alternativaC : "A estrategia de SI e independente da estrategica de negocios",
    alternativaD : "A estretegia de SI e formulada de acordo com os objectivos do negocio",
    correta      : "A estretegia de SI e formulada de acordo com os objectivos do negocio",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}