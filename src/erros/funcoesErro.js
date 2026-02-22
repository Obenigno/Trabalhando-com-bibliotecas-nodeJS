import chalk, { Chalk } from "chalk";

export default function trataErros(erro){
    if(erro.code === 'ENOENT') {
        return (chalk.red('Arquivo nao encontrado'));
    } else{
        return 'erro na aplicação';
    }
}
