const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const roll_container = $(".roll-container");
const inventory_container = $(".inventory");

const items = {
    special: {
        img: "https://csgostash.com/img/misc/rare_item.png",
        name: "Rare Special Item",
    },
    red: {
        usp: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_printstream_light_large.9f5bcd4f94db3d965b3b2e7c3aace470e9466380.png",
            name: "USP-S | Printstream",
        },
        awp: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_chroma_pink_light_large.afc69cbf51b04e24149744b6ee1d998cc18d3002.png",
            name: "AWP | Chromatic Aberration",
        },
    },
    pink: {
        ak47: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_cogthings_light_large.9b4678a70c315e5d60a203436b7a95cd4c5dcc89.png",
            name: "AK-47 | Ice Coaled",
        },
        sawedoff: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_kisslove_light_large.55dc07f073e8c5ce65f21e4fb5957625db7ba266.png",
            name: "Sawed-Off | Kiss Love",
        },
        p250: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_gs_p250_visions_light_large.a47ba6d191d3c734c3248667fb341a0e3f0c423e.png",
            name: "P250 | Visions",
        },
    },
    purple: {
        revolver: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_revolver_purple_elite_light_large.12a25ff5490bc9199a7ef870677455e42b9d8847.png",
            name: "R8 Revolver | Crazy 8",
        },
        dualberettas: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_cu_dual_elites_evil_flora_light_large.3afd7e8e7cf008e4b38a206b79adae3b9d0d7757.png",
            name: "Dual Berettas | Flora Carnivora",
        },
        sg553: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_cyber_dragon_light_large.563b70babc5251fe5df218140582cd0aa576701e.png",
            name: "SG 553 | Dragon Tech",
        },
        p90: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_tangled_light_large.d1c6b11dc6876f1cf546281df8b8fac68a037518.png",
            name: "P90 Vent Rush",
        },
        m249: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_cu_m249_downvote_light_large.9d51d5d89b1df07b160580b5b929f66f06bb8310.png",
            name: "M249 Downtown",
        },
    },
    blue: {
        glock18: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_gs_glock_elite_camo_light_large.00d135c0b32cabd8b48692d11794c830a9a4de5c.png",
            name: "Glock-18 | Winterized",
        },
        m4a4: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_elite_tactical_light_large.015fd86aa32f4f0331aa1b7dc2571d89dbf38671.png",
            name: "M4A4 | Poly Mag",
        },
        famas: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_gs_famas_corp_meow_light_large.7e27ced9616b1a4808cad37e8c0c653b9c866f07.png",
            name: "FAMAS | Meow 36",
        },
        galilar: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_galil_destroyer_light_large.00308096b32ca8c6252ed241878ca1ec5e743c36.png",
            name: "Galil AR | Destroyer",
        },
        mac10: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_monkeyflage_light_large.8f24ab7b33719d43a7d4e0886cb3f79d506e7068.png",
            name: "MAC-10 | Monkeyflage",
        },
        ump45: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_gs_ump_roadblock_light_large.d6b1372a575db666a8a7f039a39c05597d6cb60b.png",
            name: "UMP-45 | Roadblock",
        },
        negev: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_clear_sky_light_large.fc6f06d0f44e71207660f44b9b56021ce42a7e46.png",
            name: "Negev | Drop Me",
        },
    },
};

var inventory = [];

function add_items(preview = false) {
    let item_count = 26;
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
    let seed = Math.floor(Math.random() * 1000);
    let div = document.createElement("div");
    let img = document.createElement("img");
    let text = document.createElement("p");

    let item_name;
    let img_src;
    let bgc;

    if (seed <= 2) {
        item_name = items.special.name;
        img_src = items.special.img;
        bgc = "special-item";
    } else if (seed >= 3 && seed <= 9) {
        let seed2 = Math.floor(Math.random(seed) * 2);
        item_name = items.red[Object.keys(items.red)[seed2]].name;
        img_src = items.red[Object.keys(items.red)[seed2]].img;
        bgc = "covert";
    } else if (seed >= 10 && seed <= 39) {
        let seed2 = Math.floor(Math.random(seed) * 3);
        item_name = items.pink[Object.keys(items.pink)[seed2]].name;
        img_src = items.pink[Object.keys(items.pink)[seed2]].img;
        bgc = "classified";
    } else if (seed >= 40 && seed <= 199) {
        let seed2 = Math.floor(Math.random(seed) * 5);
        item_name = items.purple[Object.keys(items.purple)[seed2]].name;
        img_src = items.purple[Object.keys(items.purple)[seed2]].img;
        bgc = "restricted";
    } else if (seed >= 200 && seed <= 999) {
        let seed2 = Math.floor(Math.random(seed) * 7);
        item_name = items.blue[Object.keys(items.blue)[seed2]].name;
        img_src = items.blue[Object.keys(items.blue)[seed2]].img;
        bgc = "mil-spec";
    }

    div.classList.add("item");
    img.src = img_src;
    img.classList.add(bgc);
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
