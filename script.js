const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const roll_container = $(".roll-container");
const inventory_container = $(".inventory");

const gloves = [
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/studded_brokenfang_gloves_operation10_poison_frog_black_yellow_light_large.288cab790af6a199b856678af930756e2fbb27ed.png",
        name: "Broken Fang Gloves | Yellow-banded",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/studded_brokenfang_gloves_operation10_snakeskin_black_light_large.66371a4c81360f765a00c334492edeb05f2bbb79.png",
        name: "Broken Fang Gloves | Unhinged",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/studded_brokenfang_gloves_operation10_metalic_green_light_large.80a800c0b681384b0227d4125cd21c4e4df0469c.png",
        name: "Broken Fang Gloves | Jade",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/studded_brokenfang_gloves_operation10_floral_light_large.8738e4c5cf48aa1636acb8bd9888d4b12fe09df1.png",
        name: "Broken Fang Gloves | Needle Point",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/slick_gloves_slick_jaguar_white_light_large.232a00b09f3840949dd1390ccf64115c64577bc7.png",
        name: "Driver Gloves | Snow Leopard",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/slick_gloves_slick_stitched_black_white_light_large.40e9a843153a7b14540f53e1c34322ab9a4a08b5.png",
        name: "Driver Gloves | Black Tie",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/slick_gloves_slick_rezan_light_large.642934831085e8715a7e8072614f71f9fc0f205e.png",
        name: "Driver Gloves | Rezan the Red",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/slick_gloves_slick_jaguar_yellow_light_large.f706695fc1cc89762777696d24cd2e22f50582aa.png",
        name: "Driver Gloves | Queen Jaguar",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/leather_handwraps_handwrap_leathery_caution_light_large.6a56c7aca789dc705530e1720672ee59efd11c61.png",
        name: "Hand Wraps | CAUTION!",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/leather_handwraps_handwrap_leathery_snakeskin_orange_light_large.d22b23b2d86c4a419ce260b4186a2ef95ff0178a.png",
        name: "Hand Wraps | Constrictor",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/leather_handwraps_handwrap_fabric_houndstooth_orange_light_large.08248935a70031a18cb246f3e3ac2bc0d8d66339.png",
        name: "Hand Wraps | Desert Shamagh",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/leather_handwraps_handwrap_leathery_fabric_giraffe_light_large.0efe682dbf18aadb7bece5975acf5033df42765a.png",
        name: "Hand Wraps | Giraffe",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/motorcycle_gloves_motorcycle_smoke_light_large.3381b82109056ba823c0f09cb60152438d5e2b91.png",
        name: "Moto Gloves | Smoke Out",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/motorcycle_gloves_motorcycle_checker_flag_blue_green_light_large.d0a65fd2decfb2b5d4f8da4dfcd440771152d9fb.png",
        name: "Moto Gloves | Finish Line",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/motorcycle_gloves_motorcycle_carbonfiber_red_light_large.39abf522353dcb56cfd4ef4b95123d510600bfe1.png",
        name: "Moto Gloves | Blood Pressure",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/motorcycle_gloves_motorcycle_commando_ksk_light_large.0cfdc31fc06c9a989be1f7e77320eee3d608a307.png",
        name: "Moto Gloves | 3rd Commando Company",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_marble_fade_light_large.37eb14336eedfe6e346c46134d18ea87eea1bd0f.png",
        name: "Specialist Gloves | Marble Fade",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_fbi_light_large.1e314531001e6f78b6c3bf167a678b4aafc8d4c7.png",
        name: "Specialist Gloves | Field Agent",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_tiger_orange_light_large.7a97c601858dc5688aba6f3e1a769f1743d14bc8.png",
        name: "Specialist Gloves | Tiger Strike",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_ricksaw_camo_light_large.83c8da4fc79d723f693ca5c9a551847321d61fb4.png",
        name: "Specialist Gloves | Lt. Commander",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/sporty_gloves_sporty_slingshot_light_large.31d32b99c02474d3c39dff0999d53bdc1249586d.png",
        name: "Sport Gloves | Slingshot",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/sporty_gloves_sporty_jaguar_light_large.211eda01f38938c1a6e851aa45550c94d2fcab93.png",
        name: "Sport Gloves | Nocts",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/sporty_gloves_sporty_hunter_light_large.60a0a2143cfdf8bcd1e6198ecf04bed3ce082024.png",
        name: "Sport Gloves | Big Game",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/sporty_gloves_sporty_houndstooth_red_light_large.1e0753ba972edc22576bc39d52d890b6df45114a.png",
        name: "Sport Gloves | Scarlet Shamagh",
    },
];
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
            name: "P90 | Vent Rush",
        },
        m249: {
            img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_cu_m249_downvote_light_large.9d51d5d89b1df07b160580b5b929f66f06bb8310.png",
            name: "M249 | Downtown",
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
    if (x.special) {
        let temp = x.div.cloneNode("deep");
        temp.querySelector("img").src = x.special.img;
        temp.querySelector("p").innerText = x.special.name;
        inventory_container.appendChild(temp);
    } else {
        inventory_container.appendChild(x.div.cloneNode("deep"));
    }
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
    let special = undefined;

    if (seed <= 2) {
        item_name = items.special.name;
        img_src = items.special.img;
        bgc = "special-item";
        special = gloves[Math.floor(Math.random() * gloves.length)];
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

    return { div: div, img: img_src, name: item_name, special: special };
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

// const ele = $(".inventory");
// // ele.style.cursor = "grab";

// let pos = { top: 0, left: 0, x: 0, y: 0 };

// const mouseDownHandler = function (e) {
//     // ele.style.cursor = "grabbing";
//     // ele.style.userSelect = "none";

//     pos = {
//         left: ele.scrollLeft,
//         top: ele.scrollTop,
//         // Get the current mouse position
//         x: e.clientX,
//         y: e.clientY,
//     };

//     document.addEventListener("mousemove", mouseMoveHandler);
//     document.addEventListener("mouseup", mouseUpHandler);
// };

// const mouseMoveHandler = function (e) {
//     // How far the mouse has been moved
//     const dx = e.clientX - pos.x;
//     const dy = e.clientY - pos.y;

//     // Scroll the element
//     ele.scrollTop = pos.top - dy;
//     ele.scrollLeft = pos.left - dx;
// };

// const mouseUpHandler = function () {
//     // ele.style.cursor = "grab";
//     // ele.style.removeProperty("user-select");

//     document.removeEventListener("mousemove", mouseMoveHandler);
//     document.removeEventListener("mouseup", mouseUpHandler);
// };

// // Attach the handler
// ele.addEventListener("mousedown", mouseDownHandler);
