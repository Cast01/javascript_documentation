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

console.log("\t" + "x = +1");
console.log("\t" + "y = -1" + "\n");

console.log("\t" + "-x = " + -x); // -1 ===> Inverte o valor de x
console.log("\t" + "-y = " + -y); // +2 ===> Inverte o valor de y

console.log("\n=============================================");
/**
 *  Um operador é binário se tiver dois operandos. O mesmo sinal de menos também existe na forma binária e é usado para subtrair:
 */
console.log(
    "Como inverter o valor de um operador unário dentro de um operador binário:\n"
);
console.log("\t" + "x = +1");
console.log("\t" + "y = -1" + "\n");

console.log("\t" + "(+x -y) = " + (x - y)); // 3 ===> Subtrai o valor de y de x
console.log("\t" + "(-x -y) = " + (x - -y)); // -1 ===> Subtrai o valor inverso de y de x

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

console.log("\t" + "Dividendo Positivo" + "\n");

console.log("\t" + "(5 % 2) = " + (5 % 2)); // 1
console.log("\t" + "(8 % 3) = " + (8 % 3)); // 2
console.log("\t" + "(8 % 4) = " + (8 % 4)); // 0

console.log("\n");
console.log("\t" + "Dividendo Negativo" + "\n");

console.log("\t" + "(-5 % 2) = " + (-5 % 2)); // -1
console.log("\t" + "(-8 % 3) = " + (-8 % 3)); // -2
console.log("\t" + "(-8 % 4) = " + (-8 % 4)); //  0

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

console.log("\t" + "(2 ** 2) = " + 2 ** 2); // 2² = 4
console.log("\t" + "(2 ** 3) = " + 2 ** 3); // 2³ = 8
console.log("\t" + "(2 ** 4) = " + 2 ** 4); // 2⁴ = 16

console.log("\n=============================================");
/**
 *  Assim como na matemática, o operador de exponenciação também é definido para números não inteiros.
 *
 *  Por exemplo, uma raiz-quadrada é uma exponenciação por (1/2)
 */
console.log("Radiciação:\n");

console.log("\t" + "(4    ** (1/2)) = " + 4 ** (1 / 2)); // raiz quadrada x elevado á (1/2)
console.log("\t" + "(27   ** (1/3)) = " + 27 ** (1 / 3)); // raiz cúbica   x elevado á (1/3)
console.log("\t" + "(256  ** (1/4)) = " + 256 ** (1 / 4)); // raiz quarta   x elevado á (1/4)
console.log("\t" + "(3125 ** (1/5)) = " + 3125 ** (1 / 5)); // raiz quinta   x elevado á (1/5)

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

console.log("\t" + '("gab" + "riel") = ' + `"${"gab" + "riel"}"`); // "gabriel"
console.log("\t" + '("gab" +   55  ) = ' + `"${"gab" + 55}"`); // "gab55"
console.log("\n");
/**
 *  Observe que, se algum dos operandos for uma string, o outro também será convertido em uma string.
 */
console.log("\t" + '("1" + 2 ) = ' + `"${"1" + 2}"`); // "12"
console.log("\t" + '( 2 + "1") = ' + `"${2 + "1"}"`); // "21"
/**
 *  Veja, não importa se o primeiro operando é uma string ou o segundo
 */
console.log("\t" + '( 2 + 2 + "1") = ' + `"${2 + 2 + "1"}"`); // (2 + 2)  ==  4 + "1" = "41"
console.log("\t" + '("1" + 2 + 2) = ' + `"${"1" + 2 + 2}"`); // ("1" + 2) == "12" + 2 = "122"

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

console.log("\t" + `let x = ${x}`);
console.log("\t" + `let y = ${y}` + "\n");

console.log("\t" + `+x = ${+x}`); // 1
console.log("\t" + `+y = ${+y}` + "\n"); // -2

// Converte não-números

