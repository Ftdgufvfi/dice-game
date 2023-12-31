document.querySelector("button").addEventListener("click",function(){
r1 = Math.floor(Math.random()*6)+1;
var a = document.querySelector(".img1");
a.setAttribute("src", "./dice"+r1+".png");
r2 = Math.floor(Math.random()*6)+1;
var b = document.querySelector(".img2");
b.setAttribute("src", "./dice"+r2+".png");
if(r1>r2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(r1<r2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}
})

