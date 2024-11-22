# **Documentação Técnica**

## **1. Implementações**

### **1.1 Estrutura do Projeto**
A aplicação foi desenvolvida utilizando uma arquitetura modular, com os principais arquivos e funcionalidades descritos abaixo:

- **`App.jsx`**  
  - Gerencia o estado da aplicação, incluindo:
    - Lista de magias (`spells`).
    - Campo de pesquisa (`pesquisa`).
  - Inicializa o cache das magias usando o **localStorage**.
  - Faz a chamada inicial para a API para buscar dados atualizados.
  - Renderiza os componentes da interface, como o formulário de busca e os cartões de magias.

- **`SpellCard.jsx`**  
  - Responsável por exibir os detalhes de cada magia.
  - Implementa:
    - Transições visuais para exibir/ocultar a descrição.
    - Layout com informações detalhadas sobre a magia, como nível, escola e duração.

- **`API.js`**  
  - Contém funções para integrar a aplicação com a API externa.
  - Funções:
    - `getAllSpells`: Obtém a lista completa de magias e seus detalhes.

---

### **1.2 Fluxo de Implementação**
1. **Configuração Inicial**:
   - Setup do projeto com Vite.
   - Integração com TailwindCSS para estilização.
2. **Consumo da API**:
   - Utilização do Axios para gerenciar requisições HTTP.
   - Cache local implementado com **localStorage**.
3. **Componentização**:
   - Criação de componentes reutilizáveis, como `SpellCard` para modularidade.
4. **Estilização Responsiva**:
   - Uso de TailwindCSS para adaptar o design a diferentes tamanhos de tela.
5. **Melhorias de Desempenho**:
   - Implementação do cache para reduzir a dependência de chamadas constantes à API.

---

## **2. Documentação da API Utilizada**

### **2.1 Descrição**
A aplicação consome dados da [API oficial de D&D 5e](https://www.dnd5eapi.co), que fornece informações sobre magias, monstros, classes, entre outros recursos.

### **2.2 Endpoints Utilizados**
- **Lista de Magias**  
  **Endpoint**: `/api/spells`  
  - **Método**: `GET`  
  - **Resposta**: Retorna uma lista de magias com identificadores e URLs para detalhes individuais.  
  - **Exemplo de Resposta**:  
    ```json
    {
      "count": 319,
      "results": [
        {
          "index": "acid-arrow",
          "name": "Acid Arrow",
          "url": "/api/spells/acid-arrow"
        }
      ]
    }
    ```

- **Detalhes de uma Magia**  
  **Endpoint**: `/api/spells/{index}`  
  - **Método**: `GET`  
  - **Resposta**: Retorna os detalhes completos de uma magia.  
  - **Exemplo de Resposta**:  
    ```json
    {
      "index": "acid-arrow",
      "name": "Acid Arrow",
      "level": 2,
      "school": { "name": "Evocation" },
      "casting_time": "1 action",
      "range": "90 feet",
      "components": ["V", "S", "M"],
      "duration": "Instantaneous",
      "desc": ["A shimmering green arrow streaks toward a target..."]
    }
    ```

### **2.3 Integração**
A integração com a API foi feita no arquivo `API.js` usando **fetch** e **Promises**. A função principal utilizada foi:

```javascript
const BASE_URL = "https://www.dnd5eapi.co";

export async function getAllSpells() {
  const spellIndexes = await fetch(BASE_URL + "/api/spells").then((response) =>
    response.json()
  );
  return Promise.all(
    spellIndexes.results.map((index) =>
      fetch(BASE_URL + index.url).then((response) => response.json())
    )
  );
}
```

---

## **3. Documentação de Requisitos**

### **3.1 Requisitos Funcionais**
1. A aplicação deve permitir a pesquisa de magias pelo nome.
2. As magias devem ser exibidas em cartões com as seguintes informações:
   - Nome.
   - Nível.
   - Escola de magia.
   - Tempo de conjuração.
   - Alcance.
   - Componentes.
   - Duração.
3. A descrição da magia deve ser exibida/ocultada com um botão.
4. A lista de magias deve ser armazenada em cache utilizando o **localStorage**.
5. A interface deve ser responsiva, funcionando em diferentes dispositivos.

### **3.2 Requisitos Não Funcionais**
1. A aplicação deve ser desenvolvida utilizando as seguintes tecnologias:
   - React.
   - Vite.
   - TailwindCSS.
   - Axios ou Fetch para consumo da API.
2. O tempo de carregamento inicial das magias deve ser otimizado, utilizando cache local sempre que possível.
3. A interface deve ser simples, intuitiva e de fácil navegação.
4. As chamadas à API devem ser feitas de forma assíncrona, garantindo que a interface não trave durante o carregamento.
5. A aplicação deve seguir boas práticas de desenvolvimento, como:
   - Modularidade.
   - Componentização.
   - Uso de gerenciadores de estado adequados (ex.: `useState`).