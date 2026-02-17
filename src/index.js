const { log } = require('console');
const fs = require('fs');

//vetor de argumentos
const caminhoArquivo =  process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try{
        if (erro) throw erro
        contaPalavras(texto);
    }
    catch(erro){
        if(erro.code === 'ENOENT') console.log('Erro esperado');
            else console.log('outro erro');
        }
})

function contaPalavras(texto){
    const paragrafos = extraiParagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo)=> {
        if(!paragrafo)
        return[];
        return verificaPalavrasDigitadas(paragrafo);
    })
    console.log(contagem);
}

function extraiParagrafos(texto){
return texto.toLowerCase().split('\n');
}

function limpapalavras(palavra){
return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}


function verificaPalavrasDigitadas (texto){
    const listaPalavras = texto.split(' ');
    const resultado= {};
    listaPalavras.forEach(palavra =>{
        if(palavra.length >= 3){
            const palavraLimpa = limpapalavras(palavra);
    resultado[palavraLimpa] = (resultado[palavraLimpa]|| 0 ) + 1
        }})
    return resultado;
}