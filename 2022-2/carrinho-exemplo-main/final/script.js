function adicionaProduto(nome, imagem, preco) {
  localStorage.setItem(nome, [nome, preco, imagem]);
  atualizaCarrinho();
}
function atualizaCarrinho() {
  count = document.getElementById("numero_carrinho");
  count.innerHTML = localStorage.length;
}

function getProdutos() {
  var valores = [],
    chaves = Object.keys(localStorage),
    i = chaves.length;

  while (i--) {
    valores.push(localStorage.getItem([chaves[i]]));
  }

  return valores;
}

function removeProduto(nome) {
  localStorage.removeItem(nome);
  atualizaCarrinho();
  location.reload();
}

function exibeProdutos() {
  let produtos = document.getElementById("produtos");
  let items = getProdutos();
  if (items.length == 0) {
    produtos.innerHTML = "Nenhum item no carrinho!";
  }
  for (let i = 0; i < items.length; i++) {
    let produto = document.createElement("div");
    produto.innerHTML = `
    <div class="card-produto-carrinho">
    <img class="imagem-produto"src="imagens/${items[i].split(",")[2]}" />

    <div class="col">
      <h2>${items[i].split(",")[0]}</h2>
      <h4>R$ ${items[i].split(",")[1]}</h4>
    </div>
    <button
            class="btn botao-remover"
            onclick="removeProduto('${items[i].split(",")[0]}')"
          >
            Remover do carrinho
          </button>
  </div>
  
    `;
    produtos.appendChild(produto);
  }
}

function exibeValores() {
  let items = getProdutos();
  let valores = document.getElementById("valores");
  for (let i = 0; i < items.length; i++) {
    let valor = document.createElement("div");
    valor.innerHTML = `
    <div class="row">
      <h5 class="pedido_item text-left">${items[i].split(",")[0]}</h5>
      <div class="col">
        <h5 class="pedido_preco text-right">R$ ${items[i].split(",")[1]}</h5>
      </div>
    </div>`;
    valores.appendChild(valor);
  }
}

function calculaTotal() {
  let items = getProdutos();
  let total = document.getElementById("total");
  let valor = 0;
  for (let i = 0; i < items.length; i++) {
    valor += parseFloat(items[i].split(",")[1]);
  }
  total.innerHTML = "R$ " + valor;
}

function finalizaPedido() {
  alert("Pedido finalizado com sucesso!");
  localStorage.clear();
  location.reload();
}

atualizaCarrinho();
exibeProdutos();
exibeValores();
calculaTotal();
