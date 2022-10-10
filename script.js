const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const roll_container = $(".roll-container");
const inventory_container = $(".inventory");
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

var inventory = [];

function add_items(preview = false) {
    let item_count = 40;
    let winning_item;
    if (preview) item_count = 5;
    for (let i = 0; i < item_count; i++) {
        let item = generate_item();
        roll_container.appendChild(item.div);
        if (i == 22) winning_item = item;
    }
    return winning_item;
}

function update_inventory(x) {
    inventory_container.appendChild(x.div.cloneNode("deep"));
    inventory_container.scroll(0, inventory_container.scrollHeight);
}

function generate_item() {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let text = document.createElement("p");

    let item_name = words[Math.floor(Math.random() * 100)];
    let img_src = "https://picsum.photos/150?" + item_name;

    div.classList.add("item");
    img.src = img_src;
    text.innerText = item_name;

    div.appendChild(img);
    div.appendChild(text);

    return { div: div, img: img_src, name: item_name };
}

function generate_roll_offset() {
    let offset = Math.floor(Math.random() * (75 - -75) - 75);
    document.documentElement.style.setProperty("--roll_offset", offset + "px");
}

function clear() {
    let items = $(".roll-container").querySelectorAll(".item");
    items.forEach((e) => {
        e.remove();
    });
}

function roll() {
    if (roll_container.getAttribute("state") == "rolling") return;
    clear();
    winning_item = add_items();
    generate_roll_offset();

    roll_container.setAttribute("state", "rolling");
    roll_container.addEventListener(
        "animationend",
        () => {
            roll_container.setAttribute("state", "rolled");
            inventory.push(winning_item);
            update_inventory(winning_item);
        },
        { once: true }
    );
}

add_items(true);
