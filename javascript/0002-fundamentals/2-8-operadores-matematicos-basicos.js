/**
 *  Operadores matemáticos, básicos
 *
 *  Conhecemos muitos operadores da escola. São coisas como adição(+), multiplicação(*), subtração(-) e assim por diante.
 *
 *  Neste capítulo, começamos com operadores simples e, em seguida, nos concentraremos nos aspectos específicos do JavaScript, não cobertos pela aritmética escolar.
 */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
 *
 *   Termos: "unário", "binário" e "operando"
 *
 *       Antes de prosseguirmos, vamos entender alguma terminologia comum.
 *
 *           - Um operando é onde os operadores são aplicados. Por exemplo, na multiplicação de (5 * 2) existem dois operandos: o da esquerda é 5 e o da direita é 2. Às vezes, as pessoas chamam esses "argumentos" em vez de "operandos".
 *
 *           - Um operador é unário se tiver um único operando. Por exemplo, a negação unária (-) inverte o sinal de um número:
 */
console.log("=============================================");
console.log("Como inverter o valor de um operador unário:\n");

    let x = 1;
    let y = -2;

    console.log("\t" + 'x = +1')
    console.log("\t" + 'y = -1' + '\n')

    console.log("\t" + '-x = ' + -x); // -1 ===> Inverte o valor de x
    console.log("\t" + '-y = ' + -y); // +2 ===> Inverte o valor de y

console.log("\n=============================================");
/**
 *  Um operador é binário se tiver dois operandos. O mesmo sinal de menos também existe na forma binária e é usado para subtrair:
 */
console.log(
    "Como inverter o valor de um operador unário dentro de um operador binário:\n"
);
    console.log("\t" + 'x = +1')
    console.log("\t" + 'y = -1' + '\n')

    console.log("\t" + '(+x -y) = ' + (x - y));  // 3 ===> Subtrai o valor de y de x
    console.log("\t" + '(-x -y) = ' + (x - -y)); // -1 ===> Subtrai o valor inverso de y de x

console.log("\n=============================================");
/**
 *   Formalmente, nos exemplos acima temos dois operadores diferentes que compartilham o mesmo símbolo: o operador de negação, um operador unário que inverte o sinal, e o operador de subtração, um operador binário que subtrai um numero do outro
 */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
 *  Operações matemáticas suportadas:
 *
 *      - Adição (+)
 *
 *      - Subtração (-)
 *
 *      - Multiplicação (*)
 *
 *      - Divisão (/)
 *
 *      - Restante (%)
 *
 *      - Exponenciação (**)
 *
 *      Os quatro primeiros são diretos, enquanto '%' e '**' precisam de algumas palavras sobre eles.
 */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
 *  Resto (%)
 *
 *      O operador de resto(%), apesar de sua aparência, não está relacionado a porcentagens.
 *
 *      O resultado de (a % b) é o resto da divisão inteira de "a" por "b"
 */
console.log("Resto da divisão:\n");

    console.log('\t' + 'Dividendo Positivo' + '\n')

    console.log("\t" + '(5 % 2) = ' +  (5 % 2)); // 1 
    console.log("\t" + '(8 % 3) = ' +  (8 % 3)); // 2 
    console.log("\t" + '(8 % 4) = ' +  (8 % 4)); // 0
    
    console.log("\n");
    console.log('\t' + 'Dividendo Negativo' + '\n')

    console.log("\t" + '(-5 % 2) = ' +  (-5 % 2)); // -1 
    console.log("\t" + '(-8 % 3) = ' +  (-8 % 3)); // -2
    console.log("\t" + '(-8 % 4) = ' +  (-8 % 4)); //  0

console.log("\n=============================================");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
 *  Exponenciação (**)
 * 
 *      O operador de exponenciação (a ** b) eleva "a" à potência "b".
 */
console.log("Exponenciação:\n");

    console.log('\t' + '(2 ** 2) = ' +(2 ** 2)) // 2² = 4
    console.log('\t' + '(2 ** 3) = ' +(2 ** 3)) // 2³ = 8
    console.log('\t' + '(2 ** 4) = ' +(2 ** 4)) // 2⁴ = 16

console.log("\n=============================================");
/**
 *  Assim como na matemática, o operador de exponenciação também é definido para números não inteiros.
 * 
 *  Por exemplo, uma raiz-quadrada é uma exponenciação por (1/2)
 */
