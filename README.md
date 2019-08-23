# Tindev! - Servidor Backend

 Esse projeto foi desenvolvido na 8º Semana Omnistack promovida pela RocketSeat. Qualquer upgrade é bem vindo, só mandar um pull-request ;)

# Instalação

**Requisitos:** 

 - Git
 - NodeJS
 - Yarn

## Clonando o Repositório e Instalando

Copie o link do repositório e clone-o  na pasta de sua preferência:

    git clone https://github.com/matheus3301/tindev-backend.git

Em seguida instale todas as dependências do projeto com o gerenciador de pacotes de sua preferência(yarn ou npm):

    cd tindev-backend && npm install

![Repositorio](https://i.imgsafe.org/fe/fe85df3ab6.gif)

## Executando o Servidor

Após a instalação de todas as dependências execute o arquivo 'src/server.js', você pode executa-lo diretamente ou utilizar o Nodemon(já vem instalado no projeto), para tanto execute o seguinte comando:

    yarn dev

![Execução](https://i.imgsafe.org/fe/fe8d392731.gif)
 

# Conclusão

Após a execução de todos os passos anteriores o servidor vai estar rodando no seu localhost na porta :3333, o Banco de Dados utilizado é o MongoDB e está rodando na nuvem pelo Atlas, caso queira usar um DB Local basta alterar o arquivo **server.js** e editar a seguinte linha:

```javascript
	mongoose.connect(
		'<seubancodedados>',
		{
			useNewUrlParser:  true
		}
	);
```
 

