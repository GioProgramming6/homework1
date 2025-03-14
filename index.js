let count = 0;

document.getElementById("increase").addEventListener("click", function () {
    count++;
    updateCounter();
});

document.getElementById("decrease").addEventListener("click", function () {
    count--;
    updateCounter();
});

document.getElementById("reset").addEventListener("click", function () {
    count = 0;
    updateCounter();
});

function updateCounter() {
    document.getElementById("count").textContent = count;
}
