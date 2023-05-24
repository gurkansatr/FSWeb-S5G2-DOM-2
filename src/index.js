
import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!
const titles =document.querySelectorAll("h2");
const images = document.querySelectorAll("img")
images.forEach(resim => {
    resim.addEventListener("mouseover",(event)=>{
        event.target.style.filter = "grayscale(100%)";
    })
    resim.addEventListener("mouseout",(event)=>{
        event.target.style.filter = "grayscale(0)";
    })
})

window.addEventListener("load", (event)=>{
setTimeout(() => {
    document.querySelector("body").style.background = "red"
}, "2000");
})
images.forEach(resim =>{
    resim.addEventListener("click",(event)=>{
        event.target.style.width="50%"
    })
    resim.addEventListener("dblclick",(event)=>{
        event.target.style.width="100%"
    })
})
window.addEventListener("keypress" , (event)=> {
    document.querySelectorAll()
})

window.addEventListener("resize" , (e) =>{
    if(window.outerWidth < 600){
        body.style.backgroundColor = "blue"
    }
})

titles.forEach(title => {
    let starting = 0;
    title.addEventListener("mouseover", () =>{
        title.style.letterSpacing = starting++ + "px";
    });
    title.addEventListener("mouseover", () =>{
        title.style.fontWeight = "bold";
        title.style.textTransform = "uppercase";
        title.style.color = `rgb(${Math.random() * 255},
        ${Math.random() * 255},${Math.random() * 255})`
    });
});