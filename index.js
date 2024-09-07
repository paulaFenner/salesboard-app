const users = [
    {
        img: "./images/picture.jpg" ,
        liveSalesBoard: "",
        liveAchievements: "",
        totalRevenue: 0,
        totalComission: 0,
        countElement: 0
    },
    {
        img: "./images/picture.jpg",
        liveSalesBoard: "",
        liveAchievements: "",
        totalRevenue: 0,
        totalComission: 0,
        countElement: 0
    },
    {
        img: "./images/andre.jpeg",
        liveSalesBoard: "",
        liveAchievements: "",
        totalRevenue: 0,
        totalComission: 0,
        countElement: 0
    }
]

let currentUserIndex = 0;

function loadUser(userIndex) {
    currentUserIndex = userIndex - 1;
    const user = users[currentUserIndex]
    document.getElementById("user-img").src = user.img;
    document.getElementById("live-sales").textContent = user.liveSalesBoard;
    // document.getElementById("live-achievements").textContent = user.liveAchievements;
    document.getElementById("total-revenue").textContent = user.totalRevenue;
    document.getElementById("total-comission").textContent = user.totalComission;

}

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
/* Total revenue board */
let totalRevenueBoard = document.getElementById("total-revenue")

let totalComissionBoard = document.getElementById("total-comission")

/* Reset Data */
const resetData = document.querySelector(".reset-button")

// variables
let maxElements = 13;
let countElement = 0;
let liveAchievements = 0;
let totalRevenue = 0;
let totalComission = 0;

// functions 
function addStar() {
    const user = users[currentUserIndex];

    if (user.countElement < 12) {
        user.liveSalesBoard += productA.emoji;
        user.totalRevenue += productA.revenue;
        user.totalComission += productA.commision;
        user.countElement++;
        // Atualiza a interface (DOM) com os novos valores
        liveSalesBoard.textContent = user.liveSalesBoard;
        totalRevenueBoard.textContent = user.totalRevenue;
        totalComissionBoard.textContent = user.totalComission;
    } else {
        alert ("Maximum of elements")
    }
}

function addFire() {
    const user = users[currentUserIndex];

    if (user.countElement < 12) {

        user.liveSalesBoard += productB.emoji;
        user.totalRevenue += productB.revenue;
        user.totalComission += productB.commision;
        user.countElement++
        //atualizar a DOM
        liveSalesBoard.innerText = user.liveSalesBoard;
        totalRevenueBoard.innerText = user.totalRevenue;
        totalComissionBoard.textContent = user.totalComission;

    } else {
        alert ("maximum of elements")
    }
}

function resetDataAll() {
    const user = users[currentUserIndex];
    user.totalRevenue = 0;
    user.totalComission = 0;
    user.liveSalesBoard = "";
    user.liveAchievements = ""
    user.countElement = 0;
    liveSalesBoard.innerText = user.liveSalesBoard;
    totalRevenueBoard.innerText = user.totalRevenue;
    totalComissionBoard.textContent = user.totalComission;

}

// add fire and star
star.addEventListener("click", addStar)
fire.addEventListener("click", addFire)
//reset data
resetData.addEventListener("click", resetDataAll)