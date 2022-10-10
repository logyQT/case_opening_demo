const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const roll_container = $(".roll-container");

const words = [
    "colossal",
    "giddy",
    "standing",
    "taboo",
    "ablaze",
    "filthy",
    "many",
    "screeching",
    "shallow",
    "malicious",
    "nutritious",
    "sincere",
    "savory",
    "madly",
    "rough",
    "sudden",
    "magenta",
    "helpful",
    "willing",
    "incredible",
    "second",
    "unequal",
    "colorful",
    "daffy",
    "moaning",
    "muddled",
    "recondite",
    "bright",
    "vast",
    "married",
    "difficult",
    "lewd",
    "arrogant",
    "jittery",
    "violent",
    "kind",
    "gullible",
    "pastoral",
    "fortunate",
    "spotted",
    "silky",
    "polite",
    "trite",
    "homely",
    "tangy",
    "six",
    "breezy",
    "strange",
    "attractive",
    "mindless",
    "bumpy",
    "worthless",
    "invincible",
    "combative",
    "hapless",
    "bitter",
    "shut",
    "able",
    "accidental",
    "ill",
    "blue",
    "well-groomed",
    "demonic",
    "unique",
    "cloudy",
    "dull",
    "grotesque",
    "skillful",
    "thirsty",
    "ludicrous",
    "elastic",
    "gaping",
    "lying",
    "sparkling",
    "grubby",
    "pretty",
    "shivering",
    "horrible",
    "bite-sized",
    "learned",
    "ossified",
    "amazing",
    "chubby",
    "poor",
    "fierce",
    "substantial",
    "weary",
    "redundant",
    "intelligent",
    "jazzy",
    "petite",
    "level",
    "better",
    "alcoholic",
    "absorbed",
    "endurable",
    "acceptable",
    "understood",
    "halting",
    "efficacious",
];

function add_items(preview = false) {
    let item_count = 40;
    if (preview) item_count = 5;
    for (let i = 0; i < item_count; i++) {
        let div = document.createElement("div");

        div.classList.add("item");
        let img = document.createElement("img");

        img.src = "https://picsum.photos/150?" + Math.floor(Math.random() * 100);
        let text = document.createElement("p");
        text.innerText = words[Math.floor(Math.random() * 100)];
        div.appendChild(img);
        div.appendChild(text);
        roll_container.appendChild(div);
    }
}

function generate_roll_offset() {
    let offset = Math.floor(Math.random() * (75 - -75) - 75);
    document.documentElement.style.setProperty("--roll_offset", offset + "px");
    console.log(offset);
}

function clear() {
    let items = $$(".item");
    items.forEach((e) => {
        e.remove();
    });
}

function roll() {
    if (roll_container.getAttribute("state") == "rolling") return;
    clear();
    add_items();
    generate_roll_offset();

    roll_container.setAttribute("state", "rolling");
    roll_container.addEventListener(
        "animationend",
        () => {
            roll_container.setAttribute("state", "rolled");
        },
        { once: true }
    );
}

add_items(true);