console.log("Radiciação:\n");

    console.log('\t' + '(4    ** (1/2)) = ' + (4    ** (1/2))) // raiz quadrada x elevado á (1/2)
    console.log('\t' + '(27   ** (1/3)) = ' + (27   ** (1/3))) // raiz cúbica   x elevado á (1/3)
    console.log('\t' + '(256  ** (1/4)) = ' + (256  ** (1/4))) // raiz quarta   x elevado á (1/4)
    console.log('\t' + '(3125 ** (1/5)) = ' + (3125 ** (1/5))) // raiz quinta   x elevado á (1/5)

console.log("\n=============================================");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
 *  Concatenação de strings com binário (+):
 * 
 *      Vamos conhecer os recursos dos operadores JavaScript que estão além da aritmética escolar.
 * 
 *      Normalmente, o operador mais(+) soma números.
 * 
 *      Mas, se o binário(+) for aplicado a strings, ele as mescla(concatena):
 */
console.log("Concatenação de strings com binário(+):\n");

    console.log('\t' + '("gab" + "riel") = ' + `"${('gab' + 'riel')}"`) // "gabriel"
    console.log('\t' + '("gab" +   55  ) = ' + `"${('gab' +   55  )}"`) // "gab55"
    console.log('\n')
/**
 *  Observe que, se algum dos operandos for uma string, o outro também será convertido em uma string.
 */
    console.log('\t' + '("1" + 2 ) = ' + `"${("1" + 2)}"`) // "12"
    console.log('\t' + '( 2 + "1") = ' + `"${( 2 + "1")}"`) // "21"
/**
 *  Veja, não importa se o primeiro operando é uma string ou o segundo
 */
    console.log('\t' + '( 2 + 2 + "1") = ' + `"${(2 + 2 + "1")}"`) // (2 + 2)  ==  4 + "1" = "41"
    console.log('\t' + '("1" + 2 + 2) = ' + `"${("1" + 2 + 2)}"`) // ("1" + 2) == "12" + 2 = "122"

console.log("\n=============================================");
/**
 *  O binário(+) é o único operando que suporta strings dessa maneira. Outros operadores aritméticos trabalham apenas com números e sempre convertem seus operandos em números.
 */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
 *  Conversão numérica, unário(+)
 * 
 *      O "mais unário(+)" existe em duas formas: a forma binária que usamos acima e a forma unária.
 * 
 *      O "mais unário" ou, em outras palavras, o operador (+) aplicado a um único valor, não faz nada com os números. Mas se o operando não for um número, o "mais unário(+)" o converte em um número. 
 */
console.log("Conversão numérica, unário(+):\n");

    // Não afeta números

        console.log('\t' + `let x = ${x}`)
        console.log('\t' + `let y = ${y}` + '\n')

        console.log('\t' + `+x = ${+x}`) // 1
        console.log('\t' + `+y = ${+y}` + '\n') // -2

    // Converte não-números

        console.log('\t' + `+true = ${+true}`) // 1
        console.log('\t' + `+"+123" = ${+"+123"}`) // 123
        console.log('\n')
        console.log('\t' + `+" " = ${+" "}`) // 0
        console.log('\t' + `+"" = ${+""}`) // 0
        console.log('\t' + `+"gabriel" = ${+"gabriel"}`) // NaN
        console.log('\t' + `+undefined = ${+undefined}`) // NaN
        console.log('\t' + `+null = ${+null}` + '\n') // 0
/**
 *      Na verdade, faz a mesma coisa que Number(), mas é mais curto.
 * 
 *      A necessidade de converter strings em números surge com muta frequência. Por exemplo, se estivermos obtendo valores de compos de formulário HTML, eles deralmente são strings. Ese quisermos somar?
 * 
 *      O "mais binário(+)" os adiciona como strings:
 */
        let apple = "2"
        let orange = "3"

        console.log('\t\t' + `let apple = "2"`)
        console.log('\t\t' + `let orange = "3"` + '\n')

        console.log('\t\t' + `apple + orange = "${apple + orange}"` + '\n') // "23"
/**
 *      Se quisermos tratá-los como números, precisamos convertê-los e depois somá-los:
 */
        console.log('\t\t' + `+apple + +orange = ${+apple + +orange}`) // 5
        console.log('\t\t' + `Nuber(apple) + Number(orange) = ${Number(apple) + Number(orange)}`) // 5

