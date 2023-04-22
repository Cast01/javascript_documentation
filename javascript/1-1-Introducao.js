/**
    UMA INTRODUÇÃO AO JAVASCIPT
 
        Vamos ver o que há de tão especial no JavaScript, o que podemos alcançar.
    
    O QUE É JAVASCRIPT?

        JavaScript foi inicialmente criado para "tornar as páginas da web vivas".

        Os programas nessa linguagem são chamados de scripts. Eles podem ser escritos diretamente no HTML de uma página da Web e executados automaticamente à medida que a página é carregada.

        Os scripts são fornecidos e executados como tex to simples. Eles não precisam de preparação adicional ou compilação para serem executados.

        Nesse aspecto, o JavaScript é muito diferente de outra linguagem chamada Java.

        -- NOTA --

            POR QUE É CHAMADO DE JAVASCRIPT

            Quando o JavaScript foi criado, inicialmente tinha outro nome: "LiveScript". Mas Java era muito popular naquela época, então foi decidido que posicionar uma nova linguagem como um irmão mais novo de Java ajudaria.

            Mas, à medida que evoluiu, o JavaScript tornou-se uma linguagem totalmente independente com sua própria especificação chamada ECMAScript, e agora não tem nenhuma relação com Java.

        Hoje, o JavaScript pode ser executado não apenas no navegador, mas também no servidor ou, na verdade, em qualquer dispositivo que tenha um programa especial chamado mecanismo JavaScript.

        O navegador possui um mecanismo incorporado às vezes chamado de "máquina virtual JavaScript".

        Motores diferentes tem "codinomes" diferentes. Por exemplo:

            V8 - Chrome, Opera E Edge

            SpiderMonkey - FireFx

            Chakra - IE

            JavaScriptCore, Nitro, SquirrelFlash - Safari

            ...

        É bom lembrar os termos acima porque eles são usados em artigos para desenvolvedores na internet. Também os usaremos. Por exemplo, se "um recursoX for suportado pelo V8", provavelmente funcionará no Chrome, Opera e Edge.

        -- NOTA --

            COMO FUNCIONAM OS MOTORES

            Os motores são complicados. Mas o básico é fácil.

                1 - O mecanismo(embutido se for um navegador) lê("analizæ") o script.

                2 - Em seguida, ele converte("compila") o script em código de máquina.

                3 - E então o código da máquina é executado, bem rápido.

            O mecanismo aplica otimizações em cada etapa do processo. Ele até observa o script compilado enquanto ele é executado, analisa os dados que fluem por ele e o otimizæ ainda mais o código da máquina com base nesse conhecimento.

    O QUE O LAVASCRIPT NO NAVEGADOR PODE FAZER

        O JavaScript moderno é uma linguagem de programação "segura". Ele não fornece acesso de baixo nivel à memoria ou à CPU, pois foi criado inicialmente para navegadores que não o exigem.

        Os recursos do JavaScript dependem muito do ambiente em que está sendo executado. Por exemplo, o Node.js oferece suporte que permitem que o JavaScript leia/escreva arquivos arbitrários, execute solicitações de rede etc.

        O JavaScript pode fazer tudo relacionado à manipulação da página da web, interação com o usuário e o servidor da web.

        Por exemplo, o JavaScript no navegador é capaz:

            Adicionar um HTML à página, mudar conteúdos existentes, modificar estilos.

            Reagir as ações do usuário, executar algo quando o mouse é clicado, eventos de ponteiro, ao precionar uma tecla etc.

            Enviar requisições pela rede para servidores remotos, baixar e atualizar arquivos(chamados AJAX e COMET).

            Pegar ou inserir informações no cookie do navegador, perguntar algo aos visitantes, mostrar mensagem.

            Pegar ou inserir informações pelo lado do cliente("local storage").

    O QUE O JAVASCRIPT NÃO PODE FAZER NO NAVEGADOR

        As habilidades do JavaScript no navegador são limitadas para proteger a segurança do usuário. O objetivo é impedir que uma página maliciosa acesse informações privadas ou prejudique os dados do usuário.

        Exemplos de tais restrições incluem:

            O JavaScript em uma página da Web não pode ler/gravar aquivos arbitrários no disco rígido, copiá-los ou executar programas.Ele não tem acesso às funções do sistema operacional.

            Os navegadores modernos permitem que ele trabalhe com mais arquivos, mas o acesso é limitado e fornecido apenas se o usuário realizær determinadas ações, como "soltar" um arquivo em uma janela do navegador ou selecioná-lo por meui de uma tag <input>

            Existem maneiras de interagir com a câmera/microfone e outros dispositivos, mas elas exigem permição explícita do usuário. Portanto, uma página habilitada para JavaScript não pode habilitar sorrateiramente uma camera da web, observar os aredores e enviar para a NSA.

            Diferentes guias/janelas geralmente não se conhecem. Às vezes, sim, por exemplo, quando uma janela usa JavaScript para abrir a outra. Mas mesmo neste caso, o JavaScript de uma página pode não acessar a outra página se vier de sites diferentes(de um domínio, protocolo ou porta diferente).

            Isso é chamado de "Política de Mesma Origem". Para contornar isso, ambas as páginas devem concordar com a troca de dados e devem conter o código JavaScript especial que lida com isso. Abordaremos isso no tutorial.

            Esta limitação é, novamente, para a segurança do susário. Uma página de um dominio X que o usuário abriu não deve conseguir acessar outra aba no navegador com outro domínio, por exemplo, e roubar informações dela.

            O JavaScript pode se comunicar facilmente pela rede com o servido de onde veio a página atual. Mas sua capacidade de receber dados de  outros sites/domínios é prejudicada. Embora possível, requer consentimento explìcito(expresso em cabeçalhos HTTP) do lado do remoto. Mais uma vez, isso é uma limitação de segurança.

        Essas limitações não existem se o JavaScript for usado fora do navegador, por exemplo, em um servidor. Os navegadores modernos também permitem plug-ins/extenções que podem solicitar permissões estendidas.

    O QUE TORNA O JAVASCRIPT ÚNICO

        Há pelo menos três grandes coisas sobre o JavaScript:

            1 - Integração completa com HTML/CSS

            2 - Coisas simples são feitas com siplicidade.

            2 - Compatível com todos os principais navegadores e ativo por padão.

        JavaScript é a única tecnologia de navegador que combina essas três coisas.

        Isso é o que torna o JavaScript único. É por isso que é a ferramenta mais difundida para criar interfaces de navegador.

        Dito isso, o JavaScript pode ser usado para criar servidores, aplicativo móveis, etc.   

    LINGUAGENS QUE PODEM USAR O TRANSPILADOR JAVASCRIPT

        A sintaxe do JavaScript não atende as necessidades de todos, Pessoas diferentes querem características diferentes.

        Isso é de se esperar, porque projetos e requisitos são diferentes para cada pessoa.

        Assim, recentemente surgiu uma infinidade de novas linguagens, que são transpiladas("convertidas") para JavaScript antes de serem executas no navegador.

        As ferramentas modernas tornam a transpilação muito rápida e transparente, permitindo que os desenvolvedores codifiquem em outro idioma e convertam-no automaticamente "sob o capô".

        Exemplos de tais linguagens:

            CoffeScript

            TypeScript

            Flow

            Dart(Dart Compiler (dart2js))

            Python(Brython)

            Kotlin(Kotlin/JS)

        Há mais. Claro, mesmo que usemoos uma dessas linguagens transpiladas, também devemos conhecer JavaScript para realmente entender o que estamos fazerndo.

    RESUMO

        - O JavaScript foi criado inicialmente como um linguagem exclusiva para navegadores, mas agora também é usado em muitos outros ambientes.

        - Hoje, o JavaScript ocupa uma posição única como a liguagem de navegador mais aplamente adotada, totalmente integrada ao HTML/CSS.

        - Existem muitas linguagens que são "transpiladas" para JavaScript e fornecem certos recursos. Recomenda-se dar uma olhada neles, pelo menos brevemente, depois que dominar JavaScript.
 */