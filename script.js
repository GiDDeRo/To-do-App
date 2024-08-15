const tasks = document.querySelector(".tasks")
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", e=> {
    if (input.value === "") {
        alert("You must write something!");
    } else {
        let inputText = document.createElement("p");
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        inputText.classList.add("task");
        inputText.innerHTML = input.value;
        tasks.appendChild(inputText);
        inputText.appendChild(span);

    save();
    }
    save();
    input.value = "";
});

tasks.addEventListener("click", e=> {
    e.target.classList.toggle("checked");
    if (e.target.tagName == "SPAN") {
        console.log(e.target.parentElement)
        e.target.parentElement.style.display = "none";
     save();
    }
}, false);

function save() {
    localStorage.setItem("data", tasks.innerHTML);
}

function showData() {
    tasks.innerHTML = localStorage.getItem("data");
}

showData();