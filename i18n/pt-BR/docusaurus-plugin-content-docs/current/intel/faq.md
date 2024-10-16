---
title: Perguntas Frequentes (FAQ) / Solução de Problemas
---

## Como Adquirir Todos os Itens

A versão v6.1.0 introduziu suporte à progressão, o que significa que você pode agora desbloquear itens ao longo do jogo. Isso está **ativado por padrão**, para emular a experiência dos servidores oficiais.

Para desativar progressão e **adquirir imediatamente todos os itens**, modifique `enableMasteryProgression` no arquivo `options.ini` para `false`.

## Perguntas Frequents sobre Resolução de Problemas

### Antes da Resolução de Problemas

-   Veja a seção [Requerimentos](./requirements.md) deste guia, tenha a certeza de que você tem uma versão e plataforma compatíveis, etc.
    -   **A versão da Microsoft Store de Hitman 3 não é suportada (comumente perguntado)**.
    -   Veja o [Guia de Instalação de Linux](../guides/./linux-setup.md) se estiver usando Linux.
-   Tenha a certeza de que você tem as últimas versões do Hitman 3 e do Peacock, versões mais antigas podem não ser suportadas.

### Tente se Reconectar

-   Verifique se o Patcher está selecionado para a opção "Peacock Local" e não "IOI Official" quando estiver tentando se conectar ao Peacock.
-   Podem levar algumas tentativas para se conectar ao Peacock. Se não puder se conectar, tente voltar ao aplicativo inicializador do Peacock e clique em "Repatch", ou "Reinicializar", até que o inicializador mostre "Sucessfully patched ID", ou "ID inicializada com sucesso".
-   Se o jogo já está conectado aos servidores oficiais, você pode precisar desconectar o jogo antes para se conectar ao Peacock. Para se desconectar dos servidores oficiais, vá para "Options" no menu principal do Hitman 3, e depois em "Privacy Policy", e "Opt out". Quando você tentar se desconectar depois disso, você deverá estar no Peacock.
-   Similarmente, você pode ficar offline quando conectado ao Peacock, ativar a opção no inicializador do Peacock para voltar aos servidores oficiais, e clicar em ficar "online" novamente para se conectar aos servidores oficiais.
-   **Se você ainda estiver tendo problemas ao se conectar, continue na seção abaixo.**

### Problemas de Conexão

-   Como explicado na página [O Que é o Peacock](./what-is-peacock.md), **você precisa estar conectado à Internet, pelo menos inicialmente, para usar o Peacock**. Isso tem o único propósito de passar pela verificação Steam / Epic. Após conectar ao Peacock na primeira vez, você poderá desconectar da Internet e permanecer conectado ao Peacock pela duração da sua sessão de jogo.
    -   Se você tiver um celular com plano de Internet, você pode usá-lo como ponto de acesso de Internet para o seu computador se conectar.
-   Não tente usar o Peacock se esta for a sua primeira vez jogando o jogo. Você precisa se conectar aos servidores oficiais pelo menos uma vez antes de se conectar ao Peacock. Depois de ter conectado aos servidores oficiais pelo menos uma vez, você não precisa de fazê-lo novamente no futuro para usar o Peacock.
-   Tente rodar o `Start Server.cmd` como administrador.
-   Mantenha a opção "Use http instead of https" no Peacock ativada a não ser que esteja jogando o Modo Fantasma.

#### Porta em Uso

Se você estiver vendo um erro que se pareça com isso:

![Mensagem de erro emitida quando o Peacock tenta usar uma porta em uso](/img/wiki/port_in_use.png)

A mensagem de erro para esse problema vai ser algo parecido com "falha ao vincular o servidor à porta X".

Veja [este guia](../troubleshooting/fix-port-in-use.md) para uma explicação e instruções em como consertar.

## Outro

-   Veja a página de [Recursos Únicos do Peacock](../intel/loadout-profiles-elp.md) para mais informações em como ter múltiplos equipamentos por mapa ou escolher níveis de agravamento específicos.
-   Trajes Padrão - Se você ativar `getDefaultSuits = true` no seu arquivo `options.ini` na sua pasta de instalação do Peacock, por favor leia o seguinte comportamento:
    -   Qualquer discussão sobre "trajes padrão" abaixo se refere à versão do traje padrão **sem luvas** - qualquer versão do traje de 47 quando você inicia a missão pela primeira vez.
    -   Alguns trajes padrão de Hitman 2 e Hitman 3 não são usáveis em todos os mapas no jogo normalmente. Isso pode ser corrigido usando https://www.nexusmods.com/hitman3/mods/401
    -   Se você escolher não usar o mod acima, note o seguinte:
        -   Trajes padrão da Temporada 1 (e.g. Traje de Verão de Marrakesh): Funciona em todos os mapas
        -   Trajes padrão da Temporada 2 (e.g. Turista Casual de Santa Fortuna): Funciona em mapas da Temporada 2 e 3
            -   Nova Iorque e Maldivas (Haven) estão incluídas na Temporada 2
        -   Trajes padrão da Temporada 3 (e.g. Traje Urbano Neon de Chongqing): Funciona apenas em mapas da Temporada 3
        -   A Ilha Ambrose se encontra fora do sistema de temporadas, então seu traje padrão (Roupa de Mergulho de Guerrilha) é usável em todos os mapas, e os trajes padrão de qualquer mapa pode ser usado na Ilha Ambrose

### Solicitando Suporte Técnico

-   Questão não respondida no FAQ acima? Pergunte no canal do servidor Discord do Peacock `#help` (https://thepeacockproject.org/discord)
    -   Feche o Servidor Peacock. Então, execute `Tools.cmd` e pressione enter.
    -   Esteja pronto para providenciar o `DEBUG_PROFILE.zip` que encontrará no diretório Peacock depois disso.

## Como o Peacock Funciona FAQ

-   Veja [O que é o Peacock](./what-is-peacock.md)
    -   Veja o link acima por questões sobre integração do Freelancer com o Peacock, se você precisa ou não de internet para usar o Peacock ou qualquer outra questão geral sobre como o Peacock funciona

## Perguntas Frequentes sobre Solicitação de Recursos

-   Antes de perguntar qualquer coisa sobre o Modo Fantasma, Agravamentos, Contratos do Usuário e Alvos Elusivos, por favor verifique a [Página de Conteúdo Customizado](.././custom-content.md) assim como a [Página do Modo Fantasma](.././ghost-mode.md).
-   Compatibilidade com Mods: Quase todos os mods são compatíveis com o Peacock sem esforço adicional, incluindo mods de contratos e de itens desbloqueáveis. Alterações no menu do jogo podem às vezes ser incompatíveis, mas devem funcionar em sua maioria.

## Perguntas Frequentes sobre Pirataria
-   Não damos suporte a jogos pirateados.
-   Por quê?
    -   IOI está consciente que o Peacock existe e não se mostra hostil em relação ao projeto, e dar suporte à pirataria seria a forma mais rápida de mudar a situação e ter o projeto desligado, apagando mais de três anos de trabalho.
    -   O Peacock existe porque apreciamos a trilogia de jogos WoA, e queremos preservá-los. Não temos razões para apoiar qualquer ação que possa prejudicar a IOI financeiramente de forma significativa.
