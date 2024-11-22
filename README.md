Spells From D&D 5e

Uma aplicação web interativa para pesquisa e visualização de magias do universo Dungeons & Dragons 5ª edição, desenvolvida com tecnologias modernas como React, Vite e TailwindCSS.
Funcionalidades

    🔍 Busca Dinâmica: Filtre magias por nome em tempo real.
    📄 Detalhamento Completo: Visualize informações detalhadas, incluindo nível, escola, componentes, duração e descrição.
    ⚡ Desempenho Otimizado: Cache de magias usando localStorage para carregamento rápido.
    📱 Design Responsivo: Interface adaptada para diferentes dispositivos e tamanhos de tela.

Tecnologias Utilizadas

    React: Biblioteca para construção da interface do usuário.
    Vite: Ferramenta de build rápida e eficiente.
    TailwindCSS: Framework de CSS para estilização responsiva.
    Axios: Cliente HTTP para consumo de APIs.

Como Executar o Projeto

    Clone o repositório:

git clone https://github.com/seu-usuario/spells-dnd5e.git
cd spells-dnd5e

Instale as dependências:

npm install

Execute o servidor de desenvolvimento:

    npm run dev

    Acesse a aplicação: Abra http://localhost:5173 no navegador.

Estrutura do Projeto

    App.jsx:
    Componente principal, gerencia a busca, renderização de magias e cache local.
    SpellCard.jsx:
    Componente de exibição, mostra os detalhes de cada magia.
    API.js:
    Arquivo responsável pelas requisições à API oficial de D&D 5e.

API Utilizada

A aplicação consome os dados da API Oficial de D&D 5e.
Principais endpoints utilizados:

    /api/spells: Lista de todas as magias.
    /api/spells/{index}: Detalhes de uma magia específica.

Contribuindo

Contribuições são bem-vindas!
Para contribuir:

    Fork o projeto.
    Crie uma branch para sua funcionalidade:

git checkout -b minha-nova-funcionalidade

Faça um commit das suas alterações:

git commit -m "Adicionei nova funcionalidade"

Envie suas alterações:

    git push origin minha-nova-funcionalidade

    Abra um pull request.

Licença

Este projeto é licenciado sob a MIT License.
Autor

Desenvolvido por Eddev7.