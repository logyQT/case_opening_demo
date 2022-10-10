const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const e = $(".animation-container");

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
