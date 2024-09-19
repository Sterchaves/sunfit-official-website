const itensPerguntasERespostas = document.querySelectorAll(".category");

itensPerguntasERespostas.forEach(function(item) {
    const pergunta = item.querySelector(".pergunta"); // Seleciona a pergunta dentro da categoria
    const resposta = item.querySelector(".resposta"); // Seleciona a resposta correspondente

    pergunta.addEventListener("click", function() {
        // Remove a classe 'ativo' de todas as categorias
        itensPerguntasERespostas.forEach(function(otherItem) {
            otherItem.classList.remove("ativo"); // Remove a classe 'ativo' de todas as categorias
            const otherResposta = otherItem.querySelector(".resposta");
            if (otherResposta !== resposta) {
                otherResposta.style.display = "none"; // Fecha as outras respostas
            }
        });

        // Alterna a visibilidade da resposta atual
        if (resposta.style.display === "none" || resposta.style.display === "") {
            resposta.style.display = "block"; // Exibe a resposta clicada
            item.classList.add("ativo"); // Adiciona a classe 'ativo' ao item clicado
        } else {
            resposta.style.display = "none"; // Oculta a resposta se já estiver aberta
            item.classList.remove("ativo"); // Remove a classe 'ativo' se o item for fechado
        }
    });
});