console.log("\t" + `+true = ${+true}`); // 1
console.log("\t" + `+"+123" = ${+"+123"}`); // 123
console.log("\n");
console.log("\t" + `+" " = ${+" "}`); // 0
console.log("\t" + `+"" = ${+""}`); // 0
console.log("\t" + `+"gabriel" = ${+"gabriel"}`); // NaN
console.log("\t" + `+undefined = ${+undefined}`); // NaN
console.log("\t" + `+null = ${+null}` + "\n"); // 0
/**
 *      Na verdade, faz a mesma coisa que Number(), mas é mais curto.
 *
 *      A necessidade de converter strings em números surge com muta frequência. Por exemplo, se estivermos obtendo valores de compos de formulário HTML, eles deralmente são strings. Ese quisermos somar?
 *
 *      O "mais binário(+)" os adiciona como strings:
 */
let apple = "2";
let orange = "3";

console.log("\t\t" + `let apple = "2"`);
console.log("\t\t" + `let orange = "3"` + "\n");

console.log("\t\t" + `apple + orange = "${apple + orange}"` + "\n"); // "23"
/**
 *      Se quisermos tratá-los como números, precisamos convertê-los e depois somá-los:
 */
console.log("\t\t" + `+apple + +orange = ${+apple + +orange}`); // 5
console.log(
    "\t\t" + `Nuber(apple) + Number(orange) = ${Number(apple) + Number(orange)}`
); // 5

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
 *      Precedência	  Nome	            Sinal
        …	            …	                …
        14	          mais unário	      +
        14	          negação unária    -
        13	          exponenciação	    **
        12	          multiplicação	    *
        12	          divisão	          /
        11	          Adição	          +
        11	          subtração	        -
        …	            …	                …
        2	            atribuição	      =
        …	            …	                …
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
console.log("Atribuição" + "\n");

let k = 2 * 2 + 1;

console.log("\t" + `let k = 2 * 2 + 1`);
console.log("\t" + `let k = 5` + "\n");
/**
        Atribuição(=) retorna um valor

            O fato de (=) ser um operador, e não uma construção "mágica" da linguagem tem um implicação interessante.

            Todos os operadores em JavaScript retornam um valor. Isso é óbvio para (+) e (-), mas também verdadeiro para (=).

            A chamada (x = value) grava o "value" em "x" e, em seguida, o retorna.

            Aqui está uma demonstração que usa uma atribuição como parte de uma expressão mais complexa:
 */
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);

console.log("\t\t" + `let a = 1`);
console.log("\t\t" + `let b = 2` + "\n");

console.log("\t\t" + `let c = 3 - (a = b + 1)`);
console.log("\t\t" + `let c = 3 - (a = 3)`);
console.log("\t\t" + `let c = 3 - (3)`);
console.log("\t\t" + `let c = 3 - 3`);
console.log("\t\t" + `let c = 0`);

