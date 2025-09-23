// criação de uma pirâmide
const character = "#"; // # -> Caractere usado para construção da pirâmide.
const count = 8; // 8 vai ser o ''tamanho'' da pirâmide.
const rows = [];

    // rowNumber é o número atual da linha [1 até 8].
    // rowCount é o número total de linhas [8].
function padRow (rowNumber, rowCount) { 
    // " ".repeat(rowCount - rowNumber) -> Espaço vazio repete numtotal de linhas - numatual da linha.
    // character.repeat(2 * rowNumber - 1) -> # repete de acordo com a linha atual [ex: Se estiver na linha 4, vai repetir 4 vezes].
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) +  " ".repeat(rowCount - rowNumber);
}

// laço de repetição for.
// contador i começa em UM, enquanto i < count [8] o i vai receber ele mesmo mais 1.
for (let i = 1; i <= count; i++) {
    // rows.push(padRow(i + 1, count)) -> a cada rodada, a função é inicializada, retornando para o rows um valor diferente.
    // padRow(i, count) -> o padRow dentro do laço faz com que a function funcione de acordo com o resultado gerado, por exemplo, quando o i estiver em 4, a function vai ser padRow(4, 8).
    rows.push(padRow(i, count));
}

// variável result é declarada como string vazia.
let result = "";
 
// laço for..of 
for (const row of rows) {
    // enquanto a const row percorre o array rows... A variável result passa a receber result + row + "\n" (quebra de linha).
    // nessa parte o array rows já está totalmente preenchido com os 8 resultados do laço for.
    result += row + "\n";
}
// imprime o resultado.
console.log(result);

 
/* resultado atual:
       #       
      ###      
     #####     
    #######    
   #########   
  ###########  
 ############# 
############### */