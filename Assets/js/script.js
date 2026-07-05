// ===============================
// Sree Stitching & Collection
// Main JavaScript
// ===============================

// Sticky Header Shadow
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
    }
});


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});


// Scroll Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.product-card").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>300?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// Product Search

const searchInput=document.getElementById("search");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let filter=searchInput.value.toLowerCase();

let products=document.querySelectorAll(".product-card");

products.forEach(card=>{

let txt=card.innerText.toLowerCase();

card.style.display=txt.includes(filter)?"block":"none";

});

});

}