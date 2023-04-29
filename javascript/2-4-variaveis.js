/*
    Variáveis:

        Na maioria das vezes, um aplicativo JavaScript precisa trabalhar com informações. Aqui estão dois exemplos:

            1 - Uma loja online - as informações podem incluir mercadorias sendo vendidas e uma carrinho de compras.

            2 - Um aplicativo de bate-bapo - as informações podem incluir usuários, mensagens e muito mais.

        As váriaveis são usadas para armazenar essas informações.

        Uma variável:

            Uma "variável"(1) é um "armazenamento nomeado" para dados. Podemos usar variáveis para armazenasr brindes, visitantes e outros dados.

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

            NOTA:

                "var" em vez de "let":

                    Em scripts antigos, você também pode encontrar outra palavra-chave: "var":

                        var message = "Hello";

                    A palavra-chave "var" é quse a mesma que "let". Ele também declara uma variável, mas de uma maneira um pouco diferente, da "velha escola".

                    Existem diferentes sutis entre "let" e "var", mas elas ainda não importam para nós. Vamos abordá-los em detalhes no capitulo "O velho 'var'".
        
        Uma analogia da vida real:
        
            Poderemos entender facilmente o conceito de "variável" se a imaginarmos como uma "caixa" para dados, com um adesivo com um nome exclusivo nela.

            Por exemplo, a variável "message" pode ser imaginada como uma caixa rotulada de "message" com o valor "Hello" nela:
*/