/**
    O modo moderno, "use strict":

        Por muito tempo, o JavaScript evoluiu sem problemas de compatibilidade. Novos recursos foram adicionados ao idioma enquanto a funcionalidade não mudou.

        Isso teve a vantagem de nunca quebrar o código existente. Mas o lado negativo era que qualquer erro ou decisão imperfeita dos criadores do JavaScript ficava para sempre na linguagem.

        Este foi o caso até 2009, quando o ECMAScript 5(ES5) apareceu. Acrescentou novas funcionalidades à linguagem e modificou algumas das existentes. Para manter o código antigo funcionando, a maioria dessas modificaões está desativada por padrão. Você precisa ativá-los explicitamente com uma diretiva especial: "use strict"

        "use strict":

            A diretiva se parece com uma string: "use strict" ou 'use strict'. Quando está localizædo na parte superior de um script, todo o script funciona da maneira "moderna".

                "use strict";

                ...

            Muito em breve vamos aprender funções (uma forma de agrupar comandos), então vamos notar de antemão que "use strict" podem ser colocadas no inicio de uma função. Fazer isso ativa o modo estrito apenas nessa função. Mas geralmente as pessoas o usam para todo o script.

            AVISO

                Certifique-se de que "use strict" esteja no topo dos scripts, caso contrário, o modo estrito pode não ser ativado:

                    alert("some code");
                    // "use strict" below is ignored. It must be at the top.

                    "use strict"; // strict mode is not activated.

                Somente comentários podem aparecer acima de "use strict";

                Não tem como cancelar o "use strict"

                    Não há diretiva que reverte o mecanismo para o comportamento antigo: "no use strict", isso não funciona.

        Console do navegador

            Quando você usa um console do navegador para executar o código, observe que "use strict" não ocorre por padrão.

            Às vezes, quando "use strict" faz diferença, você obtem resultados incorretos.

            Então, como aplicar "use strict" no console?

            Use o "shift + Enter":

                'use strict'; <Shift + Enter>
                // ... your code here ...

            Funciona na maioria dos navegadores, com certezæ no Firefox e Chrome.

            Caso contrário, por exemplo, em um navegador antigo, exista uma maneira feia, mas confiável, de garantir "use strict". Coloque-o dentro deste tipo de embalagem:

                (function() {
                    'use strict';

                    // ... your code here ...
                })

        Devemos usar "use strict"

            A pergunta pode parecer óbvia, mas não é.

            Alguém poderia recomendar começar os scripts com "use stric". Mas você sabe o que é legal?

            O JavaScript moderno oferece suporte a "classes" e "módulos" - estruturas de linguagem avançadas(certamente chegaremos a elas), que habilitam "use strict" automaticamente. Portanto, não precisamos adicionar "use strict", se o usarmos.

            Então por enquanto "use strict" é um convidado bem-vindo no topo de seus scripts. Mais tarde, quando seu código estiver todo em classes e módulos, voce pode omiti-lo.
        
            A partir de agora, temos que saber sobre "use strict" em geral.

            Nos próximos capítulos, à medida que aprendemos os recursos da linguagem, veremos as diferenças entre os modos estrito e antigo. Falizmente, não há muito e eles realmente tornam nossas vidas melhores.

            Todos os exemplos neste tutorial assumem o modo estrito, a mesno que(muito raramente) seja especificado de outra forma.
 */