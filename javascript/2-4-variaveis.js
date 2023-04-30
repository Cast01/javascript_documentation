/*
    Variáveis:

        Na maioria das vezes, um aplicativo JavaScript precisa trabalhar com informações. Aqui estão dois exemplos:

            1 - Uma loja online - as informações podem incluir mercadorias sendo vendidas e uma carrinho de compras.

            2 - Um aplicativo de bate-bapo - as informações podem incluir usuários, mensagens e muito mais.

        As váriaveis são usadas para armazenar essas informações.

        Uma variável:

            Uma "variável"(1) é um "armazenamento nomeado" para dados. Podemos usar variáveis para armazenasr brindes, visitantes e outros dados.

            (1) - https://en.wikipedia.org/wiki/Variable_(computer_science)

            Para criar uma variável em JavaScript, use a palavra-chave "let".

            A instrução abaixo cria(ou seja: declara) uma variável com o nome "mensagem":

                let message;

            Agora podemos colocar alguns dados nele usando o operador de atribuição "=":

                let message;
                
                // Store the string 'Hello' in the variable named message.
                message = "Hello";

            A string agora é salva na área de memória associada à variável. Podemos acessá-lo usando o nome da varável:

                let message;
                message = "Hello";

                // Show the variable content.
                alert(message);

            Para ser conciso, podemos combinar a declaração e a atribuição da variável em uma única linha:

                // Define the variable and assign the value.
                let message = "Hello!";

                alert(message);

            Também posemos declarar várias variáveis em uma linha:

                let user = "Gabriel", age = 22, message = "Hello";

            Isso pode parecer mais curto, mas não o recomendamos. Para facilitar a leitura, use uma única linha por variável.

            A variante multilinha é um pouco mais longa, mas mais fácil de ler:

                let name = "Gabriel";
                let age = 22;
                let message = "Hello";

            Algumas pessoas também definem múltiplas variáveis neste estilo multilinha:

                let user = "Gabriel",
                    age = 22,
                    message = "Hello";

            ... Ou até mesmo no estilo "vírgula primeiro":

                let user = "Gabriel"
                    , age = 22
                    , message = "Hello";

            Tecnicamente, todas essas variantes fazem a mesma coisa. Então, é uma questão de gosto pessoal e estética.

            IMPORTANTE:

                "var" em vez de "let":

                    Em scripts antigos, você também pode encontrar outra palavra-chave: "var":

                        var message = "Hello";

                    A palavra-chave "var" é quse a mesma que "let". Ele também declara uma variável, mas de uma maneira um pouco diferente, da "velha escola".

                    Existem diferentes sutis entre "let" e "var", mas elas ainda não importam para nós. Vamos abordá-los em detalhes no capitulo "O velho 'var'"(1).

                    (1) - https://javascript.info/var
        
        Uma analogia da vida real:
        
            Poderemos entender facilmente o conceito de "variável" se a imaginarmos como uma "caixa" para dados, com um adesivo com um nome exclusivo nela.

            Por exemplo, a variável "message" pode ser imaginada como uma caixa rotulada de "message" com o valor "Hello" nela:

            Podemos colocar qualquer valor na caixa.

            Também podemos alterá-lo quantas vezes quisermos:

                let message,
                    message = "Hello",
                    message = "World";

                alert(message);

            Quando o valor é alterado, os dados antigos são removidos da variável.

            Também podemos declarar duas variáveis e copiar dados de uma para outra.

                let hello = "Hello world!";

                let message;

                message = hello;

                alert(hello);
                alert(message);

            AVISO:

                Declarar duas vezes aciona um erro.

                Uma variável deve ser declarada apenas uma vez.

                Uma declaração repetida da mesma variável é um erro:

                    let message = "This";

                    // SyntaxError: 'message' has already been declared
                    let message = "That"; 

                Portanto, devemos declarar uma variável uma vez e depois pazer referência a ela sem "let".

            IMPORTANTE:

                Linguagens funcionais:

                    É interessante notar que existem as chamadas linguagens de programação "puramente funcionais"(1), como "Haskell"(2), que príbem a alteração de valores de variáveis.

                    (1) - https://en.wikipedia.org/wiki/Purely_functional_programming

                    (2) - https://en.wikipedia.org/wiki/Haskell

                    Nessas linguagens, uma vez que o valor é armazenado "na caixa", ele fica lá para sempre. Se precisarmos armazenar algo mais, a linguagem nos obriga a criar uma "nova caixa"(declarar uma nova variável). Não podemos reultilizær o antigo.

                    Embora possa parecer um pouco estranho à primeira vista, essas líguas são capazes de um desenvolvimento sério. Mais de que isso, existem áreas como computações paralelas onde esta limitação confere certos beneficios.

        Nomeclatura variável:

            Existem duas limitações nos nomes de variáveis em JavaScript:

                1 - O nome deve conter apenas letras, digitos ou simbolos "$" e "_".

                2 - O primeiro caractere não deve ser um digito.

            Exemplode de nomes válidos:

                let userName;

                let teste123;

            QUando um nome contém várias palavras, "camelCase"(1) é comumente usado. Ou seja: as palavras vão uma após a outra, cada palavra, exceto a primeira começando com letra maiúscula:

                let myVeryLongName;

            (1) - https://en.wikipedia.org/wiki/Camel_case

            O que é interessante - o cifrão "$" e o sublinhado "_" também podem ser usados em nomes. São símbolos regulares, assim como as letras, sem nenhum significado especial.

            Estes nomes também são válidos:

                let $ = 1;

                let _ = 2

                alert($ + _); // Output: 3

            Exemplos de nomes de variáveis incorretos:

                let 1a;

                let my-name;

        IMPORTANTE:

            Variáveis com o mesmo nome em UpperCase e LowerCase são diferentes:

                let apple;

                let APPLE;

            Podemos declarar variáveis em qualque idioma, mas não é recomendado:

                let имя;

                let 我;

            Tecnicamente, não há erro aqui. Esses nomes são permitidos, mas existem uma convensão internacional para usar o inglês em nome de variáveis. Mesmo que estejamos escrevendo um pequeno roteiro, ele pode ter uma longa vida pela frente. Pessoas de outros países podem precisar lê-lo em algum momento.

        AVISO:

            Nomes reservados:

                HERE...
*/