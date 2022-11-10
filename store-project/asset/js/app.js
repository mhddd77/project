const basket = document.querySelector(".fa-cart-shopping")
const cover = document.querySelector(".cover")
const body = document.querySelector("body")
const cartBasket = document.querySelector(".shopping-cart")
const closeIcon = document.querySelector(".fa-xmark")
const basketNum = document.querySelector(".number")
const totalPrice = document.querySelector(".shopping-cart-price")
const removeAllCart = document.querySelector(".shopping-cart-remove-button button")

basket.addEventListener("click", () => {
    cartBasket.style.transform = "translateX(0px)"
    cover.style.display = "block"
})
closeIcon.addEventListener("click", () => {
    cartBasket.style.transform = "translateX(-1000px)"
    cover.style.display = "none"
})

let cart = []
class GetProducts {
    // async api() {
    //     try {
    //         const dataJson = await fetch("products.json")
    //         const data = await dataJson.json()
    //         const products = data.products
    //         return products
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    async api(){
        const dataJson = axios.get("products.json")
        return dataJson

    }
}

class ShowProducts {
    view(products) {
        let result = ''
        products.forEach(item => {
            // const element = document.createElement("div")
            // element.classList.add("col-sm-12","col-lg-4","cart")
            result += `<div class="col-sm-12 col-lg-4 cart">
        <div class="cart-img">
        <img class="img-res" src="${item.image}" alt=${item.title}>
    </div>
    <div class="cart-Description">
        <div class="cart-info">
            <span>${item.title}</span>
            <span>${item.price} $</span>
        </div>
        <div class="cart-btn">
            <button data-id = ${item.id} class="btn-add-to-cart">add to cart</button>
        </div>
    </div>
    </div>`
            // document.querySelector(".row").appendChild(element)
            document.querySelector(".row").innerHTML = result
        })
    }
    addToCart() {
        const btn = [...document.querySelectorAll(".btn-add-to-cart")]
        btn.forEach((item) => {
            const id = item.dataset.id
            const cartItem = { ...Storage.getProducts(id), amount: 1 }
            this.inCart()
            item.addEventListener("click", () => {
                cart.push(cartItem)
                this.numandprice(cart)
                this.showCart()
                this.inCart()
                Storage.saveCart(cart)
                // this.removeButtons()
            })
        })
    }
    numandprice(cart) {
        let totalNum = 0
        let totalPriceCart = 0
        cart.map((item) => {
            totalNum += item.amount
            totalPriceCart += item.price * item.amount
        })
        basketNum.textContent = totalNum
        totalPrice.innerHTML = `<h2> price: ${totalPriceCart} $</h2>`

    }
    showCart() {
        document.querySelector(".shopping-cart-js-loc").innerHTML = ""
        cart.forEach((item) => {
            const elementCart = document.createElement("div")
            elementCart.innerHTML = `
    <div class="shopping-cart-info">
        <div class="shopping-cart-product">
            <div class="shopping-cart-product-img">
                <img class="shopping-cart-img" src=${item.image} alt=${item.title}>
                <div>
                    <p>${item.title} </p>
                    <p>${item.price} $</p>
                    <p data-id =${item.id} class="remove-item">remove</p>
                </div>
            </div>
            <div class="shopping-cart-product-num">
                <span>${item.amount}</span>
                <div>
                    <i data-id =${item.id} class="fa-solid fa-plus"></i>
                    <i data-id =${item.id} class="fa-solid fa-minus"></i>
                </div>
            </div>
        </div>
    </div>`
            document.querySelector(".shopping-cart-js-loc").appendChild(elementCart)
        })
        this.removeButtons()
        this.addMines()
    }
    inCart(){
        const btn = [...document.querySelectorAll(".btn-add-to-cart")]
        btn.forEach((item) => {
            const id = item.dataset.id
            const x = cart.find((item) => item.id === id)
            if(x){
                item.textContent ="in cart"
                item.disabled =true 
            }else{
                item.textContent ="add to cart"
                item.disabled =false 
            }
        })
    }
    initApp() {
        cart = Storage.getCart()
        this.numandprice(cart)
        this.showCart()
        this.removeCart()
        // this.addToCart()
        // this.inCart()
    }
    removeCart() {
        removeAllCart.addEventListener("click", () => {
            cart.forEach((item) => {
                item.amount = 1
            })
            cart = []
            this.showCart()
            this.numandprice(cart)
            Storage.saveCart(cart)
            this.inCart()
        })
    }
    removeButtons() {
        const removeItem = [...document.querySelectorAll(".remove-item")]
        removeItem.forEach((item) => {
            const id = item.dataset.id
            const removeItem = cart.findIndex((item) => {
                return item.id === id
            })
            item.addEventListener("click", () => {
                cart.splice(removeItem,1)
                this.showCart()
                this.numandprice(cart)
                Storage.saveCart(cart)
                this.inCart()
            })
        })
    }
    addMines(){
        const plus = [...document.querySelectorAll(".fa-plus")]
        const minus = [...document.querySelectorAll(".fa-minus")]
        plus.forEach((item) => {
            const id = item.dataset.id
            const cartPlus = cart.find((item) => item.id === id)
            item.addEventListener("click",() => {
                cartPlus.amount++
                this.showCart()
                this.numandprice(cart)
                Storage.saveCart(cart)
            })
        })
        minus.forEach((item) => {
            const id = item.dataset.id
            const cartMines = cart.find((item) => item.id === id)
            item.addEventListener("click",() => {
                if(cartMines.amount > 1){
                    cartMines.amount--
                }
                this.showCart()
                this.numandprice(cart)
                Storage.saveCart(cart)
            })
        })
    }
}

class Storage {
    // static saveProducts(products) {
    //     localStorage.setItem("products", JSON.stringify(products))
    // }
    static saveProducts(products){
        localStorage.setItem("products",JSON.stringify(products))
    }
    static getProducts(id) {
        const products = JSON.parse(localStorage.getItem("products"))
        return products.find((item) => item.id === id)
    }
    static getProductsCrat(id) {
        const products = JSON.parse(localStorage.getItem("products"))
        return products.findIndex((item) => item.id === id)
    }
    static saveCart(cart) {
        localStorage.setItem("carts", JSON.stringify(cart))
    }
    static getCart() {
        return localStorage.getItem("carts")
            ? JSON.parse(localStorage.getItem("carts"))
            : []
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const show = new ShowProducts()
    const getDtat = new GetProducts()
    show.initApp()
    getDtat.api()
        .then(data => {
            console.log(data)
            show.view(data.data.products)
            Storage.saveProducts(data.data.products)
        }).then(() => {
            show.addToCart()
        })

})