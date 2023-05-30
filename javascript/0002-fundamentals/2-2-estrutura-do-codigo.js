/**
    Estrutura do código

        A primeira coisa que estudaremos são os blocos de construção do código.

        Declarações

            As instruções são construções de sintaxe e comandos que executam ações.

            Já vimos um enunciado, (alert('Hello, world!')), que mostra a mensagem "Hello, world!".

            Podemos ter quantas instruções quisermos em nosso código. As declarações podem ser separadas por ponto e vírgula.

            Por exemplo, aqui dividimos "Hello, world!" em dois alertas.

                alert("Hello"); alert("World");

            Normalmente, as instruções são escritas em linhas separadas para tornarem o código mais legível

                alert("Hello");
                alert("World");

        Ponto-e-vírgula

            Um ponto e vírgula pode ser omitido na mioria dos casos quando existe uma quebra de linha.

            Isso funcionaria também

                alert("Hello")
                alert("World")

            Aaqui o JavaScript interpreta a quebra de linha como um ponto-e-vírgula "implícito". Isso é chamado de inserção automática de ponto e vírgula.

            Na maioria dos casos, uma nova linha implica um ponto-e-vírgula. Mas "na maioria dos casos" não significa "sempre".

            Há casos em que uma nova linha não significa um ponto-e-vírgula. Por exemplo:

                alert(3 +
                1
                + 2);

            O código gerado é 6 porque o JavaScript não insere ponto-e-vírgula aqui. É intuitivamente óbvio que se a linha terminar com um sinal de "+", então é uma "expressão incompleta", então um ponto-e-vírgula estaria incorreto. E neste caso, isso funciona como pretendido.

            Mas há situações em que o JavaScript "falha" em assumir um ponto-e-vírgula onde realmente é necessário.

            Os error que ocorrem nesses casos são bastante difíceis de encontrar e corrigir.

            Se você está curioso para ver um exemplo concreto de tal erro, verifique este código:

                alert("Hello");

                [1, 2].forEach(alert);

                Não há necessidade de pensar sobre o significado dos colchetes "[]" e "forEach" ainda. Vamos estudá-los mais tarde. Por enquanto, apenas lembre-se do resultado da execução do código:

                    mostra "Hello", então 1, então 2.

                Agora vamos remover o ponto-e-vírgula após o "alert":

                    alert("Hello")

                    [1, 2].forEach(alert);

                A diferença em relação ao código acima é de apenas um caractere: o ponto-e-vírgula no final da primeira linha sumiu.

                Se executarmos este código, apenas o primeiro "Hello" será exibido(e se houver um erro, talvez seja necessário abrir o console para vê-lo). Não há mais numeros.

                Isso ocorre porque o JavaScript não assume um ponto-e-vírgula entes dos colchetes "[...]". Portanto, o código no último exemplo é tratado como uma única instrução.

                Veja como o engine vê:

                    alert("Hello")[1,2].forEach(alert);

                Parece estranho, certo? Essa fusão, neste caso, é simplesmente errada. Precisamos colocar um ponto-e-vírgula depois de "alert" para que o código funcione corretamente.

                Isso pode acontecer em outras situações.

            Recomendamos colocar ponto-e-vírgula entre as instruções, mesmo que sejam separadas por novas linhas. Esta regra é amplamente adotada pela comunidade. Observemos mais uma vez - é possível omitir ponto-e-virgula na maioria das vezes. Mas é mais seguro - especialmente para iniciantes - usá-los.

        Comentários

            Com o passar do tempo, os programas se tornam cada vez mais complexos. Torna-se necessário adicionar comentários que descrevam o que o código faz e por quê.

            Os comentários podem ser colocados em qualquer lugar de um script. Eles não afetam sua execução porque o mecanismo simplesmente os ignora.

            Os comentários de uma linha começam com dois caracteres de barra "//".

            O resto da linha é um comentário. Pode ocupar uma linha inteira própria ou seguir uma declaração.

            Como aqui:

                // This comment occupies a line of its own
                alert("Hello");

                alert("World"); // This comment follows the statement

            O conteúdo dos comentários é ignorado, portanto, se colocarmos código dentro / * ... * /(sem os espaços), ele não será executado.

            Às vezes pode ser útil desativar temporariamente uma parte do código:

                / *
                    Commenting out the code
                    alert('Hello');
                * /
                alert("World");

            Use teclas de atalho

                Na maioria dos editores, uma linha de código pode ser comentada pressionando a tecla de atalho para um comentário de linha e para um comentário de várias linha selecione todo o centeúdo de use o atalho de comentar.

            AVISO

                Comentários aninhados não são suportados!

        Por favor, não hesite em comentar o seu código.

        Os comentários aumentam a pegada geral no código, mas isso não é um problema. Existem muitas ferramentas que reduzem o código antes de publicar em um servidor de produção. Eles removem comentários, para que não apareçam nos scripts de trabalho. Portanto, os comentários não tem nenhum efeito negativo na produção.

        Mais adiante no tutorial haverá um capítulo "Qualidade do código" que também explica como escrever comentários melhores.
 */