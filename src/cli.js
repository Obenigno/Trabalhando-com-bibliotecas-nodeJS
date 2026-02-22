import fs from 'fs';
import path from 'path';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';
import chalk, { Chalk } from 'chalk';

const program = new Command();

program
.version('0.0.1')
.option('-t, --texto <String>', 'caminho do texto a ser processado')
.option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
.action((options) =>{
    const { texto, destino } = options

    if(!texto || !destino){
        console.error(chalk.red('erro: favor inserir o caminho de origem e destino certo'))
        program.help();
        return;
    }

    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try{
        processaArquivo(caminhoTexto, caminhoDestino);
        console.log(chalk.green('Texto processado'));
        
    }
    catch (erro){
console.log('ocorreu um erro no processamento', erro);

    }
})
program.parse();

function processaArquivo(texto, destino){
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try{
            if (erro) throw erro
           const resultado = contaPalavras(texto);
           criaESalvaArquivos(resultado, destino)
        }catch(erro){
            trataErros(erro);
           console.log(trataErros(erro));
            }
    })
}

async function criaESalvaArquivos (listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('arquivo criado');
    } catch (erro) {
        throw erro;
    }
}