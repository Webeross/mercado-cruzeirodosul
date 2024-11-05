const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Serve arquivos estáticos no diretório atual
app.use(express.static(__dirname));

// Rota para a página inicial
app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

// Rota para o cardápio
app.get('/cardapio', (req, res) => {
    fs.readFile(path.join(__dirname, 'cardapio_snacks.html'), (err, data) => {
        if (err) {
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

app.get('/cadastro', (req, res) => {
    fs.readFile(path.join(__dirname, 'cadastrar.html'), (err, data) => {
        if (err) {
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

app.get('/entrar', (req, res) => {
    fs.readFile(path.join(__dirname, 'entrar.html'), (err, data) => {
        if (err) {
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

// Rota para o cardápio hortifruti
app.get('/hortifruti', (req, res) => {
    fs.readFile(path.join(__dirname, 'cardapio_hortifruti.html'), (err, data) => {
        if (err) {
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

// Rota para pedidos
app.get('/pedido', (req, res) => {
    fs.readFile(path.join(__dirname, 'pedido.html'), (err, data) => {
        if (err) {
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

const PORT = 3050;
app.listen(PORT, () => {
    console.log(`[OK] - Servidor executando em: http://localhost:${PORT}`);
});
