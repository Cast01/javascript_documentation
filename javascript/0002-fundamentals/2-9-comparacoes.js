/**
  COMPARAÇÕES

    Conhecemos muitos operadores de comparação da matemática.

    Em JavaScript eles sao escritos assim:

      * Maior/Menor que:

        (a > b) & (a < b)

      * Maior/Menor ou igual a:

        [>][=]     [<][=]
        (a >= b) & (a <= b)

      * Igual a:

        [=][=]
        (a == b)

        Observe que o sinal de igualdade duplo [ == ] significa o teste de igualdades, enquanto um único [ = ] significa uma atribuição.

      * Diferente:

        [!][=]
        a != b

    Neste artigo aprenderemos mais sobre diferentes tipos de comparações, como o JavaScript as faz, incluindo peculiaridades importantes.

    No final, você encontrará uma boa receita para evitar problemas relacionados a "peculiaridades do JavaScript".

  O RESULTADO É SEMPRE TRUE/FALSE:

    Todos os operadores de comparação retornam um valor booleano:

      * true

        sim, correto, positivo, etc..

      * false

        não, incorreto, negativo, etc..

    EXEMPLO:

      (2 > 1)  // true

      (2 == 1) // true

      (2 != 1) // false

    Um resultado de comparação pode ser atribuido a uma variável, assim como qualquer valor:

      let result = 5 > 4
          result = true

  COMPARAÇÃO DE STRINGS:

    Para ver se uma String é maior que outra, o JavaScript usa a ordem das letras.

    Em outras palavras, as strings são comparadas letra por letra.

    EXEMPLO:

      ('Z' > 'A')       // true

      ('Glow' > 'Glee') // true

      ('Bee' > 'Be')    // true

    O algoritmo para comparar duas Strings é simples:

      * Compare o primeiro caractere de ambas as Strings.

      * Se o primeiro caractere da primeira string for (maior/menor) que o da outra String, então a primeira String é (maior/menor) que a segunda e retorne o resultado (true/false).

      * Caso contrário, se os primeiros caracteres de ambas as Strings forem iguais, compare os segundos caracteres da mesma maneira.

      * Repita até o final de qualquer String.

      * Se ambas as Strings terminarem com o mesmo comprimento, então são iguais. Caso contráio, a String mais longa é maior.

    No primeiro exemplo acima, a comparação ('Z' > 'A') chega a um resultado na primeira etapa.

    A segunda comparação ('Glow' > 'Glee') precisa de mais etapas, pois as strings são comparadas caractere por caractere:

      'G' > 'G' // false
      'l' > 'l' // false
      'o' > 'e' // true

    NOTA:

      Não é um dicionário real, mas ordem Unicode.

      O algoritmo de comparação dado acima é aproximadamente equivalente ao usado em dicionários ou listas telefônicas, mas não é exatamente o mesmo.

      Por exemplo, o caso importa. Uma letra maiúscula "A" não é igual à minúscula "a". Qual deles é maior? As minúsculas "a". Por que? Porque o caractere minúsculo tem um índice maior na tabela de codificação interna que o JavaScript usa(Unicode). Voltaremos a detalhes específicos e consequências disso no capítulo "Strings".

  COMPARAÇÃO DE VÁRIOS TIPOS:

    Ao comparar valores de tipos diferentes, o JavaScript converte os valores em números.

      EXEMPLO:

        ('2' > 1)
        (2 > 1) // true

        ('01' == 1)
        (1 == 1) // true

    Para valores booleanos:

      true == 1

      false == 0

      EXEMPLO:

        (true == 1)
        (1 == 1) // true

        (false == 0)
        (0 == 0) // true

      NOTA:

        Uma consequência engraçada.

        É possível que um valor possa ser [ true ] & [ false ]

        EXEMPLO:

          let a = 0
          Boolean(a) // false

          let b = "0"
          Boolean(b) // true

          (a == b)
          (0 == "0")
          (0 == 0) // true

        Do ponto de vista do JavaScript, esse resultado é bastante normal. Uma verificação de igualdade converte valores usando a conversão númerica(portanto, "0" torna-se 0), enquanto a conversão Boolean() usa otro conjunto de regras.

  IGUALDADE ESTRITA:

    Uma verificação de igualdade regular [ == ] tem um problema. Não pode diferenciar [ 0 ] de [ false ]:

      (0 == false)
      (0 == 0) // true

    A mesma coisa acontece com uma string vasia:

      ('' == false)
      (0 == 0) // true

    Isso acontece porque operandos de tipos diferentes são convertidos em números pelo operador de igualdade [ == ]. Uma String vazia, assim como [ false ], torna-se um [ 0 ].

    O que fazer se quisermos diferenciar [ 0 ] de [ false ]?

    Um operador de igualdade estrita [ === ] verifica a igualdade sem conversão de tipo.

    Em outras palavras, se (typeof a != typeob b) então (a === b) retorna [ false ] sem tentar convertê-los:

      (0 === false)
      (number === boolean) // false

    Há também um operador de "não igualdade restrita" [ !== ] é um pouco mais longo para escrever, mas torna óbvio o que está acontecendo e deixa menos espaços para erros.

  COMPARAÇÃO COM NULL E UNDEFINED:
  
    Há um comportamento não intuitivo queando [ null ] ou [ undefined ] são comparados a outros valores.

      Para uma verificação de igualdade estrita [ === ] esses valores são diferentes, porque cada um deles é um tipo diferente.

        (null === undefined)
        (object === undefined) // false

      Para uma verificação não rigorosa [ == ]

        Há uma regra especial. Esses dois são um "casal doce". Eles se igualam na verificação de igualdade [ == ], mas com outros valores não.

          (null == undefined)
          (0 == NaN) // true

      Para matemática e outras comparações[ <, >, <=, >= ] os valores [null/undefined] são convertidos em números:

        null == 0

        undefined == NaN

    Agora vamos ver algumas coisas engraçadas que acontecem quando aplicamos essas regras. E, o que é mais importante, como não cair em uma armadilha com eles.

      Resultado estranho:
      
        [ null ] e [ 0 ]

        Vamos comparar [ null ] com um 0:

          (null > 0)
          (0 > 0)     // false

          (null >= 0)
          (0 >= 0)    // true

          (null == 0)
          (null == 0) // false

      Matematicamente, isso é estranho. O último resultado afirma que [ null ] é maior ou igual a zero, então em uma das comparações acima deve ser [ true ], mas ambos são [ false ].

        A razão é que uma verificação [ == ] e comparações [ <, >, <=, >= ] funcionam de forma diferente. 
        
        As comparações [<=, >=] convertem [ null ] em [ 0 ]. É por isso que (null >= 0) retorna [ true ]:

          Maior ou igual:

            (null >= 0)
            (0 >= 0) // true

          Maior:

            (null > 0)
            (0 > 0) // true

      Por outro lado, a verificação de igualdade [ == ] para [ undefined ] e [ null ] é definida de forma que, sem nenhuma conversão, eles se igualem e não sejam iguais a mais nada. É por isso que (null == 0) retorna [ false ].

  UM INCOMPARÁVEL INDEFINIDO:

    O valor [ undefined ] não deve ser comparado a outros valores:

      (undefined > 0)
      (NaN > 0) // false

      (undefined >= 0)
      (NaN >= 0) // false

      (undefined == 0)
      (undefined == 0) // false

    Por que ele não gosta tanto do 0? Sempre falso!

    Chegamos a esse resultado porque:
    
      * Comparações 1 e 2 retornaram [ false ] porque [ undefined ] é convertido para [ NaN ]

      * Comparação 3 retorna false porque [ undefined ] só é igual a [ null ] ou a ele mesmo.

  EVITAR PROBLEMAS:

    Pou que examinamos esses exemplos? Devemos nos lembrar dessas peculiaridades o tempo todo? Bem, na verdade não. Na verdade, essas coisas complicadas gradualmente se tornaram familiares com o tempo, mas há uma maneira sólida de evitar problemas com elas.

      * Evite ao maximo usar [ undefined ] e [ null ]

        Declare variáveis com o valor inicial do seu tipo e não como null:

          let userAge = null; // ERRADO
          let userAge = 0;

          let userAge = null; // ERRADO
          let userName = '';

          Se você não sabe o tipo da informação acho que ai pode usar [ undefined ] ou [ null ]

        Retorne 0 ao invés de apenas [ return ]:

          f() {
            if (user) {
              ...
            }

            return 0
          }

        Se for usar [ undefined ] ou [ null ] use [ === ] para fazer comparações.

      * Não use [ <, >, <=, >= ] com variáveis que podem ser [ null/undefined ], a menos que tenha certezæ do que está fazendo. Se uma vaiável puder ter esses valores, verifique-os separadamente.

  RESUMO:

    * Os operadores de comparação retornam um valor booleano.

    * Strings são comparadas letra por letra na ordem do "dicionário".

    * Quando valores de tipos diferentes são comparados, eles são convertidos em números exceto quando comparados usando [ == ]

    * Os valores [ null ] e [ undefined ] são iguais [ == ] entre si e não são iguais a nenhum outro valor.

    * Tenha cuidado ao usar comparações como [ <, > ] com variáveis que ocasionalmente podem ser [ null/undefined ]. Verificar [ null/undefined ] separadamente é uma boa ideia.

  TAREFAS:

    Qual será o resultado dessas expressões?

    EXERCÍCIOS:

      (5 > 4) // true

      ("apple" > "pineapple")
      ("a" > "p") // false

      ("apple" > "applicatio")
      ("a" > "a") // false
      ("ap" > "ap") // false
      ("app" > "app") // false
      ("appl" > "appl") // false
      ("apple" > "appli") // false

      ("apple" < "apples")
      ("a" < "a") // false
      ("ap" < "ap") // false
      ("app" < "app") // false
      ("appl" < "appl") // false
      ("apple" < "apple") // false
      ("apple" < "apples") // true

      ("2" > "12")
      ("2" > "1") // true

      ("301" > "5")
      ("3" > "5") // false

      (undefined == null) // true

      (undefined === null) // false

      (null == "\n0\n") // false

      (null === +"\n0\n") // false
 */

console.log("350" > "4") // FALSE