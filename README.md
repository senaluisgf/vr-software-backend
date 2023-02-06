<!-- # Programming Challenge -->
## Desafio VR Software - Backend

---
### Inicialização da Aplicação
#### Instalação de dependências

1. clone o repositório;
2. Caso tenha o docker instalado em sua máquina;
  2.1 basta executar o comando ```docker-compose up -d```.

3. Caso não possui o docker instalado;
    3.1 Execute o comando ```npm install```;
    3.2 Após a instalação dos pacotes, execute o comando ```npm start```.
---
### Executação da Aplicação
1. Para iniciar a aplicação, basta executar o comando ```docker-compose up -d``` ou ```npm start```.
1. A api ficará disponível na [porn inicial da aplicação](http://localhost:3000) (http://localhost:3000)
---
#### Desafios encontrados durante a realização do desafio
- **NestJs** - Já tenho certo domínio sobre o framework NestJs devido o contato que tive com desenvolmento de aplicações backend.

- **Postgres + Docker** - Já tenho certo domínio de bancos de dados relacionais como o Postgres. Trabalhando com o banco rodando em um container docker foi a solução que adotei pois considerei a mais prática de resolver.

#### Rotas Desenvolvidas
- **Listagem de cursos** - *GET http://localhost:3000/courses*
- **Listar apenas um curso** - *GET http://localhost:3000/courses/1*
- **Criação de cursos** - *POST http://localhost:3000/courses*
- **Edição de cursos** - *PUT http://localhost:3000/courses/1*
- **Remoção de curso** - *DELETE http://localhost:3000/courses*

- **Listagem de alunos** - *GET http://localhost:3000/students*
- **Listar apenas um aluno** - *GET http://localhost:3000/students/1*
- **Criação de alunos** - *POST http://localhost:3000/students*
- **Edição de alunos** - *PUT http://localhost:3000/students/1*
- **Remoção de aluno** - *DELETE http://localhost:3000/students*

- **Listagem de matrículas** - *GET http://localhost:3000/enrollments*
- **Listar apenas uma matrícula** - *GET http://localhost:3000/enrollments/1*
- **Criação de matrículas** - *POST http://localhost:3000/enrollments*
- **Edição de matrículas** - *PUT http://localhost:3000/enrollments/1*
- **Remoção de matrícula** - *DELETE http://localhost:3000/enrollments*
