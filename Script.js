document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
    
    function addToCart(event) {
        const product = event.target.closest('.product');
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('.price').innerText;
        
        // Aqui você pode adicionar o produto ao carrinho como desejar
        // Por exemplo, você pode adicionar ao localStorage, sessionStorage ou enviar para um servidor
        
        // Exemplo de adição ao localStorage:
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));
        
        alert('Produto adicionado ao carrinho!');
        
        // Redireciona para a página do carrinho
        window.location.href = "carrinho.html";
    }
});
