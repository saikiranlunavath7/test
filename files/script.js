
var typed = new Typed(".text", {
    strings: ["Programmer" , "Data Analyst" , "Cloud Architect"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})


