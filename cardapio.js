document.addEventListener("DOMContentLoaded", function() {

    function montarCarrinho() {

        let custo = 0;
        let extra = "";
        let opcionais = "";
        let descricao = "";

        // Itera sobre todos os checkboxes de produtos selecionados
        let produtosSelecionados = document.querySelectorAll('input[name="produto"]:checked');
        
        // Para cada produto selecionado, vamos somar o preço correspondente
        produtosSelecionados.forEach(function(produtoCheckbox) {
            let produto = produtoCheckbox.value;

            // Cálculo direto do custo do produto
            if (produto === "Batata Frita") {
                custo += 6.00;
                descricao += "   - Batata Frita - R$ 6.00<br>";
            } else if (produto === "Pipoca") {
                custo += 4.00;
                descricao += "   - Pipoca - R$ 4.00<br>";
            } else if (produto === "Amendoim") {
                custo += 3.50;
                descricao += "   - Amendoim - R$ 3.50<br>";
            } else if (produto === "Mix de Castanhas") {
                custo += 8.50;
                descricao += "   - Mix de Castanhas - R$ 8.50<br>";
            } else if (produto === "Biscoito") {
                custo += 2.50;
                descricao += "   - Biscoito - R$ 2.50<br>";
            } else if (produto === "Barrinha de Cereal") {
                custo += 2.00;
                descricao += "   - Barrinha de Cereal - R$ 2.00<br>";
            } else if (produto === "Chocolate") {
                custo += 5.00;
                descricao += "   - Chocolate - R$ 5.00<br>";
            } else if (produto === "Bala") {
                custo += 1.50;
                descricao += "   - Bala - R$ 1.50<br>";
            } else if (produto === "Chiclete") {
                custo += 1.00;
                descricao += "   - Chiclete - R$ 1.00<br>";
            } else if (produto === "Pirulito") {
                custo += 1.00;
                descricao += "   - Pirulito - R$ 1.00<br>";
            } else if (produto === "Gelatina") {
                custo += 1.75;
                descricao += "   - Gelatina - R$ 1.75<br>";
            } else if (produto === "Marshmallow") {
                custo += 3.00;
                descricao += "   - Marshmallow - R$ 3.00<br>";
            } 
            // Produtos Hortifruti
            else if (produto === "Banana") {
                custo += 2.50;
                descricao += "   - Banana - R$ 2.50<br>";
            } else if (produto === "Maçã") {
                custo += 3.00;
                descricao += "   - Maçã - R$ 3.00<br>";
            } else if (produto === "Laranja") {
                custo += 4.00;
                descricao += "   - Laranja - R$ 4.00<br>";
            } else if (produto === "Tomate") {
                custo += 5.00;
                descricao += "   - Tomate - R$ 5.00<br>";
            } else if (produto === "Alface") {
                custo += 3.50;
                descricao += "   - Alface - R$ 3.50<br>";
            } else if (produto === "Cebola") {
                custo += 2.20;
                descricao += "   - Cebola - R$ 2.20<br>";
            } else if (produto === "Cenoura") {
                custo += 3.80;
                descricao += "   - Cenoura - R$ 3.80<br>";
            } else if (produto === "Pepino") {
                custo += 2.00;
                descricao += "   - Pepino - R$ 2.00<br>";
            }
        });

        // Opcionais extras
        let embalagemOpcionalCheckbox = document.querySelector('input[name="opcionais-embalagem"]:checked');
        if (embalagemOpcionalCheckbox) {
            custo += 2.50;
            extra += "<br>   - Sacola Ecobag";
        }

        let cartaoOpcionalCheckbox = document.querySelector('input[name="opcionais-cartao"]:checked');
        if (cartaoOpcionalCheckbox) {
            custo += 1.00;
            extra += "<br>   - Sacola Plástica";
        }

        // Monta a descrição completa do pedido
        descricao += extra;

        // Dados do pedido em JSON:
        const pedidoJSON = {
            "descricao": descricao,
            "total": custo.toFixed(2)
        };

        const pedidoString = JSON.stringify(pedidoJSON);

        // Redireciona para pedido.html e envia os dados do pedido:
        window.location.href = `pedido?pedido=${pedidoString}`;
    }

    // Chama a função montarCarrinho ao clicar no botão
    const button = document.querySelector("button");
    button.addEventListener('click', montarCarrinho);
});
