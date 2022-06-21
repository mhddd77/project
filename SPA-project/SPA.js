import {Dashboard} from "./pages/dashbord.js"
import {Home} from "./pages/home.js"
import {Posts} from "./pages/posts.js"
import {Products} from "./pages/products.js"
const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav");

function router(){
    const routes =[
        {path : "/" , view :Home},
        {path : "/dashboard" , view :Dashboard},
        {path : "/products" , view :Products},
        {path : "/posts" , view : Posts}
    ];  
    const allRoutes = routes.map(item => {
        return{
            route : item,
            isMatch:  location.pathname === item.path
        };
    });
    // console.log(allRoutes);  
    let match  = allRoutes.find(item => item.isMatch)
    if(!match){
        match = {
        route :{path : "not-found" , view : Not },
        isMatch : true
        }
    }
    const content = document.querySelector(".content")
    content.innerHTML = match.route.view()
    // console.log(match.route.view())
}
function navigate(url){
    history.pushState(null,null,url)
    router();
}
window.addEventListener("popstate",router)
 
toggle.addEventListener("click",() =>{
    nav.classList.toggle("mini-sidebar")
})
document.addEventListener("DOMContentLoaded",() =>  {
    document.body.addEventListener("click",(e) => {
        // if(e.target.hasAttribute("data-link")){
        //     e.preventDefault();
        //     console.log(e.target.href)
        // }
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigate(e.target.href)
        }
    })
    router();
})