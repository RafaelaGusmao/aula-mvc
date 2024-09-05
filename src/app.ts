import express from 'express';
import cors from 'cors';
import { DatabaseModel } from './model/DatabaseModel';


//definnindo a porta servidor 
const port: number = 3333;

//criando servidor web
const server = express();
server.use(cors());
server.use(express.json());

//rotas da aplicação
server.get('/pessoas', (req, res) =>  {
  res.json({ mensagem: "Aqui será apresentado os dados das pessoas."});
});

server.get('/', (req, res) => {
    res.json({ mensagem: "Olá mundo, está é minha primeira aplicação web"});
});

new DatabaseModel().testeConexao().then((resdb) => {
   if (resdb) {
    console.log("conexao com banco de dados realizada com sucesso!");
  //iniciando o servidor 
server.listen(port, () => {
  console.log(`Servidor iniciando no endereço http://localhost:${port}`);
});

   }else{
    console.log("erro ao conectar com o banco de dados");
   }
});

