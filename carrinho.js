// Selecionando o carrinho e o botão "Limpar Carrinho"
const cart = document.getElementById('cart');
const cartItemsList = document.getElementById('cart-items');
const clearCartButton = document.getElementById('clear-cart');

// Adicionando evento de clique ao botão "Limpar Carrinho"
clearCartButton.addEventListener('click', clearCart);

// Função para adicionar item ao carrinho
function addItemToCart(id, title, price) {
    const cartItem = document.createElement('li');
    cartItem.dataset.id = id;
    cartItem.innerHTML = `
        ${title} - ${price}
        <button class="remove-item">Remover</button>
    `;
    cartItemsList.appendChild(cartItem);
    updateCartTotal();
}

// Função para atualizar o total do carrinho
function updateCartTotal() {
    const cartItems = cartItemsList.querySelectorAll('li');
    let total = 0;
    cartItems.forEach(cartItem => {
        const price = parseFloat(cartItem.innerText.split('-')[1].trim().replace('$', ''));
        total += price;
    });
    // Exibir total com duas casas decimais
    document.getElementById('cart-total').innerText = `Total: $${total.toFixed(2)}`;
}

// Função para limpar o carrinho
function clearCart() {
    cartItemsList.innerHTML = '';
    updateCartTotal();
}
