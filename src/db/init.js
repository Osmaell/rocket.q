// importando o arquivo config
const Database = require('./config');

// criando uma constante initDb
const initDb = {
    
    async init() {

        const db = await Database();

        // dentro do exec deve ser colocado o código para criar a tabela.
        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT 
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT
        )`);
        
        // fechando a conexão com o banco de dados
        await db.close();
    }

}

// chamando o initDb e executando a função init()
initDb.init();






