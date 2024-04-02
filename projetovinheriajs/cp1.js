
var vinhos = [];
function adicionarVinho() {
    var nome = prompt("Nome do vinho:");
    var tipo = prompt("Tipo do vinho:");
    var safra = prompt("Safra do vinho:");
    var preco = parseFloat(prompt("Preço do vinho (em R$):"));

    var vinho = {
        nome: nome,
        tipo: tipo,
        safra: safra,
        preco: preco
    };

    vinhos.push(vinho);
    alert("Vinho adicionado com sucesso!");
}
function listarVinhos() {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    resultado.innerHTML = vinhos.length === 0 ? "Nenhum vinho adicionado ainda." : criarListaVinhos();
}
function criarListaVinhos() {
    return "<h2>Lista de Vinhos:</h2><ul>" + vinhos.map(criarItemVinho).join('') + "</ul>";
}
function criarItemVinho(vinho) {
    return "<li><strong>Nome:</strong> " + vinho.nome + "<br>" +
           "<strong>Tipo:</strong> " + vinho.tipo + "<br>" +
           "<strong>Safra:</strong> " + vinho.safra + "<br>" +
           "<strong>Preço:</strong> R$ " + vinho.preco.toFixed(2) + "</li><br>";
}