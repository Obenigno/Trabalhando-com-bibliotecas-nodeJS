import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';

//vetor de argumentos
const caminhoArquivo =  process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try{
        if (erro) throw erro
        contaPalavras(texto);
    }
        catch(erro){
        trataErros(erro);
       console.log(trataErros(erro));
        }
})
