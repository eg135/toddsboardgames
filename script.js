document.addEventListener("DOMContentLoaded", () => {
    const games = [
        { 
            name: "Atmosfear", 
            category: ["Comp"], 
            players: "3-6 Players", 
            image: "images/atmosfear.jpg", 
            link: "https://boardgamegeek.com/boardgame/337017/atmosfear-interactive-app-edition" 
        },
        { 
            name: "Castle Ravenloft", 
            category: ["Coop"], 
            players: "1-5 Players", 
            image: "images/castle_ravenloft.jpg", 
            link: "https://boardgamegeek.com/boardgame/59946/dungeons-and-dragons-castle-ravenloft-board-game" 
        },
        { 
            name: "Apples to Apples", 
            category: ["Party"], 
            players: "unlimited Players", 
            image: "images/apples_to_apples.jpg", 
            link: "https://boardgamegeek.com/boardgame/74/apples-to-apples" 
        },
    
        { 
            name: "Unlock!", 
            category: ["Coop", "Card"], 
            players: "1-6 Players", 
            image: "images/unlocked.jpg", 
            link: "https://boardgamegeek.com/boardgame/239307/unlock-secret-adventures" 
        },
        { 
            name: "Istanbul:Choose & Write", 
            category: ["Comp"], 
            players: "1-5 Players", 
            image: "images/istanbul.jpg", 
            link: "https://boardgamegeek.com/boardgame/379037/istanbul-choose-and-write" 
        },
        { 
            name: "Poo", 
            category: ["Comp", "Card"], 
            players: "2-8 Players", 
            image: "images/poo.jpg", 
            link: "https://boardgamegeek.com/boardgame/60579/poo-the-card-game" 
        },
        { 
            "name": "The Crew", 
            "category": ["Coop", "Card"], 
            "players": "3-5 Players", 
            "image": "images/the_crew.jpg", 
            "link": "https://boardgamegeek.com/boardgame/324856/the-crew-mission-deep-sea" 
        },
        { 
            "name": "Just One", 
            "category": ["Party"], 
            "players": "3-7 Players", 
            "image": "images/just_one.jpg", 
            "link": "https://boardgamegeek.com/boardgame/254640/just-one" 
        },
        { 
            "name": "Sky Team", 
            "category": ["Coop"], 
            "players": "2 Players", 
            "image": "images/sky_team.jpg", 
            "link": "https://boardgamegeek.com/boardgame/373106/sky-team" 
        },
        { 
            "name": "Here to Slay", 
            "category": ["Comp", "Card"], 
            "players": "2-6 Players", 
            "image": "images/here_to_slay.jpg", 
            "link": "https://boardgamegeek.com/boardgame/299252/here-to-slay" 
        },
        { 
            "name": "Venture", 
            "category": ["Party", "Card", "Comp"], 
            "players": "3-7 Players", 
            "image": "images/venture.jpg", 
            "link": "https://boardgamegeek.com/boardgame/208360/venture-party" 
        },
        { 
            "name": "Hawaiki", 
            "category": ["Comp", "Card"], 
            "players": "2-6 Players", 
            "image": "images/hawakiki.jpg", 
            "link": "https://boardgamegeek.com/boardgame/167579/hawaiki" 
        },
        { 
            "name": "Take Five (The Evil Game)", 
            "category": ["Comp", "Card"], 
            "players": "Unlimited", 
            "image": "images/take_five.jpg", 
            "link": "https://boardgamegeek.com/boardgame/432/take-5" 
        },
        { 
            "name": "Hero Realms", 
            "category": ["Comp", "Card"], 
            "players": "2-4 Players", 
            "image": "images/hero_realms.jpg", 
            "link": "https://boardgamegeek.com/boardgame/198994/hero-realms" 
        },
        { 
            "name": "Pop-Tarts", 
            "category": ["Comp", "Card"], 
            "players": "2-6 Players", 
            "image": "images/poptarts.jpg", 
            "link": "https://boardgamegeek.com/boardgame/313536/pop-tarts-game" 
        },
        { 
            "name": "Weed", 
            "category": ["Comp", "Card"], 
            "players": "2-8 Players", 
            "image": "images/weed.jpg", 
            "link": "https://boardgamegeek.com/boardgame/9227/weed" 
        },
        { 
            "name": "Scout", 
            "category": ["Comp", "Card"], 
            "players": "2-5 Players", 
            "image": "images/scout.jpg", 
            "link": "https://boardgamegeek.com/boardgame/291453/scout" 
        },
        { 
            "name": "Zombie Fluxx", 
            "category": ["Card"], 
            "players": "Unlimited", 
            "image": "images/zombie_fluxx.jpg", 
            "link": "https://boardgamegeek.com/boardgame/29387/zombie-fluxx" 
        },
        { 
            "name": "Kittens in a Blender w/ Expansion", 
            "category": ["Card"], 
            "players": "2-8 Players", 
            "image": "images/kittens_blender.jpg", 
            "link": "https://boardgamegeek.com/boardgame/115105/kittens-in-a-blender" 
        },
        { 
            "name": "Rum", 
            "category": ["Comp", "Gum"], 
            "players": "2-4 Players", 
            "image": "images/rum.jpg", 
            "link": "https://boardgamegeek.com/boardgame/192827/rum" 
        },
        { 
            "name": "Shh", 
            "category": ["Coop", "Gum"], 
            "players": "2-4 Players", 
            "image": "images/shh.jpg", 
            "link": "https://boardgamegeek.com/boardgame/164158/shh" 
        },
        { 
            "name": "Bus", 
            "category": ["Comp", "Gum"], 
            "players": "2-3 Players", 
            "image": "images/bus.jpg", 
            "link": "https://boardgamegeek.com/boardgame/164159/bus" 
        },
        { 
            "name": "Box", 
            "category": ["Coop"], 
            "players": "2-6 Players", 
            "image": "images/box.jpg", 
            "link": "https://boardgamegeek.com/boardgame/195455/box" 
        },
        { 
            "name": "TKO", 
            "category": ["Comp"], 
            "players": "2 Players", 
            "image": "images/tko.jpg", 
            "link": "https://boardgamegeek.com/boardgame/158917/tko" 
        },
        { 
            "name": "Star Realms", 
            "category": ["Comp", "Card"], 
            "players": "2 Players", 
            "image": "images/star_realms.jpg", 
            "link": "https://boardgamegeek.com/boardgame/147020/star-realms" 
        },
        { 
            "name": "Fluxx Board Game", 
            "category": ["Comp"], 
            "players": "2-4 Players", 
            "image": "images/fluxx_boardgame.jpg", 
            "link": "https://boardgamegeek.com/boardgame/140796/fluxx-the-board-game" 
        },
        { 
            name: "Everything Ever", 
            category: ["Unlimited", "Party", "Card"], 
            players: "Unlimited", 
            image: "images/everything_ever.jpg", 
            link: "https://boardgamegeek.com/boardgame/378295/everything-ever" 
        },
        { 
            name: "The Game", 
            category: ["Coop", "Card"], 
            players: "2-5 Players", 
            image: "images/the_game.jpg", 
            link: "https://boardgamegeek.com/boardgame/173090/game" 
        },
        { 
            name: "Guillotine", 
            category: ["Comp", "Card"], 
            players: "2-4 Players", 
            image: "images/guillotine.jpg", 
            link: "https://boardgamegeek.com/boardgame/116/guillotine" 
        },
        { 
            name: "Brandi Dog", 
            category: ["Team/Solo"], 
            players: "2-4 Players", 
            image: "images/brandi_dog.jpg", 
            link: "https://boardgamegeek.com/boardgame/24440/brandi-dog" 
        },
        { 
            name: "Invincible", 
            category: ["Dice Game"], 
            players: "2+ Players", 
            image: "images/invincible.jpg", 
            link: "https://boardgamegeek.com/boardgame/379338/invincible" 
        },
        { 
            name: "Codenames", 
            category: ["Party", "Coop"], 
            players: "2-8 Players", 
            image: "images/codenames.jpg", 
            link: "https://boardgamegeek.com/boardgame/178900/codenames" 
        },
        { 
            name: "In Kahoots", 
            category: ["Party"], 
            players: "3-6 Players", 
            image: "images/in_kahoots.jpg", 
            link: "https://boardgamegeek.com/boardgame/372752/kahoots" 
        },
        { 
            name: "Biotix", 
            category: ["Comp"], 
            players: "2-4 Players", 
            image: "images/biotix.jpg", 
            link: "https://boardgamegeek.com/boardgame/200785/biotix" 
        },
        { 
            name: "Fluxx", 
            category: ["Card", "Party"], 
            players: "Unlimited", 
            image: "images/fluxx.jpg", 
            link: "https://boardgamegeek.com/boardgame/258/fluxx" 
        },
        { 
            name: "Monty Python Fluxx", 
            category: ["Card", "Party"], 
            players: "Unlimited", 
            image: "images/monty_python_fluxx.jpg", 
            link: "https://boardgamegeek.com/boardgame/155177/monty-python-fluxx" 
        },
        { 
            name: "Stoner Fluxx", 
            category: ["Card", "Party"], 
            players: "Unlimited", 
            image: "images/stoner_fluxx.jpg", 
            link: "https://boardgamegeek.com/boardgame/85840/stoner-fluxx" 
        },
        { 
            name: "Fluxx Dice", 
            category: ["Card", "Party"], 
            players: "Unlimited", 
            image: "images/fluxx_dice.jpg", 
            link: "https://boardgamegeek.com/boardgame/176128/fluxx-dice" 
        },
        { 
            name: "The Mind Extreme", 
            category: ["Card"], 
            players: "2-4 Players", 
            image: "images/the_mind_extreme.jpg", 
            link: "https://boardgamegeek.com/boardgame/287139/mind-extreme" 
        },
        { 
            name: "Truth or Dare", 
            category: ["Card", "Party"], 
            players: "2+ Players", 
            image: "images/truth_or_dare.jpg", 
            link: "https://boardgamegeek.com/boardgame/303057/truth-or-dare" 
        },
        { 
            name: "Zombies Vs Wrestlers", 
            category: ["Dice", "Party"], 
            players: "2+ Players", 
            image: "images/zombies_vs_wrestlers.jpg", 
            link: "https://boardgamegeek.com/boardgame/186189/zombies-vs-wrestlers" 
        },
        { 
            name: "Five Crowns", 
            category: ["Card", "Comp"], 
            players: "2-7 Players", 
            image: "images/five_crowns.jpg", 
            link: "https://boardgamegeek.com/boardgame/124/five-crowns" 
        },
        { 
            name: "Stoner Loonacy", 
            category: ["Card", "Party"], 
            players: "2-5 Players", 
            image: "images/stoner_loonacy.jpg", 
            link: "https://boardgamegeek.com/boardgame/211093/stoner-loonacy" 
        },
        { 
            name: "Batman Dice", 
            category: ["Dice", "Comp"], 
            players: "2-4 Players", 
            image: "images/batman_dice.jpg", 
            link: "https://boardgamegeek.com/boardgame/194451/batman-dice" 
        },
        { 
            name: "Dino Hunt Dice", 
            category: ["Dice", "Comp"], 
            players: "2-4 Players", 
            image: "images/dino_hunt_dice.jpg", 
            link: "https://boardgamegeek.com/boardgame/150874/dino-hunt-dice" 
        },
        { 
            name: "Chupacabra", 
            category: ["Dice", "Comp"], 
            players: "2-4 Players", 
            image: "images/chupacabra.jpg", 
            link: "https://boardgamegeek.com/boardgame/137795/chupacabra-survive-night" 
        },
        { 
            name: "Zombie Dice", 
            category: ["Dice", "Comp"], 
            players: "2-4 Players", 
            image: "images/zombie_dice.jpg", 
            link: "https://boardgamegeek.com/boardgame/62871/zombie-dice" 
        },
        { 
            name: "Gloom", 
            category: ["Card", "Comp"], 
            players: "2-4 Players", 
            image: "images/gloom.jpg", 
            link: "https://boardgamegeek.com/boardgame/12692/gloom" 
        },
        { 
            name: "Piraten Kapern", 
            category: ["Comp", "Card"], 
            players: "2-5 Players", 
            image: "images/piraten_kapern.jpg", 
            link: "https://boardgamegeek.com/boardgame/126731/piraten-kapern" 
        },
        { 
            name: "Bell-Bottomed Badasses on the Mean Streets of Funk", 
            category: ["Comp", "Card"], 
            players: "2-6 Players", 
            image: "images/bell_bottomed_badasses.jpg", 
            link: "https://boardgamegeek.com/boardgame/37233/bell-bottomed-badasses-mean-streets-funk" 
        },
        
    
    ];
    

    const gameList = document.getElementById("game-list");
    const menuBtn = document.getElementById("menu-btn");
    const filterMenu = document.getElementById("filter-menu");
    const applyFiltersBtn = document.getElementById("apply-filters");

    function displayGames(filterCategories = []) {
        gameList.innerHTML = "";

        const filteredGames = filterCategories.length
            ? games.filter(game => filterCategories.includes(game.category))
            : games;

        filteredGames.forEach(game => {
            const card = document.createElement("div");
            card.classList.add("game-card");
            card.innerHTML = `
                <img src="${game.image}" alt="${game.name}">
                <h3>${game.name}</h3>
                <p>${game.category}</p>
                <a href="${game.link}" target="_blank" class="game-link">More Info</a>
            `;
            gameList.appendChild(card);
        });
    }

    menuBtn.addEventListener("click", () => {
        filterMenu.style.left = filterMenu.style.left === "0px" ? "-250px" : "0px";
    });

    applyFiltersBtn.addEventListener("click", () => {
        const selectedCategories = [...document.querySelectorAll('#filter-menu input:checked')]
            .map(checkbox => checkbox.value);
        displayGames(selectedCategories);
        filterMenu.style.left = "-250px"; // Menü kapansın
    });

    displayGames(); // İlk yükleme
});
