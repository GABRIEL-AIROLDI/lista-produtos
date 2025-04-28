
const produtos = document.querySelectorAll('.produto');
const carrinhoContainer = document.getElementById('carrinho');
const itensCarrinho = document.getElementById('itens-carrinho');
const totalElement = document.getElementById('total');
const finalizarCompraButton = document.getElementById('finalizar-compra');
const comprarButton = document.querySelector('.comprar');

let carrinho = [];


function adicionarAoCarrinho(id, nome, preco,img) {
    carrinho.push({ id, nome, preco, img });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    itensCarrinho.innerHTML = ''; 

    let total = 0;
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${item.img}">
                        <strong>${item.nome}</strong> <br> R$ ${item.preco.toFixed(2)}`;
        //li.textContent = `${item.nome} <br> R$ ${item.preco.toFixed(2)}`;
        itensCarrinho.appendChild(li);
        total += item.preco;
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

    if (carrinho.length > 0) {
        finalizarCompraButton.style.display = 'block';
    } else {
        finalizarCompraButton.style.display = 'none';
    }
}

comprarButton.addEventListener('click', () => {
    carrinhoContainer.style.display = 'block';
});

finalizarCompraButton.addEventListener('click', () => {
    alert('Compra finalizada!');
    carrinho = []; // Limpar carrinho
    atualizarCarrinho();
    carrinhoContainer.style.display = 'none';
});

produtos.forEach(produto => {
    const id = produto.dataset.id;
    const img = produto.querySelector('img').src;
    const nome = produto.querySelector('.ovotitulo').textContent;
    const preco = parseFloat(produto.querySelector('.preco').textContent.replace('R$ ', '').replace(',', '.'));

    const botaoAdicionar = produto.querySelector('.adicionar');
    botaoAdicionar.addEventListener('click', () => {
        adicionarAoCarrinho(id, nome, preco,img);
        carrinhoContainer.style.display = 'block';


    });
    	
});
