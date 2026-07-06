function getRandomColor() {
    let colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
    return colors[Math.floor(Math.random() * colors.length)];
}

let x = document.querySelector("#b1");
x.addEventListener("mouseover", function() {
    x.textContent = Math.floor(Math.random() * 10);
    x.style.backgroundColor = getRandomColor();
    x.style.color = "white";   
});
let y = document.querySelector("#b2");
y.addEventListener("mouseover", function() {
    y.textContent = Math.floor(Math.random() * 10);
    y.style.backgroundColor = getRandomColor();
    y.style.color = "white";
});
let z = document.querySelector("#b3");
z.addEventListener("mouseover", function() {
    z.textContent = Math.floor(Math.random() * 10);
    z.style.backgroundColor = getRandomColor();
    z.style.color = "white";
});
