const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

async function get_words() {
    let words;
    const res = await fetch("./words.txt");
    return await res.text();
}

const e = $(".animation-container");

async function add_items() {
    let temp = await get_words();
    let words = temp.split("\r\n");
    for (let i = 0; i < 40; i++) {
        let div = document.createElement("div");

        div.classList.add("card");
        let img = document.createElement("img");

        img.src = "https://picsum.photos/150?" + i;
        let text = document.createElement("p");
        text.innerText = words[Math.floor(Math.random() * 100)];
        div.appendChild(img);
        div.appendChild(text);
        e.appendChild(div);
    }
}
function roll() {
    e.setAttribute("state", "rolling");
    e.addEventListener(
        "animationend",
        () => {
            e.setAttribute("state", "rolled");
        },
        { once: true }
    );
}

add_items();
