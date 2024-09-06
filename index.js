// Product A info
let productA = {
    emoji: "⭐",
    revenue: 200,
    commision: 50
}

// Product B info
let productB = {
    emoji: "🔥",
    revenue: 300,
    commision: 75
}

const toggle = document.getElementById('darkmode-toggle');

toggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', toggle.checked);
});

/* Variables of fire & star */
const star = document.getElementById("star")
const fire = document.getElementById("fire")
console.log(star)

/* live sales */
let liveSalesBoard = document.getElementById("live-sales")

/*live achievements board */
let liveAchievementsBoard = document.getElementById("live-achievements")
console.log(liveAchievementsBoard)
/* Total revenue board */
let totalRevenueBoard = document.querySelector(".total-revenue")
console.log(totalRevenueBoard)
/* Reset Data */
const resetData = document.querySelector(".reset-button")
console.log(resetData)



// functions 
function addStar() {
    liveSalesBoard.innerText += productA.emoji;
}

function addFire() {
    liveSalesBoard.innerText += productB.emoji;
}

function resetDataAll() {
    liveSalesBoard.innerText = ""
}

// add fire and star
star.addEventListener("click", addStar)
fire.addEventListener("click", addFire)
//reset data
resetData.addEventListener("click", resetDataAll)