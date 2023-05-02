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

            Também podemos declarar várias variáveis em uma linha:

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

                    A palavra-chave "var" é quse a mesma que "let". Ele também declara uma variável, mas de uma maneira um pouco diferente, "velha escola".

                    Existem diferenças sutis entre "let" e "var", mas elas ainda não importam para nós. Vamos abordá-los em detalhes no capitulo "O velho 'var'"(1).

                    (1) - https://javascript.info/var
        
        Uma analogia da vida real:
        
            Poderemos entender facilmente o conceito de "variável" se a imaginarmos como uma "caixa" para dados, com um adesivo com um nome exclusivo nela.

            Por exemplo, a variável "message" pode ser imaginada como uma caixa rotulada de "message" com o valor "Hello" nela:

            Podemos colocar qualquer valor na caixa.

            Também podemos alterá-lo quantas vezes quisermos:

                let message,
                    message = "Hello",
                    message = "World";

                alert(message); // Output: World

            Quando o valor é alterado, os dados antigos são removidos da variável.

            Também podemos declarar duas variáveis e copiar dados de uma para outra.

                let hello = "Hello world!";

                let message;

                message = hello;

                alert(hello); // Hello world!
                alert(message); // Hello world!

            AVISO:

                Declarar duas vezes aciona um erro.

                Uma variável deve ser declarada apenas uma vez.

                Uma declaração repetida da mesma variável é um erro:

                    let message = "This";

                    // SyntaxError: 'message' has already been declared
                    let message = "That"; 

                Portanto, devemos declarar uma variável uma vez e depois fazer referência a ela sem "let".

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

            Quando um nome contém várias palavras, "camelCase"(1) é comumente usado. Ou seja: as palavras vão uma após a outra, cada palavra, exceto a primeira começando com letra mainúscula:

            (1) - https://en.wikipedia.org/wiki/Camel_case

                let myVeryLongName;

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

                Existe uma "lista de palavras reservadas"(1), que não podem ser usadas como nomes de variáveis porque são usadas pela própria linguagem.

                (1) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords

                Por exemplo: let, class, return e function; são reservados.

                O código abaixo dá um erro de sintaxe:

                    let let = 5;

                    let return = 5

            Uma tarefa sem 'use strict':

                Normalmente, precisamos definir uma variável antes de usá-la. Mas antigamente era tecnicamente possível criar uma variável por uma mera atribuição do valor sem usar "let". Isso ainda funciona se você não colocar 'use strict' no seu script:

                    num = 5;

                    alert(num) // Output: 5

                Esta é uma prática ruim e causaria um erro no modo estrito:

                    'use strict'

                    num = 5;

                    alert(num) // error: num is not defined

        Constantes:

            Para declarar uma variável constante(imutavel), use "const" em vez de "let":

                const name = 'Gabriel';
                
                // error: can't reasign the constant
                name = 'Outro';

            Quando um programador tem certezæ que uma variável nunca mudará, ele pode declará-la para "const" e comunicar claramente esse fato para todos.

        Constantes maiúsculas:

            Existe uma prática generalizæda de usar constantes como aliases para valores difíceis de lembrar que são conhecidos antes da expressão.

            Essas constantes são nomeadas usando letras maiúsculas e sublinhados.

            Por exemplo, vamos criar constantes para cores no chamado formato "web"(hexadecimal):

                const COLOR_RED = "#F00";
                const COLOR_GREEN = "0F0";

                let color = COLOR_RED;
                alert(color);

            Benefícios:

                1 - "COLOR_RED" é muito mais fácil de lembrar do que "#F00".

                2 - É muito mais fácil digitar errado "F00" do que "COLOR_RED".

                3 - Ao ler o código, "COLOR_RED" é muito mais significativo do que "F00".

                Quando devemos usar letras maiúsculas para uma constante e quando devemos nomeá-la normalmente? Vamos deixar isso claro.

                Ser uma "constante" significa apenas que o valor de uma variável que nunca muda. Mas há constantes que são conhecidas antes da execução(como um valor hexadecimal para vermelho) e há constantes que são calculadas em tempo de execução, durante a execução, mas não mudam após sua atribuição inicial.

                Por exemplo:

                    const pageLoadTime = /* time taken by a webpage to load *\;

                O valor de "pageLoadTime" não é conhecido antes do carregamento da página, por isso é nomeado normalmente. Mas ainda é uma constante porque não muda após a atribuição.
                
                Em outras palavras, as constantes com nomes maiúsculos são usadas apenas como aliases para valores "codificados".

        Nomeie as coisas direito:

            Falando em variáveis, tem mais uma coisa extremamente importante.

            Um nome de variável deve ter um significado claro e óbvio, descrevendo os dados que ela armazena.

            A nomeclatura de variáveis é uma das habilidades mais importantes e complexas da programação. Uma rápida olhada nos nomes das variáveis pode revelar qual código foi escrito por um iniciante versus um desenvolvedor experiente.

            Em um projeto real, a maior parte do tempo é gasta madificando e estendendo uma base de código existente, em vez de escrever algo completamente separado do zero. Quando voltamos a algum código depois de fazer alguma outra coisa por um tempo, é muito mais fácil encontrar informações bem rotuladas. Ou, em outras palavras, quando as variáveis tem bons nomes.

            Por favor, gaste tempo pensando sobre o nome certo para uma variável antes de declará-la. Se fizer, irá recompensá-lo generosamente.

            Algumas regras boas de seguir são:

                1 - Use nomes legiveis por humanos como userName ou shoppingCart.

                2 - Fique longe de abreviações ou nomes curtos como: a, b, c, d; a menos que saiba o que está fazendo.

                3 - Faça nomes o mais descritivos e concisos possível. Exemplos de nomes ruins são: "data" e "value". Esse nomes não dizem nada. Não há problema em usá-los se o contexto do código tornar excepcionalmente óbvio quais dados ou valores a váriavel está referenciando.

                4 - Concorde com os termos dentro de sua equipe e em sua própria mente. Se um visitante do site for chamado de "user", devemos nomear as variáveis relacionadas "currentUser" ou "newUser" em vez de "currentVisitor" ou "newManInTown".

            Parece simples? De fato, mas criar nomes de variáveis descriticos e concisos na prática não é. Vá em frente.

        NOTA:

            Reultilizær ou criar?

                E a última nota. Existem alguns programadores preguiçosos que, em vez de declarar novas variáveis, tendem a reultilizær as existentes.

                Como resultado, suas variáveis são como caixas nas quais as pessoas jogam coisas diferentes sem alterar seus adesivos.O que há dentro da caixa agora? Quem sabe? Precisamos nos aproximar e verificar.

                Esses programadores economizæm um pouco na declaração de variáveis, mas perdem dez vezes mais na depuração.

                Uma variável extra é boa, não má.

                Minificadores e navegadores JavaScript modernos otimizæm o código o suficiente para não criar problemas de desempenho. O uso de variáveis diferentes para valores diferentes pode até ajudar o mecaninsmo a otimizær seu código.

        Resumo:

            Podemos declarar variáveis para armazenar dados usando as palavras-chave: "var", "let" e "const".

                let - É uma declaração de variável moderna.

                var - É uma declaração de variável da velha guarda. Normalmente não o usamos, mas abordaremos diferentes suits "let" no capítulo "O antigo var"(1), apenas no caso de você precisar delas.

                (1) - https://javascript.info/var

                const - É como "let", mas o valor da variável não pode ser alterado.

            As variáveis devem ser nomeadas de forma que nos permita entender facilmente o que está dentro delas.

        Tarefas:

            Trabalhando com variáveis:

                1 - Declare duas variáveis: "admin" e "name".

                    let admin; | var admin;
                    let name;  | var name;

                2 - Atribua o valor "Jhon" a variável "name".

                    let name;

                    name = "Jhon";

                3 - Copie o valor de da variável "name" para "admin".

                    let name;
                    let admin;

                    name = "Jhon";
                    admin = name;

                4 - Mostre o valor da variável "admin" usando "alert()"*deve gerar - Jhon*

                    let admin = "Jhon";

                    alert(admin)

            Dando o nome certo:

                1 - Crie uma variável com o nome do nosso planeta. Como você nomearia tal variável?

                    let thirdPlanet;

                2 - Crie uma variável para armazenar o nome de um visitante atual de um site. Como você nomearia essa variável?

                    let currentUser;

            Constante maiúscula:

                Examine o seguinte código:

                    const birthday = "18.04.1982";

                    const age = someCode(birthday);

                Aqui temos uma constante "birthday" para a data e também a constante "age" para a idade.

                O "age" é calculado usando someCode(birthday), o que significa uma chamada de função que ainda não explicamos(em breve!), mas os detalhes não importam aqui, o ponto é que "age" é calculade de alguma forma com base no "birthday".

                Seria correto usar letras maiúsculas para "birthday"? Para "age"? Ou mesmo para ambos.

                    Para "birthday", sim. Pois é mais fácil lembrar no no BITHDAY do que os números que o compoem.

                    Para "age" não vejo necessidade, pois é culculada em tempo de execução.
*/