const search = document.querySelector("#search")
const productDom = document.querySelector(".product")
const btn = document.querySelectorAll("#btn")

let allProducts = [];
const filters = {
    searchItem: " "
}


document.addEventListener("DOMContentLoaded", () => {
    axios
        .get("http://localhost:3000/item")
        .then((res) => {
            allProducts = res.data;
            renderProduct(allProducts, filters)
        })
        .catch(error => console.log(error))
})

function renderProduct(_product, _filters) {
    const filterProduct = _product.filter(item => {
        return item.title.toLowerCase().includes(_filters.searchItem.toLowerCase())
    })
    productDom.innerHTML = ""
    filterProduct.forEach(item => {
        const productDiv = document.createElement("div")
        productDiv.innerHTML = ` <div class="col-xs-12 col-s-12 col-md-4 col-l4 col-xl-4">
    <div class="product-org">
    <div class="product-img img-res">
            <img src="${item.image}" alt="">
        </div>
        <div class="product-body">
            <p>${item.price}</p>
            <p>${item.title}</p>
        </div>
    </div>
</div>`
        productDom.appendChild(productDiv)
    });

}
search.addEventListener("input", (e) => {
    4
    // console.log(e.target.value)
    filters.searchItem = e.target.value;
    renderProduct(allProducts, filters)
})

//  
btn.forEach(p => {
    p.addEventListener("click",(e) =>{
        filters.searchItem = e.target.dataset.filter;
        renderProduct(allProducts,filters)
    })
})