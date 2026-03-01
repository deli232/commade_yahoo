let cart = [];

// Initialisation
document.getElementById('date').valueAsDate = new Date();

// Ajouter au panier
function addToCart() {
    const date = document.getElementById('date').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const labo = document.getElementById('labo').value;
    const produit = document.getElementById('produit').value;
    const quantite = document.getElementById('quantite').value;

    if (!date || !email || !password || !labo || !produit || !quantite) {
        showMessage('Veuillez remplir tous les champs', 'error');
        return;
    }

    if (!email.includes('@')) {
        showMessage('Email invalide', 'error');
        return;
    }

    cart.push({date, email, password, labo, produit, quantite});
    updateCartDisplay();
    
    document.getElementById('produit').value = '';
    document.getElementById('quantite').value = '';
    showMessage('Produit ajouté !', 'info');
}

// Mettre à jour l'affichage du panier
function updateCartDisplay() {
    const cartSection = document.getElementById('cartSection');
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');

    if (cart.length === 0) {
        cartSection.style.display = 'none';
        return;
    }

    cartSection.style.display = 'block';
    cartCount.textContent = cart.length;

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="item-value">${item.labo}</div>
            <div class="item-value">${item.produit}</div>
            <span class="quantity-badge">${item.quantite}</span>
            <button class="delete-btn" onclick="removeFromCart(${index})">✕</button>
        </div>
    `).join('');
}

// Retirer du panier
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
    showMessage('Produit retiré', 'info');
}

// Vider le panier
function clearCart() {
    if (confirm('Vider le panier ?')) {
        cart = [];
        updateCartDisplay();
    }
}

// Soumettre toutes les commandes
async function submitAllOrders() {
    if (cart.length === 0) {
        showMessage('Panier vide !', 'error');
        return;
    }

    if (API_URL === 'VOTRE_URL_GOOGLE_APPS_SCRIPT_ICI') {
        showMessage('⚠️ Veuillez configurer l\'URL API dans config.js', 'error');
        return;
    }

    showMessage('Envoi en cours...', 'info');

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'submitOrders',
                orders: cart
            })
        });

        const result = await response.json();

        if (result.success) {
            showOrderNumber(result.orderNumber);
            showMessage('✅ Commande enregistrée !', 'success');
            cart = [];
            updateCartDisplay();
            document.getElementById('commandeForm').reset();
            document.getElementById('date').valueAsDate = new Date();
        } else {
            showMessage('❌ ' + result.message, 'error');
        }
    } catch (error) {
        showMessage('❌ Erreur: ' + error.message, 'error');
    }
}

// Afficher le numéro de commande
function showOrderNumber(orderNum) {
    const orderDiv = document.getElementById('orderNumber');
    orderDiv.innerHTML = `
        <div class="order-number">
            <h2>🎉 Numéro de commande</h2>
            <div class="order-num">${orderNum}</div>
            <p style="margin-top: 15px;">Conservez ce numéro</p>
        </div>
    `;
    orderDiv.style.display = 'block';
    setTimeout(() => orderDiv.style.display = 'none', 30000);
}

// Afficher un message
function showMessage(text, type) {
    const msg = document.getElementById('message');
    msg.className = 'message ' + type;
    msg.textContent = text;
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 5000);
}
