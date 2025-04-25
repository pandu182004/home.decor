const menubtn=document.getElementById("menu-btn");
const navlink=document.getElementById("nav-links");
const menubtnIcon=menubtn.querySelector("i");
menubtn.addEventListener("click",(e)=>{
    navlink.classList.toggle("open");

    const isopen=navlink.classList.contains("open");
    menubtnIcon.setAttribute("class",isopen ? "ri-close-line":"ri-menu-line");
});
navlink.addEventListener("click",(e)=>{
    navlink.classList.remove("open");
    menubtnIcon.setAttribute("class","ri-menu-line");
});
const navsearch=document.getElementById("nav-search");
navsearch.addEventListener("click",(e)=>{
    navsearch.classList.toggle("open");
})