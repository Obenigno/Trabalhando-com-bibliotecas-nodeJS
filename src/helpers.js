

function filtraOcorrencia(paragrafo) {
//pega um onjeto e retorna uma array com todas as chaves/palavras
//filtramos as palavras com filter e para cada chave desse array eu vou acessar o meu objeto na chave da palavra
return Object.keys(paragrafo).filter(chave => paragrafo [chave] > 1
    
)
//vamos ter uma array apenas de palavras e apenas filtradas com o valor maior que 1
}

function montaSaidaArquivo(listaPalavras) {
    //ela vai comecar uma string vazia
    let textoFinal = '';
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencia(paragrafo)
        if (duplicadas.length > 0 ){
            const duplicadasArrays = duplicadas.join(', ');
            textoFinal += `palavras duplicadas no paragrafo ${indice + 1}: ${duplicadasArrays}\n`;
        }
    });
    return textoFinal;


}

export{ montaSaidaArquivo};