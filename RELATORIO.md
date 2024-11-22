Relatório Técnico – Aplicação Spells From D&D 5e
1. Introdução

O presente relatório técnico descreve o desenvolvimento de uma aplicação web denominada Spells From D&D 5e, projetada para exibir e pesquisar informações sobre magias do universo Dungeons & Dragons 5ª edição. A aplicação foi criada utilizando tecnologias modernas com foco em desempenho, escalabilidade e experiência do usuário.
2. Objetivo

O objetivo principal da aplicação é oferecer uma interface intuitiva para que os usuários possam:

    Pesquisar por magias de forma dinâmica.
    Visualizar detalhes como nível, escola de magia, tempo de conjuração, componentes e descrição.
    Acessar rapidamente informações relevantes através de um design responsivo e funcional.

3. Tecnologias Utilizadas
3.1 Ferramentas e Bibliotecas

    React: Utilizado para a construção da interface, gerenciando componentes reutilizáveis e o estado da aplicação.
    Vite: Ferramenta de build escolhida por sua alta performance no desenvolvimento e carregamento rápido.
    TailwindCSS: Framework de CSS para estilização com design responsivo e customizações simplificadas.
    Axios: Cliente HTTP utilizado para consumo eficiente da API oficial de D&D 5e.

3.2 API Externa

    D&D 5e API: Repositório de dados que fornece informações completas sobre magias, personagens, monstros, entre outros. Endereço base: https://www.dnd5eapi.co.

4. Funcionalidades
4.1 Busca Dinâmica

    Os usuários podem pesquisar magias pelo nome.
    O filtro é realizado em tempo real, utilizando a função includes para comparação de strings em diferentes caixas.

4.2 Exibição de Magias

    As magias são renderizadas em cartões individuais, que exibem:
        Nome da magia.
        Nível e escola de magia.
        Tempo de conjuração, alcance, componentes e duração.
        Descrição detalhada, exibida ao clicar em um botão.

4.3 Armazenamento Local

    As magias buscadas são armazenadas no localStorage para reduzir a quantidade de requisições à API, melhorando a performance e otimizando a experiência do usuário.

4.4 Design Responsivo

    A interface adapta-se automaticamente para diferentes dispositivos, proporcionando uma experiência consistente em desktops, tablets e smartphones.

5. Estrutura da Aplicação
5.1 Arquivos Principais

    App.jsx:
        Componente raiz responsável por:
            Gerenciar o estado global da aplicação (lista de magias e campo de pesquisa).
            Realizar o consumo inicial da API e cache dos dados no localStorage.
            Renderizar o formulário de pesquisa e a lista de magias.
    SpellCard.jsx:
        Componente que exibe as informações detalhadas de uma magia.
        Inclui botão para exibir/ocultar a descrição da magia com transição suave.
    API.js:
        Arquivo dedicado ao consumo da API.
        Função principal: getAllSpells, que faz uma requisição à lista de magias e busca os detalhes de cada uma.

5.2 Fluxo de Dados

    Ao iniciar a aplicação, o componente App.jsx verifica o localStorage.
    Caso os dados de magias estejam ausentes, faz uma requisição à API para buscar as informações.
    Os dados são armazenados no estado global e no localStorage.
    O componente SpellCard.jsx renderiza as magias conforme o estado do campo de pesquisa.

6. Resultados e Benefícios

    Performance Melhorada: O uso de localStorage reduz a latência, permitindo carregamento rápido das magias após a primeira execução.
    Design Moderno e Intuitivo: O uso de TailwindCSS simplificou a criação de uma interface amigável e responsiva.
    Integração de Dados Externos: O consumo da API externa garantiu dados precisos e consistentes.

7. Pontos de Melhorias Futuros

    Implementar paginação para listas extensas de magias.
    Adicionar filtros avançados, como nível de magia, escola de magia e tipo de componentes.
    Fornecer suporte para idiomas adicionais.
    Integrar autenticação de usuário para funcionalidades personalizadas, como magias favoritas.

8. Conclusão

O projeto Spells From D&D 5e demonstra como tecnologias modernas podem ser utilizadas para desenvolver aplicações eficientes e escaláveis. A integração com a API externa, combinada com boas práticas de cache e design, resultou em uma experiência otimizada e funcional para os usuários.