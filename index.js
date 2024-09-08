const users = [
  {
    img: './images/paula-avatar.jpeg',
    liveSalesBoard: '',
    liveAchievements: [], // Store achievements as an array
    totalRevenue: 0,
    totalComission: 0,
    countElement: 0,
    missingMoneyAchievement: true, // Track if '💰' has been earned
  },
  {
    img: './images/picture.jpg',
    liveSalesBoard: '',
    liveAchievements: [],
    totalRevenue: 0,
    totalComission: 0,
    countElement: 0,
    missingMoneyAchievement: true,
  },
  {
    img: './images/andre.jpeg',
    liveSalesBoard: '',
    liveAchievements: [],
    totalRevenue: 0,
    totalComission: 0,
    countElement: 0,
    missingMoneyAchievement: true,
  },
];

/* variables can be removed since we're using them to each user ✅(andre)
let maxElements = 13;
let countElement = 0;
let liveAchievements = [];
let totalRevenue = 0;
let totalComission = 0;
let currentUserIndex = 0; */

function loadUser(userIndex) {
  currentUserIndex = userIndex - 1;
  const user = users[currentUserIndex];
  document.getElementById('user-img').src = user.img;
  document.getElementById('live-sales').textContent = user.liveSalesBoard;
  document.getElementById('total-revenue').textContent = user.totalRevenue;
  document.getElementById('total-comission').textContent = user.totalComission;

  // Also update achievements when loading the user
  updateAchievementsDisplayAndCount();
}

// Product A info
const productA = {
  emoji: '⭐',
  revenue: 200,
  commision: 50,
};

// Product B info
const productB = {
  emoji: '🔥',
  revenue: 300,
  commision: 75,
};

// Handle dark mode toggle (optional)
const toggle = document.getElementById('darkmode-toggle');
toggle.addEventListener('change', function () {
  document.body.classList.toggle('dark-mode', toggle.checked);
});

/* Variables of fire & star */
const star = document.getElementById('star');
const fire = document.getElementById('fire');

/* Live sales */
const liveSalesBoard = document.getElementById('live-sales');
/* Live achievements board */
const liveAchievementsBoard = document.getElementById('live-achievements');
/* Total revenue board */
const totalRevenueBoard = document.getElementById('total-revenue');
/* Total commission board */
const totalComissionBoard = document.getElementById('total-comission');

/* Reset button */
const resetData = document.querySelector('.reset-button');

// Add Star and Fire functionality
star.addEventListener('click', addStar);
fire.addEventListener('click', addFire);
// Reset button functionality
resetData.addEventListener('click', resetDataAll);

// Functions for adding products
function addStar() {
  const user = users[currentUserIndex];
  if (user.countElement < 12) {
    user.liveSalesBoard += productA.emoji;
    user.totalRevenue += productA.revenue;
    user.totalComission += productA.commision;
    user.countElement++;

    // Update DOM with the new values
    liveSalesBoard.textContent = user.liveSalesBoard;
    totalRevenueBoard.textContent = user.totalRevenue;
    totalComissionBoard.textContent = user.totalComission;

    // Append achievements after adding a sale
    appendLiveAchievements();
  } else {
    alert('Maximum of elements');
  }
}

function addFire() {
  const user = users[currentUserIndex];
  if (user.countElement < 12) {
    user.liveSalesBoard += productB.emoji;
    user.totalRevenue += productB.revenue;
    user.totalComission += productB.commision;
    user.countElement++;

    // Update DOM with the new values
    liveSalesBoard.innerText = user.liveSalesBoard;
    totalRevenueBoard.innerText = user.totalRevenue;
    totalComissionBoard.textContent = user.totalComission;

    // Append achievements after adding a sale
    appendLiveAchievements();
  } else {
    alert('Maximum of elements');
  }
}

// Reset the data
function resetDataAll() {
  const user = users[currentUserIndex];
  user.totalRevenue = 0;
  user.totalComission = 0;
  user.liveSalesBoard = '';
  user.liveAchievements = [];
  user.countElement = 0;
  user.missingMoneyAchievement = true;

  liveSalesBoard.innerText = user.liveSalesBoard;
  totalRevenueBoard.innerText = user.totalRevenue;
  totalComissionBoard.textContent = user.totalComission;

  // Also update the achievements display
  updateAchievementsDisplayAndCount();
}

// ACHIEVEMENTS
function appendLiveAchievements() {
  const user = users[currentUserIndex];

  // Add achievements based on sales count and revenue
  if (user.countElement === 1 && !user.liveAchievements.includes('🔔')) {
    user.liveAchievements.push('🔔'); // Bell for the first sale
  }

  if (user.countElement === 12 && !user.liveAchievements.includes('🏆')) {
    user.liveAchievements.push('🏆'); // Trophy for 12 sales
  }

  if (user.totalRevenue >= 2500 && user.missingMoneyAchievement) {
    user.liveAchievements.push('💰'); // Money bag for $2500 revenue
    user.missingMoneyAchievement = false;
  }

  // Update the DOM with the new achievements
  updateAchievementsDisplayAndCount();
}

// Update achievements display
function updateAchievementsDisplayAndCount() {
  const user = users[currentUserIndex];
  const achievementsCountEl = document.getElementById('achievements-count');

  liveAchievementsBoard.textContent = user.liveAchievements.join(' ');
  achievementsCountEl.textContent = user.liveAchievements.length;
}
