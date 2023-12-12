document.addEventListener("DOMContentLoaded", function () {
    let fishCount = 0;
    let fishsPerSecond = 0;
    let activeUpgrade = null; // Variable to track the active upgrade
    let firstUpgradeBought = false; // Variable to track if the first upgrade has been bought
    const titles = ["Volunteer ", "Intern ", "Unpaid ", "Trainee ", "Junior ", "Entrepreneur ", "Freelancer ", "Hustler ", "Dimesaver ",  "Coinsaver ", "Cheap "];
    let playerName = prompt("Welcome to GigEcon Careers+! Enter your name and our friendly AI assistant Frampton will generate your employee nickname:");
    let randomTitle = titles[Math.floor(Math.random() * titles.length)]; // Randomly select a title
    let companyName = randomTitle + playerName;
    document.getElementById("companyName").innerText = companyName;
    const originalHTML = document.body.innerHTML;

const fishFacts = [
        "The gig economy represents a growing trend in the workforce, with individuals taking on multiple short-term jobs.",
        "Minimum wage varies by location and occupation, but it is always the least amount of money a person can legally pay you.",
        "Freelancing and remote work have become common, offering flexibility but also challenging job security.",
        "Side hustles can range from selling handmade crafts to providing freelance services online or in person.",
        "Entrepreneurs often juggle multiple responsibilities and roles to build and grow their businesses.",
        "The concept of a 'gig' in the gig economy comes from musicians who perform individual shows or gigs.",
        "Freelancers may face challenges such as inconsistent income and the need to manage their own taxes.",
        "Some gig workers use digital platforms to find jobs, creating a decentralized job market.",
        "Many gig workers have fallen for predatory scams on sites like LinkedIn and JobRecruiter.",
        "Having a second job makes it impossible to avoid burnout and maintain a work-life balance.",
        "The term 'side hustle' reflects the idea of pursuing additional income alongside a primary job.",
        "Workers in the gig economy often lack traditional employee benefits.",
        "Entrepreneurs often invest significant time and effort before seeing substantial financial returns.",
        "Wage disparities exist across industries, with some jobs offering higher hourly rates than others.",
        "Financial literacy is crucial for those managing multiple income streams to make informed financial decisions.",
"Mental health treatment is a crucial aspect of surviving having a second job.",
"Therapeutic interventions, such as counseling and psychotherapy, play a key role in helping individuals stay employed.",
"Support networks, including friends, family, and community, contribute significantly to the healing process from having two jobs.",
"Ongoing research and advancements in mental health contribute to the development of innovative therapies for people making money for shareholders.",
"Pralines, a delicious confection, originated in France and were later brought to America by French settlers in Louisiana.",
"Traditional pralines feature a combination of nuts, typically almonds or pecans, and sugar syrup, creating a sweet and nutty treat.",
"The name 'praline' is believed to have originated from French diplomat César, duc de Choiseul, whose chef created this delightful confection.",
"Pralines can vary in texture, with some recipes producing a smooth, creamy consistency, while others result in a harder, crunchier texture.",
"In the southern United States, particularly in New Orleans, pralines are a popular treat with distinct regional variations.",
"Some praline recipes incorporate additional ingredients such as chocolate, vanilla, or maple syrup, adding unique flavors to the candy.",
"Pralines are often associated with holidays, celebrations, and special occasions, making them a cherished and indulgent treat.",
"Louisiana celebrates National Pralines Day on June 24th, recognizing the significance of this sweet delicacy in the state's culinary heritage.",
"The art of making pralines requires precision in cooking the sugar syrup and achieving the right balance between sweetness and nuttiness.",
"Pralines have become a global sensation, with variations found in different cultures, each putting its own spin on this delightful confection.",
"The Bermuda Triangle, also known as the Devil's Triangle, is loosely defined by points in Miami, Bermuda, and Puerto Rico.",
"Numerous ships and airplanes have been reported missing under mysterious circumstances within the Bermuda Triangle.",
"The Bermuda Triangle gained notoriety after Flight 19, a squadron of five U.S. bombers, disappeared during a training flight in 1945.",
"The Bermuda Triangle myth was popularized by author Vincent Gaddis in a magazine article and later in his books during the 1960s.",
"Many scientists and experts dismiss the idea of the Bermuda Triangle as a site of unusual activity, attributing incidents to human error and natural phenomena.",
"Some theories suggest that magnetic anomalies in the Bermuda Triangle could affect compass readings and navigation systems, leading to confusion and accidents.",
"Despite its reputation, the Bermuda Triangle is heavily traveled by ships and airplanes every day without incident.",
"The Gulf Stream, a major ocean current, flows through the Bermuda Triangle, potentially affecting weather patterns and maritime activities.",
"The Bahamas, located within the Bermuda Triangle, is known for the 'Blue Holes,' underwater sinkholes that add to the area's mysterious reputation.",
"Popular culture often exaggerates and sensationalizes stories about the Bermuda Triangle, contributing to its enduring mystique."
];



const upgrades = [
    { name: "Busking", cost: 50, fishsPerSecond: 1, description: "Practice your instrument skills on the street. +$1 per hour.", action: unleashThem },
    { name: "Sign Spinning", cost: 200, fishsPerSecond: 2, description: "Stand on the side of the road and spin a cardboard arrow to advertise like a human signpost. +$2 per hour." },
    { name: "Go Canvassing", cost: 600, fishsPerSecond: 5, description: "Spend your day helping out local politicians. +$5 per hour." },
    { name: "Scavenge for Scrap Metal", cost: 1500, fishsPerSecond: 12, description: "Drive around and pick up trash you find on the side of the road other people are too lazy to take to the dump. +$12 per hour." },
    { name: "Remote Work", cost: 6000, fishsPerSecond: 20, description: "Churn out SEO content for an entertainment website while slowly learning to hate your favorite hobby. +$20 per hour." },
    { name: "Facebook Marketplace", cost: 12000, fishsPerSecond: 50, description: "Begin selling all the items you have in your home to strangers you meet at the Wal-Mart parking lot across from the bank. +$50 per hour." },
    { name: "Remote Work (With AI)", cost: 45000, fishsPerSecond: 120, description: "Learn how to use ChatGPT to get a slightly better-paying job online while churning out even more useless, unreadable garbage. +$120 per hour." },
    { name: "Start Tech Company", cost: 150000, fishsPerSecond: 260, description: "Use your new AI skills to lie to investors and present yourself as much more knowledgable and interesting than you are. +$260 per hour." },
    { name: "Invest in Bitcoin", cost: 490040, fishsPerSecond: 600, description: "Line only goes up. +$600 per hour" },
    { name: "Sell Your Tech Company", cost: 890040, fishsPerSecond: 900, description: "Line only goes up. +$900 per hour" },
    { name: "Invest in the Metaverse", cost: 2000000, fishsPerSecond: 2000, description: "YOU FOOL! THE METAVERSE IS A SCAM! YOU LOST ALL YOUR MONEY! GO BACK AND TRY TO NOT BE SO GREEDY NEXT TIME!", action: unleashThem }
];


function unleashThem() {
    // Clear the entire body content
    document.body.innerHTML = '';

    // Create a div for the message
    const messageDiv = document.createElement('div');
    messageDiv.innerText = upgrades[upgrades.length - 1].description;
    messageDiv.id = 'upgradeDescription'; // Assign an ID for styling if needed
    document.body.appendChild(messageDiv);

    // Create a div for the restart prompt
    const restartPrompt = document.createElement('div');
    restartPrompt.innerText = 'Do you want to restart the game?';

    // Create a button for restarting the game
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Restart';
    restartButton.onclick = function () {
        location.reload(); // Reload the page to restart the game
    };

    // Append the restart button to the restart prompt div
    restartPrompt.appendChild(restartButton);

    // Append the restart prompt to the body
    document.body.appendChild(restartPrompt);

    // Check if the action property is defined and callable
    const lastUpgrade = upgrades[upgrades.length - 1];
    if (lastUpgrade.action && typeof lastUpgrade.action === 'function') {
        lastUpgrade.action(); // Call the action function
    }
}




function displayfishCount() {
    document.getElementById("fishCount").innerText = fishCount + " dollars banked";
}

function displayfishsPerSecond() {
    document.getElementById("fishsPerSecond").innerText = fishsPerSecond + " dollars per hour";
}

function foragefish() {
    fishCount++;
    displayfishCount();
}

    function purchaseUpgrade(upgrade) {
        if (fishCount >= upgrade.cost && upgrade.visible) {
            fishCount -= upgrade.cost;

            // Only set the active upgrade to the latest purchase
            activeUpgrade = upgrade;

            fishsPerSecond = activeUpgrade.fishsPerSecond; // Set fishsPerSecond to the active upgrade
            displayfishCount();
            displayfishsPerSecond();
            displayUpgradeDescription(upgrade.description);

            
            // Check if the next upgrade is within the upgrades array and make it visible
            const indexOfUpgrade = upgrades.indexOf(upgrade);
            const nextUpgrade = upgrades[indexOfUpgrade + 1];
            if (nextUpgrade && !nextUpgrade.visible) {
                const upgradeButton = document.createElement("button");
                upgradeButton.className = "upgradeButton";
                upgradeButton.innerText = `${nextUpgrade.name} (Cost: ${nextUpgrade.cost} dollars)`;
                upgradeButton.onclick = function () {
                    purchaseUpgrade(nextUpgrade);
                };
                document.getElementById("upgradeButtons").appendChild(upgradeButton);
                nextUpgrade.visible = true;
                updateNextUpgrades();
            }

            if (upgrade.name === "Invest in the Metaverse") {
                unleashThem();
            }
            
        }
    }



function displayUpgradeDescription(description) {
    document.getElementById("upgradeDescription").innerText = description;
}

    function updateNextUpgrades() {
        const upgradeButtonsContainer = document.getElementById("upgradeButtons");
        upgradeButtonsContainer.innerHTML = ""; // Clear existing buttons

        for (let i = 0; i < upgrades.length; i++) {
            const upgrade = upgrades[i];
            if (fishCount >= upgrade.cost) {
                createUpgradeButton(upgrade, upgradeButtonsContainer);
            }
        }
    }

function createUpgradeButton(upgrade, container) {
    if (fishCount >= upgrade.cost) {
        const upgradeButton = document.createElement("button");
        upgradeButton.className = "upgradeButton";
        upgradeButton.innerText = `${upgrade.name} (Cost: ${upgrade.cost} dollars)`;
        upgradeButton.onclick = function() {
            if (fishCount >= upgrade.cost) {
                purchaseUpgrade(upgrade);
            }
        };
        container.appendChild(upgradeButton);
        upgrade.visible = true;
    } else {
        upgrade.visible = false;
    }
}


function updateNextUpgrades() {
    const upgradeButtonsContainer = document.getElementById("upgradeButtons");
    upgradeButtonsContainer.innerHTML = ""; // Clear existing buttons

    for (let i = 0; i < upgrades.length; i++) {
        const upgrade = upgrades[i];
        if (fishCount >= upgrade.cost) {
            createUpgradeButton(upgrade, upgradeButtonsContainer);
        }
    }
}





function initializeUpgradeButtons() {
    const upgradeButtonsContainer = document.getElementById("upgradeButtons");
    let visibleUpgrades = 2; // Number of initial visible upgrades

    // Check if upgrade buttons already exist, if not, create and append them
    if (upgradeButtonsContainer.children.length === 0) {
        for (let i = 0; i < upgrades.length; i++) {
            const upgrade = upgrades[i];
            if (i < visibleUpgrades) {
                createUpgradeButton(upgrade, upgradeButtonsContainer);
            } else {
                upgrade.visible = false;
            }
        }
    }
}

setInterval(updateNextUpgrades, 1000); // Check upgrades visibility every second


    let fishsPerSecondInterval; // Define the interval variable

    function updatefishsPerSecond() {
        fishCount += fishsPerSecond; // Add fishs per second to the total count
        displayfishCount(); // Update the displayed fish count
    }

    function displayRandomfishFact() {
        const randomFact = fishFacts[Math.floor(Math.random() * fishFacts.length)];
        document.getElementById("fishFacts").innerText = "Fun Fact: " + randomFact;
    }

    function startIntervals() {
        // Clear any existing intervals
        clearInterval(fishsPerSecondInterval);

        // Set the interval for updating fish count per second
        fishsPerSecondInterval = setInterval(updatefishsPerSecond, 1000);

        // Set the interval for displaying random fish facts
        setInterval(displayRandomfishFact, 7984);
    }

    // Initialize upgrade buttons after DOM is fully loaded
    initializeUpgradeButtons();

    // Resume the game
    startIntervals();
updateNextUpgrades();
document.getElementById("forageButton").addEventListener("click", foragefish);


    // Initialize upgrade buttons after DOM is fully loaded
    initializeUpgradeButtons();

    // Resume the game
    ;
});