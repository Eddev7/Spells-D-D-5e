# Spells From D&D 5e

Uma aplicação web interativa para pesquisa e visualização de magias do universo Dungeons & Dragons 5ª edição, desenvolvida com tecnologias modernas como React, Vite e TailwindCSS.

---

## **Funcionalidades**

- 🔍 **Busca Dinâmica**: Filtre magias por nome em tempo real.  
- 📄 **Detalhamento Completo**: Visualize informações detalhadas, incluindo nível, escola, componentes, duração e descrição.  
- ⚡ **Desempenho Otimizado**: Cache de magias usando `localStorage` para carregamento rápido.  
- 📱 **Design Responsivo**: Interface adaptada para diferentes dispositivos e tamanhos de tela.  

---

## **Tecnologias Utilizadas**

- **[React](https://reactjs.org/)**: Biblioteca para construção da interface do usuário.  
- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida e eficiente.  
- **[TailwindCSS](https://tailwindcss.com/)**: Framework de CSS para estilização responsiva.  
- **[Axios](https://axios-http.com/)**: Cliente HTTP para consumo de APIs.  

---

## **Como Executar o Projeto**

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/spells-dnd5e.git
   cd spells-dnd5e
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**:
   Abra [http://localhost:5173](http://localhost:5173) no navegador.

---

## **Estrutura do Projeto**

- **`App.jsx`**:  
  Componente principal, gerencia a busca, renderização de magias e cache local.  
- **`SpellCard.jsx`**:  
  Componente de exibição, mostra os detalhes de cada magia.  
- **`API.js`**:  
  Arquivo responsável pelas requisições à API oficial de D&D 5e.  

---

## **API Utilizada**

A aplicação consome os dados da [API Oficial de D&D 5e](https://www.dnd5eapi.co).  
Principais endpoints utilizados:  
- `/api/spells`: Lista de todas as magias.  
- `/api/spells/{index}`: Detalhes de uma magia específica.  

---

## **Contribuindo**

Contribuições são bem-vindas!  
Para contribuir:  
1. Fork o projeto.  
2. Crie uma branch para sua funcionalidade:  
   ```bash
   git checkout -b minha-nova-funcionalidade
   ```  
3. Faça um commit das suas alterações:  
   ```bash
   git commit -m "Adicionei nova funcionalidade"
   ```  
4. Envie suas alterações:  
   ```bash
   git push origin minha-nova-funcionalidade
   ```  
5. Abra um pull request.

---

## **Licença**

Este projeto é licenciado sob a [MIT License](LICENSE).  

---

### **Autor**

Desenvolvido por **[Eddev7](https://github.com/Eddev7)**.  
