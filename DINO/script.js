const girl = document.getElementById("girl");
const cloud = document.getElementById("cloud");
const crow = document.getElementById("crow");
const beet = document.getElementById("beet");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (girl.classList != "jump"){
        girl.classList.add("jump")
    }
    setTimeout(function() {
        girl.classList.remove("jump")
    }, 500)
}


let isAlive = setInterval ( function(){
    let girlTop = parseInt(window.getComputedStyle(girl).getPropertyValue("top"));
    let beetLeft = parseInt(window.getComputedStyle(beet).getPropertyValue("left"));

    if (beetLeft < 50 && beetLeft > 0 && girlTop >= 140) {
        alert("GAME OVER!!!")
    }
}, 10)

