/** 
 *  Conversões de tipo:
 * 
 *  Na maioria das vezes, operadores e funções convertem automaticamente os valores dados a eles para o tipo certo.
 * 
 *  Por exemplo, alert() converte automaticamente qualquer valor em uma 'string' para mostrá-lo. As operações matemáticas convertem valores numéricos.
 * 
 * Também há casos em que precisamos converter explicitamente um valor para o tipo esperado.
 * 
 *  NOTA:
 * 
 *      Ainda não estou falando de objetos.
 * 
 *      Neste capítulo, não abordaremos objetos. Por enquanto, falaremos apenas sobre primitivos.
 * 
 *      Mais tarde, depois de aprendermos sobre objetos, no capítulo 'Objeto para conversão primitiva' veremos como os objetos se encaixam.
*/
//
//
//
//
//
//
//
//
/**
 *  Conversão para string:
 * 
 *  A conversão para 'string' acontece quando precisamos da forma de 'string' de um valor.
 * 
 *  Por exemplo, alert() faz isso para mostrar o valor.
 * 
 *  Também podemos chamar a função String() para converter um valor em uma 'string'
 * 
 *  A convenção de 'strings' é mais óbvia.
 */
console.log('==============================================')
console.log('Conversão para string:\n')

    // null(object)
    console.log('\t' + `01 ---- O tipo null(${typeof null}) agora é ${String(null)}(${typeof String(null)})` + '\n')
    // null(string)

//
//
//
//
//
//
//
//
/**
 *  Conversão para número:
 * 
 *  A conversão numérica em funções e expressões matemáticas ocorre automaticamente exceto ao somar strings, pois para somar usamos '+' e entre strings é usado como junção e não calculo.
 */
console.log('==============================================')
console.log('Conversão para número:\n')

    console.log('\t' + '01 ---- ("6" - "3") = ' + ("6" - "3") + '\n')
    console.log('\t' + '02 ---- ("6" / "3") = ' + ("6" / "3") + '\n')
    console.log('\t' + '03 ---- ("6" * "3") = ' + ("6" * "3") + '\n')
    console.log('\t' + '04 ---- ("6" + "3") = ' + ("6" + "3") + ' // Única excessão!!!' + '\n\n\n')

/**
 *  Podemos usar a função Number() para converter para número.
 */ 
    // "123"
    console.log('\t' + `05 ---- O tipo "123"(${typeof '123'}) --------------- agora é ${Number('123')}(${typeof Number('123')})` + '\n') 
    // 123(number)

/**
 *  A conversão explícita geralmente é necessária quando lemos um valor de uma fonte baseada em string, como formulário de texto, mas esperamos que um número seja inserido.
 *  
 *  Se a string não for um número válido, o resultado dessa conversão será 'NaN'.
 */
    // "gabriel"
    console.log('\t' + `06 ---- O tipo "gabriel"(${typeof "gabriel"}) ----------- agora é ${Number("gabriel")}(${typeof Number("gabriel")})` + '\n') 
    // NaN(number)

/**
 *  Regras de conversão numérica:
 */
    // undefined
    console.log('\t' + `07 ---- O tipo undefined(${typeof undefined}) -------- agora é ${Number(undefined)}(${typeof Number(undefined)})` + '\n') 
    // NaN(number)

    // null
    console.log('\t' + `08 ---- O tipo null(${typeof null}) ---------------- agora é ${Number(null)}(${typeof Number(null)})` + '\n') 
    // 0(number)

    // true/false
    console.log('\t' + `09 ---- O tipo (true/false)(${typeof true}/${typeof false}) agora é ${Number(true)}/${Number(false)}(${typeof Number(true)}/${typeof Number(false)})` + '\n') 
    // (1/0)(number/number)

    // ""
    console.log('\t' + `10 ---- O tipo ""(${typeof ''}) ------------------ agora é ${Number('')}(${typeof Number('')})` + '\n') // 0(number)

    // "\n\t" ----- caracteres de escape são removidos ao identificar o tipo
    console.log('\t' + `11 ---- O tipo "\t"(${typeof '\t'}) ---------- agora é ${Number('\t')}(${typeof Number('\t')})` + '\n')
    // 0(number)

    // "\n\t gabriel"
    console.log('\t' + `12 ---- O tipo "\t gabriel"(${typeof '\t gabriel'}) -- agora é ${Number('\t gabriel')}(${typeof Number('\t gabriel')})` + '\n') 
    // NaN(number)

    // "\n\t 123"
    console.log('\t' + `13 ---- O tipo "\t 123"(${typeof '\t 123'}) ------ agora é ${Number('\t 123')}(${typeof Number('\t 123')})` + '\n')
    // 123(number)

