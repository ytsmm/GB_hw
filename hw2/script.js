const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

class productsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    } 
    render() {
        return `<div class="product-item"><h3>${this.product_name}</h3><p>${this.price}</p><button class="buy-btn">Купить</button></div>`
    }
}

class productsList {
    constructor(container = '.products') {
        this.container = container;
        this.products = [];
        this.getProducts()
            .then(data => {
                this.products = data;
                this.render()
            });
    }
    getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        let listHtml = '';
        this.products.forEach(product => {
            const productItem = new productsItem(product.product_name, product.price);
            listHtml += productItem.render();
        });
        document.querySelector('.products').innerHTML = listHtml;
    }
}

class Cart {
    constructor(container = '.cart-block') {
        this.container = container;
        this.products = [];
        this.clickCart();
        this.showProducts()
            .then(data => {
                this.products = data.contents;
                this.render()
            });
    }
    showProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        let listHtml = '';
        this.products.forEach(product => {
            const cartItem = new CartItem(product.product_name, product.price, product.quantity);
            listHtml += cartItem.render();
        });
        document.querySelector('.cart-block').insertAdjacentHTML('beforeend', listHtml);
    }
    totalSum() {
        let sum = 0;
        for (let product in this.products) {
            sum += product.price;
        }
        console.log(`Общая сумма корзины: ${sum}`);
    }
    clickCart() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart-block').classList.toggle('hidden');
        });
    }
}

class CartItem {
    constructor(product_name, price, quantity) {
        this.product_name = product_name;
        this.price = price;
        this.quantity = quantity;
        this.addItem();
        this.removeItem();
    }
    render() {
        return `<div class="cart-item"><div><h4>${this.product_name}</h4><p>${this.price}</p><p>${this.quantity}</p></div><div class="cart-item-btns"><button class="add-btn">+</button><button class="remove-btn">-</button></div></div><hr>`
    }
    addItem() {
        document.querySelectorAll('.add-btn')
            .forEach(btn => btn.addEventListener('click', () => {
                this.quantity += 1;
                console.log(this.product_name, this.quantity);
            }));       
    };
    removeItem() {
        document.querySelectorAll('.remove-btn')
            .forEach(btn => btn.addEventListener('click', () => {
                this.quantity += 1;
                console.log(this.product_name, this.quantity);
            }));       
    };
}

const products = new productsList();
products.getProducts();
products.render();

new Cart();
   