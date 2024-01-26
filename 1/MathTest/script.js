let button = document.getElementById("finish");
button.addEventListener("click", checkTest);
function checkTest() {
    let result = 0;

    let a1 = document.getElementById("q1").value;
    if (a1 === "4") {
        result++;
    }

    alert("Кол прав отв:" + result);
}