console.log("\t\t" + `a = 3` + "\n");

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

        MODIFICAR NO LOCAL:

          Muitas vezes precisamos aplicar um operador a uma variável e armazenar o novo resultado nessa mesma variável

          EXEMPLO:

            let a = 2; // a == 2
            a = a + 5; // a == 7
            a = a * 2; // a == 14

          Esta notação pode ser abreviada usando os operadores [+=] e [*=]

          EXEMPLO:

            let a = 2; // a == 2
            a += 5;    // a == 7
            a *= 2;    // a == 14

          Existem operadores curtos de "modificar e atribuir" para todos os operadores aritméticos e bit a bit: [/=], [-=], etc.

          Esses operadores têm a mesma precedência que uma atribuição normal, portanto, são executados após a maioria dos cálculos

          EXEMPLO:

            let a = 2;  // a == 2
            a *= 3 + 5; // a == 16

            why?

              let a = 2;
              a *= 3 + 5;
              a *= 8
              a == 16

        INCREMENTAR/DECREMENTAR:

          Aumentar ou diminuir um número em um está entre as operações numéricas mais comuns.

          Portanto, existem operadores especiais para isso.

            Increment[++] aumenta uma variável em 1:

              let a = 2; // a == 2
              a++;       // a == 3

            Decrement[--] diminui uma variável em 1:

              let a = 2; // a == 2
              a--;       // a == 1

          IMPORTANTE:

            Increment/Decrement só pode ser aplicado a variáveis. Tente usá-lo em um valor como [5++] e dará um erro.

          Os operadores [++] e [--] podem ser colocados antes ou depois de uma variável.

            - Quando o operador vai depois da variável, ele está na "forma pós-fixada":

              counter++

            - Quando o operador vai antes da variável, ele está na "forma pré-fixada":

              ++counter
            
          Ambas as instruções fazem a mesma coisa: aumente [counter] em 1.

          Existem alguma diferença? Sim, mas só podemos ver se usarmos o valor retornado de [++ e --].

          Vamos esclarecer. Como sabemos, todos os operadores retornam um valor. Increment/Decrement não é excessão. A forma "pré-fixada" retorna o novo valor enquanto a forma de "pós-fixada" retorna o valor antigo(antes do Increment/Decrement).

          EXEMPLO:

            pré-fixada:

              let a = 1;   // a == 1
              let b = ++a; // b == 2

              [b] recebe o valor depois do incremento.

            pós-fixada:

              let a = 1;   // a == 1
              let b = a++; // b == 1

              [b] recebe o valor antes do incremento.

          NOTA:

            Increment/Decrement entre outros operadores:

              Os operadores [++ e --] também podem ser usados dentro de expressões. Sua precedência é maior do que a maioria das outras operações aritméticas.

              EXEMPLO:

                pré-fixada:

                  let a = 1;      // a == 1
                  let b = 2 * ++a // b == 4

                pós-fixada:

                  let a = 1;      // a == 1
                  let b = 2 * a++ // b == 2

              Embora tecnicamente aceitável, essa notação geralmente torna o código menos legível. Uma linha faz várias coisas --- não é bom.

              Durante a leitura do código, uma rápida varredura pode facilmente perder algo como [c++] e não será óbvio que a variável aumentou.

              Aconcelhamos um estilo de "uma linha --- uma ação":

              EXEMPLO:

                let a = 1;     // a == 1
                a++;           // a == 2
                let b = 2 * a; // b == 4

        OPERADORES [bit a bit]:

          Operadores bit a bit tratam argumentos como números inteiros de 32 bits e trabalham no nível de sua representação binária.

          Esses operadores não são específicos do JavaScript. Eles são suportados na maioria das linguagens de programação.

          Lista de operadores:

            AND                   [ & ]
            OR                    [ | ]
            XOR                   [ ^ ]
            NOT                   [ ~ ]
            LEFT_SHIFT            [ << ]
            RIGHT_SHIFT           [ >> ]
            ZERO-FILL RIGHT_SHIFT [ >>> ]

          Estes operadores são usados muito raramente, quando precisamos mexer com números no nível mais baixo(bit a bit). Não precisaremos desses operadores tão cedo, pois o desenvolvimento web os usa pouco, mas em algumas áreas especiais, como criptografia, eles são úteis. Você pode ler o capítulo "Bitwise Operator" no MDN.

        VÍRGULA:

          O operador vírgula[ , ] é um dos operadores mais raros e incomuns, Às vezes, é usado para escrever um código mais curto, então precisamos conhecê-lo para entender o que está acontecendo.

          O operador vírgula[ , ] nos permite avaliar várias expressões, dividindo-as com um avírgula. Cada um deles é avaliado, mas apenas o resultado do último é retornado.

          EXEMPLO:

            let a = (1 + 2, 3 + 4); // a == 7

            Aqui a primeira expressão [1 + 2] é avaliada e seu resultado é descartado. Em seguida, [3 + 4] é avaliado e retornado como resultado.

          NOTA:

            A vírgula tem uma precedência muito baixa:

              Observe que o operador vírgula tem precedência muito baixa, inferior a atribuição[ = ], portanto, os parênteses são importantes no exemplo acima.

              Sem eles(parẽnteses):

                let a = 1 + 2, 3 + 4; // a == 3
                    a = 3, 7;         // a == 3
                    a = 3;            // a == 3

                O resto é ignorado.

              É o mesmo que fazer isso:

                let (a = 1 + 3), 1 + 7; // a == 3

                O resto é ignorado.

              Resumo:

                Pega a última expressão e descarta oque vem antes:

                  let a = (1 + 2, 3 + 4); // a == 7

                Pega a primeira expressão e descarte oque vier depois:

                  let (a = 1 + 3), 3 + 4; // a == 3

                  let a = 1 + 2, 3 + 4; // a == 3

          AVISO:

            Aparentemente não importa se tem parênteses ou não o resultado usando vírgula sempre retornará a última expressão.

            EXEMPLO:

              Pega a última expressão e descarta oque vem antes:

                let a = (1 + 2, 3 + 4); // a == 7

                let (a = 1 + 3), 3 + 4; // a == 7

                let a = 1 + 2, 3 + 4;   // a == 7

          Por que precisamos de um operador que jogue fora tudo, exceto a última expressão?

          Às vezes, as pessoas o usam em contruções mais complexas para colocar várias ações em uma linha.

          EXEMPLO:

            for (a=1,b=2,c=a*b; a<10; a++) { ... }

          Esses truques são usados em muitos frameworks JavaScript. É por isso que os estamos mencionando. Mas geralmente eles não melhoram a legibilidade do código, então devemos pensar bem antes de usá-los.

    TAREFAS:

      A forma pós-fixada e pré-fixada:

        Quais são os valores finais de todas as variáveis [a, b, c, d] após o código abaixo.

        EXERCÍCIO:

          let a = 1, b = 1;

          let c = ++a;
          let d = a++;

          RESPOSTA:

            a == 1
            b == 1
            c == 2
            d == 1

      Resultado da atribuição:

        Quais são o valores de [x, a] após o código abaixo.

        EXERCÍCIO:

          let a = 2;
          let x = 1 + (a *= 2);

          RESPOSTA:

            a == 4
            x == 5

      Conversões de tipo:

        Quais são os resultados dessas expressões?

        EXERCÍCIO:

          1
          "" + 1 + 0    // "10"

          2
          "" - 1 + 0    // -1

          3
          true + false  // 1

          4
          6 / "3"       // 2

          5
          "2" * "3"     // 6

          6
          4 + 5 + "px"  // "9px"

          7
          "$" + 4 + 5   // "$45"

          8
          "4" - 2       // 2

          9
          "4px" - 2     // NaN

          10
          "  -9  " + 5  // "  -9  5"

          11
          "  -9  " - 5  // -14

          12
          null + 1      // 1

          13
          undefined + 1 // NaN 

          14
          " \t \n" - 2  // -2

          RESPOSTA:

          1)  "" + 1 + 0
              "1" + 0
              "10"

          2)  "" - 1 + 0
              0 - 1 + 0
              -1 + 0
              -1

          3)  true + false
              1 + 0
              1

          4)  6 / "3"
              6 / 3
              2

          5)  "2" * "3"
              2 * 3
              6

          6)  4 + 5 + "px"
              9 + "px"
              "9px"

          7)  "$" + 4 + 5
              "$4" + 5
              "$45"

          8)  "4" - 2
              4 - 2
              2

          9)  "4px" - 2
              NaN

          10) "__-9__" + 5
              "__9__5"

          11) "__-9__" + 5
              -9 - 5
              -14

          12) null + 1
              0 + 1
              1

          13) undefined + 1
              NaN

          14) "_\t_\n" - 2
              "" - 2
              0 - 2
              -2

      Corrigir a adição:

        Aqui está um código que pede ao usuário dois números e mostra a soma deles.

        Funciona incorretamente. A saída no exemplo abaixo é [12](para valores de prompt padrão).

        EXERCÍCIO:

          let a = prompt("First number?", 1);
          let b = prompt("First number?", 2);

          a + b;    // 12
          1 + 2;    // 3
          "1" + "2" // 12
*/
