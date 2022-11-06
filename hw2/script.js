class GoodsItem {
    constructor(title, price, image) {
        this.title = title;
        this.price = price;
        this.image = image;
    }

    render() {
        return `<div class="product-item"><div class="item-info"><h3>${this.title}</h3><p>${this.price}</p><button class="buy-btn">Купить</button></div><img src="${this.image}"></div>`
        // return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: "Blazer", price: 5000, image: "https://imgcdn.befree.ru/rest/V1/images/1024/product/images/2111035600/2111035600_50_1.webp" },
            { title: "Trousers", price: 3000, image: "https://ae04.alicdn.com/kf/S360ee83ddf14470bbf92a8995bfeb4e9g.jpg" },
            { title: "Hoodie", price: 2500, image: "https://shop-cdn1.vigbo.tech/shops/114929/products/20763072/images/2-f4ba2c5247aa1e6e0cfde51b3022c842.jpg" },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.image);
            listHtml += goodItem.render();
        });
        document.querySelector('.products').innerHTML = listHtml;
    }
    totalSum() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price;
        })
        console.log(sum);
    }
}

class Cart {
    constructor() {

    }
    addItem() {

    }
    removeItem() {

    }
    render() {

    }

    findSum() {

    }
}

class CartItem {
    constructor() {

    }
    render() {
        
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.totalSum();