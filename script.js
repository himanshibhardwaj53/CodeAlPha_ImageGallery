var image = document.querySelectorAll("#images img");
var layer = document.querySelector("#layer");
var x = document.querySelector(".fa-x")
var mainimg = document.querySelector("#layer img");

var next = document.querySelector(".fa-arrow-right");
var previous = document.querySelector(".fa-arrow-left");

var index = 0;
image.forEach(a=>{
    a.addEventListener("click",(e)=>{
        layer.style.display = "flex";
        mainimg.src = e.target.src;


        

    });
});
x.addEventListener("click",()=>{
    layer.style.display = "none";

})


next.addEventListener("click",()=>{
    index++;
    if(index >=image.length-1){
        index = 0;
    }
    mainimg.src = `images/${index}.jpg`
})
previous.addEventListener("click",()=>{
    index--;
    if(index <0){
        index = image.length;
    }
    mainimg.src = `images/${index}.jpg`
});




