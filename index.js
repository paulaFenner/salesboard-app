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

let achievements = {
    bell: "🔔",
    money: "💰",
    trophy: "🏆"
}

const toggle = document.getElementById('darkmode-toggle');

toggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', toggle.checked);
});

/* Variables of fire & star */
const star = document.getElementById("star")
const fire = document.getElementById("fire")

/* live sales */
let liveSalesBoard = document.getElementById("live-sales")

/*live achievements board */
let liveAchievementsBoard = document.getElementById("live-achievements")
console.log(liveAchievementsBoard)
/* Total revenue board */
let totalRevenueBoard = document.querySelector(".total-revenue")
console.log(totalRevenueBoard)
let totalComissionBoard = document.querySelector(".total-comission")

/* Reset Data */
const resetData = document.querySelector(".reset-button")
console.log(resetData)

// variables
let maxElements = 13;
let countElement = 0;
let liveAchievements = 0;
let totalRevenue = 0;
let totalComission = 0;

// functions 
function addStar() {
    if (countElement < 12) {
        liveSalesBoard.innerText += productA.emoji;
        totalRevenueBoard.innerText = Number(totalRevenueBoard.innerText) + productA.revenue;
        totalComissionBoard.innerText = Number(totalComissionBoard.innerText) + productA.commision;
        countElement++ 
    } else {
        alert ("Maximum of elements")
    }
}

function addFire() {
    if (countElement < 12) {
        liveSalesBoard.innerText += productB.emoji;
        totalRevenueBoard.innerText = Number(totalRevenueBoard.innerText) + productB.revenue;
        totalComissionBoard.innerText = Number(totalComissionBoard.innerText) + productB.commision;
        countElement++; 
    } else {
        alert ("maximum of elements")
    }
}

function resetDataAll() {
    liveSalesBoard.innerText = "";
    liveAchievementsBoard.innerText = "";
    totalRevenueBoard.innerText = 0;
    totalComission.innerText = 0;
    totalComissionBoard.innerText = 0;
    countElement = 0;
}

// add fire and star
star.addEventListener("click", addStar)
fire.addEventListener("click", addFire)
//reset data
resetData.addEventListener("click", resetDataAll)