/**
 *  Observe que 'null' e 'undefined' se comportam de maneira diferente aqui:
 * 
 *      Number(null) => 0
 * 
 *      Number(undefined) => NaN
 * 
 *  A maioria dos operadores matemáticos também realiza essa conversão
 */
//
//
//
//
//
//
//
//
/**
 *  Conversão boleana:
 * 
 *  A conversão boleana é a mais simples.
 * 
 *  Isso acontece em operações lógicas(mais adiante veremos testes de condição e outras coisas semelhantes), mastambém pode ser executado axplicitamente com uma chamada para Boolean().
 * 
 *  A regra de convenção:
 * 
 *      - Valores que são intuitivamente vazios, como 0, '', null, undefined, e NaN, tornam-se 'false'.
 * 
 *      - Outros valores tornam-se 'true'
 */
console.log('==============================================')
console.log('Conversão para boleano:\n')

    // true
    console.log('\t' + 'Valor diferente de 0: ' + Boolean(1) + '\n')

    console.log('\t' + 'String não vazia: --- ' + Boolean('conteudo') + '\n')

    console.log('\t' + 'String 0: ----------- ' + Boolean('0') + '\n')

    console.log('\t' + 'String com espaços: - ' + Boolean('    ') + '\n')

    // false
    console.log('\t' + 'Número 0: ----------- ' + Boolean(0) + '\n')

    console.log('\t' + 'String vazia: ------- ' + Boolean('') + '\n')

    console.log('\t' + 'undefined: ---------- ' + Boolean(undefined) + '\n')

    console.log('\t' + 'NaN: ---------------- ' + Boolean(NaN) + '\n')

    console.log('\t' + 'null: --------------- ' + Boolean(null) + '\n')

/**
 *  NOTA:
 * 
 *      "0" é 'true'
 *      " " é 'true'
 * 
 *      Algumas linguagens(PHP) tratam "0" como arquivos 'false'. Mas em JavaScript, uma 'string' não vazia é sempre 'true'.
 * 
 *      Espaços dentro de uma 'string' também retorna 'true'
 */
//
//
//
//
//
//
//
//
/**
 *  Resumo:
 * 
 *      As três conversões mais usadas são string, number e boolean.
 * 
 *          String()
 *          String - A conversão para string geralmente é óbvia para valores primitivos.
 * 
 *              String(123) => "123"
 *              String(null) => "null"
 *              String(undefined) => "undefined"
 *              String(true) => "true"
 *              String({name: 'gabriel'}) => [object Object]
 * 
 *          Number()
 *          Number - Ocorre em operações matemáticas
 * 
 *              Number(undefined) => NaN
 *              Number(null) => 0
 *              Number(true/false) => 1/0
 * 
 *              A string é lida como está, espaços em branco(inclui espaços, tabulações '\t', novas linhas '\n' etc.) de ambos os lados são ignorados. Uma string vazia ('') torna-se 0, com ('123') torna-se (123) e 'asd' torna-se (NaN)
 * 
 *              Number('') => 0
 *              Number('123') => 123
 *              Number('asd') => NaN
 * 
 *          Boolean()
 *          Boolean - Ocorre em operações lógicas
 * 
 *              (0, null, undefined, NaN, "") => false
 * 
 *              qualquer outro valor ========> true
 * 
 *      A maioria dessas regras é fácil de entender e memorizær. As excessões notáveis em que as pessoas geralmente cometem erros são:
 * 
 *          Number(undefined) => NaN
 * 
 *          Boolean(" ") => true
 *          Boolean("0") => true
 * 
 *      Objetos não são abordados aqui. Abordaremos conversão de objetos mais á frente.
 */