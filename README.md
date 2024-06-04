# Projeto: Fortalecendo Vozes

## Descrição

"Fortalecendo Vozes" é uma aplicação web desenvolvida para aumentar a visibilidade de trabalhadores informais. O projeto utiliza Angular 17 para o frontend, com testes unitários implementados em Jest, NestJS para o backend e MongoDB como banco de dados.

## Estrutura do Projeto

- **Frontend**: Desenvolvido em Angular 17
  - **Testes Unitários**: Jest
- **Backend**: Desenvolvido em NestJS
- **Banco de Dados**: MongoDB

## Requisitos

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js (versão 14 ou superior)
- Angular CLI
- MongoDB

### Configuração

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/fortalecendo-vozes.git
   cd fortalecendo-vozes
   ```

2. **Instale as dependências do frontend**

   ```bash
   cd frontend
   npm install
   ```

3. **Instale as dependências do backend**

   ```bash
   cd ../backend
   npm install
   ```

## Execução do Projeto

### Executar o Frontend

1. Navegue até o diretório do frontend:

   ```bash
   cd frontend
   ```

2. Inicie o servidor de desenvolvimento do Angular:

   ```bash
   ng serve
   ```

3. Abra o navegador e acesse `http://localhost:4200`.

### Executar o Backend

1. Navegue até o diretório do backend:

   ```bash
   cd backend
   ```

2. Inicie o servidor NestJS:

   ```bash
   npm run start
   ```

3. O servidor estará rodando em `http://localhost:3000`.

### Executar o MongoDB

Certifique-se de que o MongoDB está rodando em sua máquina local ou em um servidor acessível.

## Testes

### Testes Unitários do Frontend

1. Navegue até o diretório do frontend:

   ```bash
   cd frontend
   ```

2. Execute os testes unitários:

   ```bash
   npm run test
   ```

### Testes Unitários do Backend

1. Navegue até o diretório do backend:

   ```bash
   cd backend
   ```

2. Execute os testes unitários:

   ```bash
   npm run test
   ```

## Estrutura de Pastas

```plaintext
fortalecendo-vozes/
│
├── frontend/
│   ├── src/
│   ├── e2e/
│   ├── angular.json
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   ├── test/
│   ├── nest-cli.json
│   ├── package.json
│   └── ...
│
└── README.md
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Lucas Jesus e Bruna Somera - [lucassj.dev@gmail.com](mailto:lucassj.dev@gmail.com)

Link do Projeto: [https://github.com/luccastraumer/fortalecendo-vozes](https://github.com/luccastraumer/fortalecendo-vozes)

---

Desenvolvido por [Lucas Jesus](https://github.com/luccastraumer).