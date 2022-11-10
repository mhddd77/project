import text1 from "./home.js"
import text2 from "./about.js"
import text3 from "./call.js"
const content = document.querySelector(".content")

const navTo = (url) => {
    history.pushState(null,null,url)
    router()
}
const router = () => {
    const routes =[
        {path:"/" , viwe: text1},
        {path:"/about" , viwe:text2 },
        {path:"/call" , viwe: text3},
    ]
    const routPath =  routes.map((item) => {
        return {
            route : item,
            isMatch : location.pathname === item.path
        }
    })
    let match = routPath.find((item) => item.isMatch);
    if(!match){
        match ={
            route : routes[0],
            isMatch : true
        }
    }
    content.innerHTML = match.route.viwe()
    
}
window.addEventListener("popstate",router)

document.addEventListener("DOMContentLoaded",() =>{
    document.body.addEventListener("click",(e) => {
        if(e.target.matches('[data-link]')){
            e.preventDefault()
            navTo(e.target.href)
        }
    })
    router()

})