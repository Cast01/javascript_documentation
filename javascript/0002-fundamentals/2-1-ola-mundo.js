/**
    Olá Mundo

        Esta parte do tutorial é sobre o núcleo do JavaScript, a própria linguagem.

        Mas precisamos de um ambiente de trabalho para executar nossos scripts e, como este livro é online, o navegador é uma boa escolha. Manteremos a qualidade mínima de comandos específicos do navegador(como "alert") para que você não perca tempo com eles se planeja se concentrar em outro ambiente(como NodeJS). Vamos nos concentrar no JavaScript no navegador na próxima parte do tutorial.

        Primeiro, vamos ver como anexamos um script a uma página web. Para ambientes do lado do servidor(como NodeJS), você pode executar o script com um comando como "node my.js".

        A etiqueta "script"

            Os programadores JavaScript podem ser inseridos em quase qualquer lugar em um documento HTML usando a tag <script>.

                <!DOCTYPE HTML>

                <html>
                    <body>
                        <p>Before the script...</p>

                        <script>
                            alert("Hello, world!")
                        </script>

                        <p>...After the script.</p>
                    </body>
                </html>

            A tag <script> contém código JavaScript que é executado automaticamente quando o navegador processa a tag.

        Marcação moderna

            A tag <script> tem alguns atributos que raramente são usados hoje em dia, mas ainda podem ser encontrados em códigos antigos:

                O "type"

                    <script type="..."></script>

                    O antigo padrão HTML, HTML4, exigia que uma tag <script> tivesse o atributo "type". Normalmente era (type="text/javascript"). Não é mais necessário. Além disso, o padrão HTML moderno mudou totalmente o significado desse atributo. Agora, ele pode ser usado para módulos JavaScript. Mas esse é um assunto avançado, falaremos sobre os módulos em outra parte do tutorial.

                O "language"

                    Este atributo foi criado para mostrar o idioma do script. Esse atributo não faz mais sentido porque JavaScript é o idioma padrão. Não há necessidade de usá-lo.

        Comentários antes e depois dos scripts

            Em livros e guias relamente antigos, você pode encontrar comentários dentro da tag <script>, como este

                <script type="text/javascript">
                    <!-- Coment here -->
                </script>

            Este truque não é usado em JavaScript moderno. Esses comentários ocultam o código JavaScript de navegadores antigos que não sabiam como processar a tag <script>. Como os navegadores lançados nos últimos 15 anos não apresentam esse problema, esse tipo de comentário pode ajudá-lo a identificar códigos relamente antigos.

        Scripts Externos

            Se tivermos muito código JavaScript, podemos colocá-lo em um arquivo separado.

            Os arquivos de script são anexados ao HTML com o atributo "src"

                Aqui "/path/to/script.js" está um caminho absoluto para o script da raiz do site. Pode-se também fornecer um caminho relativo da página atual. Por exemplo, <script src="script.js"></script>, assim como <script src="./script.js"></script>, significaria um arquivo "script.js" na pasta atual.

                Também podemos fornecer um URL completo. Por exemplo

                    <script 
                        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
                    >
                    </script>

                Para anexar vários scripts, use várias tags

                    <script src="/js/script1.js"></script>
                    <script src="/js/script2.js"></script>
                    ...

        OBSERVAÇÃO

            Como regra, apenas os scripts mais simples são colocados em HTML. Os mais complexos residem em arquivos separados.

            A vantagem de um arquivo separado é que o navegador irá baixá-lo e armazená-lo em seu cache.

            Outras páginas que fazem referência ao mesmo script irão retirá-lo do cache em vez de baixá-lo, então o arquivo é baixado apenas uma vez.

            Isso reduz o tráfego e torna as páginas mais rápidas.

        AVISO

            Se o atributo "src" for definido, o conteúdo do script será ignorado.

            Uma única tag <script> não pode conter o atributo "src" e um conteúdo dentro da tag <script>.

            Isso não vai funcionar

                <script src="file.js">
                    alert(1) // the content is ignored, because src is set.
                </script>

            Devemos escolher um externo <script src="file.js"> ou um regular <script>...</script>.

                Externo

                    <script src="file.js"></script>

                Regular

                    <script>
                        alert(1)
                    </script>

        Resumo

            Podemos usar uma tag <script> para adicionar código JavaScript a uma página.

            Os atributos "type" e "language" não são necessários.

            Um script em um arquivo externo pode ser inserido com extensão <script src="/path/to/file.js"></script>

        Tarefas

            Mostrar um alerta

                <script>
                    alert("I\'m JavaScript")
                </script>

            Mostrar um alerta com um script externo

                alert.js

                    alert('I\'m Javascript');

                alert.js

                <script src="alert.js"></script>

 */