console.log("\n=============================================");
/**
 *      Do ponto de vista de um matemático, a abundãncia de vantangens pode parecer estranha. Mas do ponto de vista de um programador, não há nada de especial: os sinais de adição unários são aplicados primeiro, eles convertem strings em números e em seguida, o sinal de adição binário os soma.
 * 
 *      Por que as vantagens unárias são aplicadas aos valores antes dos binários?
 * 
 *      Como veremos, isso ocorre por causa de sua maior precedência.
 */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
 *  OPERADOR PRECEDENTE:
 * 
 *      Se uma expressão possui mais de um operador, a ordem de execução é definida pela precedencia deles, ou seja, a ordem de prioridade padrão dos operadores.
 * 
 *      Desde a escola, todos sabemos que a multiplicação na expressão (1 + 2 * 2) deve ser calculada antes da adição. Essa é exatamente a coisa de precedência. Diz-se que a multiplicação tem precedência maior do que a da adição.
 * 
 *      Os parênteses substituem qualquer precedência, portanto, se não estivermos satisfeitos com a ordem padrão, podemos usá-los para alterá-la. Por exemplo, ((1 + 2) * 2).
 * 
 *      Existem muitos operadores em JavaScript. Cada operador tem um número de precedência correspondente. Aquele com maior número executa primeiro. Se a precedência for a mesma, a ordem de execução é da esquerda para a direita.
 * 
 *      Aque está um extrato da tabela de precedência(você não precisa se lembrar disso, mas observe que os operadores unários são mais altos que os binários correspondentes):
 * 
 *      Precedência	  Nome	           Sinal
        …	          …	               …
        14	          mais unário	   +
        14	          negação unária   -
        13	          exponenciação	   **
        12	          multiplicação	   *
        12	          divisão	       /
        11	          Adição	       +
        11	          subtração	       -
        …	          …	               …
        2	          atribuição	   =
        …	          …	               …
 */
/**
    Como podemos ver, o "mais unário(+)" tem a prioridade 14 que é maior que 11 de "mais binário(+)". É por isso que, na expressão "+apples + +oranges", os sinais de "mais unário(+)" funcionam antes da adição.
 */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
    ATRIBUIÇÃO:

        Observemos que uma atribuição(=) também é um operador. Ele está listado na tabela de precedência com a prioridade muito baixa, sendo 2.

        É por isso que, quando atribuimosuma variável, como "x = 2 * 2 + 1", os cálculos são feitos primeiro e depois (=) é avaliada, armazenando o resultado em "x".
 */
console.log('Atribuição' + '\n')

    let k = 2 * 2 + 1

    console.log('\t' + `let k = 2 * 2 + 1`)
    console.log('\t' + `let k = 5` + '\n')
/**
        Atribuição(=) retorna um valor

            O fato de (=) ser um operador, e não uma construção "mágica" da linguagem tem um implicação interessante.

            Todos os operadores em JavaScript retornam um valor. Isso é óbvio para (+) e (-), mas também verdadeiro para (=).

            A chamada (x = value) grava o "value" em "x" e, em seguida, o retorna.

            Aqui está uma demonstração que usa uma atribuição como parte de uma expressão mais complexa:
 */
        let a = 1
        let b = 2
        let c = 3 - (a = b + 1)

        console.log('\t\t' + `let a = 1`)
        console.log('\t\t' + `let b = 2` + '\n')

        console.log('\t\t' + `let c = 3 - (a = b + 1)`)
        console.log('\t\t' + `let c = 3 - (a = 3)`)
        console.log('\t\t' + `let c = 3 - (3)`)
        console.log('\t\t' + `let c = 3 - 3`)
        console.log('\t\t' + `let c = 0`)

        console.log('\t\t' + `a = 3` + '\n')

/*
            No exemplo acima, o resultado da expressão (a = b + 1) é o valor ao qual foi atribuído "a"(ou seja 3). Em seguida, é usado para avaliações adicionais.

            Código engraçado, não é? Devemos entender como funciona, porque às vezes o veremos em bibliotecas JavaScript.

            Embora, por favor, não escreva o código assim. Esses truques definitivamente não tornam o código mais claro ou legível.

        Encadeamento de atribuições:

            Outro recurso interessante é a capacidade de encadear atribuições:

                let a, b, c;

                a = b = c = 2 + 2;
                a = b = c = 4;
                a = b = 4;
                a = 4;

                alert( a ); // 4
                alert( b ); // 4
                alert( c ); // 4

            Atribuições encadeadas são avaliadas da direita para a esquerda. Primeiro, a expressão mais à direita (2 + 2) é avaliada e depois atribuída às variáveis à esquerda: 'c', 'b' e 'a'. No final, todas as variáveis compartilham um único valor.

            Mais uma vez, para fins de legibilidade, é melhor dividir esse código em poucas linhas:

                let a, b, c;

                c = 2 + 2
                b = c
                a = c

            Isso é mais fácil de ler, especialmente ao escanear o código rapidamente.
*/